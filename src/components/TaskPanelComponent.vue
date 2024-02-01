<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">{{ status }}</h3>
        </div>
        <div class="panel-body">
            <div v-for="(task, index) in filteredTasks" :key="index">
                {{ task.title }}
                <button @click="editTask(task)">Edit</button>
                <button @click="deleteTask(task.id)">Delete</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        status: String, // "Todo", "Pending", "Done"
        tasks: {
            type: Array,
            default: () => [] // Default value is an empty array
        }, // Array of tasks
    },
    computed: {
        filteredTasks() {
            // Filter tasks based on their status
            return this.tasks.filter(task => task.status === this.status);
        },
    },
    methods: {
        editTask(task) {
            // Implement your edit logic here
            console.log(`Editing task: ${task.name}`);
        },
        deleteTask(taskId) {
            // Implement your delete logic here
            console.log(`Deleting task with ID: ${taskId}`);
        },
    },
};
</script>
  