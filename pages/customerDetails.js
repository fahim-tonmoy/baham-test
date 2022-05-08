import * as Yup from "yup";

import {
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { object, string } from "yup";

import CButton from "./components/Button";
import InputField from "./components/InputField";
import { useFormik } from "formik";

const CustomerDetails = () => {
  const [values, setValues] = useState({
    email: "",
    name: "",
    age: "",
    phone: "",
    address: "",
  });

  // formik validation
  const formik = useFormik({
    initialValues: values,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email")
        .required("Please enter your Email address"),
      name: Yup.string().required("Please enter your Name"),
      age: Yup.number().required("Please enter your age"),
      phone: Yup.number().required("Please enter your phone"),
      address: Yup.string().required("Please write your Address"),
    }),
    onSubmit: (values, actions) => {
      console.log(values);
      setValues(values);
      alert(
        "Form Submitted Successfully!, Check your console and Visit 'http://localhost:3000/api/user'"
      );
      actions.resetForm();
    },
  });

  // submit function for form
  const submitData = async () => {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ data: values }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <Center h="100vh" bg="purple.200">
        <Stack boxShadow="md" bg="whiteAlpha.900" p="10" w="500px" rounded="md">
          <Heading as="h1" mx="auto">
            Customer Details
          </Heading>
          <VStack as="form" onSubmit={formik.handleSubmit}>
            <InputField
              name="email"
              type="email"
              label="Email"
              onChange={formik.handleChange}
              values={formik.values.email}
              errorMsg={formik.errors.email}
            />
            <InputField
              name="name"
              type="name"
              label="Name"
              onChange={formik.handleChange}
              values={formik.values.name}
              errorMsg={formik.errors.name}
            />
            <InputField
              name="age"
              type="number"
              label="Age"
              onChange={formik.handleChange}
              values={formik.values.age}
              errorMsg={formik.errors.age}
            />
            <InputField
              name="phone"
              type="number"
              label="Phone"
              onChange={formik.handleChange}
              values={formik.values.phone}
              errorMsg={formik.errors.phone}
            />
            <InputField
              name="address"
              type="address"
              label="Address"
              onChange={formik.handleChange}
              values={formik.values.address}
              errorMsg={formik.errors.address}
            />
            <CButton btnText="Submit" type="submit" submitData={submitData} />
          </VStack>
        </Stack>
      </Center>
    </div>
  );
};

export default CustomerDetails;
