import React from "react";
import Indexpallet from "../src/components/palletStats";
import Indexzone from "../src/components/zoneStats";
import Back from "../src/components/back";
import PalletChart from "../src/components/palletChart";
export default function stat() {
    return(
        
<div>
    <Back/>
         <div style={{marginTop:'4%',width:'100%',justifyContent: 'space-around',display:'flex'}}>
        <Indexpallet />
        <Indexzone />
        </div>
        <div>
        <PalletChart />

        </div>
</div>
  )
}