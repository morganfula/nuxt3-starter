<template>
	<div>
		<div class="grid grid-cols-4 gap-5">
			<div v-for="p in products" :key="p.id">
				<ProductCard :product="p" />
			</div>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		layout: 'products',
	});

	// fetch the product
	const { data: products } = await useFetch(
		'https://fakestoreapi.com/products'
	);

	useHead({
		title: 'Nuxt 3 Starter | Merch',
		meta: [{ name: 'descriptio', content: 'Nuxt 3 Merch' }],
	});
</script>

<style scoped>
	h2 {
		margin-bottom: 20px;
		font-size: 32px;
	}

	p {
		margin: 20px 0;
	}
</style>
