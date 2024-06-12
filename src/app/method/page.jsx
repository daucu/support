"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <section className="w-full">
        {/* <!-- Harsha Web --> */}
        <div className="h-auto w-full flex items-center justify-left bg-[#0062A9] p-1">
          <img src="/logo.png" className="p-2 w-[60px] h-[60px]" alt="Logo" />
          <span className="font-semibold text-xl text-white">
            Customer Support
          </span>
        </div>
        <div className="p-6">
          <div className="flex flex-col">
            <span className="text-xl">Select Payment Method</span>
          </div>
          <form
            className="space-y-6 flex flex-col justify-center"
            action=""
            id="third-form"
          >
            {/* <!-- Payment Option --> */}
            <div className="flex flex-col space-y-2 mt-10">
              <div
                className="flex items-center border border-slate-500 rounded p-2"
                onClick={() => {
                  router.push("/upi");
                }}
              >
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-upi-2085056-1747946.png?f=webp"
                  className="w-12 h-12"
                  alt="UPI Logo"
                />
                <label className="cursor-pointer ml-2">
                  <input
                    type="radio"
                    name="payment_method"
                    value="UPI"
                    className="sr-only"
                  />
                  <span>UPI</span>
                </label>
              </div>
              <div
                className="flex items-center border border-slate-500 rounded p-2"
                onClick={() => {
                  router.push("/debit");
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6963/6963703.png"
                  className="w-12 h-12"
                  alt="Debit Card Logo"
                />
                <label className="cursor-pointer ml-2">
                  <input
                    type="radio"
                    name="payment_method"
                    value="Debit Card"
                    className="sr-only"
                  />
                  <span>Debit Card</span>
                </label>
              </div>
            </div>
          </form>
          {/* <!-- Bottom Area --> */}
          <div className="mt-10">
            <div className="grid grid-cols-1 w-full">
              <div className="text-xs text-[#0063A8] font-bold space-x-1 mt-2">
                <span>FAQs: </span>
                <span className="text-slate-600">
                  Find answers to the most frequently asked questions.
                </span>
              </div>
              <div className="text-xs text-[#0063A8] font-bold space-x-1 mt-2">
                <span>Contact Us: </span>
                <span className="text-slate-600">
                  Get in touch with our support team.
                </span>
              </div>
              <div className="text-xs text-[#0063A8] font-bold space-x-1 mt-2">
                <span>Product Guides: </span>
                <span className="text-slate-600">
                  Access detailed guides and tutorials.
                </span>
              </div>
              <div className="text-xs text-[#0063A8] font-bold space-x-1 mt-2">
                <span>Account Management: </span>
                <span className="text-slate-600">
                  Manage your account settings and preferences
                </span>
              </div>
              <div className="text-xs text-[#0063A8] font-bold space-x-1 mt-2">
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
      <section className="bg-[#0062A9] p-5 w-full">
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
