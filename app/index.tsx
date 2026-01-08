import { Image, ScrollView, StyleSheet, Text, TextInput } from "react-native";

export default function Index() {
  return (
    <>
      <ScrollView style={styles.scrollView}>
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
        <Text style={styles.text}>
          안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.
          안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.
          안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.
          안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.
          안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.
          안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.
          안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.
        </Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
  },
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
  text: {
    fontSize: 50,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
  },
});
