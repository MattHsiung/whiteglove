import React, { useState } from "react";
import { Button, Card, Input, Page } from "react-onsenui";
import useListingById from "../../hooks/listingById";
import ClothingLabel from "../ClothingLabel";


const CreateQr = () => {
  const [listingId, setListingId] = useState("");
  const [codeToGenerate, setCodeToGenerate] = useState(null);
  const { data: listing, error } = useListingById(codeToGenerate);
  return (
    <Page>
      <Card>
        <h1>Enter Listing Id</h1>
        <Input
          value={listingId}
          onChange={event => setListingId(event.target.value)}
          modifier="underbar"
          placeholder="Listing Id"
        />
        <Button
          modifier="large--cta"
          onClick={() => setCodeToGenerate(listingId)}
        >
          Create QR code
        </Button>
      </Card>
      {error && (
        <Card>
          <p>{error.message}</p>
        </Card>
      )}
      {listing && (
				<ClothingLabel listing={listing} />
      )}
    </Page>
  );
};

export default CreateQr;
