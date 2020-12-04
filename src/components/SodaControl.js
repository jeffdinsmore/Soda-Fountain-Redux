import React from 'react';
import NewSodaForm from './NewSodaForm';
import SodaList from './SodaList';
import SodaDetail from './SodaDetail';
import EditSodaForm from './EditSodaForm';
import { connect } from 'react-redux';
import * as c from './../actions/ActionTypes';
import PropTypes from "prop-types";
import * as a from './../actions';

class SodaControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      // selectedSoda: null,
      // editing: false
    };
  }

  handleAddingNewSodaToList = (newSoda) => {
    const { dispatch } = this.props;
    const action = a.addSoda(newSoda);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedSoda = (id) => {
    const selectedSoda = this.props.masterSodaList[id];
    this.setState({ selectedSoda: selectedSoda });
  }
  handleClick = () => {
    if (this.state.selectedSoda != null) {
      this.setState({
        // selectedSoda: null,
        // editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }
  
  handleDeletingSoda = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteSoda(id);
    dispatch(action);
    this.setState({
      // selectedSoda: null
    });
  }
  
  handleEditingSodaInList = (sodaToEdit) => {
    const { dispatch } = this.props;
    const action = a.addSoda(sodaToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedSoda: null
    });
  }
  
  handleSellPintClick = (id) => {
    const { dispatch } = this.props;
    const action = a.sellPint(id);
    dispatch(action);
  }
    // const editedMasterSodaList = this.props.masterSodaList
    // console.log(this.props.masterSodaList);
    // editedMasterSodaList.map((soda) => {
    //   if(soda.id === id) {
    //     if (soda.pints <= 11 && soda.pints > 0) {
    //     soda.status = "Almost out of pints";
    //     soda.pints = soda.pints -1;
    //     } else if (soda.pints > 0) {
    //     soda.pints = soda.pints -1;
    //     } else {
    //     soda.pints = 0;
    //     soda.status = "Out of stock!"
    //     }
    //   }
    //   return soda;
    // })
    //   this.setState({
    //   masterSodaList: editedMasterSodaList,
    // });
  // }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditSodaForm soda = {this.state.selectedSoda} onEditSoda = {this.handleEditingSodaInList} />
      buttonText = "Return to Soda List";
    } else if (this.state.selectedSoda != null) {
      currentlyVisibleState = <SodaDetail soda = {this.state.selectedSoda} onClickingDelete = {this.handleDeletingSoda} onClickingEdit = {this.handleEditClick} onClickingSellPint = {this.handleSellPintClick} />
      buttonText = "Return to Soda List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewSodaForm onNewSodaCreation={this.handleAddingNewSodaToList} />;
      buttonText = "Return to Soda List";
    } else {
      currentlyVisibleState = <SodaList sodaList={this.props.masterSodaList} onSodaSelection={this.handleChangingSelectedSoda} />;
      buttonText = "Add Soda";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <br></br>
        <button className="btn-info" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
SodaControl.propTypes = {
  masterSodaList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterSodaList: state.masterSodaList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

SodaControl = connect(mapStateToProps)(SodaControl);

export default SodaControl;