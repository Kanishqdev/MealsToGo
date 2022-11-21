import React from "react";
import { SafeAreaView, StatusBar, View, FlatList } from "react-native";
import styled from "styled-components/native";
import { Search } from "../../Search";
import { RestaurantInfoCard } from "../components/restaurant.info.card.component";

const RestaurantAreaView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;
const RestaurantSearch = styled(Search)`
  padding: ${(props) => props.theme.space[2]};
`;
const RestaurantsList = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
`;

export const RestaurantsScreen = () => {
  return (
    <>
      <RestaurantAreaView>
        <RestaurantSearch />
        <RestaurantsList>
          <FlatList
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
        </RestaurantsList>
      </RestaurantAreaView>
    </>
  );
};
