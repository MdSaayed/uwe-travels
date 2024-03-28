const TravelType = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Travel Type Selection
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            choice your type
          </p>
        </div>
        <div className="flex flex-wrap justify-center mx-auto w-full -m-4">
          <div className="cursor-pointer  p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full shadow hover:shadow-xl transition duration-300 p-6 rounded-lg  border-2 border-indigo-500 flex flex-col relative overflow-hidden">
              <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                select
              </span>

              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                SOLO
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    viewBox="0 0 24 24"
                    className="w-3 h-3"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                <span>item 1</span>
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    viewBox="0 0 24 24"
                    className="w-3 h-3"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                <span>item 2</span>
              </p>
              <p className="flex items-center text-gray-600 mb-6">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    viewBox="0 0 24 24"
                    className="w-3 h-3"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                <span>item 3</span>
              </p>
            </div>
          </div>
          <div className="cursor-pointer p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full shadow hover:shadow-xl transition duration-300 p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <span className="hidden bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                select
              </span>

              <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                GROUP
              </h1>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    viewBox="0 0 24 24"
                    className="w-3 h-3"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                <span>item 1</span>
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    viewBox="0 0 24 24"
                    className="w-3 h-3"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                <span>item 2</span>
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    viewBox="0 0 24 24"
                    className="w-3 h-3"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                <span>item 3</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelType;
