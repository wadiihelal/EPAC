import React , {useState , useEffect} from 'react';
import { TableWithBrowserPagination, Column, Badge ,Spinner ,ButtonMenu , MenuItem} from 'react-rainbow-components';
import styled from 'styled-components';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import DynamicForm from '../src/components/DynamicForm3'
import Back from '../src/components/back'
import { Button } from 'react-bootstrap';
import {  message  } from 'antd';
import "antd/dist/antd.css"

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
          const callBlock =async (name )=>{
          try{
                const response = await axios.put(`http://localhost:9090/blockpallet/${name}`)
                console.log('data',response?.data);
                console.log(JSON.stringify(response))
                message.success(`Pallet ${name} was blocked with success !`)
              window.location.reload(false);}
              catch (err) {
                console.log(err)
                window.location.reload(false);
                }
            }
          // else 
          // {try{
          //         const response = await axios.put(`http://localhost:9090/blockzone/${name}`)
          //       console.log('data',response?.data);
          //       console.log(JSON.stringify(response))
          //     alert(`Zone ${name} was blocked with success !`)
          //     window.location.reload(false);}
          //     catch (err) {
          //       console.log(err)
          //       }
          //     }
      const MenuAction = ({ name }) => {
        return (
            <>
                <MenuItem label="Block" onClick={()=> callBlock(name)} />
            </>
        );
    };
    const ButtonAction = props => {
    const { value, row:{ palletID } }=props;
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
          <MenuAction value={props.row.zoneActive} name={palletID}/>
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
    {e.palletState== 'ready' &&
    options.push({palletID : e.palletID.toString(), palletDateCreation:e.palletDateCreation, zoneId: e.zoneId , palletState : e.palletState,palletCreator:e.palletCreator}); }

  });
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
        <Back />
      <h1 style={{marginTop:'5%' , marginBottom:'4%'}}>Ready Pallets</h1>
              <div style={{marginLeft:'85%',marginBottom:'1%'}}>
          <input type='text' onChange = {handleChange} value = {input} ></input> 
              </div>
       {loading && <Spinner size="large" />}       
      {!loading && (
        <TableWithBrowserPagination paginationAlignment="right" pageSize={5} data={options} keyField="id" defaultWidth={200} className='tableRainbow'>
            <Column header="ID" field="palletID" style={{fontSize:'20px'}} />
            <Column header="Creation Date" field="palletDateCreation" component={Dated} />
            <Column header="Creator" field="palletCreator" />
            <Column header="zoneID" field="zoneId" />
            <Column field="status" component={ButtonAction} width={60}/>
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
 