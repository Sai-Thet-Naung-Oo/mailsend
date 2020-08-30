const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendingemail=(name,email)=>{

    sgMail.send({
        to: email,
        from: 'pyupyu140@gmail.com',
        subject: 'This is my first creation!',
       html:`<h1>hello ${name} Welcome to app</h1>`
    })

}


module.exports={sendingemail}

