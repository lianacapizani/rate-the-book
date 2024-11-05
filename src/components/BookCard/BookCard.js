import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import { Card } from "../../common-components/Card/Card";
import { Caption } from "../../common-components/Caption/Caption";
import { Description } from "../../common-components/Description/Description";
import { HeadingTwo } from "../../common-components/HeadingTwo/HeadingTwo";
import { ButtonLink } from "../../common-components/ButtonLink/ButtonLink";
import {
  BorderRadiuses,
  Colors,
  Shadows,
  Spaces,
} from "../../shared/DesignTokens";

const InformationGrid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 70px;
  gap: ${Spaces.ONE_HALF};
`;
const BookAvatar = styled.div`
  width: 100%;
  height: 120px;
  box-shadow: ${Shadows.ONE};
  border-radius: ${BorderRadiuses.ONE};
  background-image: url("${(props) => props.src}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export function BookCard({ title, author, genre, image, id}) {
  return (
    <Card>
      <InformationGrid p={Spaces.TWO} mb={Spaces.NONE}>
        <Box>
          <Caption as="div" color={Colors.GRAY_600}>
            {author}
          </Caption>
          <Box mb={Spaces.ONE}>
            <HeadingTwo> {title} </HeadingTwo>
          </Box>
          <Description as="div" color={Colors.GRAY_700}>
            <strong>Gênero:</strong> {genre}
          </Description>
          <Description as="div" color={Colors.GRAY_700}>
            <strong>Nota atual:</strong> 5
          </Description>
        </Box>
        <BookAvatar src={image} />
      </InformationGrid>
      <Box width="87px">
          <ButtonLink>
            to={`/detalhes/${id}`} 
            Ver Mais</ButtonLink>
      </Box>
    </Card>
  );
}
