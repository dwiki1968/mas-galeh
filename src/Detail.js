import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Image,
  Heading,
  Text,
  Container,
  Flex,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});

  useEffect(() => {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  console.log("data", data);
  if (loading) return <Heading as="h1">Loading...</Heading>;

  return (
    <Box>
      <Link to="/">
        <Button m={3}>back</Button>
      </Link>

      <Container maxW="4xl">
        <Flex>
          <Image src={data.card_images[0].image_url_small}></Image>

          <Box px={5}>
            <Heading as="h2">{data.name}</Heading>
            <Text>Level: {data.level}</Text>
            <Text>{data.attribute}</Text>
            <Text>
              ATK/{data.atk} DEF/{data.def}
            </Text>
            <Text>
              [{data.type} / {data.race}]
            </Text>
            <Text>{data.desc}</Text>
          </Box>
        </Flex>

        <Heading my={5} as="h2">
          Card Set
        </Heading>
        <Wrap>
          {data.card_sets.map((val) => (
            <WrapItem>
              <Box p={2} maxW="250px" borderWidth="1px" borderRadius="xl">
                <Text>Name: {val.set_name}</Text>
                <Text>Code: {val.set_code}</Text>
                <Text>Rarity: {val.set_rarity}</Text>
                <Text>Price: {val.set_price}</Text>
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </Box>
  ); // TODO: replace this
}

export default Detail;
