const models = require('../models');

function save(req, res) {
  const notification = {
    notification_title: req.body.notification_title,
    notification_type: req.body.notification_type,
    content: req.body.content,
    source: req.body.source,
    admin_id: req.body.admin_id,
    user_id: req.body.user_id,
  };

  //to create a notification
  models.notification
    .create(notification)
    .then((result) => {
      res.status(201).json({
        message: 'notification created successfully',
        post: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong while creating a notification',
        error: error,
      });
    });
}

//to get a single announcement
function show(req, res) {
  const id = req.params.id;

  models.notification
    .findByPk(id)
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: 'notification found successfully',
          post: result,
        });
      } else {
        res.status(404).json({
          message: 'notification not found with id ' + id,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong while finding a notification',
        error: error,
      });
    });
}

//to get all notifications
function index(req, res) {
  models.notification
    .findAll()
    .then((result) => {
      res.status(200).json({
        message: 'Announcements found successfully',
        post: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong while finding all notifications',
        error: error,
      });
    });
}

//to update an announcement
function update(req, res) {
  const id = req.params.id;
  const updatedUser = {
    notification_title: req.body.notification_title,
    notification_type: req.body.notification_type,
    content: req.body.content,
    source: req.body.source,
    admin_id: req.body.admin_id,
    user_id: req.body.user_id,
  };

  const notification_id = req.params.id;

  models.notification
    .update(updatedUser, { where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: 'Announcement updated successfully',
        post: updatedUser,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong while updating an announcement',
        error: error,
      });
    });
}

//delete an announcement
function destroy(req, res) {
  const id = req.params.id;
  models.notification
    .destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: 'announcement deleted successfully',
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong while deleting an announcement',
        error: error,
      });
    });
}
module.exports = {
  save: save,
  show: show,
  index: index,
  update: update,
  destroy: destroy,
};
