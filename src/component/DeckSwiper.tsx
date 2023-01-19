import React, { memo } from "react";
import Swiper from "react-native-deck-swiper";
import { Button, StyleSheet, Text, View } from "react-native";
import CardComponent from "./card";

type Props = {
  listData?: any[];
  isInifinite?: boolean;
  horizontalSwipe?: boolean;
  verticalSwipe?: boolean;
  onSwiped?: () => void;
  onSwipedAll?: () => void;
};

const DeckSwiper: React.FC<React.PropsWithChildren<Props>> = ({
  listData,
  isInifinite = false,
  horizontalSwipe = true,
  verticalSwipe = true,
}) => {
  return (
    <View style={styles.container}>
      <Swiper
        cards={[...listData]}
        renderCard={(card) => <CardComponent data={card} />}
        onSwiped={(cardIndex) => {
          console.log("Swiped", cardIndex);
        }}
        onSwipedAll={() => {
          console.log("onSwipedAll");
        }}
        cardIndex={0}
        infinite={isInifinite}
        horizontalSwipe={horizontalSwipe}
        verticalSwipe={verticalSwipe}
        backgroundColor={"#4FD0E9"}
        stackSize={3}
      />
    </View>
  );
};

export default memo(DeckSwiper);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  done: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    backgroundColor: "transparent",
  },
});
