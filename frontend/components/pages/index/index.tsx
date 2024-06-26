import React from "react";
import {
  Box,
  Heading,
  Stack,
  Text,
  Button,
  Flex,
  useColorMode,
} from "@chakra-ui/core";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const IndexPageComponent = () => {
  const { data:session, status } = useSession();
  const heightOfNavbar: string = "74px";
  const containerPadding: string = "1rem";
  const { colorMode } = useColorMode();
  const color = { light: "gray.800", dark: "gray.100" };

  const signInButtonNode = () => {
    if (session) {
      return false;
    }

    return (
      <Box>
        <Link href="/api/auth/signin">
          <Button
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Create an account
          </Button>
        </Link>
      </Box>
    );
  };

  const signOutButtonNode = () => {
    if (!session) {
      return false;
    }

    return (
      <Box>
        <Link href="/api/auth/signout">
          <Button
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </Button>
        </Link>
      </Box>
    );
  };

  let body = (
<>
<Heading textAlign="center">Nextjs Strapi Boilerplate</Heading>
          <Text fontSize="xl" lineHeight="tall" textAlign="center">
            Boilerplate for building applications using Strapi and Next.js. This
            demo application has been built using Chakra UI, NextAuth.js and
            Apollo.
          </Text>
          <Box>
            <Stack isInline align="center" justifyContent="center">
              {signInButtonNode()}
              {signOutButtonNode()}
            </Stack>
          </Box></>
  )

  if(true){
    body = (
      <>
       <Heading color="#ffcd00" textAlign="center">Онлайн жеребкування спортсменів</Heading>
          <Text fontSize="xl" lineHeight="tall" textAlign="center">
            Тут ви можете пришвидшити організацію змагань в один клік
          </Text>
          <Box>
           
          </Box>
        </>
    )
  }

  return (
    <Stack>
      <Flex
        minH={`calc(100vh - ${heightOfNavbar} - ${containerPadding}*2)`}
        justifyContent="center"
        alignItems="center"
        color={color[colorMode]}
      >
        <Stack spacing={4} maxW="xl" mx="auto">
         {body}
        </Stack>
      </Flex>
    </Stack>
  );
};

export default IndexPageComponent;
