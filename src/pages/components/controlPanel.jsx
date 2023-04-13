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
        let angular_direction;

        switch (direction) {
            case 'up':
                x_value = 0.6;
                y_value = 0;
                angular_direction = 0
                break;
            case 'left':
                x_value = 0;
                y_value = 0;
                angular_direction = 1.2
                break;
            case 'right':
                x_value = 0;
                y_value = 0;
                angular_direction = -1.2
                break;
            case 'down':
                x_value = -0.6;
                y_value = 0;
                angular_direction = 0
                break;
            case 'off':
                x_value = 0;
                y_value = 0;
                angular_direction = 0;
        }

        var twist = new ROSLIB.Message({
            linear : {
              x : x_value,
              y : y_value,
              z : 0.0
            },
            angular : {
              x : 0.0,
              y : 0.0,
              z : angular_direction
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
        <div className="w-[90%] h-1/3 lg:w-1/4 lg:h-1/4 bg-[#fffffa] rounded-md flex flex-row justify-center items-center shadow-2xl space-x-10">
            <div className="flex flex-col w-40 items-center space-y-4">
                <ArrowButton direction="up"  handleClick={() => sendMoveCommand("up")} />
                <div className="flex flex-row space-x-4 justify-center">
                    <ArrowButton direction="left" handleClick={() => sendMoveCommand("left")} />
                    <ArrowButton direction="down"  handleClick={() => sendMoveCommand("down")} />
                    <ArrowButton direction="right"  handleClick={() => sendMoveCommand("right")} />   
                </div>
            </div>
            <ArrowButton direction="off"  handleClick={() => sendMoveCommand("off")} />
        </div>
    );
}