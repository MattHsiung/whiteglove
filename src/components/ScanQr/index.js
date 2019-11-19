import React, { useState } from "react";
import { Button, Page, AlertDialog } from "react-onsenui";
import QrReader from "react-qr-reader";
import useListingById from "../../hooks/listingById";
import ListingCard from "../ListingCard";

const ScanQr = props => {
	const [listingId, setListingId] = useState("11735875");
	const { data: listing, error } = useListingById(listingId);
  return (
    <Page>
			{error &&
				<AlertDialog isCancelable>
					<div className="alert-dialog-title">Warning!</div>
					<div className="alert-dialog-content">
						An error has occurred!
					</div>
					<div className="alert-dialog-footer">
						<Button className="alert-dialog-button">
							Ok
						</Button>
					</div>
				</AlertDialog>
			}
			{!listing &&
				<QrReader
					delay={300}
					onError={console.error}
					onScan={setListingId}
					style={{ width: '100%' }}
				/>
			}
			{listing &&
				<ListingCard listing={listing} />
			}
    </Page>
  );
};

export default ScanQr;
