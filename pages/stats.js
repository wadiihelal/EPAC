import React , {useState , useEffect} from 'react';
import axios from 'axios';
import Indexpallet from "../src/components/palletStats";
import Indexzone from "../src/components/zoneStats";
import Back from "../src/components/back";
import PalletChart from "../src/components/palletChart";
import BusyPallet from '../src/components/busyPallet';
import { Button, notification } from 'antd';

export default function stat ()
{

  
  return (
        
    <div>
        <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>
      <Back />
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