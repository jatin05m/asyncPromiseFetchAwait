function makeRequest(location){
    return new Promise((resolve, reject)=>{
        console.log(`Making request to ${location}`)
        if(location === "Google"){
            resolve('Google says hi')
        }
        else{
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject)=>{
        console.log('processing request')
        resolve(`Extra information + ${response}`)
    })
}

// makeRequest('Google').then(response =>{
//     console.log('Response Recieved')
//     return processRequest(response)
// }).then(processedResponse=>{
//     console.log(processedResponse)
// }).catch( err =>{
//     console.log(err)
// })

// using await and async


async function doWork(){

    try{
    var response = await makeRequest('Google') // id await it not used then it will just return [object Promise]
    console.log('Response Recieved')

    var processedResponse = await processRequest(response)
    console.log(processedResponse)

    } catch (err){
        console.log(err)
    }


}

doWork();