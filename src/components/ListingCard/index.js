import React from "react";
import { Button, Card, Icon } from "react-onsenui";
import styled from "styled-components";

const Img = styled.img`
  max-width: 100%;
`;

const Title = styled.h2``;
const User = styled.h5``;
const Price = styled.h4``;
const Space = styled.span`
  padding: 0 10px;
`;

const formatPrice = price =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    price
  );
const formatUrl = listing => `https://www.grailed.com/listings/${listing.id}`;
const ListingCard = ({ listing }) => (
  <Card>
    <Img src={listing.cover_photo.url} />
    <Title>{listing.title}</Title>
    <User>{listing.user.username}</User>
    <Price>{formatPrice(listing.price)}</Price>
    <Button
      modifier="large--cta"
      onClick={() => window.open(formatUrl(listing), "_blank")}
    >
      <span>Open in Grailed</span>
      <Space />
      <Icon icon="fa-external-link-alt" />
    </Button>
  </Card>
);

export default ListingCard;
