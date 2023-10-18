import { useEffect, useState } from "react";
import * as localforage from "localforage";

const useLocalForage = (key: string, initialValue?: any) => {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    const getItem = async () => {
      const value = await localforage.getItem(key) || initialValue;
      setStoredValue(value);
    };
    getItem();
  }, [key, initialValue]);

  const setLocalForage = (value: any) => {
    const setItem = async () => {
      await localforage.setItem(key, value);
      setStoredValue(value);
    };
    setItem();
  };

  const removeLocalForage = () => {
    const removeItem = async () => {
      await localforage.removeItem(key);
      setStoredValue(null);
    };
    removeItem();
  };

  return { storedValue, setLocalForage, removeLocalForage };
};

export default useLocalForage;
