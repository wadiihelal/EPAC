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
import {  message  } from 'antd';
import "antd/dist/antd.css"



const x = [1,2,3,4];
const y =[776,'Tunisia',"Algeria",77,89]

function addPallet() {
  const [pallets,setPallets] =useState([])
  const [zones,setZones]=useState([])
  const[isLoading,setIsLoading]=useState(true)
  const router =useRouter()
    const fetchData = async () =>{
      try {
        setIsLoading(true);
        const {data: response} = await axios.get('http://localhost:9090/activezone');
        const {data: resp} = await axios.get('http://localhost:9090/palletByState/ready');
        setZones(response); 
        setPallets(resp)
        setIsLoading(false);

      } catch (error) {
        console.error(error.message);
      }
    }
    useEffect(() => {
    fetchData();
    }, []);
  const options = [''];
  const option= [''];
  zones.map((e) => {
    option.push({ value: e, label: e });
  }); 
  pallets.map((e) => {
    options.push({ value: e, label: e });
  })
    option.shift() 
  options.shift() 

  const onSubmit = async( value) =>{
    // value.preventDefault ()
      setIsLoading(true) //gbal el exios
        try{
          const response = await axios.post(`http://localhost:9090/affectLoadTag/${value.LoadTag}/${value.Pallets}/${value.Zone}`)
        
        console.log('data',response?.data);
        console.log(JSON.stringify(response))
        message.success(`LoadTag ${value.LoadTag} was added with success !`)
        setIsLoading(false) 
       }
      catch (err) {
        message.error('Invalid Pallet LoadTag , please retry')
        setIsLoading(false)
             

        }
    
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
      label: "Pallet",
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