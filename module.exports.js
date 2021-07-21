const mymodule=require('./mymodule')
const directory=process.argv[2]
const ext=process.argv[3]

mymodule(directory,ext,(err,filterlist)=>{
    if(err) console.log(err);
    filterlist.forEach(element => {
        console.log(element)
        
    });
})