import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.mainText}>Hello World!</Text>
        {/* <Image source={require("../assets/images/logo.png")} /> 경로이미지 */}
        <Image
          source={{ uri: "https://picsum.photos/id/237/200/300" }}
          style={{ width: 200, height: 200 }}
          resizeMode="cover"
        />
        <TextInput
          style={styles.inputText}
          placeholder="이름을 입력해주세요."
          placeholderTextColor="#000"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  inputText: {
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    width: 200,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
