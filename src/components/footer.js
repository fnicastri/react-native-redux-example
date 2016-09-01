import { Text } from 'react-native';

export default React => {

	const { string, shape, func, object } = React.PropTypes;

	const footer = ({ styles, onPressFooter, ...props }) => {

		return (
			<Text style={styles.instructions} onPress={ onPressFooter }>
			  { props.subject } { props.mode } { '\n' }
			</Text>
		);
	};

	footer.propTypes = {
		mode: string.isRequired,
		subject: string.isRequired,
    	styles: object.isRequired,
    	onPressFooter: func.isRequired
  	};

	return footer;
};

