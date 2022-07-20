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

const StatusBadge = ({ value }) => {
      if (value.toString() === 'true') {
        return <Badge label='active' variant="success"/>;
    }
    return <Badge label='inactive' variant="error" className="rainbow-m-left_small" />;
}
const Dated = ({ value }) =>{
      const x = new Date(value);
      const y = " " + x.getHours().toString() + ":" +x.getMinutes().toString() +" - " + x.getDate().toString() + "/"+ (x.getMonth()+1).toString()+ "/"+ x.getFullYear().toString()
      return (
      <div>
        {y}
      </div>)
}

const callBlock =(name)=>{
  return(
  console.log(name)
    
  )
}

const Main = () => {
  const MenuAction = ({ value,name }) => {
    if(value.toString() === 'true'){
        return  <MenuItem label="Block" onClick={() => callBlock(name)} />
    }
    return (
        <>
            <MenuItem label="Block" onClick={()=> callBlock()} />
            <MenuItem label="Active" onClick={() => console.log(`Delete ${name}`)}/>
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
  const handleSubmit = (e) => {
        e.preventDefault();
        const y=name
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

    <div >
      <h1 style={{marginTop:'5%' , marginBottom:'4%'}}>Zone Inventory</h1>
              <div style={{marginLeft:'80%'}}>
              <form style={{  marginTop:'3%' ,marginBottom:'2%'}} onSubmit = {handleSubmit}  style={{}}>
  <input type='text' onChange = {(e) => setName(e.target.value)} value = {name} ></input> 
      <Button variant="primary" style={{marginLeft:'4%'}} type='submit'>Search</Button>
</form>
              </div>
       {loading && <Spinner size="large" />}       
      {!loading && (
      <div className="rainbow-m-bottom_xx-large" >
        <TableWithBrowserPagination  pageSize={5} data={data} keyField="id"  >
            <Column header="ID" field="zoneId" style={{fontSize:'20px'}} />  
            <Column header="Creator" field="zoneCreator" />
            <Column header="Designation" field="zoneDesignation" style={{fontSize:'20px'}} />
            <Column header="Description" field="zoneDescription" />
            <Column header="Creation Date" field="zoneDateCreation" component={Dated} />
            <Column header="Status" field="zoneActive"  component={StatusBadge} />
            <Column field="status" component={ButtonAction} width={60}/>


        </TableWithBrowserPagination>

      </div>
          )}
    </div> 
)}
export default function index ()
{
  return(
      <div>
        <Back />
        <Main />
      </div>

  )
}
 