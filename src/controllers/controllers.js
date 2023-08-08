const controller = {};

controller.index = (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query("SELECT Imagen FROM productos ORDER BY RAND() LIMIT 5",(err,images)=>{
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
                res.render("catalogo.ejs",{data:productos,categoria:categorias});
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

controller.catalogoCategoria = (req,res)=>{
    const id = req.params.id;
    req.getConnection((err,conn)=>{
        if(err){
            res.json(err);
        }
        conn.query("SELECT * FROM productos WHERE CategoriaID = ?",[id],(err,productos)=>{
            if(err){
                res.json(err);
            }
            conn.query("SELECT * FROM categorias",(err,categorias)=>{
                res.render("catalogo.ejs",{data:productos,categoria:categorias});
            })
        })
    })
}

controller.adminLogin = (req,res)=>{
    res.render("adminLogin.ejs");
}

controller.admin = (req,res)=>{
    const Username = req.body.Username;
    const Password = req.body.Password;
    req.getConnection((err,conn)=>{
        if(err){
            res.json(err);
        }
        conn.query("SELECT * FROM admins WHERE Usuario = ? AND Contraseña = ?",[Username,Password],(err,data)=>{
            if(err){
                res.json(err)
            }
            conn.query("SELECT * FROM categorias",(err,categorias)=>{
                if(err){
                    res.json(err);
                }
                if(data.length === 0){
                    res.redirect("/");
                } else {
                    res.render("admin.ejs",{data:data,categoria:categorias});
                }
            })
        })
    })
}

controller.register = (req,res)=>{
    const Username = req.body.Username;
    const Password = req.body.Password;
    req.getConnection((err,conn)=>{
        if(err){
            res.json(err);
        }
        conn.query("INSERT INTO sesiones (Usuario,Contraseña) VALUES (?,?)",[Username,Password],(users,err)=>{
            res.redirect('/');
        });
    })
}

controller.carritoAdmin = (req,res)=>{
    res.render("carritoAdmin.ejs");
}

controller.carrito = (req,res)=>{
    const Username = req.body.Username;
    const Password = req.body.Password;
    req.getConnection((err,conn)=>{
        if(err){
            res.json(err);
        }
        conn.query("SELECT * FROM sesiones WHERE Usuario = ? AND contraseña = ?",[Username,Password],(err,data)=>{
            if(err){
                res.json(err);
            }
            if(data.length === 0){
                res.redirect("/");
            }
            res.render("carrito.ejs",{data:data})
        })
    })
}

controller.login = (req,res)=>{
    res.render("login.ejs");
}

controller.carritoGet = (req,res)=>{
    const id = req.params.id
    req.getConnection((err,conn)=>{
        if(err){
            res.json(err);
        }
        conn.query("select * from productos where ProductoID = ?",id,(err,data)=>{
            if(err){
                res.json(err)
            }
            res.render("add.ejs",{data:data});
        })
    })
}

controller.add = (req,res)=>{
    const Username = req.body.Username;
    const Password = req.body.Password;
    const id = req.body.id;

    req.getConnection((err,conn)=>{
        if(err){
            res.json(err);
        }
        conn.query("SELECT * FROM sesiones WHERE Usuario = ? AND Contraseña = ?",[Username,Password],(err,data)=>{
        
            if(err){
                res.json(err);
            }

            if(data.length == 0){
                res.redirect("/");
            }

            data.forEach(e => {

                const ProductoID = id;
                const UsuarioID = e.UsuarioID;
                const data = [ProductoID,UsuarioID]

                conn.query("INSERT INTO carrito (ProductoID,UsuarioID) values (?,?)",data,(err,carrito)=>{
                    if(err){
                        res.json(err)
                    }
                    res.redirect("/catalogo");
                });
            });

        })
    })
}

module.exports = controller;