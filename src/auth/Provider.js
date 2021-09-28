import {fetchLogin} from '../fetch';
import firebase from 'firebase';

export default {
	login: async () => {
		try {
			const userAuth = await fetchLogin();
			sessionStorage.setItem('userAuth', JSON.stringify(userAuth));
			return Promise.resolve();
		} catch (error) {
			return firebase.auth().signOut();
		}
	},
	logout: () => {
		return firebase.auth().signOut();
	},
	checkError: () => {
		return firebase.auth().signOut();
	},
	checkAuth: () => {
		return new Promise((resolve, reject) => {
			firebase.auth().onAuthStateChanged(async (user) => {
				if (user) {
					console.log('User is logged in');
					resolve();
				} else {
					console.log('User is not logged in');
					reject();
				}
			});
		});
	},
	getPermissions: async () => {
		return new Promise((resolve, reject) => {
			firebase.auth().onAuthStateChanged(async (user) => {
				if (user) {
					const {claims} = await user.getIdTokenResult();
					if (claims && claims.role) resolve(claims.role);
					else reject();
				} else {
					reject();
				}
			});
		});
	}
};
