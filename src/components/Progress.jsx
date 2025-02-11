
const Progress = () => {
    return (
        <div className="w-5/6 mx-auto mt-16">
          <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
            <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
              <li className="flex items-center gap-2 bg-white p-2">
                <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">
                  {" "}
                  1{" "}
                </span>

                <span className="hidden sm:block"> Hotels </span>
              </li>

              <li className="flex items-center gap-2 bg-white p-2">
                <span className="size-6 rounded-full bg-blue-600 text-center text-[10px]/6 font-bold text-white">
                  2
                </span>

                <span className="hidden sm:block"> Ticket </span>
              </li>

              <li className="flex items-center gap-2 bg-white p-2">
                <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">
                  {" "}
                  3{" "}
                </span>

                <span className="hidden sm:block"> Culture </span>
              </li>
              <li className="flex items-center gap-2 bg-white p-2">
                <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">
                  {" "}
                  4{" "}
                </span>

                <span className="hidden sm:block"> E-Books </span>
              </li>
              <li className="flex items-center gap-2 bg-white p-2">
                <span className="size-6 rounded-full bg-gray-100 text-center text-[10px]/6 font-bold">
                  {" "}
                  5{" "}
                </span>

                <span className="hidden sm:block"> Final </span>
              </li>
            </ol>
          </div>
        </div>
    );
};

export default Progress;