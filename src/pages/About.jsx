import { AboutImg } from "../assets"


const About = () => {
  return (
    <div className="mx-auto sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 px-10 pt-4 pb-0">
            <div className="image object-center text-center">
                <img src={AboutImg} alt="about image"/>
            </div>
        </div>
        <div className="sm:w-1/2 p-5">
            <div className="text">
                
                <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Our Company</span>
                </h2>
                <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                    doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                    voluptatum.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About