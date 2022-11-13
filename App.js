import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Search } from "./src/features/Search";
import React from "react";
import { RestuarantList } from "./src/features/RestuarantList";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Search style={styles.search} />
        <RestuarantList style={styles.list} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: "orange",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "red",
  },
});
