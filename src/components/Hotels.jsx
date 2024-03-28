import React from "react";

const Hotels = () => {
  return (
    <div className="hidden mx-auto  px-4 sm:px-6 lg:px-8">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-5">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Hotels
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
                <span className="font-medium text-gray-900">Amenities</span>
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
            <div className="pt-6" id="filter-section-0">
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
                <div className="flex items-center">
                  <input
                    id="filter-color-4"
                    name="color[]"
                    value=""
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-color-4"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Gym
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-color-5"
                    name="color[]"
                    value=""
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-color-5"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Spa
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-color-5"
                    name="color[]"
                    value=""
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-color-5"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Pet-friendly
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-color-5"
                    name="color[]"
                    value=""
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-color-5"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Airport shuttle
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
                aria-controls="filter-section-1"
                aria-expanded="false"
              >
                <span className="font-medium text-gray-900">Price</span>
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
          </div>

          {/* Filter section, show/hide based on section state. */}
          <div className="pt-6" id="filter-section-1">
            <div className="space-y-4">
              <div className="mb-4">
                <label
                  for="price-range"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Price Range
                </label>
                <input
                  type="range"
                  id="price-range"
                  className="w-full accent-indigo-600"
                  min="0"
                  max="5000"
                  value="500"
                  oninput="updatePrice(this.value)"
                />
              </div>
              <div className="flex justify-between text-gray-500">
                <span id="minPrice">$0</span>
                <span id="maxPrice">$5000</span>
              </div>

              {function updatePrice(value) {
                document.getElementById("minPrice").textContent = "$" + value;
              }}
            </div>
          </div>

          <div className="border-b border-gray-200 py-6">
            <h3 className="-my-3 flow-root">
              {/* Expand/collapse section button */}
              <button
                type="button"
                className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                aria-controls="filter-section-1"
                aria-expanded="false"
              >
                <span className="font-medium text-gray-900">
                  Accommodation Type
                </span>
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
            <div className="pt-6" id="filter-section-1">
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="filter-category-0"
                    name="category[]"
                    value=""
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-category-0"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Apartments
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-category-1"
                    name="category[]"
                    value=""
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-category-1"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Resorts
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-category-2"
                    name="category[]"
                    value=""
                    type="checkbox"
                    checked
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-category-2"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Bed and breakfasts
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-category-3"
                    name="category[]"
                    value=""
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-category-3"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Hostels
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
                <span className="font-medium text-gray-900">
                  Room Facilities
                </span>
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
            <div className="pt-6" id="filter-section-2">
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
                <div className="flex items-center">
                  <input
                    id="filter-size-3"
                    name="size[]"
                    value=""
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-size-3"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Balcony
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-size-4"
                    name="size[]"
                    value=""
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-size-4"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Ocean view
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-size-5"
                    name="size[]"
                    value=""
                    type="checkbox"
                    checked
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-size-5"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Soundproof
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
                <span className="font-medium text-gray-900">
                  Payment Options
                </span>
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
            <div className="pt-6" id="filter-section-2">
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="filter-size-0"
                    name="paiment"
                    value=""
                    type="radio"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-size-0"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Pay now
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-size-0"
                    name="paiment"
                    value=""
                    type="radio"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    for="filter-size-0"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Pay at the property
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* content */}
      <div className="border w-full flex flex-wrap pt-5">
        {/* hotel 1 */}
        <section className="container w-1/2 mx-auto  antialiased ">
          <article className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
            <img
              className="w-full max-h-[400px] object-cover md:w-52"
              src="https://i.ibb.co/Kr4b0zJ/152013403-10158311889099633-8423107287930246533-o.jpg"
              alt=""
            />
            <div className="">
              <div className="p-5 pb-10">
                <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                  The Magnificent Bogra
                </h1>
                <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                  Located in Rajshahi Division, Bogra is one of the oldest and
                  most fascinating towns in Bangladesh
                </p>
              </div>
              <div className="bg-blue-50 p-5">
                <div className="sm:flex sm:justify-between">
                  <div>
                    <div className="text-lg text-gray-700">
                      <span className="text-gray-900 font-bold">196 km</span>{" "}
                      from Dhaka
                    </div>
                    <div className="flex items-center">
                      <div className="flex">
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                      </div>
                      <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
                        16 reviews
                      </div>
                    </div>
                  </div>
                  <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                    Book Ticket
                  </button>
                </div>
                <div className="mt-3 text-gray-600 text-sm md:text-sm">
                  *Places to visit: Mahasthangarh, Vasu Bihar &amp; Momo Inn
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="container w-1/2 mx-auto  antialiased ">
          <article className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
            <img
              className="w-full max-h-[400px] object-cover md:w-52"
              src="https://i.ibb.co/Kr4b0zJ/152013403-10158311889099633-8423107287930246533-o.jpg"
              alt=""
            />
            <div className="">
              <div className="p-5 pb-10">
                <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                  The Magnificent Bogra
                </h1>
                <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                  Located in Rajshahi Division, Bogra is one of the oldest and
                  most fascinating towns in Bangladesh
                </p>
              </div>
              <div className="bg-blue-50 p-5">
                <div className="sm:flex sm:justify-between">
                  <div>
                    <div className="text-lg text-gray-700">
                      <span className="text-gray-900 font-bold">196 km</span>{" "}
                      from Dhaka
                    </div>
                    <div className="flex items-center">
                      <div className="flex">
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                      </div>
                      <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
                        16 reviews
                      </div>
                    </div>
                  </div>
                  <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                    Book Ticket
                  </button>
                </div>
                <div className="mt-3 text-gray-600 text-sm md:text-sm">
                  *Places to visit: Mahasthangarh, Vasu Bihar &amp; Momo Inn
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="container w-1/2 mx-auto  antialiased ">
          <article className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
            <img
              className="w-full max-h-[400px] object-cover md:w-52"
              src="https://i.ibb.co/Kr4b0zJ/152013403-10158311889099633-8423107287930246533-o.jpg"
              alt=""
            />
            <div className="">
              <div className="p-5 pb-10">
                <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                  The Magnificent Bogra
                </h1>
                <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                  Located in Rajshahi Division, Bogra is one of the oldest and
                  most fascinating towns in Bangladesh
                </p>
              </div>
              <div className="bg-blue-50 p-5">
                <div className="sm:flex sm:justify-between">
                  <div>
                    <div className="text-lg text-gray-700">
                      <span className="text-gray-900 font-bold">196 km</span>{" "}
                      from Dhaka
                    </div>
                    <div className="flex items-center">
                      <div className="flex">
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                      </div>
                      <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
                        16 reviews
                      </div>
                    </div>
                  </div>
                  <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                    Book Ticket
                  </button>
                </div>
                <div className="mt-3 text-gray-600 text-sm md:text-sm">
                  *Places to visit: Mahasthangarh, Vasu Bihar &amp; Momo Inn
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="container w-1/2 mx-auto  antialiased ">
          <article className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
            <img
              className="w-full max-h-[400px] object-cover md:w-52"
              src="https://i.ibb.co/Kr4b0zJ/152013403-10158311889099633-8423107287930246533-o.jpg"
              alt=""
            />
            <div className="">
              <div className="p-5 pb-10">
                <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                  The Magnificent Bogra
                </h1>
                <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                  Located in Rajshahi Division, Bogra is one of the oldest and
                  most fascinating towns in Bangladesh
                </p>
              </div>
              <div className="bg-blue-50 p-5">
                <div className="sm:flex sm:justify-between">
                  <div>
                    <div className="text-lg text-gray-700">
                      <span className="text-gray-900 font-bold">196 km</span>{" "}
                      from Dhaka
                    </div>
                    <div className="flex items-center">
                      <div className="flex">
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                      </div>
                      <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
                        16 reviews
                      </div>
                    </div>
                  </div>
                  <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                    Book Ticket
                  </button>
                </div>
                <div className="mt-3 text-gray-600 text-sm md:text-sm">
                  *Places to visit: Mahasthangarh, Vasu Bihar &amp; Momo Inn
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="container w-1/2 mx-auto  antialiased ">
          <article className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
            <img
              className="w-full max-h-[400px] object-cover md:w-52"
              src="https://i.ibb.co/Kr4b0zJ/152013403-10158311889099633-8423107287930246533-o.jpg"
              alt=""
            />
            <div className="">
              <div className="p-5 pb-10">
                <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                  The Magnificent Bogra
                </h1>
                <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                  Located in Rajshahi Division, Bogra is one of the oldest and
                  most fascinating towns in Bangladesh
                </p>
              </div>
              <div className="bg-blue-50 p-5">
                <div className="sm:flex sm:justify-between">
                  <div>
                    <div className="text-lg text-gray-700">
                      <span className="text-gray-900 font-bold">196 km</span>{" "}
                      from Dhaka
                    </div>
                    <div className="flex items-center">
                      <div className="flex">
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                      </div>
                      <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
                        16 reviews
                      </div>
                    </div>
                  </div>
                  <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                    Book Ticket
                  </button>
                </div>
                <div className="mt-3 text-gray-600 text-sm md:text-sm">
                  *Places to visit: Mahasthangarh, Vasu Bihar &amp; Momo Inn
                </div>
              </div>
            </div>
          </article>
        </section>
        <section className="container w-1/2 mx-auto  antialiased ">
          <article className=" flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-3xl group cursor-pointer transform duration-500 hover:-translate-y-1">
            <img
              className="w-full max-h-[400px] object-cover md:w-52"
              src="https://i.ibb.co/Kr4b0zJ/152013403-10158311889099633-8423107287930246533-o.jpg"
            />
            <div className="">
              <div className="p-5 pb-10">
                <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                  The Magnificent Bogra
                </h1>
                <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                  Located in Rajshahi Division, Bogra is one of the oldest and
                  most fascinating towns in Bangladesh
                </p>
              </div>
              <div className="bg-blue-50 p-5">
                <div className="sm:flex sm:justify-between">
                  <div>
                    <div className="text-lg text-gray-700">
                      <span className="text-gray-900 font-bold">196 km</span>{" "}
                      from Dhaka
                    </div>
                    <div className="flex items-center">
                      <div className="flex">
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                        <svg
                          className="w-4 h-4 mx-px fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 14"
                        >
                          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                        </svg>
                      </div>
                      <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
                        16 reviews
                      </div>
                    </div>
                  </div>
                  <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                    Book Ticket
                  </button>
                </div>
                <div className="mt-3 text-gray-600 text-sm md:text-sm">
                  *Places to visit: Mahasthangarh, Vasu Bihar &amp; Momo Inn
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* pagination */}
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
  );
};

export default Hotels;
