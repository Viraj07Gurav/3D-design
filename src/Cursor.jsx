import React, { useState, useEffect, useRef } from "react";
import '../src/Cursor.css'; // Ensure the correct path to your CSS file

function Cursor() {
  const cursorDotOutline = useRef();
  const cursorDot = useRef();
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorEnlarged, setCursorEnlarged] = useState(false);

  /**
   * Mouse Moves
   */
  const onMouseMove = (event) => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
    positionDot(event);
  };

  const onMouseEnter = () => {
    setCursorVisible(true);
  };

  const onMouseLeave = () => {
    setCursorVisible(false);
  };

  const onMouseDown = () => {
    setCursorEnlarged(true);
  };

  const onMouseUp = () => {
    setCursorEnlarged(false);
  };

  const onResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  /**
   * Hooks
   */
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    window.addEventListener("resize", onResize);

    handleLinks(); // Make sure links are handled

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const { x, y } = mousePosition;
  const winDimensions = { width, height };
  let endX = winDimensions.width / 2;
  let endY = winDimensions.height / 2;

  /**
   * Position Dot (cursor)
   * @param {event}
   */
  function positionDot(e) {
    setCursorVisible(true);
    // Position the dot
    endX = e.pageX;
    endY = e.pageY;
    cursorDot.current.style.top = `${endY}px`;
    cursorDot.current.style.left = `${endX}px`;
  }

  /**
   * Toggle Cursor Visibility
   */
  function toggleCursorVisibility() {
    const opacity = cursorVisible ? 1 : 0;
    cursorDot.current.style.opacity = opacity;
    cursorDotOutline.current.style.opacity = opacity;
  }

  /**
   * Toggle Cursor Size
   */
  function toggleCursorSize() {
    if (cursorEnlarged) {
      cursorDot.current.style.transform = "translate(-50%, -50%) scale(0.7)";
      cursorDotOutline.current.style.transform = "translate(-50%, -50%) scale(5)";
    } else {
      cursorDot.current.style.transform = "translate(-50%, -50%) scale(1)";
      cursorDotOutline.current.style.transform = "translate(-50%, -50%) scale(1)";
    }
  }

  /**
   * Handle Links
   * Applies mouseover/out hooks on all links
   * to trigger cursor animation
   */
  function handleLinks() {
    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseover", () => {
        setCursorEnlarged(true);
      });
      el.addEventListener("mouseout", () => {
        setCursorEnlarged(false);
      });
    });
  }

  /**
   * Animate Dot Outline
   * Animates cursor outline with trailing effect.
   * @param {number} time
   */
  const animateDotOutline = (time) => {
    if (previousTimeRef.current !== undefined) {
      x += (endX - x) / 8;
      y += (endY - y) / 8;
      cursorDotOutline.current.style.top = `${y}px`;
      cursorDotOutline.current.style.left = `${x}px`;
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  // Update visibility and size during animation
  useEffect(() => {
    toggleCursorVisibility();
    toggleCursorSize();
  }, [cursorVisible, cursorEnlarged]);

  return (
    <>
      <div ref={cursorDotOutline} id="cursor-dot-outline" />
      <div ref={cursorDot} id="cursor-dot" />
    </>
  );
}

export default Cursor;
