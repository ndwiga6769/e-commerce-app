import product1 from "./assets/products/1.png";
import product2 from "./assets/products/2.png";
import product3 from "./assets/products/3.png";
import product4 from "./assets/products/4.png";
import product5 from "./assets/products/5.png";
import product6 from "./assets/products/6.png";
import product7 from "./assets/products/7.png";
import product8 from "./assets/products/8.png";

export const PRODUCTS = [
  {
    id: 1,
    productName: "Lenovo Yoga",
    price: 27000,
    productImage: product1,
    description: "Lenovo Yoga is a versatile laptop designed for those who value flexibility and power. Its unique hinge design allows for multiple viewing angles, making it perfect for both work and entertainment.",
    specifications: {
      displaySize: "15.6 inches",
      resolution: "1920 x 1080 pixels",
      processor: "Core i5",
      ram: "8GB",
      storage: "256GB SSD",
      operatingSystem: "Windows 10",
      weight: "1.8 kg",
      batteryLife: "Up to 8 hours",
    }
  },
  {
    id: 2,
    productName: "DELL INSPIRON",
    price: 24000,
    productImage: product2,
    description: "DELL Inspiron offers reliability and performance, ideal for work and play.",
    specifications: {
      displaySize: "15.6 inches",
      resolution: "1920 x 1080 pixels",
      processor: "APU Quad Core A6",
      ram: "8GB",
      operatingSystem: "Windows 10",
    }
  },
  {
    id: 3,
    productName: "HP SPECTRE 360",
    price: 170000,
    productImage: product3,
    description: "HP Spectre 360 is a high-end laptop with a 360-degree hinge, offering tablet-like functionality.",
    specifications: {
      displaySize: "13.3 inches",
      resolution: "1920 x 1080 pixels",
      processor: "Intel Core i7",
      ram: "8GB",
      graphics: "Intel Integrated UHD Graphics 620",
      storage: "256GB SSD",
      operatingSystem: "Windows 10",
      wifi: "802.11 ac",
    }
  },
  {
    id: 4,
    productName: "LENOVO IDEAPAD 5",
    price: 160000,
    productImage: product4,
    description: "Lenovo IdeaPad 5 is a mid-range laptop offering a great balance of performance and price.",
    specifications: {
      displaySize: "15.6 inches",
      resolution: "1920 x 1080 pixels",
      processor: "1 GHz Intel Core i5 4-Core (10th Gen)",
      ram: "8GB DDR4",
      graphics: "Integrated Intel UHD Graphics",
      storage: "512GB SSD",
      connectivity: "Wi-Fi 6 (802.11ax), Bluetooth 5.1",
      ports: "USB 3.1 Gen 1 & 2 Type-A & C, HDMI 1.4b",
      cardReader: "MMC, SD, SDHC & SDXC",
    }
  },
  {
    id: 5,
    productName: "MACBOOK PRO 2021 (M1)",
    price: 189999,
    productImage: product5,
    description: "The new MacBook Pro with M1 chip offers incredible performance and battery life.",
    specifications: {
      processor: "Apple M1 Pro chip with 8-core CPU",
      graphics: "14-core GPU",
      neuralEngine: "16-core",
      displaySize: "14 inches",
      resolution: "3024 x 1964 pixels",
      operatingSystem: "macOS",
      wifi: "Wi-Fi 6 (802.11ax), Bluetooth 5.1",
    }
  },
  {
    id: 6,
    productName: "HP ELITEBOOK 840 G4",
    price: 31000,
    productImage: product6,
    description: "HP EliteBook 840 G4 is a business laptop with robust security features.",
    specifications: {
      displaySize: "14 inches",
      resolution: "1920 x 1080 pixels",
      processor: "Core i5-7300U 2.4GHz (varies based on model)",
      ram: "16GB (varies based on model)",
      storage: "256GB Solid State Drive (varies based on model)",
      operatingSystem: "Windows 10 Pro 64Bit",
      otherFeatures: "Webcam, Bluetooth, Wi-Fi",
    }
  },
  {
    id: 7,
    productName: "HP ELITEBOOK 820 G2",
    price: 15000,
    productImage: product7,
    description: "HP EliteBook 820 G2 is an affordable laptop for basic computing needs.",
    specifications: {
      displaySize: "12.5 inches",
      resolution: "1920 x 1080 pixels",
      processor: "Intel Core i5-5200U 2.2 GHz",
      graphics: "Intel HD Graphics 5500",
      ram: "4 GB (varies based on model)",
      storage: "500 GB 7200rpm SATA Hard Drive (varies based on model)",
      operatingSystem: "Windows 7 (varies based on model)",
    }
  },
  {
    id: 8,
    productName: "ACER THU PRO",
    price: 18000,
    productImage: product8,
    description: "Acer Thu Pro is a budget laptop ideal for students and light users.",
    specifications: {
      displaySize: "14 inches",
      resolution: "1920 x 1080 pixels",
      processor: "Intel Core i7-10500U 2.8 GHz",
      graphics: "NVIDIA GeForce GTX 1650",
      ram: "16 GB DDR4",
      storage: "512 GB NVMe SSD",
      operatingSystem: "Windows 10 Pro",
      batteryLife: "Up to 8 hours",
      weight: "1.5 kg",
      ports: "USB-C, USB 3.0, HDMI, Ethernet",
      wireless: "Wi-Fi 6 (802.11ax), Bluetooth 5.0",
      audio: "Dolby Atmos speakers",
      keyboard: "Backlit keyboard",
      security: "Fingerprint sensor, TPM 2.0",
    }
  },
];
