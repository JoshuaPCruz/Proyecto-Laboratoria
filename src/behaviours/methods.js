import CONST from "./constants";

function priceCalculation(name, count, extraPrice,price) {
    let res=[];
    for (const key in CONST) {
        res.push(CONST[key].filter((value)=>{
            return value.name === name 
        }))
    }
    res = res.filter((value)=>(value.length > 0))

    return res[0] !== undefined ? (res[0][0].price+extraPrice)*count : (price+extraPrice)*count
}


function Recipe(param) {
    this.name = param.name
    this.count = param.count
    this.complexity = param.complexity
    this.extras = param.extras
    this.extraPrice = 0
    this.res = (name = this.name, lastName = this.count)=>{
        return ({
            name: name,
            count: lastName,
            complexity: this.complexity,
            price: this.price(),
            extras: this.extras
        })
    }
    this.price = (name = this.name, counter = this.count, extraPrice = this.extraPrice)=>(
        priceCalculation(name, counter, extraPrice, param.priceBase)
    )
}



const Methods = {
    factory: function(name){
        switch (name) {
            case 'hamburguesa':
                return new Recipe(CONST.MEAL[0])
            case 'agua':
                return new Recipe(CONST.MEAL[1])
            case 'gaseosa':
                return new Recipe(CONST.MEAL[2])
            case 'Cafe americano':
                return new Recipe(CONST.BREAKFAST[0])
            case 'Cafe con leche':
                return new Recipe(CONST.BREAKFAST[1])
            case 'Sandwich de jamon y queso':
                return new Recipe(CONST.BREAKFAST[2])
            case 'Jugo natural':
                return new Recipe(CONST.BREAKFAST[3]) 
            default:
                return new Recipe(name)
                break
        }
    },
    listCreation: function (list,object) {
        if(list.length === 0 && object){
            list.push(object)
        }else{
            if(list.some((item)=>(item.name == object.name)))
            {
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

function deepEqual(object1, object2) {
    if(object1 === undefined) return 0
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = isObject(val1) && isObject(val2);
      if (
        areObjects && !deepEqual(val1, val2) ||
        !areObjects && val1 !== val2
      ) {
        return false;
      }
    }
  
    return true;
  }
  
  function isObject(object) {
    return object != null && typeof object === 'object';
  }

export default Methods