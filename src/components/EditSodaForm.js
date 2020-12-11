import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditSodaForm(props){
  const { soda } = props;

  function handleEditSodaFormSubmission(event) {
    event.preventDefault();
    props.onEditSoda({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      sugarContent: event.target.sugarContent.value,
      pints: event.target.pints.value,
      price: event.target.price.value,
      id: soda.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditSodaFormSubmission} 
        buttonText="Update Soda"
        soda={soda} />
    </React.Fragment>
  );
}

EditSodaForm.propTypes = {
  onEditSoda: PropTypes.func,
  soda: PropTypes.object
};

export default EditSodaForm;