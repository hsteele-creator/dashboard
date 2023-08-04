import airmattress from "./airmattress.webp";
import drone from "./drone.webp";
import headphones from "./headphone.webp";
import massagechair from "./massagechair.webp";
import iphone from "./iphone.webp";
import tv from "./tv.webp";
import remotecar from "./remotecar.webp";
import heatedblanket from "./heatedblanket.jpeg";

const Data = {
  "recent orders": [
    {
      orderNumber: 123456,
      product: "Tv Monitor",
      data: "aug 7 2023",
      delivered: true,
    },
    {
      orderNumber: 615782,
      product: "Iphone",
      data: "aug 6 2023",
      delivered: true,
    },
    {
      orderNumber: 892839,
      product: "Headphones",
      data: "aug 4 2023",
      delivered: false,
    },
    {
      orderNumber: 893746,
      product: "Heated Blanket",
      data: "aug 3 2023",
      delivered: true,
    },
    {
      orderNumber: 142635,
      product: "Massage Chair",
      data: "aug 3 2023",
      delivered: false,
    },
    {
      orderNumber: 837472,
      product: "Hover Drone",
      data: "aug 1 2023",
      delivered: true,
    },
    {
      orderNumber: 468272,
      product: "Alarm clock",
      data: "july 27 2023",
      delivered: true,
    },
    {
      orderNumber: 827261,
      product: "Air Mattress",
      data: "july 26 2023",
      delivered: false,
    },
    {
      orderNumber: 927372,
      product: "Remote Control Car",
      data: "july 26 2023",
      delivered: true,
    },
  ],
  Products: [
    {
      name: "Tv Monitor",
      orders: 400,
      sales: "$140,000",
      image: tv,
    },
    {
      name: "Headphones",
      orders: 220,
      sales: "$44,000",
      image: headphones,
    },
    {
      name: "Massage Chair",
      orders: 300,
      sales: "$300,000",
      image: massagechair,
    },
    {
      name: "Hover Drone",
      orders: 150,
      sales: "$30,000",
      image: drone,
    },
    {
      name: "Iphone",
      orders: 600,
      sales: "$300,000",
      image: iphone,
    },
    {
      name: "Air Mattress",
      orders: 60,
      sales: "$3,600",
      image: airmattress,
    },
    {
      name: "Remote Control Car",
      orders: 120,
      sales: "$8,400",
      image: remotecar,
    },
    {
      name: "Heated Blanket",
      orders: 240,
      sales: "$9,600",
      image: heatedblanket,
    },
  ],
};

export default Data;
