import Swal from "sweetalert2";
import { db, auth } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault(); // for givining  default input

    setIsLoading(true); // for loading hook use
    await createUserWithEmailAndPassword(auth, email, password) // for acound created
      .then(async (response) => {
        const uid = response.user.uid;
        const userData = { name, email, uid }; // push which thing in fire store
        localStorage.setItem("userId", uid);
        await setDoc(doc(db, "user", uid), userData); //   method for passing data
        Swal.fire({
          // alart desgin
          title: "signUp completed",
          text: "do you want to containue",
          icon: "success",
        });
        navigate("/login");
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
              Sign In
            </span>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-start text-gray-700 text-sm font-bold mb-2"
              >
                <i className="fas fa-user mr-2" />
                Full Name
              </label>
              <div>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>
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
                {isLoading ? "Signing wait..." : "Sign In"}{" "}
              </button>
            </div>
          </form>
          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <a href="/login" className="text-red-400 font-bold hover:underline">
              login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
