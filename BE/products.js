const products = [
  {
    id: 1,
    name: "Xiaomi 11T Pro",
    status: "Available",
    details:
      "Xiaomi 11T PRO 5G + 4G Volte (256GB, 8GB) 6.67” 108MP Triple Camera, NFC Dual SIM (Not Compatible Verizon Sprint Boost Metro Cricket) GSM Unlocked Global (w/Fast Car Charger Bundle) (Moonlight White)",
    price: 439,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/248218/Xiaomi-11T-Pro-Blue-1-2-600x600.jpg",
    category: "Xiaomi",
  },
  {
    id: 2,
    name: "Xiaomi 12",
    status: "Available",
    details:
      "Xiaomi 12 5G + 4G LTE 256GB + 8GB Snapdragon® 8 Gen 1 Global Unlocked 50MP Pro Grade Camera (Not for Verizon Boost At&T Cricket Straight) + (w/Fast Car Charger Bundle) (Gray)",
    price: 830,
    image:
      "https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-12-pro/pc-specs01.png",
    category: "Xiaomi",
  },
  {
    id: 3,
    name: "Samsung Galaxy S22 Ultra 5G",
    status: "Available",
    details:
      "SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Burgundy",
    price: 879,
    image:
      "https://didongviet.vn/pub/media/catalog/product//s/a/samsung-galaxy-s22-ultra-128gb-didongviet_1.jpg",
    category: "Samsung",
  },
  {
    id: 4,
    name: "SAMSUNG Galaxy Z Fold 4",
    status: "Available",
    details:
      "SAMSUNG Galaxy Z Fold 4 Cell Phone, Factory Unlocked Android Smartphone, 256GB, Flex Mode, Hands Free Video, Multi Window View, Foldable Display, S Pen Compatible, US Version, Phantom Black",
    price: 1799,
    image:
      "https://vn.jugomobile.com/wp-content/uploads/2022/08/1660032969_Samsung-Galaxy-Z-Fold-4-duoc-Amazon-niem-yet-tran.jpg",
    category: "Samsung",
  },
  {
    id: 5,
    name: "SAMSUNG Galaxy A23",
    status: "Available",
    details:
      "Samsung Galaxy A23 (SM-A235M/DS) Dual SIM,128 GB 4GB RAM, Factory Unlocked GSM, International Version - No Warranty - (Black)",
    price: 239,
    image: "https://m.media-amazon.com/images/I/81Qph1w8TeL._AC_SL1500_.jpg",
    category: "Samsung",
  },
  {
    id: 6,
    name: "SAMSUNG Galaxy Z Fold3 5G",
    status: "Available",
    details:
      "SAMSUNG Galaxy Z Fold 3 5G Cell Phone, Factory Unlocked 2-in-1 Android Smartphone Tablet, 256GB, 120Hz, Foldable Dual Screen, Under Display Camera, US Version, Phantom Black",
    price: 1799,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-silver-1-600x600.jpg",
    category: "Samsung",
  },
  {
    id: 7,
    name: "Xiaomi Redmi Note 10 Pro",
    status: "Available",
    details:
      "Xiaomi Redmi Note 10 Pro (128GB, 6GB) 6.67, Snapdragon 732G, 5020mAh Battery, Dual SIM GSM Unlocked Global 4G LTE (T-Mobile, Metro, Global) International Model (Fast Car Charger Bundle, Onyx Gray)",
    price: 229,
    image: "https://m.media-amazon.com/images/I/51HAPlM7auL._AC_SL1000_.jpg",
    category: "Xiaomi",
  },

  {
    id: 8,
    name: "Xiaomi Redmi 9C",
    status: "Available",
    details:
      "Xiaomi Redmi 9C - Smartphone 6.53, 3 GB + 64 GB, Dual Sim, Android 10.0, Arancione (Sunrise Orange)",
    price: 186,
    image: "https://m.media-amazon.com/images/I/91TCHezZL5L._AC_SL1500_.jpg",
    category: "Xiaomi",
  },
  {
    id: 9,
    name: "Xiaomi 11 Lite",
    status: "Available",
    details:
      "Xiaomi Mi 11 Lite (128GB, 8GB) 6.55” 90HZ AMOLED, 64MP Triple Camera, Snapdragon 732G, Dual SIM GSM Unlocked (US + Global) 4G LTE International Version (Not Verizon/Boost) (Peach Pink)",
    price: 320,
    image: "https://m.media-amazon.com/images/I/41Zp+ufYBdL._AC_.jpg",
    category: "Xiaomi",
  },
  {
    id: 10,
    name: "SAMSUNG Galaxy S22",
    status: "Available",
    details:
      "SAMSUNG Galaxy S22 Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Night Mode, Brightest Display Screen, 50MP Photo Resolution, Long Battery Life, US Version, Pink Gold",
    price: 699,
    image:
      "https://m.media-amazon.com/images/I/51W2KpbkmWL._AC_UY327_FMwebp_QL65_.jpg",
    category: "Samsung",
  },
  {
    id: 11,
    name: "OnePlus 10 Pro",
    status: "Available",
    details:
      "OnePlus 10 Pro | 5G Android Smartphone | 6.7” QHD+ Display | 12GB+256GB | U.S. Unlocked | Triple Camera co-Developed with Hasselblad | Volcanic Black",
    price: 1799,
    image: "https://m.media-amazon.com/images/I/81qOD8EZTjL._AC_SL1500_.jpg",
    category: "OnePlus",
  },
  {
    id: 12,
    name: "OnePlus Nord CE",
    status: "Available",
    details:
      "OnePlus Nord CE 2, 5G Unlocked Android Smartphone EU Version, 8GB RAM+128GB Storage, 90Hz Fluid AMOLED Display, Triple Camera (Gray Mirror)",
    price: 326,
    image: "https://m.media-amazon.com/images/I/619n6kxuGsL._AC_SL1500_.jpg",
    category: "OnePlus",
  },
  {
    id: 13,
    name: "OnePlus 9 5G",
    status: "Available",
    details:
      "OnePlus 9 5G Dual LE2110 128GB 8GB RAM Factory Unlocked (GSM Only | No CDMA - not Compatible with Verizon/Sprint) China Version - Winter Mist (Purple)",
    price: 1799,
    image: "https://m.media-amazon.com/images/I/51YFXBFEwgS._AC_SL1040_.jpg",
    category: "OnePlus",
  },
  {
    id: 14,
    name: "Apple iPhone 13 Pro Max",
    status: "Available",
    details: "Apple iPhone 13 Pro Max, 512GB, Sierra Blue - Unlocked (Renewed)",
    price: 1279,
    image: "https://m.media-amazon.com/images/I/61afOyd+zEL._AC_SL1500_.jpg",
    category: "iPhone",
  },
  {
    id: 15,
    name: "Apple iPhone 11",
    status: "Available",
    details: "Apple iPhone 11, 64GB, Red - Unlocked (Renewed Premium)",
    price: 469,
    image: "https://m.media-amazon.com/images/I/51wbAAz5O6L._AC_SL1112_.jpg",
    category: "iPhone",
  },
  {
    id: 16,
    name: "Apple iPhone XR",
    status: "Available",
    details: "Apple iPhone XR, 64GB, Red - Unlocked (Renewed Premium)",
    price: 329,
    image:
      "https://m.media-amazon.com/images/I/51QG+K5RQtL._AC_UY327_FMwebp_QL65_.jpg",
    category: "iPhone",
  },
  {
    id: 17,
    name: "Apple iPhone 11 Pro",
    status: "Available",
    details:
      "Apple iPhone 11 Pro, 64GB, Midnight Green - Unlocked (Renewed Premium)",
    price: 549,
    image:
      "https://m.media-amazon.com/images/I/51+Uw6N7BnL._AC_UY327_FMwebp_QL65_.jpg",
    category: "iPhone",
  },
  {
    id: 18,
    name: "Apple iPhone 13",
    status: "Available",
    details: "Apple iPhone 13, 128GB, Red - Unlocked (Renewed)",
    price: 668,
    image:
      "https://m.media-amazon.com/images/I/71EvexPYtWL._AC_UY327_FMwebp_QL65_.jpg",
    category: "iPhone",
  },
];

module.exports = products;
