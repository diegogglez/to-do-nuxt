<script setup>
  
</script>

<template>
  <div class="flex flex-col gap-5 w-72 bg-slate-400 p-5 rounded-lg">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold">List title</h1>
      <button class="hover:bg-slate-500 p-2 rounded">
        <IconsDeleteList/>
      </button>
    </div>
    <div class="hover:bg-slate-500 p-2 rounded">
      <button class="flex justify-start items-center gap-5 w-full">
          <IconsAdd/>
          <p>add List</p>
      </button>
    </div>
  </div>
</template>