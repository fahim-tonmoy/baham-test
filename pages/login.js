import * as Yup from "yup";

import { AtSignIcon, LockIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

import CButton from "./components/Button";
import InputField from "./components/InputField";
import Link from "next/link";
import { useEffect } from "react";
import { useFormik } from "formik";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // formik validation
  const formik = useFormik({
    initialValues: values,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email")
        .required("Please enter your Email address"),
      password: Yup.string()
        .required("Please enter your Password")
        .min(8, "Too Short!")
        .max(16, "Too Long!"),
    }),
    onSubmit: (values, actions) => {
      console.log(values);
      setValues(values);
      alert(
        "Form Submitted Successfully!, Check your console and Visit 'http://localhost:3000/api/login '"
      );
      actions.resetForm();
    },
  });

  // submit function for form
  const submitData = async () => {
    const response = await fetch("/api/login", {
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
    <Center h="100vh" bg="purple.200">
      <Stack boxShadow="md" bg="whiteAlpha.900" p="20" rounded="md">
        <Flex justify="center" align="center">
          <Image
            src="https://finalproject-c8f27.web.app/static/media/login3.ecad4c8572e3cca0b74a.png"
            maxW="300px"
            // h="200px"
            mb="8"
            p="4"
            mx="auto"
            alt="login"
          />
          <Stack mr="8">
            <VStack as="form" onSubmit={formik.handleSubmit}>
              <InputField
                label="Email"
                name="email"
                placeHolder="Email"
                type="email"
                onChange={formik.handleChange}
                values={formik.values.email}
                errorMsg={formik.errors.email}
              />

              <InputField
                label="Password"
                name="password"
                placeHolder="Password"
                type="password"
                onChange={formik.handleChange}
                values={formik.values.password}
                errorMsg={formik.errors.password}
              />
              <CButton btnText="Log In" type="submit" submitData={submitData} />
            </VStack>
          </Stack>
        </Flex>
        <Stack justify="center" color="gray.600" spacing="3">
          <Text as="div" textAlign="center">
            <span>Don&lsquo;t have an account? </span>
            <Button colorScheme="purple" variant="link">
              {" "}
              Sign Up
            </Button>
          </Text>
          <Button colorScheme="purple" variant="link">
            {" "}
            Forget Password?
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
};

export default Login;
