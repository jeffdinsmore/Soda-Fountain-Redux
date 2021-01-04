import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  console.log("props", props);
  console.log("soda props: ", props.soda);
  let formHandle;
  if (props.soda) {
    formHandle = <form onSubmit={props.formSubmissionHandler}>
      <input className="field"
        type='text'
        name='name'
        placeholder='Soda Name'
        defaultValue={props.soda.name}
        required='required' />
      <br></br>
      <input className="field"
        type='text'
        name='brand'
        placeholder='Brand'
        defaultValue={props.soda.brand}
        required='required' />
      <br></br>
      <input className="field"
        type='text'
        name='sugarContent'
        placeholder='List sugar content'
        defaultValue={props.soda.sugarContent}
        required='required' />
      <br></br>
      <input className="field"
        type='number'
        name='pints'
        placeholder='Total pints'
        defaultValue={props.soda.pints}
        required='required' />
      <br></br>
      <input className="field"
        type='text'
        name='price'
        placeholder='Price per pint'
        defaultValue={props.soda.price}
        required='required' />
      <br></br>
      <button className="btn btn-success btn-sm" type='submit'>{props.buttonText}</button>
    </form>
  } else {
    formHandle = <form onSubmit={props.formSubmissionHandler}>
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
      <button className="btn btn-success btn-sm" type='submit'>{props.buttonText}</button>
    </form>
  }
  return (
    <React.Fragment>
      {formHandle}
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  soda: PropTypes.object
};

export default ReusableForm;