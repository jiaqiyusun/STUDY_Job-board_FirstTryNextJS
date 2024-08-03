import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function JobRow(){
    return(
        <>
        <div className="container bg-white p-4 rounded-lg shadow-sm flex gap-4 justify-between items-center">
            <div className="flex grow gap-4">
                <div className="flex items-center">
                    <img className="w-12 h-12" src='/images/google.png' alt='Google logo' />
                </div>
                <div className="grow">
                    <div className="text-gray-500 text-sm">Google</div>
                    <div className="font-bold mb-1">Product Manager</div>
                    <div className="text-gray-500 text-sm">Remote &middot; New York, US &middot; Full-time</div>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <div className="mb-1">
                <FontAwesomeIcon className="size-4 text-gray-300" icon={faHeart} />
                </div>
                <div className="text-gray-500 text-sm">2 weeks ago</div>
            </div>
        </div>
        </>
    );
}