import React , {useState , useEffect} from 'react';
import axios from 'axios';
import { Chart, Dataset } from 'react-rainbow-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auto } from '@popperjs/core';
const Main = () => {
        const [loading, setLoading] = useState(true);
        const [data, setData] = useState([])

        useEffect(() => {
        const fetchData = async () =>{
            setLoading(true);
            try {
            const {data: response} = await axios.get('http://localhost:9090/TimeActivation');
            setData(response);
            } catch (error) {
            console.error(error.message);
            }
            setLoading(false);
        }
        fetchData();
        }, []);
    const containerStyles = {
        maxWidth: 600,
        marginLeft: auto,
        marginRight:auto,
    };
    let labels= [];
    let donnees=[]
    labels=Object.keys(data)
    donnees=Object.values(data)
    return (
        <div > 
            <div className="rainbow-p-vertical_large" style={{marginLeft:"32%",marginRight:"32%"}}>
                
                <br></br>
                
        <h1>Pallets stats</h1>
        <br></br>
            <div
                style={containerStyles}
                className="rainbow-align-content_center rainbow-m-vertical_large rainbow-m_auto"
            >
                <Chart labels={labels} type="horizontalBar">
                    <Dataset key="Sales" title="Occupation days" values={donnees} backgroundColor="#01b6f5" />
                </Chart>
            </div>
            </div>
            </div>
    );
    }

export default function PalletChart ()
{
  return(
      <div>
    <Main />
      </div>

  )
}