type Status = "toDo" | "Doing" | "Done"; //union type - status of each task
type label = "Green" | "Blue" | "Red" | "Yellow" //union type - lables



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


    // isTaskExist(title:String){
    //     let message:string =""
    //     const index = this.tasksArray.findIndex(task => task.title === title);
    //     if(index === -1){
    //         message =`Task with this title ${title} does not exist!`;

    //     }else{
    //         this.tasksArray.splice(index, 1);
    //         message=`Task with title ${title} deleted successfully!`;
    //     }
    //     return message;
    // }



    deleteTaskByTitle(title: String){
        let message:string =""
        const index = this.tasksArray.findIndex(task => task.title === title);
        if(index === -1){
            message =`Task with this title ${title} does not exist!`;

        }else{
            this.tasksArray.splice(index, 1);
            message=`Task with title ${title} deleted successfully!`;
        }
        return message;
    }


    addLabel(label:label, title:String){
        let message="";
        const index = this.tasksArray.findIndex(task => task.title === title);
        if(index === -1){
            message= `Task with title ${title} already exists`;
        }else{
            const task = this.tasksArray[index];
            task?.lable.push(label);
            message=`label ${label} added successfully to task with title ${title}!`;
            //const labelArray = task?.lable; //chera inja khodesh pishnahad dad alamat soAl bezaram?
        }
        return message;


}

    deleteLabel(label: label, title:String){
        let message="";
        const index = this.tasksArray.findIndex(task => task.title === title);
        if(index === -1){
            message= `Task with title ${title} already exists`;
        }else{
            const task = this.tasksArray[index];
            const indexForRemove = task?.lable.indexOf(label);
            if(indexForRemove===undefined){
                message= `Task with title ${title} has no label ${label}`;
            }else{
            task?.lable.splice(indexForRemove,1);
            }

    }



}
}
