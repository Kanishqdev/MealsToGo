import React from "react";
import { SvgXml } from "react-native-svg";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { SpacerComponent } from "../../../components/spacer/spacer.component";
import {
  RestaurantCard,
  Info,
  RestaurantCardCover,
  Section,
  Ratings,
  SectionEnd,
  Icon,
  Address,
  OpenSVG,
} from "./restaurant.info.styles";
import { Favourite } from "../../../components/favourites/favourite.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    ],
    vicinity = "Some address 100",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Ratings>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Ratings>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <SpacerComponent position={"left"} size={"large"}>
              {isOpenNow && <OpenSVG xml={open} width={20} height={20} />}
            </SpacerComponent>
            <SpacerComponent position={"left"} size={"large"}>
              <Icon source={{ uri: icon }} />
            </SpacerComponent>
          </SectionEnd>
        </Section>

        <Address>{vicinity}</Address>
      </Info>
    </RestaurantCard>
  );
};
