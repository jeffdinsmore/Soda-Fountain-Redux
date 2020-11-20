import React from "react";
import Soda from "./Soda";
import PropTypes from "prop-types";

function SodaList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.sodaList.map((soda) =>
        <Soda
          whenSodaClicked = { props.onSodaSelection }
          name={soda.name}
          brand={soda.brand}
          sugarContent={soda.sugarContent}
          price={soda.price}
          id={soda.id}
          key={soda.id}/>
      )}
    </React.Fragment>
  );
}

SodaList.propTypes = {
  sodaList: PropTypes.array,
  onSodaSelection: PropTypes.func
};

export default SodaList;