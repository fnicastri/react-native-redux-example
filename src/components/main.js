import { View, Image, StyleSheet } from 'react-native';

import createFooter from './footer';

export default React => {

	const { func } = React.PropTypes;

	const main = ({ onChangeMode, onChangeSubject, onChangeToggled, ...props }) => {

		const Footer = createFooter(React);

	    const { mode, subject, toggled } = props;

	    const childrenProps = {
	      styles,
	      mode,
	      subject,
	      toggled
	    };

	    return (
	      <View style={styles.container}>
	        <Footer onPressFooter={ onChangeMode } { ...childrenProps }></Footer>
	        <Footer onPressFooter={ onChangeSubject } { ...childrenProps }></Footer>
	        <Footer onPressFooter={ (e) => onChangeToggled(e, true) } { ...childrenProps }></Footer>
	      </View>
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
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'left',
    color: '#fff',
    marginBottom: 5,
    backgroundColor: '#000'
  },
});