import {ArrowUpIcon, ArrowLeftIcon, ArrowDownIcon, ArrowRightIcon} from '@heroicons/react/24/solid';
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
        }
    }
    return (
    <button className="text-blue-500 hover:text-blue-400 active:text-blue-500" onClick={handleClick}>
        {setArrow()}
    </button>
    )
}