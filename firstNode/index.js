const http=require("http")
const fs=require("fs");
const server=http.createServer({request,response}=>{
    fs.readFile("sample.txt",(err.data)=>{
        response.end(data)
    })
})
server.listen(3000);