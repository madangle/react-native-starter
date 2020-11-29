import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <View>
        <Button style={styles.buttonStyle} title="Go To Lists" onPress={() => navigation.navigate("Lists")} />  
      </View>
      <View>
        <Button style={styles.buttonStyle} title="Go To Images" onPress={() => navigation.navigate("Images")} />  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
