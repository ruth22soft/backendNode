const models = require('../models');
const Validator = require('fastest-validator');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


function save(req,res) {
    console.log(req.body);

    models.user.findOne({where:{email:req.body.email}}).then(result =>{
        if(result){
            res.status(409).json({
                message: "Email already exists"
            });
        }else{
            bcryptjs.genSalt(10, function(err, salt) {
                bcryptjs.hash(req.body.password, salt, (err, hash) => {
        
                
            const user = {
                first_name: req.body.first_name,
                middle_name: req.body.middle_name,
                last_name: req.body.last_name,
                password: hash,
                email: req.body.email,
                date_of_birth: req.body.date_of_birth,
                sex: req.body.sex,
                phone_no: req.body.phone_no,
                city: req.body.city,
                wereda: req.body.wereda,
                house_no: req.body.house_no,
                emergency_contact_full_name: req.body.emergency_contact_full_name,
                emergency_contact_phone: req.body.emergency_contact_phone,
                date_of_entrance: req.body.date_of_entrance   
            }
            
            //validate the user
            const schema = {
                first_name: {type:"string", min:1, max:100, optional: false},
                middle_name: {type:"string", min:1, max:100, optional: false},
                last_name: {type:"string", min:1, max:100, optional: false},
                password: {type:"string", min:8, max:50, optional: false},
                email: {type:"string", min:10, max:100, optional: false},
                date_of_birth: {type:"date"},
                sex: {type:"string", min:1, max:6, optional: false},
                phone_no: {type: "string", min:13, max:13},
                city: {type:"string", min:2, max:13},
                wereda: {type:"string", min:1, max:100},
                house_no: {type:"string", min:1, max:100},
                emergency_contact_full_name: {type:"string", min:1, max:100},
                emergency_contact_phone: {type:"string", min:13, max:13},
                date_of_entrance: {type:"date"}
            }
        
            const v = new Validator();
            const validationResponse = v.validate(user, schema);
        
            if(validationResponse !== true) {
                res.status(400).json({
                    message: "Validation error",
                    error: validationResponse
                });
            }
            
            //to create a user
            models.user.create(user).then(result =>{
                res.status(201).json({
                    message: "User created successfully",
                    post: result
                })  
            }).catch(error => {
                res.status(500).json({
                    message: "Something went wrong",
                    error: error
                });
            });
        });
        
        });

        }   
    }).catch(error => {

    });
   
}

//to get a single user
function show(req,res) {
    const id = req.params.id;

    models.user.findByPk(id).then(result => {
        if(result) {
            res.status(200).json({
                message: "User found successfully",
                post: result
            })
        }else{
            res.status(404).json({
                message: "User not found"
            })
        }
       
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    })
}  
 

    //to get all users
    function index(req,res) {
        models.user.findAll().then(result => {
            res.status(200).json({
                message: "Users found successfully",
                post: result
            })
        }).catch(error => {
            res.status(500).json({
                message: "Something went wrong",
                error: error
            });
        })
    }

    //to update a user
    function update(req,res) {
        const id = req.params.id;
        const updatedUser = {
            first_name: req.body.first_name,
            middle_name: req.body.middle_name,
            last_name: req.body.last_name,
            user_name: req.body.user_name,
            password: req.body.password,
            email: req.body.email,
            date_of_birth: req.body.date_of_birth,
            sex: req.body.sex,
            phone_no: req.body.phone_no,
            city: req.body.city,
            wereda: req.body.wereda,
            house_no: req.body.house_no,
            emergency_contact_full_name: req.body.emergency_contact_full_name,
            emergency_contact_phone: req.body.emergency_contact_phone,
            date_of_entrance: req.body.date_of_entrance   
            }

            const userId = req.params.id;

            models.user.update(updatedUser, {where: {id: id}}).then(result => {
                res.status(200).json({
                    message: "User updated successfully",
                    post: updatedUser
                });
                }).catch(error => {
                    res.status(500).json({
                    message: "Something went wrong",
                    error: error
            });
            })
        }

        //delete user
        function destroy(req,res) {
            const id = req.params.id;
            models.user.destroy({where: {id: id}}).then(result => {
                res.status(200).json({
                    message: "User deleted successfully"
                });
            }).catch(error => {
                res.status(500).json({
                    message: "Something went wrong",
                    error: error
                });
            })
        }

        //sign up
        function login(req,res){
            
           

        }
                
    
module.exports = {
    save: save,
    show: show,
    index:index,
    update: update,
    destroy: destroy,
    login: login

}