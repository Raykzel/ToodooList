new Vue({
    el: '#app',
    data: {
        newTask: {
            title: '',
            description: ''
        },
        tasks: []
    },
    methods: {
        addTask: function () {
            const taskTitle = this.newTask.title.trim();
            if (taskTitle !== '') {
                this.tasks.push({
                    title: taskTitle,
                    description: this.newTask.description,
                    done: false
                });
                this.newTask.title = '';
                this.newTask.description = '';
            }
        },
        deleteTask: function (index) {
            this.tasks.splice(index, 1);
        },
        toggleTaskStatus: function (index) {
            this.tasks[index].done = !this.tasks[index].done;
        },
        deleteAllTasks: function () {
            this.tasks = [];
        },
        deleteDoneTasks: function () {
            this.tasks = this.tasks.filter(task => !task.done);
        }
    }
});                               
