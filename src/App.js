import { Component, createRef } from "react";
import Button from "./components/button/btn";
import Modal from "./components/modal/modal";
import ModalSecond from "./components/modalSecond /modalSecond";
import "./App.css"
class App extends Component {
  state = {
    isOpenFirstModal: false,
    firstTitle: "Do you want to delete this file?",
    firstText: `Once you delete this file, it won't be possible to undo this action. Are
        you sure you want to delete it?`,
    isOpenSecondModal: false,
    secondTitle: "Do you want to edit this file?",
    secondText: `You can edit this file, it will not be possible to undo this action.
        Are you sure you want to edit it?`,
  };
  handleOpenFirstModal = () => {
    this.setState({
      ...this.state,
      isOpenFirstModal: this.state.isOpenFirstModal ? false : true,
      isOpenSecondModal: false
    });
  };

  handleOpenSecondModal = () => {
    this.setState({
      ...this.state,
      isOpenSecondModal: this.state.isOpenSecondModal ? false : true,
      isOpenFirstModal: false
    });
  };
  render() {
    return (
      <div className="btnContaineObject">
        <Button
          theme="aqua"
          text="Open first modal"
          handleClick={this.handleOpenFirstModal}
        />

        {this.state.isOpenFirstModal ? (
          <Modal handleClick ={this.handleOpenFirstModal} closeButton={true} title={this.state.firstTitle} text={this.state.firstText} />
        ) : null}
        <Button
          theme="dark"
          text="Open second modal"
          handleClick={this.handleOpenSecondModal}
        />
         {this.state.isOpenSecondModal ? (
          <ModalSecond handleClick={this.handleOpenSecondModal} closeButton={false} title={this.state.secondTitle} text={this.state.secondText} />
        ) : null}
      </div>
    );
  }
}
export default App;
