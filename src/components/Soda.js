import React from "react";
import PropTypes from "prop-types";

function Soda(props) {
  console.log(props);
  let sellButton;
  let refillKeg;
  let kegLowWarning;
  if (parseInt(props.pints) < 10 && parseInt(props.pints) > 0) {
    kegLowWarning = "Keg is getting low!"
  } else if (parseInt(props.pints) === 0) {
    kegLowWarning = "Keg is empty!"
  }
  if (parseInt(props.pints) !== 0) {
    sellButton = <button className="btn btn-success btn-sm w-50" onClick={() => props.whenSodaSellClicked({
      name: props.name,
      brand: props.brand,
      sugarContent: props.sugarContent,
      pints: (parseInt(props.pints) - 1).toString(),
      price: props.price,
      id: props.id
    })}>Sell Pint</button>;
  } else {
    sellButton = <button disabled className="btn btn-secondary btn-sm w-50" onClick={() => props.whenSodaSellClicked()}>Sell Pint</button>
    refillKeg = <button className="btn btn-primary btn-sm w-50" onClick={() => props.whenSodaRefillClicked({name: props.name,
      brand: props.brand,
      sugarContent: props.sugarContent,
      pints: "124",
      price: props.price,
      id: props.id})}>Refill Keg</button>
  }
  return (

    <React.Fragment>
      <p><strong>Soda:</strong> {props.name}</p>
      <p><strong>Total Pints:</strong> {props.pints} pints</p>
      <p><strong>Price:</strong> ${props.price}/pint</p>
      <button className="btn btn-secondary btn-sm w-50" onClick={() => props.whenSodaClicked(props.id)}>Details</button>&nbsp;&nbsp;
      {sellButton}&nbsp;&nbsp;
      {refillKeg}&nbsp;&nbsp;
      <strong>{kegLowWarning}</strong>
      
    </React.Fragment>
  )
}

Soda.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  sugarContent: PropTypes.string,
  pints: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.string,
  whenSodaSellClicked: PropTypes.func,
  onClickingSellPint: PropTypes.func,
  whenSodaRefillClicked: PropTypes.func
}

export default Soda;