<template>
  <div class="dashboard">
    <row>
      <div class="col-md-4">
        <task-panel-box title="Todo" :tasks="allTasks" status="Incomplete"></task-panel-box>
      </div>
      
    </row>
  </div>
</template>

<script>
import TaskBox from '@/components/TaskPanelComponent.vue'

export default {
  name: 'dashboard',
  data() {
    return {
      allTasks:[],

      form: new Form({
        status: null
      }),

    }
  },
  components: {
    'task-panel-box': TaskBox,
  },
  methods: {
    getTasks() {
      this.form
        .get("task")
        .then((response) => {
          console.log(response);
          this.allTasks=response.data.data;

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
  created(){
    this.getTasks();
  }

}

</script>
