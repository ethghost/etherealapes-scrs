import React from "react";
import "./ScoreCard.scss";

function ScoreCard({ wallet, index, currentAccount, connected, ens }) {

  return (
    <div>
      {wallet[0] === currentAccount &&  connected ? (
        <div className="scoreCardFound">
          <div> {index + 1} </div>
          <div className="highlight"> {wallet[0]}</div>
          <div> {wallet[1].toFixed()} </div>
        </div>
      ) : (
        <div className="scoreCard">
          <div> {index + 1} </div>
          <div> {wallet[0]} </div> 
          <div>{ens}</div>
          {/* <div> : </div> */}
          <div> {wallet[1].toFixed()} </div>

        </div>
        
      )}
    </div>
  );
}

export default ScoreCard;
