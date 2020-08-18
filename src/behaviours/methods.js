import CONST from "./constants";


/**
 * Function to determine the price of a single item, checks if its an item without extras an with extras
 * @param {String} name - Name of the item
 * @param {Number} count - Cuantity of items
 * @param {Number} extraPrice - Extra price for extras
 * @param {Number} price - Price of the item
 */
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

/**
 * Function that serves as main Class for object generation in the factory
 * @param {Object} param - Object with the values for the properties
 * @property {String} name - Name of the item
 * @property {Number} count - Cuantity of the item
 * @property {String} complexity - Determines if it has extras or not
 * @property {Array} extras - Types of extras that the item has
 * @property {Number} extraPrice - How much does the price elevates with the extras
 * @property {Function} price - Calculates the price after the call of priceCalculation()
 * @property {Function} res - Returns an Object with all the properties needed
 */
function Recipe(param) {
    this.name = param.name
    this.count = param.count
    this.complexity = param.complexity
    this.extras = param.extras
    this.extraPrice = 0
    this.price = (name = this.name, counter = this.count, extraPrice = this.extraPrice)=>(
        priceCalculation(name, counter, extraPrice, param.priceBase)
    )
    this.res = (name = this.name, count = this.count)=>{
        return ({
            name: name,
            count: count,
            complexity: this.complexity,
            price: this.price(),
            extras: this.extras
        })
    }
    
}


/**
 * This object contains the methods used in the generation of items an their interpretation
 */
const Methods = {
    /**
     * This is the factory of items, it uses the constants to determine wich recipe it will take
     * @param {String} name - The name of the Recipe
     */
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
    /**
     * This function creates the whole list of items in the order
     * @param {Array} list - The previus generated list
     * @param {Object} object - The new item that will be added to the list
     */
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
    /**
     * This function removes one element from the Resume 
     * @param {Array} item - Array containing all the order
     * @param {Number} index - Index of the element that will change
     */
    removeItem: function (item, index) {
        item[index].count > 1 ? item[index].count-- : item.splice(index,1)
        return item
    },
    /**
     * This function adds one element to the Resume
     * @param {Array} item - Array containing all the order
     * @param {Number} index - Index of the element that will change
     */
    addItem: function (item, index) {
        item[index].count = item[index].count+1
        return item
    }
}


export default Methods