const ip=(msg)=>{
    return new Promise((resolve,reject)=>{
        rl.question(`\n ${msg}:`,(ch)=>{
            resolve(ch)
        })
    })
}