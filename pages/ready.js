import React from "react";
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router'
import Back from "../src/components/back"
import NavigationStatus from "../src/components/navigationStatus";
import 'bootstrap/dist/css/bootstrap.min.css';
function Ready () 

{
    return(
        <div>
            <Back/>
            <NavigationStatus/>
            <h1 className="menuCentre"> 
        Pallet Inventory
    </h1>
    <br></br>
    <table className="arrayReady">   
                    <tr >
                    <th className="coll">PalletID</th>
                    <th className="coll">CurrentStation</th>

  </tr>
                  
                    <tr>
                        <td className="coll">
 1                    </td>
                    <td className="coll">
2                    </td>

                    </tr>  
                </table>
        </div>
    )
}

export default Ready;