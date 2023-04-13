import {useGlobalContext} from '../../context/store';
import * as ROSLIB from 'roslib'
import {useEffect} from 'react';

export default function ConnectToRobot() {
    const {ros, setRos, setIsConnected} = useGlobalContext();
    const Connect = () => {
        setRos(
            new ROSLIB.Ros({
              url : 'ws://192.168.137.84:9090'
            }
          ));
    }

    useEffect(() => {
        if (ros) {
            ros.on('connection', () => {
                console.log("Connection Made");
                setIsConnected(true);
            });
        }
    }, [ros, setIsConnected]);

    return (
        <div className="w-[90%] h-1/3 lg:w-1/4 lg:h-1/4 bg-[#fffffa] rounded-md flex flex-col justify-center items-center shadow-2xl">
            <h1 className="text-2xl text-red-600 p-8">No Connection</h1>
            <button className="bg-green-400 px-5 py-2 rounded-md text-slate-50 shadow-lg hover:bg-green-300 active:bg-green-500" onClick={Connect}>Connect To Robot</button>
        </div>
    );
}