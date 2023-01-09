import { useState } from 'react';

export const useInput = (initialState: string, validator?: (value: string) => boolean) => {
  const [value, setValue] = useState(initialState);

  const reset = () => {
    setValue('');
  };

  const handleChangeInput = (event: any) => {
    if (!event.target.value) {
      reset();
    } else {
      setValue(event.target.value);
    }
  };
  return { value, handleChangeInput, reset };
};
