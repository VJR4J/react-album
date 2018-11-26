//import libraries for making a component
import React from 'react';
import { Text ,View } from 'react-native';

//make component
const Header = (props) => {
	const {textStyle,viewStyle} = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}> {props.headerText}</Text>
		</View>
		);
};

//styles
const styles = {
	viewStyle : {
		backgroundColor: '#F8F8F8',
		justifyContent : 'center',
		alignItems : 'center',
		height : 60,
		paddingTop : 10,
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 20
		},
		shadowOpacity : 0.2,
		elevation :2 ,
		position : 'relative'
	},
	textStyle : {
		fontSize : 20
	}
}

//make component available for other component
export default Header; 