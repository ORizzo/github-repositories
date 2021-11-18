import useSWR from "swr";
import fetch from "unfetch";

export default function repos() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(
    "https://api.github.com/users/ORizzo/repos",
    fetcher
  );
  if (error) return <div>Failed to load</div>; // continuar estilizando os cards com os repos e continuar o desenvolvimento
  if (!data) return <div>Loading...</div>; // mudar de tailwind para chakraui pois tem mlr integração
  const repos = data.map((repo) => 
  <div>
      <h2 className="bg-gray-400">{repo.name}</h2>
      <p></p>
  </div>
  );
  return(
    <>
    {repos}
    </>
  );
}
