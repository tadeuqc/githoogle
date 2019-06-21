import { format } from 'date-fns';

const convertToDate = value => {
	if (!value) {
		return new Date();
	}

	if (typeof value === 'object') {
		return value;
	}

	return new Date(value);
};

export const date = value => format(convertToDate(value), 'MM/DD/YYYY');
export const dateTime = value => format(convertToDate(value), 'MM/DD/YYYY HH:mm');
