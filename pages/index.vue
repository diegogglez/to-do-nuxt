<script setup>
  const initialData = await useFetch('/api/allLists').data;
  const addList = async () => {
    console.log('add list')
    const newList = await $fetch('/api/addList');
    initialData.value.push(newList);
  };

  const removeList = (id) => {
    console.log(id)
    const index = initialData.value.findIndex(item => item._id === id.id);
    console.log(index)
    initialData.value.shift()
    console.log(initialData.value)
  };
</script>

<template>
  <div class=" w-ful h-screen flex justify-center items-start mt-10 gap-10">
    <List v-for="item in initialData" v-bind:data="item" @delete-list="removeList"/>
    <button 
      @click="addList"
      class="w-72 flex justify-start items-center gap-5 bg-slate-900 hover:bg-slate-500 p-2 rounded">
      <IconsAdd/>
      Add List
    </button>
    <!-- <List v-bind:data="[]"/> -->
  </div>
</template>