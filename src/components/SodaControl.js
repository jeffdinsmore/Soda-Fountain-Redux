import React from 'react';
import NewSodaForm from './NewSodaForm';
import SodaList from './SodaList';
import SodaDetail from './SodaDetail';
import EditSodaForm from './EditSodaForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class SodaControl extends React.Component {

  handleClick = () => {
    const { dispatch } = this.props;
    const action = a.unSelectedSoda();
    const action2 = a.editing();
    const action3 = a.toggleForm();
    if (this.props.selectedSoda != null) {
      dispatch(action);
      if (this.props.editing === true) {
        dispatch(action2);
      }
    } else {
      dispatch(action3);
    }
  }

  handleAddingNewSodaToList = (newSoda) => {
    const { dispatch } = this.props;
    const action = a.addSoda(newSoda);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleDeletingSoda = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteSoda(id);
    dispatch(action);
    const action2 = a.unSelectedSoda();
    dispatch(action2);
  }
  
  handleChangingSelectedSoda = (id) => {
    const { dispatch } = this.props;
    const selectedSoda = this.props.masterSodaList[id];
    const action = a.selectSoda(selectedSoda);
    dispatch(action);
  }

  

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.editing();
    dispatch(action);
  }

  handleEditingSodaInList = (sodaToEdit) => {
    const { dispatch } = this.props;
    const action = a.addSoda(sodaToEdit);
    dispatch(action);
    const action2 = a.unSelectedSoda();
    dispatch(action2);
    const action3 = a.editing();
    dispatch(action3);
  }
  
  handleSellPintClick = (id) => {
    const { dispatch } = this.props;
    const action = a.addSoda(id);
    const action2 = a.unSelectedSoda();
    dispatch(action);
    dispatch(action2);
  }

  handleRefillKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.addSoda(id);
    const action2 = a.unSelectedSoda();
    dispatch(action);
    dispatch(action2);
  }
  
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.props.editing ) {      
      currentlyVisibleState = <EditSodaForm soda = {this.props.selectedSoda} onEditSoda = {this.handleEditingSodaInList} />
      buttonText = "Return to Soda List";
    } else if (this.props.selectedSoda != null) {
      currentlyVisibleState = <SodaDetail soda = {this.props.selectedSoda} onClickingDelete = {this.handleDeletingSoda} onClickingEdit = {this.handleEditClick} onClickingSellPint = {this.handleSellPintClick} />
      buttonText = "Return to Soda List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewSodaForm onNewSodaCreation={this.handleAddingNewSodaToList} />;
      buttonText = "Return to Soda List";
    } else {
      currentlyVisibleState = <SodaList sodaList={this.props.masterSodaList} onSodaSelection={this.handleChangingSelectedSoda} onClickingSellPint={this.handleSellPintClick}
      onClickingRefill={this.handleRefillKeg} />
      buttonText = "Add Soda";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <br></br>
        <button style={{marginLeft: "10px"}} className="btn btn-info btn-sm" onClick={this.handleClick}>{buttonText}</button>
        <br /><br /><br />
      </React.Fragment>
    );
  }
}
SodaControl.propTypes = {
  masterSodaList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editing: PropTypes.bool,
  selectedSoda: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    masterSodaList: state.masterSodaList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing,
    selectedSoda: state.selectedSoda,
  }
}

SodaControl = connect(mapStateToProps)(SodaControl);

export default SodaControl;