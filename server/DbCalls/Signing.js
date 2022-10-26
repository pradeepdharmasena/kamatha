 function signing(email,db) {
    return new Promise((resolve, reject)=>{
        const quaryStrig = "CALL user_verification(?)";
        let feedback = {
            user_id : 0,
            first_name:"null",
            pw:"null"
        }
        db.query(
            quaryStrig,
            email,
            (err, results)=>{
                if(err){
                    console.log("Error occured");
                    console.log("error", error);
                }else{
                    console.log("results===>", results[0][0]);
                    if(results[0][0] !== undefined){
                            feedback = {
                                user_id : results[0][0].user_id,
                                first_name:results[0][0].first_name,
                                pw:results[0][0].pw
                            } 
                        console.log("inside if",feedback)
                            resolve(feedback)

                        
                    }else{
                        console.log("inside else",feedback)
                        resolve(feedback)
                    }     
                }
            }
        );
    });
}

module.exports = signing;

