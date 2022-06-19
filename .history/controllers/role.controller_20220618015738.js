const models = require('../models');


function save(req,res) {
    
        
                
            const role = {
                role_type: req.body.role_type,
                rights: req.body.rights,
                user_id: req.body.user_id
                
            }
         
            
            //to create an accusation
            models.role.create(role).then(result =>{
                res.status(201).json({
                    message: "Role assigned successfully",
                    post: result
                })  
            }).catch(error => {
                res.status(500).json({
                    message: "Something went wrong while assigning a role",
                    error: error
                });
            });
   
}

//to get a single accusation
function show(req,res) {
    const id = req.params.id;

    models.role.findByPk(id).then(result => {
        if(result) {
            res.status(200).json({
                message: "Role found successfully",
                post: result
            })
        }else{
            res.status(404).json({
                message: "Role not found with id " + id
            })
        }
       
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong while finding a role",
            error: error
        });
    })
}  
 

    //to get all Accusations
    function index(req,res) {
        models.role.findAll().then(result => {
            res.status(200).json({
                message: "Roles found successfully",
                post: result
            })
        }).catch(error => {
            res.status(500).json({
                message: "Something went wrong while finding all accusations",
                error: error
            });
        })
    }

    //to update a user
    function update(req,res) {
        const id = req.params.id;
        const updatedUser = {
            role_type: req.body.role_type,
            rights: req.body.rights,
            user_id: req.body.user_id
            }

            const role_id = req.params.id;

            models.role.update(updatedUser, {where: {id: id}}).then(result => {
                res.status(200).json({
                    message: "Role updated successfully",
                    post: updatedUser
                });
                }).catch(error => {
                    res.status(500).json({
                    message: "Something went wrong while updating a role",
                    error: error
            });
            })
        }

        //delete an accusation
        function destroy(req,res) {
            const id = req.params.id;
            models.role.destroy({where: {id: id}}).then(result => {
                res.status(200).json({
                    message: "Role deleted successfully"
                });
            }).catch(error => {
                res.status(500).json({
                    message: "Something went wrong while deleting a role",
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