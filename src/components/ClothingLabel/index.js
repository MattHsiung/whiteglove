import React, { useRef } from "react";
import QRCode from "qrcode.react";
import { Button, Card } from "react-onsenui";
import styled from "styled-components";
import ReactToPrint from "react-to-print";

const Label = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  border: 2px dashed black;
  padding: 20px;
`;

const ClothingLabel = ({ listing }) => {
  const componentRef = useRef();
  return (
    <Card>
      <ReactToPrint
        trigger={() => <Button>Print this out!</Button>}
        content={() => componentRef.current}
      />

      <Label ref={componentRef}>
        <QRCode value={`${listing.id}`} />
        <div>
          <p>{listing.title}</p>
          <p>{listing.user.username}</p>
          <p>{new Date(listing.created_at).toUTCString()}</p>
        </div>
      </Label>
    </Card>
  );
}

export default ClothingLabel;
