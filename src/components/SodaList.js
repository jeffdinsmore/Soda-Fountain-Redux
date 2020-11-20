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
          onClickingSellPint = {props.onClickingSellPint}
          name={soda.name}
          brand={soda.brand}
          sugarContent={soda.sugarContent}
          pints={soda.pints}
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