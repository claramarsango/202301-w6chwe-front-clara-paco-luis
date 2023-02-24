Robots Tendrás que crear un frontend en React (con Redux) que permita al usuario gestionar un listado con sus robots. El usuario debe poder listar, crear, modificar y borrar robots. Cada robot debe mostrar un nombre, una imagen (URL de internet) y unas características:

Velocidad (0-10) Resistencia (0-10) Fecha de creación Tendrás que crear una base de datos MongoDB para almacenar los robots, en Atlas.

Tendrás que crear una API REST con Express, con los siguientes endpoints:

[GET] /robots -> devuelve un array con todos los robots de la BD

[POST*] /robots -> recibe un robot (sin id), lo crea en la BD y devuelve el robot recién creado

[GET] /robots/:idRobot -> devuelve un robot de la BD por id

[PUT*] /robots/:idRobot -> recibe un robot, modifica en la BD el robot con la misma id que el recibido, y devuelve el robot modificado

[DELETE*] /robots/:idRobot -> elimina de la BD un robot por id y devuelve un objeto con la id

Recuerda que cada response debe ir con un código de status adecuado y que todos los body de las responses tienen que ser objetos en JSON.

Tod@s l@s miembr@s del equipo tienen que hacer al menos un controller en el back y una action de redux en el front.

Las request con POST, PUT y DELETE estarán protegidas con un token, que debe pasarse por query param. P.e.: /robots/create?token=h29D8b23Llm45
