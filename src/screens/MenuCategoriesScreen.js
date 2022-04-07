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
import Space from '../components/Space';
import MenuCategoryItem from '../components/MenuCategoryItem';


// Render the Menu Screen.
function MenuScreen({ navigation }) {

	// The Categories loaded from the Database.
	const [categories, setCategories] = useState([]);

	// Whether there was an error. 
	const [error, setError] = useState(false);

	// Called when Componenet is Rendered.
	useEffect(() => {
		GetMenuCategories();
	}, [])

	// Get the Menu Categories from the API.
	const GetMenuCategories = async () => {
		const response = await menuApi.getMenuCategories();

		// If there was an Error.
		if(!response.ok){
			alert(response.problem);
			console.log(response.problem);
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
			<View style={styles.header}>
				<Text style={styles.heading}>Menu</Text>
			</View>
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
export default MenuScreen;