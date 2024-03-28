import { Link } from "react-router-dom"
import { BannerImg } from "../assets"

const Banner = () => {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat">
            <div
                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
            ></div>

            <div
                className="relative flex flex-col sm:flex-row mx-auto max-w-screen-xl px-4 sm:px-6 lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        It’s a Big World Out There, Go Explore
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        We always make our customer happy by providing as many choices as
                        possible
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <Link
                            to="/"
                            className="block w-full rounded-full bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
                <div>
                    <img className="" src={BannerImg} alt="banner-img" />
                </div>
            </div>
        </section>
    )
}

export default Banner