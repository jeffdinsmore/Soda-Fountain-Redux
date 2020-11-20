import React from "react";
import PropTypes from "prop-types";

function SodaDetail(props){
  const { soda, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Soda Detail</h1>
      <h4>{soda.name}</h4>
      <h4>{soda.brand}</h4>
      <h4>{soda.sugarContent}</h4>
      <h4>{soda.price}</h4>
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