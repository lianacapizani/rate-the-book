import styled from 'styled-components';
import {
	Colors,
	Spaces,
	FontLetterSpacings,
	FontFamilies,
	FontWeights,
	FontSizes,
} from '../../shared/DesignTokens';

export const ButtonLink = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: none;
	outline: none;
	background: none;
	width: 100%;
	height: 40px;
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.REGULAR};
	color: ${Colors.PURPLE_500};
	padding: ${Spaces.ONE_HALF} ${Spaces.TWO};
	cursor: pointer;
	transition: 200ms all ease;
	text-transform: uppercase;
	letter-spacing: ${FontLetterSpacings.MEDIUM};
	text-decoration: none;
	font-size: ${FontSizes.ONE_HALF};
	&amp;:hover {
		color: ${Colors.BLUE_550};
	}
`;