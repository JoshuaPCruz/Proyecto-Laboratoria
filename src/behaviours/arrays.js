const Methods = {
    listCreation: function (list,object) {
        if(list.length === 0 && object.name){
            list.push(object)
        }else{
            if(list.some((item)=>item.name == object.name)){
                list.map((item)=>{
                    item.name === object.name ? item.count += 1 : ''
                    item.price(item.name,item.count)
                })
            }else{
                console.log(object)
                object.name ? list.push(object) : ''
            }
        }
        return list       
    },
    removeItem: function (item, index) {
        item[index].count > 1 ? item[index].count-- : item.splice(index,1)
        return item
    },
    priceCalculation: function (name, count) {
        switch (name) {
            case "soda":
                return count*2
            default:
                break;
        }
    }
}

export default Methods