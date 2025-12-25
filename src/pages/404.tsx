import { NavLink } from "react-router";

function NotFound() {
    return (
        <div className="login-page">
            <NavLink to="/">Go to Home</NavLink>
            <p>Page not found</p>
        </div>
    );
}

export default NotFound;