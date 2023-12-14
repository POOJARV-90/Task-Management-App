import Task from "../model/task.js";
import User from "../model/user.js";

export const addTask = async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });
    // console.log(existingUser);

    if (existingUser) {
      const newTask = new Task({ title, body, user: existingUser });

      await newTask.save();

      existingUser.tasks.push(newTask);
      await existingUser.save();

      res.status(200).json({ task: newTask, user: existingUser });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const updateTask = async(req , res) => {
    try {
        const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });
    if(existingUser){
        await Task.findByIdAndUpdate(req.params.id,{title , body})
        Task.save().then(()=>{
            res.status(200).json({message})
        })
    }
        
    } catch (error) {
        console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
    }

}

