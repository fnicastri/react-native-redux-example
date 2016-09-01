export const SET_MODE = 'SET_MODE';
export const SET_SUBJECT = 'SET_SUBJECT';

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