import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CreateAgent from "./CreateAgent";

import "./AgentForm.css";

export class AgentForm extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="formContainer">
          <CardContent>
            <CreateAgent />
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

export default AgentForm;
