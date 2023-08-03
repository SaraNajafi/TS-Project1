import * as readline from 'readline';
import { IndentStyle } from 'typescript';


type Status = "toDo" | "Doing" | "Done"; //union type - status of each task
type lable = "Green" | "Blue" | "Red" | "Yellow" //union type - lables



//product type

type myDate = "Saturday"| "Sunday" | "Monday"| "Tuesday" | "Wednesday" | "Thursday" | "Friday"
type Task = {
    title: String,
    deadline: myDate,
    lable: Array<lable>,
    status: Status
};


const task: Task = {
    title: "Watch Video",
    deadline: "Saturday",
    lable: ["Green"],
    status: "toDo",


}

class Tasks{
    public tasksArray: Task[]=[]; // An array that all keep all tasks
    constructor(){
        this.addTask = this.addTask.bind(this);
    }

//title:String, deadline:myDate, lable: Array<lable>, status:Status
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



    deleteTaskByTitle(title: String){// in method kar nemikone va nemidonam chera :D
        let message:string =""
        const index = this.tasksArray.findIndex(task => task.title === title);
        //console.log(`${title} and ${index}`);
        if(index === -1){
            message =`Task with this title ${title} does not exist!`;
        }else{
            this.tasksArray.splice(index, 1);
            message=`Task with title ${title} deleted successfully!`;
        }
        return message;
    }


    addlable(lable:lable, title:String){
        console.log(this.tasksArray[0]?.title);
        
        let message="";
        //console.log(title);
        
        const index = this.tasksArray.findIndex(task => task.title === title);
        //console.log(index);
        if(index === -1){
            message= `Task with title ${title} already exists`;
        }else{
            const task = this.tasksArray[index];
            task?.lable.push(lable);
            message=`lable ${lable} added successfully to task with title ${title}!`;
            //const lableArray = task?.lable; //chera inja khodesh pishnahad dad alamat soAl bezaram?
        }
        return message;


}

    deletelable(lable: lable, title:String){
        let message="";
        const index = this.tasksArray.findIndex(task => task.title === title);
        if(index === -1){
            message= `Task with title ${title} already exists`;
        }else{
            const task = this.tasksArray[index];
            const indexForRemove = task?.lable.indexOf(lable);
            if(indexForRemove===undefined){
                message= `Task with title ${title} has no lable ${lable}`;
            }else{
            task?.lable.splice(indexForRemove,1);
            message = `Lable ${lable} deleted from  ${title} Card`;
            }
            return message;

    }



}
}




// Creating an interface for interacting with user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

async function getInput(prompt: string): Promise<string> {
    return new Promise<string>(resolve => {
      rl.question(prompt, answer => {
        resolve(answer);
      });
    });
  }

async function main(){
    const newTask = new Tasks(); 
    while (true) {
        const command = await getInput('Enter a command (AddTask, RemoveTask, AddLable, DeleteLabel or exit to quiet : ');
    
        if (command === 'exit') {
          console.log('Goodbye!');
          rl.close();
          break;
        }
        
        switch (command) {
            
            case 'AddTask':
                const title = await getInput('Enter task title: '); //chetori blck scope nabashe?
                const deadline = await getInput('Enter task deadline: ');
                const status = await getInput('Enter task status: ');
                const lableInput = await getInput('Enter lables (comma-separated): ');
                const lables = lableInput.split(',').map(lable => lable.trim() as lable);
        
                const task: Task = {
                  title,
                  deadline: deadline as myDate,
                  lable: lables as lable[],
                  status: status as Status,
                };
                
                newTask.addTask(task);
                console.log('Task added successfully!'+ newTask.tasksArray[0]?.title);
            break;
          case 'RemoveTask':
            const removeTitle = await getInput('Enter task title to Delete: ');
            const message =newTask.deleteTaskByTitle(removeTitle);
            console.log(message);
            break;
           case 'AddLable':
             const titleToAddLable = await getInput('Enter task title to Add lables: ');
             //console.log('Entered title:', titleToEdit);
             //console.log('Tasks array:', newTask.tasksArray);
             const lable_input = await getInput('Enter lable to add: ');
             const message1 = newTask.addlable(lable_input as lable, titleToAddLable);
             console.log(message1);
             //console.log(newTask.tasksArray[0]?.lable);
            break;
            case 'DeleteLable':
                const titleToDeleteLable = await getInput('Enter task title to Delete lables:');
                const lableInputToDelete = await getInput('Enter lable to delete: ');
                const message2 = newTask.deletelable(lableInputToDelete as lable, titleToDeleteLable);
                console.log(message2)


          default:
            console.log('Unknown command. Try again.');
        }
      }
}
main();