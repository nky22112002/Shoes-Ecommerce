const express = require('express')
const morgan = require('morgan')
const mysql = require('mysql')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors());
app.use(morgan('combined'))
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "e_cormerce"
});

app.get("/", (req, res) => {
    const sql = "CALL selectedBestSeller()";
    db.query(sql, (err, data) => {
        if (err) {
            if (!res.headersSent) {
                return res.status(500).json({ err: err.message });
            }
        }
        if (!res.headersSent) {
            return res.json(data[0]);
        }
    });
});


app.post("/getTopProducts", (req, res) => {
    const { branchName } = req.body; // Lấy branchName từ request body
    if (branchName === undefined) {
        return res.status(400).json({ error: 'branchName is required' });
    }

    const sql = "CALL GetTopProducts(?);"; // Gọi stored procedure với tham số
    db.query(sql, [branchName], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json(results[0]); // Trả về mảng kết quả đầu tiên
    });
});


//Get data for Advertisement layout
app.get("/Ads", (req, res) => {
    const sql = "select * from ads";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json({ err: err.message });
        return res.json(data[0]); 
    });
});

//Get data for CTA layout
app.get("/CTA", (req, res) => {
    const sql = "select * from cta";
    db.query(sql, (err, data) => {
        if (err) {
            if (!res.headersSent) {
                return res.status(500).json({ err: err.message });
            }
        }
        if (!res.headersSent) {
            return res.json(data);
        }
    });
});

//Get data for insta-post layout
app.get("/insta-post", (req, res) => {
    const sql = "select * from insta_post";
    db.query(sql, (err, data) => {
        if (err) {
            if (!res.headersSent) {
                return res.status(500).json({ err: err.message });
            }
        }
        if (!res.headersSent) {
            return res.json(data);
        }
    });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log("Received login request:", username, password); // Thêm log để kiểm tra dữ liệu nhận được
    const sql = "SELECT * FROM account WHERE username = ? AND password = ?";
    db.query(sql, [username, password], (err, results) => {
        if (err) {
            console.error("Database query error:", err); // Log lỗi cơ sở dữ liệu
            return res.status(500).json({ error: err.message });
        }
        if (results.length > 0) {
            const user = results[0];
            res.json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ error: 'Invalid username or password' });
        }
    });
});
// Get special product
app.get("/specialProducts", (req, res) => {
    const sql = "CALL getSpecialProducts()";
    db.query(sql, (err, data) => {
        if (err) {
            if (!res.headersSent) {
                return res.status(500).json({ err: err.message });
            }
        }
        if (!res.headersSent) {
            return res.json(data[0]);
        }
    });
});
//Get banner
app.get("/banner", (req, res) => {
    const sql = "select * from banner";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json({ err: err.message });
        return res.json(data[0]); 
    });
});
//Get branch
app.get("/branch", (req, res) => {
    const sql = "select * from branch";
    db.query(sql, (err, data) => {
        if (err) {
            if (!res.headersSent) {
                return res.status(500).json({ err: err.message });
            }
        }
        if (!res.headersSent) {
            return res.json(data);
        }
    });
});
//Get category
app.get("/category", (req, res) => {
    const sql = "select * from category";
    db.query(sql, (err, data) => {
        if (err) {
            if (!res.headersSent) {
                return res.status(500).json({ err: err.message });
            }
        }
        if (!res.headersSent) {
            return res.json(data);
        }
    });
});
//Get and post products
app.post("/getProductsPaged", (req, res) => {
    const { selectedFilters } = req.body; 
    
    const sql = "CALL GetProductsPaged(?,?,?,?,20);"; // Gọi stored procedure với tham số
    db.query(sql, [selectedFilters.branch, selectedFilters.category, selectedFilters.price, selectedFilters.currentPage], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json(results[0]); // Trả về mảng kết quả đầu tiên
    });
});

app.post("/addToCart", (req, res) => {
    const { productId, user } = req.body;
    const sql = "CALL AddToCart(?, ?);";
    db.query(sql, [productId, user], (err, results) => {
            if (err) {
            console.error("Database query error:", err); // Log lỗi cơ sở dữ liệu
            return res.status(500).json({ error: err.message });
        }

        if (results[0] && results[0].length > 0) {
            const productCount = results[0][0].productCount;
            res.json({ productCount });
        } else {
            res.json({ message: 'Product successfully added to cart, but no result returned' });
        }
    });
});

//Get cart list nav
app.post("/getCartListNav", (req, res) => {
    const { user } = req.body;
    const sql = "CALL GetNavCartList(?);";
    db.query(sql, [user], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results[0]); // Trả về mảng kết quả đầu tiên
    });
});

// update cart list nav 
app.post("/updateCartListNav", (req, res) => {
    const { user, productId , action } = req.body;
    const sql = "CALL ManageCart(?, ?, ?);";
    db.query(sql, [user, productId, action], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
    });
});
// add to wish list
app.post("/addToWishList", (req, res) => {
    const { user, productId } = req.body;
    const sql = "CALL AddToWishList(?, ?);";
    db.query(sql, [user, productId], (err, results) => {
        if (err) {
            console.error("Database query error:", err); // Log lỗi cơ sở dữ liệu
            return res.status(500).json({ error: err.message });
        }

        if (results[0] && results[0].length > 0) {
            const wishListCount = results[0][0].wishListCount;
            res.json({ wishListCount });
        } else {
            res.json({ message: 'Product successfully added to wish list, but no result returned' });
        }
    });
});
    // get wish list
    app.post("/getWishList", (req, res) => {
        const { user } = req.body;
        const sql = "SELECT id_product FROM wishlist WHERE id_account IN (SELECT id FROM account WHERE username = ?)";
        db.query(sql, [user], (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results); // Always return results as an array
        });
    });
    app.post("/removeFromWishList", (req, res) => {
        const { user, productId } = req.body;
        const sql = `
            DELETE FROM wishlist 
            WHERE id_product = ? 
            AND id_account IN (SELECT id FROM account WHERE username = ?)
        `;
        db.query(sql, [productId, user], (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: 'Product removed from wishlist successfully' });
        });
    });
    app.post("/getProduct", (req, res) => {
        const { productId } = req.body;
        const sql = `select * from product where id = ?`;
        db.query(sql, [productId], (err, results) => {
            if (err) {
                if (!res.headersSent) {
                    return res.status(500).json({ err: err.message });
                }
            }
            if (!res.headersSent) {
                return res.json(results[0]);
            }
        });
    });
    app.post("/getProductDetails", (req, res) => {
        const { productId } = req.body;
        const sql = `select * from product_detail where id_product = ?`;
        db.query(sql, [productId], (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results); // Trả về mảng kết quả đầu tiên
        });
    });

app.listen(8081, () => {
  console.log("Listening....")
})
