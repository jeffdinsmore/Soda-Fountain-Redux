import React from 'react';
import NewSodaForm from './NewSodaForm';
import SodaList from './SodaList';
import SodaDetail from './SodaDetail';
import EditSodaForm from './EditSodaForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class SodaControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      // selectedSoda: null,
      editing: false
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
    const { dispatch } = this.props;
    const selectedSoda = this.props.masterSodaList[id];
    const action = a.selectSoda(selectedSoda);
    dispatch(action);
    // this.setState({ selectedSoda: selectedSoda });
  }

  handleClick = () => {
    const { dispatch } = this.props;
    // const action = a.editing();
    const action3 = a.unSelectedSoda();
    const action2 = a.toggleForm();
    if (this.props.selectedSoda != null) {
      // dispatch(action);
      dispatch(action3);
      this.setState({
        // selectedSoda: null,
        editing: false
      });
    } else {
      // const { dispatch } = this.props;
      dispatch(action2);
      // dispatch(action3);
    }
  }
  
  handleDeletingSoda = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteSoda(id);
    dispatch(action);
    const action2 = a.unSelectedSoda();
    dispatch(action2);
    this.setState({
      // selectedSoda: null
    });
  }
  
  handleEditingSodaInList = (sodaToEdit) => {
    const { dispatch } = this.props;
    const action = a.addSoda(sodaToEdit);
    dispatch(action);
    // const action2 = a.editing();
    // dispatch(action2);
    const action3 = a.unSelectedSoda();
    dispatch(action3);
    this.setState({
      editing: false,
      // selectedSoda: null
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
    // const { dispatch } = this.props;
    // const action = a.editing();
    // dispatch(action);
    this.setState({editing: true});
  }
  
  render() {
    console.log("props ", this.props.selectedSoda);
    console.log("state ", this.state.selectedSoda);
    let currentlyVisibleState = null;
    let buttonText = null;
    // console.log("Editing", this.state.editing);
    // console.log("Editing2", this.props.editing);
    if (this.state.editing ) {      
      currentlyVisibleState = <EditSodaForm soda = {this.props.selectedSoda} onEditSoda = {this.handleEditingSodaInList} />
      buttonText = "Return to Soda List";
    } else if (this.props.selectedSoda != null) {
      currentlyVisibleState = <SodaDetail soda = {this.props.selectedSoda} onClickingDelete = {this.handleDeletingSoda} onClickingEdit = {this.handleEditClick} onClickingSellPint = {this.handleSellPintClick} />
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