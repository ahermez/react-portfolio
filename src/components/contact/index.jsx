import Input from "../Input";
import { useState } from "react";

const Contact = () => {
  const [nameValue, setNameValue] = useState(undefined);
  const [emailAddressValue, setEmailAddressValue] = useState(undefined);
  const [messageValue, setMessageValue] = useState(undefined);
  return (
    <div>
      <Input
        label="name"
        placeholder="john smith"
        value={nameValue}
        onChange={(value) => setNameValue(value)}
        validation="^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$"
        validationMessage="Must enter first and last name"
      ></Input>
      <Input
        label="email"
        placeholder="john@gmail.com"
        value={emailAddressValue}
        onChange={(value) => setEmailAddressValue(value)}
        validation="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
        validationMessage="Must enter a valid email address"
      ></Input>
      <Input
        label="message"
        placeholder="Give me feedback!"
        value={messageValue}
        onChange={(value) => setMessageValue(value)}
        validation="^.{1,50}$"
        validationMessage="Please type a valid message"
      ></Input>
    </div>
  );
};

export default Contact;
