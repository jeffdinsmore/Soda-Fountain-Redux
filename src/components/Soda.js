import React from "react";
import PropTypes from "prop-types";

function Soda(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSodaClicked(props.id)}>
        <h4>{props.name}</h4>
        <h4>{props.brand}</h4>
        <h4>{props.sugarContent}</h4>
        <h4>{props.price}</h4>
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