<template>
	<div>
		<header>
			<nav>
				<NuxtLink to="/">WEBSITE</NuxtLink>
				<ul>
					<li>
						<NuxtLink to="/">Home</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/about">About</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/products">Products</NuxtLink>
					</li>
				</ul>
			</nav>
		</header>

		<h2>Home</h2>
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
	</div>
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
</style>
