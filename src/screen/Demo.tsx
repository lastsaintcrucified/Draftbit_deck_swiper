import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import DeckSwiper from "../component/DeckSwiper";
import data from "../../data/dummy";

const Demo = () => {
  return (
    <View>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Text style={styles.title}>Deck Swiper</Text>
      <DeckSwiper
        listData={data.users}
        isInifinite={false}
        horizontalSwipe={true}
        verticalSwipe={true}
      />
    </View>
  );
};
export default Demo;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});
