import React from "react"
import Button from 'react-bootstrap/Button';
import Alerts from '../src/components/alert'
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {   
    return (
     <div  className="centre">
       <div style ={{fontFamily: 'lucida grande',fontSize:'75px',color:' #141823'}}>
       </div>
       <br></br>
            <div style={{display :'flex' }}>
            <Button href="addPallet"  size='lg' class='btn btn-primary btn-lg ' type='checkbox' style={{}}>
              <h1 className='wlc'>ADD</h1>
            </Button>  
            <Button href="searchreq" size='lg' class='btn btn-primary ' type='checkbox'  style={{marginLeft:'54%  '}}>
            

             <h1  className='wlc'>
              Consult</h1> 
            </Button>  
            </div>
        </div> 

  )
}

export default Home