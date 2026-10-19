import { View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

const RepositoryStats = ({ repo }) => {
  return (
    <View style={styles.container}>
      <Text>Stars: {repo.stargazersCount}</Text>
      <Text>Forks: {repo.forksCount}</Text>
      <Text>Reviews: {repo.reviewCount}</Text>
      <Text>Rating: {repo.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryStats;
