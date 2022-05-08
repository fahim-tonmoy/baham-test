import { Button, Center, Stack } from "@chakra-ui/react";

import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <Center h="100vh" bg="purple.200">
      <Stack boxShadow="md" bg="whiteAlpha.900" p="20" rounded="md">
        <Link href="login">
          <Button bg="blue.100">logIn</Button>
        </Link>
        <Link href="customerDetails">
          <Button bg="green.100">Customer Details</Button>
        </Link>
      </Stack>
    </Center>
  );
};

export default index;
