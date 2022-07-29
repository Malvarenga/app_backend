create table if not exists clientes
(
    id int auto_increment
        primary key,
    Nombres   varchar(75)      not null,
    Apellidos varchar(75)      not null,
    Contacto  varchar(9)       not null,
    Correo    varchar(75)      null,
    Estado    char default '1' not null,
    createdAt date             null,
    updatedAt date             null
);

create table if not exists direcciones
(
    id  int auto_increment
        primary key,
    Municipio    varchar(50)      not null,
    Departamento varchar(25)      not null,
    Complemento  varchar(75)      not null,
    Estado       char default '1' not null,
    createdAt    date             null,
    updatedAt    date             null
);

create table if not exists clientesdirecciones
(
    id int auto_increment
        primary key,
    idClientes          int not null,
    idDirecciones       int not null,
    createdAt       date     null,
    updatedAt       date     null,
    constraint clientedireccion_Clientefk
        foreign key (idClientes) references clientes (id),
    constraint clientedireccion_Direccionfk
        foreign key (idDirecciones) references direcciones (id)
);

create table if not exists tipodocumentos
(
    id int auto_increment
        primary key,
    Nombre          varchar(25) not null,
    Valor           varchar(25) not null,
    Estado          char default '1' not null,
    createdAt       date     null,
    updatedAt       date     null
);

create table if not exists clientedocumentos
(
    id int auto_increment
        primary key,
    idClientes          int              not null,
    idTipoDocumentos    int              not null,
    createdAt          date             null,
    updatedAt          date             null,
    constraint clientedocumento_Clientefk
        foreign key (idClientes) references clientes (id),
    constraint clientedocumento_TipoDocumentofk
        foreign key (idTipoDocumentos) references tipodocumentos (id)
);