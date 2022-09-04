const validator = require('./../../helpers/validate.js')

async function validateUpdateData(req, res, next){

    const rules = {
        "contactId": "string",
        "name": "string|only_alpha",
        "address": "string",
        "shortName": "string",
        "status": "string",
        "contract_no": "only_nums",
        "issue_date": "date",
        "type": "string"
    };

    await validator(req.body, rules, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'update failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))

}

async function validateCreateData(req, res, next){

    const rules = {
        "lastname": "string|only_alpha|required",
        "firstname": "string|only_alpha|required",
        "patronymic": "string|only_alpha|required",
        "phone": "string|phone_format|required",
        "email": "string|email|required",
    };

    await validator(req.body, rules, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'create failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))

}

module.exports = {
    validateUpdateData,
    validateCreateData
};