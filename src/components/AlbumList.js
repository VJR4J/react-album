import React, { Component } from 'react';
import { View ,ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
	state = {
		albums : []
	};

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({
			albums : response.data
		}));
	}

	renderAlbums() {
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album} />
			);
	}

	render(){
		return(
			<ScrollView>
				<View style={styles.bgStyle}> 
					
						{this.renderAlbums()}
					
				</View>
			</ScrollView>
			
		);
	}
};

const styles = {
	bgStyle : {
		flex : 1,
		paddingBottom : 70,
		backgroundColor: '#fafafa'
	}
};

export default AlbumList;