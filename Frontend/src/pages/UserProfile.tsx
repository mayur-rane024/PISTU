import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiEdit2, FiSave } from "react-icons/fi";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface UserProfileState {
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  mobileNumber: string;
  gender: string;
  address: string;
  isEditing: boolean;
  errors: { [key: string]: string };
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<UserProfileState>({
    email: "ranemayuresh075@gmail.com",
    firstName: "Mayuresh",
    lastName: "Rane",
    dateOfBirth: "",
    mobileNumber: "",
    gender: "male",
    address: "Bld No 7, Flr No6, Ekta hsg society, Purnanagar, Chinchwad, Pune-19, Pune, 411019",
    isEditing: false,
    errors: {},
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("UserProfile component mounted");
    // Simulate data loading
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000); // Remove this in production
  }, []);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!user.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!user.dateOfBirth) newErrors.dateOfBirth = "Date of Birth is required";
    if (!user.mobileNumber || !/^\d{10}$/.test(user.mobileNumber))
      newErrors.mobileNumber = "Valid 10-digit Mobile Number is required";
    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value, errors: { ...prev.errors, [name]: "" } }));
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, gender: e.target.value, errors: { ...prev.errors, gender: "" } }));
  };

  const toggleEdit = () => {
    if (user.isEditing) {
      const errors = validateForm();
      if (Object.keys(errors).length > 0) {
        setUser((prev) => ({ ...prev, errors }));
        return;
      }
    }
    setUser((prev) => ({ ...prev, isEditing: !prev.isEditing, errors: {} }));
  };

  if (isLoading) {
    return <div className="text-center text-gray-600">Loading profile...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 min-h-[500px]"
        >
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">User Profile</h1>

        {/* Email ID */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">Email ID</label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* General Information */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">General Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">First Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleInputChange}
                  readOnly={!user.isEditing}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {user.errors.firstName && <p className="text-red-500 text-sm mt-1">{user.errors.firstName}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleInputChange}
                  readOnly={!user.isEditing}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">Gender</label>
                <div className="flex space-x-6">
                  {["male", "female", "other"].map((g) => (
                    <label key={g} className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={user.gender === g}
                        onChange={handleGenderChange}
                        disabled={!user.isEditing}
                        className="mr-2"
                      />
                      <span className={user.gender === g ? "text-indigo-600 font-bold" : "text-gray-600"}>{g.charAt(0).toUpperCase() + g.slice(1)}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">Date of Birth <span className="text-red-500">*</span></label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={user.dateOfBirth}
                  onChange={handleInputChange}
                  readOnly={!user.isEditing}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {user.errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{user.errors.dateOfBirth}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">Mobile Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={user.mobileNumber}
                  onChange={handleInputChange}
                  readOnly={!user.isEditing}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {user.errors.mobileNumber && <p className="text-red-500 text-sm mt-1">{user.errors.mobileNumber}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">Default Address</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleInputChange}
                    readOnly={!user.isEditing}
                    className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    onClick={toggleEdit}
                    className="ml-2 text-indigo-500 hover:text-indigo-700 flex items-center"
                  >
                    {user.isEditing ? (
                      <>
                        <FiSave className="mr-1" /> Save
                      </>
                    ) : (
                      <>
                        <FiEdit2 className="mr-1" /> Edit
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    <Footer />
  </>);
};

export default UserProfile;