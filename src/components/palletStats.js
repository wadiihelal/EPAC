import React , {useState , useEffect} from 'react';
import axios from 'axios';
import Back from './back'
import { Chart, Dataset } from 'react-rainbow-components';
const Main = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('http://localhost:9090/nbState');
        setData(response);
        console.log(res)
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);
  let labels= [];
  let donnees=[]
  labels=Object.keys(data)
  donnees=Object.values(data)
  console.log(donnees)
  const dataset = [
    {
        value: 10,
        color: '#d5af26',
    },
    {
        value: 3,
        color: '#2FB841',
    },
    {
        value: 1,
        color: '#e71d36',
    },

];
function renderDataset() {
    const data = [];
    const colors = [];
    dataset.forEach(set => {
        data.push(set.value);
        colors.push(set.color);
    });

    return <Dataset title="Data" values={donnees} backgroundColor={colors} />;
}

  return(

    <div > 
    <br></br>
    <h1 >Pallet by state </h1>
    <br></br>
      <Chart labels={labels} type="pie" legendPosition="right" >
                {renderDataset()}
      </Chart>   
          
        </div> 
)}
export default function Indexpallet ()
{
  return(
      <div>
        <Main />
      </div>

  )
}