/**
 * Created by Peter on 22.07.2015.
 */
function TaskListLogic() {
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
    $(".main_body").on("click.show_task_list", ".task_list", this.activateTaskList);
    $(".tasks_container").on("click.show_add_task_form", ".button_new_task", this.openAddTaskForm);
    $(".add_task_form").on("click.show_add_task_form", ".add_task_form_input", this.preventPropagation);
}

$(document).ready(function(){
    var taskListLogic = new TaskListLogic();
});