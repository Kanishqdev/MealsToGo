import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import styled from "styled-components/native";
import { Search } from "../../Search";
import { RestaurantInfoCard } from "../components/restaurant.info.card.component";

const RestaurantAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;
const RestaurantSearch = styled(Search)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantsList = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const RestaurantsScreen = () => {
  return (
    <>
      <RestaurantAreaView>
        <RestaurantSearch />
        <RestaurantsList>
          <RestaurantInfoCard />
        </RestaurantsList>
      </RestaurantAreaView>
    </>
  );
};
