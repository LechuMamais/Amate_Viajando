import { getTours } from "./api/tours";


export const fetchSetTours = async (setTours, setLoading) => {
    try {
        const data = await getTours();
        setTours(data);
    } catch (error) {
        console.error("Error fetching tours:", error);
    } finally {
        setLoading(false);
    }
};