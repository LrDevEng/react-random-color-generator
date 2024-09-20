import { css, StyleSheet } from 'aphrodite/no-important';

// Component that moves and bounces around its parent container
// Currently styled to be a ball
// Input interface:
// - props.size             --> dimensions of parent container as object containing width and height property
// - props.backgroundColor  --> backgroundColor for component
// - props.onClick          --> callback function triggered when component is clicked
function RandomMovingObject(props) {
  const parentSize = props.size;
  const aspectRatio = 0.15;
  const ballSize = Math.max(parentSize.height * aspectRatio, 70);
  const maxX = parentSize.width - ballSize;
  const maxY = parentSize.height - ballSize;
  const animationDurationX600px = 3.1;
  const animationDurationY600px = 3.4;
  const animationDurationX = (animationDurationX600px * parentSize.width) / 600;
  const animationDurationY = (animationDurationY600px * parentSize.width) / 600;

  // Keyframe definition to move along horizontal axis
  const moveX = {
    from: { left: '0px' },
    to: { left: maxX },
  };

  // Keyframe definition to move along vertical axis
  const moveY = {
    from: { top: '0px' },
    to: { top: maxY },
  };

  const styles = StyleSheet.create({
    // Styling for ball shape
    ball: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      border: '2px solid white',
      borderRadius: '50%',
      boxShadow: '0 0 50px rgba(0, 0, 0, 1)',
      top: '0px',
      left: '0px',
      width: `${ballSize}px`,
      height: `${ballSize}px`,
      backgroundColor: 'transparent',
      transition: 'boxShadow .5s ease-in-out',
      textAlign: 'center',
      fontFamily: 'Ruluko, sans-serif',
      fontWeight: '800',
      fontStyle: 'normal',
      cursor: 'crosshair',
      ':active': {
        border: '2px solid black',
        boxShadow: '0 0 50px rgba(255, 255, 255, 1)',
      },
      overflow: 'hidden',
    },
    // Styling for animaton
    animate: {
      animationName: [moveX, moveY],
      animationDuration: `${animationDurationX}s, ${animationDurationY}s`,
      animationIterationCount: 'infinite',
      animationDirection: 'alternate',
      animationTimingFunction: 'linear',
    },
    // Styling for div checked by drone
    divDrone: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      borderRadius: '50%',
      height: '100%',
      backgroundColor: props.backgroundColor,
      transition: 'background-color .5s ease-in-out',
      '@media (max-height: 800px)': {
        fontSize: '0.8em',
      },
    },
  });

  return (
    <button
      className={css(styles.ball, styles.animate)}
      onClick={props.onClick}
    >
      <div className={css(styles.divDrone)}>
        Generated Color: {props.backgroundColor}
      </div>
    </button>
  );
}

export default RandomMovingObject;
