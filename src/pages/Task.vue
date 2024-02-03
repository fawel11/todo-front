<template>
  <div class="dashboard">
    <row>
      <div class="col-md-3">
        <p>Task</p>
      </div>
      <div class="col-md-9" style="float: right;">
        <a data-toggle="modal" data-target="#taksModal" href="#"><i class="fa fa-plus"></i>New
          Task</a>
      </div>
    </row>
    <row>
      <div class="col-md-4">
        <task-panel-box title="Todo" :tasks="allTasks" status="Incomplete"></task-panel-box>
      </div>
      <div class="col-md-4">
        <task-panel-box title="Done" :tasks="allTasks" status="Complete"></task-panel-box>
      </div>
      <task-form-componet></task-form-componet>
    </row>
  </div>
</template>

<script>
import TaskBox from '@/components/TaskPanelComponent.vue'
import TaskForm from '@/components/TaskForm.vue'

export default {
  name: 'dashboard',
  data() {
    return {
      allTasks: [],

      form: new Form({
        status: null
      }),

    }
  },
  components: {
    'task-panel-box': TaskBox,
    'task-form-componet': TaskForm,
  },
  methods: {
    getTasks() {
      this.form
        .get("task")
        .then((response) => {
          console.log(response);
          this.allTasks = response.data.data;

        })
        .catch((error) => {
          console.log(error);


          toast({
            type: "warning",
            title: error.response.data.message,
          });
        })
        .finally(() => {
          this.savingImage = false;
        });
    }
  },
  created() {
    this.getTasks();
  }

}

</script>
