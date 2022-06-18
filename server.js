const Contenedor = require('./src/contenedor');

const generateRandomRGB = (cantidad) => {
    const contenedor = new Contenedor(cantidad);
    const rgb = contenedor.getRGB();
    return console.log(rgb);
};

generateRandomRGB(3);