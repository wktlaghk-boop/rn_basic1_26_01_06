import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <>
      <View style={[styles.container]}>
        <View style={{ flex: 1, backgroundColor: "red" }} />
        <View style={{ flex: 2, backgroundColor: "darkorange" }} />
        <View style={{ flex: 3, backgroundColor: "green" }} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: "row", 가로배열(column은 세로배열 이지만 기본값이므로 생략가능)
  },
});
