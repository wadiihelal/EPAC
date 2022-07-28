import React ,{useState , useEffect} from "react";
import { useRouter } from 'next/router'
import axios from "axios";
import { TableWithBrowserPagination, Column, Badge ,Spinner } from 'react-rainbow-components';
import Back from '../src/components/back'
import AlertReset from "../src/components/alertReset";
import { Button, Result } from 'antd';

const Dated = ({ value }) =>{
  const x = new Date(value);
  const y = " " + x.getHours().toString() + " : " +x.getMinutes().toString() +" - " + x.getDate().toString() + "/"+ (x.getMonth()+1).toString()+ "/"+ x.getFullYear().toString()
  return (
  <div>
    {y}
  </div>)}
   const resultSearch = (props) => {
    const [loading, setLoading] = useState(true);

    const [data, setData] = useState([])
    const router = useRouter();
    useEffect(() => {
        const fetchData = async () =>{
          setLoading(true);

          try {
            const {data: response} =  await axios.get(`http://localhost:9090/palletLoadTag/${router.query.name}`)
            setData(response);
            console.log(data)
            setLoading(false);

          } catch (error) {
            console.error(error.message);
            setData(null)
          }
        }

        fetchData();
      }, []);

         const options= [];
         options.push(data)       

        if (data==[] || data==null){
          return(
                        
              <div>
                <Back />
             
            <div style={{marginTop:'10%'}}>
              <Result
              status="warning"
              title="There are some problems with your operation."
            />
            </div>
             </div>)
        }


    else return(
      <div >
      <Back />
    <h1 style={{marginTop:'5%' , marginBottom:'4%'}}>Searching LoadTag & Pallet</h1>
            <div style={{marginLeft:'80%'}}>
            <form style={{  marginTop:'3%' ,marginBottom:'2%'}} ></form>
            </div>
     {loading && <Spinner size="large" />}       
    {!loading && (
      <div style={{marginTop:'2%'}}>
        <TableWithBrowserPagination paginationAlignment="right" pageSize={5} data={options} keyField="id" defaultWidth={200} className='tableRainbow'>
          <Column header="ID" field="palletID" style={{fontSize:'20px'}} />
          <Column header="Creation Date" field="palletDateCreation" component={Dated} />
          <Column header="Creator" field="palletCreator" />
          <Column header="zoneID" field="zoneId" />

      </TableWithBrowserPagination>
      <div style={{marginLeft:'49%',marginTop:'4%',fontSize:'20px'}}  >
        <AlertReset id={data.palletID} />
      </div>
        </div>
        )}
  </div> 
    )}



  
export default resultSearch;