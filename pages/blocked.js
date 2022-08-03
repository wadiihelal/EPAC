import React , {useState , useEffect} from 'react';
import { TableWithBrowserPagination, Column, Badge ,Spinner } from 'react-rainbow-components';
import styled from 'styled-components';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import DynamicForm from '../src/components/DynamicForm3'
import { Button } from 'react-bootstrap';
import dayjs from "dayjs";

import Back from '../src/components/back'

const StatusBadge = ({ value }) => {
  console.log('type' , value)
      if (value.toString() === 'true') {
        return <Badge label='active' variant="success"/>;
    }
    return <Badge label='inactive' variant="error" className="rainbow-m-left_small" />;
}
const Dated = ({ value }) =>{
  // const x = new Date(value);
   const tidyDate = dayjs(value).format("MMM D, YY h:mm A");
   return <span>{tidyDate}</span>;      
}
const Main = () => {
   const [name, setName] = useState('');  

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('http://localhost:9090/pallets');
        setData(response);
        console.log(response)
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
 
  }, []);
    let options= [];
  data.map((e,index) => {
    {e.palletState== 'blocked' &&
    options.push({palletID : e.palletID, palletDateCreation:e.palletDateCreation, zoneId: e.zoneId , palletState : e.palletState,palletCreator:e.palletCreator}); }

  } );
  console.log("🚀 ~ file: blocked.js ~ line 50 ~ data.map ~ options", options)
  console.log(options)
  const [input,setInput]=useState('');
  const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }
    if (input.length>0) {
      options=options.filter((i)=>{      
           if ((i.palletCreator.match(input))){
            return(i.palletCreator.match(input))
          }
      })
    }

  return(

     <div >
       
      <h1 style={{marginTop:'5%' , marginBottom:'4%'}}>Blocked Pallets</h1>
      <div style={{marginLeft:'87%',marginBottom:'2%'}}>
          <input type='text' onChange = {handleChange}  class="form-control"value = {input}placeholder="Search" aria-label="Search" aria-describedby="search-addon" ></input> 
             
              </div>
       {loading && <Spinner size="large" />}       
      {!loading && (
        <TableWithBrowserPagination paginationAlignment="right" pageSize={5} data={options} keyField="id" defaultWidth={200} className='tableRainbow'>
            <Column header="ID" field="palletID" style={{fontSize:'20px'}} />
            <Column header="Creation Date" field="palletDateCreation" component={Dated} />
            <Column header="Creator" field="palletCreator" />
            <Column header="zoneID" field="zoneId" />

        </TableWithBrowserPagination>
          )}
    </div> 
)}
export default function active ()
{
  return(
    <div>
                 <Back />

        <Main />
      </div>

  )
}