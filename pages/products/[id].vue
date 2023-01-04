<template>
	<div>
		<p>product details for {{ id }}</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis
			error minima aliquid rerum eveniet ab illo placeat, inventore assumenda.
			Aut, modi qui incidunt excepturi doloribus corporis sed cum laborum.
		</p>
	</div>
</template>

<script setup>
	const { id } = useRoute().params;

	definePageMeta({
		layout: 'products',
	});
</script>

<style scoped></style>
