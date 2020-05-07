const mongoose = require("mongoose");
const Inmueble = require('../models/inmueble');

  exports.crearInmueble = (req, res) => {



    Inmueble.create({

      titulo: req.body.titulo,
      tipo: req.body.tipo,
      dueño: req.body.dueño,
      recamaras: req.body.recamaras,
      descripcion: req.body.descripcion,
      metros: req.body.metros,
      colonia: req.body.colonia,
      calle: req.body.calle,
      precio: req.body.precio,
      delegacion: req.body.delegacion,
      baños: req.body.baños,
      telefono: req.body.telefono,
      fotos:req.body.fotos
    })  
    .then(response => {
      res.json(response);
      })
      .catch(err => {
      res.json(err);
      })

  }

  exports.todosInmuebles = (req,res) => {
    Inmueble.find()
    .then(allInmuebles => {
      res.json(allInmuebles);
    })
    .catch(err => {
      res.json(err)
    })
  }

  exports.inmuebleEspecifico = (req, res) => {

    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
    
    Inmueble.findById(req.params.id)
    .then(response => {
      console.log(response)
      res.status(200).json(response);
    })
    .catch(err => {
      res.json(err);
    })
  }
