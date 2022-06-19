const models = require('../models');


function save(req,res) {
    
        
                
            const notification = {

                notification_title: req.body.notification_title,
                notification_type: req.body.notification_type,
                content: req.body.content,
                source: req.body.source,
                admin_id: req.body.admin_id,
                user_id: req.body.user_id
                
            }
         
            
            //to create an announcement
            models.announcement.create(announcement).then(result =>{
                res.status(201).json({
                    message: "Announce created successfully",
                    post: result
                })  
            }).catch(error => {
                res.status(500).json({
                    message: "Something went wrong while creating an announcement",
                    error: error
                });
            });
   
}

//to get a single announcement
function show(req,res) {
    const id = req.params.id;

    models.announcement.findByPk(id).then(result => {
        if(result) {
            res.status(200).json({
                message: "announcement found successfully",
                post: result
            })
        }else{
            res.status(404).json({
                message: "announcement not found with id " + id
            })
        }
       
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong while finding an announcement",
            error: error
        });
    })
}  
 

    //to get all Accusations
    function index(req,res) {
        models.announcement.findAll().then(result => {
            res.status(200).json({
                message: "Announcements found successfully",
                post: result
            })
        }).catch(error => {
            res.status(500).json({
                message: "Something went wrong while finding all announcements",
                error: error
            });
        })
    }

    //to update an announcement
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

            models.announcement.update(updatedUser, {where: {id: id}}).then(result => {
                res.status(200).json({
                    message: "Announcement updated successfully",
                    post: updatedUser
                });
                }).catch(error => {
                    res.status(500).json({
                    message: "Something went wrong while updating an announcement",
                    error: error
            });
            })
        }

        //delete an announcement
        function destroy(req,res) {
            const id = req.params.id;
            models.announcement.destroy({where: {id: id}}).then(result => {
                res.status(200).json({
                    message: "announcement deleted successfully"
                });
            }).catch(error => {
                res.status(500).json({
                    message: "Something went wrong while deleting an announcement",
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