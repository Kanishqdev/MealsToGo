import React, { useState } from "react";
import { List } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant.info.card.component";

export const RestaurantInfoDetails = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpand, setBreakfastExpand] = useState(false);
  const [lunchExpand, setLunchExpand] = useState(false);
  return (
    <>
      <RestaurantInfoCard restaurant={restaurant} />
      <List.Section title="Menu">
        <List.Accordion
          title="Breakfast"
          expanded={breakfastExpand}
          onPress={() => setBreakfastExpand(!breakfastExpand)}
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
        >
          <List.Item title="Masala Dosa" />
          <List.Item title="Vada" />
          <List.Item title="Tawa Bonda" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          expanded={lunchExpand}
          onPress={() => setLunchExpand(!lunchExpand)}
          left={(props) => <List.Icon {...props} icon="food-outline" />}
        >
          <List.Item title="Veg Thali" />
          <List.Item title="Paneer Butter Masala" />
        </List.Accordion>
      </List.Section>
    </>
  );
};
