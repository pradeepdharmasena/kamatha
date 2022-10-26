
const  signing = require( './DbCalls/Signing')

const express = require('express') 
const app = express()
const mysql = require("mysql")
const cores = require('cors')
const bcrypt = require('bcrypt')

app.use(cores());
app.use(express.json())


app.listen(3001 , ()=>{
    console.log('Server Runing on port 3001')
});

const config = {
    host:'localhost',
    user:'admin',
    password:'admin',
    database:'kamatha',
    timezone: 'utc'

}

const db = mysql.createConnection(config)

function todayDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today =yyyy + '-' +  mm + '-' + dd;
    return(today);

}

app.post('/signup', async (req, res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const contactNo = req.body.contactNo;
    const birthday = req.body.birthday;
    const disrict_id = req.body.district;
    const address = req.body.address;
    const gender_name = req.body.gender;
    const password = req.body.password;
    let hashedpw = "null"
    try{
        hashedpw = await bcrypt.hash(password, 10);
        console.log("encripted password" , hashedpw)
    }catch{
        res.send({status:"password encription failed", error:"true"})
    }
    var gender = "1";
    if(gender_name ==="Female" || gender_name ==="female"){
        gender = "2";
    }
    const today = todayDate();
    const quary2 = "CALL insert_users(?,?,?,?,?,?,?,?,?,?,?,?)"
    var values = values = [email,contactNo, hashedpw,"1", firstName, lastName, gender , "not added", disrict_id , address, birthday , today ]
    console.log(values)

    db.query(
        quary2,
        values,
        (err, results)=>{
            if(err){
                console.log("Error occured", err)
                res.send({isSucsess:false})
            }else{
                console.log("Values inserted")
                res.send({isSucsess:true})
            }
        }
    );

});



app.get("/signin", async (req, res)=>{

    const user = await signing(req.query.email, db)
    const bool = await bcrypt.compare(req.query.password,user.pw)

    if(bool === true){
        res.send({
            user_id:user.user_id,
            first_name:user.first_name
        })
    }else{
        res.send({
            user_id:0,
            first_name:"null"
        })
    }
})

app.get('/mysupplyorderslist',(req,res)=>{
    const quaryStrig = 'CALL supply_orders_list(?)'

    db.query(
        quaryStrig,
        req.query.user_id,
        (error, results)=>{
            console.log(results)
            res.send(results)
        }
    )
})


app.get('/cultivationlist',(req,res)=>{
    const quaryStrig = 'CALL cultivation_list(?)'

    db.query(
        quaryStrig,
        req.query.user_id,
        (error, results)=>{
            console.log(results)
            res.send(results)
        }
    )
})
app.get('/buyingorderslist',(req,res)=>{
    const quaryStrig = 'CALL buying_orders(?)'
    console.log("buying orders invocked",  req.query.supply_order_id)

    db.query(
        quaryStrig,
        req.query.supply_order_id,
        (error, results)=>{
            console.log(results)
            res.send(results)
        }
    )
})

app.get('/mybuyingorderslist',(req,res)=>{
    const quaryStrig = 'CALL buying_orders_list(?)'

    db.query(
        quaryStrig,
        req.query.user_id,
        (error, results)=>{
            console.log(results)
            res.send(results)
        }
    )
})

app.get('/allsupplyorders',(req,res)=>{
    const quaryStrig = 'CALL all_supply_orders_list(?)'

    db.query(
        quaryStrig,
        req.query.user_id,
        (error, results)=>{
            console.log(results)
            res.send(results)
        }
    )
})

app.get('/districts',(req,res)=>{
    const quaryStrig = 'SELECT * FROM disricts'

    db.query(
        quaryStrig,
        (error, results)=>{
            console.log(results)
            res.send(results)
        }
    )
})

app.get('/supplyordersstates',(req,res)=>{
    const quaryStrig = 'SELECT supply_order_state_id as state_id, supply_order_state FROM  supply_order_state;'

    db.query(
        quaryStrig,
        (error, results)=>{
            console.log(results)
            res.send(results)
        }
    )
})



