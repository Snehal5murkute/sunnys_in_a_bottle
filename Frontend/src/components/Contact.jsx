import React, { useState } from "react";

const Contact = () => {
  const [formData, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    postalCode: "",
    file: null,
  });

  function changeHandler(event) {
    const { name, value, files, type } = event.target;
    if (type === "file") {
      setData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setData((prev) => ({ ...prev, [name]: value }));
    }
  }

async function submitHandler(event) {
  event.preventDefault();

  const formDataToSend = new FormData();
  formDataToSend.append("firstName", formData.firstName);
  formDataToSend.append("lastName", formData.lastName);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("message", formData.message);
  formDataToSend.append("postalCode", formData.postalCode);
  if (formData.file) {
    formDataToSend.append("file", formData.file);
  }

  try {
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      body: formDataToSend,
    });

  const data = await response.json();
    if (data.success) {
      alert(`✅ ${data.message}`);
    } else {
      alert(`❌ ${data.message}`);
    }

  } catch (error) {
    console.error("Error:", error);
    alert("⚠️ Something went wrong. Check console for details.");
  }
}



  return (
    <div className="flex flex-col items-center py-16 px-6 bg-[#FDF2D2] min-h-screen">
      {/* Heading */}
     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#FF5203] font-jockey text-center">
  WE'RE HERE FOR YOU
</h1>

      <p className="text-center text-gray-600 mt-2 mb-10 text-lg">
        Please complete the form so we can best help out.
      </p>

      {/* Form */}
      <form
        onSubmit={submitHandler}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl"
      >
        {/* First & Last Name side by side */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-medium mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Snehal"
              value={formData.firstName}
              onChange={changeHandler}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF5203]"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-medium mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Murkute"
              value={formData.lastName}
              onChange={changeHandler}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF5203]"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF5203]"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={changeHandler}
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF5203]"
          />
        </div>

        {/* Attach File */}
        <div className="mb-6">
          <label
            htmlFor="file"
            className="block text-gray-700 font-medium mb-2"
          >
            Attach File
          </label>
          <input
            type="file"
            name="file"
            placeholder="Attach file"
            id="file"
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF5203]"
          />
        </div>

        {/* Postal Code */}
        <div className="mb-6">
          <label
            htmlFor="postalCode"
            className="block text-gray-700 font-medium mb-2"
          >
            Postal Code
          </label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            placeholder="Enter postal code"
            value={formData.postalCode}
            onChange={changeHandler}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF5203]"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#FF5203] text-white text-lg px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
