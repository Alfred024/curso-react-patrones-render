import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        setError(error);
      }
    }, 3000);
  });
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };

  //Es la función que no snotifica si en verdad hay un cambio en los TODO´s
  //Esto pasa cuando un todo se agrega, elimina,
  //También presionando un botón check, aunque eso lo vamos a ignorar por ahora
  const storageChanged = () =>{
    const newInfo = JSON.parse(localStorage.getItem(itemName));
    setItem(newInfo);
  }

  return {
    item,
    saveItem,
    storageChanged,
    loading,
    error,
  };
}

export { useLocalStorage };
