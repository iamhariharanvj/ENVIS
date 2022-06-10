const mongoose = require('mongoose');

const connectDB = async () => {
    const dbUrl = 'mongodb+srv://admin:nau8E4dsXzKobT1j@hostelfoodinfo.xauah0a.mongodb.net/?retryWrites=true&w=majority'

    await mongoose.connect(dbUrl, (err)=>{
        if (err) {
            console.log(`Error connecting to MongoDB ${err.message}`)
            return
        }
        else {
            console.log(`MongoDB connection succeeded`)

            return
        }
})
}

module.exports = connectDB