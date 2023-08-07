import airmattress from "./airmattress.webp";
import drone from "./drone.webp";
import headphones from "./headphone.webp";
import massagechair from "./massagechair.webp";
import iphone from "./iphone.webp";
import tv from "./tv.webp";
import remotecar from "./remotecar.webp";
import heatedblanket from "./heatedblanket.jpeg";

const Data = {
  Orders: [
    {
      orderNumber: 123456,
      product: "Tv Monitor",
      date: "Aug 7 2023",
      delivered: true,
    },
    {
      orderNumber: 615782,
      product: "Iphone",
      date: "Aug 6 2023",
      delivered: true,
    },
    {
      orderNumber: 892839,
      product: "Headphones",
      date: "Aug 4 2023",
      delivered: false,
    },
    {
      orderNumber: 893746,
      product: "Heated Blanket",
      date: "Aug 3 2023",
      delivered: true,
    },
    {
      orderNumber: 142635,
      product: "Massage Chair",
      date: "Aug 3 2023",
      delivered: false,
    },
    {
      orderNumber: 837472,
      product: "Hover Drone",
      date: "Aug 1 2023",
      delivered: true,
    },
    {
      orderNumber: 468272,
      product: "Alarm clock",
      date: "July 27 2023",
      delivered: true,
    },
    {
      orderNumber: 827261,
      product: "Air Mattress",
      date: "July 26 2023",
      delivered: false,
    },
    {
      orderNumber: 927372,
      product: "Remote Control Car",
      date: "July 26 2023",
      delivered: true,
    },
  ],
  Products: [
    {
      name: "Tv Monitor",
      orders: 400,
      sales: 140,
      image: tv,
    },
    {
      name: "Headphones",
      orders: 220,
      sales: 44,
      image: headphones,
    },
    {
      name: "Massage Chair",
      orders: 300,
      sales: 300,
      image: massagechair,
    },
    {
      name: "Hover Drone",
      orders: 150,
      sales: 30,
      image: drone,
    },
    {
      name: "Iphone",
      orders: 600,
      sales: 300,
      image: iphone,
    },
    {
      name: "Air Mattress",
      orders: 60,
      sales: 3600,
      image: airmattress,
    },
    {
      name: "Remote Control Car",
      orders: 120,
      sales: 8400,
      image: remotecar,
    },
    {
      name: "Heated Blanket",
      orders: 240,
      sales: 9600,
      image: heatedblanket,
    },
  ],
  ChartData :[
    {
      id: 1,
      year : 2019,
      sales : 10000,
      customersGained : 1200,
      customersLost : 200
    },
    {
      id: 2,
      year : 2020,
      sales : 15000,
      customersGained : 1700,
      customersLost : 180
    },
    {
      id: 3,
      year : 2021,
      sales : 25000,
      customersGained : 1800,
      customersLost : 150
    },
    {
      id: 4,
      year : 2022,
      sales : 32000,
      customersGained : 2000,
      customersLost : 125
    },
    {
      id: 5,
      year : 2023,
      sales : 40000,
      customersGained : 2500,
      customersLost : 100
    }
  ]
};

export default Data;
