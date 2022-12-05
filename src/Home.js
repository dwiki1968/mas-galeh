// TODO: answer here

import { Container, Heading, Select, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Cards from "./Cards";

function Home() {
  // TODO: answer here
  const [data, setData] = useState(null);
  const [sortType, setSortType] = useState("");

  function sortData(type) {
    // TODO: answer here
    let sortedData;
    if (sortType === "name") {
      sortedData = [...data].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else if (sortType === "attact") {
      sortedData = [...data].sort((a, b) => {
        return a.attack.localeCompare(b.attack);
      });
    } else if (sortType === "defence") {
      sortedData = [...data].sort((a, b) => {
        return a.defence.localeCompare(b.defence);
      });
    } else {
      return data;
    }

    setData(sortedData);
  }

  //fetching data when first time rendering or sortparams changing
  useEffect(() => {
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  if (!data) {
    return (
      <>
        <Heading as="h1"> Loading ...</Heading>
      </>
    );
  }

  console.log("data", data);
  console.log("sort", sortType);
  return (
    <>
      <Container maxW="4xl" py={5}>
        <Select
          mb={5}
          name="sort"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="name">name</option>
          <option value="attack">attack</option>
          <option value="defence">defence</option>
        </Select>

        <SimpleGrid columns={4} spacing={5}>
          <Cards data={data} />
        </SimpleGrid>
      </Container>
    </>
  ); // TODO: replace this
}

export default Home;
