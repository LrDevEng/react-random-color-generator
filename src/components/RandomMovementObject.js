import './RandomMovement.css';
import { css, StyleSheet } from 'aphrodite';
import { useEffect, useRef, useState } from 'react';

function RandomMovementObject(props) {
  const parentSize = props.size;
  const aspectRatio = 0.15;
  const [relPos, setRelPos] = useState({
    x: 0,
    y: 0,
  });

  // const styles = StyleSheet.create({
  //   fixedSizeBall: {
  //     display: 'block',
  //     height: parentSize.height * aspectRatio,
  //     width: parentSize.height * aspectRatio,
  //     border: '2px solid black',
  //     borderRadius: '50%',
  //     background: 'red',
  //   },
  //   move: {
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     animationName: [moveX],
  //     animationDuration: '4s',
  //     animationIterationCount: 'infinite',
  //     animationDirection: 'alternate',
  //   },
  // });

  // const moveX = {
  //   '0%': {
  //     left: '0px',
  //   },
  //   '100%': {
  //     left: '500px',
  //   },
  // };

  // const styles = StyleSheet.create({
  //   fixedSizeBall: {
  //     display: 'block',
  //     height: parentSize.height * aspectRatio,
  //     width: parentSize.height * aspectRatio,
  //     border: '2px solid black',
  //     borderRadius: '50%',
  //     background: 'red',
  //   },
  //   move: {
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     animationName: [moveX],
  //     animationDuration: '4s',
  //     animationIterationCount: 'infinite',
  //     animationDirection: 'alternate',
  //   },
  // });

  // useEffect(() => {
  //   setRelPos({
  //     x: Math.round(Math.random() * parentSize.width * (1 - aspectRatio)),
  //     y: Math.round(Math.random() * parentSize.height * (1 - aspectRatio)),
  //   });
  // }, [parentSize]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setRelPos({
  //       x: Math.round(Math.random() * parentSize.width * (1 - aspectRatio)),
  //       y: Math.round(Math.random() * parentSize.height * (1 - aspectRatio)),
  //     });
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, [parentSize, relPos]);

  // useEffect(() => {
  //   setTransition('all linear 10s');
  //   setRelPos({
  //     x: 0,
  //     y: parentSize.height / 2,
  //   });
  //   return () => {
  //     setTransition('all linear 10s');
  //   };
  // }, [parentSize]);

  // let trigger = 0;
  // const interval = 10000;
  // setInterval(() => {
  //   console.log('triggered');
  //   trigger++;
  // }, interval);

  // useEffect(() => {
  //   setRelPos({
  //     x: Math.round(Math.random() * parentSize.width * (1 - aspectRatio)),
  //     y: Math.round(Math.random() * parentSize.height * (1 - aspectRatio)),
  //   });
  // }, [trigger, parentSize]);

  // const interval = useRef(0);
  // useEffect(() => {
  //   interval.current = 9000;
  //   const timer = setInterval(() => {
  //     setRelPos((lastPos) => {
  //       const nextPosition = nextPos(
  //         lastPos,
  //         parentSize,
  //         styles.fixedSizeBall.height,
  //         styles.fixedSizeBall.width,
  //       );
  //       return {
  //         x: nextPosition.x,
  //         y: nextPosition.y,
  //       };
  //     });
  //   }, interval.current);
  //   return () => clearInterval(timer);
  // }, [relPos, parentSize, styles]);

  // useEffect(() => {
  //   setRelPos((lastPos) => {
  //     const nextPosition = nextPos(
  //       lastPos,
  //       parentSize,
  //       styles.fixedSizeBall.height,
  //       styles.fixedSizeBall.width,
  //     );
  //     return {
  //       x: nextPosition.x,
  //       y: nextPosition.y,
  //     };
  //   });
  // }, [parentSize, styles]);

  return (
    <div className="move">
      Height: {parentSize.height}
      <br />
      Width: {parentSize.width}
    </div>
  );
}

function nextPos(lastPos, parentSize, objectHeight, objectWidth) {
  let x = 0;
  let y = 0;
  const maxX = parentSize.width - objectWidth;
  const maxY = parentSize.height - objectHeight;
  if (lastPos.y === 0) {
    x = maxX;
    y = Math.round(Math.random() * maxY);
  }
  if (lastPos.x >= maxX) {
    x = Math.round(Math.random() * maxX);
    y = maxY;
  }
  if (lastPos.y >= maxY) {
    x = 0;
    y = Math.round(Math.random() * maxY);
  }
  if (lastPos.x === 0) {
    x = Math.round(Math.random() * maxX);
    y = 0;
  }
  return { x: x, y: y };
}

export default RandomMovementObject;
