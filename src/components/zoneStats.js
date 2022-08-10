// import React , {useState , useEffect} from 'react';
// import axios from 'axios';
// import Back from '../src/components/back'
// import { Chart, Dataset } from 'react-rainbow-components';
// const Main = () => {
//    const [name, setName] = useState('');  
//   const [dataPallet,setDataPallet] =useState([])
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState([])

//   useEffect(() => {
//     const fetchData = async () =>{
//       setLoading(true);
//       try {
//         const {data: response} = await axios.get('https://murmuring-reef-55468.herokuapp.com/nbPallet');
//         const {dataPallet: res} = await axios.get('https://murmuring-reef-55468.herokuapp.com/nbState');
//         setData(response);
//         setDataPallet(res)
//         console.log(data,'data')
//         console.log(dataPallet,"pallet")      } catch (error) {
//         console.error(error.message);
//       }
//       setLoading(false);
//     }
//     fetchData();
//   }, []);
//   let labels= [];
//   let donnees=[] 
//   let labels2= ['ready','active','block'];
//   let donnees2=[]

//   // data.map((e,index) => {
//   //   labels.push(`zone ${index} : ${e} pallets`)
//   //   donnees.push(parseInt(e))

//   // });
//   labels=Object.keys(data)
//   donnees=Object.values(data)
//   // labels2=Object.keys(dataPallet)
//   donnees2=Object.values(dataPallet)
//   console.log(donnees)

// function renderDataset() {
//     const data = [];
//     const colors = [];
//     dataset.forEach(set => {
//         data.push(set.value);
//         colors.push(set.color);
//     });

//     return <Dataset title="Data" values={donnees} backgroundColor={colors} />;
// }function renderDatasetPallet() {
//     const data = [];
//     const colors = [];
//     dataset.forEach(set => {
//         dataPallet.push(set.value);
//         colors.push(set.color);
//     });

//     return <Dataset title="Data" values={donnees2} backgroundColor={colors} />;
// }

//   return(

//     <div style={{width:'40%',marginLeft:'auto',marginRight:'auto'}} > 
//     <br></br>
//     <h1>Zone stats</h1>
//     <br></br>
//       <Chart labels={labels} type="pie" legendPosition="right" >
//                 {renderDataset()}
//             </Chart>   
//             <br></br> 
//             <Chart labels={labels2} type="pie" legendPosition="right" >
//                 {renderDatasetPallet()}
//             </Chart>   
          
//         </div> 
// )}
// export default function index ()
// {
//   return(
//       <div>
//         <Back />
//         <Main />
//       </div>

//   )
// }
 import React , {useState , useEffect} from 'react';
import axios from 'axios';
import { Chart, Dataset } from 'react-rainbow-components';
const Main = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://murmuring-reef-55468.herokuapp.com/nbPallet');
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
        value: 12,
        color: '#c5d86d',
    },  {
        value: 22,
        color: '#2E294E',
    },  {
        value: 18,
        color: '#44DD5D',
    },  {
        value: 27,
        color: '#AD44DD',
    }, {
        value: 6,
        color: '#DD7F44',
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
    <h1>Active pallet by zone </h1>
    <br></br>
      <Chart labels={labels} type="pie" legendPosition="right" >
                {renderDataset()}
      </Chart>   
          
        </div> 
)}
export default function Indexzone ()
{
  return(
      <div>
        <Main />
      </div>

  )
}