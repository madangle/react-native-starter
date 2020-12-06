import React, { useState} from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const CounterScreen = ({navigation}) => {

  const [counter, setCounter] = useState(0);

  return (
		<View>
			<Button title="Increase" onPress= {() => setCounter(counter + 1)} />
			<Button title="Decrease" onPress= {() => counter > 0 ? setCounter(counter - 1) : false } />
			<Text style={styles.text}>Current Count - {counter}</Text>        
		</View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default CounterScreen;
