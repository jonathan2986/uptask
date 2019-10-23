const Proyectos = require('../models/Proyectos');

exports.proyectosHome = async (req, res)=>{
    const proyectos = await Proyectos.findAll();
    res.render('index',{
        nombrePagina: 'Proyectos',
        proyectos
    })
};
exports.formularioProyecto = (req, res) =>{
    res.render('nuevo-proyecto',{
        nombrePagina: 'Nuevo Proyecto'
    })
};

exports.nuevoProyecto = async (req,res)=>{
  //enviar a la consola
  //   console.log(req.body)
  //validar que tengamos algo en el input
  const { nombre } = req.body;
  let errores = [];

  if (!nombre){
      errores.push({'texto': 'Agrega un nombre al proyecto'})
  }

  //si hay errores
    if (errores.length > 0){
        res.render('nuevo-proyecto',{
            nombrePagina: 'Nuevo Proyecto',
            errores
        })
    }else{
        //No hay errores
        //insertar en la bd
       const proyecto = await Proyectos.create({nombre});
       res.redirect('/');
    }
};
