<script setup>
  const props = defineProps(['data'])
  const emit = defineEmits(['delete-list'])
  const data = props.data;

  const styles = `w-72 flex bg-slate-900 flex-col gap-5 border ${data.labelColor} p-5 rounded-lg`;
  const color = data.labelColor;

  const deleteList = async () => {
    const deleted = await $fetch(`/api/delete/${data._id}`, {
      method: 'DELETE'
    });

    emit('delete-list', {
      id: deleted[0]._id
    })
  };
</script>

<template>
  <div :class=styles>
    <div class="flex justify-between items-center">
      <input class="text-black font-semibold" :value="data.name">
      <button class="hover:bg-slate-500 p-2 rounded">
        <IconsDeleteList @click="deleteList"/>
      </button>
    </div>
    <div class="hover:bg-slate-500 p-2 rounded">
      <button class="flex justify-start items-center gap-5 w-full">
          <IconsAdd/>
          <p>add task</p>
      </button>
    </div>
  </div>
</template>