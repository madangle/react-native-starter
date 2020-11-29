import React from "react";
import { Text, StyleSheet, Button, View, FlatList, StatusBar, SafeAreaView } from "react-native";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
	},
	{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2fdba',
    title: 'Fourth Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbdfeaa97f63',
    title: 'Fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1454571e29d72',
    title: 'Sixth Item',
	},
	{
    id: '3ac68afc-c605-4963-a4f8-fbdfeaa97f63',
    title: 'Seventh Item',
  },
  {
    id: '58694a0f-3da1-412f-bd96-1454571e29d72',
    title: 'Eighth Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ListsScreen = ({navigation}) => {
	
	const renderItem = ({ item }) => (
    <Item title={item.title} />
	);
	
  return (
			<SafeAreaView>
				<View>
					<Text style={styles.text}>Lists Screen</Text>
					<Button title="Go To Components" onPress={() => navigation.navigate("Components") } />
				</View>
				<View>
					<Text>Featured</Text>
					<View>
						<FlatList
							data={DATA}
							renderItem={renderItem}
							keyExtractor={item => item.id}
							// horizontal={true}
							// showsHorizontalScrollIndicator={false}
						/>
					</View>
				</View>				
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
	},
	container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ListsScreen;
