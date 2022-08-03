import React from "react";
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router'
import Back from "../src/components/back"
import Alerts from "../src/components/alert";
import 'bootstrap/dist/css/bootstrap.min.css';
function Menu () 

{
    return(
        <div>
            <Back/>
        <br></br>
    <h1 className="menuCentre"> 
        Pallet Inventory
    </h1>
    <br></br>

    <div style={{margin:'auto'}} >
    <Button className="menuButtonCentre" variant="success" size="lg" href="active">
        <h1 style={{fontSize:'70px',color:'white',borderRadius:'20px'}}>Active</h1>
    </Button>
    <Button className="menuButtonCentre"  variant="warning" href="ready">
    <h1 style={{fontSize:'70px' ,borderRadius:'20px'}}>Ready</h1>
    </Button>
    <Button className="menuButtonCentre" variant="danger" href='blocked'>
    <h1 style={{fontSize:'70px',color:'white',borderRadius:'20px'}}>Blocked</h1>
    </Button>
    <div style={{textAlign:'center',marginLeft:'2%',marginTop:'5%'}}>
    
                        <Alerts id={5 } />
    </div>
    </div>
        </div>
    )
}

export default Menu;