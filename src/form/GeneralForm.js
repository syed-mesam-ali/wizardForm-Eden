import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import validate from "../validation/validation";
import FormInput from "../components/FormInput";
import { Button, Card, CardBody, Col, FormGroup } from "reactstrap";

const GeneralForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup row style={{ top: "15px", textAlign: "center" }}>
        <Col xs="12" lg="12">
          <h2>Welcome! First things first...</h2>
        </Col>
        <Col xs="12" lg="12">
          <span style={{ color: "#6b778f" }}>
            You can always change them later.
          </span>
        </Col>
      </FormGroup>
      <Col sm="12" lg="12">
        <Card className="card-border">
          <CardBody>
            <FormGroup row>
              <Col xs="12" lg="12">
                <Field
                  name="name"
                  type="text"
                  component={FormInput}
                  label="Full Name"
                  inputPlaceHolder="Steve Jobs"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs="12" lg="12">
                <Field
                  id="displayName"
                  name="displayName"
                  type="text"
                  component={FormInput}
                  label="Display Name"
                  inputPlaceHolder="Steve"
                />
              </Col>
            </FormGroup>
          </CardBody>
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
              Create Workspace
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

GeneralForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: "wizardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(GeneralForm);
