import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <>
      <View style={[styles.container]}>
        <View style={{ width: 100, height: 100, backgroundColor: "red" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "blue" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "green" }} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    //alignItems: "center",
    justifyContent: "center",
  },
});
