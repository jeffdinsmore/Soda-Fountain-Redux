import React from "react";
import PropTypes from "prop-types";

function Soda(props) {
  console.log(props);
  let sellButton;
  let refillKeg = <button disabled className="btn btn-secondary btn-sm">Refill Keg</button>;
  let kegLowWarning = "In Stock";
  let detailsButton = <button className="btn btn-secondary btn-sm" onClick={() => props.whenSodaClicked(props.id)}>Details</button>
  if (parseInt(props.pints) < 10 && parseInt(props.pints) > 0) {
    kegLowWarning = "Keg is getting low!"
  } else if (parseInt(props.pints) === 0) {
    kegLowWarning = "Keg is empty!"
  }
  if (parseInt(props.pints) !== 0) {
    sellButton = <button className="btn btn-success btn-sm" onClick={() => props.whenSodaSellClicked({
      name: props.name,
      brand: props.brand,
      sugarContent: props.sugarContent,
      pints: (parseInt(props.pints) - 1).toString(),
      price: props.price,
      id: props.id
    })}>Sell Pint</button>;
  } else {
    sellButton = <button disabled className="btn btn-secondary btn-sm" onClick={() => props.whenSodaSellClicked()}>Sell Pint</button>
    refillKeg = <button className="btn btn-primary btn-sm" onClick={() => props.whenSodaRefillClicked({
      name: props.name,
      brand: props.brand,
      sugarContent: props.sugarContent,
      pints: "124",
      price: props.price,
      id: props.id
    })}>Refill Keg</button>
  }
  return (
    <React.Fragment>
      <h4 className="sodaName"><strong>{props.name}</strong></h4>
      <strong><p>{kegLowWarning}</p></strong>
      <p><strong>Pints:</strong> {props.pints} pints</p>
      <p><strong>Price:</strong> ${props.price}/pint</p>
      {sellButton}&nbsp;&nbsp;
      {detailsButton}&nbsp;&nbsp;
      {refillKeg}&nbsp;&nbsp;
      <hr />
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