import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({ slug, name, imageSrc, price, salePrice, releaseDate, numOfColors }) => {
	// There are 3 variants possible, based on the props:
	//   - new-release
	//   - on-sale
	//   - default
	//
	// Any shoe released in the last month will be considered
	// `new-release`. Any shoe with a `salePrice` will be
	// on-sale. In theory, it is possible for a shoe to be
	// both on-sale and new-release, but in this case, `on-sale`
	// will triumph and be the variant used.
	// prettier-ignore
	const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

	return (
		<Link href={`/shoe/${slug}`}>
			<Wrapper>
				<ImageWrapper>
					<Image alt="" src={imageSrc} />
				</ImageWrapper>
				<Spacer size={12} />
				<Row>
					<Name>{name}</Name>
					<Price variant={variant}>{formatPrice(price)}</Price>
				</Row>
				<Row>
					<ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
					{variant === 'on-sale' && <SalePrice>{formatPrice(price)}</SalePrice>}
				</Row>

				{variant === 'new-release' && <JustReleased>Just Released!</JustReleased>}
				{variant === 'on-sale' && <OnSale>Sale</OnSale>}
			</Wrapper>
		</Link>
	);
};

const Link = styled.a`
	text-decoration: none;
	color: inherit;
	flex: 1 1 20rem;
	position: relative;
`;

const Wrapper = styled.article`
	border-radius: 1rem 1rem 0 0;
	overflow: hidden;
`;

const ImageWrapper = styled.div`
	position: relative;
`;

const Image = styled.img`
	width: 100%;
`;

const Row = styled.div`
	font-size: 1rem;
	display: flex;
	justify-content: space-between;
`;

const Name = styled.h3`
	font-weight: ${WEIGHTS.medium};
	color: ${COLORS.gray[900]};
`;

const Price = styled.span`
	text-decoration: ${(p) => (p.variant === 'on-sale' ? 'line-through' : 'none')};
`;

const ColorInfo = styled.p`
	color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
	font-weight: ${WEIGHTS.medium};
	color: ${COLORS.primary};
`;

const JustReleased = styled.div`
	background-color: ${COLORS.secondary};
	color: ${COLORS.white};
	font-weight: ${WEIGHTS.bold};
	font-size: 0.875rem;
	padding: 0.5rem 1rem;
	position: absolute;
	top: 0.75rem;
	right: -0.5rem;
	border-radius: 0.2rem;
`;

const OnSale = styled.div`
	background-color: ${COLORS.primary};
	color: ${COLORS.white};
	font-weight: ${WEIGHTS.bold};
	font-size: 0.875rem;
	padding: 0.5rem 1rem;
	position: absolute;
	top: 0.75rem;
	right: -0.5rem;
	border-radius: 0.2rem;
`;

export default ShoeCard;
