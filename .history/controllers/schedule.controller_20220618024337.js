const models = require('../models');


function save(req,res) {
    
        
                
            const hearingSchedule = {

                hearing_type: req.body.hearing_type,
                date: req.body.date,
                starting: req.body.starting,
                duration: req.body.duration,
                description: req.body.description,
                file: req.body.file,
                admin_id: req.body.admin_id,
                accusation_id: req.body.accusation_id
                
            }
         
            
            //to create a schedule
            models.hearingSchedule.create(hearingSchedule).then(result =>{
                res.status(201).json({
                    message: "Schedule created successfully",
                    post: result
                })  
            }).catch(error => {
                res.status(500).json({
                    message: "Something went wrong while creating a schedule",
                    error: error
                });
            });
   
}

//to get a single schedule
function show(req,res) {
    const id = req.params.id;

    models.hearingSchedule.findByPk(id).then(result => {
        if(result) {
            res.status(200).json({
                message: "Schedule found successfully",
                post: result
            })
        }else{
            res.status(404).json({
                message: "Schedule not found with id " + id
            })
        }
       
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong while finding a schedule",
            error: error
        });
    })
}  
 

    //to get all Schedules
    function index(req,res) {
        models.hearingSchedule.findAll().then(result => {
            res.status(200).json({
                message: "Schedule found successfully",
                post: result
            })
        }).catch(error => {
            res.status(500).json({
                message: "Something went wrong while finding all Schedules",
                error: error
            });
        })
    }

    //to update a Schedule
    function update(req,res) {
        const id = req.params.id;
        const updatedUser = {

            hearing_type: req.body.hearing_type,
            date: req.body.date,
            starting: req.body.starting,
            duration: req.body.duration,
            description: req.body.description,
            file: req.body.file,
            admin_id: req.body.admin_id,
            accusation_id: req.body.accusation_id
              
            }

            const hearingSchedule_id = req.params.id;

            models.hearingSchedule.update(updatedUser, {where: {id: id}}).then(result => {
                res.status(200).json({
                    message: "Schedule updated successfully",
                    post: updatedUser
                });
                }).catch(error => {
                    res.status(500).json({
                    message: "Something went wrong while updating a schedule",
                    error: error
            });
            })
        }

        //delete a schedule
        function destroy(req,res) {
            const id = req.params.id;
            models.hearingSchedule.destroy({where: {id: id}}).then(result => {
                res.status(200).json({
                    message: "Schedule deleted successfully"
                });
            }).catch(error => {
                res.status(500).json({
                    message: "Something went wrong while deleting a schedule",
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