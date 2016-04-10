import React, {
  Component,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

import Badge from './Badge';

var styles = StyleSheet.create({
	container: {
	  flex: 1
	},
	buttonText: {
	  fontSize: 18,
	  color: 'white',
	  alignSelf: 'center'
	},
	rowContainer: {
	  padding: 10
	},
	rowTitle: {
	  color: '#009688',
	  fontSize: 16
	},
	rowContent: {
	  fontSize: 19
	}
});

class Profile extends Component {
	
	getRowTitle(user, item){
		item = (item === 'public_repos') ? item.replace('_', ' ') : item;
		return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
	}

	render(){
		var userInfo = this.props.userInfo;
		var topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
		var list = topicArr.map((item, index) => {
			if(!userInfo[item]) {
				return <View key={index} />
			} else {
				return (
					<View key={index}>
						<View style={styles.rowContainer}>
							<Text style={styles.rowTitle}> {this.getRowTitle(userInfo, item)} </Text>
							<Text style={styles.rowContent}> {userInfo[item]} </Text>
						</View>
					</View>
				)
			}
		});

		return (
			<ScrollView style={styles.container}>
				<Badge userInfo={this.props.userInfo} />
				{list}
			</ScrollView>
		)
	}
}

module.exports = Profile;