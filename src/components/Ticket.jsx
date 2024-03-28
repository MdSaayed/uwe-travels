function Ticket() {
  return (
    <div className="hidden">
      <div className="block mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-5">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Ticket
          </h1>
        </div>
      </div>

      <div className="w-[500px] mx-auto">
        <div className="flex flex-wrap items-start justify-center">
          {/* Ticket type selection */}
          <div className="cursor-pointer relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-blue-600 text-white bg-blue-500 dark:bg-gray-400 dark:text-gray-200">
            <span className="text-sm">Economy</span>
          </div>
          <div className="cursor-pointer relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-blue-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200">
            <span className="text-sm">Business className</span>
          </div>
          <div className="cursor-pointer relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-blue-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200">
            <span className="text-sm">First className</span>
          </div>
        </div>

        {/* Type Trip selection */}
        <span className="relative flex justify-center">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
          <span className="relative z-10 bg-white px-6 text-gray-700">
            Type Trip
          </span>
        </span>

        <div className="flex flex-wrap items-start justify-center">
          <div className="cursor-pointer relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-blue-600 text-white bg-blue-500 dark:bg-gray-400 dark:text-gray-200">
            <span className="text-sm">One Way Trip</span>
          </div>
          <div className="cursor-pointer relative px-3 py-1 m-2 rounded-md shadow-sm sm:py-2 sm:text-base ring ring-transparent group md:px-4 hover:ring hover:ring-opacity-50 focus:ring-opacity-50 hover:ring-blue-600 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200">
            <span className="text-sm">Round Trip</span>
          </div>
        </div>
      </div>

      {/* Ticket card sections */}
      <div className="flex flex-wrap w-3/4 mx-auto">
        <section className="w-2/4  duration-300 flex items-center  justify-center p-4">
          <div className="flex w-full max-w-3xl text-zinc-50 h-64 rounded-3xl cursor-pointer shadow transition hover:shadow-2xl">
            <div className="h-full bg-zinc-900 flex items-center justify-center px-8 rounded-l-3xl"></div>
            <div className="relative h-full flex flex-col items-center border-dashed justify-between border-2 bg-zinc-900 border-zinc-50"></div>
            <div className="h-full py-8 px-10 bg-zinc-900 flex-grow rounded-r-3xl flex flex-col">
              <div className="flex w-full justify-between items-center">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">BNE</span>
                  <span className="text-zinc-500 text-sm">Brisbane</span>
                </div>
                <div className="flex flex-col flex-grow items-center px-10">
                  <span className="font-bold text-xs">RS 11</span>
                  <div className="w-full flex items-center mt-2">
                    <div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
                    <div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mx-2"
                    >
                      <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                    </svg>
                    <div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
                  </div>
                  <div className="flex items-center px-3 rounded-full bg-lime-400 h-8 mt-2">
                    <span className="text-sm text-zinc-900">18h 35m</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">ATH</span>
                  <span className="text-zinc-500 text-sm">Athens</span>
                </div>
              </div>
              <div className="flex w-full mt-auto justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Date</span>
                  <span className="font-mono">09/06/2023</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Departure</span>
                  <span className="font-mono">17:45</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Passenger</span>
                  <span className="font-mono">Rob Stinson</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Gate/Seat</span>
                  <span className="font-mono">A11/21C</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-2/4  duration-300 flex items-center justify-center p-4">
          <div className="flex w-full max-w-3xl text-zinc-50 h-64 rounded-3xl cursor-pointer shadow transition hover:shadow-2xl">
            <div className="h-full bg-zinc-900 flex items-center justify-center px-8 rounded-l-3xl"></div>
            <div className="relative h-full flex flex-col items-center border-dashed justify-between border-2 bg-zinc-900 border-zinc-50"></div>
            <div className="h-full py-8 px-10 bg-zinc-900 flex-grow rounded-r-3xl flex flex-col">
              <div className="flex w-full justify-between items-center">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">BNE</span>
                  <span className="text-zinc-500 text-sm">Brisbane</span>
                </div>
                <div className="flex flex-col flex-grow items-center px-10">
                  <span className="font-bold text-xs">RS 11</span>
                  <div className="w-full flex items-center mt-2">
                    <div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
                    <div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mx-2"
                    >
                      <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                    </svg>
                    <div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
                  </div>
                  <div className="flex items-center px-3 rounded-full bg-lime-400 h-8 mt-2">
                    <span className="text-sm text-zinc-900">18h 35m</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">ATH</span>
                  <span className="text-zinc-500 text-sm">Athens</span>
                </div>
              </div>
              <div className="flex w-full mt-auto justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Date</span>
                  <span className="font-mono">09/06/2023</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Departure</span>
                  <span className="font-mono">17:45</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Passenger</span>
                  <span className="font-mono">Rob Stinson</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Gate/Seat</span>
                  <span className="font-mono">A11/21C</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-2/4  duration-300 flex items-center justify-center p-4">
          <div className="flex w-full max-w-3xl text-zinc-50 h-64 rounded-3xl cursor-pointer shadow transition hover:shadow-2xl">
            <div className="h-full bg-zinc-900 flex items-center justify-center px-8 rounded-l-3xl"></div>
            <div className="relative h-full flex flex-col items-center border-dashed justify-between border-2 bg-zinc-900 border-zinc-50"></div>
            <div className="h-full py-8 px-10 bg-zinc-900 flex-grow rounded-r-3xl flex flex-col">
              <div className="flex w-full justify-between items-center">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">BNE</span>
                  <span className="text-zinc-500 text-sm">Brisbane</span>
                </div>
                <div className="flex flex-col flex-grow items-center px-10">
                  <span className="font-bold text-xs">RS 11</span>
                  <div className="w-full flex items-center mt-2">
                    <div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
                    <div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mx-2"
                    >
                      <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                    </svg>
                    <div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
                  </div>
                  <div className="flex items-center px-3 rounded-full bg-lime-400 h-8 mt-2">
                    <span className="text-sm text-zinc-900">18h 35m</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">ATH</span>
                  <span className="text-zinc-500 text-sm">Athens</span>
                </div>
              </div>
              <div className="flex w-full mt-auto justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Date</span>
                  <span className="font-mono">09/06/2023</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Departure</span>
                  <span className="font-mono">17:45</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Passenger</span>
                  <span className="font-mono">Rob Stinson</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Gate/Seat</span>
                  <span className="font-mono">A11/21C</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-2/4  duration-300 flex items-center justify-center p-4">
          <div className="flex w-full max-w-3xl text-zinc-50 h-64 rounded-3xl cursor-pointer shadow transition hover:shadow-2xl">
            <div className="h-full bg-zinc-900 flex items-center justify-center px-8 rounded-l-3xl"></div>
            <div className="relative h-full flex flex-col items-center border-dashed justify-between border-2 bg-zinc-900 border-zinc-50"></div>
            <div className="h-full py-8 px-10 bg-zinc-900 flex-grow rounded-r-3xl flex flex-col">
              <div className="flex w-full justify-between items-center">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">BNE</span>
                  <span className="text-zinc-500 text-sm">Brisbane</span>
                </div>
                <div className="flex flex-col flex-grow items-center px-10">
                  <span className="font-bold text-xs">RS 11</span>
                  <div className="w-full flex items-center mt-2">
                    <div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
                    <div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mx-2"
                    >
                      <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                    </svg>
                    <div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
                  </div>
                  <div className="flex items-center px-3 rounded-full bg-lime-400 h-8 mt-2">
                    <span className="text-sm text-zinc-900">18h 35m</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">ATH</span>
                  <span className="text-zinc-500 text-sm">Athens</span>
                </div>
              </div>
              <div className="flex w-full mt-auto justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Date</span>
                  <span className="font-mono">09/06/2023</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Departure</span>
                  <span className="font-mono">17:45</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Passenger</span>
                  <span className="font-mono">Rob Stinson</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Gate/Seat</span>
                  <span className="font-mono">A11/21C</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-2/4  duration-300 flex items-center justify-center p-4">
          <div className="flex w-full max-w-3xl text-zinc-50 h-64 rounded-3xl cursor-pointer shadow transition hover:shadow-2xl">
            <div className="h-full bg-zinc-900 flex items-center justify-center px-8 rounded-l-3xl"></div>
            <div className="relative h-full flex flex-col items-center border-dashed justify-between border-2 bg-zinc-900 border-zinc-50"></div>
            <div className="h-full py-8 px-10 bg-zinc-900 flex-grow rounded-r-3xl flex flex-col">
              <div className="flex w-full justify-between items-center">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">BNE</span>
                  <span className="text-zinc-500 text-sm">Brisbane</span>
                </div>
                <div className="flex flex-col flex-grow items-center px-10">
                  <span className="font-bold text-xs">RS 11</span>
                  <div className="w-full flex items-center mt-2">
                    <div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
                    <div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mx-2"
                    >
                      <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                    </svg>
                    <div className="flex-grow border-t-2 border-zinc-400 border-dotted h-px"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-zinc-900"></div>
                  </div>
                  <div className="flex items-center px-3 rounded-full bg-lime-400 h-8 mt-2">
                    <span className="text-sm text-zinc-900">18h 35m</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">ATH</span>
                  <span className="text-zinc-500 text-sm">Athens</span>
                </div>
              </div>
              <div className="flex w-full mt-auto justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Date</span>
                  <span className="font-mono">09/06/2023</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Departure</span>
                  <span className="font-mono">17:45</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Passenger</span>
                  <span className="font-mono">Rob Stinson</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">Gate/Seat</span>
                  <span className="font-mono">A11/21C</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Ticket;
