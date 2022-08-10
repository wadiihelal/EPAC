import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-rainbow-components";
import { Formik, Form } from "formik";
import Select from "../../components/Select";
import SubmitButton from "../../src/components/DynamicForm3/SubmitButton";
import TextInput from "../../src/components/DynamicForm3/inputs/TextInput";
import { useFetchData } from "../../src/components/useFetchData";
import { useAdapter } from "../../src/components/useAdapters";
import axios from "axios";
import { useRouter } from "next/router";
import {  message  } from 'antd';
import "antd/dist/antd.css"
const Test = () => {
  const { data, loading, error } = useFetchData(
    "https://murmuring-reef-55468.herokuapp.com/PalletsByZone"
  );
  const { palletsAdapter, zonesAdapter } = useAdapter();

  const [palletsOption, setPalletsOption] = useState([" "]);
  const [pallets, setPallets] = useState();
  const [zones, setZones] = useState();
  const [selectProp, setSelectProp] = useState();
  const [ selectProp2, setSelectProp2 ] = useState();
  const router =useRouter()


  const textProp = {
    name: "loadTag",
    label: "LoadTag ID",
    placeHolder: "Please Tap your LoadTag",
    hidden: false,
    readOnly: false,
  };
   
  const initialValues = {
    zone: "",
    pallet: "",
    loadTag: "",
  };

  const onSubmit = async( value) =>{
  try
  {
     const response = await axios.post(`https://murmuring-reef-55468.herokuapp.com/affectLoadTag/${value.loadTag}/${value.pallet}/${value.zone}`)      
      console.log('data',response?.data);
      // console.log(JSON.stringify(response))
      message.success(`LoadTag ${value.loadTag} was added with success !`)
     }
    catch (err) {
    console.log("🚀 ~ file: index.js ~ line 47 ~ onSubmit ~ err", err)
    message.error( 'Invalid Pallet LoadTag , please retry' )
    
  }
  router.push('/')
    }

  const onZonesValueChange = (e) => {
    if (e) {
      const options = pallets.filter((i) => i.name === e);
      setSelectProp2({
        name: "pallet",
        label: "Pallet",
        options: options[0].value,
        readOnly: false,
        hidden: false,
        onValueChange: () => {},
        defaultValue: pallets[0].value[0].value,
      });
    }
  };
  useEffect(() => {
    if (data && data.length > 0) {
      const pallets = palletsAdapter(data);
      setPallets(pallets);
      const zones = zonesAdapter(data);
      setZones(zones);
    }
  }, [data]);

  useEffect(() => {
    if (zones && zones.length > 0) {
      setSelectProp2({
        name: "pallet",
        label: "Pallet",
        options: pallets[0].value,
        readOnly: false,
        hidden: false,
        onValueChange: () => {},
        defaultValue: pallets[0].value[0].value,
      });
    }
  }, [pallets]);

  useEffect(() => {
    if (zones && zones.length > 0) {
      const props = {
        name: "zone",
        label: "Zone",
        options: zones,
        readOnly: false,
        hidden: false,
        onValueChange: onZonesValueChange,
        defaultValue: zones[0].value,
      };
      setSelectProp(props);
    }
  }, [zones]);

  if (loading) return <Spinner />;
  if (error) return <div>Error</div>;

  return (
    <div style={{marginTop:'7%'}}>
      {data && data.length > 0 && (
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
          {(formik) => (
            <Form>
              <TextInput {...textProp} />
              {selectProp && <Select {...selectProp} />}
              {selectProp2 && <Select {...selectProp2} />}
              <SubmitButton>Submit</SubmitButton>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};
export default Test;
