const CONST = {
    BREAKFAST: [
        {name: "Cafe americano", count:1, complexity: 'no', extras:[], price:5},
        {name: "Cafe con leche", count:1 ,complexity: 'no', extras:[], price:7},
        {name: "Sandwich de jamon y queso", count:1, complexity: 'no', extras:[], price:10},
        {name: "Jugo natural", count:1, complexity: 'no', extras:[], price:7}
    ],
    MEAL: [
        {name: "hamburguesa", count:1, complexity: 'yes', extras:[[{name:'simple', price:10},{name:'doble', price:15}], [{name:'papas fritas',price:5},{name:'onion rings', price:5}], [{name:'queso', price:1},{name:'huevo', price:1}]], price:5},
        {name: "agua", count:1, complexity: 'yes',extras:[[{name: '500ml', price:5},{name: '750ml', price:8}]], price:0},
        {name: "gaseosa", count:1, complexity: 'yes', extras:[[{name: '500ml', price:7},{name: '750ml', price:10}]], price:0},
    ]
}

export default CONST