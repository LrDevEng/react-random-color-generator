import { css, StyleSheet } from 'aphrodite';

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
      display: 'block',
      position: 'relative',
      borderRadius: '50%',
      width: parentSize.height * aspectRatio,
      height: parentSize.height * aspectRatio,
      backgroundColor: 'red',
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
    <div className={css(styles.ball, styles.animate)}>
      Height: {parentSize.height}
      <br />
      Width: {parentSize.width}
    </div>
  );
}

export default RandomMovingObject;
