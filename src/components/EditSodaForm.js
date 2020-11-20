import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditSodaForm(props){
  const { soda } = props;

  function handleEditSodaFormSubmission(event) {
    event.preventDefault();
    props.onEditSoda({name: event.target.name.value, brand: event.target.brand.value, sugarContent: event.target.sugarContent.value, price: event.target.price.value, id: soda.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditSodaFormSubmission} /* new code */ 
        buttonText="Update Soda" />
    </React.Fragment>
  );
}

EditSodaForm.propTypes = {
  onEditSoda: PropTypes.func
};

export default EditSodaForm;