import React from "react";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import styled from "styled-components/native";
import { Search } from "../../Search";
import { RestaurantInfoCard } from "../components/restaurant.info.card.component";

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
  return (
    <>
      <RestaurantAreaView>
        <RestaurantSearch />
        <RestaurantList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
            { name: 9 },
            { name: 10 },
          ]}
          renderItem={() => <RestaurantInfoCard />}
          keyExtractor={(item) => item.name}
        />
      </RestaurantAreaView>
    </>
  );
};
