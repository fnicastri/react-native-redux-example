import { SideMenu, List, ListItem } from 'react-native-elements';
import { View } from 'react-native';

import createMain from './main';

export default React => {

	const main1 = ({toggled, onChangeToggled, ...props}) => {

		const Main = createMain(React);

		const list = [{ 
						avatar_url: "https://avatars1.githubusercontent.com/u/6621474?v=3&s=460", 
						name: "Aldo Martinez", 
						subtitle: "Sr. Software Engineer" 
					}];

		// SideMenu takes a React Native element as a prop for the actual Side Menu
		  const MenuComponent = (
		    <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
		      <List containerStyle={{marginBottom: 20}}>
		      {
		        list.map((item, i) => (
		          <ListItem
		            roundAvatar
		            onPress={ (e) => onChangeToggled(e, false) }
		            avatar={item.avatar_url}
		            key={i}
		            title={item.name}
		            subtitle={item.subtitle} />
		        ))
		      }
		      </List>
		    </View>
		  );

		  return (
		    <SideMenu
		      MenuComponent={MenuComponent}
		      toggled={toggled}>
		      <Main toggled={toggled} onChangeToggled={ onChangeToggled } {...props} />
		    </SideMenu>
		  );
	}

	return main1;
}