import { useEffect } from 'preact/hooks';

export default (key, initialValue) => {
  useEffect(() => {
    if (!sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, initialValue);
    }
  }, [key, initialValue]);

  function getValue() {
    return JSON.parse(sessionStorage.getItem(key));
  }

  function setValue(value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  return [getValue, setValue];
};
