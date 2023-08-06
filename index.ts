import { stringify } from 'querystring';
import * as readline from 'readline';
import { IndentStyle } from 'typescript';


//type Status = 'toDo' | "Doing" | "Done"; //union type - status of each task
type lable = "Green" | "Blue" | "Red" | "Yellow" //union type - lables



//product type

type myDate = "Saturday"| "Sunday" | "Monday"| "Tuesday" | "Wednesday" | "Thursday" | "Friday"
type BaseTask = {
    title: String,
    deadline: myDate,
    lable: Array<lable>,
    // status: Status,
};

type Done = BaseTask & {
    status: "Done"
    startDate: myDate,
}
type toDo = BaseTask & {
    status: "toDo"
}

type Doing = BaseTask & {
    satatus: "Doing"
    endDate: myDate
}

type Task = Done | toDo | Doing

// const t: Task1 = {
//     title: "",
//     satatus: "Doing",
//     startDate: "Friday",
//     deadline: "Friday",
// }



class TaskManager {
    public tasksArray: Task[]=[]; // An array that all keep all tasks
    constructor(){
        this.addTask = this.addTask.bind(this);
    }

//title:String, deadline:myDate, lable: Array<lable>, status:Status
    addTask(task:Doing){
        this.tasksArray.push(task);

    }


  
    findByTitle(title:String){
        const index = this.tasksArray.findIndex(task =>task.title === title);
        return index;
    }

    deleteTaskByTitle(title: String){
        const index = this.findByTitle(title);
        if(index !== -1){
            this.tasksArray.splice(index, 1);
            return true;
        }else{
            return false;
        }
    }


    addlable(lable:lable, title:String){
        const index = this.findByTitle(title)
        if(index !== -1){
            const task = this.tasksArray[index];
            task?.lable.push(lable);
            return true;
        }else{
            return false    
        }


}

    deletelable(lable: lable, title:String){
        const index = this.findByTitle(title);
        if(index !== -1){
            const task = this.tasksArray[index];
            const indexForRemove = task?.lable.indexOf(lable);
            if(indexForRemove !==undefined){
                task?.lable.splice(indexForRemove,1);
                return true;
            }else{
                return false;
            }
        }else{
            return false;
         }



}
    changeStatus(newStatus:Status,title:String){
        const index = this.findByTitle(title);
        if(index !== -1){ //inja check mikonim ke hatman bashe. chera majbooram mikone yedor dge check konam bebinam ke hatman hast ya na?
            const taskToChangeStatus = this.tasksArray[index];
            if(taskToChangeStatus){
                taskToChangeStatus.status = newStatus;
                return true;
            }
            
        }
        else{
            return false;
        }
    }

    filterBy(what:{title?: string , status?:Status, lable?: lable}): Task[]{
        return this.tasksArray.filter(task => {
            let meet = true;
            if(what.title && what.title !== task.title){
                meet = false;
            }else if(what.status && what.status !==task.status){
                meet = false;
            }else if(what.lable && !task.lable.includes(what.lable)){
                meet = false;
            }
            return meet;

        });
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
    const newTask = new TaskManager(); 
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
             //console.log('TaskMa array:', newTask.tasksArray);
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