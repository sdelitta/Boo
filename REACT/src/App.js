import React, { useEffect, useState } from "react";
import "./CSS/Boo.css"

export const App = () => {
  const cursorRef = React.useRef(null);
  const [isMouseMoving, setIsMouseMoving] = useState(true);
  const [booRight, setBooRight] = useState(true);
  
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
  );
} 

export default App;