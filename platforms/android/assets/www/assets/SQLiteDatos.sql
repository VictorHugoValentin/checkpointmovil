CREATE TABLE IF NOT EXISTS servicios(idservicio INTEGER PRIMARY KEY,  
                                     nombreservicio TEXT, 
                                     iconoservicio INTEGER);

CREATE TABLE IF NOT EXISTS valoraciones(idvaloracion INTEGER PRIMARY KEY,
                                        nombrevaloracion TEXT,
                                        descripcion INTEGER,
                                        foto INTEGER,
                                        email INTEGER,
                                        servicio INTEGER,                
                                        FOREIGN KEY(servicio) 
                                        REFERENCES servicios(idservicio));
CREATE TABLE IF NOT EXISTS ubicaciones(idubicacion INTEGER PRIMARY KEY, 
                                       codigoqr TEXT,
                                       nombreubicacion TEXT,
                                       ubicacion INTEGER, 
                                       FOREIGN KEY(ubicacion) 
                                       REFERENCES ubicaciones(idubicacion));
CREATE TABLE IF NOT EXISTS ubicacion_valoracion(idubicacion_valoracion INTEGER PRIMARY KEY, 
                                                ubicacion INTEGER,
                                                valoracion INTEGER, 
                                                FOREIGN KEY(ubicacion) 
                                                REFERENCES ubicaciones(idubicacion),
                                                FOREIGN KEY(valoracion) 
                                                REFERENCES valoraciones(idvaloracion));  
CREATE TABLE IF NOT EXISTS log(idlog INTEGER PRIMARY KEY);


