<template>
	<div>
		<Head>
			<!-- <Title> Nuxt 3 Stater | {{ product.title }}</Title>
			<Meta name="description" :content="product.description" /> -->
		</Head>
		<ProductDetails :product="product" />
	</div>
</template>

<script setup>
	import Config from '~/assets/config.js';

	const { id } = useRoute().params;
	const uri = 'https://r7alwpengine.ch/wp-json/wp/v2/events/' + id;

	// Fetch the product
	const { data: product } = await useFetch(uri, { key: id });

	if (!product.value) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Product not found',
			fatal: true,
		});
	}

	definePageMeta({
		layout: 'products',
	});
</script>

<style scoped></style>
