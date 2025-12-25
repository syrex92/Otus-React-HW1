import { Button } from "react-bootstrap";
import { Link } from "react-router";

function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    alert("Login submitted!");
}

function Login() {
    return (
        <div className="login-page">
            <div className="links">
                <Link to="/">Go to Home</Link>
            </div>
            <h1>Login Page</h1>
            <form className="login-form" onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <Button type="submit"/>
            </form>
        </div>
    );
}

export default Login;