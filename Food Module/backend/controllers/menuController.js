const DailyMenu = require('../models/dailyMenu')

const showMenu = (req,res) =>{
    DailyMenu.findOne({}).then((data)=> res.send(data));
}

const updateMenu = async (req,res) =>{
    const menu = req.body;

    for(let i = 0; i < menu.breakfast.length; i++){
        menu.breakfast[i] = [menu.breakfast[i],0]
    }
    for(let i = 0; i < menu.lunch.length; i++){
        menu.lunch[i] = [menu.lunch[i],0]
    }
    for(let i = 0; i < menu.snacks.length; i++){
        menu.snacks[i] = [menu.snacks[i],0]
    }
    for(let i = 0; i < menu.dinner.length; i++){
        menu.dinner[i] = [menu.dinner[i],0]
    }


    const updatedMenu = DailyMenu(menu)

    await DailyMenu.deleteMany({})


    await updatedMenu.save((err)=>{
        if(err){
            res.status(err.code).send(err.message);
        }
        else{
            res.status(200).send(`Menu Saved successfully`)
        }
    })

}

const addOrder = async(req,res) => {
    const food = req.body;


    await DailyMenu.findOne({}, async(err,menu)=>{

        for(let i = 0; i < menu.breakfast.length; i++){
            if (food.food === menu.breakfast[i][0]){
                var tempList =  menu.breakfast;
                tempList[i][1] += 1
           
                menu.breakfast = tempList;

                await DailyMenu.updateOne({},menu).then(() => {
                    res.send("Item updated successfully")
                })

                return 
            }
        }

        for(let i = 0; i < menu.lunch.length; i++){
            if (food.food === menu.lunch[i][0]){
                var tempList =  menu.lunch;
                tempList[i][1] += 1
           
                menu.lunch = tempList;

                await DailyMenu.updateOne({},menu).then(() => {
                    res.send("Item updated successfully")
                })

                return 
            }
        }

        for(let i = 0; i < menu.snacks.length; i++){
            if (food.food === menu.snacks[i][0]){
                var tempList =  menu.snacks;
                tempList[i][1] += 1
           
                menu.snacks = tempList;

                await DailyMenu.updateOne({},menu).then(() => {
                    res.send("Item updated successfully")
                })

                return 
            }
        }

        for(let i = 0; i < menu.dinner.length; i++){
            if (food.food === menu.dinner[i][0]){
                var tempList =  menu.dinner;
                tempList[i][1] += 1
           
                menu.dinner = tempList;

                await DailyMenu.updateOne({},menu).then(() => {
                    res.send("Item updated successfully")
                })

                return 
            }
        }

    });

}

const removeOrder = async(req,res) => {
    const food = req.body;


    await DailyMenu.findOne({}, async(err,menu)=>{

        for(let i = 0; i < menu.breakfast.length; i++){
            if (food.food === menu.breakfast[i][0]){
                var tempList =  menu.breakfast;
                tempList[i][1] -= 1
           
                menu.breakfast = tempList;

                await DailyMenu.updateOne({},menu).then(() => {
                    res.send("Item updated successfully")
                })

                return 
            }
        }

        for(let i = 0; i < menu.lunch.length; i++){
            if (food.food === menu.lunch[i][0]){
                var tempList =  menu.lunch;
                tempList[i][1] -= 1
           
                menu.lunch = tempList;

                await DailyMenu.updateOne({},menu).then(() => {
                    res.send("Item updated successfully")
                })

                return 
            }
        }

        for(let i = 0; i < menu.snacks.length; i++){
            if (food.food === menu.snacks[i][0]){
                var tempList =  menu.snacks;
                tempList[i][1] -= 1
           
                menu.snacks = tempList;

                await DailyMenu.updateOne({},menu).then(() => {
                    res.send("Item updated successfully")
                })

                return 
            }
        }

        for(let i = 0; i < menu.dinner.length; i++){
            if (food.food === menu.dinner[i][0]){
                var tempList =  menu.dinner;
                tempList[i][1] -= 1
           
                menu.dinner = tempList;

                await DailyMenu.updateOne({},menu).then(() => {
                    res.send("Item updated successfully")
                })

                return 
            }
        }
        
    });

}


module.exports.showMenu = showMenu;

module.exports.updateMenu = updateMenu;

module.exports.addOrder = addOrder;

module.exports.removeOrder = removeOrder;