import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewSodaForm(props){
  function handleNewSodaFormSubmission(event) {
    event.preventDefault();
    props.onNewSodaCreation({name: event.target.name.value, brand: event.target.brand.value, sugarContent: event.target.sugarContent.value, price: event.target.price.value, id: v4()});
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewSodaFormSubmission}
        buttonText="Submit" />
    </React.Fragment>
  );
}

NewSodaForm.propTypes = {
  onNewSodaCreation: PropTypes.func
};

export default NewSodaForm;