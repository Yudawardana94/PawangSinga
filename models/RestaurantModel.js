const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {
    hash
} = require('../helpers/bcrypt')

let restaurantSchema = new Schema({
    restaurantCode: String,
    restaurantType: String,
    name: {
        type: String,
        required: [true, `required Restaurant Name`]
    },
    address: {
        type: String,
        required: [true, `required address`]
    },
    instagram: String,
    website: String,
    lat: Number,
    lng: Number,
    photo: String,
    assigner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    Menu: [{
        type: Schema.Types.ObjectId,
        ref: 'menu',
    }]
}, {
    versionKey: false,
    timestamps: true
})


let Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports =Restaurant