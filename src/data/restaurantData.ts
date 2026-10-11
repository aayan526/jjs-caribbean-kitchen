export interface MenuItem {
  id: string;
  name: string;
  category: 'mains' | 'sides' | 'desserts' | 'vegetarian' | 'kids';
  price: string; // marked as illustrative
  description: string;
  spiciness?: 'Mild' | 'Medium' | 'Hot' | 'Extra Hot';
  tags: string[];
  image: string;
  isPopular?: boolean;
  isHalal: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  favoriteDish: string;
}

export const RESTAURANT_INFO = {
  name: "JJ's Caribbean Kitchen",
  tagline: "Taste the sunshine!",
  subtitle: "Authentic Halal Jamaican Cuisine",
  address: "12 Victoria Parade, Urmston, Manchester M41 9BP",
  fullAddress: "12 Victoria Parade, Urmston, Greater Manchester, M41 9BP, United Kingdom",
  phone: "+44 7393 628344",
  phoneTel: "tel:+447393628344",
  rating: 4.9,
  reviewCount: 168,
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=12+Victoria+Parade+Urmston+Manchester+M41+9BP",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.467819582103!2d-2.359235823265851!3d53.4497679675841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae731e809315%3A0xe4a2db65c69022ee!2sVictoria%20Parade%2C%20Urmston%2C%20Manchester%20M41%209BP%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk",
  openingHours: [
    { dayGroup: "Tuesday – Thursday", hours: "12:00 – 20:00", days: [2, 3, 4], openHour: 12, closeHour: 20 },
    { dayGroup: "Friday – Saturday", hours: "12:00 – 22:00", days: [5, 6], openHour: 12, closeHour: 22 },
    { dayGroup: "Sunday & Monday", hours: "Closed", days: [0, 1], openHour: 0, closeHour: 0, isClosed: true }
  ],
  features: [
    {
      id: "halal",
      title: "100% Halal Certified",
      description: "Every cut of meat is strictly certified Halal, prepared with complete integrity and care."
    },
    {
      id: "delivery",
      title: "Fast Local Delivery",
      description: "Hot, piping Jamaican dishes delivered safely to your door across Urmston & surrounding Manchester areas."
    },
    {
      id: "takeout",
      title: "Quick Takeout & Pickup",
      description: "Order ahead for swift counter pickup. Freshly packed in leak-proof thermal containers."
    },
    {
      id: "reservations",
      title: "Table Reservations",
      description: "Secure your table for couples, family dinners, or weekend get-togethers in our cozy dining room."
    },
    {
      id: "outdoor",
      title: "Outdoor Seating",
      description: "Enjoy al fresco dining on Victoria Parade during Manchester’s sunnier days."
    },
    {
      id: "parking",
      title: "Free Off-Street Parking",
      description: "Hassle-free parking right beside the parade for quick stops or leisurely meals."
    },
    {
      id: "wifi",
      title: "Free High-Speed Wi-Fi",
      description: "Stay connected while you relax, work through lunch, or catch up with friends."
    },
    {
      id: "reggae",
      title: "Reggae-Music Atmosphere",
      description: "Warm island vibes, soulful reggae & rocksteady playlists providing authentic Jamaican joy."
    },
    {
      id: "catering",
      title: "Catering & Private Events",
      description: "Custom Caribbean buffets, party boxes, and wedding catering brought to your venue."
    }
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  // MAINS
  {
    id: "jerk-chicken",
    name: "JJ's Signature Jerk Chicken",
    category: "mains",
    price: "£13.50",
    description: "48-hour house-marinated chicken slow-grilled with pimento wood, scotch bonnet, thyme, and scallions. Served with our signature tangy jerk jus.",
    spiciness: "Hot",
    tags: ["Signature", "Halal", "Customer Favorite"],
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    isHalal: true
  },
  {
    id: "braised-oxtail",
    name: "Slow-Braised Jamaican Oxtail",
    category: "mains",
    price: "£16.95",
    description: "Tender oxtail simmered low and slow for 6 hours until melting off the bone, enriched with plump butter beans and deep aromatic pan gravy.",
    spiciness: "Medium",
    tags: ["Best Seller", "Halal", "Slow Cooked"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    isHalal: true
  },
  {
    id: "curried-goat",
    name: "Authentic Kingston Curried Goat",
    category: "mains",
    price: "£15.50",
    description: "Traditional tender bone-in goat steeped in roasted Jamaican curry powder, ginger, garlic, scotch bonnet, and fresh garden thyme.",
    spiciness: "Hot",
    tags: ["Halal", "Traditional"],
    image: "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    isHalal: true
  },
  {
    id: "curried-mutton",
    name: "Slow-Simmered Curried Mutton",
    category: "mains",
    price: "£14.95",
    description: "Succulent cuts of prime Halal mutton gently braised in deeply spiced island turmeric curry with golden potatoes and sweet scallions.",
    spiciness: "Medium",
    tags: ["Halal", "Comfort Classic"],
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    isPopular: false,
    isHalal: true
  },
  {
    id: "peppered-steak",
    name: "Fiery Peppered Steak",
    category: "mains",
    price: "£15.95",
    description: "Seared prime beef strips tossed in a fiery skillet with crisp bell peppers, scotch bonnet slivers, onions, and garlic pepper sauce.",
    spiciness: "Extra Hot",
    tags: ["Halal", "Bold & Spicy"],
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    isPopular: false,
    isHalal: true
  },
  {
    id: "lamb-chops",
    name: "Honey Jerk Glazed Lamb Chops",
    category: "mains",
    price: "£17.50",
    description: "Char-grilled prime lamb chops glazed with sweet honey jerk reduction, fresh herbs, and toasted pimento seeds.",
    spiciness: "Medium",
    tags: ["Halal", "Chef's Cut"],
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    isHalal: true
  },
  {
    id: "jjs-split",
    name: "The Famous 'JJ's Split'",
    category: "mains",
    price: "£18.95",
    description: "The ultimate indecision-buster! Choose any TWO signature mains (e.g., Jerk Chicken & Braised Oxtail or Curried Goat) served side by side with plantain.",
    spiciness: "Medium",
    tags: ["House Special", "Halal", "Feast Platter"],
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    isHalal: true
  },

  // SIDES
  {
    id: "rice-and-peas",
    name: "Traditional Rice and Peas",
    category: "sides",
    price: "£4.50",
    description: "Steamed fluffy basmati infused with creamy coconut milk, red kidney beans, fresh thyme, and whole scotch bonnet aroma.",
    spiciness: "Mild",
    tags: ["Vegetarian", "Gluten-Friendly"],
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    isHalal: true
  },
  {
    id: "fried-dumplings",
    name: "Golden Jamaican Dumplings",
    category: "sides",
    price: "£3.50",
    description: "Crispy fried golden festivals with a soft, slightly sweetened dough center. The quintessential pairing for any curry.",
    spiciness: "Mild",
    tags: ["Vegetarian", "Freshly Fried"],
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    isHalal: true
  },
  {
    id: "curry-patties",
    name: "Authentic Curry Patties",
    category: "sides",
    price: "£3.95",
    description: "Flaky turmeric golden pastry stuffed with your choice of spiced minced beef, seasoned chicken, or vegetable medley.",
    spiciness: "Medium",
    tags: ["Halal", "Pastry Classic"],
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80",
    isHalal: true
  },
  {
    id: "fried-plantains",
    name: "Sweet Caramelized Plantains",
    category: "sides",
    price: "£3.95",
    description: "Ripe Jamaican yellow plantains sliced thick and lightly fried until crispy on the edges and sweet and tender inside.",
    spiciness: "Mild",
    tags: ["Vegan", "Sweet"],
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    isHalal: true
  },

  // DESSERTS
  {
    id: "chocolate-rum-cake",
    name: "JJ's Chocolate Rum Cake",
    category: "desserts",
    price: "£6.50",
    description: "Rich dark cocoa sponge generously infused with authentic Caribbean spiced rum essence and paired with velvety dark chocolate ganache.",
    tags: ["Signature Sweet", "Decadent"],
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    isHalal: true
  },

  // VEGETARIAN OPTIONS
  {
    id: "ital-curry",
    name: "Ital Sweet Potato & Chickpea Curry",
    category: "vegetarian",
    price: "£12.50",
    description: "Wholesome Rastafari Ital recipe simmered with creamy coconut milk, turmeric, spinach, ginger, garlic, and fluffy chickpeas.",
    spiciness: "Mild",
    tags: ["Vegan", "Ital Recipe", "Gluten-Friendly"],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    isHalal: true
  },
  {
    id: "brown-stew-tofu",
    name: "Island Brown Stew Tofu & Callaloo",
    category: "vegetarian",
    price: "£12.95",
    description: "Crispy pressed organic tofu cubes braised in sweet pimento brown stew reduction with Caribbean callaloo greens and peppers.",
    spiciness: "Medium",
    tags: ["Vegan", "High Protein"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    isHalal: true
  },

  // KIDS OPTIONS
  {
    id: "kids-jerk-tenders",
    name: "Kids Mild Jerk Chicken Tenders",
    category: "kids",
    price: "£6.95",
    description: "Tender boneless chicken strips with a mild sweet honey marinade, served with golden skinny fries and a juice cup.",
    spiciness: "Mild",
    tags: ["Kids Friendly", "Halal", "Mild"],
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    isHalal: true
  },
  {
    id: "kids-mac-cheese",
    name: "Kids Caribbean Baked Mac & Cheese",
    category: "kids",
    price: "£5.95",
    description: "Golden baked macaroni pie with mature British cheddar, mild mustard touch, and crispy bubbling cheese top.",
    spiciness: "Mild",
    tags: ["Kids Favorite", "Comfort Food"],
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    isHalal: true
  }
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Marcus Sterling",
    location: "Manchester",
    rating: 5,
    date: "2 weeks ago",
    comment: "Hands down the best Caribbean food in Greater Manchester! The braised oxtail literally melts off the bone and the gravy over rice and peas is pure heaven. Massive portions and the reggae tunes create such a warm vibe.",
    favoriteDish: "Slow-Braised Oxtail"
  },
  {
    id: "rev-2",
    name: "Amina Al-Mansoor",
    location: "Trafford",
    rating: 5,
    date: "1 month ago",
    comment: "Finding authentic 100% Halal Jamaican food of this calibre in Urmston is an absolute blessing. The jerk chicken has that smoky char you only get from true outdoor grilling, with scotch bonnet heat that hits just right.",
    favoriteDish: "JJ's Signature Jerk Chicken"
  },
  {
    id: "rev-3",
    name: "David & Chloe Higgins",
    location: "Urmston",
    rating: 5,
    date: "3 weeks ago",
    comment: "We ordered the 'JJ's Split' combo so we wouldn't have to argue over jerk chicken vs curried goat. Best decision ever. Super friendly team, easy parking right outside, and the chocolate rum cake finished the night perfectly.",
    favoriteDish: "The Famous JJ's Split"
  },
  {
    id: "rev-4",
    name: "Tariq Hussain",
    location: "Sale, Manchester",
    rating: 5,
    date: "2 months ago",
    comment: "JJ's catered our family celebration of 40 guests last month. Everything was piping hot, exceptionally packaged, and our guests couldn't stop praising the curry patties and mutton. 10/10 service!",
    favoriteDish: "Catering Banquet & Patties"
  }
];

export const CATERING_PACKAGES = [
  {
    title: "Reggae Party Platter",
    guestRange: "10 – 25 Guests",
    estimatedPrice: "From £14.50 / guest",
    features: [
      "Jerk chicken pieces & wings",
      "Large trays of Rice & Peas",
      "Freshly fried festival dumplings",
      "Coleslaw & signature jerk sauces",
      "Leak-proof hot chafing setup"
    ]
  },
  {
    title: "Full Island Feast Buffet",
    guestRange: "25 – 80 Guests",
    estimatedPrice: "From £19.50 / guest",
    popular: true,
    features: [
      "Choice of 2 meats: Oxtail, Curried Goat or Jerk Chicken",
      "Rice and peas + fried dumplings",
      "Sweet plantains & callaloo medley",
      "Mini curry patties appetizers",
      "Service utensils & chafing warmers"
    ]
  },
  {
    title: "Wedding & Gala Celebration",
    guestRange: "50 – 150+ Guests",
    estimatedPrice: "Bespoke consultation",
    features: [
      "Complete 3-course Caribbean banquet",
      "Table canapés, patties & plantain skewers",
      "JJ's Chocolate Rum Cake dessert station",
      "Dedicated culinary staff available",
      "Dietary customizations (Halal & Vegan)"
    ]
  }
];
