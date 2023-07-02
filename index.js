const fs=require('fs');
const path=require('path');

const replaceto="text";
const replacewith="akshat";
const preview=false;
const folder=path.resolve();


try{
    const data=fs.readdir(folder,(err,data)=>{
       for(let i=0;i<data.length;i++){
        const item=data[i];
        let oldfile=path.join(folder,item);
        let newfile=path.join(folder,item.replaceAll(replaceto,replacewith));
        if(!preview){
            fs.rename(oldfile,newfile,()=>{
                console.log("rename successfull");
            })

        }
        else{
            if("data/"+item!==newfile)console.log("data/"+item+"will be renamed to  "+newfile)
        }
       }
    })
    

}catch(err){
    console.error(err);
}

