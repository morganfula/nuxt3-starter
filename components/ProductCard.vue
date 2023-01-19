<template>
	<div>
		<div v-if="loading" class="card text-center">Hello</div>
		<div class="card text-center">
			<img :src="product.acf.event.photo.sizes.large" alt="" class="thumb" />
			<p>{{ product.id }}</p>
			<p class="font-bold text-gray-500 m-4 truncate">
				{{ product.title.rendered }}
			</p>
			<NuxtLink :to="`/products/${product.id}`">
				<p class="btn my-4">View Detail</p>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
	const { product } = defineProps(['product']);

	const nuxtApp = useNuxtApp();
	const loading = ref(false);
	nuxtApp.hook('page:start', () => {
		loading.value = true;
	});
	nuxtApp.hook('page:finish', () => {
		loading.value = false;
	});
</script>

<style scoped>
	.thumb {
		max-height: 120px;
		max-width: 70%;
		margin: 0 auto;
	}
</style>
