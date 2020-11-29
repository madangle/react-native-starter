import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const ComponentsScreen = ({navigation}) => {
  return (
      <View>
        <Text style={styles.text}>Components Screen</Text>
        <Button title="Go To Home" onPress={() => navigation.navigate("Home")} />
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ComponentsScreen;
