import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.mainText}>Hello World!</Text>
      </View>
      <View style={styles.container2}></View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
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
