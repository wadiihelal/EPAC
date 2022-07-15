import React from "react";
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router'

import 'bootstrap/dist/css/bootstrap.min.css';function Back () 

{
    const router = useRouter()

    return (
        <div className="Back" >
        <Button  onClick={() => router.back()} variant="primary"   > 
        🔙 Back     
        </Button>
        </div>

    )
}

export default Back;