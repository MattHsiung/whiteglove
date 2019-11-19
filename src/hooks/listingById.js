import useSWR from 'swr'
import listingById from "../api/listingById";

const useListingById = (id) =>
	useSWR(id, listingById);

export default useListingById;
