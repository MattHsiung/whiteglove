import React, { useState } from "react";
import { Button, Page, AlertDialog, Card } from "react-onsenui";
// import QrReader from "react-qr-reader";
import Barcode from '../Barcode';
import useListingById from "../../hooks/listingById";
import ListingCard from "../ListingCard";

const ScanQr = () => {
  const [listingId, setListingId] = useState(null);
  const { data: listing, error } = useListingById(listingId);
  return (
    <Page>
      {error && (
        <AlertDialog isCancelable>
          <div className="alert-dialog-title">Warning!</div>
          <div className="alert-dialog-content">An error has occurred!</div>
          <div className="alert-dialog-footer">
            <Button className="alert-dialog-button">Ok</Button>
          </div>
        </AlertDialog>
      )}
      {!listing && <Barcode onScan={setListingId} />}
      {listingId && listing && (
        <>
          <Card>
            <Button modifier="large--cta" onClick={() => setListingId(null)}>
              Back to Scanner
            </Button>
          </Card>
          <ListingCard listing={listing} />
        </>
      )}
    </Page>
  );
};

export default ScanQr;
