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
    $(".main_body").on("click.show_task_list", ".task_list", this.activateTaskList)
}

$(document).ready(function(){
    var taskListLogic = new TaskListLogic();
});