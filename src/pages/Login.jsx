import React from 'react';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Welcome Back!</h1>
                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-input"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="signup-link">Don't have an account? <a href="#">Sign up</a></p>
            </div>
        </div>
    );
};

export default Login;

/* CSS in the same file */
const styles = `
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  font-family: Arial, sans-serif;
  margin: 0;
}

.login-card {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 400px;
}

.login-title {
  margin-bottom: 1.5rem;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
}

.form-input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.form-input:focus {
  outline: none;
  border-color: #4facfe;
  box-shadow: 0 0 5px rgba(79, 172, 254, 0.5);
}

.login-button {
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  background-color: #4facfe;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #00c3fe;
}

.signup-link {
  margin-top: 1rem;
  color: #333;
}

.signup-link a {
  color: #4facfe;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}
`;

export const addStyles = () => {
    const style = document.createElement('style');
    style.innerHTML = styles;
    document.head.appendChild(style);
};

addStyles();
