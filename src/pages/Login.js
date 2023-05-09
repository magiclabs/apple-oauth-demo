import { magic } from "../lib/magic";
import { FaApple } from "react-icons/fa";

const Login = () => {
  const handleSocialLogin = async () => {
    try {
      await magic.oauth.loginWithRedirect({
        provider: "apple",
        redirectURI: new URL("/dashboard", window.location.origin).href,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h1>Magic Auth + Apple</h1>
      <button onClick={handleSocialLogin}>
        <FaApple size={"2.5rem"} />
        Log in with Apple
      </button>
    </div>
  );
};

export default Login;
