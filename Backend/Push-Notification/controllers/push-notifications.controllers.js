const { ONE_SIGNAL_CONFIG } = require("../config/app.config");
const pushNotoficationService = require("../services/push-notification.services");

exports.SendNotification = (req, res, next) => {
    var message = {
        app_id:ONE_SIGNAL_CONFIG.APP_ID,
        contents: { "en": "Test Push Notification@Natitedros"},
        included_segments: ["All"],
        content_available: true,
        small_icon: "ic_notification_icon",
        data: {
            PushTitle: "CUSTOM NOTIFICATION",
        }
    };
    pushNotoficationService.SendNotification(message, (error, results)=>{
        if(error) {
            return next(error);
        }
        return res.status(200).send({
            message: "Success",
            data: results,
        })
    })
}