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
    },
    removeItem: function (item, index) {
        item[index].count > 1 ? item[index].count-- : item.splice(index,1)
        return item
    }
}

export default Methods