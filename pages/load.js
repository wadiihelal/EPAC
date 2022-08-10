import React , {useState , useEffect} from 'react';
import { TableWithBrowserPagination, Column, Badge ,Spinner,ButtonMenu , MenuItem } from 'react-rainbow-components';
import styled from 'styled-components';
import Back from '../src/components/back'
import { useRouter } from 'next/router'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import DynamicForm from '../src/components/DynamicForm3'

const Main = () => {  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://murmuring-reef-55468.herokuapp.com/lotTags');
        setData(response);
        console.log(response)
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
 
  }, []);
    const callBlock =async (name )=>{
      router.push( { pathname: "/resultsearch", query: { name: name } }, "resultsearch" );
      console.log('test',name)
        }
  console.log(data)
    const MenuAction = ({ value }) => {
      return (
          <>
              <MenuItem label="Reset" onClick={()=> callBlock(value)} />
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
        <MenuAction value={props.row.loadId} name={palletID}/>
        </ButtonMenu>
               </div>
      )

}
  return(

    <div >
       
      <h1 style={{marginTop:'5%' , marginBottom:'4%'}}>LoadTags & Pallets</h1>
              <div style={{marginLeft:'87%'}}>
              </div>
       {loading && <Spinner size="large" />}       
      {!loading && (
          <div style={{textAlign:'center'}}>
        <TableWithBrowserPagination  paginationAlignment="right" pageSize={5} data={data} keyField="id" defaultWidth={200} className='tableRainbow'>
            <Column header="LoadTag ID" field="loadId" style={{fontSize:'20px'}} />
            <Column header="Pallet ID" field="palletID" />
            <Column field="status" component={ButtonAction} width={60}/>
        </TableWithBrowserPagination>
          </div>
          )}
    </div> 
)}
export default function Load ()
{
  return(
    <div>
                 <Back />

        <Main />
      </div>

  )
}
