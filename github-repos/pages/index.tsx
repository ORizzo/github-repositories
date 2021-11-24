import GitCard from "../components/gitcard";
import useSWR from "swr";
import axios from "axios";
import { SimpleGrid } from "@chakra-ui/layout";
import Loading from "../components/loading";

export default function GitRepos() {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    "https://api.github.com/users/ORizzo/repos",
    fetcher
  );

  if (error) return <div>{error}</div>;
  if (!data)
    return (
      <SimpleGrid columns={{ sm: 1, md: 2 }}>
        <Loading></Loading>
        <Loading></Loading>
        <Loading></Loading>
        <Loading></Loading>
        <Loading></Loading>
        <Loading></Loading>
      </SimpleGrid>
    );
  const repos = data.map((repo) => (
    <GitCard key={repo.id} info={repo}></GitCard>
  ));
  return <SimpleGrid columns={{ sm: 1, md: 2 }}>{repos}</SimpleGrid>;
}
