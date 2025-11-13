import React, { useRef, useState } from "react";
import "../styles/videoComponent.css";
const server_url = "http://localhost:8000";

var connections = {};

 const peerConfigurations = {
        "iceServers": [
            { "urls": "stun:stun.l.google.com:19302" },
        ]
    }
    export default function VideoMeetComponent () {

        var socketRef= useRef();
        let socketIdRef= useRef();

        let localVideoRef= useRef();

        let[videoAvailable, setVideoAvailable] =useState(true);

        let[audioAvailable, setaudioAvailable] =useState(true);

        let[video, setVideo] =useState();

        let[audio, setAudio] =useState();

        let[screen, setScreen] =useState();

        let[showModal, setModal] =useState();

        let[screenAvailable, setScreenAvailable] =useState();

        let [messages, setMessages] = useState([])

        let [message, setMessage] = useState("");

        let [newMessage, setNewMessage] = useState(0);

        let [askForUsername, setAskForUsername] = useState(true);

        let [username, setUsername] = useState("");

        const videoRef = useRef([]);

        let [videos, setVideos] = useState([])




    return (

        <div>

            {askForUsername === true ? 

            <div> 

            </div>: <></>

            }

        </div>
    )
}
