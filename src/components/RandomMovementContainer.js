import { css, StyleSheet } from 'aphrodite';
import { useEffect, useRef, useState } from 'react';
import useWindowDimension from '../hooks/useWindowDimension';
import RandomMovementObject from './RandomMovementObject';

const styles = StyleSheet.create({
  maxSize: {
    height: '100%',
    width: '100%',
  },
});

function RandomMovementContainer() {
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
    <div className={css(styles.maxSize)} ref={container}>
      <RandomMovementObject size={size} />
    </div>
  );
}

export default RandomMovementContainer;
