import React from "react";
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router'
import Back from "../src/components/back"
import { data } from "../src/components/searchBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import AlertReset from "../src/components/alertReset";
function Resultsearch () 

{
        return (
        <div >
                    <Back/>

          {data.projects.map((project, key) => {
            return <p key={key} >
                <table className="arrayResult">   
                    <tr >
                    <th className="coll">LoadTagID</th>
                    <th className="coll">PalletID</th>
                    <th className="coll">CreationDate</th>
                    <th className="coll">ReleaseDate</th>
  </tr>
                  
                    <tr>
                        <td className="coll">
                    {project.LoadTagID}
                    </td>
                    <td className="coll">
                    {project.PalletID}
                    </td>
                    <td className="coll">
                    {project.CreationDate}
                    </td>
                    <td className="coll ">
                    {project.ReleaseDate}
                    </td>
                    </tr>  
                </table>
                <br></br>
                <div className="centreReset">
                <AlertReset  /> </div>
            </p>;
          })}

         
        </div>
      );
}

export default Resultsearch;