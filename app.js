const express = require('express');
const request = require( 'request')
const res = require('express/lib/response');
const bodyParser = require('body-parser');

const app = express();
app.use (bodyParser.json())

// app.get('/' (req,res) -> {
//     res.send("you're home ! welcome :)")
// })

//routes
app.get('/', (req, res) =>{
res.send( "Hello World")
})

app.get( '/access_token',(req,res)=> {
    //access token
    let url = " https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
    let auth = new Buffer("Azs2KejU1ARvIL5JdJsARbV2gDrWmpOB:hipGvFJbOxri330c").toString('base64');
    request(
        {
            url:url,
            headers:{
                " Authorisation": "Basic" + auth
            }
        },
        (error, response, body)=>{
            if(error){ 
                console.log(error)
            }
            else{
                res.json (JSON.parse(body))
            }
        }
    )
})

// listen
// app.listen(8000);

app.listen(80,(err, live) =>{ 
    if(err){
        console.error(err)
    }
    console.log("server running on port 80")
     });