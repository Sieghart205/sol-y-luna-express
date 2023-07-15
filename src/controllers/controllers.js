const controller = {};

controller.index = (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query("SELECT Imagen FROM productos ORDER BY RAND() LIMIT 6",(err,images)=>{
            if(err){
                res.json(err);
            }
            res.render("index.ejs",{data:images});
        })
    })
}

controller.catalogo = (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query("SELECT * FROM productos ORDER BY ProductoID DESC",(err,productos)=>{
            if(err){
                res.json(err);
            }
            conn.query("SELECT * FROM categorias",(err,categorias)=>{
                if(err){
                    res.json(err)
                }
                res.render("catalogo.ejs",{data:productos,categorias:categorias});
            })
        });
    })
}

controller.productos = (req,res)=>{
    const id = req.params.id;
    req.getConnection((err,conn)=>{
        if(err){
            res.json(err)
        }
        conn.query("SELECT * FROM productos WHERE ProductoID = ?",[id],(err,producto)=>{
            res.render("producto.ejs",{data:producto});
        })
    })
}

controller.pedir = (req,res)=>{
    const id = req.params.id;
     res.redirect(`https://wa.me/573133707425?text= ME INTERESA ESTE PRODUCTO! https://www.solyluna.cloud/producto/${id}`);
}

module.exports = controller;