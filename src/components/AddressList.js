import React from "react";
import { apiURL } from "../util/apiURL";
import ScoreCard from "./ScoreCard";
import { useEffect } from "react";
import axios from "axios";
import LoadingView from "./LoadingView";
import "./AddressList.scss"


function AddressList({currentAccount, connected}) {
  const API = apiURL();
  const [wallets, setWallets] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetchWallets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchWallets = async () => {
    const res = await axios.get(`${API}`);
    setLoading(false);
    setWallets(res.data.scoreData.wallets);
  };
  
  let sortable = []
  for(let wallet in wallets){
    sortable.push([wallet, wallets[wallet]])
  }
  const sortedAdress = sortable.sort((a,b) => {
    return b[1] - a[1]
  })

  return (
    <div className="addressList">
      <h3 className="addressList__title">Wallet Scores</h3>
      {loading && <LoadingView />}
      {/* {Object.entries(wallets).map((wallet, i) => {
        console.log(wallet)
        return (
          <ScoreCard connected={connected} currentAccount={currentAccount} key={i} wallet={wallet} index={i}/>
        )
      })} */}
      {/* {Object.keys(wallets).sort((a,b) => (

      ))} */}
      {sortedAdress.map((wallet, i) => {
        return (
          <ScoreCard connected={connected} currentAccount={currentAccount} key={i} wallet={wallet} index={i}/>
        )
      })}
    </div>
  )
}

export default AddressList;
