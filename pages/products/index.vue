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

	import Lenis from '@studio-freight/lenis';

	definePageMeta({
		layout: 'products',
	});

	const { data: products } = await useFetch(
		Config.wpDomain + Config.api.events22
	);

	// fetch the product

	useHead({
		title: 'Nuxt 3 Starter | Merch',
		meta: [{ name: 'descriptio', content: 'Nuxt 3 Merch' }],
	});

	onMounted(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
			direction: 'vertical', // vertical, horizontal
			gestureDirection: 'vertical', // vertical, horizontal, both
			smooth: true,
			mouseMultiplier: 1,
			smoothTouch: false,
			touchMultiplier: 2,
			infinite: false,
		});

		//get scroll value
		lenis.on(
			'scroll',
			({ scroll, limit, velocity, direction, progress }) => {}
		);

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
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
