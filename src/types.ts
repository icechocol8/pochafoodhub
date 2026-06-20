export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'milktea' | 'kfood' | 'other' | 'coffee';
  popular?: boolean;
  variations?: { name: string; price: number }[];
  vegetarian?: boolean;
  dietaryInfo?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  sweetness?: '0%' | '25%' | '50%' | '70%' | '100%';
  ice?: 'No Ice' | 'Less Ice' | 'Normal Ice';
  selectedVariation?: { name: string; price: number };
}
