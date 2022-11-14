import { React, useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";

export const Search = ({ style }) => {
  const [searchQuery, setSearchQuery] = useState(null);
  console.log(searchQuery);
  return (
    <View style={style}>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
};
