import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import validate from "../validation/validation";

import { Button, Card, CardBody, Col, FormGroup } from "reactstrap";

const UserTypeDetailsForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup row style={{ top: "15px", textAlign: "center" }}>
        <Col xs="12" lg="12">
          <h2>How are you planning to use Eden?</h2>
        </Col>
        <Col xs="12" lg="12">
          <span style={{ color: "#6b778f" }}>
            We`ll streamline your setup experience accordingly.
          </span>
        </Col>
      </FormGroup>
      <Col sm="12" lg="12">
        <Card className="card-border">
          <CardBody>
            <FormGroup row style={{ marginTop: "30px" }}>
              <Col xs="6" lg="6">
                <label className="label-select">
                  <input
                    type="radio"
                    name="product"
                    className="card-input-element"
                    defaultChecked={true}
                  />

                  <div className="panel panel-default card-input">
                    <i className="fa fa-user"></i>
                    <div className="panel-heading">For myself</div>
                    <div className="panel-body">
                      Write better. Think more cearly. Stay organized.
                    </div>
                  </div>
                </label>
              </Col>
              <Col xs="6" lg="6">
                <label className="label-select">
                  <input
                    type="radio"
                    name="product"
                    className="card-input-element"
                  />

                  <div className="panel panel-default card-input">
                    <i className="fa fa-users"></i>
                    <div className="panel-heading">With my team</div>
                    <div className="panel-body">
                      Wikis, docs, tasks & projects, all in one place.
                    </div>
                  </div>
                </label>
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

UserTypeDetailsForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  previousPage: PropTypes.func,
  submitting: PropTypes.bool,
};

export default reduxForm({
  form: "wizardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(UserTypeDetailsForm);
