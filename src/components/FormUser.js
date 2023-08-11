import { useForm, set } from "react-cool-form";
import React, { useState} from 'react';
import * as yup from "yup";
// import Joi from "joi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { DataStore } from '@aws-amplify/datastore';
import { LandingUser } from '../models';



import "./styles.scss";

// Reusable validation function for Yup
const validateWithYup = (schema) => async (values) => {
  let errors = {};

  try {
    await schema.validate(values, { abortEarly: false });
  } catch (yupError) {
    yupError.inner.forEach(({ path, message }) => set(errors, path, message));
  }

  return errors;
};

// Reusable validation function for Joi
// const validateWithJoi = (schema) => (values) => {
//   let errors = {};

//   const { error: joiError } = schema.validate(values, { abortEarly: false });

//   if (joiError)
//     joiError.details.forEach(({ path, message }) =>
//       set(errors, path[0], message)
//     );

//   return errors;
// };

const yupSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  pincode:yup.string().max(6).required(),
  Mob:yup.string().max(10).required(),
  StartDate:yup.string().required(),
  EndDate:yup.string().required(),

  });
  async function handleSubmit(values) {
    await DataStore.save(
      new LandingUser(values)
  );

  }

// const JoiSchema = Joi.object({
//   username: Joi.string().required(),
//   email: Joi.string().email({ tlds: false }).required(),
//   password: Joi.string().required().min(6)
// });
function FormUser() {
  const { form } = useForm({
    defaultValues: {name: "", email: "",Mob:"",Service:"",StartDate:"",EndDate:"",StreetAddress:"",City:"",pincode:""},
    validate: validateWithYup(yupSchema),
    // validate: validateWithJoi(JoiSchema),
    onSubmit: (values) => handleSubmit(values),
    onError: (errors) => console.log("onError: ", errors)
  });

  const [MyService, setMyService] = useState("");

  const handleChange = (event) => {
    setMyService(event.target.value)
  }

  return (<Container>
    
    <form ref={form} noValidate>

      <input name="name" placeholder="Name" />
      <Row>
      <input name="email" type="email" placeholder="Email" />
      <input type="tel" id="phone" name="Mob" placeholder="Mob"/> 
      </Row>
      <select  name="Service" value={ MyService} onChange={handleChange} placeholder="Mob">
      <option value="Volvo">Choose you service</option>
      {/* <option value="Exploringservice ">Exploring Our Service</option> */}
      <option value="TakingToHosital">Taking to hosital</option>
      <option value="PregencyCare">Pregency Care</option>
      <option value="ChildCare">Child Care</option>
      <option value="HelthTour">Helth Tour</option>
      <option value="CaretakerShortTerm">Caretaker-Short Term</option>
      <option value="CaretakerLongTerm">Caretaker-Long Term</option>
       </select>
     {MyService && <Row><lable>Start:
     <input name="StartDate" type="date" placeholder="Start Date" /></lable>
      <label>End:
      <input name="EndDate" type="date" placeholder="End Date" /></label>
      </Row>}
        <input name="StreetAddress" placeholder="Street Address" />
      <Row>
        <input name="City" placeholder="City" />
        <input name="pincode" placeholder="pincode" />
        </Row>
      <input type="Submit" />
    </form></Container>
  );
}

export default FormUser;