import  {  createContext,  useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";


const UserContext = createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});


export const UserProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
   const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

  const [selectedStockUID, setSelectedStockUID] = useState("");


  //Buy
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };
     
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  //Sell
   const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };
     
  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <UserContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow : handleOpenSellWindow,
        closeSellWindow : handleCloseSellWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen &&  <SellActionWindow uid={selectedStockUID}></SellActionWindow>}
    </UserContext.Provider>
  );
};

export default UserContext;
