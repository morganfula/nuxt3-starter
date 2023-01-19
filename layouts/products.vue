<template>
	<div>
		<header class="shadow-sm bg-white">
			<nav class="container mx-auto p-4">
				<NuxtLink to="/products" class="font-bold">WEBSITE MERCH</NuxtLink>
			</nav>
		</header>

		<!--? output the page content -->
		<div v-if="loading" class="loader content-center flex justify-items-center">
			<Loader />
		</div>

		<div class="container mx-auto p-4">
			<slot />
		</div>

		<Footer />
	</div>
</template>

<script setup>
	const nuxtApp = useNuxtApp();
	const loading = ref(false);
	nuxtApp.hook('page:start', () => {
		loading.value = true;
	});

	nuxtApp.hook('page:finish', () => {
		setTimeout(() => {
			loading.value = false;
		}, 3000);
	});
</script>

<style scoped>
	.router-link-exact-active {
		color: #12b488;
	}
</style>
