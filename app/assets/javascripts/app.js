document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      message: "To Do List",
      tasks: [
                {item: "Get groceries",
                  priority: "1"},
                {item: "Do laundry",
                  priority: "3"},
                {item: "Clean office",
                  priority: "2"
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
                                    priority: this.newTaskPriority
                                   };
          this.tasks.push(this.newTask);
          this.newTaskItem = "";
          this.newTaskPriority = "";
        }
      },
      completeTask: function(inputTask) {
        var index = this.tasks.indexOf(inputTask);
        this.tasks.splice(index,1);

      }       
    },
    computed: {

    }
  });
});