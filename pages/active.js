import React , {useState , useEffect} from 'react';
import { TableWithBrowserPagination, Column, Badge ,Spinner } from 'react-rainbow-components';
import styled from 'styled-components';
import Back from '../src/components/back'
import dayjs from "dayjs";


import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import DynamicForm from '../src/components/DynamicForm3'
import { Button } from 'react-bootstrap';

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
        const {data: response} = await axios.get('https://arcane-peak-98567.herokuapp.com/pallets');
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
    {e.palletState== 'active' &&
    options.push({palletID : e.palletID.toString(), palletDateCreation:e.palletDateCreation, zoneDesignation: e.zoneDesignation , palletState : e.palletState,palletCreator:e.palletCreator}); }

  });
  console.log(options)
    const [input,setInput]=useState('');
      const handleChange = (e) => {
            e.preventDefault();
            setInput(e.target.value)
        }
    if (input.length>0) {
      options=options.filter((i)=>{
          if ((i.palletID.match(input))){
            return(i.palletID.match(input))
          }         
           if ((i.palletCreator.match(input))){
            return(i.palletCreator.match(input))
          }
      })
    }
  return(

    <div >
       
      <h1 style={{marginTop:'5%' , marginBottom:'4%'}}>Active Pallets</h1>
      <div style={{marginLeft:'87%',marginBottom:'2%'}}>
          <input type='text' onChange = {handleChange}  class="form-control"value = {input}placeholder="Search" aria-label="Search" aria-describedby="search-addon" ></input> 
             
              </div>
       {loading && <Spinner size="large" />}       
      {!loading && (
        <TableWithBrowserPagination paginationAlignment="right" pageSize={5} data={options} keyField="id" defaultWidth={200} className='tableRainbow'>
            <Column header="ID" field="palletID" style={{fontSize:'20px'}} />
            {/* <Column header="Status" field="palletState" /> */}
            <Column header="Creation Date" field="palletDateCreation" component={Dated} />
            <Column header="Creator" field="palletCreator" />
            <Column header="Zone" field="zoneDesignation" />

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