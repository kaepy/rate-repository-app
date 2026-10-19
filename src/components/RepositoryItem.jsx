import { View, StyleSheet } from "react-native";
import RepositoryDetails from "./RepositoryDetails";
import RepositoryStats from "./RepositoryStats";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.bgSecondary,
    padding: 16,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <RepositoryDetails repo={item} />
      <RepositoryStats repo={item} />
    </View>
  );
};

export default RepositoryItem;
