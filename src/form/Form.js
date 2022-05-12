import React, { Component } from "react";
import PropTypes from "prop-types";
import Stepper from "react-stepper-horizontal";
import { Card } from "reactstrap";
import GeneralForm from "./GeneralForm";
import WorkspaceDetailsForm from "./WorkspaceDetailsForm";
import UserTypeDetailsForm from "./UserTypeDetailsForm";
import FinalPage from "./FinalPage";

class Form extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 0,
      steps: [{ title: "" }, { title: "" }, { title: "" }, { title: "" }],
      displayName: "",
    };
  }

  nextPage() {
    if (document.getElementById("displayName")) {
      // set the displayName value to show at final page
      this.setState({
        displayName: document.getElementById("displayName").value,
      });
    }
    // increase page number
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    //go back previous but not in use currently
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page, steps } = this.state;
    var circleFontSize = 18;
    var size = 39;
    return (
      <Card
        className="stepCount"
        style={{ marginBottom: "0px", height: "100vh" }}
      >
        {/* div to show header text and image */}
        <div style={{ display: "flex" }}>
          <img
            src={require("../icon.png")}
            alt="icon"
            className="img-responsive"
            style={{
              height: "27px",
              width: "27px",
              position: "relative",
              top: "4px",
              right: "5px",
            }}
          ></img>
          <h2 style={{ textAlign: "center" }}>Eden</h2>
        </div>
        {/* stepper used for horizontal steps count */}
        <Stepper
          activeColor="#654de4"
          completeColor="#654de4"
          circleFontColor="#fff"
          circleFontSize={circleFontSize}
          size={size}
          steps={steps}
          activeStep={page}
        />
        {page === 0 && <GeneralForm onSubmit={this.nextPage} />}
        {page === 1 && <WorkspaceDetailsForm onSubmit={this.nextPage} />}
        {page === 2 && (
          <UserTypeDetailsForm
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <FinalPage
            previousPage={this.previousPage}
            onSubmit={onSubmit}
            displayName={this.state.displayName}
          />
        )}
      </Card>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
