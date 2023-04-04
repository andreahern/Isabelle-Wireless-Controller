import {ArrowUpIcon, ArrowLeftIcon, ArrowDownIcon, ArrowRightIcon} from '@heroicons/react/24/solid';
import ArrowButton from './arrowButton';
export default function ControlPanel(){
    return (
        <div className="flex flex-col w-40 items-center space-y-4">
            {/* <button className="text-blue-500 hover:text-blue-400 active:text-blue-500">
                <ArrowUpIcon className="h-6 w-6" />
            </button> */}
            <ArrowButton direction="up" />
            <div className="flex flex-row space-x-4 justify-center">
                <ArrowButton direction="left" handleClick={() => console.log("TEST")} />
                <ArrowButton direction="down" />
                <ArrowButton direction="right" />   
            </div>
        </div>
    );
}