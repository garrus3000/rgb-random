#!/usr/bin/env node
const Contenedor = require('../src/contenedor');
const args = process.argv;
const generateRandomRGB = (cantidad) => {
    const contenedor = new Contenedor(cantidad);
    const rgb = contenedor.getRGB();
    return console.log(rgb);
};
generateRandomRGB(args[2]);