const models = require('../models');


function save(req,res) {
    
        
                
            const record = {

                record_name: req.body.record_name,
                record_type: req.body.record_type,
                record_duration: req.body.record_duration,
                date: req.body.date,
                user_id: req.body.user_id

                
                
            }
         
            
            //to create a record
            models.record.create(record).then(result =>{
                res.status(201).json({
                    message: "Record created successfully",
                    post: result
                })  
            }).catch(error => {
                res.status(500).json({
                    message: "Something went wrong while creating a record",
                    error: error
                });
            });
   
}

//to get a single record
function show(req,res) {
    const id = req.params.id;

    models.record.findByPk(id).then(result => {
        if(result) {
            res.status(200).json({
                message: "Record found successfully",
                post: result
            })
        }else{
            res.status(404).json({
                message: "Record not found with id " + id
            })
        }
       
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong while finding a record",
            error: error
        });
    })
}  
 

    //to get all Records
    function index(req,res) {
        models.record.findAll().then(result => {
            res.status(200).json({
                message: "Record found successfully",
                post: result
            })
        }).catch(error => {
            res.status(500).json({
                message: "Something went wrong while finding all records",
                error: error
            });
        })
    }

    //to update a Schedule
    function update(req,res) {
        const id = req.params.id;
        const updatedUser = {

            record_name: req.body.record_name,
                record_type: req.body.record_type,
                record_duration: req.body.record_duration,
                date: req.body.date,
                user_id: req.body.user_id
              
            }

            const record_id = req.params.id;

            models.record.update(updatedUser, {where: {id: id}}).then(result => {
                res.status(200).json({
                    message: "Record updated successfully",
                    post: updatedUser
                });
                }).catch(error => {
                    res.status(500).json({
                    message: "Something went wrong while updating a record",
                    error: error
            });
            })
        }

        //delete a schedule
        function destroy(req,res) {
            const id = req.params.id;
            models.record.destroy({where: {id: id}}).then(result => {
                res.status(200).json({
                    message: "Record deleted successfully"
                });
            }).catch(error => {
                res.status(500).json({
                    message: "Something went wrong while deleting a record",
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