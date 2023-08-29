import React from 'react'
import WebC from "react-webcam"

const WebCamp = () => {
    console.log("hy")
    debugger
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };
    return (
        <div>
            <>
                <WebC
                    audio={false}
                    height={720}
                    screenshotFormat="image/jpeg"
                    width={1280}
                    videoConstraints={videoConstraints}
                />
            </>
        </div>
    )
}

export default WebCamp
