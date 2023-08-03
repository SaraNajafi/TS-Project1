type Status = "toDo" | "Doing" | "Done"; //union type - status of each task
type label = "Green" | "Blue" | "Red" | "Yellow" //union type - lables

const mystatus: Status = "toDo";

//product type

type myDate = "Saturday"| "Sunday" | "Monday"| "Tuesday" | "Wednesday" | "Thursday" | "Friday"
type Task = {
    title: String,
    deadline: myDate,
    lable: Array<label>,
    status: Status
};


const task: Task = {
    title: "Watch Video",
    deadline: "Saturday",
    lable: ["Green"],
    status: "toDo",


}

class Tasks{
    private tasksArray: Task[]=[]; // An array that all keep all tasks
    constructor(task:Task){
        
    }

//title:String, deadline:myDate, lable: Array<label>, status:Status
    addTask(task:Task){
        this.tasksArray.push(task);

    }

    deleteTaskByTitle(title: String){
        let message:string =""
        const index = this.tasksArray.findIndex(task => task.title === title);
        if(index == -1){
            message =`Task with title ${title} does not exist!`;

        }else{
            this.tasksArray.splice(index, 1);
            message=`Task with title ${title} deleted successfully!`;
        }
        return message;
    }

}

const task1 = new Tasks(task);