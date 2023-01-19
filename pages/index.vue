<template>
	<section>
		<h2>Home</h2>
	</section>
</template>

<script setup></script>

<style scoped>
	h2 {
		margin-bottom: 20px;
		font-size: 32px;
	}

	p {
		margin: 20px 0;
	}

	.page-enter-active,
	.page-leave-active {
		transition: all 0.4s;
	}
	.page-enter-from,
	.page-leave-to {
		opacity: 0;
		filter: blur(1rem);
	}
</style>
