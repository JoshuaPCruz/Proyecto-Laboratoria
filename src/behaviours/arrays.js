const Methods = {
    listCreation: function (list,object) {
        if(list.length === 0){
            list.push(object)
        }else{
            if(list.some((item)=>item.name == object.name)){
                list.map((item)=>{
                    item.name === object.name ? item.count += 1 : ''
                })
            }else{
                list.push(object)
            }
        }
        return list       
    }
}

export default Methods