import CONST from "./constants";

function priceCalculation(name, count) {
    let res=[];
    for (const key in CONST) {
        res.push(CONST[key].filter((value)=>{
            return value.name === name 
        }))
    }
    
    return res[0][0].price*count
}


function Recipe(name, count, extras) {
    this.name = name
    this.count = count
    this.extras = extras
    this.res = (name = this.name, lastName = this.count)=>{
        return ({
            name: name,
            count: lastName,
            price: this.price(),
            extras: this.extras
        })
    }
    this.price = (name = this.name, counter = this.count, extras = this.extras)=>(
        priceCalculation(name, counter)
    )
}



const Methods = {
    factory: function(name){
        switch (name) {
            case 'hamburguesa':
                return new Recipe('hamburguesa',1)
            case 'agua':
                return new Recipe('agua',1)
            case 'gaseosa':
                return new Recipe('gaseosa',1)
            case 'Cafe americano':
                return new Recipe('Cafe americano',1)
            case 'Cafe con leche':
                return new Recipe('Cafe con leche',1)
            case 'Sandwich de jamon y queso':
                return new Recipe('Sandwich de jamon y queso',1)
            case 'Jugo natural':
                return new Recipe('Jugo natural',1) 
            default:
                return 0
        }
    },
    listCreation: function (list,object) {
        if(list.length === 0 && !object){
            list.push(object)
        }else{
            if(list.some((item)=>item.name == object.name)){
                
                list.map((item)=>{
                    item.name === object.name ? item.count = item.count+1 : ''
                    item.price(item.name,item.count)
                })
            }else{
                object ? list.push(object) : ''
            }
        }
        return list       
    },
    removeItem: function (item, index) {
        item[index].count > 1 ? item[index].count-- : item.splice(index,1)
        return item
    },
    addItem: function (item, index) {
        item[index].count = item[index].count+1
        return item
    }
}

export default Methods