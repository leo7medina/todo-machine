import React from "react";

function useLocalStorage(itemName, itemValue) {
  
    const [item, setItem] = React.useState(itemValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    

    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(itemValue));
            parsedItem = itemValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
          setLoading(false);
        } catch(error) {
          setLoading(false);
          setError(true);
        }
      }, 2000);
    }, []);

    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }

    return {item, saveItem, loading, error};
  }

  export { useLocalStorage };