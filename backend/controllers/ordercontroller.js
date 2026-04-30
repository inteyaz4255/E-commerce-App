import userModal from '../models/userModal.js'
import orderModel from "../models/orderModel.js"


// Placing Order using COD Method

const placeOrder = async (req,res) =>{
    try {
         
        const {userId,items,amount,address} = req.body
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()

        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModal.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:"Order Placed"})



    } catch (err) {
        console.log(err)
        res.json({success:false,message:err.message})
    }
}

// Placing Order using stripe Method

const placeOrderStripe = async (req,res) =>{
    
}


// Placing Order using Razorpay Method

const placeOrderRazorpay = async (req,res) =>{
    
}

// All Orders data for Admin Panel

const allOrders = async(req,res) =>{
     try {
        const orders = await orderModel.find({})
        res.json({success:true,orders})
     } catch (err) {
        console.log(err)
        res.json({success:false,message:err.message})
     }
}

// User Orders data for frontend

const userOrders= async(req,res) =>{
    try {
        const {userId} = req.body

        const orders = await orderModel.find({ userId })
        res.json({success:true,orders})
    } catch (err) {
        console.log(err)
        res.json({success:true,message:err.message})
    }
}


// update order status from Admin panel
const updateStatus= async(req,res) =>{
    
}

export {placeOrder,placeOrderRazorpay,placeOrderStripe,updateStatus,allOrders,userOrders}

