import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import styled from "styled-components";
import { Button } from "../common-components/Button/Button";
import { SearchField } from "../common-components/SearchField/SearchField";
import { BookCard } from "../components/BookCard/BookCard";
import { Spaces } from "../shared/DesignTokens";

const BooksGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${Spaces.ONE_HALF};
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: ${Spaces.TWO};
  }
`;
export function Search() {
  const initialState = [
    {
      title: "A Origem",
      author: "Dan Brown",
      genre: "Ficção Cientifica",
      image:
        "https://m.media-amazon.com/images/I/81T3VDYJbGL._AC_UF1000,1000_QL80_.jpg",
      rating: 5,
    },
    {
      title: "A Divina Comédia",
      author: "Miguel de Cervantes",
      genre: "Poesia Narrativa",
      image:
        "https://images.tcdn.com.br/img/img_prod/1271663/a_divina_comedia_capa_dura_461_1_a8c6822358c10562cd9f7c0840cf0653.jpg",
      rating: 3,
    },
    {
      title: "O Senhor dos Anéis",
      author: "J.R.R. Tolkien",
      genre: "Ficção Científica",
      image:
        "https://m.media-amazon.com/images/I/81r532V38JL._AC_UL640_QL80_.jpg",
      rating: 4,
    },
    {
      title: "As Crônicas de Nárnia",
      author: "C.S. Lewis",
      genre: "Fantasia",
      image: "https://m.media-amazon.com/images/I/71yJLhQekBL._AC_UF1000,1000_QL80_.jpg",
      rating: 4,
    },
    {
      title: "O Morro dos Ventos Uivantes",
      author: "Emily Brontë",
      image: "https://m.media-amazon.com/images/I/81LIVAOaZHL._AC_UF1000,1000_QL80_.jpg",
      rating: 4,
    }
  ];

  const [books, setBooks] = React.useState(initialState);

  return (
    <>
      <Flex
        width={["100%", "600px"]}
        mx={[Spaces.NONE, "auto"]}
        mt={[Spaces.THREE, Spaces.FIVE]}
        px={[Spaces.ONE, Spaces.NONE]}
        mb={[Spaces.TWO, Spaces.FOUR]}
      >
        <Box flexGrow="1">
          <SearchField placeholder="Digite um nome de herói ou heroína" />
        </Box>
        <Box ml={Spaces.TWO}>
          <Button>Buscar</Button>
        </Box>
      </Flex>
      <BooksGrid 
        px={[Spaces.ONE, Spaces.TWO]} 
        pb={[Spaces.ONE, Spaces.TWO]}
        >
          {books.map((book) => (
            <BookCard
              key={book.title}
              title={book.title}
              author={book.author}
              genre={book.genre}
              image={book.image}
              rating={book.rating}
              link={book.link}
            />
          ))}
        </BooksGrid>
{/*           
        <BookCard
          title="A Origem"
          author="Dan Brown"
          genre="Ficção Cientifica"
          image="https://m.media-amazon.com/images/I/81T3VDYJbGL._AC_UF1000,1000_QL80_.jpg"
          rating={5}
        />
        <BookCard
          title="A Divina Comédia"
          author="Miguel de Cervantes"
          genre="Poesia Narrativa"
          image="https://images.tcdn.com.br/img/img_prod/1271663/a_divina_comedia_capa_dura_461_1_a8c6822358c10562cd9f7c0840cf0653.jpg"
          rating={3}
        />
        <BookCard
          title="O Senhor dos Anéis"
          author="J.R.R. Tolkien"
          genre="Fantasia"
          image="https://m.media-amazon.com/images/I/81jFbAvH12L._AC_UF350,350_QL80_.jpg"
          rating={5}
        />
        <BookCard
          title="As Crônicas de Nárnia"
          author="C.S. Lewis"
          genre="Fantasia"
          image="https://m.media-amazon.com/images/I/71yJLhQekBL._AC_UF1000,1000_QL80_.jpg"
          rating={4}
          link="/detalhes/:id"
        />
        <BookCard
          title="O Morro dos Ventos Uivantes"
          author="Emily Brontë"
          image="https://m.media-amazon.com/images/I/81LIVAOaZHL._AC_UF1000,1000_QL80_.jpg"
          rating={4}
        />
      </BooksGrid> */}
    </>
  );
}
