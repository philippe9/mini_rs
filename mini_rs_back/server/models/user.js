import knex from '../db_config';
import { TABLES } from '../global/vars';

const User = {};

User.loginUser = (data) => {
    return knex.select().from('utilisateur').where(data).then((user, err) => {

        return new Promise(function(resolve, reject) {
            if (user.length > 0) {
                resolve(user[0]);
            } else {
                resolve({});
            }
            reject(err);
        })
    }).catch((error) => {
        return error;
    })

}
User.updateUser = (data) => {
    return knex('utilisateur').where({ id_utilisateur: data.id_utilisateur }).update(data).then((user, err) => {
        return knex.select().from('utilisateur').where({ id_utilisateur: data.id_utilisateur }).then((user, err) => {
            return new Promise(function(resolve, reject) {
                resolve(user);
                reject(err);
            })
        }).catch((error) => {
            return error;
        })

    }).catch((error) => {
        return error;
    })

}

export default User;