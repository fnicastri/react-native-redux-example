import { ScrollView, Image, StyleSheet } from 'react-native';

import createFooter from './footer';

export default React => {

	const { func } = React.PropTypes;

	const main = ({ onChangeMode, onChangeSubject, ...props }) => {

		const Footer = createFooter(React);

	    const { mode, subject } = props;

	    const childrenProps = {
	      styles,
	      mode,
	      subject
	    };

	    return (
	      <ScrollView>
	      	<Image 
	      		source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}}
	      		style={{width: 360, height: 203}} />
	        <Footer onPressFooter={ onChangeMode } { ...childrenProps }></Footer>
	        <Footer onPressFooter={ onChangeSubject } { ...childrenProps }></Footer>
	      </ScrollView>
	    );

	};

	main.propTypes = {

		onChangeMode: func.isRequired,
		onChangeSubject: func.isRequired

	};

	return main;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#000',
    marginBottom: 5,
  },
});