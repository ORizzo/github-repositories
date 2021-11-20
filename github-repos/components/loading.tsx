import { Box, Skeleton, SkeletonCircle } from "@chakra-ui/react";

const Loading = (): JSX.Element  => {
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
          <SkeletonCircle my={4} ml={2}></SkeletonCircle>
          <Skeleton height="3" m={2}></Skeleton>
          <Skeleton height="3" m={2}></Skeleton>
        </Box>
      </Box>
    </Box>
  );
}
export default Loading
