document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      message: "To Do List",
      tasks: [
                {item: "Get groceries",
                  priority: "1",
                  completed: false},
                {item: "Do laundry",
                  priority: "3",
                  completed: false},
                {item: "Clean office",
                  priority: "2",
                  completed: false
                }
                ],
      newTaskItem: "",
      newTaskPriority: ""
    },
    mounted: function() {

    },
    methods: {
      addTask: function() {
        if (this.newTaskItem && this.newTaskPriority) { //empty string proves falsey anyway, so it doesn't matter if you just say that in the if, as opposed to writing equals not ""
          var newTask = {
                                    item: this.newTaskItem,
                                    priority: this.newTaskPriority,
                                    completed: false
                                   };
          this.tasks.push(newTask);
          this.newTaskItem = "";
          this.newTaskPriority = "";
        }
      },
      completeTask: function(inputTask) {
        // var index = this.tasks.indexOf(inputTask);
        // this.tasks.splice(index,1);
         
            inputTask.completed = !inputTask.completed;
      } ,
      tasksLeft: function() {
        var counter = 0;

          for (let task of this.tasks) {
              if (!task.completed) {
                counter +=1;
              }
          }
        return counter;
      },
      deleteCompletedTasks: function() {
             for (let task of this.tasks) {
              if (task.completed) {
                var index = this.tasks.indexOf(task);
                this.tasks.splice(index, 1);      
              }
          }
          //another way to do it which is faster is to just find the incomplete tasks, then make a new array with them that replaces the taks array.
          // let incompleteTasks = [];
          // for (let task of this.tasks) {
          //   if(!task.completed) {
          //     incompleteTasks.push(task);
          //   }
          // }
          // this.tasks = incompleteTasks;
        
      }    
    },
    computed: {

    }
  });
});