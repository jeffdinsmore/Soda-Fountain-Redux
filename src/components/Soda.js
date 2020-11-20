import React from "react";
import PropTypes from "prop-types";

function Soda(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSodaClicked(props.id)}>
        <p><strong>Soda:</strong> {props.name}</p>
        <p><strong>Brand:</strong> {props.brand}</p>
        <p><strong>Sugar Content:</strong> {props.sugarContent}g per pint</p>
        <p><strong>Price:</strong> ${props.price}</p>
        <hr/>
      </div>
    </React.Fragment>
  )
}

Soda.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  sugarContent: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  whenSodaClicked: PropTypes.func
}

export default Soda;