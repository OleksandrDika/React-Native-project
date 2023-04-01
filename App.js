import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  secureTextEntry,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/Photo BG.png")}
      >
        <View style={styles.signcontainer}>
          <View style={styles.avatar}></View>
          <Text style={styles.title}>Регистрация</Text>
          <View>
            <TextInput style={styles.input} placeholder="Логин" />
            <TextInput
              style={styles.input}
              placeholder="Адрес электронной почты"
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTitle}>Зарегистрироваться</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}
const win = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  signcontainer: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // flexDirection: "row",
    alignItems: "center",
    width: win.width,
    marginTop: 263,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 16,
    marginTop: -60,
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    marginTop: 32,
    marginBottom: 33,
  },

  input: {
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    padding: 16,
    width: win.width - 32,
    marginBottom: 16,
  },

  btn: {
    padding: 16,
    backgroundColor: "#FF6C00",
    width: win.width - 32,
    borderRadius: 100,
    marginTop: 27,
    alignItems: "center",
  },

  btnTitle: {
    color: "#FFFFFF",
  },
});
