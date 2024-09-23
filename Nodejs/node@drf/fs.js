let fs=require('fs')
// read a file
console.log(fs.readdirSync('./'))
try{
    const data=fs.readFileSync('./sample.txt' , 'utf-8');
    console.log(data)
}
catch(e){
    console.log(e);
}
// write a file
var content = "Full stack with MEAN course in Dr Reddys Foundation";
fs.writeFile('./text.txt',content,err=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("written")
    }
})