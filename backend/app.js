var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


require('dotenv').config();//Permite que el proyecto tiene un archivo .env que va  a necesitar
var session=require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var loginRouter =require('./routes/admin/login');
var homeRouter=require('./routes/admin/home');

var cargasRouter=require('./routes/admin/cargas');
var editarRouter=require('./routes/admin/editar');
var asistenciaRouter=require('./routes/admin/asistencias');
var cargarEmpRouter=require('./routes/admin/cargar_empleado');
var edicioneSuelRouter=require('./routes/admin/ediciones_sueldos')


var consultasRouter=require('./routes/admin/consultas');
var cobrosRouter=require('./routes/admin/cobros');
var detalleRouter=require('./routes/admin/detalle');
var nominaEmpRouter=require('./routes/admin/nominaEmp');
var nominaMenRouter=require('./routes/admin/nominaMen');
const { secureHeapUsed } = require('crypto');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


secured=async(req,res,next)=>{
  try{
    console.log(req.session.id_usuario);
      if(req.session.id_usuario){
        next();
      }else{
        res.redirect('/admin/login');
      }
    }catch(error){
      console.log(error);
    }
  }

  app.use(session({
    secret: 'fsafsagaadgdagda',
    cookie:{maxAge:null},
    resave:false,
    saveUninitialized:true
  }))



app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/admin/login',loginRouter);
app.use('/admin/home',secured,homeRouter);

//Cargas y ediciones
app.use('/admin/cargas',secured,cargasRouter);
app.use('/admin/editar_empleado',secured,editarRouter);
app.use('/admin/asistencias',secured,asistenciaRouter);
app.use('/admin/cargar_empleado',secured,cargarEmpRouter);
app.use('/admin/ediciones_sueldos',secured,edicioneSuelRouter);

//consultas
app.use('/admin/consultas',secured,consultasRouter);
app.use('/admin/nomina',secured,nominaEmpRouter);
app.use('/admin/nomina_mensual',secured,nominaMenRouter);
app.use('/admin/detalle',secured,detalleRouter);
app.use('/admin/cobros',secured,cobrosRouter);

app.get('/admin/ediciones_sueldos', (req, res) => {
  res.render('admin/cargas/ediciones_sueldos', { error: req.session.error });
  req.session.error = null;
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
