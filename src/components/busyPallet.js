import React , {useState , useEffect} from 'react';
import axios from 'axios';
import Back from './back'
import { notification } from 'antd';
import { Chart, Dataset } from 'react-rainbow-components';
import {
  RadiusBottomrightOutlined
} from '@ant-design/icons';
export default function BusyPallet () {
  
    const [data, setData] = useState([])
    useEffect(() => {
    const fetchData = async () =>{
        try {
          const { data: response } = await axios.get( 'https://arcane-peak-98567.herokuapp.com/maxDaysActive' );
          console.log("🚀 ~ file: busyPallet.js ~ line 16 ~ fetchData ~ response", response)
          
            setData( response );
            Object.keys( response ).map( ( palletId ) =>{
                let x = response[ palletId ]
                
            notification['error']({
                    message: 'Pallet Notification',
                    description:
                    `${palletId} has ${response[palletId]} days active ⚠️!`,
                className: 'custom-class',
                duration: 0,
                    placement: RadiusBottomrightOutlined,
            
          });
        
    })
        } catch (error) {
        console.error(error);
        }
    }
    fetchData();
    }, [] );
  return(

    true
)}




