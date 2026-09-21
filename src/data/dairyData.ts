import { Product, DairyPackage, FaqItem, TestimonialItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Ganesh Dairy Farm',
  tagline: 'Fresh From Farm To Your Home',
  subTagline: 'Pure Dairy Products For a Healthy Life',
  phone: '+91 9059870436',
  phoneFormatted: '+91 90598 70436',
  whatsappUrl: 'https://wa.me/919059870436',
  email: 'ganeshdairyfarm96@gmail.com',
  address: {
    street: 'Ganesh Dairy Farm, Vellanki',
    area: 'Anandapuram',
    city: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    pincode: '531163',
    full: 'Ganesh Dairy Farm, Vellanki, Anandapuram, Visakhapatnam, Andhra Pradesh - 531163',
  },
  hours: {
    farm: 'Monday - Sunday: 6:00 AM - 11:00 AM & 4:00 PM - 10:00 PM',
    inquiry: 'Monday - Sunday: 6:00 AM - 8:00 PM',
    routine: 'Daily cow care begins at 5:00 AM',
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Vellanki+Anandapuram+Visakhapatnam+Andhra+Pradesh+531163',
};

export const PRODUCTS: Product[] = [
  {
    id: 'cow-milk',
    number: '01',
    name: 'Cow Milk',
    tagline: 'Fresh & Pure Daily Sourced',
    badge: 'Daily Freshness',
    shortDescription: 'Fresh farm milk sourced daily from healthy cows. Rich in calcium, protein, and essential nutrients, delivering pure taste and natural goodness for your family.',
    fullDescription: 'Fresh farm milk sourced daily from healthy cows raised with natural feed, clean drinking water, and spacious shelter. Packed with calcium, high-grade protein, and essential micronutrients, every bottle brings pure taste and unadulterated goodness straight from our barn to your breakfast table.',
    image: '/assets/cow-milk.webp',
    highlights: [
      'Daily morning milking with zero delay',
      'No added milk powder or artificial thickeners',
      'Naturally rich in calcium and bone-strengthening vitamins',
      'Bottled in recyclable, food-grade containers to avoid plastic micro-particles',
    ],
    traditionNote: 'Milked fresh after our 5:00 AM pasture feeding routine.',
    packagingNote: 'Packaged in recyclable bottles; working towards reusable glass bottles.',
  },
  {
    id: 'a2-desi-cow-milk',
    number: '02',
    name: 'A2 Desi Cow Milk',
    tagline: 'Premium & Naturally Easy to Digest',
    badge: 'Indigenous Breeds',
    shortDescription: 'Premium milk from indigenous cows, naturally containing A2 beta-casein protein. Smooth, wholesome, and carefully collected to maintain freshness and quality.',
    fullDescription: 'Crafted exclusively from native Indian Desi cow breeds known for their nutrient-dense milk with naturally occurring A2 beta-casein protein. Known to be gentle on delicate stomachs and suitable for growing children and seniors alike, our A2 milk is wholesome, smooth, and delivered in its most pristine natural state.',
    image: '/assets/a2-milk.webp',
    highlights: [
      '100% pure A2 beta-casein protein structure',
      'Naturally easier to digest and gut-friendly',
      'From indigenous cows nurtured with green fodder and organic grains',
      'Zero hormones, zero antibiotics, zero chemical additives',
    ],
    traditionNote: 'Sourced strictly from our indigenous herd with traditional care.',
    packagingNote: 'Sealed immediately after chilling in eco-conscious recyclable bottles.',
  },
  {
    id: 'curd',
    number: '03',
    name: 'Curd (Dahi)',
    tagline: 'Thick, Creamy & Naturally Fermented',
    badge: 'Naturally Cultured',
    shortDescription: 'Thick, creamy, and naturally fermented curd made from fresh milk. Perfect for daily meals, cooling raitas, and supporting healthy digestion.',
    fullDescription: 'Traditionally prepared from pure, whole cow milk, our curd delivers that authentic homemade richness, thick velvety texture, and balanced mild tartness. Rich in active probiotic cultures, it promotes natural gut health, aids digestion, and serves as an indispensable accompaniment for everyday Indian meals.',
    image: '/assets/curd.webp',
    highlights: [
      'Naturally cultured without gelatin, pectin, or synthetic thickeners',
      'Active live probiotics for improved digestion and immunity',
      'Thick, velvety consistency with a naturally pleasant aroma',
      'Prepared fresh daily using pure cow milk',
    ],
    traditionNote: 'Cultured slowly using time-tested natural fermentation methods.',
    packagingNote: 'Hygienically set and chilled to preserve live culture vitality.',
  },
  {
    id: 'paneer',
    number: '04',
    name: 'Fresh Farm Paneer',
    tagline: 'Soft, Fresh & Naturally Rich in Protein',
    badge: 'Artisanal Batch',
    shortDescription: 'Prepared from pure Desi cow milk, our paneer is soft, fresh, and naturally rich in protein. Its smooth texture and authentic taste make it perfect for curries, snacks, and homemade dishes.',
    fullDescription: 'Made fresh from pure whole cow milk curdled naturally and gently pressed to achieve a cloud-soft, spongy consistency. It soaks up spices beautifully in curries, sears cleanly on the pan without dissolving, and provides wholesome vegetarian protein for your family’s daily nutrition.',
    image: '/assets/paneer.webp',
    highlights: [
      'Made from 100% pure cow milk with zero synthetic curdling agents',
      'Exceptionally soft, tender texture that melts gently in your mouth',
      'High in pure dietary protein and calcium',
      'Never frozen, never treated with starch or bleaching agents',
    ],
    traditionNote: 'Crafted in small daily batches right after morning milking.',
    packagingNote: 'Vacuum-sealed fresh to preserve moisture and softness.',
  },
  {
    id: 'cow-ghee',
    number: '05',
    name: 'Pure Desi Cow Ghee',
    tagline: 'Traditional Aroma, Golden Color & Authentic Flavor',
    badge: 'Traditional Churning',
    shortDescription: 'Crafted from pure Desi cow milk using traditional methods, our ghee offers a rich aroma, golden color, and authentic flavor that enhances every meal.',
    fullDescription: 'Crafted from pure Desi cow milk using traditional slow-cooking methods. Our ghee boasts a magnificent golden granular (daanedaar) texture, an unforgettable nutty aroma, and time-honored Ayurvedic nutritional values. Free from palm oil, artificial essences, or preservatives, it elevates everyday dishes, sweets, and spiritual offerings.',
    image: '/assets/ghee.webp',
    highlights: [
      'Traditional slow-simmered artisanal preparation',
      'Authentic granular (daanedaar) texture and golden hue',
      'Rich in fat-soluble vitamins A, D, E, and natural butyric acid',
      'Long shelf life without synthetic preservatives',
    ],
    traditionNote: 'Simmered gently on low heat to develop its signature golden aroma.',
    packagingNote: 'Hygienically packed in secure, light-protected jars.',
  },
];

export const DAIRY_PACKAGES: DairyPackage[] = [
  {
    id: 'pkg-daily-fresh',
    name: 'Daily Fresh',
    badge: 'Everyday Essential',
    description: 'A simple everyday dairy combination for families who love their daily milk and freshly set curd.',
    productIds: ['cow-milk', 'curd'],
    productNames: ['Fresh Cow Milk', 'Thick Natural Curd'],
    bestFor: 'Daily morning breakfast and refreshing family meals',
    isPopular: false,
  },
  {
    id: 'pkg-family-essentials',
    name: 'Family Essentials',
    badge: 'Family Pick',
    description: 'A convenient combination of everyday dairy favourites, balancing morning milk, hearty curd, and protein-rich fresh paneer.',
    productIds: ['cow-milk', 'curd', 'paneer'],
    productNames: ['Fresh Cow Milk', 'Thick Natural Curd', 'Fresh Farm Paneer'],
    bestFor: 'Growing households and wholesome weekly home cooking',
    isPopular: true,
  },
  {
    id: 'pkg-premium-dairy',
    name: 'Premium Dairy',
    badge: 'Heritage Selection',
    description: 'A premium dairy combination built around the farm’s finest offerings — indigenous A2 Desi Cow Milk and authentic slow-crafted Cow Ghee.',
    productIds: ['a2-desi-cow-milk', 'cow-ghee', 'paneer'],
    productNames: ['A2 Desi Cow Milk', 'Pure Desi Cow Ghee', 'Fresh Farm Paneer'],
    bestFor: 'Health-conscious families, seniors, and traditional wellness rituals',
    isPopular: false,
  },
];

export const TRUST_PILLARS = [
  {
    title: 'Farm Fresh',
    subtitle: 'Daily Morning Harvest',
    description: 'Sourced directly from our own cows in Vellanki every morning without middlemen or stale storage.',
  },
  {
    title: 'Quality Focused',
    subtitle: 'Zero Chemicals or Powder',
    description: 'No chemicals, no artificial powders, and no synthetic preservatives. Just 100% natural, clean dairy.',
  },
  {
    title: 'Dairy Variety',
    subtitle: '5 Everyday Essentials',
    description: 'Cow Milk, A2 Desi Cow Milk, naturally fermented Curd, fresh soft Paneer, and traditional Cow Ghee.',
  },
  {
    title: 'Made for Families',
    subtitle: 'Nourishment You Can Trust',
    description: 'Packed in recyclable bottles with gentle hygienic care so parents can serve it with total peace of mind.',
  },
];

export const FARM_JOURNEY_STEPS = [
  {
    step: '01',
    title: '5:00 AM Morning Care',
    description: 'Our day begins early in Vellanki. Cows are nourished with fresh green grass and pure drinking water an hour before milking to ensure they stay relaxed, calm, and healthy.',
  },
  {
    step: '02',
    title: 'Gentle, Hygienic Milking',
    description: 'Milking is carried out under strict hygiene standards in clean, well-ventilated sheds. Milk is immediately strained, cooled, and handled without chemical exposure.',
  },
  {
    step: '03',
    title: 'Traditional Dairy Craft',
    description: 'Fresh milk is prepared into thick probiotic curd, tender fresh paneer, and slow-simmered golden ghee using time-tested traditional techniques.',
  },
  {
    step: '04',
    title: 'Farm to Family Doorstep',
    description: 'Bottled promptly in recyclable food-grade containers and dispatched so your family experiences the true taste of fresh dairy every morning.',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'What dairy products does Ganesh Dairy Farm offer?',
    answer: 'We produce and supply 5 pure farm-fresh products: Fresh Cow Milk, A2 Desi Cow Milk (from indigenous cows), Naturally Fermented Curd, Fresh Farm Paneer, and Traditional Desi Cow Ghee.',
  },
  {
    question: 'Where is Ganesh Dairy Farm located?',
    answer: 'Our farm is located in Vellanki, Anandapuram, Visakhapatnam, Andhra Pradesh - 531163. All our dairy comes directly from our own farm right here in the Visakhapatnam region.',
  },
  {
    question: 'How are your cows cared for?',
    answer: 'Our daily routine starts at 5:00 AM every morning. We provide our cows with fresh nutritious green fodder, clean drinking water, spacious hygienic shelter, and regular veterinary attention. We believe that happy, healthy cows naturally give the purest milk.',
  },
  {
    question: 'Do your products contain any preservatives or milk powder?',
    answer: 'No. We have a strict zero-chemical policy: no milk powders, no synthetic thickeners, no added water, and no preservatives. Everything is 100% natural and clean.',
  },
  {
    question: 'What kind of packaging do you use?',
    answer: 'We package our milk in recyclable, food-grade plastic bottles to prevent micro-particle contamination associated with single-use plastic pouches. We are actively working towards introducing reusable glass bottles as we expand.',
  },
  {
    question: 'How can I enquire about products or place an order?',
    answer: 'You can submit the quick enquiry form on this website, call us directly at +91 9059870436, or message us on WhatsApp. Our phone inquiry lines are open Monday to Sunday from 6:00 AM to 8:00 PM.',
  },
  {
    question: 'Do you accept bulk orders for events or catering?',
    answer: 'Yes! We welcome bulk inquiries for paneer, curd, ghee, and milk for family functions, festivals, and community events. Please select "Bulk Order" on our enquiry form or contact us in advance to ensure fresh preparation.',
  },
  {
    question: 'Can I visit the farm in Vellanki?',
    answer: 'We are proud of our farm environment and animal welfare. If you would like to visit the farm, please reach out via phone (+91 9059870436) so we can coordinate your visit during our active farm hours.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: 'The difference in morning milk is night and day. You can smell the natural freshness the moment you boil it. My children love the taste, and the paneer is so soft and fresh.',
    author: 'Srinivas Rao & Family',
    location: 'Madhurawada, Visakhapatnam',
    role: 'Regular Milk & Curd Household',
    verified: true,
  },
  {
    quote: 'Finding authentic A2 Desi cow milk with complete transparency in Vizag was difficult until we found Ganesh Dairy Farm. Knowing the cows are cared for with love from 5 AM gives immense confidence.',
    author: 'Lakshmi Prasanna',
    location: 'Anandapuram, Visakhapatnam',
    role: 'A2 Milk & Desi Ghee Customer',
    verified: true,
  },
  {
    quote: 'The Cow Ghee has that authentic granular texture and golden aroma that reminds me of our village. No artificial smell or oily residue — just pure traditional craftsmanship.',
    author: 'Venkat Kalyan',
    location: 'Yendada, Visakhapatnam',
    role: 'Desi Ghee Enthusiast',
    verified: true,
  },
];
