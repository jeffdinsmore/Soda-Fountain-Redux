import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  let formHandle;
  if (props.soda) {
    formHandle = <form onSubmit={props.formSubmissionHandler}>
      <div className="form-container">
        <h2>Update Soda</h2>
          <label htmlFor="name">Name</label>
          <br />
          <input className="field"
            type='text'
            name='name'
            placeholder='Soda Name'
            defaultValue={props.soda.name}
            required='required' />
          <br></br>
          <label htmlFor="name">Brand</label>
          <br />
          <input className="field"
            type='text'
            name='brand'
            placeholder='Brand'
            defaultValue={props.soda.brand}
            required='required' />
          <br></br>
          <label htmlFor="name">Sugar Content</label>
          <br />
          <input className="field"
            type='text'
            name='sugarContent'
            placeholder='List sugar content'
            defaultValue={props.soda.sugarContent}
            required='required' />
          <br />
          <label htmlFor="name">Pints (Quantity)</label>
          <br />
          <input className="field"
            type='number'
            name='pints'
            placeholder='Total pints'
            defaultValue={props.soda.pints}
            required='required' />
          <br></br>
          <label htmlFor="name">Price Per Pint</label>
          <br />
          <input className="field"
            type='text'
            name='price'
            placeholder='Price per pint'
            defaultValue={props.soda.price}
            required='required' />
          <br></br>
          <button className="btn btn-success btn-sm" type='submit'>{props.buttonText}</button>
        </div>
    </form>
  } else {
    formHandle = <form onSubmit={props.formSubmissionHandler}>
      <div className="form-container">
        <h2>Add New Soda</h2>
      <label htmlFor="name">Name</label>
        <br />
        <input className="field"
          type='text'
          name='name'
          placeholder='Soda name'
          required='required' />
        <br></br>
        <label htmlFor="brand">Brand</label>
        <br />
        <input className="field"
          type='text'
          name='brand'
          placeholder='Brand name'
          required='required' />
        <br></br>
        <label htmlFor="sugarContent">Sugar Content</label>
        <br />
        <input className="field"
          type='text'
          name='sugarContent'
          placeholder='Sugar content per pint'
          required='required' />
        <br></br>
        <label htmlFor="pints">Pints</label>
        <br />
        <input className="field"
          type='number'
          name='pints'
          placeholder='Pints quantity'
          required='required' />
        <br></br>
        <label htmlFor="price">Price</label>
        <br />
        <input className="field"
          type='text'
          name='price'
          placeholder='Price per pint'
          required='required' />
        <br></br>
        <button className="btn btn-success btn-sm" type='submit'>{props.buttonText}</button>
      </div>
    </form>
  }
  return (
    <React.Fragment>
      {formHandle}
      <hr />
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  soda: PropTypes.object
};

export default ReusableForm;