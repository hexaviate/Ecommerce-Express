//import module Express (untuk memakai line ini harus menambahkan/mengganti type di package.json)
import express from 'express';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';


const app = express(); //menedefinisikan Express Application

app.use(express.json()); //middleware untuk mengakses data JSON di req.body || penjelasan: middleware ini memparse data dari json agar dapat dengan mudah diakses via req.body

// membuat API Create beserta dengan routing nya
app.post("api/products", async (req,res) => { //async digunakan agar bisa mereturn promise, promise adalah sesuatu yang akan memeberi value nantinya
    const product = req.body; //membuat variabel product yang berisi request body yang telah dikirim user

    if(!product.name || !product.price || !product.image ){
        return res.status(400).json({
            success:false,
            message: "Tolong isi semua formnya"
        });
    }

    const newProduct = new Product(product) // membuat variabel newProduct yang berisi data yang akan dimasukkan ke Collection Product

    //try catch digunakan untuk menghandle error
    try {
        await newProduct.save(); //await digunakan agar code nya menunggu sampai line ini berhasil melakukan perintahnya || menyimpan variabel newProduct ke Collection Product
        res.status(201).json({
            success: true,
            data: newProduct //menampilkan data newProduct
        });
    } catch (error) {
        console.error("Error saat membuat product", error.message);
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
        
    }
})


//menentukan port yang dipakai port berapa
app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000')
})