<script setup>
  const runSeed = async () => {
    console.log('executing seed...')
    await $fetch('/api/listSeed');
  };
</script>

<template>
  <div class="w-full h-32 flex flex-col justify-center items-center gap-2">
    <h1 class="font-bold text-2xl">TODO BOARD</h1>
    <button @click="runSeed" class="hover:bg-slate-500 p-2 rounded">seed</button>
  </div>
</template>