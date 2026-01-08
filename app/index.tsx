import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <>
      <View style={[styles.container]}>
        <View style={{ flex: 1, backgroundColor: "red" }} />
        <View
          style={{ flex: 1, width: 100, height: 100, backgroundColor: "blue" }}
        />
        <View style={{ flex: 1, backgroundColor: "green" }} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
