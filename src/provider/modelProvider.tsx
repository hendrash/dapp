import React, { createContext, useState } from "react";

const ModelContext = React.createContext({});
const Context = createContext({
  onDismiss: () => null,
});
const ModelContextProvider = ({ children }) => {
  const [modalNode, setModalNode] = useState();
  let handleDismiss=()=>{setModalNode(undefined);
  } 
 
 return React.createElement(Context.Provider, {
   value: {
     onDismiss: handleDismiss,
   },
 },children);
};
export { ModelContext, ModelContextProvider };
