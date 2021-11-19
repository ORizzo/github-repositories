import { Image, Box, Icon } from "@chakra-ui/react";
import { BsGithub } from 'react-icons/bs'
export default function GitCard(): JSX.Element {
  return (
    <Box
      maxW="sm"
      borderWidth="2px"
      borderColor="blue"
      background="gray.800"
      borderRadius="lg"
      overflow="hidden"
      m={10}>
      <Box p="4">
        <Box
          mx="2"
          my="1"
          fontWeight="semibold"
          as="h4"
          fontSize="3xl"
          lineHeight="tight"
          isTruncated>
          <Icon as={BsGithub} mr="3"></Icon>{"Nome do repo"}
        </Box>

        <Box mx="2" my="1" as="h4" fontSize="lg" lineHeight="tight" isTruncated>
          {"Descrição do repo"}
        </Box>
      </Box>
    </Box>
  );
}
