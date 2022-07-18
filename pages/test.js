import React , {useState , useEffect} from 'react';
import axios from 'axios';
import Back from '../src/components/back'
import { Chart, Dataset } from 'react-rainbow-components';
const Main = () => {
   const [name, setName] = useState('');  

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('http://localhost:9090/nbPallet');
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

  // data.map((e,index) => {
  //   labels.push(`zone ${index} : ${e} pallets`)
  //   donnees.push(parseInt(e))

  // });
  labels=Object.keys(data)
  donnees=Object.values(data)
  console.log(donnees)
  const dataset = [
    {
        value: 10,
        color: '#fe4849',
    },
    {
        value: 15,
        color: '#ff6837',
    },
    {
        value: 42,
        color: '#ffcc00',
    },
    {
        value: 1,
        color: '#1ad1a3',
    },  {
        value: 1,
        color: '#1ad1a3',
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

    <div style={{width:'40%',marginLeft:'auto',marginRight:'auto'}} > 
    <br></br>
    <h1>Zone stats</h1>
    <br></br>
      <Chart labels={labels} type="pie" legendPosition="right" >
                {renderDataset()}
            </Chart>   
          
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
 