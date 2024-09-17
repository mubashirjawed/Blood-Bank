import React from "react";
import Navbar from "./Navbar";

function Doctor() {
  const doctors = [
    {
      name: "Dr. Ayesha Khan",
      qualification: "MBBS, FCPS (Hematology)",
      specialty: "Blood Disorders & Hematology",
      timing: "Monday to Friday, 9:00 AM - 2:00 PM",
      contact: "(555) 123-4567",
    },
    {
      name: "Dr. Salman Ali",
      qualification: "MD, PhD (Blood Pathology)",
      specialty: "Blood Pathology & Transfusion Medicine",
      timing: "Monday to Thursday, 10:00 AM - 3:00 PM",
      contact: "(555) 987-6543",
    },
    {
      name: "Dr. Sara Ahmed",
      qualification: "MBBS, MS (Hematology), DCP",
      specialty: "Blood Banking & Clinical Hematology",
      timing: "Monday to Saturday, 11:00 AM - 4:00 PM",
      contact: "(555) 246-1357",
    },
    {
      name: "Dr. Ahmed Raza",
      qualification: "MBBS, MRCPath (UK)",
      specialty: "Blood Pathology & Hemostasis",
      timing: "Monday to Friday, 8:00 AM - 1:00 PM",
      contact: "(555) 321-7654",
    },
    {
      name: "Dr. Fatima Zafar",
      qualification: "MBBS, FCPS (Clinical Hematology)",
      specialty: "Blood Cancers & Bone Marrow Transplant",
      timing: "Tuesday to Saturday, 10:00 AM - 3:00 PM",
      contact: "(555) 654-9871",
    },
    {
      name: "Dr. Nadia Usman",
      qualification: "MBBS, MD (Blood Pathology)",
      specialty: "Thalassemia & Anemia",
      timing: "Monday to Wednesday, 10:00 AM - 4:00 PM",
      contact: "(555) 876-5432",
    },
    {
      name: "Dr. Kamran Farooq",
      qualification: "MBBS, FCPS (Transfusion Medicine)",
      specialty: "Blood Transfusion & Donor Services",
      timing: "Tuesday to Friday, 9:30 AM - 2:30 PM",
      contact: "(555) 432-1567",
    },
    {
      name: "Dr. Hina Malik",
      qualification: "MBBS, FCPS (Hematology)",
      specialty: "Blood Cancer & Bone Marrow Transplant",
      timing: "Monday to Saturday, 11:00 AM - 5:00 PM",
      contact: "(555) 135-2468",
    },
    {
      name: "Dr. Zain Abbas",
      qualification: "MBBS, MS (Clinical Hematology)",
      specialty: "Rare Blood Disorders & Genetic Hematology",
      timing: "Monday to Thursday, 8:00 AM - 1:00 PM",
      contact: "(555) 753-9514",
    },
  ];

  return (
    <div>
      <Navbar />
      <div>
        <div className="doctor-list grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="doctor-card p-6  border-red-200 border-2  rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r text-transparent from-red-500 to-red-400 bg-clip-text mb-2 ">
                {doctor.name}
              </h2>
              <p className="text-gray-600 mb-1">
                <strong>Qualification:</strong> {doctor.qualification}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Specialty:</strong> {doctor.specialty}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Clinic Hours:</strong> {doctor.timing}
              </p>
              <p className="text-gray-600">
                <strong>Contact:</strong> {doctor.contact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctor;
