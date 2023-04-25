import usePokemon from "../hooks/usePokemon";

const Home = () => {
  const { data, isLoading } = usePokemon(1);
  if (isLoading) return <p>Loading...</p>;
  return <div>{data?.name}</div>;
};

export default Home;
