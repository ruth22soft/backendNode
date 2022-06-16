const models = require('../models');

function save(req,res) {
    console.log(req.body);
    const user = {
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
    
    models.user.create(user).then(result =>{
        res.status(201).json({
            message: "User created successfully",
            post: result
        })  
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    })
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
                
    
module.exports = {
    save: save,
    show: show,
    index:index,
    update: update,
    destroy: destroy

}