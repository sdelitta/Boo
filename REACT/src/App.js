import React from "react"
import { useState } from "react"
import "./CSS/Boo.css"

export const App = () => {
  const cursorRef = React.useRef(null)
  const [delayHandler, setDelayHandler] = useState(null)
  const [data, setData] = useState(null)
  // const [booState, setBooState] = useState(null)
  console.log(data)
  
  React.useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      setDelayHandler(setTimeout(() => {
      const { clientX, clientY } = event;
      const mouseX = clientX - cursorRef.current.clientWidth / 100
      const mouseY = clientY - cursorRef.current.clientHeight / 1
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      setData(mouseX, mouseY)
        }, 1000))
    })
  }, [])
  clearTimeout(delayHandler)
  
  return (
    <div className="boo-parent">
      <div className="blank"></div>
      <div className="boo">
        {data ? <div className="cursor" ref={cursorRef} /> : <div className="cursorStop" ref={cursorRef}/>}
      </div>
    </div>
  )
} 

export default App