import React, { useEffect, useState } from "react";
import "./CSS/Boo.css"

export const App = () => {
  const cursorRef = React.useRef(null);
  const [data, setData] = useState(null);
  const [isMouseMoving, setIsMouseMoving] = useState(null);
  const [timerVal, setTimerVal] = useState(0);
  
useEffect(() => {
    document.addEventListener("mousemove", event => {
    const { clientX, clientY } = event;
      const mouseX = clientX - cursorRef.current.clientWidth / 100;
      const mouseY = clientY - cursorRef.current.clientHeight;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      setIsMouseMoving(true);
    setTimerVal(0);
    });
}, []);

// check if previous mouse position is equal to current mouse position
useEffect(() => {
  console.log(timerVal)
  if (timerVal > 100) {
    setIsMouseMoving(false);
  }
}, [timerVal])

useEffect(() => {
  setInterval(() => {
    setTimerVal(val => {
      return val + 1;
    })
  }, 1)
}, [])
  console.log(data)
  
  
  return (
  <div className="App">
    <body>
      <div className="boo-parent">
        <div className="blank">
          <p></p>
        </div>
        <div className="boo">
          <div className={isMouseMoving ? "cursor" : "cursorStop"} ref={cursorRef} />
        </div>
      </div>
    </body>  
    <div className="footer-parent">
      <div className="footer">.</div>
      <div className="copyright">
        <p>Steven DeLitta 2022</p>
      </div>
    </div> 
  </div>
  )
} 

export default App