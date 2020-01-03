import React from "react";
import TextField from "@material-ui/core/TextField";

function CustomTextField({ field, form: { touched, errors }, ...props }) {
  return (
    <div>
      <TextField
        {...field}
        {...props}
        className="field"
        error={touched[field.name] && errors[field.name] !== undefined}
      />
    </div>
  );
}

export default CustomTextField;
