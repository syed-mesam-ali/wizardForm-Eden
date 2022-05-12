const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "* Required";
  }
  if (!values.displayName) {
    errors.displayName = "* Required";
  }

  if (!values.workspaceName) {
    errors.workspaceName = "* Required";
  }

  return errors;
};

export default validate;
