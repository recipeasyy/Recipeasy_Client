import { useState, useEffect } from 'react';

export const useImage = (src: string) => {
  const [sourceLoaded, setSourceLoaded] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSourceLoaded(src);
  }, [src]);

  return sourceLoaded;
};
