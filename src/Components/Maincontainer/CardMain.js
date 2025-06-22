import '../Maincontainer/card-main.css';
import { useState, useEffect } from 'react';

import dayjs from 'dayjs';
import InputComponent from './InputComponent';
import CounterInput from './CounterInput';
import ButtonSubmit from '../Maincontainer/ButtonSubmit';
export default function CardMain(){
    const [playerName, setPlayerName] = useState("");
    const [system, setSystem] = useState(1);
    const [playerCount, setPlayerCount] = useState(1);
    const [controllerCount, setControllerCount] = useState(0);
    const [session, setNewSession] = useState([]);
    const [currentTime, setCurrentTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [totalHr, setTotalHr] = useState(null);

    //let currentTime;
    let started ={};
    const startSession = ()=>{
        let start = dayjs();
        setCurrentTime(start);
      
            started.gamerName = playerName;
            started.systemname = system;
            started.noOfPlayers = playerCount;
            started.noOfControllers = controllerCount;
            started.currentTimestring = start?.format('hh:mm:ss')
        
        setNewSession((prev)=>[...prev, started]);
        console.log("items", started);
       
    };

    const stopSession = ()=>{
        let endTime = dayjs();
        setEndTime(endTime.format('hh:mm:ss'));

        
    if (currentTime) {
       // const durationInMinutes = 120; // or 'hour'
        const durationInMinutes = endTime.diff(currentTime, 'minute'); // or 'hour'
        const hours = Math.floor(durationInMinutes / 60);
        const minutes = durationInMinutes % 60;
        const formattedDuration = `${hours}h ${minutes}m`;

        setTotalHr(formattedDuration);
        console.log("Total Time:", formattedDuration);

        let singlePlayer = 150;
        let doublePlayer = 170;
        let additionalController = 25;
        let baseCharge = 0;

        if(playerCount === 1){
            baseCharge = (durationInMinutes/60) * singlePlayer
            }else if(playerCount === 2){
                baseCharge = (durationInMinutes/60) * doublePlayer
            }
            const controllerCharge = controllerCount * additionalController * ((durationInMinutes/60));
            const finalCharge = Math.ceil(baseCharge + controllerCharge);
            const sessionCopy = [...session];

// Find the last session
const lastIndex = sessionCopy.length - 1;

// Update the last session directly
sessionCopy[lastIndex] = {
    ...sessionCopy[lastIndex],
    charge: finalCharge
};

// Now update the state
setNewSession(sessionCopy);
    }
    }

    useEffect(()=>{
         if(endTime){
            console.log("Time changed")
            setEndTime(endTime);
         }
    },[endTime]);
    return(
        <>
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title"></h4>
                    <div className="card-header d-flex justify-content-between flex-wrap align-items-center pb-2">
                        <div className='res-common'>
                        <InputComponent nameclass="name-input" label="playername" onChange={setPlayerName} value={playerName} placeholder="Player Name"/>
                        </div>
                        <div className='d-flex align-items-center res-common'>
                            <label>System </label>
                            <InputComponent label="system" onChange={setSystem} value={system} type="number"/>
                        </div>
                        <div className='d-flex align-items-center res-common'>
                        <label>Players </label>
                        <CounterInput min={1} max={4} value={playerCount} onChange={(val) => setPlayerCount(Number(val))}/>
                        </div>
                        <div className='d-flex align-items-center res-common mob-direction'>
                        <label>Additional Controllers </label>
                        <CounterInput min={0} max={4} value={controllerCount} onChange={setControllerCount}/>
                        </div>
                        <ButtonSubmit classsubmit="start-button" onClick={startSession} label="Start Session"/>
                        
                    </div>
                </div>
            </div>

            <div className='data-print-wrapper'>
                <div className='card'>
                    <div className='card-header'>
                     
                            {session.map((item, i)=>(
                                    <div className="card-header d-flex justify-content-between response-wrap flex-wrap align-items-center pb-2" key={i}>
                                        <div><span>Name: </span>{item.gamerName}</div>
                                        <div><span>No of Controllers: </span>{item.noOfControllers}</div>
                                        <div><span>No of Players: </span>{item.noOfPlayers}</div>
                                        <div><span>Systom Number: </span>{item.systemname}</div>
                                        <div><span>Login Time: </span>{item.currentTimestring}</div>
                                        <div><span>End Time: </span>{endTime}</div>
                                        <div><span>Total Hours: </span>{totalHr}</div>
                                        <div><span>Amount: </span>{item.charge}</div>
                                        <ButtonSubmit classsubmit="stop-button" onClick={stopSession} label="Stop Session"/>
                                    </div>
                                
                            ))
                            }                   
                    </div>
                </div>
            </div>
        </>
    )
}