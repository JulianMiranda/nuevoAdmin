import { compareFilterOrder } from './compareFilterOrder';
import {compareFilterSub} from './compareFilterSub';
export const PrepareGetObject = async (resource, params) => {
	if (resource === 'users') return await user(params);
	else if (resource === 'categories') return common(params);
	else if (resource === 'subcategories') return subcategories(resource, params);
	else if (resource === 'orders') return orders(resource, params);
	else if (resource === 'products') return products(params);

	return {};
};

const common = async (params) => {
	const {pagination, sort, filter} = params;
	const {page, perPage} = pagination;
	const {q, ...queryFilter} = filter;

	const search = q ? {text: q, fields: ['name']} : {};

	const query = {
		filter: queryFilter,
		search,
		fields: {},
		docsPerPage: perPage,
		page,
		sort: {[sort.field]: sort.order}
	};

	if (JSON.stringify(query) === '{}') return null;

	return query;
};

const products = async (params) => {
	const population = [
		{
			path: 'images',
			filter: {status: true},
			fields: {
				url: true
			}
		}
	];
	const {pagination, sort, filter} = params;
	const {page, perPage} = pagination;
	const {q, ...queryFilter} = filter;

	const filterP = await compareFilterSub(queryFilter);

	const search = q ? {text: q, fields: ['name']} : {};

	const query = {
		filter: filterP,
		search,
		fields: {},
		docsPerPage: perPage,
		page,
		sort: {[sort.field]: sort.order},
		population: population
	};

	return query;
};

const subcategories = async (resource, params) => {
	const population = [
		{
			path: 'images',
			filter: {status: true},
			fields: {
				url: true
			}
		}
	];
	const {pagination, sort, filter} = params;
	const {page, perPage} = pagination;
	const {q, ...queryFilter} = filter;

	const filterP = await compareFilterSub(queryFilter);

	const search = q ? {text: q, fields: ['name']} : {};

	const query = {
		filter: filterP,
		search,
		fields: {},
		docsPerPage: perPage,
		page,
		sort: {[sort.field]: sort.order},
		population: population
	};

	return query;
};
const user = (params) => {
	const population = [{path: 'image', fields: {url: true, status: true}}];
	const {pagination, sort, filter} = params;
	const {page, perPage} = pagination;
	const {q, ...queryFilter} = filter;

	const search = q ? {text: q, fields: ['name']} : {};

	const query = {
		filter: queryFilter,
		search,
		fields: {},
		docsPerPage: perPage,
		page,
		sort: {[sort.field]: sort.order},
		population: population
	};

	return query;
};
const orders = async (resource, params) => {
	const population = [
		{
			path: 'user',
			fields: {
				name: true,
				phone: true
			}
		}
	];
	const {pagination, sort, filter} = params;
	const {page, perPage} = pagination;
	const {q, ...queryFilter} = filter;

	console.log(queryFilter, 'queryFilter');
	const filterP = await compareFilterOrder(queryFilter);
	console.log(filterP, 'filterP');
	

	/* const search = q ? {text: q, fields: ['name']} : {};
	const filterP = JSON.stringify(queryFilter) !== '{}' ? {owner: ["=",queryFilter.owner]} : '';
	 */const query = {
		filter: filterP,
		/* search, */
		fields: {},
		docsPerPage: perPage,
		page,
		sort: {[sort.field]: sort.order},
		population: population
	};

	return query;
};
