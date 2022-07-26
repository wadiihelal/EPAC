import React, { useEffect , useState } from 'react';
import { Button } from 'react-rainbow-components';
import Modal from 'react-awesome-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCheck, faArrowRight, faPlug ,faPlus } from '@fortawesome/free-solid-svg-icons';
import { Select ,Input } from 'react-rainbow-components';
import axios from 'axios';
import { useRouter }  from "next/router";
import DynamicForm from './DynamicForm3'
import { Spinner } from 'react-rainbow-components';
import {  message  } from 'antd';
import { StyledButtonAddLoad } from './DynamicForm3/SubmitButton/styles'
import "antd/dist/antd.css"
import styled from "styled-components"

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
          const {data: response} = await axios.get('http://localhost:9090/activezone');
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
      // value.preventDefault ()
        setIsLoading(true) //gbal el exios
          try{
            const response = await axios.post(`http://localhost:9090/createPallet/${value.Name}/${value.Zone}`)
          
          console.log('data',response?.data);
            console.log( JSON.stringify( response ) )
            changeModal(true)
          message.success(`Pallet ${value.Name} was added with success in Zone ${value.Zone} !`)
          setIsLoading(false) 
         }
        catch (err) {
          
          setIsLoading(false)
               
  
          }
        
  
       
    }
    
  
    const inputs = [
       {
        type: "cinNumber",
        name: "Name",
        label: "Owner",
        placeHolder: "Please Tap your Name",
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
      }
    ];
    
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
        <div style={{marginTop:'5%',maxWidth:'450px',fontFamily:'initial',margin:'5%'}}>
          <DynamicForm inputs={inputs} onSubmit={onSubmit} />
          <ButtonCancel onClick={() => changeModal()} >Close</ButtonCancel>
        </div>
        
    </Modal>
</section>

}
export default Alerts
