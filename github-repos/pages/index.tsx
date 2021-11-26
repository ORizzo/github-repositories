import GitCard from "../components/gitcard";
import axios from "axios";
import { SimpleGrid } from "@chakra-ui/layout";

export default function Index({ data }) {
  const repos = data.map((repo) => (
    <GitCard key={repo.id} info={repo}></GitCard>
  ));
  return <SimpleGrid columns={{ sm: 1, md: 2 }}>{repos}</SimpleGrid>;
}

export async function getStaticProps() {
  const { data } = await axios.get("https://api.github.com/users/ORizzo/repos");

  return {
    props: {
      data,
    },
    revalidate: 60, // In seconds
  };
}
