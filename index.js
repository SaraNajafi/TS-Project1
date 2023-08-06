"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasksArray = []; // An array that all keep all tasks
        this.addTask = this.addTask.bind(this);
    }
    //title:String, deadline:myDate, lable: Array<lable>, status:Status
    TaskManager.prototype.addTask = function (task) {
        this.tasksArray.push(task);
    };
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
    TaskManager.prototype.deleteTaskByTitle = function (title) {
        var message = "";
        var index = this.tasksArray.findIndex(function (task) { return task.title === title; });
        //console.log(`${title} and ${index}`);
        if (index === -1) {
            message = "Task with this title ".concat(title, " does not exist!");
        }
        else {
            this.tasksArray.splice(index, 1);
            message = "Task with title ".concat(title, " deleted successfully!");
        }
        return message;
    };
    TaskManager.prototype.addlable = function (lable, title) {
        var _a;
        console.log((_a = this.tasksArray[0]) === null || _a === void 0 ? void 0 : _a.title);
        var message = "";
        //console.log(title);
        var index = this.tasksArray.findIndex(function (task) { return task.title === title; });
        //console.log(index);
        if (index === -1) {
            message = "Task with title ".concat(title, " already exists");
        }
        else {
            var task = this.tasksArray[index];
            task === null || task === void 0 ? void 0 : task.lable.push(lable);
            message = "lable ".concat(lable, " added successfully to task with title ").concat(title, "!");
            //const lableArray = task?.lable; //chera inja khodesh pishnahad dad alamat soAl bezaram?
        }
        return message;
    };
    TaskManager.prototype.deletelable = function (lable, title) {
        var message = "";
        var index = this.tasksArray.findIndex(function (task) { return task.title === title; });
        if (index === -1) {
            message = "Task with title ".concat(title, " already exists");
        }
        else {
            var task = this.tasksArray[index];
            var indexForRemove = task === null || task === void 0 ? void 0 : task.lable.indexOf(lable);
            if (indexForRemove === undefined) {
                message = "Task with title ".concat(title, " has no lable ").concat(lable);
            }
            else {
                task === null || task === void 0 ? void 0 : task.lable.splice(indexForRemove, 1);
                message = "Lable ".concat(lable, " deleted from  ").concat(title, " Card");
            }
            return message;
        }
    };
    return TaskManager;
}());
// Creating an interface for interacting with user
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function getInput(prompt) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    rl.question(prompt, function (answer) {
                        resolve(answer);
                    });
                })];
        });
    });
}
function main() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var newTask, command, _b, title, deadline, status_1, lableInput, lables, task, removeTitle, message, titleToAddLable, lable_input, message1, titleToDeleteLable, lableInputToDelete, message2;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    newTask = new TaskManager();
                    _c.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 18];
                    return [4 /*yield*/, getInput('Enter a command (AddTask, RemoveTask, AddLable, DeleteLabel or exit to quiet : ')];
                case 2:
                    command = _c.sent();
                    if (command === 'exit') {
                        console.log('Goodbye!');
                        rl.close();
                        return [3 /*break*/, 18];
                    }
                    _b = command;
                    switch (_b) {
                        case 'AddTask': return [3 /*break*/, 3];
                        case 'RemoveTask': return [3 /*break*/, 8];
                        case 'AddLable': return [3 /*break*/, 10];
                        case 'DeleteLable': return [3 /*break*/, 13];
                    }
                    return [3 /*break*/, 16];
                case 3: return [4 /*yield*/, getInput('Enter task title: ')];
                case 4:
                    title = _c.sent();
                    return [4 /*yield*/, getInput('Enter task deadline: ')];
                case 5:
                    deadline = _c.sent();
                    return [4 /*yield*/, getInput('Enter task status: ')];
                case 6:
                    status_1 = _c.sent();
                    return [4 /*yield*/, getInput('Enter lables (comma-separated): ')];
                case 7:
                    lableInput = _c.sent();
                    lables = lableInput.split(',').map(function (lable) { return lable.trim(); });
                    task = {
                        title: title,
                        deadline: deadline,
                        lable: lables,
                        status: status_1,
                    };
                    newTask.addTask(task);
                    console.log('Task added successfully!' + ((_a = newTask.tasksArray[0]) === null || _a === void 0 ? void 0 : _a.title));
                    return [3 /*break*/, 17];
                case 8: return [4 /*yield*/, getInput('Enter task title to Delete: ')];
                case 9:
                    removeTitle = _c.sent();
                    message = newTask.deleteTaskByTitle(removeTitle);
                    console.log(message);
                    return [3 /*break*/, 17];
                case 10: return [4 /*yield*/, getInput('Enter task title to Add lables: ')];
                case 11:
                    titleToAddLable = _c.sent();
                    return [4 /*yield*/, getInput('Enter lable to add: ')];
                case 12:
                    lable_input = _c.sent();
                    message1 = newTask.addlable(lable_input, titleToAddLable);
                    console.log(message1);
                    //console.log(newTask.tasksArray[0]?.lable);
                    return [3 /*break*/, 17];
                case 13: return [4 /*yield*/, getInput('Enter task title to Delete lables:')];
                case 14:
                    titleToDeleteLable = _c.sent();
                    return [4 /*yield*/, getInput('Enter lable to delete: ')];
                case 15:
                    lableInputToDelete = _c.sent();
                    message2 = newTask.deletelable(lableInputToDelete, titleToDeleteLable);
                    console.log(message2);
                    _c.label = 16;
                case 16:
                    console.log('Unknown command. Try again.');
                    _c.label = 17;
                case 17: return [3 /*break*/, 1];
                case 18: return [2 /*return*/];
            }
        });
    });
}
main();
