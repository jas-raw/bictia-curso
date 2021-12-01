const send_email = require("../../frameworks_and_drivers/helpers/mail")

function evaluate_credit(info){
    const { status, time, ing, email } = info
    let success = false, message = 'Usted no es apto para prestamo'
    switch(status.toLowerCase()){
        case 'empleado':
            if(time >=1){
                const points = Math.random() *1000
                if(points > 550){
                    const sol = (points*ing)/80
                    message = String(parseInt(sol))
                    success = true
                }
            }
            break;
        case 'independiente':
            if(time > 3){
                const points = Math.random() *1000
                if(points > 600){
                    const sol = (points*ing)/100
                    message = String(sol)
                    success = true
                }
            }
            break;
        case 'desempleado':
            break;
        default:
            break;
    }
    Promise.resolve(send_email(email, message))
    return {
        success, message
    }
}

module.exports = evaluate_credit