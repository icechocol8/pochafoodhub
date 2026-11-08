import { MenuItem, ServiceItem } from './types';
// @ts-ignore
import dcmtImage from '../DCMT.jpg';
// @ts-ignore
import pochaImage from '../pocha.jpg';
// @ts-ignore
import mmtImage from '../MMT.jpg';
// @ts-ignore
import csmtImage from '../CSMT.jpg';
// @ts-ignore
import scmtImage from '../SCMT.jpeg';
// @ts-ignore
import wmmtImage from '../WMMT.jpeg';
// @ts-ignore
import bmtImage from '../BMT.jpeg';
// @ts-ignore
import ccmtImage from '../CCMT.jpeg';
// @ts-ignore
import cmtImage from '../CMT.jpg';
// @ts-ignore
import cmImage from '../CM.jpg';
// @ts-ignore
import smtImage from '../SMT.jpg';
// @ts-ignore
import icImage from '../IC.jpg';
// @ts-ignore
import tpImage from '../TP.jpg';
// @ts-ignore
import pcbImage from '../PCB.jpg';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'iced-coffee',
    name: 'Iced Coffee',
    price: 110,
    description: 'Smooth, chilled coffee for a quick energy boost.',
    image: icImage,
    category: 'coffee',
    popular: true,
    variations: [
      { name: 'Regular', price: 99 },
      { name: 'Large', price: 110 },
      { name: 'DUO-Regular', price: 190 },
      { name: 'DUO-Large', price: 210 }
    ]
  },
  {
    id: 'smt',
    name: 'Strawberry Milk Tea',
    price: 115,
    description: 'Sweet and delicious strawberry milk tea.',
    image: smtImage,
    category: 'milktea',
    popular: true,
    variations: [
      { name: 'Classic-Regular', price: 115 },
      { name: 'Classic-Large', price: 135 },
      { name: 'DUO - Regular', price: 220 },
      { name: 'DUO - Large', price: 260 },
      { name: 'Supreme - Regular', price: 145 },
      { name: 'Supreme - Large', price: 165 }
    ]
  },
  {
    id: 'cmt',
    name: 'Cheesecake Milk Tea',
    price: 165,
    description: 'Classic milk tea with cheesecake cream.',
    image: cmtImage,
    category: 'milktea',
    popular: true,
    variations: [
      { name: 'Classic-Regular', price: 115 },
      { name: 'Classic-Large', price: 135 },
      { name: 'DUO-Classic Regular', price: 220 },
      { name: 'DUO-Classic Large', price: 260 },
      { name: 'Supreme-Regular', price: 145 },
      { name: 'Supreme-Large', price: 165 }
    ]
  },
  {
    id: 'cm',
    name: 'Cheesy Mango Milk Tea',
    price: 115,
    description: 'Cheesy mango flavored milktea',
    image: cmImage,
    category: 'milktea',
    popular: true,
    variations: [
      { name: 'Classic-Regular', price: 115 },
      { name: 'Classic-Large', price: 135 },
      { name: 'DUO-Classic Regular', price: 220 },
      { name: 'DUO-Classic Large', price: 260 },
      { name: 'Supreme-Regular', price: 145 },
      { name: 'Supreme-Large', price: 165 }
    ]
  },
  {
    id: 'bmt',
    name: 'Blueberry Milk Tea',
    price: 115,
    description: 'Blueberry flavored milk tea.',
    image: bmtImage,
    category: 'milktea',
    popular: true,
    variations: [
      { name: 'Classic-Regular', price: 115 },
      { name: 'Classic-Large', price: 135 },
      { name: 'DUO-Classic Regular', price: 220 },
      { name: 'DUO-Classic Large', price: 260 },
      { name: 'Supreme-Regular', price: 145 },
      { name: 'Supreme-Large', price: 165 }
    ]
  },
  {
    id: 'ccmt',
    name: 'Cookies & Cream Milk Tea',
    price: 260,
    description: 'Cookies & cream flavored milk tea',
    image: ccmtImage,
    category: 'milktea',
    popular: true,
    variations: [
      { name: 'Classic-Regular', price: 115 },
      { name: 'Classic-Large', price: 135 },
      { name: 'DUO-Classic Large', price: 260 },
      { name: 'DUO-Classic Regular', price: 220 },
      { name: 'Supreme-Regular', price: 145 },
      { name: 'Supreme-Large', price: 165 }
    ]
  },
  {
    id: 'scmt',
    name: 'Salted Caramel',
    price: 220,
    description: 'Salted Caramel flavored milktea',
    image: scmtImage,
    category: 'milktea',
    popular: true,
    variations: [
      { name: 'Classic-Regular', price: 115 },
      { name: 'Classic-Large', price: 135 },
      { name: 'DUO-Classic Regular', price: 220 },
      { name: 'DUO-Classic Large', price: 260 },
      { name: 'Supreme-Regular', price: 145 },
      { name: 'Supreme-Large', price: 165 }
    ]
  },
  {
    id: 'wmmt',
    name: 'Winter Melon Milk Tea',
    price: 135,
    description: 'Winter melon flavored milk tea',
    image: wmmtImage,
    category: 'milktea',
    popular: true,
    variations: [
      { name: 'Classic-Regular', price: 115 },
      { name: 'Classic-Large', price: 135 },
      { name: 'DUO-Classic Regular', price: 220 },
      { name: 'DUO-Classic Large', price: 260 },
      { name: 'Supreme-Regular', price: 145 },
      { name: 'Supreme-Large', price: 165 }
    ]
  },
  {
    id: 'csmt',
    name: 'Choco Strawberry Milk Tea',
    price: 220,
    description: 'Mixed chocolate & strawberry flavors',
    image: csmtImage,
    category: 'milktea',
    popular: true,
    variations: [
      { name: 'DUO-Classic Regular', price: 220 },
      { name: 'DUO-Classic Large', price: 260 },
      { name: 'Classic-Regular', price: 115 },
      { name: 'Classic-Large', price: 135 },
      { name: 'Supreme-Regular', price: 145 },
      { name: 'Supreme-Large', price: 165 }
    ]
  },
  {
    id: 'dcmt',
    name: 'Dark Choco Milk Tea',
    price: 115,
    description: 'Dark chocolate-flavored milk tea.',
    image: dcmtImage,
    category: 'milktea',
    popular: true,
    variations: [
      { name: 'Classic-Regular', price: 115 },
      { name: 'Classic-Large', price: 135 },
      { name: 'DUO-Classic Regular', price: 220 },
      { name: 'DUO-Classic Large', price: 260 },
      { name: 'Supreme-Regular', price: 145 },
      { name: 'Supreme-Large', price: 165 }
    ]
  },
  {
    id: 'matcha-mt',
    name: 'Matcha Milk Tea',
    price: 220,
    description: 'Green Matcha favored milktea',
    image: mmtImage,
    category: 'milktea',
    popular: true,
    variations: [
      { name: 'DUO-Classic Regular', price: 220 },
      { name: 'DUO-Classic Large', price: 240 },
      { name: 'Classic-Regular', price: 115 },
      { name: 'Classic-Large', price: 125 },
      { name: 'Supreme-Regular', price: 135 },
      { name: 'Supreme-Large', price: 150 }
    ]
  },
  // Korean snacks/food
  {
    id: 'potato-cheese-balls',
    name: 'Potato Cheese Balls',
    price: 69,
    description: 'Golden-crispy mashed potato balls with a rich, perfectly melted mozzarella cheese center. (4 Pcs)',
    image: tpImage,
    category: 'kfood',
    popular: true,
    vegetarian: true,
    dietaryInfo: 'No meat, fish, or poultry; may include dairy and eggs. Please contact restaurant for more details.'
  },
  {
    id: 'tempura',
    name: 'Tempura',
    price: 69,
    description: 'Crispy delicious golden tempura fried to perfection. (6 Pcs)',
    image: pcbImage,
    category: 'kfood',
    popular: true,
    variations: [
      { name: 'Spicy Sauce', price: 69 },
      { name: 'Sweet Sauce', price: 69 }
    ]
  },

  // Other Beverages
  {
    id: 'bottled-water',
    name: 'Bottled Water',
    price: 29,
    description: 'Refreshing purified drinking water (500 ml).',
    image: '/assets/aistudio/image_bae3e48b.png',
    category: 'other'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'dine-in',
    title: 'Dine-In Area',
    description: 'Simple and casual seating available to enjoy your fresh milk tea and snacks at the store.',
    iconName: 'Utensils'
  },
  {
    id: 'takeout',
    title: 'Quick Safe Takeout',
    description: 'On-the-go? Order beforehand or walk-in to grab securely packed cups and street food in premium, spill-proof, bio-friendly packaging.',
    iconName: 'ShoppingBag'
  },
  {
    id: 'delivery',
    title: 'Foodpanda Delivery',
    description: 'Craving comfort from home? Order directly on Foodpanda and get fresh, chilled drinks and snacks delivered to your doorstep.',
    iconName: 'Bike'
  }
];

