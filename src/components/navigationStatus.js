

import React from "react";
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
function NavigationStatus () 

{
    return(
        <div>   
    <Button className="navigationStatus" variant="success" size="lg" href="active" style={{marginLeft:'25%'}}>
        <h1 style={{fontSize:'40px'}}>Active</h1>
    </Button>
    <Button className="navigationStatus"  variant="warning" href="ready">
    <h1 style={{fontSize:'40px'}}>Ready</h1>
    </Button>
    <Button className="navigationStatus" variant="danger" href='blocked'>
    <h1 style={{fontSize:'40px'}}>Blocked</h1>
    </Button>
    </div>    
    )
}

export default NavigationStatus;