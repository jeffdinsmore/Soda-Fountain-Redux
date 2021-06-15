import React from "react";
import Soda from "./Soda";
import PropTypes from "prop-types";

function SodaList(props) {
  console.log("props2", props);
  return (
    <React.Fragment>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
      {Object.values(props.sodaList).map((soda) =>
      <div className="col mb-4">
      <div className= "card shadow-lg h-200 text-left" style={{backgroundColor: "#eee222" }}>
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
          </div>
          </div>
      )}
      </div>
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