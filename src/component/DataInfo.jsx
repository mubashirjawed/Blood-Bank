import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "./Navbar";

function DataInfo() {
  const [users, setUsers] = useState([]);
  const [searchBloodGroup, setSearchBloodGroup] = useState(""); // State for search input

  useEffect(() => {
    getuser();
  }, []);

  const getuser = async () => {
    const list = [];
    const dbSnap = await getDocs(collection(db, "detail"));
    dbSnap.forEach((item) => {
      list.push(item.data());
    });
    setUsers(list);
  };

  // Filter users based on the search input
  const filteredUsers = searchBloodGroup
    ? users.filter((user) => user.bloodGroup === searchBloodGroup)
    : users;

  return (
    <div className="bg-gray-100">
      <Navbar />
      {/* Search Bar */}
      <div className="bg-gray-100 p-4">
        <h2 className="text-2xl mb-4">Search by Blood Group</h2>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={searchBloodGroup}
          onChange={(e) => setSearchBloodGroup(e.target.value)}
        >
          <option value="">All Blood Groups</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
      </div>

      {/* Display Filtered Users */}
      <div className="bg-gray-100 m-6 rounded-lg shadow-lg border border-teal-300">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((item, index) => (
            <div
              key={index}
              className="border-b bg-gradient-to-r p-6 from-red-700 to-red-500 hover:to-red-700 hover:from-red-500 pb-4 "
            >
              <h1 className="text-xl font-bold text-white">
                Full Name: {item.fullName}
              </h1>
              <p className="text-white">
                {" "}
                Blood Group:{" "}
                <span className="font-semibold text-gray-500">
                  {item.bloodGroup}
                </span>
              </p>
              <p className="text-white">
                Phone:{" "}
                <span className="font-semibold text-gray-500">
                  {item.phone}
                </span>
              </p>
              <p className="text-white">
                Email:{" "}
                <span className="font-semibold text-gray-500">
                  {item.email}
                </span>
              </p>
              <p className="text-white">
                Address:{" "}
                <span className="font-semibold text-gray-500">
                  {item.address}
                </span>
              </p>
              <p className="text-white">
                Donation Date:{" "}
                <span className="font-semibold text-gray-500">
                  {item.donationDate}
                </span>
              </p>
              <p className="text-white">
                Additional Information:{" "}
                <span className="font-semibold text-gray-500">
                  {item.additionalInfo}
                </span>
              </p>
            </div>
          ))
        ) : (
          <p className="text-white">
            No users found with the selected blood group.
          </p>
        )}
      </div>
    </div>
  );
}

export default DataInfo;
