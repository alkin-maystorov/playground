<template>
  <div
    @click="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>
      {{ task.text }}
      <span @click="$emit('delete-task', task.id)" class="delete">X</span>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object,
  },
};
</script>

<style scope>
.delete {
  transform: translateY(35%);
  color: tomato;
}

.task {
  background: #f4f4f4;
  margin: 5px 5px 15px 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid limegreen;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
