import React, { Component , useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-awesome-modal'
import { useRouter } from 'next/router'
import {  message  } from 'antd';
import "antd/dist/antd.css"
import axios from 'axios';
const AlertReset=({id})=>{

const [isVisible,setIsVisible] = useState(false) 
  const router = useRouter();


 const changeModal=()=> {

    setIsVisible(!isVisible)
 }
     const cancel =( ) =>{
                setIsVisible(!isVisible)
    return(
        message.error('Canceled')
    ) 
    }
 const submit = async( ) =>{
          try{
                const response = await axios.put(`http://localhost:9090/resetpallet/${id}`)
                console.log('data',response?.data);
                console.log(JSON.stringify(response))
                message.success(`pallet ${id} is resetted`)
                router.push('/searchreq')}
              catch (err) {
                console.log(err)
                }
            setIsVisible(!isVisible)
        return(null) }


    return <section>
            
    <Button  value="Graph" onClick={() => changeModal()} variant="btn btn-danger" style={{fontSize:'28px' , borderRadius: "1rem"}}>Reset</Button>
    <Modal 
        visible={isVisible}
        width="800"
        height="250"
        onClickAway={() =>changeModal()}
        >
   
        <div style={{display:'flex' , justifyContent:'center',alignItems:'center',paddingTop:'8%'}}>

            <h1 style={{fontSize:'25px',paddingTop:'2%'}}> Are you sure to reset this pallet with id : {id} ?</h1>
            <br></br>
        </div>
        <div style={{display:'flex' , justifyContent:'center',alignItems:'center',paddingTop:'5%'}}>
            <Button  onClick={() => submit()} variant="warning"  style={{align:'center',width:'18%',fontSize:'inherit'}}>Reset</Button>
            <Button  onClick={() => cancel()} variant="danger"  style={{marginLeft:'2%',width:'18%',fontSize:'inherit'}}>Close</Button>
        </div>
    </Modal>
</section>

}
export default AlertReset