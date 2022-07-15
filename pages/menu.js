import React from "react";
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router'
import Back from "../src/components/back"

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

    <div >
    <Button className="menuButtonCentre" variant="success" size="lg" href="active">
        <h1 style={{fontSize:'70px'}}>Active</h1>
    </Button>
    <Button className="menuButtonCentre"  variant="warning" href="ready">
    <h1 style={{fontSize:'70px'}}>Ready</h1>
    </Button>
    <Button className="menuButtonCentre" variant="danger" href='blocked'>
    <h1 style={{fontSize:'70px'}}>Blocked</h1>
    </Button>
    </div>
        </div>
    )
}

export default Menu;