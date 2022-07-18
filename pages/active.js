import React , {useState , useEffect} from 'react';
import { TableWithBrowserPagination, Column, Badge ,Spinner } from 'react-rainbow-components';
import styled from 'styled-components';
import Back from '../src/components/back'

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
      const x = new Date(value);
      const y = " " + x.getHours().toString() + " : " +x.getMinutes().toString() +" - " + x.getDate().toString() + "/"+ (x.getMonth()+1).toString()+ "/"+ x.getFullYear().toString()
      return (
      <div>
        {y}
      </div>)
}
const Main = () => {
   const [name, setName] = useState('');  
  const handleSubmit = (e) => {
        e.preventDefault();
        const y=name
        // console.log(y);    
    }
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
    const options= [];
  data.map((e,index) => {
    {e.palletState== 'active' &&
    options.push({palletID : e.palletID, palletDateCreation:e.palletDateCreation, zoneId: e.zoneId , palletState : e.palletState,palletCreator:e.palletCreator}); }

  });
  console.log(options)

  return(

    <div >
      <Back />
      <h1 style={{marginTop:'5%' , marginBottom:'4%'}}>Active Pallets</h1>
              <div style={{marginLeft:'80%'}}>
              <form style={{  marginTop:'3%' ,marginBottom:'2%'}} onSubmit = {handleSubmit}  style={{}}>
  <input type='text' onChange = {(e) => setName(e.target.value)} value = {name} ></input> 
      <Button variant="primary" style={{marginLeft:'4%'}} type='submit'>Search</Button>
</form>
              </div>
       {loading && <Spinner size="large" />}       
      {!loading && (
        <TableWithBrowserPagination paginationAlignment="right" pageSize={5} data={options} keyField="id" defaultWidth={200} className='tableRainbow'>
            <Column header="ID" field="palletID" style={{fontSize:'20px'}} />
            {/* <Column header="Status" field="palletState" /> */}
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
        <Main />
      </div>

  )
}
 