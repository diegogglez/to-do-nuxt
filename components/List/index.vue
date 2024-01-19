<script setup>
  let taskForm = ref(false);
  let taskName;
  const props = defineProps(['data'])
  const emit = defineEmits(['delete-list'])
  const data = props.data;
  let tasks = ref(data.tasks.length ? data.tasks : []);
  // console.log(data.tasks.value)

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

  const updateList = async () => {
    await $fetch('/api/updateList', {
      method: 'PUT',
      body: {
        id: data._id,
        title: data.name,
        tasks: tasks.value
      }
    })
  };

  const handleTaskForm = (open) => {
    open === true ? taskForm.value = true : taskForm.value = false;
  };

  const submitTaskForm = (event) => {
    event.preventDefault();
    tasks.value.push(taskName);
    updateList();
    taskName = '';
    handleTaskForm(false)
  };
</script>

<template>
  <div :class=styles>
    <div class="flex justify-between items-center">
      <input 
        id="title"
        class="text-black font-semibold" 
        v-model="data.name"
        @change="updateList">
      <button class="hover:bg-slate-500 p-2 rounded">
        <IconsDeleteList @click="deleteList"/>
      </button>
    </div>
    <div class="flex flex-col gap-5 p-2 rounded">
      <button 
        v-if="!taskForm"
        class="flex justify-start items-center gap-5 w-full hover:bg-slate-500"
        @click="handleTaskForm(true)">
          <IconsAdd/>
          <p>add task</p>
      </button>
      <input
        class="text-black font-semibold" 
        v-for="item in tasks"
        :value="item">
      <form v-if="taskForm" class="w-full flex flex-col justify-center items-center p-2 gap-3">
        <input class="w-full text-black font-semibold" type="text" v-model="taskName">
        <div class="w-full flex justify-start items-center gap-5">
          <button @click="submitTaskForm">
            add task
          </button>
          <button @click="handleTaskForm(false)">
            <iconsClose/>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>