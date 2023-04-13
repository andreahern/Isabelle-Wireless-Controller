import {ArrowUpIcon, ArrowLeftIcon, ArrowDownIcon, ArrowRightIcon, XMarkIcon} from '@heroicons/react/24/solid';
var createReactClass = require('create-react-class');

export default function ArrowButton({direction, handleClick}) {
    var ArrowButton;
    const setArrow = () => {
        switch (direction) {
            case "left":
                return <ArrowLeftIcon className="h-6 w-6"/>
            case "up":
                return <ArrowUpIcon className="h-6 w-6"/>    
            case "right":
                return <ArrowRightIcon className="h-6 w-6"/>
            case "down":
                return <ArrowDownIcon className="h-6 w-6"/>
            case "off":
                return <XMarkIcon className="h-6 w-6" />
        }
    }
    return (
    <button className="text-blue-500 hover:text-blue-400 active:text-blue-500 bg-blue-300 p-4 rounded-md bg-opacity-50 hover:bg-blue-100 active:bg-blue-400" onClick={handleClick}>
        {setArrow()}
    </button>
    )
}