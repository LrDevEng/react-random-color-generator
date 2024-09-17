import { css, StyleSheet } from 'aphrodite';
import { useEffect, useRef, useState } from 'react';
import useWindowDimension from '../hooks/useWindowDimension';
import RandomMovingObject from './RandomMovingObject';

const styles = StyleSheet.create({
  greedy: {
    height: '100%',
    width: '100%',
  },
});

// Container component holding random moving object (child) taking as much space on the viewport as possible
// Passing its current size to the child
// Input interface:
// - props.onObjectClick    --> callback function when random moving object (child) is clicked
// - props.backgroundColor  --> backgroundColor of random moving object (child)
function RandomMovementContainer(props) {
  const windowDimension = useWindowDimension();
  const container = useRef();
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setSize({
      width: container.current.offsetWidth,
      height: container.current.offsetHeight,
    });
  }, [windowDimension]);

  return (
    <div className={css(styles.greedy)} ref={container}>
      <RandomMovingObject
        size={size}
        backgroundColor={props.backgroundColor}
        onClick={props.onObjectClick}
      />
    </div>
  );
}

export default RandomMovementContainer;
