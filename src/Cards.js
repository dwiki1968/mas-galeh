import { Box, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card({ data }) {
  return data.map((val) => (
    <Link key={val.id} to={`/card/${val.id}`}>
      <Box className="yugioh-card">
        <Image src={val.card_images[0].image_url_small} />
        <Heading as="h2" size="md">
          {val.name}
        </Heading>
      </Box>
    </Link>
  )); // TODO: replace this
}

export default Card;
