import React, { useState } from "react";
import axios from "axios";

const RegisterPatient = () => {
  const [activeTab, setActiveTab] = useState("individual");
  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: "",
    age: "",
    bloodGroup: "",
    gender: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });



  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMobile = (mobileNumber) => /^[0-9]{10}$/.test(mobileNumber);
  const validatePincode = (pincode) => /^[0-9]{6}$/.test(pincode);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [id]: value }));

    if (value.trim() === "") {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: "This field is required." }));
    } else if (id === "email" && !validateEmail(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: "Invalid email format." }));
    } else if (id === "mobile" && !validateMobile(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: "Mobile number must be 10 digits." }));
    } else if (id === "pincode" && !validatePincode(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: "Pincode must be 6 digits." }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: null }));
    }
    setIsFormValid(validateForm());
  };

  const validateForm = () => {
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required.";
      }
    }
    if (!validateEmail(formData.email)) newErrors.email = "Invalid email format.";
    if (!validateMobile(formData.mobileNumber)) newErrors.mobileNumber = "Mobile number must be 10 digits.";
    if (!validatePincode(formData.pincode)) newErrors.pincode = "Pincode must be 6 digits.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted");


    if (!validateForm()) {
      console.log("Validation failed");
      return; 
    }


    try {
      const response = await axios.post("http://localhost:8801/api/patients/register", formData);
      console.log(response.data); 
      console.log(formData);

      setFormData({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        dateOfBirth: "",
        age: "",
        bloodGroup: "",
        gender: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-md">
      <h1 className="text-2xl font-semibold mb-4 text-black">REGISTER PATIENT</h1>

      <div className="flex border-b mb-6">
        <button
          className={`px-4 py-2 transition-colors duration-300 ${
            activeTab === "individual"
              ? "text-green-500 bg-white border-none"
              : "text-gray-500 bg-white border-none"
          } font-semibold focus:outline-none`}
          onClick={() => setActiveTab("individual")}
        >
          Individual Registration
        </button>
        <button
          className={`px-4 py-2 transition-colors duration-300 ${
            activeTab === "bulk"
              ? "text-green-500 bg-white border-none"
              : "text-gray-500 bg-white border-none"
          } font-semibold focus:outline-none`}
          onClick={() => setActiveTab("bulk")}
        >
          Bulk Registration
        </button>
      </div>

      {activeTab === "individual" && (
        <form className="grid grid-cols-4 gap-4" onSubmit={handleSubmit}>

          <div className="col-span-1">
            <label htmlFor="title" className="block mb-1 font-medium text-black">Title*</label>
            <select
              id="title"
              value={formData.title}
              onChange={handleInputChange}
              className={`border ${errors.title ? "border-red-500" : "border-gray-200"} p-2 rounded-md w-full text-black bg-gray-100`}
            >
              <option value="">Select Title</option>
              <option value="Mr">Mr.</option>
              <option value="Mrs">Mrs.</option>
              <option value="Ms">Ms.</option>
            </select>
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>
          <div className="col-span-1">
            <label htmlFor="firstName" className="block mb-1 font-medium text-black">First Name*</label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`border ${errors.firstName ? "border-red-500" : "border-gray-200"} p-2 rounded-md w-full text-black bg-gray-100`}
              placeholder="First name"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
          </div>
          <div className="col-span-1">
            <label htmlFor="lastName" className="block mb-1 font-medium text-black">Last Name*</label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`border ${errors.lastName ? "border-red-500" : "border-gray-200"} p-2 rounded-md w-full text-black bg-gray-100`}
              placeholder="Last name"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>
          <div className="col-span-1">
            <label htmlFor="email" className="block mb-1 font-medium text-black">Email Address</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`border ${errors.email ? "border-red-500" : "border-gray-200"} p-2 rounded-md w-full text-black bg-gray-100`}
              placeholder="Email address"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="col-span-1">
            <label htmlFor="mobileNumber" className="block mb-1 font-medium text-black">Mobile No.*</label>
            <input
              type="text"
              id="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className={`border ${errors.mobileNumber ? "border-red-500" : "border-gray-200"} p-2 rounded-md w-full text-black bg-gray-100`}
              placeholder="Mobile no."
            />
            {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}
          </div>
          <div className="col-span-1">
            <label htmlFor="dateOfBirth" className="block mb-1 font-medium text-black">Date Of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className={`border ${errors.dateOfBirth ? "border-red-500" : "border-gray-200"} p-2 rounded-md w-full text-black bg-gray-100`}
            />
            {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>}
          </div>
          <div className="col-span-1">
            <label htmlFor="age" className="block mb-1 font-medium text-black">Age</label>
            <input
              type="number"
              id="age"
              value={formData.age}
              onChange={handleInputChange}
              className={`border ${errors.age ? "border-red-500" : "border-gray-200"} p-2 rounded-md w-full text-black bg-gray-100`}
              placeholder="Age"
            />
            {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
          </div>
          <div className="col-span-1">
            <label htmlFor="bloodGroup" className="block mb-1 font-medium text-black">Blood Group*</label>
            <select
              id="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleInputChange}
              className={`border ${errors.bloodGroup ? "border-red-500" : "border-gray-200"} p-2 rounded-md w-full text-black bg-gray-100`}
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            {errors.bloodGroup && <p className="text-red-500 text-sm">{errors.bloodGroup}</p>}
          </div>
          <div className="col-span-1">
            <label htmlFor="gender" className="block mb-1 font-medium text-black">Gender*</label>
            <select
              id="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className={`border ${errors.gender ? "border-red-500" : "border-gray-200"} p-2 rounded-md w-full text-black bg-gray-100`}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
          </div>
          <div className="col-span-2">
            <label htmlFor="address1" className="block mb-1 font-medium text-black">Address Line 1*</label>
            <input
              type="text"
              id="address1"
              value={formData.address1}
              onChange={handleInputChange}
              className={`border ${errors.address1 ? "border-red-500" : "border-gray-200"} p-2 rounded-md w-full text-black bg-gray-100`}
              placeholder="Address line 1"
            />
            {errors.address1 && <p className="text-red-500 text-sm">{errors.address1}</p>}
          </div>
          <div className="col-span-2">
            <label htmlFor="address2" className="block mb-1 font-medium text-black">Address Line 2</label>
            <input
              type="text"
              id="address2"
              value={formData.address2}
              onChange={handleInputChange}
              className={`border ${errors.address2 ? "border-red-500" : "border-gray-200"} p-2 rounded-md w-full text-black bg-gray-100`}
              placeholder="Address line 2"
            />
            {errors.address2 && <p className="text-red-500 text-sm">{errors.address2}</p>}
          </div>
          <div className="col-span-1">
            <label htmlFor="city" className="block mb-1 font-medium text-black">City*</label>
            <input
              type="text"
              id="city"
              value={formData.city}
              onChange={handleInputChange}
              className={`border ${errors.city ? "border-red-500" : "border-gray-200"} p-2 rounded-md w-full text-black bg-gray-100`}
              placeholder="City"
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          </div>
          <div className="col-span-1">
            <label htmlFor="state" className="block mb-1 font-medium text-black">State*</label>
            <input
              type="text"
              id="state"
              value={formData.state}
              onChange={handleInputChange}
              className={`border ${errors.state ? "border-red-500" : "border-gray-200"} p-2 rounded-md w-full text-black bg-gray-100`}
              placeholder="State"
            />
            {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
          </div>
          <div className="col-span-1">
            <label htmlFor="country" className="block mb-1 font-medium text-black">Country*</label>
            <input
              type="text"
              id="country"
              value={formData.country}
              onChange={handleInputChange}
              className={`border ${errors.country ? "border-red-500" : "border-gray-200"} p-2 rounded-md w-full text-black bg-gray-100`}
              placeholder="Country"
            />
            {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
          </div>
          <div className="col-span-1">
            <label htmlFor="pincode" className="block mb-1 font-medium text-black">Pincode*</label>
            <input
              type="text"
              id="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              className={`border ${errors.pincode ? "border-red-500" : "border-gray-200"} p-2 rounded-md w-full text-black bg-gray-100`}
              placeholder="Pincode"
            />
            {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
          </div>

          <div className="col-span-4">
            <button type="submit" disbaled= {!isFormValid} className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
             >
              Register
            </button>
          </div>
        </form>
      )}

      {activeTab === "bulk" && (
        <div>
          <h2 className="text-xl font-semibold mb-2 text-black">Bulk Registration (Coming Soon)</h2>
          <p>This feature will allow you to register multiple patients at once.</p>

        </div>
      )}
    </div>
  );
};

export default RegisterPatient;
