import "./App.css";
import { useState } from "react";
import AddressList from "./components/AddressList";
import Connect from "./components/Connect";
import Web3 from "web3";
import Footer from "./components/Footer";
import Connected from "./components/connected/Connected";



function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [ensDomain, setEnsDomain] = useState(null)
  const onConnect = async (provider) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    const ens = await web3.eth.registry.ens
    if (accounts.length === 0) {
      console.log("Please connect to MetaMask!");
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
      console.log(ens, "ENSSS")
      setEnsDomain(ens);
      setIsConnected(false);
    }
    setIsConnected(true);
  };

  const onDisconnect = () => {
    setIsConnected(false);
  };

  return (
    <div>
      {!isConnected && (
        <Connect onConnect={onConnect} onDisconnect={onDisconnect} />
      )}
       {isConnected && <Connected currentAccount={currentAccount} />}
      <h1>Ethereal Apes</h1>
      <AddressList currentAccount={currentAccount} connected={isConnected} ens={ensDomain}/>
      <Footer />
    </div>
  );
}

export default App;

