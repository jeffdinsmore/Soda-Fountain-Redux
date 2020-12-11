import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  
  return (
    <React.Fragment>
      
      <form onSubmit={props.formSubmissionHandler}>
        <input className="field"
          type='text'
          name='name'
          placeholder='Soda Name'
          required='required' />
          <br></br>
        <input className="field"
          type='text'
          name='brand'
          placeholder='Brand' 
          required='required' />
          <br></br>
        <input className="field"
          type='text'
          name='sugarContent'
          placeholder='List sugar content'
          required='required' />
          <br></br>
        <input className="field"
          type='number'
          name='pints'
          placeholder='Total pints' 
          required='required' />
          <br></br>
        <input className="field"
          type='text'
          name='price'
          placeholder='Price per pint'
          required='required' />
          <br></br>
        <button className="btn-success" type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;