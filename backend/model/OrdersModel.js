const { model } = require("mongoose");

const { OrdersSchema} = require("../schemas/PositionSchema");

const OrdersModel = new model("order" , OrdersSchema);

module.exports = { OrdersModel};