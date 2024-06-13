import { getDestinations } from "./api/destinations";

export const fetchDestinations = async (setDestinations, setLoading) => {
    try {
        const data = await getDestinations();
        setDestinations(data);
    } catch (error) {
        console.error("Error fetching destinations:", error);
    } finally {
        setLoading(false);
    }
};