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

// Import Config Settings.
import colors from '../config/colors';

// Import API Compponents.
import menuApi from '../api/menu';

// Import UI Compponents.
import Header from '../components/Header';
import Space from '../components/Space';
import MenuItem from '../components/MenuItem';


// Render the Menu Screen.
function MenuItemsScreen({ navigation, route }) {

	// The ID of the Category of MenuItems to load from the Database.
	const category = route.params.id;

	// The Name of the Category
	const categoryName = route.params.name;

	// The Categories loaded from the Database.
	const [menuItems, setMenuItems] = useState([]);

	// Whether there was an error. 
	const [error, setError] = useState(false);

	// Called when Componenet is Rendered.
	useEffect(() => {
		GetMenuItems(category);
	}, [])

	// Get the Menu Categories from the API.
	const GetMenuItems = async (category) => {
		const response = await menuApi.getMenuItems(category);

		// If there was an Error.
		if(!response.ok){
			alert(response.problem);
			console.log(response.problem);
			setError(true);
			return (<></>);
		}
		else{
			//console.log(response.data);
			setMenuItems(response.data);
			setError(false);
		}
	}

    return (
        <SafeAreaView style={styles.container}>
			<Header
				title={categoryName}
				back={true}
				onBack={() => {navigation.navigate("MenuCategories");}}
			/>
			{menuItems.length === 0 ?
				<Text style={styles.message}>No items in this Category.</Text> :
				<></>
			}
			<FlatList
				style={styles.scrollView}
				data={menuItems}
				// numColumns={2}
				keyExtractor={category => category.id.toString()}
				renderItem={({ item }) =>
					<MenuItem
						name={item.name}
						price={item.price}
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
	header: {
		width: "100%",
		height: 75,
		backgroundColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	heading: {
		color: colors.white,
		fontSize: 30,
		fontWeight: 'bold',
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
	event: {
		width: "100%",
		height: 400,
		backgroundColor: colors.primary,
		marginVertical: 25,
	},
})

// Export the Component.
export default MenuItemsScreen;