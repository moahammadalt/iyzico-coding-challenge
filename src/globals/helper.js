import Alert from 'react-s-alert';

// value checker for falsy customized values (false || null || undefined || '' || {})
export const checkValue = (value, key) => {

	value = key ? key.split(".").reduce((o, x) => (typeof o == "undefined" || o === null) ? o : o[x], value) : value;
	return (value === undefined || value === null || (!value && value !== 0 && value !== '0') || value === '' || /^\s*$/.test(value) || (typeof value === 'object' && isObjEmpty(value))) ? false : true;
};

export const isObjEmpty = obj => {

	if (obj == null || obj.length === 0 || typeof obj !== "object") return true;
	if (obj.length > 0 || obj instanceof Date) return false;
	for (var key in obj) {
		if (hasOwnProperty.call(obj, key)) return false;
	}
	
	return true;
};

export const handleError = err => Alert.error(`${err}`);