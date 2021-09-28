import firebase from 'firebase';

export const getToken = async () => {
	return new Promise((resolve, reject) => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				user
					.getIdToken()
					.then(function (idToken) {
						resolve(idToken);
					})
					.catch(() => reject());
			} else {
				reject();
			}
		});
	});
};

export const getHeaders = async () => {
	const token = await getToken();
	const headers = new Headers({Accept: 'application/json'});
	headers.set('x-token', token);
	return headers;
};
