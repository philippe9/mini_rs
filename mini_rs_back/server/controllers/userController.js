import { CODES, response, STATUS } from '../global/vars';
import User from '../models/user';
const md5 = require('md5');

const UserController = {};

UserController.postLogin = (req, res) => {
    var user = req.body;

    user.password_user = md5(user.password_user);
    User.loginUser(user).then((user) => {
        response.body = user;
        res.status(200).json(response);
    }).catch((error) => {
        response.body = error;
        response.code = 101;
        response.message = CODES[101];
        response.status = STATUS.FAILED;
        res.status(200).json(response);
    })
}
UserController.postUpdate = (req, res) => {

    if (!req.files) {
        response.body = error;
        response.code = 101;
        response.message = "No files uploaded";
        response.status = STATUS.FAILED;
        res.status(200).json(response);
    } else {
        var avatar = {};
        avatar.id_utilisateur = req.body.id_utilisateur;

        if (req.files.profil_utilisateur) {
            req.files.profil_utilisateur.mv('./uploads/' + req.files.profil_utilisateur.name);
            avatar.profil_utilisateur = req.files.profil_utilisateur.name;
        }
        if (req.files.couverture_utilisateur) {
            req.files.couverture_utilisateur.mv('./uploads/' + req.files.couverture_utilisateur.name);
            avatar.couverture_utilisateur = req.files.couverture_utilisateur.name;
        }

        User.updateUser(avatar).then((user) => {
            response.body = user;
            res.status(200).json(response);
        }).catch((error) => {
            response.body = error;
            response.code = 101;
            response.message = CODES[101];
            response.status = STATUS.FAILED;
            res.status(200).json(response);
        })
    }
}

export default UserController;