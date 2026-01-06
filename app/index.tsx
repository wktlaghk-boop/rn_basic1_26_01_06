import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.mainText}>Hello World!</Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          borderWidth: 1,
          borderColor: "blue",
          color: "blue",
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
      >
        Hello World!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
