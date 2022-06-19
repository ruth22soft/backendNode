const models = require('../models');


function save(req,res) {
    
        
                
            const accusation = {
                accusation_title: req.body.accusation_title,
                accusation_type: req.body.accusation_type,
                accusation_detail: req.body.accusation_detail,
                accusation_file: req.body.accusation_file,
                accusor: req.body.accusor,//accusors are always employees(it is better to use either full name or id) and it is a foreign key from employee names
                accused: req.body.accused,//accused can be students or employees and it is a foreign  key from student and employee names
                witness1: req.body.witness1,
                witness2: req.body.witness2,
                witness3: req.body.witness3,
                verifiedBy: req.body.verifiedBy,///this need to have the default value of the logged in admin
                date: req.body.date
                
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

            accusation_title: req.body.accusation_title,
                accusation_type: req.body.accusation_type,
                accusation_detail: req.body.accusation_detail,
                accusation_file: req.body.accusation_file,
                accusor: req.body.accusor,//accusors are always employees(it is better to use either full name or id) and it is a foreign key from employee names
                accused: req.body.accused,//accused can be students or employees and it is a foreign  key from student and employee names
                witness1: req.body.witness1,
                witness2: req.body.witness2,
                witness3: req.body.witness3,
                verifiedBy: req.body.verifiedBy,///this need to have the default value of the logged in admin
                date: req.body.date
              
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