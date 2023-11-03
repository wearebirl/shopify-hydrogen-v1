
import React, { useRef } from 'react';
import ReactPlayer from "react-player";
import PlayerControls from "~/components/Birl/PlayerControls";


const useStyles = makeStyles({
    playerWrapper: {
        width: "100%",
        position: "relative",
    },
});
export default function VideoPlayback({videoUrl}){
    const classes = useStyles();

        return(
        <div className={"w-fit m-10 h-auto rounded-md"}>
            <div className={classes.playerWrapper}>
               <ReactPlayer
                 url={`${videoUrl}`}
                 controls={true}
                 width={"100%"}
                 height={"100%"}
                 playing={false}
                 muted={true}
                 loop={false}
                 volume={0}
                 playbackRate={1}
                 className={"w-full h-full rounded-md"}
                />
                <PlayerControls/>
            </div>

        </div>
    )
}