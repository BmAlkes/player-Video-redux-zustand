import React from "react";
import ReactPlayer from "react-player";

const PlayerVideo = () => {
  return (
    <>
      <div className="flex-1">
        <div className="w-full bg-zinc-950 aspect-video">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url="https://www.youtube.com/watch?v=Jai8w6K_GnY"
          />
        </div>
      </div>
    </>
  );
};

export default PlayerVideo;
