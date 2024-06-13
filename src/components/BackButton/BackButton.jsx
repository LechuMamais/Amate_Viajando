import React from "react";
import MyLink from "../MyLink/MyLink";
import { Button } from "@chakra-ui/react";

const BackButton = ({text='Back', to}) => {
    // Si lo veo necesario, sería tomar la url y quetarle el último endpoint, y usarlo en caso que to=null
  return (
    <MyLink to={to}>
      <Button size='sm' variant='link'>{text}</Button>
    </MyLink>
  );
};

export default BackButton;
