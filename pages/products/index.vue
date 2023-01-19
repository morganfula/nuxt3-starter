<template>
	<section>
		<div class="grid grid-cols-4 gap-5">
			<div v-for="p in products" :key="p.id">
				<ProductCard :product="p" />
			</div>
		</div>
	</section>
</template>

<script setup>
	import Config from '~/assets/config.js';
	definePageMeta({
		layout: 'products',
	});

	const { data: products } = await useFetch(
		Config.wpDomain + Config.api.events22
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
