import React from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useRouter } from 'next/router'
import Back from "../src/components/back"
import AlertReset from "../src/components/alertReset";
import NavigationStatus from "../src/components/navigationStatus";
import 'bootstrap/dist/css/bootstrap.min.css';
function Active () 
{
    return(
      
        <div>
            <Back/>
            <NavigationStatus/>
    <h1 className="menuCentre"> 
        Pallet Inventory
    </h1>

    <div>
    <table className="arrayActive">   
                    <tr >
                    <th className="coll">LoadTagID</th>
                    <th className="coll">PalletID</th>
                    <th className="coll">Zone</th>
                    <th className="coll">Action</th>
                     </tr>
                  
                    <tr>
                        <td className="coll">
 1                    </td>
                    <td className="coll">
2                    </td>
                    <td className="coll">
3                    </td>
                    <td className="">
                        <AlertReset id={5}/>
</td>
                    </tr>  
                </table>
                <br></br>
    </div>
    </div>
    )
}

export default Active;