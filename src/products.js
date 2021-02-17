import { v4 as uuid } from 'uuid'

const products = [
  {
    id: uuid(),
    image: 'https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL._AC_US160_.jpg',
    price: 454.00,
    description: 'Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver',
    rating: 4,
  },
  {
    id: uuid(),
    image: 'https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L._AC_US160_.jpg',
    price: 93.99,
    description: 'Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black',
    rating: 4,
  },
  {
    id: uuid(),
    image: 'https://images-na.ssl-images-amazon.com/images/I/51rGP3HU3HL._AC_US160_.jpg',
    price: 791.31,
    description: 'CyberpowerPC Gamer Xtreme VR Gaming PC, Intel i5-10400F 2.9GHz, GeForce GTX 1660 Super 6GB, 8GB DDR4, 500GB NVMe SSD, WiFi Ready & Win 10 Home (GXiVR8060A10)',
    rating: 4,
  },
  {
    id: uuid(),
    image: 'https://m.media-amazon.com/images/I/5196jas+gZL._AC_UY218_.jpg',
    price: 33.99,
    description: 'Stylus Pen for iPad with Palm Rejection, Active Pencil Compatible with (2018-2020) Apple iPad Pro (11/12.9 Inch),iPad 6th/7th Gen,iPad Mini 5th Gen,iPad Air 3rd Gen for Precise Writing/Drawing',
    rating: 4,
  },
  {
    id: uuid(),
    image: 'https://m.media-amazon.com/images/I/717Di3DGIbL._AC_UY218_.jpg',
    price: 329.00,
    description: 'AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler',
    rating: 4,
  },
  {
    id: uuid(),
    image: 'https://m.media-amazon.com/images/I/715zrA5cmLL._AC_UY218_.jpg',
    price: 1197.00,
    description: 'iBUYPOWER Gaming PC Computer Desktop Element MR 9320 (Intel i7-10700F 2.9GHz, NVIDIA GTX 1660 Ti 6GB, 16GB DDR4 RAM, 240GB SSD, 1TB HDD, Wi-Fi ready, Windows 10 Home)',
    rating: 4,
  },
  {
    id: uuid(),
    image: 'https://m.media-amazon.com/images/I/71dqjxW8g5L._AC_UY218_.jpg',
    price: 421.53,
    description: 'Lenovo IdeaPad 3 14" Laptop, 14.0" FHD 1920 x 1080 Display, AMD Ryzen 5 3500U Processor, 8GB DDR4 RAM, 256GB SSD, AMD Radeon Vega 8 Graphics, Narrow Bezel, Windows 10, 81W0003QUS, Abyss Blue',
    rating: 4,
  },
  {
    id: uuid(),
    image: 'https://m.media-amazon.com/images/I/51kHiPeTSmL._AC_UY218_.jpg',
    price: 70.99,
    description: 'Corsair Vengeance LPX 16GB (2x8GB) DDR4 DRAM 3200MHz C16 Desktop Memory Kit - Black',
    rating: 4,
  },
  {
    id: uuid(),
    image: 'https://m.media-amazon.com/images/I/71k45hZkLmL._AC_UY218_.jpg',
    price: 1178.48,
    description: 'Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6" Full HD 144Hz 3ms IPS Display, 16GB Dual-Channel DDR4, 512GB NVMe SSD, Wi-Fi 6',
    rating: 4,
  },
]

export default products