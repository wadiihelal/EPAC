import React , {useState , useEffect} from 'react';
import { TableWithBrowserPagination, Column, Badge ,Spinner ,ButtonMenu , MenuItem} from 'react-rainbow-components';
import styled from 'styled-components';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import DynamicForm from '../src/components/DynamicForm3'
import { Button } from 'react-bootstrap';
import Back from '../src/components/back'
import Block from '../src/components/block';
import dayjs from "dayjs";
const StatusBadge = ({ value }) => {
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

const callBlock =async (name ,value)=>{
       
  if (value.toString() ==='false')
    {try{
          const response = await axios.put(`https://arcane-peak-98567.herokuapp.com/activatezone/${name}`)
        console.log('data',response?.data);
        // console.log(JSON.stringify(response))
       alert(`Zone ${name} was enabled with success !`)
       window.location.reload(false);}
      catch (err) {
        console.log(err)
        }
      }
  else 
  {try{
          const response = await axios.put(`https://arcane-peak-98567.herokuapp.com/blockzone/${name}`)
        console.log('data',response?.data);
        // console.log(JSON.stringify(response))
       alert(`Zone ${name} was blocked with success !`)
       window.location.reload(false);}
      catch (err) {
        console.log(err)
        }
      }
        return(null)
}

const Main = () => {
  const MenuAction = ({ value,name }) => {
    if(value.toString() === 'true'){
        return  <MenuItem label="Disable" onClick={() => callBlock(name,value)} />
    }
    return (
        <>
            <MenuItem label="Enable" onClick={()=> callBlock(name,value)} />
        </>
    );
};
  const ButtonAction = props => {
    const { value, row:{ zoneId } }=props;
        return (
                 <div>
                   <ButtonMenu
            id="button-menu-2"
            menuAlignment="right"
            menuSize="x-small"
            icon={<FontAwesomeIcon icon={faEllipsisV} />}
            buttonVariant="base"
            className="rainbow-m-left_xx-small"
        >            
          <MenuAction value={props.row.zoneActive} name={zoneId}/>
          </ButtonMenu>
                 </div>
        )

}
   const [name, setName] = useState('');  

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://arcane-peak-98567.herokuapp.com/zones');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);
   let options= [];
  data.map((e,index) => {
    {
    options.push({zoneId : e.zoneId.toString(), zoneCreator:e.zoneCreator, zoneDesignation: e.zoneDesignation , zoneDescription : e.zoneDescription,zoneDateCreation:e.zoneDateCreation,zoneActive :e.zoneActive}); }

  });
    const [input,setInput]=useState('');
      const handleChange = (e) => {
            e.preventDefault();
            setInput(e.target.value)
        }
    if (input.length>0) {
      
      options=options.filter((i)=>{
          if ((i.zoneId.toString().match(input))){
            return(i.zoneId.match(input))
          }         
           if ((i.zoneCreator.match(input))){
            return(i.zoneCreator.match(input))
           }
        
      })
    }
  return(

    <div >
      <h1 style={{marginTop:'5%' , marginBottom:'4%'}}>Zone Inventory</h1>
      <div style={{marginLeft:'87%',marginBottom:'2%'}}>
          <input type='text' onChange = {handleChange}  class="form-control"value = {input}placeholder="Search" aria-label="Search" aria-describedby="search-addon" ></input> 
             
              </div>
              
       {loading && <Spinner size="large" />}       
      {!loading && (
      <div className="rainbow-m-bottom_xx-large" >
        <TableWithBrowserPagination  pageSize={5} data={options} keyField="id"  >
            <Column header="ID" field="zoneId" style={{ fontSize: '20px' }} /> 
            <Column header="Designation" field="zoneDesignation" style={{fontSize:'20px'}} />
            <Column header="Creator" field="zoneCreator" />
            <Column header="Description" field="zoneDescription" />
            <Column header="Creation Date" field="zoneDateCreation" component={Dated} />
            <Column header="Status" field="zoneActive"  component={StatusBadge} />
            <Column field="status" component={ButtonAction} width={60}/>


        </TableWithBrowserPagination>

      </div>
          )}
    </div> 
)}
export default function Zone ()
{
  return(
      <div>
        <Back />
        <Main />
      </div>

  )
}