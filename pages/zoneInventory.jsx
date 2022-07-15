import React , {useState , useEffect} from 'react';
import { TableWithBrowserPagination, Column, Badge ,Spinner } from 'react-rainbow-components';
import styled from 'styled-components';
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
        console.log(y);    
    }
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('http://localhost:9090/zones');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);
   const inputs = [
     {
      type: "text",
      name: "name",
      label: "text",
      placeHolder: "placeHolder",
      required: true,
      defaultValue: "",
      readOnly: false,
      hidden: false,
      multiple: true,
    },]
  return(

    <div style={{marginTop:'5%'}}>
        <form style={{marginLeft:'80%' }} onSubmit = {handleSubmit} >
  <input type='text' onChange = {(e) => setName(e.target.value)} value = {name} ></input> 
      <Button variant="primary" style={{marginLeft:'4%'}} type='submit'>Search</Button>
</form>
      
      <h1 style={{marginTop:'5%'}}>Zone Inventory</h1>
       {loading && <Spinner size="large" />}       
      {!loading && (
        <TableWithBrowserPagination paginationAlignment="right" pageSize={5} data={data} keyField="id" style={{margin:'5%'}}>
            <Column header="Designation" field="zoneDesignation" />
            <Column header="Description" field="zoneDescription" />
            <Column header="Creation Date" field="zoneDateCreation" component={Dated} />
            <Column header="Creator" field="zoneCreator" />
            <Column header="Status" field="zoneActive"  component={StatusBadge} />

        </TableWithBrowserPagination>
          )}
    </div> 
)}
export default function index ()
{
  return(
      <div>
        <Main />
      </div>

  )
}
 