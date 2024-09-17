import { useEffect, useState } from 'react';

// Custom hook set on window resize event, returning inner window size
function useWindowDimension() {
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });

  function handleWindowResize() {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return dimension;
}

export default useWindowDimension;
