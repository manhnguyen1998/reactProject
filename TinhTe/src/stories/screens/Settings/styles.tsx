import { StyleSheet,Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const styles: any = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
	},
	content: {
		backgroundColor: "#fff",
		
	},
	view_item: {
		backgroundColor: "#fff",
	},
	row: {
		flex: 1,
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		marginBottom: 15,
		alignItems: "center",
	},
	mt: {
		marginTop: 18,
	},
	img: {
		width:40,
		height:40,
		marginRight:5,
	},
	content_img: {
		width: deviceWidth,
		marginRight: -15,
		marginLeft: -10,
		marginTop:10,
		marginBottom:10,
	},
	search_bar: {
		display : "none",
	},
});
export default styles;
