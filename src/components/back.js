import React from "react";
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLeftLong ,faLeftFromBracket, faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';function Back () 

{
    const router = useRouter()

    return (
        <div className="Back" >
        {/* <Button  onClick={() => router.back()} variant="primary"   > 
        🔙 Back     
        </Button> */}
      <div>
                <FontAwesomeIcon onClick={() => router.back()} icon={faCircleArrowLeft} size="2x" />
                <a href="router.back()"></a>
      </div>            </div>

    )
}

export default Back;