const Chalk = require('chalk');

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
            console.log(`\n El valor de la ${Chalk.blue("cantidad")} debe ser un número mayor a 0 y menor a 6
            \n Cantidad ingresada: ${Chalk.red(this.cantidad)}
            \n Error al generar un: ${Chalk.bgAnsi256(this.generateRGBValue())(' RGB ')}`);
            return "";
        }
        const arr = [];
        for (let i = 0; i < this.cantidad; i++) {
            const r = this.generateRGBValue();
            const g = this.generateRGBValue();
            const b = this.generateRGBValue();
            const _rgb = `${r},${g},${b}`;
            const id = i + 1;
            const objeto = {
                id,
                _rgb: r, g, b
            };
            // const chalked = Chalk.rgb(r, g, b)(`\n RGB ${id}: rgb(${_rgb})`);
            const chalked = Chalk.bgRgb(r, g, b)(`\n RGB ${id} `)+ Chalk.rgb(r, g, b)(` rgb(${_rgb})`);

            arr.push(objeto);
            console.log(chalked);
        }
        return "";
    }
}

module.exports = Contenedor;