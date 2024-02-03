<template>
    <div>


        <!-- The modal -->
        <div class="modal fade" id="taksModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="modalLabel">Todo create form</h4>
                    </div>
                    <div class="modal-body">
                        <span v-if="errors">
                            <div class="alert alert-danger" v-bind:key="ind" v-for="(error, ind) in errors">
                                <i class="fa fa-warning">{{ error }}</i>
                            </div>
                        </span>
                        <form action="#" @submit.prevent="saveTask()">
                            <div class="form-group">
                                <label for="title">Title</label>
                                <input v-model="form.title" type="text" class="form-control" id="title" name="title">
                            </div>
                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea v-model="form.description" class="form-control" cols="4" rows="6"></textarea>
                            </div>
                            <button type="submit" class="btn btn-default">Save</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style>
.task-row {
    background-color: white;
    /* Set the background color for each task row */
    padding: 11px 0px;
    margin-bottom: 10px;
    /* Add margin to separate each task row */
}

.action-btn {
    float: right;
    text-align: right;
}

.panel .panel-body .task-row:last-child {
    margin-bottom: 0;
    /* Remove margin for the last task row to avoid extra space */
}
</style>

  
<script>
export default {
    props: {
        status: String,
        tasks: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            errors: [],
            form: new Form({
                id: 0,
                title: null,
                description: null,
                status: null,
            }),
        }
    },
    computed: {
        filteredTasks() {
            return this.tasks.filter(task => task.status === this.status);
        },
    },
    methods: {

        saveTask() {

            this.savingImage = true;
            this.errors = [];
            this.form
                .post("task/store")
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                    if (error.response.status === 412) {
                        this.errors = [error.response.data.message];
                    }
                    this.tasks.push(this.form)
                    toast({
                        type: "warning",
                        title: error.response.data.message,
                    });
                })
                .finally(() => {
                    this.savingImage = false;
                });
        },

       
    },
};
</script>


  