import { Box, Icon, Badge, Button, useToast } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { useClipboard } from "@chakra-ui/hooks";
import { MdContentCopy } from "react-icons/md";

const GitCard = (props): JSX.Element => {
  const repo = props.info;
  const { hasCopied, onCopy } = useClipboard(`git clone ${repo.clone_url}`);
  const toast = useToast();
  function CloningRepo(): void {
    onCopy();
    toast({
      title: "Repositório clonado.",
      description: "O link para clonar o repositório foi copiado.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  }
  return (
    <Box
      maxW="lg"
      borderWidth="2px"
      borderColor="purple.400"
      background="gray.800"
      borderRadius="lg"
      overflow="hidden"
      m={10}
      shadow="xl">
      <Box p="4">
        <Box
          mx="2"
          my="1"
          fontWeight="semibold"
          as="h4"
          fontSize="3xl"
          lineHeight="tight"
          isTruncated>
          <Icon as={BsGithub} mr="3"></Icon>
          {repo.name}
          <Badge mx="3" bgColor="purple.600" borderRadius="sm">
            {repo.language}
          </Badge>
        </Box>

        <Box mx="2" my="1" as="h4" fontSize="lg" lineHeight="tight" isTruncated>
          <Button
            onClick={CloningRepo}
            size="md"
            variant="outline"
            leftIcon={<MdContentCopy />}
            _focus={{
              borderColor: "gray.600",
            }}>
            {hasCopied ? "Clonado" : "Clonar"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default GitCard;
