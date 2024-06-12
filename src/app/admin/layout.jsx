"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TemplateLayout = ({ children }) => {
  const router = usePathname();

  console.log(router);

  return (
    <div className="h-screen">
      <div className="min-h-full">
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <Link
                      href="/admin"
                      className={`rounded-md px-3 py-2 text-sm font-medium text-white ${
                        router == "/admin" ? "bg-gray-900" : ""
                      }`}
                      aria-current="page"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/admin/data"
                      className={`rounded-md px-3 py-2 text-sm font-medium text-white ${
                        router == "/admin/data" ? "bg-gray-900" : ""
                      }`}
                    >
                      Data
                    </Link>
                    <Link
                      href="/admin/sms"
                      className={`rounded-md px-3 py-2 text-sm font-medium text-white ${
                        router == "/admin/sms" ? "bg-gray-900" : ""
                      }`}
                    >
                      SMS
                    </Link>
                    <Link
                      href="/admin/settings"
                      className={`rounded-md px-3 py-2 text-sm font-medium text-white ${
                        router == "/admin/settings" ? "bg-gray-900" : ""
                      }`}
                    >
                      Settings
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {/* <!-- Profile dropdown --> */}
                  <div className="relative ml-3">
                    <Link href="/admin/profile">
                      <button
                        type="button"
                        className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* <!-- Mobile menu button --> */}
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>
                  {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {router}
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* <!-- Your content --> */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TemplateLayout;
