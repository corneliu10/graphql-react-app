import { string, object } from "yup";

const agentSchema = object({
  name: string().required(),
  email: string()
    .email()
    .required(),
  phone: string().matches(/^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/),
  address: string(),
  zipCode: string()
});

export default agentSchema;
