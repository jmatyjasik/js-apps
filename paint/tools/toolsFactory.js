import Pencil from './pencil.js'

export class ToolsFactory{

    constructor(){
        this.tools = new Map();

        this.tools.set('pencil', new Pencil());
    }

    getTool(toolName){
        if(this.tools.has(toolName)){
            return this.tools.get(toolName);
        }

        return null;
    }

    getAllTools(){
        return this.tools;
    }
}