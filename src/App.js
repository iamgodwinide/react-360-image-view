import React from 'react'
import { Pannellum } from "pannellum-react";
import myImage from './img/image.png'

const App = () => {
  return (
    <Pannellum
      width="100%"
      height="100vh"
      image={myImage}
      pitch={10}
      yaw={180}
      hfov={110}
      autoLoad
      onLoad={() => {
        console.log("panorama loaded");
      }}
    >
    </Pannellum>
  )
}

export default App