const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const validateTodoInput = require("../../validation/todo");


// load user model
const user = require("../../models/User");

// route GET api/userss/test
//  Tests users route
//  access Public

router.get("/test", (req, res) => res.json({ msg: "USers works" }));

// route POST api/users/register
//  Register user
//  access Public

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  //checking validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (_err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          //  if (err) throw(err);
          if (err) console.log(err);
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// GET api/users/login
//  Login user/Returning JWT token
//  public access

router.post("/login", (req, res) => {
  /*   login validation does not work for some reason
    currently put on hold
*/

  const{errors,isValid} =  validateLoginInput(req.body);
  // checking validation
  if(!isValid){
      return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // find user by email

  User.findOne({ email }).then(user => {
    // check for users
    if (!user) {
      errors.email = "user not found";
      return res.status(404).json(errors);
    }
    // check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // user matched
        // create payload

        const payload = {
          id: user.id,
          name: user.name
        };

        // sign token
        jwt.sign(
          payload,
          keys.secretOrkey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );

          
      } else {
        errors.password = "password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// route GET api/users/current
//  Return current user
//  access Private

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      todos: req.user.todos
    });
    console.log(req.user)
  }
);








// route POST api/users/add-todo
//  add a todo-item
//  access Private

router.post("/add-todo",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
      const { errors, isValid } = validateTodoInput(req.body);

    // Check Validation
      if (!isValid) {
    // Return any errors with 400 status
    return res.status(400).json(errors);
      }
    
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







// route POST api/users/del-todo
//  delete a todo-item
//  access Private


router.delete(
    '/todos/:todo_id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

      // User.findByIdAndDelete(req.user.id)
      User.findOne({ id: req.user.id })
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







module.exports = router;
