import React ,{ createContext,useState } from 'react';

const Context = createContext();


const ContextProvider = (props) => {
  const [title, setTitle] = useState("Hello World")

  return (
    <Context.Provider value={title}>
      {props.children}
    </Context.Provider>
  )
}