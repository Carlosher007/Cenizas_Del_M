// withLoading.jsx
import React, { useEffect, useState } from 'react';
import { useGameStore } from '../../store/game';
import Loader from './Loader';

const withLoading = (Component, speed) => {
  return (props) => {
    const [loaded, setLoaded] = useState(false);
    const {setIsLoading} = useGameStore.getState();
    
    useEffect(() => {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setLoaded(true);
        setTimeout(() => {
          setIsLoading(false);
        },2000);
      }, speed);
      return () => {
        clearTimeout(timer);
      };
    }, []);

    return (
      <Loader isReady={loaded}>
        <Component {...props} />
      </Loader>
    );
  };
};

export default withLoading;