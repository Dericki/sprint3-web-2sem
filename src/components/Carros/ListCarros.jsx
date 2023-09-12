import moto from "../../assets/moto.png";   
import carro from "../../assets/carro.png";   
import caminhao from "../../assets/caminhao.png";   


export const ListCarros = [
  {
    categoria: "Motocicletas",
    img: moto,
    veiculos: [
      {
        id:1,
        img: moto,
        modelo: "Honda CBR",
        ano: 2021,
        peso: 200 + "KG",
        largura: 70 + "cm",
        altura: 110 + "cm",
        comprimento: 210 + "cm",
      },
      {
        id:2,
        img: moto,
        modelo: "Kawasaki Ninja",
        ano: 2022,
        peso: 180 + "KG",
        largura: 65 + "cm",
        altura: 105 + "cm",
        comprimento: 200 + "cm",
      },
      {
        id:3,
        img: moto,
        modelo: "Harley-Davidson",
        ano: 2020,
        peso: 250 + "KG",
        largura: 80 + "cm",
        altura: 120 + "cm",
        comprimento: 230 + "cm",
      },
    ],
  },
  {
    categoria: "Veículos Leves",
    img: carro,
    veiculos: [
      {
        id:4,
        img: carro,
        modelo: "Toyota",
        ano: 2021,
        peso: 1400 + "KG",
        largura: 180 + "cm",
        altura: 150 + "cm",
        comprimento: 450 + "cm",
      },
      {
        id:5,
        img: carro,
        modelo: "Volkswagen Golf",
        ano: 2022,
        peso: 1350 + "KG",
        largura: 175 + "cm",
        altura: 145 + "cm",
        comprimento: 440 + "cm",
      },
      {
        id:6,
        img: carro,
        modelo: "Honda Civic",
        ano: 2020,
        peso: 1450 + "KG",
        largura: 185 + "cm",
        altura: 155 + "cm",
        comprimento: 460 + "cm",
      },
    ],
  },
  {
    categoria: "Veículos Pesados",
    img: caminhao,
    veiculos: [
      {
        id:7,
        img: caminhao,
        modelo: "Volvo FH16",
        ano: 2021,
        peso: 12000 + "KG",
        largura: 250,
        altura: 400 + "cm",
        comprimento: 850 + "cm",
      },
      {
        id:8,
        img: caminhao,
        modelo: "Scania R 730",
        ano: 2022,
        peso: 11500 + "KG",
        largura: 245 + "cm",
        altura: 390 + "cm",
        comprimento: 820 + "cm",
      },
      {
        id:9,
        img: caminhao,
        modelo: "Peterbilt 579",
        ano: 2020,
        peso: 12500 + "KG",
        largura: 255 + "cm",
        altura: 410 + "cm",
        comprimento: 870 + "cm",
      },
    ],
  },
];
