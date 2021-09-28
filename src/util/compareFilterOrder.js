export const compareFilterOrder = async (filter) => {
	if (JSON.stringify(filter) === '{}') return null;
	else {




		const object={};
		if(filter.owner){
			object.owner = ['=', `${filter.owner}`];
		}
		if(filter.status){
			object.status = ['=', `${filter.status}`];
		}
		
		return object;
	}
};