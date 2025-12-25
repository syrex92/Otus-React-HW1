import { Link, useNavigate, type NavigateFunction } from "react-router";
import { useAppDispatch } from "../app/hooks";
import { addUser } from "../app/usersListSlice";

function handleRegister(event: React.FormEvent<HTMLFormElement>, dispatch: Function, navigate: NavigateFunction) {
  event.preventDefault();
  const email = (event.target as HTMLFormElement).email.value;
  const password = (event.target as HTMLFormElement).password.value;
  dispatch(addUser({ name: email, password: password }))
  navigate("/")
}

function Register() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <div className="register-page">
            <div className="links">
                <Link to="/">Go to Home</Link>
            </div>
            <h1>Register Page</h1>
            <form className="register-form" onSubmit={(event) => { handleRegister(event, dispatch, navigate) }}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;