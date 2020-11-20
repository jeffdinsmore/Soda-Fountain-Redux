import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Soda Name' />
        <input
          type='text'
          name='brand'
          placeholder='brand' />
        <input
          type='text'
          name='sugarContent'
          placeholder='List sugar content' />
        <input
          type='text'
          name='price'
          placeholder='price' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;