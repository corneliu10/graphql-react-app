import React, { Component, Fragment } from "react";
import { Mutation } from "react-apollo";
import { Formik, Form } from "formik";
import { TextField } from "@material-ui/core";
import Dropzone from "react-dropzone";

import agentSchema from "../utils/validation";
import CREATE_AGENT from "../graphql/mutations";

import "./CreateAgent.css";

export class CreateAgent extends Component {
  render() {
    return (
      <div>
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
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            errors,
            handleChange,
            isSubmitting,
            setFieldValue,
            values //: { name, email, phone, address, zipCode }
          }) => (
            <Form>
              <div>
                <TextField
                  className="field"
                  name="email"
                  label="Email"
                  onChange={handleChange}
                  placeholder="Email"
                  error={errors.email !== undefined}
                />
              </div>
              <div>
                <TextField
                  className="field"
                  name="name"
                  label="Name"
                  placeholder="Name"
                  onChange={handleChange}
                  error={errors.name !== undefined}
                />
              </div>
              <div>
                <TextField
                  className="field"
                  name="phone"
                  label="Phone Number"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  error={errors.phone !== undefined}
                />
              </div>
              <div>
                <TextField
                  className="field"
                  name="address"
                  label="Address"
                  placeholder="Address"
                  onChange={handleChange}
                  error={errors.address !== undefined}
                />
              </div>
              <div>
                <TextField
                  className="field"
                  name="zipCode"
                  label="Zip Code"
                  placeholder="Zip Code"
                  onChange={handleChange}
                  error={errors.zipCode !== undefined}
                />
              </div>
              <Fragment>
                <Dropzone
                  onDrop={files => {
                    setFieldValue("files", files);
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>
                          Drag 'n' drop some files here, or click to select
                          files
                        </p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </Fragment>

              <Mutation mutation={CREATE_AGENT} variables={values}>
                {agentMutation => (
                  <button
                    onClick={agentMutation}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                )}
              </Mutation>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default CreateAgent;
