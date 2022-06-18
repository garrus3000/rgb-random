class Contenedor {
    constructor(cantidad) {
        this.cantidad = cantidad;
        this.incorrecto = cantidad <= 0 || cantidad > 6 || isNaN(cantidad);
        if (this.incorrecto) this.incorrecto;
        else cantidad;
    }

    generateRGBValue() {
        const rgbValue = Math.floor(Math.random() * 256);
        return rgbValue;
    }

    getRGB() {
        if (this.incorrecto) {
            console.log(`\n El valor de la cantidad debe ser mayor a 0 y menor a 6
            \n Cantidad ingresada: ${this.cantidad}
            \n No se puede generar un RGB`);
            return "";
        }
        const arr = [];
        for (let i = 0; i < this.cantidad; i++) {
            const rgb = `rgb(${this.generateRGBValue()}, ${this.generateRGBValue()}, ${this.generateRGBValue()})`;
            const id = i + 1;
            const objeto = {
                id,
                rgb,
            };
            arr.push(objeto);
        }
        // return arr;
        return arr.map((obj) => `\n ${obj.id}. ${obj.rgb}`).join("\n");
    }
}

module.exports = Contenedor;