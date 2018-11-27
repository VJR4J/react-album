import React from 'react';
import { Text ,TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.buttonStlye}>
			<Text style={styles.textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};
const styles = {
	textStyle : {
		alignSelf : 'center',
		color : '#3700B3',
		fontSize : 16,
		fontWeight : '600',
		paddingTop : 10,
		paddingBottom : 10,
		flex : 1
	},
	buttonStlye : {
		alignSelf : 'stretch',
		flex : 1,
		backgroundColor : '#fff',
		borderRadius : 7,
		borderWidth : 1,
		borderColor : '#3700B3',
		marrginRight : 10
	}
};

export default Button;