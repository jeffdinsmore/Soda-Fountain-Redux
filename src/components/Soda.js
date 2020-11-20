import React from "react";
import PropTypes from "prop-types";

function Soda(props) {
  return (
    
    <React.Fragment>
      {/* <div onClick = {() => props.whenSodaClicked(props.id)}> */}
        <p><strong>Soda:</strong> {props.name}</p>
        <p><strong>Total Pints:</strong> {props.pints} pints</p>
        <p><strong>Price:</strong> ${props.price}/pint</p>
        <button class="btn-success" onClick = {() => props.onClickingSellPint(props.id)}>Sell Pint</button>&nbsp;&nbsp;
        <button onClick = {() => props.whenSodaClicked(props.id)}>Details</button>
        <hr/>
      {/* </div> */}
    </React.Fragment>
  )
}

Soda.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  sugarContent: PropTypes.string,
  pints: PropTypes.number,
  price: PropTypes.string,
  id: PropTypes.string,
  whenSodaClicked: PropTypes.func
}

export default Soda;