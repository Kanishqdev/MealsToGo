import React, { useContext } from "react";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import styled from "styled-components/native";
import { Search } from "../../Search";
import { RestaurantInfoCard } from "../components/restaurant.info.card.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const RestaurantAreaView = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
`;
const RestaurantSearch = styled(Search)`
  padding: ${(props) => props.theme.space[2]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = ({ props }) => {
  const { isLoading, restaurants, error } = useContext(RestaurantsContext);
  return (
    <>
      <RestaurantAreaView>
        <RestaurantSearch />
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={(item) => item.name}
        />
      </RestaurantAreaView>
    </>
  );
};
