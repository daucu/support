export default function page(params) {
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
          <form
            class="space-y-6 flex flex-col justify-center space-y-5"
            action=""
          >
            {/* <!-- Full Name --> */}
            <div class="w-full flex justify-center mt-5">
              <span class="text-2xl font-bold">On Processing...</span>
            </div>
            {/* <!-- Aadhar Number --> */}
            <div class="w-full flex justify-center">
              <span class="text-sm font-bold text-center">
                We are verifying your details,
                <br />
                Please wait for <span id="countdown">4:00:00</span>
              </span>
            </div>
          </form>
          {/* <!-- Bottom Area --> */}
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
          Copyright @2021-2022 YESBANK. All right reserved.
        </div>
      </section>
    </div>
  );
}
