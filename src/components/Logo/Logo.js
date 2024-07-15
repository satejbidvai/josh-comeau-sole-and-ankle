import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const Logo = (props) => {
	return (
		<Link href="/">
			<Wrapper {...props}>Sole&amp;Ankle</Wrapper>
		</Link>
	);
};

const Link = styled.a`
	text-decoration: none;
	color: inherit;
	position: absolute;
	inset: 0 auto 0 auto;
	display: flex;
	align-items: center;
`;

const Wrapper = styled.h1`
	font-size: 1.5rem;
	font-weight: ${WEIGHTS.bold};
`;

export default Logo;
