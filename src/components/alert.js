import React, { useEffect , useState } from 'react';
import { Button } from 'react-rainbow-components';
import Modal from 'react-awesome-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCheck, faArrowRight, faPlug ,faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useRouter }  from "next/router";
import { Spinner } from 'react-rainbow-components';
import {  message  } from 'antd';
import { StyledButtonAddLoad } from './DynamicForm3/SubmitButton/styles'
import "antd/dist/antd.css"
import { Formik, Form } from "formik";
import SubmitButton from './DynamicForm3/SubmitButton'
import styled from "styled-components"
import Select from './DynamicForm3/inputs/Select'
import TextInput from './DynamicForm3/inputs/TextInput'
function Alerts ()

{
    const [isVisible,setIsVisible] = useState(false) 
    const changeModal=()=> {

      setIsVisible(!isVisible)
   }
    const [pallets,setPallets] =useState([])
    const [zones,setZones]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    const router =useRouter()
      const fetchData = async () =>{
        try {
          setIsLoading(true);
          const {data: response} = await axios.get('https://murmuring-reef-55468.herokuapp.com/activezone');
          setZones(response); 
          setIsLoading(false);
  
        } catch (error) {
          console.error(error.message);
        }
      }
      useEffect(() => {
      fetchData();
      }, []);
    const option= ['hello'];
    zones.map((e) => {
      option.push({ value: e, label: e });
    }); 

  
    const onSubmit = async( value) =>{
    console.log("🚀 ~ file: alert.js ~ line 50 ~ onSubmit ~ value", value.creator)
      // value.preventDefault ()
        setIsLoading(true) //gbal el exios
          try{
            const response = await axios.post(`https://murmuring-reef-55468.herokuapp.com/createPallet/${value.creator}/${value.zone}`)
          
          console.log('data',response?.data);
            // console.log( JSON.stringify( response ) )
            changeModal(true)
          message.success(`Pallet ${value.creator} was added with success in Zone ${value.zone} !`)
          setIsLoading(false) 
         }
        catch (err) {
          
          setIsLoading(false)
               
  
          }
        
  
       
    }
    const initialValues = {
      creator: "",
       zone: '',
     }
    
    const textProp={ name:'creator', label:"Creator Name", placeHolder:"Please Tap your Name", hidden:false, readOnly:false,required:true  }
    const selectProp = {name :"zone", label :'Zone', options:option, readOnly:false, hidden:false }

    
      const ButtonCancel= styled(StyledButtonAddLoad)  `
      background: red;
      border-color: red;
    `;

    return <section>
            
    <Button value="Graph" variant="brand" className="rainbow-m-around_medium" onClick={() => changeModal()} style={{fontSize:'20px' , borderRadius: "1rem"}} >
            Add a New Pallet 
            <FontAwesomeIcon icon={faPlus} className="rainbow-m-left_medium" />
        </Button>
        <Modal 
        visible={isVisible}
        width="450"
        height="400"
        onClickAway={() =>changeModal()}
      >
        <div style={{ marginTop: '5%', maxWidth: '450px', fontFamily: 'initial', margin: '5%' }}>
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          >
          {formik => (
          <Form>
            <TextInput {...textProp} />
            <Select {...selectProp} />
            <SubmitButton >Submit</SubmitButton>
          </Form>

          )}
          </Formik>
          <ButtonCancel onClick={() => changeModal()} >Close</ButtonCancel>
        </div>
        
    </Modal>
</section>

}
export default Alerts
