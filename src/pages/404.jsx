import { Link } from "react-router-dom";
import ErrorAnimation from "../assets/images/svg/ErrorAnimation.json";
import Lottie from "lottie-react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";


const Error = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div>
                 <div style={{ width: '200px', height: '200px' }}>
                    <Lottie animationData={ErrorAnimation}/>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <MdOutlineKeyboardBackspace className="text-blue-700 font-bold " />
                     <Link to={"/"} className="text-blue-700 font-bold text-sm ">Back to home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
