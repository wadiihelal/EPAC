import React, { useEffect, useState } from 'react'
import { Button } from 'react-rainbow-components';
import { Formik, Form } from "formik";
import Select from '../components/Select'
import SubmitButton from '../src/components/DynamicForm3/SubmitButton'
 const Test = () =>
 {
   
   const [palletsOption,setPalletsOption] = useState([" "])
   const zoneByPallet = 
     [ { zone: "medenine", pallet: [ 'Zarzis', 'Djerba', 'Ben Guerden' ] },
     { zone:"sousse", pallet : [ 'Riadh', 'Sahloul', 'Mseken' ]},
       { zone: "tataouine",pallet: [ 'Ghomrassen','Dhhiba','Smar']} ,
    ]
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
   
   const options1=zones(zoneByPallet)
    const onSubmit = ( e ) =>
    {
        console.log("🚀 ~ file: test.js ~ line 31 ~ e", e)
    }
const def =pallets(zoneByPallet)
const onValueChange = ( e ) =>
{
  if ( e )
  {
    const options2 = def.filter( ( i ) =>
     i.name === e )   
  setPalletsOption(options2[0].value) } 
}
   
   
   
   const selectProp = {name :'zone', label :'Zone', options:options1, readOnly:false, hidden:false , onValueChange:onValueChange,defaultValue:options1[0].value}
   const selectProp2 = {name :'pallet', label :'Pwallet', options:palletsOption, readOnly:false, hidden:false ,onValueChange:()=>{},defaultValue:def[0].value[0].value }
   const initialValues = {
    zone: '',
    pallet :'' ,
  }
   useEffect( () => { setPalletsOption( def[ 0 ].value ) }, [] )
   useEffect( () => {  }, [palletsOption] )


    return (
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        {formik => (
          <Form>
            <Select {...selectProp} />
            <Select {...selectProp2} />
            <SubmitButton >Submit</SubmitButton>
          </Form>

       )}
      </Formik>
    ) 
 }
export default Test;
