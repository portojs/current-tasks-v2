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
    this.tasksHover = function() {
        $(this).addClass("task_list_hover");
        if ($(this).hasClass("task_list_hover")) {
            alert("Hover class attached");
        }
        else {
            alert("Hover class not attached");
        }
        /*
        $(this).toggleClass("task_list_hover");
        if ($(this).hasClass("task_list_hover")) {
            $(this).css("background-color", "lightgoldenrodyellow");
        }
        else {
            $(this).css("background-color", "lightgrey");
        }
        */
    };
    $(".main_body").on("click.show_task_list", ".task_list", this.activateTaskList);
    $(".task_list").on("mouseover", "li", this.tasksHover);
}

$(document).ready(function(){
    var taskListLogic = new TaskListLogic();
});