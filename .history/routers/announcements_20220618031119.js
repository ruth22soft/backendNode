const models = require('../models');


function save(req,res) {
    
        
                
            const announcement = {

                announcement_type: req.body.announcement_type,
                detail: req.body.detail,
                file: req.body.file,
                date: req.body.date,
                approved: req.body.approved,
                admin_id: req.body.admin_id
                
            }
         
            
            //to create an accusation
            models.accusation.create(accusation).then(result =>{
                res.status(201).json({
                    message: "Accusation created successfully",
                    post: result
                })  
            }).catch(error => {
                res.status(500).json({
                    message: "Something went wrong while creating an accusation",
                    error: error
                });
            });
   
}

//to get a single accusation
function show(req,res) {
    const id = req.params.id;

    models.accusation.findByPk(id).then(result => {
        if(result) {
            res.status(200).json({
                message: "Accusation found successfully",
                post: result
            })
        }else{
            res.status(404).json({
                message: "Accusation not found with id " + id
            })
        }
       
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong while finding an accusation",
            error: error
        });
    })
}  
 

    //to get all Accusations
    function index(req,res) {
        models.accusation.findAll().then(result => {
            res.status(200).json({
                message: "Accusations found successfully",
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

            announcement_type: req.body.announcement_type,
            detail: req.body.detail,
            file: req.body.file,
            date: req.body.date,
            approved: req.body.approved,
            admin_id: req.body.admin_id
              
            }

            const accusation_id = req.params.id;

            models.accusation.update(updatedUser, {where: {id: id}}).then(result => {
                res.status(200).json({
                    message: "Accusation updated successfully",
                    post: updatedUser
                });
                }).catch(error => {
                    res.status(500).json({
                    message: "Something went wrong while updating an accusation",
                    error: error
            });
            })
        }

        //delete an accusation
        function destroy(req,res) {
            const id = req.params.id;
            models.accusation.destroy({where: {id: id}}).then(result => {
                res.status(200).json({
                    message: "Accusation deleted successfully"
                });
            }).catch(error => {
                res.status(500).json({
                    message: "Something went wrong while deleting an accusation",
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