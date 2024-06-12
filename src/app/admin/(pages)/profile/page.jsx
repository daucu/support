export default function page(params) {
  return (
    <div className="bg-white">
      <div className="bg-white px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Profile
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Change profile password
          </p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-10 max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                for="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Old Password
              </label>
              <div className="relative mt-2.5">
                <input
                  type="password"
                  name="phone-number"
                  id="phone-number"
                  autocomplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                for="phone-number"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                New Password
              </label>
              <div className="relative mt-2.5">
                <input
                  type="password"
                  name="phone-number"
                  id="phone-number"
                  autocomplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Number
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
