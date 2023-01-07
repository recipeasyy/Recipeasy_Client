import { useState } from 'react';

export const useInput = (initialState: string, validator?: (value: string) => boolean) => {
  const [value, setValue] = useState(initialState);
  const onChange = (event: any) => {
    const {
      target: { value },
    } = event;

    if (validator === undefined) {
      setValue(value);
    } else {
      const data = validator(value);
      if (data) {
        setValue(value);
      }
    }
  };
  return { value, onChange };
};
