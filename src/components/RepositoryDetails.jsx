import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import Subheading from "./Subheading";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  details: {
    display: "flex",
    alignItems: "flex-start",
    paddingLeft: 16,
  },
  detail: {
    paddingBottom: 5,
  },
});

const RepositoryDetails = ({ repo }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: repo.ownerAvatarUrl }} />
      <View style={styles.details}>
        <Subheading style={styles.detail}>{repo.fullName}</Subheading>
        <Text style={styles.detail}>{repo.description}</Text>
        <Text>{repo.language}</Text>
      </View>
    </View>
  );
};

export default RepositoryDetails;
