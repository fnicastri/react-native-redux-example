export const SET_MODE = 'SET_MODE';
export const SET_SUBJECT = 'SET_SUBJECT';
export const SET_TOGGLED = "SET_TOGGLED";

export function setMode(mode) {
	return {
		type: SET_MODE,
		mode
	};
}

export function setSubject(subject) {
	return {
		type: SET_SUBJECT,
		subject
	};
}

export function setToggled(toggled) {
	return {
		type: SET_TOGGLED,
		toggled
	};
}