<script setup>
  const { data } = await useFetch('/api/allTasks');
</script>

<template>
  <div class=" w-ful h-screen flex flex-col justify-start items-center mt-10">
    <List/>
  </div>
</template>