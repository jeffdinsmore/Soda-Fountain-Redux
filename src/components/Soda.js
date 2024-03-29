import React from "react";
import PropTypes from "prop-types";

function Soda(props) {
  let sellButton;
  let refillKeg = <button disabled className="btn btn-secondary btn-sm">Refill Keg</button>;
  let kegLowWarning = <p>In Stock</p>;
  let detailsButton = <button className="btn btn-secondary btn-sm" onClick={() => props.whenSodaClicked(props.id)}>Details</button>
  if (parseInt(props.pints) < 10 && parseInt(props.pints) > 0) {
    kegLowWarning = <p style={{color:"purple", fontSize: 16}}>Keg is getting low</p>;
  } else if (parseInt(props.pints) === 0) {
    kegLowWarning = <p style={{color:"red", fontSize: 16}}>Out of Stock</p>;
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
      <strong>{kegLowWarning}</strong>
      <p><strong>Pints:</strong> {props.pints} pints</p>
      <p><strong>Price:</strong> ${props.price}/pint</p>
      {sellButton}&nbsp;&nbsp;
      {detailsButton}&nbsp;&nbsp;
      {refillKeg}&nbsp;&nbsp;
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