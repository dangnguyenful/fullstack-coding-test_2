import React, { useRef, useState } from "react";

const DynamicText = React.forwardRef((props, ref: any) => {
  const [value, setValue] = useState("Random Text");

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  ref.current = changeValue;

  return <h1>{value}</h1>;
});

export default DynamicText;
