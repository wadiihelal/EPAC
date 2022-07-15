import React, { Component , useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-awesome-modal'

const Alerts=({id})=>{

const [isVisible,setIsVisible] = useState(false) 

 const changeModal=()=> {

    setIsVisible(!isVisible)
 }

    return <section>
            
    <Button  value="Graph" onClick={() => changeModal()} variant="btn btn-danger" style={{fontSize:'28px' , borderRadius: "1rem"}}>Reset</Button>
    <Modal 
        visible={isVisible}
        width="1400"
        height="820"
        onClickAway={() =>changeModal()}
        >
    fonction reset
        <div>
            <p>{id}</p>
            <Button  onClick={() => changeModal()} variant="danger" >Close</Button>
        </div>
    </Modal>
</section>

}
export default Alerts
