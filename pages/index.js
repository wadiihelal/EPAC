import React from "react"
import Button from 'react-bootstrap/Button';
import Alerts from '../src/components/alert'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState , useEffect } from "react";
import axios from "axios";
import {  notification, Space } from 'antd';
import BusyPallet from "../src/components/busyPallet";
import {
  RadiusBottomrightOutlined
} from '@ant-design/icons';

function Home ()
{   
  const [name, setName] = useState('');  
  
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])

  useEffect( () =>
  {
    const openNotification = ( nb, zone ) =>
    {
  
      const key = `open${Date.now()}`;
      const btnclose = (
        <Button variant='danger' type="primary" size="small" onClick={() => notification.close(key)}>
          Close
        </Button>
      );
      const btn = (
        <Button variant='danger' type="primary" size="small" onClick={() => notification.close(key)}>
          Close
        </Button>
      );
      console.log(data)
      setLoading(true);
      console.log(loading)

      notification['warning']({
          message: 'Zone Notification',
          description:
           ` ${zone} has ${nb} pallets , go check it now !`,
        className: 'custom-class',
        duration: 0,
          btn,
          btnclose,
        key,
        placement: RadiusBottomrightOutlined,
        

        });
      
    };
    const fetchData = async () =>{
      try {
        const {data: response} = await axios.get('https://murmuring-reef-55468.herokuapp.com/maxNbPalletActive');
        setData( response );
        setLoading(true);
        openNotification( response.number, response.zone)
        console.log(response)
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
    setLoading(true);
   
  }, [] );

    return (
      <div className="centre">
        <BusyPallet />
       <div style ={{fontFamily: 'lucida grande',fontSize:'70px',color:' #141823',marginLeft:'20%'}}>
       </div>
       <br></br>
            <div style={{display :'flex' }}>
            <Button href="addPallet"  size='lg' class='btn btn-primary btn-lg ' type='checkbox' style={{borderRadius:'27px'}}>
              <h1 className='wlc'>ADD</h1>
            </Button>  
            <Button href="searchreq" size='lg' class='btn btn-primary ' type='checkbox'  style={{marginLeft:'54%',borderRadius:'27px'}}>
            

             <h1  className='wlc'>
              Consult</h1> 
          </Button>  

            </div>
        </div> 

  )
}

export default Home



