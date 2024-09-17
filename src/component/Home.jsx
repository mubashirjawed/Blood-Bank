import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  const [users, setUsers] = useState([]); // form database save item
  const [loggedInUser, setLoggedInUser] = useState(null); //checking uid of user

  useEffect(() => {
    const auth = getAuth();

    // Listen for authentication state changes
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedInUser(user.uid);
        // console.log('Logged in user UID:', user.uid); // Debugging log
        getuser();
      } else {
        // console.log('No user is logged in'); // Debugging log
      }
    });
  }, []);

  const getuser = async () => {
    const list = [];
    const dbSnap = await getDocs(collection(db, "user"));
    dbSnap.forEach((item) => {
      list.push(item.data());
    });

    setUsers(list);
    // console.log('Fetched users:', list); // Debugging log
  };

  return (
    <div>
      <div>
        <Navbar />
        <section className="mb-10">
          <div className="px-2 lg:flex lg:flex-row lg:items-center ">
            <div className="w-full lg:w-1/2">
              <div className="my-10 lg:my-0 lg:px-10">
                <h2 className="text-3xl font-bold leading-tight bg-gradient-to-r text-transparent from-red-700 to-red-500 bg-clip-text sm:text-4xl lg:text-5xl">
                  {users
                    .filter((item) => item.uid === loggedInUser)
                    .map((item) => (
                      <div className="" key={item.uid}>
                        <div>
                          <h1>Hello {item.name}!</h1>
                        </div>
                      </div>
                    ))}
                  Welcome to{" "}
                  <span className=" bg-gradient-to-r text-transparent from-red-800 to-red-700 bg-clip-text">
                    "Free Blood Bank"
                  </span>
                </h2>

                <form action="#" method="POST" className="mt-8 max-w-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <div className="flex w-full max-w-sm items-center space-x-2">
                      <button
                        type="button"
                        className="rounded-md bg-gradient-to-r from-red-700 to-red-500 hover:to-red-700 hover:from-red-500 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Get Start
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src="https://static.vecteezy.com/system/resources/previews/007/011/575/non_2x/world-blood-donor-day-poster-donor-blood-concept-illustration-background-for-world-blood-donor-day-free-vector.jpg"
                alt="ManWith Laptop"
                className="h- w-full rounded-xl mr-10 object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      {/* contect */}
      <div className="mt-6 px-12 py-8 md:px-10 md:py-10 bg-gray-100 ">
        <h1 className="bg-gradient-to-r text-transparent from-red-700 to-red-400 bg-clip-text text-xl sm:text-2xl md:text-3xl font-bold capitalize  lg:text-4xl py-4 font-sans">
          Contect Us
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
          <div className="space-y-3">
            <span className="inline-block rounded-full  p-3 bg-gradient-to-r text-transparent from-red-500 to-red-400 bg-clip-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-cart2  fill-gray-800  font-bold"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z" />{" "}
              </svg>
            </span>
            <h1 className="text-lg sm:text-2xl font-semibold capitalize text-gray-800">
              Become a foodpanda for business client
            </h1>
            <p className="text-sm sm:text-lg text-gray-800">
              Contect <br />
              <a className="underline" href="/">
                carporate@foodponda.pk
              </a>
            </p>
          </div>
          <div className="space-y-3">
            <span className="inline-block rounded-full  p-3 text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-cart2  fill-gray-800  font-bold"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 64c0 8.8-7.4 15.7-15.7 18.6C541.5 217.1 528 235 528 256s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6l0 64c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64l0-64c0-8.8 7.4-15.7 15.7-18.6C34.5 294.9 48 277 48 256s-13.5-38.9-32.3-45.4C7.4 207.7 0 200.8 0 192l0-64z" />
              </svg>
            </span>
            <h1 className="text-lg sm:text-2xl font-semibold capitalize text-gray-800">
              Order-related queries
            </h1>
            <p className="text-sm sm:text-lg text-gray-800">
              Contect <br />
              <a className="underline" href="/">
                carporate.sales@foodponda.pk
              </a>
            </p>
          </div>
          <div className="space-y-3">
            <span className="inline-block rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="40"
                height="40"
                fill="none"
                stroke="currentColor"
                className="lucide lucide-copy fill-gray-800"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z" />
              </svg>
            </span>
            <h1 className="text-lg sm:text-2xl font-semibold capitalize text-gray-800">
              List your restaurant
            </h1>
            <p className="text-sm sm:text-lg text-gray-800">
              Visit <br />
              <a className="underline" href="/">
                partnar.@foodponda.pk
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
