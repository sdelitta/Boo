import React, { useEffect, useState } from "react";
import "./CSS/Boo.css"

export const App = () => {
  const cursorRef = React.useRef(null);
  const [data, setData] = useState(null);
  const [isMouseMoving, setIsMouseMoving] = useState(null);
  const [timerVal, setTimerVal] = useState(0);
  const [booLeft, setBooLeft] = useState(null)
  const [booRight, setBooRight] = useState(null)
  
  
  useEffect(() => {
    document.addEventListener("mousemove", event => {
      const { clientX, clientY } = event;
      const mouseX = clientX - cursorRef.current.clientWidth / 70;
      const mouseY = clientY - cursorRef.current.clientHeight / .7;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      setIsMouseMoving(true);
      setTimerVal(0);
      
      // var follower = document.getElementById("follower")
      // if (mouseX > follower.offsetLeft + follower.offsetWidth / 2) {
      //   //cursor is to the right of the follower
      //   follower.style.transform = "scalex(1)"
      //   setBooRight(true)
      //   setBooLeft(false)
      // } else {
      //   //cursor is to the left of the follower
      //   follower.style.transform = 'scalex(-1)'
      //   setBooRight(false)
      //   setBooLeft(true)
      // }

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
  
  useEffect(() => {

    var follower = document.getElementById("follower")
    document.addEventListener('mousemove', function(event) {

      var x = event.clientx;
      var y = event.clienty;
      if (x > follower.offsetLeft + follower.offsetWidth / 2) {
        //cursor is to the right of the follower
        follower.style.transform = "scalex(1)"
        setBooRight(true)
        setBooLeft(false)
      } else {
        //cursor is to the left of the follower
        follower.style.transform = 'scalex(-1)'
        setBooRight(false)
        setBooLeft(true)
      }
    })
  }, [])
  
  return (
    <div className="boo-parent">
      <div className="blank">
        <p></p>
      </div>
      <div className="boo">
        <div className={isMouseMoving && setBooRight ? "cursor" : !isMouseMoving && setBooRight ? "cursorStop" : isMouseMoving && setBooLeft ? "cursor-right" : "cursorStop-right"} ref={cursorRef} />
      </div>
    </div>
  )
} 

export default App