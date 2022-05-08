import { Button } from "@chakra-ui/react";
import React from "react";

const CButton = ({ btnText, type, submitData }) => {
  return (
    <Button
      size="sm"
      w="full"
      colorScheme="purple"
      type={type}
      onClick={submitData}
    >
      {btnText}
    </Button>
  );
};

export default CButton;
