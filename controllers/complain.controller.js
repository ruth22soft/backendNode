const models = require('../models');


function save(req,res) {
    
        
                
            const complain = {
                
                complain_title: req.body.complain_title,
                description: req.body.description,
                admin_id: req.body.admin_id,
                user_id: req.body.user_id
                
            }
         
            
            //to create a complaint
            models.complain.create(complain).then(result =>{
                res.status(201).json({
                    message: "Complaint created successfully",
                    post: result
                })  
            }).catch(error => {
                res.status(500).json({
                    message: "Something went wrong while creating a complain",
                    error: error
                });
            });
   
}

//to get a single complaint
function show(req,res) {
    const id = req.params.id;

    models.complain.findByPk(id).then(result => {
        if(result) {
            res.status(200).json({
                message: "Complaint found successfully",
                post: result
            })
        }else{
            res.status(404).json({
                message: "Complaint not found with id " + id
            })
        }
       
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong while finding a complain",
            error: error
        });
    })
}  
 

    //to get all Complaints
    function index(req,res) {
        models.complain.findAll().then(result => {
            res.status(200).json({
                message: "Complaints found successfully",
                post: result
            })
        }).catch(error => {
            res.status(500).json({
                message: "Something went wrong while finding all complaints",
                error: error
            });
        })
    }

    //to update a complaint
    function update(req,res) {
        const id = req.params.id;
        const updatedUser = {

            complain_title: req.body.complain_title,
            description: req.body.description,
            admin_id: req.body.admin_id,
            user_id: req.body.user_id
              
            }

            const complain_id = req.params.id;

            models.complain.update(updatedUser, {where: {id: id}}).then(result => {
                res.status(200).json({
                    message: "Complaint updated successfully",
                    post: updatedUser
                });
                }).catch(error => {
                    res.status(500).json({
                    message: "Something went wrong while updating a complaint",
                    error: error
            });
            })
        }

        //delete a complaint
        function destroy(req,res) {
            const id = req.params.id;
            models.complain.destroy({where: {id: id}}).then(result => {
                res.status(200).json({
                    message: "Complaint deleted successfully"
                });
            }).catch(error => {
                res.status(500).json({
                    message: "Something went wrong while deleting a complain",
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