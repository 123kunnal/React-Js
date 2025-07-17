const express=require('express')
const app=express()
app.use(express.json())
// app.use(cors())

const titles = ["Buy milk", "Do pushups", "Code in React", "Meditate", "Read a book"];
const descriptions = ["Finish by tonight", "Take it slow", "High priority", "Daily habit", "Optional"];

let id=1
let todos=[]

function Addtodo(){
    const todo={
        id:id++,
        title:titles[Math.floor(Math.random()*titles.length)],
        description:descriptions[Math.floor(Math.random()*descriptions.length)]
    }
    todos.push(todo);
    console.log(todos);
    
}
setInterval(Addtodo,20000);

app.get('/',(req,res)=>{
    res.json(todos);
})



app.listen(3000)