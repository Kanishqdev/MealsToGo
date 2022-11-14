import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, View } from "react-native";
import { Search } from "../../Search";
import { RestaurantInfo } from "../components/restaurant.info.component";

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Search style={styles.search} />
        <View style={styles.list}>
          <RestaurantInfo />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
  },
});
