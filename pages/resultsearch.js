import React ,{useState , useEffect} from "react";
  import { useRouter } from 'next/router'
import axios from "axios";
import { TableWithBrowserPagination, Column, Badge ,Spinner } from 'react-rainbow-components';


const resultSearch = (props) => {
      const [data, setData] = useState([])
      const router = useRouter();
      useEffect(() => {
          const fetchData = async () =>{
            try {
              const {data: response} =  await axios.get(`http://localhost:9090/palletLoadTag/+${router.query.name}`)
              setData(response);
              console.log(data)
            } catch (error) {
              console.error(error.message);
              setData(null)
            }
          }
        
          fetchData();
        }, []);
        return (
        <div>
        {data &&
         <TableWithBrowserPagination paginationAlignment="right" pageSize={5} data={data} keyField="id" defaultWidth={200} className='tableRainbow'>
            <Column header="ID" field="palletID"/>
            <Column header="Status" field="palletState" />
            <Column header="Creation Date" field="palletDateCreation" />
            <Column header="Creator" field="palletCreator" />
            <Column header="zoneID" field="zoneId" />

        </TableWithBrowserPagination>}
        {data==null && <h1>failed</h1>}
         
       

</div>
    )
}
  
export default resultSearch;