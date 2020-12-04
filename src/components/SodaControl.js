import React from 'react';
import NewSodaForm from './NewSodaForm';
import SodaList from './SodaList';
import SodaDetail from './SodaDetail';
import EditSodaForm from './EditSodaForm';

class SodaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterSodaList: [],
      selectedSoda: null,
      editing: false
    };
  }

  handleAddingNewSodaToList = (newSoda) => {
    const newMasterSodaList = this.state.masterSodaList.concat(newSoda);
    this.setState({
      masterSodaList: newMasterSodaList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedSoda = (id) => {
    const selectedSoda = this.state.masterSodaList.filter(soda => soda.id === id)[0];
    this.setState({ selectedSoda: selectedSoda });
  }
  handleClick = () => {
    if (this.state.selectedSoda != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedSoda: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }
  
  handleDeletingSoda = (id) => {
    const newMasterSodaList = this.state.masterSodaList.filter(soda => soda.id !== id);
    this.setState({
      masterSodaList: newMasterSodaList,
      selectedSoda: null
    });
  }
  
  handleEditingSodaInList = (sodaToEdit) => {
    const editedMasterSodaList = this.state.masterSodaList
    .filter(soda => soda.id !== this.state.selectedSoda.id)
    .concat(sodaToEdit);
    this.setState({
      masterSodaList: editedMasterSodaList,
      editing: false,
      selectedSoda: null
    });
  }
  
  handleSellPintClick = (id) => {
    const editedMasterSodaList = this.state.masterSodaList
    editedMasterSodaList.map((soda) => {
      if(soda.id === id) {
        if (soda.pints <= 11 && soda.pints > 0) {
        soda.status = "Almost out of pints";
        soda.pints = soda.pints -1;
        } else if (soda.pints > 0) {
        soda.pints = soda.pints -1;
        } else {
        soda.pints = 0;
        soda.status = "Out of stock!"
        }
      }
      return soda;
    })
      this.setState({
      masterSodaList: editedMasterSodaList,
    });
  }

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
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSodaForm onNewSodaCreation={this.handleAddingNewSodaToList} />;
      buttonText = "Return to Soda List";
    } else {
      currentlyVisibleState = <SodaList sodaList={this.state.masterSodaList} onSodaSelection={this.handleChangingSelectedSoda} />;
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

export default SodaControl;