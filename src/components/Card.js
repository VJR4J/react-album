import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';


const Card = (props) => {

	return(
		<View style={styles.containerStyle}>
			{props.children}
		</View>
		);
};

const styles = {
	containerStyle : {
		borderWidth : 1,
		borderRadius : 3,
		borderColor : '#ddd',
		borderBottomWidth : 0,
		shadowColor : '#000',
		shadowOffset : {
			width : 0,
			height : 2
		},
		shadowOpacity : 0.1,
		elevation : 1,
		marginLeft : 10,
		marginRight : 10,
		marginTop : 10
	}
};

export default Card;