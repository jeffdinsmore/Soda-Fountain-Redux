import React from "react";
import PropTypes from "prop-types";

function SodaDetail(props){
  const { soda, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Soda Detail</h1>
      <p><strong>Soda:</strong> {soda.name}</p>
      <p><strong>Brand:</strong> {soda.brand}</p>
      <p><strong>Sugar Content:</strong> {soda.sugarContent}g per pint</p>
      <p><strong>Total Pints:</strong> {soda.pints} pints</p>
      <p><strong>Price:</strong> {soda.price}/pint</p>
      <button onClick={ props.onClickingEdit }>Update Soda</button>&nbsp;&nbsp;
      <button onClick={()=> onClickingDelete(soda.id) }>Remove Soda</button>
      <hr/>
    </React.Fragment>
  );
}

SodaDetail.propTypes = {
  soda: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default SodaDetail;