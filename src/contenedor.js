class Contenedor {
    constructor(cantidad) {
        this.cantidad = cantidad;
        if (this.cantidad <= 0 || this.cantidad > 6) {
            throw new Error("La cantidad debe ser mayor a 0 y menor a 6");
        } else this.cantidad = cantidad;
    }

    generateRGBValue() {
        const rgbValue = Math.floor(Math.random() * 256);
        return rgbValue;
    }

    getRGB() {
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
        return arr;
    }
}

module.exports = Contenedor;
