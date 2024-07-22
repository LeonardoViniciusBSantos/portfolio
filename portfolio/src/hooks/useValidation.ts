import { useState } from 'react';

type ValidateFunction = (value: string) => boolean;

const useValidation = (validateForm: ValidateFunction) => {
  const [value, setValue] = useState<string>('');
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const isFieldValid = validateForm(value);
  const inputHasError = isTouched && !isFieldValid;

  return {
    value,
    isTouched,
    setValue,
    setIsTouched,
    inputHasError,
  };
};

export default useValidation;
