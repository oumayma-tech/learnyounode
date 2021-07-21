const fs=require('fs')
const path=require('path')

module.exports = function (dir,ext,callback){
ext=`.${ext}`;
fs.readdir(dir,function(err,list){
    if(err) return callback(err);
    const filter=list.filter(function(el){
        return path.extname(el)===ext
    }
        )
        return callback(null,filter);
}
)
}