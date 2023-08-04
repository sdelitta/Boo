import React, { useState, useRef, useEffect } from "react"
import "../CSS/Boo.css"

export const Boo = () => {
  const cursorRef = useRef(null)
  const [isMovingRight, setIsMovingRight] = useState(true)

  useEffect(() => {
    const booMove = (event) => {
      const { clientX, clientY } = event
      const mouseX = clientX - cursorRef.current.clientWidth / 2
      const mouseY = clientY - cursorRef.current.clientHeight / 2

      // Determine if boo should look right or left
      setIsMovingRight(mouseX > cursorRef.current.offsetLeft)

      cursorRef.current.style.left = `${mouseX}px`
      cursorRef.current.style.top = `${mouseY}px`
    }

    document.addEventListener("mousemove", booMove)

    return () => {
      document.removeEventListener("mousemove", booMove)
    }
  }, [])

  const getCursorClass = () => {
    return isMovingRight ? "cursor-right" : "cursor"
  }

  return (
    <div className="boo-parent">
      <div className="blank"></div>
      <div className="boo">
        <div key={isMovingRight.toString()} className={getCursorClass()} ref={cursorRef} />
      </div>
      <div className="footer-parent">
        <div className="footer">.</div>
        <div className="copyright">
          <p>Steven DeLitta 2023</p>
        </div>
      </div>
    </div>
  )  
}

export default Boo