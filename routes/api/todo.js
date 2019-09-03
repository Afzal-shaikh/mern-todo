


const validateTodoInput = require("../../validation/todo")




// route POST api/users/del-todo
//  delete a todo-item
//  access Private


router.delete(
    '/todos/:todo_id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

      // User.findByIdAndDelete(req.user.id)
      User.findOne({ email: req.user.email })
        .then(user => {
          // Get remove index
          const removeIndex = user.todos
            .map(item => item.id)
            .indexOf(req.params.todo_id);
  
          // Splice out of array
          user.todos.splice(removeIndex, 1);
  
          // Save
          user.save().then(user => res.json(user));
        })
        .catch(err => res.status(404).json(err));
    }
  );


// route POST api/users/add-todo
//  add a todo-item
//  access Private

router.post("/add-todo",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
      const { errors, isValid } = validateTodoInput(req.body);

    // // Check Validation
    //   if (!isValid) {
    // // Return any errors with 400 status
    // return res.status(400).json(errors);
    //   }
    
    User.findOne({ email: req.user.email }).then(user => {

      const newTodo = {
        content: req.body.content
      };

      // Add to Todos array
      user.todos.unshift(newTodo);
     
      

      user.save().then(user => res.json(user.todos));
    });
  }
);