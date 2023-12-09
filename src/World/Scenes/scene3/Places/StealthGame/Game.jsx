import React, { useState, useEffect, useRef} from 'react';
import './Environment.css';
import Maps from './Maps';

const Game = () => {

  const [level, setLevel] = useState(0)
  const [position, setPosition] = useState(Maps[level].player);
  const [obstacles, setObstacles] = useState(Maps[level].obstacles);

  const [upPressed, setUpPressed] = useState(false);
  const [leftPressed, setLeftPressed] = useState(false);
  const [downPressed, setDownPressed] = useState(false);
  const [rightPressed, setRightPressed] = useState(false);

  const [tic, setTic] = useState(0);



  const collidesWall = (positions, dir) => {
    const {x, y} = positions

    // 0 -> up, 1 -> right, 2 -> down, 3 -> left
    switch (dir) {
      case 0:
        if (y == 0) return true
        break
      case 1:
        if (x == Maps[level].space.x - 20) return true
        break
      case 2:
        if (y == Maps[level].space.y - 20) return true
        break
      case 3:
        if (x == 0) return true
        break
      default:
        break      
    }

    return false
  }
  
  const collidesObstacle = (positions) => {
    const {x, y} = positions

    // 0 -> up, 1 -> right, 2 -> down, 3 -> left

    for (let i = 0; i < obstacles.length; i++) {
      // console.log("Player: ", position)
      // console.log("Obstacle: ", obstacles[i])
      if (y + 20 > obstacles[i].y && x + 20 > obstacles[i].x && y < obstacles[i].y + 20 && x < obstacles[i].x + 20 ) {
        return true
      }

    }
    return false
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTic((prevTic) => prevTic == 5 ? 0 : prevTic + 1 );
    }, 100);
  
    return () => clearInterval(interval);
  }, []);


  useEffect(()=> {
  
    // Check if lost

    if (collidesObstacle(position)) {
      setPosition(Maps[level].player)
    }

    // Player controls
    if (upPressed) {
        if (!collidesWall(position, 0)) {
            setPosition((prev) => ({...prev, y: prev.y - 10}))
        }
        
    }

    if (downPressed) {
        if (!collidesWall(position, 2)) {
            setPosition((prev) => ({...prev, y: prev.y + 10}))
        }
        
    }

    if (rightPressed) {

      if (!collidesWall(position, 1)) {
        setPosition((prev) => ({...prev, x: prev.x + 10}))
      }
    }

    if (leftPressed) {
      if (!collidesWall(position, 3)) {
        setPosition((prev) => ({...prev, x: prev.x - 10}))
      }
    }

    // Obstacles movement
    setObstacles(obstacles.map(e => {
      const x = e.x
      const y = e.y 
      if (e.type == 0) {
        if (e.dir == 0) {
          if (!collidesWall({x, y}, 1)) {
            return {...e, x: x + 5}
          } else {
            return {...e, dir: 3}
          }
        } else {
          if (!collidesWall({x, y}, 3)) {
            return {...e, x: x - 5}
          } else {
            return {...e, dir: 0}
          }
        }
      } else if (e.type == 1) {
        if (e.dir == 0) {
          if (!collidesWall({x, y}, 2)) {
            return {...e, y: y + 5}
          } else {
            return {...e, dir: 1}
          }
        } else {
          if (!collidesWall({x, y}, 0)) {
            return {...e, y: y - 5}
          } else {
            return {...e, dir: 0}
          }
        }
      }
    }))

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

  return (
    <div className="game-cosdntainer" style={{
      position: "relative",
      width: `${Maps[level].space.x}px`,
      height: `${Maps[level].space.y}px`,
      margin: "auto",
      border: "1px solid #000",
      overflow: "hidden"
    }}>
      <div
        className="player"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {
        obstacles.map((e, i) =>
          <div key={i}
            className="obstacle"
            style={{ left: `${e.x}px`, top: `${e.y}px` }}
          />
         )
      }
    </div>
  );
};

export default Game;
