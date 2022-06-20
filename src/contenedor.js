const chalk = require("chalk");

class Contenedor {
    constructor(cantidad) {
        this.cantidad = cantidad;
        this.HellsKitchen = cantidad === "HellsKitchen";
        this.incorrecto = cantidad <= 0 || cantidad > 6 || isNaN(cantidad);
        if (this.incorrecto) this.incorrecto;
        else cantidad;
    }

    generateRGBValue() {
        const rgbValue = Math.floor(Math.random() * 256);
        return rgbValue;
    }

    getRGB() {
        if (this.HellsKitchen) {
            const HellsKitchen = `

            ⠁⡼⠋⠀⣆⠀⠀⣰⣿⣫⣾⢿⣿⣿⠍⢠⠠⠀⠀⢀⠰⢾⣺⣻⣿⣿⣿⣷⡀⠀
            ⣥⠀⠀⠀⠁⠀⠠⢻⢬⠁⣠⣾⠛⠁⠀⠀⠀⠀⠀⠀⠀⠐⠱⠏⡉⠙⣿⣿⡇⠀
            ⢳⠀⢰⡖⠀⠀⠈⠀⣺⢰⣿⢻⣾⣶⣿⣿⣶⣶⣤⣤⣴⣾⣿⣷⣼⡆⢸⣿⣧⠀
            ⠈⠀⠜⠈⣀⣔⣦⢨⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣅⣼⠛⢹⠀
            ⠀⠀⠀⠀⢋⡿⡿⣯⣭⡟⣟⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⡘⠀
            ⡀⠐⠀⠀⠀⣿⣯⡿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣉⢽⣿⡆⠀⠀
            ⢳⠀⠄⠀⢀⣿⣿⣿⣿⣿⣿⣿⠙⠉⠉⠉⠛⣻⢛⣿⠛⠃⠀⠐⠛⠻⣿⡇⠀⠀
            ⣾⠄⠀⠀⢸⣿⣿⡿⠟⠛⠁⢀⠀⢀⡄⣀⣠⣾⣿⣿⡠⣴⣎⣀⣠⣠⣿⡇⠀⠀
            ⣧⠀⣴⣄⣽⣿⣿⣿⣶⣶⣖⣶⣬⣾⣿⣾⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⡇⠀⠀
            ⣿⣶⣈⡯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣹⢧⣿⣿⣿⣄⠙⢿⣿⣿⣿⠇⠀⠀
            ⠹⣿⣿⣧⢌⢽⣻⢿⣯⣿⣿⣿⣿⠟⣠⡘⠿⠟⠛⠛⠟⠛⣧⡈⠻⣾⣿⠀⠀⠀
            ⠀⠈⠉⣷⡿⣽⠶⡾⢿⣿⣿⣿⢃⣤⣿⣷⣤⣤⣄⣄⣠⣼⡿⢷⢀⣿⡏⠀⠀⠀
            ⠀⠀⢀⣿⣷⠌⣈⣏⣝⠽⡿⣷⣾⣏⣀⣉⣉⣀⣀⣀⣠⣠⣄⡸⣾⣿⠃⠀⠀⠀
            ⠀⣰⡿⣿⣧⡐⠄⠱⣿⣺⣽⢟⣿⣿⢿⣿⣍⠉⢀⣀⣐⣼⣯⡗⠟⡏⠀⠀⠀⠀
            ⣰⣿⠀⣿⣿⣴⡀⠂⠘⢹⣭⡂⡚⠿⢿⣿⣿⣿⡿⢿⢿⡿⠿⢁⣴⣿⣷⣶⣦⣤⣀
            `;
            return HellsKitchen;
        }
        if (this.incorrecto) {
            console.log(`\n
 El valor de ${chalk.bgBlue(" cantidad ")} debe ser un ${chalk.bgGreen(
                " Número "
            )} mayor a ${chalk.underline.green(
                "0"
            )} y menor a ${chalk.underline.green("6")}
            \n Cantidad ingresada: ${chalk.red(this.cantidad)}
            \n Error al generar un: ${
                chalk.bgRed(" R ") + chalk.bgGreen(" G ") + chalk.bgBlue(" B ")
            } `);
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
                _rgb: r,
                g,
                b,
            };
            const chalked =
                chalk.bgRgb(r, g, b)(`\n RGB ${id} `) +
                chalk.rgb(r, g, b)(` rgb(${_rgb})`);
            arr.push(objeto);
            console.log(chalked);
        }
        return "";
    }
}

module.exports = Contenedor;
