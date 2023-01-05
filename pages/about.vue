<template>
	<div>
		<h2>About</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. At similique
			libero obcaecati non eum velit voluptates, animi numquam totam
			consectetur.
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. At similique
			libero obcaecati non eum velit voluptates, animi numquam totam
			consectetur.
		</p>
		<div>{{ data }}</div>
	</div>
</template>

<script setup>
	const { data } = await useFetch('/api/currency/GBP');
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
