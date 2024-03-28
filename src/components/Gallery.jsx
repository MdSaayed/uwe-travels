import { Link } from 'react-router-dom'
import { Destination1, Destination2, Destination3, Destination4 } from '../assets'
import HeadingTitle from './UI/HeadingTitle'

const Gallery = () => {
  return (
    <div>
      <HeadingTitle miniTitle='GALLERY' title='TOP Pictures of the year' />
      {/* Gallery */}
      <div className="gallery">
        <div
          className="bg-white dark:bg-gray-800 h-full py-6 sm:py-4 lg:py-4"
        >
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-4 flex flex-row-reverse sm:mb-4 md:mb-4">
              <Link
                to="/"
                className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
              >
                More
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">

              <Link
                to="/"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src={Destination1}
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
                ></div>

                <span
                  className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"
                >VR</span
                >
              </Link>

              <Link
                to="/"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src={Destination2}
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
                ></div>

                <span
                  className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"
                >Tech</span
                >
              </Link>

              <Link
                to="/"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <img
                  src={Destination3}
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
                ></div>

                <span
                  className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"
                >Dev</span
                >
              </Link>

              <Link
                to="/"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src={Destination4}
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"
                ></div>

                <span
                  className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"
                >Retro</span
                >
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery



const GalleryInfo = [
  {
    _id: 1,
    title: "VR",
    img: Destination1,
  },
  {
    _id: 2,
    title: "Tech",
    img: Destination2,
  },
  {
    _id: 3,
    title: "Dev",
    img: Destination3,
  },
  {
    _id: 4,
    title: "Retro",
    img: Destination4,
  }
]