import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import validate from "../validation/validation";
import FormInput from "../components/FormInput";
import { Button, Card, CardBody, Col, FormGroup } from "reactstrap";

const WorkspaceDetailsForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup row style={{ top: "15px", textAlign: "center" }}>
        <Col xs="12" lg="12">
          <h2>Let`s set up a home for all your work</h2>
        </Col>
        <Col xs="12" lg="12">
          <span style={{ color: "#6b778f" }}>
            You can always create another workspace later.
          </span>
        </Col>
      </FormGroup>
      <Col sm="12" lg="12">
        <Card className="card-border">
          <CardBody>
            <FormGroup row>
              <Col xs="12" lg="12">
                <Field
                  name="workspaceName"
                  type="text"
                  component={FormInput}
                  label="Workspace Name"
                  inputPlaceHolder="Eden"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs="12" lg="12">
                <label htmlFor="basic-url" className="form-label">
                  Workspace URL{" "}
                  <span style={{ bottom: "0px", color: "rgb(176 178 183)" }}>
                    (Optional)
                  </span>
                </label>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="basic-addon3"
                    style={{ top: "0px" }}
                  >
                    www.eden.com/
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="workspaceUrl"
                    placeholder="Example"
                  />
                </div>
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

WorkspaceDetailsForm.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.func,
};

export default reduxForm({
  form: "wizardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(WorkspaceDetailsForm);
