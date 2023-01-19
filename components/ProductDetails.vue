<template>
	<div class="card">
		<div class="grid grid-cols-2 gap-10">
			<div class="p-7">
				<img
					:src="product.acf.event.photo.sizes.large"
					alt="product img"
					class="mx-auto my-7" />
			</div>
			<div class="p-7">
				<h2 class="text-4xl my-7">{{ product.acf.infos_fr.title }}</h2>

				<div class="mb-7" v-html="product.acf.infos_fr.description"></div>
				<!-- <p class="text-xl my-7">Price - ${{ product.price }}</p>
				<h3 class="font-bold border-b-2 mb-4 pb-2">Product description</h3>
				<button class="btn flex items-center">
					<i class="material-icons mr-2">add_shopping_cart</i>
					<span>add to cart</span>
				</button> -->
			</div>
		</div>
	</div>
</template>

<script setup>
	const { product } = defineProps(['product']);
</script>

<style scoped>
	img {
		max-width: 400px;
	}
</style>
