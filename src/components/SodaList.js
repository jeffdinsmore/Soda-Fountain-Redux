import React from "react";
import Soda from "./Soda";
import PropTypes from "prop-types";

function SodaList(props) {
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.sodaList).map((soda) =>
        <Soda
          whenSodaClicked = { props.onSodaSelection }
          name={soda.name}
          brand={soda.brand}
          sugarContent={soda.sugarContent}
          pints={soda.pints}
          price={soda.price}
          id={soda.id}
          key={soda.id}
          whenSodaSellClicked={props.onClickingSellPint}
          whenSodaRefillClicked={props.onClickingRefill}
          />
      )}
    </React.Fragment>
  );
}

SodaList.propTypes = {
  sodaList: PropTypes.object,
  onSodaSelection: PropTypes.func,
  onClickingSellPint: PropTypes.func,
  onClickingRefill: PropTypes.func
  
};

export default SodaList;