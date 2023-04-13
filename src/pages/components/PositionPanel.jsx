import ArrowButton from './arrowButton';
import {useGlobalContext} from '../../context/store';
import {useEffect, useState} from 'react';
import * as ROSLIB from 'roslib'

export default function ControlPanel() {
    const {ros} = useGlobalContext();
    const [cmdPosition, setCmdPosition] = useState(null);

    const [xVal, setXVal] = useState(0);
    const [yVal, setYVal] = useState(0);
    const [wVal, setWVal] = useState(0);

    useEffect(() => {
      setCmdPosition(new ROSLIB.Topic({
            ros : ros,
            name: '/cmd_position',
            messageType: 'geometry_msgs/Point'
          }));

      ros.on('error', function(error) {
        console.log('Error connecting to websocket server: ', error);
        });
      
      ros.on('close', function() {
      console.log('Connection to websocket server closed.');
      });    
    }, [ros, setCmdPosition]);

    const sendPosition = () => {
      console.log(xVal, yVal, wVal)

      const position = new ROSLIB.Message({
          x: parseFloat(xVal),
          y: parseFloat(yVal),
          z: parseFloat(wVal)
      });

      cmdPosition.publish(position);
    }

    return (
        <div className="w-[90%] h-1/3 lg:w-1/4 lg:h-1/4 bg-[#fffffa] rounded-md flex flex-col justify-center items-center shadow-2xl space-y-8 p-4">
          <div className="flex flex-row justify-center space-x-4">
              <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  value={xVal} onChange={(e) => setXVal(e.target.value)}  />
              <input type="number"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  value={yVal} onChange={(e) => setYVal(e.target.value)}  />
              <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={wVal} onChange={(e) => setWVal(e.target.value)} />
          </div>
          <div>
            <button className="bg-green-400 px-6 py-2 rounded-md" onClick={() => sendPosition()}>Send Coordinate</button>
          </div>
        </div>
    );
}