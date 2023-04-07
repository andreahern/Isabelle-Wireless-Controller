import ArrowButton from './arrowButton';
import {useGlobalContext} from '../../context/store';
import {useEffect, useState} from 'react';
import * as ROSLIB from 'roslib'

export default function ControlPanel() {
    const {ros} = useGlobalContext();
    const [cmdVel, setCmdVel] = useState(null);

    const sendMoveCommand = (direction) => {
        console.log(direction);

        let x_value, y_value;

        switch (direction) {
            case 'up':
                x_value = 0;
                y_value = 0.5;
                break;
            case 'left':
                x_value = -0.5;
                y_value = 0;
                break;
            case 'right':
                x_value = 0.5;
                y_value = 0;
                break;
            case 'down':
                x_value = 0;
                y_value = 0;
                break;
        }

        var twist = new ROSLIB.Message({
            linear : {
              x : x_value,
              y : y_value,
              z : 0.0
            },
            angular : {
              x : 0.3,
              y : 0.0,
              z : 0.0
            }
            })
        cmdVel.publish(twist);
    }


    useEffect(() => {
        setCmdVel(new ROSLIB.Topic({
            ros : ros,
            name : '/cmd_vel',
            messageType : 'geometry_msgs/Twist'
          }));

          ros.on('error', function(error) {
            console.log('Error connecting to websocket server: ', error);
            });
            
            ros.on('close', function() {
            console.log('Connection to websocket server closed.');
            });          
    }, [ros, setCmdVel]);


    return (
        <div className="w-1/4 h-1/4 bg-[#fffffa] rounded-md flex flex-col justify-center items-center shadow-2xl">
            <div className="flex flex-col w-40 items-center space-y-4">
                <ArrowButton direction="up"  handleClick={() => sendMoveCommand("up")} />
                <div className="flex flex-row space-x-4 justify-center">
                    <ArrowButton direction="left" handleClick={() => sendMoveCommand("left")} />
                    <ArrowButton direction="down"  handleClick={() => sendMoveCommand("down")} />
                    <ArrowButton direction="right"  handleClick={() => sendMoveCommand("right")} />   
                </div>
            </div>
        </div>
    );
}