import React, { useState } from "react";
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
  const[isLoading,setIsLoading]=useState(false)
  const router =useRouter()

  const options = [];
  const option= [];
  x.map((e) => {
    options.push({ value: e, label: e });
  });  
  y.map((e) => {
    option.push({ value: e, label: e });
  })
  const onSubmit =( value) =>{
    setIsLoading(true) //gbal el exios
    const timer = setTimeout(() => {

         console.log(value)
      const result =[value.Country,value.Number]
      console.log(result)
      setIsLoading(false) 
      router.push('/')
      //ba3ed el axios (ye fi then wala await)
      }, 2000);   

     
  }
  

  const inputs = [
     {
      type: "text",
      name: "name",
      label: "text",
      placeHolder: "placeHolder",
      required: true,
      defaultValue: "",
      readOnly: false,
      hidden: false,
      multiple: true,
    },
    {
      type: "select",
      name: "Country",
      label: "Country",
      required: true,
      options: option,
    }, {
      type: "select",
      name: "Number",
      label: "Number",
      required: true,
      options: options,
    }
  ];

  return (
    <div >
      {/* <div className="App">
            {!isLoading && <DynamicForm inputs={inputs} onSubmit={onSubmit} />}
            {isLoading && <Spinner size="large" />}
              </div> */}
        </div> 
  );   
} 

export default addPallet;