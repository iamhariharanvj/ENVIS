const DailyMenu = require('../db/db')

const showMenu = (req,res) =>{
    res.send("WORKING");
}

const updateMenu = (req,res) =>{
    const menu = req.body

    const updatedMenu = new DailyMenu(menu)

    DailyMenu.deleteMany({}, (err)=>{
        if(err){
            res.status(err.code).send(err.message);
        }
        else{
            res.status(200).send(`Menu Cleared successfully`)
        }
    })

    updatedMenu.save((err)=>{
        if(err){
            res.status(err.code).send(err.message);
        }
        else{
            res.status(200).send(`Menu Saved successfully`)
        }
    })




}

module.exports.showMenu = showMenu;

module.exports.updateMenu = updateMenu;