import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CreateAgent from "./CreateAgent";

import "./AgentForm.css";

function AgentForm() {
  return (
    <Card className="formContainer">
      <CardContent>
        <CreateAgent />
      </CardContent>
    </Card>
  );
}

export default AgentForm;
