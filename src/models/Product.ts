interface Image {
  title: string;
  description: string;
  url: string;
}

export default interface Product {
  name: string;
  description: string;
  ean: string;
  upc: string;
  image: string;
  images: Image[];
  net_price: number;
  taxes: number;
  price: string;
  categories: number[];
  tags: string[];
}
