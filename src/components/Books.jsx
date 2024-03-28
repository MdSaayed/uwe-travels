
const Books = () => {
  return (
    <div className="hidden mx-auto  px-4 sm:px-6 lg:px-8">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-5">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Books
        </h1>
      </div>

      <div className="flex flex-row w-full">
        <form className="w-[300px] pr-5">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            Filter By
          </h2>
          <div className="border-b border-gray-200 py-6">
            <h3 className="-my-3 flow-root">
              {/* Expand/collapse section button */}
              <button
                type="button"
                className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                aria-controls="filter-section-0"
                aria-expanded="false"
              >
                <span className="font-medium text-gray-900">Region</span>
                <span className="ml-6 flex items-center">
                  {/* Expand icon, show/hide based on section open state. */}
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                  {/* Collapse icon, show/hide based on section open state */}
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </h3>

            {/* Filter section, show/hide based on section state. */}
            <div className="hidden pt-6" id="filter-section-0">
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="filter-color-0"
                    name="color[]"
                    value=""
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-color-0"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Free Wi-Fi
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-color-1"
                    name="color[]"
                    value=""
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-color-1"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Breakfast included
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-color-2"
                    name="color[]"
                    value=""
                    type="checkbox"
                    checked
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-color-2"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Swimming pool
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-color-3"
                    name="color[]"
                    value=""
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-color-3"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Free parking
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200 py-6">
            <h3 className="-my-3 flow-root">
              {/* xpand/collapse section button */}
              <button
                type="button"
                className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                aria-controls="filter-section-2"
                aria-expanded="false"
              >
                <span className="font-medium text-gray-900">Country</span>
                <span className="ml-6 flex items-center">
                  {/* Expand icon, show/hide based on section open state. */}
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                  {/* Collapse icon, show/hide based on section open state. */}
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            {/* Filter section, show/hide based on section state. */}
            <div className="hidden pt-6" id="filter-section-2">
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="filter-size-0"
                    name="size[]"
                    value=""
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-size-0"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Air conditioning
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-size-1"
                    name="size[]"
                    value=""
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-size-1"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Private bathroom
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-size-2"
                    name="size[]"
                    value=""
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-size-2"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Kitchen/kitchenette
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200 py-6">
            <h3 className="-my-3 flow-root">
              {/* Expand/collapse section button */}
              <button
                type="button"
                className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                aria-controls="filter-section-2"
                aria-expanded="false"
              >
                <span className="font-medium text-gray-900">City</span>
                <span className="ml-6 flex items-center">
                  {/* Expand icon, show/hide based on section open state. */}
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                  {/* Collapse icon, show/hide based on section open state. */}
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            {/* Filter section, show/hide based on section state.*/}
            <div className="pt-6" id="filter-section-2">
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="filter-size-0"
                    name="item1"
                    value=""
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-size-0"
                    className="ml-3 text-sm text-gray-600"
                  >
                    city 1
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-size-0"
                    name="item2"
                    value=""
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-size-0"
                    className="ml-3 text-sm text-gray-600"
                  >
                    city 2
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* content*/}
        <div className="border w-full flex flex-wrap pt-5">
          {/* book*/}
          <div className="flex flex-wrap justify-around pb-10	">
            <div className="bg-white rounded-lg shadow hover:shadow-xl transition duration-300 cursor-pointer  p-8 w-1/4">
              <div className="relative overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                  alt="Product"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">
                Product Name
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt.
              </p>
              <div className="flex items-center justify-between mt-4">
                <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow hover:shadow-xl transition duration-300 cursor-pointer  p-8 w-1/4">
              <div className="relative overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                  alt="Product"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">
                Product Name
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt.
              </p>
              <div className="flex items-center justify-between mt-4">
                <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow hover:shadow-xl transition duration-300 cursor-pointer  p-8 w-1/4">
              <div className="relative overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                  alt="Product"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-4">
                Product Name
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt.
              </p>
              <div className="flex items-center justify-between mt-4">
                <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* pagination*/}
          <ol className="flex w-full mx-auto justify-center gap-3 text-xs font-medium">
            <li>
              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                1
              </a>
            </li>

            <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
              2
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                4
              </a>
            </li>

            <li>
              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Books;
