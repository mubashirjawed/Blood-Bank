import Swal from "sweetalert2";
import { auth } from "./firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the form from refreshing the page

    setIsLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (response) => {
        const uid = response.user.uid;
        localStorage.setItem("userId", uid);
        Swal.fire({
          title: "signUp completed",
          text: "do you want to containue",
          icon: "success",
        });
        navigate("/home");
      })
      .catch((error) => {
        Swal.fire({
          title: "The Internet?",
          text: error.message,
          icon: "question",
        });
      });
    setIsLoading(false);
  };

  return (
    <div className="bg-gradient-to-r from-red-500 to-red-400 hover:to-red-500 hover:from-red-400">
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            <span className="bg-gradient-to-r text-transparent from-red-500 to-red-400 bg-clip-text">
              Log In
            </span>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-start text-gray-700 text-sm font-bold mb-2"
              >
                <i className="fas fa-envelope mr-2" />
                Email
              </label>
              <div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-start text-gray-700 text-sm font-bold mb-2"
              >
                <i className="fas fa-lock mr-2" />
                Password
              </label>
              <div>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  id="password"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-red-500 to-red-400 hover:to-red-500 hover:from-red-400 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                {isLoading ? "logining wait..." : "Log In"}{" "}
              </button>
            </div>
          </form>
          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <a
              href="/signIn"
              className="text-red-400  font-bold hover:underline"
            >
              SignIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
