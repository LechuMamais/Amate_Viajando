import "./Tour.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DetailsPage from "../../components/DetailsPage/DetailsPage";
import { getTourById } from "../../services/api/tours";


const Tour = () => {
  const { tour_id } = useParams();
  const [ tour, setTour ] = useState();
  const [loading, setLoading] = useState(true);

  const [ descriptionParagraphs, setDescripionParagraphs ] = useState();

  useEffect(() => {
    const fetchTourById = async () => {
      try {
        const data = await getTourById(tour_id);
        setTour(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTourById();
  }, [tour_id]);

  useEffect(() => {
    setDescripionParagraphs(tour?.longDescription.split("\n"));
  }, [tour]);

  return (
    <Box as="main" flex="1">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <DetailsPage
          obj={tour}
          descriptionParagraphs={descriptionParagraphs}
          usingFor={"tour"}
        />
      )}
    </Box>
  );
};

export default Tour;
