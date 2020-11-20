import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input class="field"
          type='text'
          name='name'
          placeholder='Soda Name' />
          <br></br>
        <input class="field"
          type='text'
          name='brand'
          placeholder='Brand' />
          <br></br>
        <input class="field"
          type='text'
          name='sugarContent'
          placeholder='List sugar content' />
          <br></br>
        <input class="field"
          type='text'
          name='price'
          placeholder='Price per pint' />
          <br></br>
        <button class="btn-success" type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;