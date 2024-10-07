import styled from "styled-components";
import { Shadows, BorderRadiuses, Spaces, Colors  } from "../shared/DesignTokens";
import { Flex, Box } from "@chakra-ui/react";
import { HeadingTwo } from "../common-components/HeadingTwo/HeadingTwo";
import { Button } from "../common-components/Button/Button";
import { Card } from "../common-components/Card/Card";
import { Caption } from "../common-components/Caption/Caption";
import { Description } from "../common-components/Description/Description";
import { SelectField, Option } from "../common-components/SelectField/SelectField";
import { useNavigate } from "react-router-dom";


const Container = styled.aside`
  width: 727px;
  margin: 0 auto;
  `;

const BookAvatar = styled.div`
  width: 190px;
  height: 280px;
  box-shadow: ${Shadows.ONE};
  border-radius: ${BorderRadiuses.ONE};;
  background-image: url("${(props) => props.src}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 25%;
  `;
const DetailsGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${Spaces.TWO};
`;

export function Details() {
  const navigate = useNavigate();



  return (
    <Container>
      <Flex mt={Spaces.FOUR} as="section">
        <BookAvatar src="https://m.media-amazon.com/images/I/71yJLhQekBL._AC_UF1000,1000_QL80_.jpg" />
        <Flex
          flexDirection="column"
          justifyContent="center"
          height={194}
          ml={Spaces.SEVEN}
        >
          <form>
            <Flex>
              <SelectField>
                <Option value="" disabled>
                  Selecione a nota
                </Option>
                <Option value="5">5</Option>
                <Option value="4">4</Option>
                <Option value="3">3</Option>
                <Option value="2">2</Option>
                <Option value="1">1</Option>
              </SelectField>
              <Box ml={Spaces.THREE}>
                <Button type="submit">Atribuir</Button>
              </Box>
            </Flex>
          </form>
        </Flex>
      </Flex>
      <Box my={Spaces.ONE_HALF} as="section">
        <HeadingTwo as="h1"> As Crônicas de Nárnia</HeadingTwo>
        <Description color={Colors.GRAY_700}>C.S. Lewis</Description>
      </Box>
    

      <DetailsGrid>
        <Card>
          <Box p={Spaces.TWO}>
            <Box mb={Spaces.ONE}>
              <Caption>Série / Trilogia</Caption>
            </Box>
            <Description color={Colors.GRAY_700}>
              Independente
            </Description>
          </Box>
        </Card>
        <Card>
          <Box p={Spaces.TWO}>
            <Box mb={Spaces.ONE}>
              <Caption>País de Origem</Caption>
            </Box>
            <Description color={Colors.GRAY_700}>
              Reino Unido
            </Description>
          </Box>
        </Card>
        <Card>
          <Box p={Spaces.TWO}>
            <Box mb={Spaces.ONE}>
              <Caption>Data de Publicação</Caption>
            </Box>
            <Description color={Colors.GRAY_700}>
              16 de junho de 1950
            </Description>
          </Box>
        </Card>
        <Card>
          <Box p={Spaces.TWO}>
            <Box mb={Spaces.ONE}>
              <Caption>Informações</Caption>
            </Box>
            <Description color={Colors.GRAY_700}>
              <strong>Autor:</strong> C.S. Lewis
              <br />
              <strong>Gênero:</strong> Fantasia
              <br />
              <strong>Editora:</strong> Geoffrey Bles
              <br />
              <strong>Páginas</strong> 752
              <br />
              <strong>Idioma Original:</strong> Inglês
            </Description>
          </Box>
        </Card>
        <Card>
          <Box p={Spaces.TWO}>
            <Box mb={Spaces.ONE}>
              <Caption>Atributos</Caption>
            </Box>
            <Description color={Colors.GRAY_700}>
              <strong>Enredo:</strong>100
              <br />
              <strong>Desenvolvimento:</strong> 70
              <br />
              <strong>Personagens:</strong> 90
              <br />
              <strong>Estilo da Escrita:</strong> 80
              <br />
              <strong>Profundidade Temática:</strong> 70
            </Description>
          </Box>
        </Card>        
      </DetailsGrid>

      <Flex width="100%" justifyContent="center" mt={Spaces.FIVE}>
        <Box>
          <Button ghost onClick={() => navigate(-1)} >Voltar</Button>
        </Box>
      </Flex>
    </Container>
  );     
  }
