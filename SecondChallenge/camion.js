class Conductor {
    constructor(nombre,licencia){
        this.nombre = nombre;
        this.licencia = licencia;
    }
}
class Camion {
    constructor(capacidad,pasajeros,conductor){
        this.capacidad = capacidad;
        this.pasajeros = pasajeros;
        this.conductor = conductor;
    }
    subir(pasajeros){
        if(this.pasajeros + pasajeros < this.capacidad){
            this.pasajeros += pasajeros;
        }else{
            console.log("El Camion esta lleno");
        }
    }
    bajar(pasajeros){
        if(this.pasajeros - pasajeros >= 0 ){
            this.pasajeros -= pasajeros;
        }else{
            console.log("El Camion ya esta vacio");
        }
    }
    conductor(conductor){
        this.conductor = conductor;
    }
}
function main(){
    conductor = new Conductor("Manuel","B1233WT");
    camion = new Camion(20,0,conductor);
    camion.subir(10);
    camion.bajar(6);
    console.log(camion.conductor);
    console.log(camion.pasajeros);
};
main();