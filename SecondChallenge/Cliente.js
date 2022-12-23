class Factura {
    constructor(idCliente,total,estado){
        this.idCliente = idCliente;
        this.total = total;
        this.estado = estado;
    }
    cobrar(){
        this.estado = "Pagada";
    }
    imprimir(){
        console.log(`Factura ${this.idCliente} Total: ${this.total} Estado: ${this.estado}`);
    }
}
function main(){
    clientes = {
        1:{nombre:"Javier",email:"javie@email.com",telefono:"123456789"},
        2:{nombre:"Felipe",email:"felipe@email.com",telefono:"123456789"},
        3:{nombre:"Ana",email:"ana@email.com",telefono:"123456789"},
        4:{nombre:"Eduardo",email:"eduardo@email.com",telefono:"123456789"},
    }
    factura1 = new Factura(1,340,"Pendiente");
    factura2 = new Factura(5,340,"Pendiente");
    factura3 = new Factura(1,140,"Pendiente");
    factura1.cobrar();
    factura1.imprimir();
    console.log(clientes[factura1.idCliente]);
}
main();