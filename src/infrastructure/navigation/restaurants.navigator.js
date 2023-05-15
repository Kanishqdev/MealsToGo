import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restuarants/screens/restaurants.screen";
import { RestaurantInfoDetails } from "../../features/restuarants/screens/restaurant.info.details";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={() => {
        return {
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        };
      }}
    >
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantsDetail"
        component={RestaurantInfoDetails}
      />
    </RestaurantsStack.Navigator>
  );
};
