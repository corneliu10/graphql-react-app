import React from "react";
import { Mutation } from "react-apollo";
import { Formik, Form, Field } from "formik";
import { Button } from "@material-ui/core";
import Dropzone from "react-dropzone";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CustomTextField from "./CustomTextField";

import agentSchema from "../utils/validation";
import CREATE_AGENT from "../graphql/mutations";

import "./CreateAgent.css";

function CreateAgent() {
  return (
    <div className="container">
      <Formik
        initialValues={{
          email: "",
          name: "",
          phone: "",
          address: "",
          zipCode: "",
          files: null
        }}
        validationSchema={agentSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            actions.resetForm();
          }, 400);
        }}
      >
        {({
          errors,
          isSubmitting,
          setFieldValue,
          values //: { name, email, phone, address, zipCode }
        }) => (
          <Form>
            <Field
              type="email"
              name="email"
              label="Email"
              placeholder="Email"
              component={CustomTextField}
            />
            <Field
              name="name"
              label="Name"
              placeholder="Name"
              component={CustomTextField}
            />
            <Field
              name="phone"
              label="Phone Number"
              placeholder="Phone Number"
              component={CustomTextField}
            />
            <Field
              name="address"
              label="Address"
              placeholder="Address"
              component={CustomTextField}
            />
            <Field
              name="zipCode"
              label="Zip Code"
              placeholder="Zip Code"
              component={CustomTextField}
            />
            <Dropzone
              onDrop={files => {
                setFieldValue("files", files);
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <section className="dropzone">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {values.files ? (
                      <List
                        component="nav"
                        aria-label="secondary mailbox folders"
                      >
                        {values.files.map((file, index) => (
                          <ListItem key={index}>
                            <ListItemText primary={file.name} />
                          </ListItem>
                        ))}
                      </List>
                    ) : (
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    )}
                  </div>
                </section>
              )}
            </Dropzone>

            <Mutation mutation={CREATE_AGENT} variables={values}>
              {agentMutation => (
                <Button
                  variant="contained"
                  color={
                    Object.keys(errors).length > 0 ? "secondary" : "primary"
                  }
                  onClick={agentMutation}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              )}
            </Mutation>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateAgent;
