#PASOS BASICOS PARA LEVANTAR SERVIDOR NODE

    1.Crear Base de Datos en MySql con el Nombre app
    2.En la carpeta raiz del proyecto se encuntra el script con el nombre `app_tables.sql` para crear las Tablas, correrlo dentro de la Base de Datos creada previamente
    3.En consola correr el comando `npm install` para descargar los modulos requeridos
    4.Iniciar servidor ejecutando `node app.js`

#Nota: En Caso ser necesario, editar la conexion a la BD en el archivo `database/db.js`

#MEDOTOS APIRest

##CLIENTE

###GET /clientes
Devuelve Todos los Clientes `http://localhost:8000/clientes`

###GET /clientes/:id
Devuelve un Cliente Solicitado `http://localhost:8000/clientes/1`

###POST /clientes/
Crea un Cliente `http://localhost:8000/clientes/`

Nota: Enviar por el BODY un JSON estructurado {'Nombres':'Valor','Apellidos':'Valor','Contacto':'Valor','Correo':'Valor'}

###PUT /clientes/:id
Edita un Cliente `http://localhost:8000/clientes/1`

Nota: Enviar en el BODY un JSON estructurado con los valores {'Nombres':'Valor', 'Apellidos':'Valor', 'Contacto':'Valor', 'Correo':'Valor'}

###DELETE /clientes/:id
Elimina un Cliente `http://localhost:8000/clientes/1`

Nota: Por buena practica, solo se le cambia el Estado al Registro mediante la Bandera Estado donde 1 = Activo y 0 = Inactivo

##DIRECCIONES SEGUN CLIENTE

###GET /direcciones/view/:id
Devuelve Todos las Direcciones segun el Cliente Solicitado `http://localhost:8000/direcciones/view/1`

###GET /direcciones/:id
Devuelve una Direccion Solicitada `http://localhost:8000/direcciones/1`

###POST /direcciones/
Crea una Direccion para el Cliente en Cuestion `http://localhost:8000/direcciones/`

Nota: Enviar por el BODY un JSON estructurado {'idCliente':'Valor', 'Municipio':'Valor', 'Departamento':'Valor', 'Complemento':'Valor'}

###PUT /direcciones/:id
Edita una Direccion `http://localhost:8000/direcciones/1`

Nota: Enviar en el BODY un JSON estructurado con los valores {'Nombres':'Valor', 'Apellidos':'Valor', 'Contacto':'Valor', 'Correo':'Valor'}

###DELETE /direcciones/:id
Elimina una Direccion `http://localhost:8000/direcciones/1`

Nota: Por buena practica, solo se le cambia el Estado al Registro mediante la Bandera Estado donde 1 = Activo y 0 = Inactivo

##DOCUMENTOS SEGUN CLIENTE

###GET /documentos/view/:id
Devuelve Todos los Documentos segun el Cliente Solicitado `http://localhost:8000/documentos/view/1`

###GET /documentos/:id
Devuelve un Documento Solicitado `http://localhost:8000/documentos/1`

###POST /documentos/
Crea un Documento para el Cliente en Cuestion `http://localhost:8000/documentos/`

Nota: Enviar por el BODY un JSON estructurado {'idCliente':'Valor', 'Nombre':'Valor', 'Valor':'Valor'}

###PUT /documentos/:id
Edita un Documento `http://localhost:8000/documentos/1`

Nota: Enviar en el BODY un JSON estructurado con los valores {'Nombre':'Valor', 'Valor':'Valor'}

###DELETE /documentos/:id
Elimina un Documento `http://localhost:8000/documentos/1`

Nota: Por buena practica, solo se le cambia el Estado al Registro mediante la Bandera Estado donde 1 = Activo y 0 = Inactivo

#NOTA GENERAL
Por cuestion de tiempo, ya no realice el requerimiento de Bitacora pero de una forma general y sencilla, se resuelve creando una Tabla Bitacora y en la API podemos crear una Funcion setBitacora la cual pueda registrar el Antes y Despues de aquellos registros que creamos necesarios.
Por Ejemplo: Suponiendo que en la Tabla Cliente editemos un registro y deseemos que quede evidenciado en Bitacora, simplemente realizamos un SELECT previo al registro a editar, realizamos la edicion, y posteriormente realizamos nuevamente otro SELECT al registro ya editado de esa manera ya tenemos el ANTES y DESPUES de la edicion y solo restar por realizar el INSERT en la Tabla Bitacora.