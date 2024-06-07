import "./Tour.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DetailsPage from "../../components/DetailsPage/DetailsPage";
import { tours } from "../../resources/tours";

const Tour = () => {
  const { tour_id } = useParams();
  const [ tour, setTour ] = useState();
  const [ descriptionParagraphs, setDescripionParagraphs ] = useState();

  const getTourInfo = (tour_id) => {
    const tourInfo = tours.find((tou) => tou._id === tour_id);

    if (tourInfo) {
      setTour(tourInfo);
    } else {
      return null;
    }
  };

  useEffect(() => {
    getTourInfo(tour_id);
  }, [tour_id]);

  useEffect(() => {
    setDescripionParagraphs(tour?.longDescription.split("\n"));
  }, [tour]);

  return (
    <Box as="main" flex="1">
      <DetailsPage obj={tour} descriptionParagraphs={descriptionParagraphs} />
    </Box>
  );
};

export default Tour;
