interface HomeProps {
  count: number;
}

export default function Home({ count }: HomeProps) {
  return (
    <>
      <h1>Hello Edu!</h1>
      <p>Here are the number of current active pools: {count}</p>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      count: data.count,
    },
  };
};
