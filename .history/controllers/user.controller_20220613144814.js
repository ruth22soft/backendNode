const models = require('../models');

function save(req,res) {
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
    
    models.Post.create(user).then(result =>{
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

module.exports = {
    save: save
}