import React, { useContext } from "react";
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { Search } from "../components/search.component";
import { ActivityIndicator, Colors } from "react-native-paper";
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

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  return (
    <>
      <RestaurantAreaView>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} color={Colors.blue300} />
          </LoadingContainer>
        )}
        <RestaurantSearch />
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantsDetail", { restaurant: item })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      </RestaurantAreaView>
    </>
  );
};
