import React from "react";
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router'
import Back from "../src/components/back"
import 'bootstrap/dist/css/bootstrap.min.css';
function Searchreq () 

{
    return(
        <div>
            <Back/>
            <div>
                <div className=" centre">
            <input type="search" className="form-control form-rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{height:'150%', borderRadius: "1rem"}}/>
            <br></br>
            <span>
            <Button variant="btn btn-primary" href="resultsearch" style={{marginLeft:'25%',fontSize:'x-large',width:'50%' }}>Search</Button>
            </span>
            </div>
                        </div>
        </div>
    )
}

export default Searchreq;