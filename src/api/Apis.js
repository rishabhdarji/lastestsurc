
const MainURL='http://surc.online/api/';
const headers = { 'Content-Type': 'application/json' }




export const fetchPost = (endpoint,data) =>{
    fetch(MainURL+endpoint,
    {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
    .then((result)=>{
        result.json()
        .then((resp)=>{
            return resp;
        }).catch((e)=>{
            return e;
        })

    })

}
export const fetchGet = (endpoint) =>{
    fetch(MainURL+endpoint)
    .then((result)=>{
        result.json()
        .then((resp)=>{
            console.log("***********",resp)
            return resp;
        }).catch((e)=>{
            return e;
        })
    });
}