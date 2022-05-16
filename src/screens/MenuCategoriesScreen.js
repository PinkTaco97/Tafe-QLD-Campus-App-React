// Import Thrid Party Libraies.
import React, { useState, useEffect } from 'react';
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
    ScrollView,
	FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

// Import Config Settings.
import colors from '../config/colors';

// Import API Components.
import menuApi from '../api/menu';

// Import UI Components.
import Header from '../components/Header';
import MenuCategoryItem from '../components/MenuCategoryItem';
import Space from '../components/Space';


// Render the Menu Screen.
function MenuScreen({ navigation }) {

	// The Categories loaded from the Database.
	const [categories, setCategories] = useState([]);

	// Whether there was an error. 
	const [error, setError] = useState(false);

	// Called when Componenet is Rendered.
	// useEffect(() => {
	// 	GetSelectedCampus();
	// 	GetMenuCategories();
	// }, [selectedCampus])

	// Called when Screen is Focused.
	useFocusEffect(
		React.useCallback(() => {
			GetSelectedCampus();
		}, [])
	);

	const GetSelectedCampus = async () => {
		try {
			GetMenuCategories(Number(await AsyncStorage.getItem("@selected_campus")));
		} catch (e) {
			alert(e);
		}
	}

	// Get the Menu Categories from the API.
	const GetMenuCategories = async (campusID) => {
		const response = await menuApi.getMenuCategoriesCampus(campusID);

		// If there was an Error.
		if(!response.ok){
			//alert(response.problem);
			console.log(response.originalError);
			setError(true);
			return (<></>);
		}
		else{
			//console.log(response.data);
			setCategories(response.data)
			setError(false);
		}
	}

    return (
        <SafeAreaView style={styles.container}>
			<Header title="Cafe Menu"/>
			{categories.length === 0 ?
				<Text style={styles.message}>This Campus dosn't have a Menu.</Text> :
				<></>
			}
			<FlatList
				style={styles.scrollView}
				data={categories}
				// numColumns={2}
				keyExtractor={category => category.id.toString()}
				renderItem={({ item }) =>
					<MenuCategoryItem
						name={item.name}
						imageURL={item.image}
						onPress={() => navigation.navigate("MenuItems", item)}
					/>
				}
				ItemSeparatorComponent={() =>
					<Space height={25}/>
				}
				ListFooterComponent={() =>
					<Space height={55}/>
				}
			/>
		</SafeAreaView>
    );
}

// Style the Components.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.light,
	},
	message: {
		color: colors.black,
		fontSize: 15,
		fontWeight: 'bold',
		padding: 10,
	},
	scrollView: {
		width: "100%",
		padding: 25,
	},
})

// Export the Component.
export default MenuScreen;