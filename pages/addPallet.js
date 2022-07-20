import React, { useState ,useEffect} from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input } from "@material-ui/core";
import { Input as AntdInput } from "antd";
import axios from "axios";
import { useRouter }  from "next/router";
import DynamicForm from '../src/components/DynamicForm3'
import { Spinner } from 'react-rainbow-components';

const x = [1,2,3,4];
const y =[776,'Tunisia',"Algeria",77,89]

function addPallet() {
  const [pallets,setPallets] =useState([])
const [zones,setZones]=useState([])
  const[isLoading,setIsLoading]=useState(false)
  const router =useRouter()
  useEffect(() => {
    const fetchData = async () =>{
      setIsLoading(true);
      try {
        const {data: response} = await axios.get('http://localhost:9090/activezone');
        const {data: resp} = await axios.get('http://localhost:9090/palletByState/ready');
        setZones(response); 
        setPallets(resp)
        setIsLoading(false);

      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
 
  }, []);
  const options = [''];
  const option= [ " "];
  zones.map((e) => {
    option.push({ value: e, label: e });
  });  
  pallets.map((e) => {
    options.push({ value: e, label: e });
  })
  const onSubmit =( value) =>{
    setIsLoading(true) //gbal el exios
      const postData = async () =>{
      let res = await axios.post(`http://localhost:9090/affectLoadTag/${value.LoadTag}/${value.Pallets}/${value.Zone}`)
      let data = res.data;
      console.log(data);
      if (data==null)
        alert('invalid loadtag')
        }
        postData();
       setIsLoading(false) 

    // const timer = setTimeout(() => {

    //      console.log(value)
    //   const result =[value.LoadTag,value.Number]
    //   console.log(result)
      
    //   router.push('/')
    //   //ba3ed el axios (ye fi then wala await)
    //   }, 2000);   

     
  }
  

  const inputs = [
     {
      type: "cinNumber",
      name: "LoadTag",
      label: "LoadTag",
      placeHolder: "Please Tap your LoadTag",
      required: true,
      defaultValue: "",
      readOnly: false,
      hidden: false,
    },
    {
      type: "select",
      name: "Zone",
      label: "Zone",
      required: true,
      options: option,
    }, {
      type: "select",
      name: "Pallets",
      label: "Pallets",
      required: true,
      options: options,
    }
  ];

  return (
    <div >
      <div className="App">
            {!isLoading && <DynamicForm inputs={inputs} onSubmit={onSubmit} />}
            {isLoading && <Spinner size="large" />}
              </div>
        </div> 
  );   
} 

export default addPallet;