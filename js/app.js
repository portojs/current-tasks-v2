/**
 * Created by Peter on 22.07.2015.
 */
function TaskListLogic() {
    var tsksContainer = $(".tasks_container");
    this.activateTaskList = function() {
        $(this).toggleClass("task_list_active");
        if ($(this).hasClass("task_list_active")) {
            $(this).animate({"left": "0"}, "fast");
        }
        else {
            $(this).animate({"left": "-450px"}, "fast");
        }
    };
    this.openAddTaskForm = function(event) {
        event.stopPropagation();
        $(this).closest(".task_list").find(".add_task_form").slideToggle();
    };
    this.preventPropagation = function(event) {
        event.stopPropagation();
    };
    this.addTask = function(event) {
        event.stopPropagation();
        var newTaskText = $(this).closest(".add_task_form").find(".add_task_form_input").val();
        if (newTaskText.length > 0) {
            var newTask = $(this).closest(".task_list").find("li:first-child").clone().text(newTaskText);
            $(this).closest(".task_list").find(".list-unstyled").append(newTask);
        }
    };
    $(".main_body").on("click.show_task_list", ".task_list", this.activateTaskList);
    tsksContainer.on("click.add_task_form", ".button_new_task", this.openAddTaskForm);
    tsksContainer.on("click.add_task_form", ".add_task_form_input", this.preventPropagation);
    tsksContainer.on("click.add_task_form", ".button_add_task", this.addTask)
}

$(document).ready(function(){
    var taskListLogic = new TaskListLogic();
});