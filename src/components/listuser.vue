<script setup lang="ts">
const users = ['Ana', 'Luis', 'María']
</script>

<template>
	<ul class="text-center">
		<li v-for="user in users" :key="user">{{ user }}</li>
	</ul>
</template>

<style scoped>

</style>
