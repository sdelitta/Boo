import React, { useEffect, useState, useRef } from "react";
import "./CSS/Boo.css"

export const App = () => {
  const cursorRef = React.useRef(null);
  const [isMouseMoving, setIsMouseMoving] = useState(true);
  const [booRight, setBooRight] = useState(true);
  const audioRef = useRef(null);  // Create a ref to the audio element

  // Function to play or pause the music
  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  // Function to change the volume
  const changeVolume = (event) => {
    const audio = audioRef.current;
    audio.volume = event.target.value;
  };
  
  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      const booPosition = cursorRef.current.getBoundingClientRect();
      
      // Determine if the boo should look right or left
      const shouldLookRight = clientX > booPosition.left + booPosition.width / 2;
      setBooRight(shouldLookRight);
  
      // Adjust the mouseX value based on the booRight state
      const mouseXAdjustment = shouldLookRight ? -110 : 50; // Modify these values as needed
      const mouseX = clientX + mouseXAdjustment;
      const mouseY = clientY - cursorRef.current.clientHeight / .7;
  
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      setIsMouseMoving(true);
    };
  
    document.addEventListener("mousemove", mouseMoveHandler);
    return () => document.removeEventListener("mousemove", mouseMoveHandler); // clear event listener on unmount
  }, []);
  
  

  useEffect(() => {
    const interval = setInterval(() => {
      setIsMouseMoving(false); // Set isMouseMoving to false every 1000ms
    }, 1000);
    
    return () => clearInterval(interval); // clear interval on unmount
  }, []);

  return (
    <div>
      <div className="boo-parent">
        <div className="blank">
          <p></p>
        </div>
        <div className="boo">
          <div className={
            isMouseMoving && booRight ? "cursor" : 
            !isMouseMoving && booRight ? "cursorStop" : 
            isMouseMoving && !booRight ? "cursor-right" : 
            "cursorStop-right"} 
            ref={cursorRef} 
          />
        </div>
      </div>
      <div className="music">
        <audio id="background-music" ref={audioRef} autoPlay loop>
          <source src="https://vgmsite.com/soundtracks/super-mario-world-snes-gamerip/kkkqxvrgcj/28%20Haunted%20House.mp3" type="audio/mpeg" />
        </audio>
        <button onClick={togglePlay}>Play/Pause</button>
        <input type="range" min="0" max="1" step="0.01" onChange={changeVolume} />
      </div>
      <div className="footer-parent">
        <div className="footer">.</div>
        <div className="copyright">
          <p>Steven DeLitta 2023</p>
        </div>
      </div>
    </div>
  );
} 

export default App;