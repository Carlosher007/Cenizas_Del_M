import React, { useState, useEffect, useRef} from 'react';
import './Environment.css';

const Environment = () => {

  const [upPressed, setUpPressed] = useState(false);
  const [leftPressed, setLeftPressed] = useState(false);
  const [downPressed, setDownPressed] = useState(false);
  const [rightPressed, setRightPressed] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [tic, setTic] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTic((prevTic) => prevTic == 5 ? 0 : prevTic + 1 );
    }, 100);
  
    return () => clearInterval(interval);
  }, []);

  useEffect(()=> {
    if (upPressed) {
        if (position.y != 0) {
            setPosition((prev) => ({...prev, y: prev.y - 10}))
        }
        
    }

    if (downPressed) {
        if (position.y != 280) {
            setPosition((prev) => ({...prev, y: prev.y + 10}))
        }
        
    }

    if (rightPressed) {
        setPosition((prev) => ({...prev, x: prev.x + 10}))
    }

    if (leftPressed) {
        setPosition((prev) => ({...prev, x: prev.x - 10}))
    }
  }, [tic])


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "ArrowUp") {
        setUpPressed(true);
      } else if (e.code === "ArrowLeft") {
        setLeftPressed(true);
      } else if (e.code === "ArrowDown") {
        setDownPressed(true);
      } else if (e.code === "ArrowRight") {
        setRightPressed(true);
      }
    };

    const handleKeyUp = (e) => {
      if (e.code === "ArrowUp") {
        setUpPressed(false);
      } else if (e.code === "ArrowLeft") {
        setLeftPressed(false);
      } else if (e.code === "ArrowDown") {
        setDownPressed(false);
      } else if (e.code === "ArrowRight") {
        setRightPressed(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
  }, []);

  useEffect(() => {
    // const handleKeyPress = (event) => {
    //   // Update position based on arrow key presses
    //   switch (event.key) {
    //     case 'ArrowUp':
    //       if (position.y != 0) {
    //         setPosition((prev) => ({ ...prev, y: prev.y - 10 }));
    //       }
          
    //       break;
    //     case 'ArrowDown':
    //       setPosition((prev) => ({ ...prev, y: prev.y + 10 }));
    //       break;
    //     case 'ArrowLeft':
    //       setPosition((prev) => ({ ...prev, x: prev.x - 10 }));
    //       break;
    //     case 'ArrowRight':
    //       setPosition((prev) => ({ ...prev, x: prev.x + 10 }));
    //       break;
    //     default:
    //       break;
    //   }
    // };

    // window.addEventListener('keydown', handleKeyPress);

    // // Cleanup event listener on component unmount
    // return () => {
    //   window.removeEventListener('keydown', handleKeyPress);
    // };
  }, []); // Empty dependency array ensures the effect runs once after initial render

  return (
    <div className="game-container">
      <div
        className="player"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </div>
  );
};

export default Environment;
