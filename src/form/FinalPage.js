import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import validate from "../validation/validation";
import { Button, Card, CardBody, Col, FormGroup } from "reactstrap";

const FinalPage = (props) => {
  const { handleSubmit, displayName } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup row style={{ top: "15px", textAlign: "center" }}>
        <Col xs="12" lg="12">
          <img
            src={require("../tick-icon.png")}
            alt="icon"
            className="img-responsive"
            style={{
              height: "70px",
              width: "85px",
              position: "relative",
              top: "4px",
              right: "5px",
              margin: "30px 0px 25px 0px",
            }}
          ></img>
        </Col>
        <Col xs="12" lg="12">
          <h2>Congratulations, {displayName}!</h2>
        </Col>
        <Col xs="12" lg="12">
          <span style={{ color: "#6b778f" }}>
            You have completed onboarding, you can start using the Eden!
          </span>
        </Col>
      </FormGroup>
      <Col sm="12" lg="12">
        <Card className="card-border">
          <CardBody></CardBody>
          <div style={{}}>
            <Button
              color="primary"
              className=""
              type="submit"
              style={{
                width: "92%",
                background: "#654de4",
                marginLeft: "23px",
              }}
            >
              Launch Eden
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

FinalPage.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: "wizardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(FinalPage);
