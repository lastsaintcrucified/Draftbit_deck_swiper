import React, { Component, useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";

type Props = {
  data: any;
};

const CardComponent: React.FC<React.PropsWithChildren<Props>> = ({ data }) => {
  return (
    <>
      <Text style={styles.srlNm}>{data.id}.</Text>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={{ uri: data.image }}
          style={{ height: 100, width: "100%" }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {data.firstName} {data.lastName}
          </Text>
          <Text style={styles.desc}>
            {data.firstName} is a {data.gender}. His/Her address is at{" "}
            {data.address.address}. He/She completed his/her study from{" "}
            {data.university}. He/She works in {data.company.name} which is
            situated in {data.company.address.address}
          </Text>
          <Button title="Click me" />
        </View>
      </View>
    </>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: "60%",
  },
  srlNm: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 11,
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  desc: {
    fontSize: 15,
    marginVertical: 10,
    lineHeight: 25,
  },
});
