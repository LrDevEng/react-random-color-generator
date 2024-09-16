import { css, StyleSheet } from 'aphrodite/no-important';

function RandomMovingObject(props) {
  const parentSize = props.size;
  const aspectRatio = 0.15;
  const ballSize = parentSize.height * aspectRatio;
  const maxX = parentSize.width - ballSize;
  const maxY = parentSize.height - ballSize;

  const animationDurationX600px = 2.55;
  const animationDurationY600px = 2.9;
  const animationDurationX = (animationDurationX600px * parentSize.width) / 600;
  const animationDurationY = (animationDurationY600px * parentSize.width) / 600;

  const moveX = {
    from: { left: '0px' },
    to: { left: maxX },
  };

  const moveY = {
    from: { top: '0px' },
    to: { top: maxY },
  };

  const styles = StyleSheet.create({
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
      backgroundColor: 'red',
      textAlign: 'center',
    },
    animate: {
      animationName: [moveX, moveY],
      animationDuration: `${animationDurationX}s, ${animationDurationY}s`,
      animationIterationCount: 'infinite',
      animationDirection: 'alternate',
      animationTimingFunction: 'linear',
    },
  });

  return (
    <div className={css(styles.ball, styles.animate)}>Generated Color:</div>
  );
}

export default RandomMovingObject;
