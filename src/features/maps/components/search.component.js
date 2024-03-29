import { React, useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

export const Search = ({ style }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);
  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  return (
    <View style={style}>
      <Searchbar
        placeholder="Search"
        value={searchQuery}
        icon="map"
        onSubmitEditing={() => {
          search(searchQuery);
        }}
        onChangeText={(text) => {
          setSearchQuery(text);
        }}
      />
    </View>
  );
};
