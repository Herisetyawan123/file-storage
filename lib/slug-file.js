function slugFile(originalname){
    let convert = '';
    for(const item of originalname){
        if(item == ' '){
            convert += '-'
        }else{
            convert += item
        }

    }
    const dateNow = new Date();
    return Date.parse(dateNow)+'-'+convert.toLocaleLowerCase()
}

module.exports = slugFile