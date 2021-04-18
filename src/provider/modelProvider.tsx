import React, { createContext, useState } from "react";

const ModelContext = React.createContext({});
const Context = createContext({
  // onPresent: () => null,
  onDismiss: () => null,
  // setCloseOnOverlayClick: () => true,
});
const ModelContextProvider = ({ children }) => {
  //2907
  const [isOpen, setIsOpen] = useState(false);
  const [modalNode, setModalNode] = useState();
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);
  let handlePresent = (node) => { setModalNode(node); setIsOpen(true); };
  let handleDismiss=()=>{setModalNode(undefined);setIsOpen(false)} 
  // let handleIsOpen() handleset
 
 return React.createElement(Context.Provider, {
   value: {
    //  onPresent: handlePresent,
     onDismiss: handleDismiss,
    //  setCloseOnOverlayClick: setCloseOnOverlayClick,
   },
 },children);
//   return <ModelContext.Provider value={{}}>{children}</ModelContext.Provider>;
};
export { ModelContext, ModelContextProvider };
