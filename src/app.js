const express = require('express')
const fs = require('fs')
const path = require('path')

const port = process.env.PORT || 3000

app.get("test_text",(req,res) => {
    res.send("19360859037")
})

app.get("test_html",(req,res) => {
    res.send("Nazli Tuğba Gürsoy")
})

app.get('test_json',(req,res)=>{
    res.send([{
        numara:19360859037   
    },
    {
        ad:"Nazlı Tuğba",
    },
    {
        soyad:"Gürsoy"
    }
    ]
    )
    })

app.get('test_geocode',(req,res) => {
    
})

app.get('test_weather',(req,res) => {
    
})
