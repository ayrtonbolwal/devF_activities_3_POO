/*
Crear una clase llamada "Notificador" que envíe mensajes a las Personas (nombre, edad, profesión).

Crear una clase llamada "Mensaje" que tenga un método enviar() que imprima en pantalla un mensaje a enviar.

Crear al menos 3 clases hijas de "Mensaje" que sean diferentes medios de comunicación (email, mensaje de texto, sms, WA, etc.) 
y que sobreescriban el método enviar para mandar mensajes.
*/

class Notificador{

    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    enviarMensaje(){
        
    }

}

class Mensaje{
    constructor(textMensaje){
        this.textMensaje = textMensaje;    
    }

    enviar(){

    }

}

class Email extends Mensaje{
    constructor(textMensaje){
        super(textMensaje);
    }

    enviar(){
        console.log(`Mensaje de Email: ${this.textMensaje}`);
    }
}

class WhatsApp extends Mensaje{
    constructor(textMensaje){
        super(textMensaje);
    }

    enviar(){
        console.log(`Mensaje de WhatsApp: ${this.textMensaje}`);
    }
}

class Sms extends Mensaje{
    constructor(textMensaje){
        super(textMensaje);
    }   

    enviar(){
        console.log(`Mensaje de SMS: ${this.textMensaje}`);
    }
}