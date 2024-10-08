import styled from 'styled-components';
import { Colors, Spaces } from '../../shared/DesignTokens';
import rateTheHeroLogo from '../../assets/images/rate-the-book-logo.png';

const Wrapper = styled.header`
	width: 100%;
	height: 60px;
	background-color: ${Colors.BLUE_800};
	padding: ${Spaces.TWO};
	display: flex;
	justify-content: center;
	align-items: center;
	@media (min-width: 1024px) {
		height: 90px;
	}
`;

const Logo = styled.img.attrs({
	src: rateTheHeroLogo,
	alt: 'Logo do "Rate the Hero!"',
})`
	height: 100%;
`;
export function Header() {
    
	return (
		<Wrapper>
			<Logo />
		</Wrapper>
	);
}