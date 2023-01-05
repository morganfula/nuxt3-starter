export default defineEventHandler(async event => {
	const config = useRuntimeConfig();

	// //* Handle query params
	// const { name } = getQuery(event);

	// //* Handle post data
	// const { age } = await readBody(event);

	//* api call with a private key
	const { data } = await $fetch(
		`https://api.currencyapi.com/v3/latest?apikey=${config.API_KEY}`
	);

	return data;
});