export const STORE_INFO = {
  name: 'Pocha Food Hub',
  tagline: "Sip, Snack, and Smile: Bacolod's Ultimate Destination for Premium Boba & Munchies",
  logo: pochaImage,
  address: 'JXW4+953, Fuentebella St, Bacolod, 6100 Negros Occidental',
  plusCode: 'JXW4+953',
  googleMapsPlaceName: "Po'Cha Food Hub (PoCha)",
  googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Po'Cha Food Hub (PoCha), JXW4+953, Fuentebella St, Bacolod, 6100 Negros Occidental")}`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Po'Cha Food Hub (PoCha), JXW4+953, Fuentebella St, Bacolod, 6100 Negros Occidental")}`,
  directionsHelp: 'Conveniently located along Fuentebella Street in Bacolod (Puentebella Subd area, near DYKR/DYCP XFM). Look for the cozy store sign!',
  hours: [
    { days: 'Monday – Thursday', time: '11:00 AM – 9:00 PM' },
    { days: 'Friday – Sunday', time: '11:00 AM – 10:00 PM' }
  ],
  phone: '0999 917 7737',
  telephone: '+63 999 917 7737',
  email: 'hello@pochafoodhub.com',
  socials: {
    facebook: 'https://web.facebook.com/PoChaOfficial',
    instagram: 'https://instagram.com/pochafoodhub',
    messenger: 'https://m.me/pochafoodhub',
    foodpanda: 'https://www.foodpanda.ph/restaurant/lveg/pocha-food-hub-puentebella'
  }
};
