import "./index.css";
import Grid from "../../component/grid";

import FieldForm from "../../component/field-form";
import { useState } from "react";

import { Alert, Loader, LOAD_STATUS } from "../../component/load";

export default function PostCreate({
  onCreate,
  placeholder,
  button,
  id = null,
}) {
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (value) => {
    console.log("handleSubmit", value);
    return sendData({ value });
  };

  const sendData = async (dataToSend) => {
    setStatus(LOAD_STATUS.PROGRESS);

    console.log("dataToSend", dataToSend);

    try {
      const res = await fetch("http://localhost:4000/post-create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: convertData(dataToSend),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus(null);

        if (onCreate) onCreate();
      } else {
        setMessage(data.message);
        setStatus(LOAD_STATUS.ERROR);
      }
    } catch (erorr) {
      setMessage(erorr.message);
      setStatus(LOAD_STATUS.ERROR);
    }
  };

  const convertData = ({ value }) =>
    JSON.stringify({
      text: value,
      username: "user",
      postId: id,
    });

  return (
    <Grid>
      <FieldForm
        onSubmit={handleSubmit}
        placeholder={placeholder}
        button={button}
      />
      {status === LOAD_STATUS.ERROR && (
        <Alert status={status} message={message} />
      )}
      {status === LOAD_STATUS.PROGRESS && <Loader />}
    </Grid>
  );
}
