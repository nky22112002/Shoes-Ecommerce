import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./LoginPage.module.scss";
import classNames from "classnames/bind";
import { useGlobalContext } from "../../components/GlobalContext";
const cx = classNames.bind(styles);

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useGlobalContext();
  const { user } = useGlobalContext();

  const navigate = useNavigate();
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        // Giả sử response trả về một đối tượng user
        console.log("username is:" + username);
        setUser(username); // Thiết lập user trong state cha
        navigate('/'); // Chuyển hướng đến Home với state là user
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setError('An error occurred. Please try again.');
    }
  };
  useEffect(() => {
    console.log("Received user:", user);
  }, [user]);
  return (
    <div className={cx('login-container')}>
      <h2 className={cx('login-title')}>Login</h2>
      {error && <p className={cx('error-message')}>{error}</p>}
      <form onSubmit={handleLogin} className={cx('login-form')}>
        <div className={cx('form-group')}>
          <label htmlFor="username" className={cx('form-label')}>Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={cx('form-input')}
          />
        </div>
        <div className={cx('form-group')}>
          <label htmlFor="password" className={cx('form-label')}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={cx('form-input')}
          />
        </div>
        <button type="submit" className={cx('btn', 'btn-primary')}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
