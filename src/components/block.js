import React, { Component , useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-awesome-modal'

const Block=({id})=>{

const [isVisible,setIsVisible] = useState(false) 



    return (
        <div>
            {alert(id)}
            {console.log(id)}
        </div>

    )
}
export default Block