app.get('/crops',(req,res)=>{
    const quaryStrig = 'SELECT crop_id, genaral_name FROM crops'

    db.query(
        quaryStrig,
        (error, results)=>{
            console.log(results)
            res.send(results)
        }
    )
})

app.get('/filtersupplyorders',(req,res)=>{
 
    const quary1 = 'CALL supply_filter_on_district(?,?)'
    const quary2 ='CALL supply_filter_on_crop(?,?)'
    const quary3 ='CALL supply_filter_on_district_and_crop(?,?,?)'

     if(req.query.crop_id ==="0" && req.query.district_id ==="0"){
        res.redirect('/allsupplyorders?user_id=' + req.query.user_id)
    }

    else if( req.query.district_id ==="0"){
        db.query(
            quary2,
            [req.query.crop_id, req.query.user_id],
            (error2, results) => {
                res.send(results)
            }
        )

    
    }else if(req.query.crop_id ==="0"){

        db.query(
            quary1,
           [req.query.district_id, req.query.user_id],
            (error2, results) => {
                res.send(results)
            }
        )
 
    }
    else{
        db.query(
            quary3,
            [req.query.crop_id,req.query.district_id, req.query.user_id],
            (error2, results) => {
                res.send(results)
            }
        )

      
    }


})


app.post('/aceptbuyingorder',(req, res)=>{
    const quary1 = "CALL accepting_buying_order(?,?);"

    console.log("supply_order_status=>>",req.body.supply_order_id)
    db.query(
        quary1,
        [req.body.supply_order_id, req.body.buying_order_id],
        (error, results)=>{
            console.log("results",  results[0])
    
        }
    )
})


app.post('/insertbuyingorder',(req, res)=>{
    const quary1 = "CALL insert_buying_orders(?,?,?,?);"
    const values = [req.body.user_id, req.body.supply_order_id, todayDate(), req.body.amount_kg];

    console.log("insertbuyingorder=>>",req.body.supply_order_id)
    console.log("values=>>",values)
    db.query(
        quary1,
        values,
        (error, results)=>{
            console.log("results",  results)
            res.send(results)
        }
    )
})

app.post('/insertsupplyorder',(req, res)=>{
    const quary1 = "CALL insert_supply_orders(?,?,?,?,?,?);"
    const order_added_on_date = todayDate();
    const thumbnail = 'default'
    console.log("values=>>",req.body.cultivation_id)
    const values = [req.body.cultivation_id , req.body.amount_kg , order_added_on_date ,req.body.unit_price , req.body.supply_on_date,thumbnail ];

    console.log("insert buyingorder=>>",req.body.cultivation_id)
    console.log("values=>>",values)
    db.query(
        quary1,
        values,
        (error, results)=>{
            console.log(" insertsupplyorder results",  results)
            res.send(results)
        }
    )
})

app.post('/insertcultivation',(req, res)=>{
    const quary1 = "CALL insert_cultivations(?,?,?,?,?,?,?,?);"
    const location_longi = "0";
    const location_lati = "0";
    let values = [];
    //[req.body.crop_id ,req.body.user_id , req.body.area_hectare , req.body.started_date ,  req.body.deadline ,location_longi ,location_lati];

    console.log("insert cultivation=>>",req.body.crop_id)
    console.log("values=>>",values)

    values = [req.body.crop_id ,req.body.user_id , req.body.area_hectare , req.body.started_date ,  req.body.deadline ,location_longi ,location_lati,  req.body.disrict_id],
                db.query(
                    quary1,
                    values,
                    (error, results)=>{
                        res.send(results)
                    }
                )

})

app.post('/editsupplyorder',(req, res)=>{
    const quary2 = "CALL update_supply_order(?,?,?)"
    console.log("edit supply data==>",req.body.supply_order_id,req.body.amount_kg ,req.body.supply_order_status_id)
    db.query(
        quary2,
        [req.body.supply_order_id,req.body.amount_kg ,req.body.supply_order_status_id],
        (error, results2)=>{
            console.log("results of edit supply order", results2)
            res.send(results2)
        }
    )
})
