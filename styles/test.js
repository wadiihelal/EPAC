import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-rainbow-components';
import { Formik, Form } from "formik";
import Select from '../components/Select'
import SubmitButton from '../src/components/DynamicForm3/SubmitButton'
import TextInput from "../src/components/DynamicForm3/inputs/TextInput"
import axios from 'axios';

 const Test = () =>
 {
   
  const [data,setData]=useState([])
   const [ isLoading, setIsLoading ] = useState( true )
   const [palletsOption,setPalletsOption] = useState([" "])
  const fetchData = async () =>{
    try {
      setIsLoading(true);
      const {data: response} = await axios.get('https://arcane-peak-98567.herokuapp.com/PalletsByZone');
      setData( response ); 
      console.log("🚀 ~ file: test.js ~ line 18 ~ fetchData ~ response", response)
      setIsLoading(false);
    }
    catch ( error )
    {
      console.error(error.message);
    }
  }
   
       const zones = (zoneByPallet) =>
     { 
       const list=[]
       zoneByPallet.map( ( e ) =>
       {    
  
       list.push({ value: e.zone, label: e.zone });
        } );
       return list
     }
     const pallets = ( zoneByPallet ) => { 
       const list1=[]
       zoneByPallet.map( ( e ) =>
       {  const list=[] 
         e.pallet.map( ( i ) => 
           list.push( { value: i, label: i.toString() } 
            
           ) )    
        list1.push({name:e.zone,value:list})
      } );
      return list1
   } 
         const onSubmit = ( e ) =>
     {
        console.log("🚀 ~ file: test.js ~ line 31 ~ e", e)
    }
  // 
  const onValueChange = ( e ) =>
  {
    
    if ( e )
    {
      const def = pallets( data )
     const options2 = def.filter( ( i ) =>
       i.name === e )   
    setPalletsOption(options2[0].value) } 
  }
        const initialValues = {
     zone: '',
          pallet: '',
   loadTag: '',
     }
  useEffect(() => {
  fetchData();
  }, [] );

   let textProp = {}
   const [selectProp,setSelectProp]=useState({ })
   const [selectProp2,setSelectProp2]=useState({ })
  const [def,setDef]=useState({})
useEffect(() => {
  if ( data.length > 0 )
  {
    const def = pallets( data )
    const options1 = zones( data )
    setPalletsOption( def[ 0 ].value)
   setSelectProp ( {name :'zone', label :'Zone', options:options1, readOnly:false, hidden:false , onValueChange:onValueChange,defaultValue:options1[0].value})
   setSelectProp2 ({name :'pallet', label :'Pallet', options:palletsOption, readOnly:false, hidden:false ,onValueChange:()=>{},defaultValue:def[0].value[0].value })
   textProp={ name:'loadTag', label:"LoadTag ID", placeHolder:"Please Tap your LoadTag", hidden:false, readOnly:false }

  }
}, [ data ] ); 
useEffect(() => {
  if ( data.length > 0 )
  {
    setDef(pallets(data))
  } )
}, [data] );

//    }
   return  ( <div>
     {isLoading && data.length === 0 && <Spinner />}
     {!isLoading && data.length > 0 && <Formik
                 onSubmit={onSubmit}
                  initialValues={initialValues}
                >
                 {formik => (
         <Form>
           <Select {...selectProp} />
           <Select {...selectProp2} />
                      {/* <TextInput {...textProp} />
                      
                      < */}
                      <SubmitButton >Submit</SubmitButton>
                    </Form>
                 )}
         </Formik>
     }
     </div>
   )
 }
export default Test;
