import React ,{useState , useEffect} from "react";
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router'
import Back from "../src/components/back"
import axios from "axios";
import { Spinner } from "react-rainbow-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import resultSearch from "./resultsearch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";


function Searchreq () 

{
  const router = useRouter();
       const [name, setName] = useState(''); 
    const [loading, setLoading] = useState(false);

     const getPallet = async () => {
    // await axios.get(`http://localhost:9090/palletLoadTag/+${name}`)
    //   .then((res) => {
    //     console.log(res.data)
    //     setData(res); 
    console.log(name)
    router.push({ pathname: "/resultsearch", query: { name: name } },"resultsearch");
      // })
      // .catch((err) => {
      //   console.log(err)
      // })
  }
  //  useEffect(() => {
  //   getPallet()
  // }, [])
    const handleSubmit = (e) => {
    e.preventDefault()
    getPallet(e)
  }

    return(
        <div>
            <Back/>
             {loading && <Spinner size="large" />} 
            <div> 
            {!loading && (
            <div className=" centreRech">
           <form onSubmit = {handleSubmit} >
             <input type="search" className="form-control form-rounded" placeholder="Tap the LoadTag here ..." aria-label="Search" aria-describedby="search-addon" style={{height:'150%', borderRadius: "1rem"}} onChange = {(e) => setName(e.target.value)} value = {name} />
            <br></br>
            <span>
            <Button variant="btn btn-primary" style={{marginLeft:'25%',fontSize:'x-large',width:'50%' }} type='submit'>	Search	<FontAwesomeIcon  icon={faMagnifyingGlass}  />
</Button>
            </span>
           </form>
            </div>)}
                        </div>
        </div>
    )
}

export default Searchreq;
