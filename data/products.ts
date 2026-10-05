export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  model_name?: string;
  category: "mattress" | "bed" | "sofa" | "pillow" | "topper" | "bedding";
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  originalPrice?: string;
  images: string[];
  features: string[];
  specifications: ProductSpecification[];
  warranty: string;
  badge?: string;
  isFeatured?: boolean;
  thickness?: string | number;
  pricesBySize?: {
    size: string;
    price: string;
    originalPrice?: string;
  }[];
}

export const CATEGORIES = [
  { id: "all", name: "ทั้งหมด" },
  { id: "mattress", name: "ที่นอน" },
  { id: "bed", name: "เตียง" },
  { id: "sofa", name: "โซฟาปรับไฟฟ้า" },
  { id: "topper", name: "ท็อปเปอร์" },
  { id: "pillow", name: "หมอน" },
  { id: "bedding", name: "เครื่องนอน" },
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: "prod-1",
    slug: "health-care-orthopedic-mattress",
    name: "รุ่นสุขภาพ (Health Care Orthopedic Mattress)",
    model_name: "รุ่นสุขภาพ (Health Care)",
    category: "mattress",
    categoryLabel: "ที่นอนเพื่อสุขภาพ",
    shortDescription:
      "ที่นอนเสริมยางพาราแท้ 100% ออกแบบเพื่อพยุงแนวกระดูกสันหลังโดยเฉพาะ เหมาะสำหรับผู้ที่มีอาการปวดหลัง ปวดเอว หรือผู้สูงอายุ",
    fullDescription:
      "ที่นอน Happiness Bedding รุ่นสุขภาพ เป็นผลงานการวิจัยและพัฒนาโดยซ้อเป้ ประสบการณ์ผลิตกว่า 20 ปี ออกแบบมาแก้ปัญหาปวดหลังจากการนอนโดยเฉพาะ ด้วยการผสานชั้นยางพาราฉีดแท้ 100% เกรดพรีเมียม บนโครงสร้างสปริงแน่นแน่นพิเศษ ช่วยกระจายน้ำหนักตัวได้อย่างสมดุล ไม่เกิดแรงกดทับบริเวณสะโพกและไหล่ ทำให้หลับสนิทตื่นขึ้นมาสดชื่น ไร้อาการปวดเมื่อย",
    price: "16,900.-",
    originalPrice: "24,900.-",
    images: [
      "/images/healthcare.png",
      "/images/hero-bed.jpg",
      "/images/jasmine.png",
      "/images/butterfly.png"
    ],
    features: [
      "เสริมชั้นยางพาราแท้ 100% ความหนาแน่นสูง กระจายแรงกดทับได้สมบูรณ์แบบ",
      "โครงสร้างพยุงแนวกระดูกสันหลัง ช่วยจัดท่า นอนให้ถูกต้องตามหลักสรีรวิทยา",
      "ผ้านุ่มระบายความร้อน Dust Mite Protection ป้องกันไรฝุ่นและภูมิแพ้",
      "เหมาะอย่างยิ่งสำหรับผู้มีปัญหาปวดหลัง ผู้สูงอายุ หรือผู้ที่ชอบนอนแน่นสบาย"
    ],
    specifications: [
      { label: "ความหนาที่นอน", value: "10 นิ้ว (approx. 25 cm)" },
      { label: "ชั้นวัสดุหลัก", value: "Natural Latex 100% + High Density Orthopedic Core" },
      { label: "ระดับความแน่น", value: "Firm to Medium-Firm (แน่นกำลังดี)" },
      { label: "ผ้าหุ้มภายนอก", value: "Knitted Fabric ชุบสารป้องกันไรฝุ่น" },
      { label: "น้ำหนักที่รองรับ", value: "สูงสุด 250 กก./ฝ่าย" },
      { label: "ประเทศผู้ผลิต", value: "ประเทศไทย (โรงงาน Happiness Bedding อยุธยา)" }
    ],
    warranty: "รับประกันโครงสร้างยาวนาน 15 ปีเต็ม โดยโรงงาน Happiness Bedding",
    badge: "Recommend",
    isFeatured: true,
    thickness: 10,
    pricesBySize: [
      { size: "3.5 ฟุต (Single)", price: "16,900.-", originalPrice: "24,900.-" },
      { size: "5 ฟุต (Queen)", price: "17,900.-", originalPrice: "26,900.-" },
      { size: "6 ฟุต (King)", price: "18,900.-", originalPrice: "28,900.-" }
    ]
  },
  {
    id: "prod-2",
    slug: "lily-health-mattress",
    name: "รุ่นมะลิ (Lily Orthopedic Mattress)",
    model_name: "รุ่นมะลิ (Lily)",
    category: "mattress",
    categoryLabel: "ที่นอนเพื่อสุขภาพ",
    shortDescription:
      "ที่นอนรุ่นยอดนิยม นุ่มสบาย ระบายอากาศดีเยี่ยม ด้วยเทคโนโลยีโฟมความหนาแน่นสูงผสานชั้นยางพาราแท้ ให้ความรู้สึกผ่อนคลายตลอดคืน",
    fullDescription:
      "รุ่นมะลิ (Lily) ออกแบบขึ้นมาเพื่อตอบโจทย์ผู้ที่ชอบสัมผัสการนอนนุ่มแน่นกำลังดี ให้ความรู้สึกโอบรับสรีระเบาๆ แต่ไม่จมยุบ ด้วยยางพาราฉีดไมโครเทคผสานฟองน้ำความยืดหยุ่นสูง ช่วยระบายอากาศได้อย่างสม่ำเสมอ หมดกังวลเรื่องที่นอนสะสมความร้อน เหมาะกับสภาพอากาศในประเทศไทยอย่างยิ่ง",
    price: "7,990.-",
    originalPrice: "12,900.-",
    images: [
      "/images/jasmine.png",
      "/images/lily.png",
      "/images/healthcare.png"
    ],
    features: [
      "หนา 9 นิ้ว สัมผัสนุ่มเด้งเบาสบาย พลิกตัวง่าย ไม่ปวดหลัง",
      "รูระบายอากาศแบบรังผึ้ง ช่วยถ่ายเทความชื้นและลดอุณหภูมิขณะนอนหลับ",
      "ขอบเสริมแรงพิเศษ ป้องกันการทรุดตัวเมื่อนั่งบริเวณขอบเตียง",
      "ราคาย่อมเยาส่งตรงจากโรงงานผู้ผลิต เหมาะสำหรับทุกห้องนอน"
    ],
    specifications: [
      { label: "ความหนาที่นอน", value: "9 นิ้ว (approx. 23 cm)" },
      { label: "ชั้นวัสดุหลัก", value: "Latex-Hybrid Foam Core" },
      { label: "ระดับความแน่น", value: "Medium (นุ่มแน่นปานกลาง)" },
      { label: "ผ้าหุ้มภายนอก", value: "Soft Velvet Stretch Fabric" },
      { label: "การดูแลรักษา", value: "ใช้ผ้ารองกันน้ำ และหมุนกลับด้านทุก 6 เดือน" }
    ],
    warranty: "รับประกันโครงสร้าง 10 ปี",
    badge: "Best Seller",
    isFeatured: true,
    thickness: 9,
    pricesBySize: [
      { size: "3.5 ฟุต (Single)", price: "7,990.-", originalPrice: "12,900.-" },
      { size: "5 ฟุต (Queen)", price: "8,990.-", originalPrice: "14,900.-" },
      { size: "6 ฟุต (King)", price: "9,990.-", originalPrice: "16,900.-" }
    ]
  },
  {
    id: "prod-3",
    slug: "royal-butterfly-mattress",
    name: "รุ่นผีเสื้อพรีเมียม (Royal Butterfly Mattress)",
    category: "mattress",
    categoryLabel: "ที่นอนสปริงอิสระ Pocket Spring",
    shortDescription:
      "ที่นอนสปริงอิสระ Pocket Spring เสริมผ้านุ่มลายผีเสื้อหรูหรา ขยับตัวไม่สะเทือนคนข้างๆ สัมผัสนุ่มแน่นระดับโรงแรม 5 ดาว",
    fullDescription:
      "Royal Butterfly Mattress คือที่นอนที่รวมสุดยอดเทคโนโลยี Pocket Spring แยกการทำงานอิสระแต่ละลูก ทำให้เวลาพลิกตัวหรือขยับตัว แรงสะเทือนจะไม่ส่งผ่านไปรบกวนคนที่นอนข้างๆ เสริมด้วยผ้าทอสัมผัสนุ่มลายลักชัวรี ให้ประสบการณ์นอนเหมือนพักผ่อนในรีสอร์ต 5 ดาวทุกวัน",
    price: "12,900.-",
    originalPrice: "19,900.-",
    images: [
      "/images/butterfly.png",
      "/images/lily_mattress.png",
      "/images/hero-bed.jpg"
    ],
    features: [
      "ระบบ Pocket Spring แยกอิสระ 7-Zone กระจายน้ำหนักตามสรีระร่างกาย",
      "ขยับตัวเงียบ ไร้เสียงรบกวน ไม่สะเทือนคนนอนข้างเคียง",
      "ดีไซน์หรูหราหนา 11 นิ้ว เพิ่มชั้น Pillow Top นุ่มผ่อนคลาย",
      "รับประกันสปริงไม่จมไม่ยุบตัวตลอดอายุการใช้งาน"
    ],
    specifications: [
      { label: "ความหนาที่นอน", value: "11 นิ้ว (approx. 28 cm)" },
      { label: "ระบบสปริง", value: "Individual Pocket Spring 7-Zone" },
      { label: "ระดับความแน่น", value: "Plush Medium (นุ่มแน่นหรูหรา)" },
      { label: "ผ้าหุ้มภายนอก", value: "Royal Jacquard Patterned Fabric" }
    ],
    warranty: "รับประกันโครงสร้างสปริง 12 ปี",
    badge: "New Arrival",
    isFeatured: true,
    thickness: 11,
    pricesBySize: [
      { size: "3.5 ฟุต (Single)", price: "12,900.-", originalPrice: "19,900.-" },
      { size: "5 ฟุต (Queen)", price: "14,900.-", originalPrice: "22,900.-" },
      { size: "6 ฟุต (King)", price: "16,900.-", originalPrice: "25,900.-" }
    ]
  },
  {
    id: "prod-4",
    slug: "monaco-happytime-sofa",
    name: "Monaco (HAPPYTIME SOFA ปรับไฟฟ้า)",
    category: "sofa",
    categoryLabel: "โซฟาปรับไฟฟ้า",
    shortDescription:
      "Luxury Meets Comfort โซฟาปรับไฟฟ้าหนังพรีเมียม มาพร้อมรีโมทคอนโทรลปรับเอนนอน พนังพิงสแตนเลสแข็งแรงพิเศษ และช่องเก็บของใต้ท้าวแขน",
    fullDescription:
      "Monaco Happytime Sofa เป็นโซฟาปรับไฟฟ้าสไตล์ลักชัวรีที่ตอบโจทย์ความผ่อนคลายสูงสุดในบ้านคุณ (ขนาดกว้าง 265-273 cm. x ลึก 107-160 cm. x สูง 75-110 cm.) มอเตอร์ไฟฟ้าทำงานเงียบสนิท สามารถปรับระดับเอนนอนได้ละเอียด พร้อมโครงสร้างเหล็กกล้าผสมสแตนเลส ทนทาน ใช้งานได้ยาวนานหลายสิบปี",
    price: "35,900.-",
    originalPrice: "55,000.-",
    images: [
      "/images/monaco_sofa_main.jpg",
      "/images/monaco_dim_front.jpg",
      "/images/monaco_dim_perspective.jpg",
      "/images/monaco_dim_side.jpg",
      "/images/monaco_sofa_remote.jpg",
      "/images/monaco_dim_remote.jpg",
      "/images/monaco_sofa_side.jpg",
      "/images/monaco_dim_recline.jpg",
      "/images/monaco_sofa_back.jpg",
      "/images/monaco_sofa_storage.jpg"
    ],
    features: [
      "ระบบปรับเอนนอนไฟฟ้าแบบไร้เสียง พร้อมรีโมทสายควบคุมสะดวก",
      "มีช่องเก็บของอัจฉริยะใต้ที่ท้าวแขนทั้งสองฝั่ง",
      "โครงสร้างพนักพิงสแตนเลสและเบาะบุหนานุ่มไม่ยุบตัวง่าย",
      "หนังเกรดพรีเมียมสัมผัสนุ่ม กันน้ำ เช็ดทำความสะอาดง่าย"
    ],
    specifications: [
      { label: "ขนาดมิติ", value: "กว้าง 265-273 cm. x ลึก 107-160 cm. x สูง 75-110 cm." },
      { label: "ระบบปรับเอน", value: "Electric Motor Recliner System" },
      { label: "วัสดุหุ้ม", value: "Premium Microfiber Synthetic Leather" },
      { label: "ช่องเก็บของ", value: "Hidden Storage Compartment Under Armrests" },
      { label: "การรับประกันมอเตอร์", value: "รับประกันระบบไฟฟ้าและมอเตอร์ 3 ปี" }
    ],
    warranty: "รับประกันโครงสร้าง 10 ปี / มอเตอร์ไฟฟ้า 3 ปี",
    badge: "Luxury Product",
    isFeatured: true
  },
  {
    id: "prod-5",
    slug: "standard-luxury-bed-frame",
    name: "เตียงดีไซน์มาตรฐาน (Standard Luxury Bed Frame)",
    category: "bed",
    categoryLabel: "เตียงดีไซน์",
    shortDescription:
      "เตียงดีไซน์เรียบหรู แข็งแรงทนทาน โครงสร้างไม้แท้เสริมเหล็ก เลือกวัสดุหุ้มหนังหรือผ้ากำมะหยี่ได้ตามสไตล์ห้องนอนคุณ",
    fullDescription:
      "เตียงดีไซน์มาตรฐานจาก Happiness Bedding สร้างขึ้นด้วยโครงไม้เนื้อแข็งเข้ามุมเสริมเหล็กกล้า ป้องกันปัญหาเตียงส่งเสียงดังเอี๊ยดอ๊าดเวลานอน ขยับตัว หรือใช้งาน สามารถสั่งผลิตและเลือกโทนสีผ้า/หนังหุ้มได้ตามธีมห้องนอนของคุณ",
    price: "4,500.-",
    originalPrice: "7,500.-",
    images: [
      "/images/hero-bed.jpg",
      "/images/monaco_sofa_main.jpg"
    ],
    features: [
      "โครงสร้างไม้เนื้อแข็งอบแห้งกันปลวก เสริมคานเหล็กรับน้ำหนัก",
      "สั่งผลิตเลือกสีและชนิดผ้า/หนังหุ้มเตียงได้ฟรี",
      "หัวเตียงบุนุ่ม เรียบเก๋ เข้ากับห้องนอนทุกสไตล์",
      "รองรับน้ำหนักได้มากกว่า 400 กิโลกรัม"
    ],
    specifications: [
      { label: "โครงสร้างหลัก", value: "Hardwood Frame + Reinforced Steel Beam" },
      { label: "วัสดุหุ้ม", value: "เลือกได้: หนัง PU Premium / ผ้ากำมะหยี่ / ผ้าทอ" },
      { label: "ความสูงหัวเตียง", value: "110 cm." },
      { label: "การประกอบ", value: "ประกอบน็อตยึดแน่นหนา ไร้เสียงรบกวน" }
    ],
    warranty: "รับประกันโครงสร้างเตียง 5 ปี",
    badge: "Popular",
    isFeatured: false,
    pricesBySize: [
      { size: "3.5 ฟุต (Single)", price: "4,500.-", originalPrice: "7,500.-" },
      { size: "5 ฟุต (Queen)", price: "5,500.-", originalPrice: "8,900.-" },
      { size: "6 ฟุต (King)", price: "6,500.-", originalPrice: "9,900.-" }
    ]
  },
  {
    id: "prod-6",
    slug: "master-royal-bed-frame",
    name: "เตียงดีไซน์มาสเตอร์ (Master Royal Bed Frame)",
    category: "bed",
    categoryLabel: "เตียงดีไซน์",
    shortDescription:
      "ยกระดับห้องนอนให้หรูหราด้วยเตียงหัวเบาะนุ่มหนาพิเศษ ตัดเย็บอย่างประณีต มั่นคง แข็งแรง ทนทานนับสิบปี",
    fullDescription:
      "เตียงรุ่น Master Royal ออกแบบหัวเตียงบุนุ่มลึกสไตล์คอนเทมโพรารี เหมาะสำหรับผู้ที่ชอบพิงหลังอ่านหนังสือหรือดูทีวีบนเตียง โครงสร้างทำจากไม้เนื้อแข็งหนาพิเศษ เสริมคานรับน้ำหนัก 8 จุด ไร้เสียงรบกวนตลอดการพักผ่อน",
    price: "8,900.-",
    originalPrice: "13,900.-",
    images: [
      "/images/monaco_sofa_main.jpg",
      "/images/hero-bed.jpg"
    ],
    features: [
      "หัวเตียงบุฟองน้ำไฮเดนซิตี้หนาพิเศษ นุ่มพิงสบาย",
      "ดีไซน์หรูหราระดับ Master Bedroom",
      "คานรับน้ำหนัก 8 จุด แข็งแรงทนทานเป็นพิเศษ",
      "ตัดเย็บด้วยช่างฝีมือประสบการณ์กว่า 20 ปี"
    ],
    specifications: [
      { label: "โครงสร้าง", value: "Solid Wood & Metal Support Joints" },
      { label: "ความสูงหัวเตียง", value: "125 cm." },
      { label: "การดูแล", value: "เช็ดทำความสะอาดด้วยผ้าแห้งหรือน้ำยาดูแลหนัง" }
    ],
    warranty: "รับประกันโครงสร้างเตียง 7 ปี",
    badge: "Luxury Bed",
    isFeatured: false,
    pricesBySize: [
      { size: "3.5 ฟุต (Single)", price: "8,900.-", originalPrice: "13,900.-" },
      { size: "5 ฟุต (Queen)", price: "10,900.-", originalPrice: "16,900.-" },
      { size: "6 ฟุต (King)", price: "12,900.-", originalPrice: "18,900.-" }
    ]
  },
  {
    id: "prod-7",
    slug: "natural-latex-topper-3inch",
    name: "ท็อปเปอร์ยางพาราแท้ 100% หนา 3 นิ้ว (Natural Latex Topper)",
    category: "topper",
    categoryLabel: "ท็อปเปอร์เพื่อสุขภาพ",
    shortDescription:
      "ปูทับที่นอนเดิมเพื่อความนุ่มสบาย ยางพาราฉีดแท้ 100% ยืดหยุ่นสูง ช่วยลดอาการปวดหลังโดยไม่ต้องซื้อที่นอนใหม่",
    fullDescription:
      "ท็อปเปอร์ยางพาราแท้ Happiness Bedding ความหนา 3 นิ้ว เป็นทางเลือกสุดคุ้มสำหรับผู้ที่มีที่นอนเดิมแข็งเกินไปหรือยุบตัว เพียงนำท็อปเปอร์ไปวางปูทับ ยางพาราแท้จะช่วยปรับสมดุลกระจายน้ำหนัก รองรับส่วนโค้งเว้าของร่างกายได้ทันที",
    price: "3,990.-",
    originalPrice: "6,900.-",
    images: [
      "/images/jasmine.png",
      "/images/healthcare.png"
    ],
    features: [
      "ผลิตจากยางพาราธรรมชาติฉีดแท้ 100% ไม่ผสมสารเคมีอันตราย",
      "หนา 3 นิ้ว นุ่มเด้ง ปูทับที่นอนเดิมได้ทันที มีสายรัดมุม 4 ด้าน",
      "ม้วนเก็บสะดวก ย้ายไปใช้งานตามห้องต่างๆ ได้ง่าย",
      "ระบายอากาศดี ไม่ร้อน ป้องกันไรฝุ่นและเชื้อรา"
    ],
    specifications: [
      { label: "ความหนา", value: "3 นิ้ว (approx. 7.5 cm)" },
      { label: "วัสดุภายใน", value: "100% Natural Organic Latex Sheet" },
      { label: "ผ้าหุ้ม", value: "ผ้า Cotton Knitting ปลูกจากธรรมชาติ สัมผัสนุ่ม" },
      { label: "สายรัด", value: "Elastic Corner Straps 4 ด้าน" }
    ],
    warranty: "รับประกันยางพาราไม่ยุบตัว 5 ปี",
    badge: "Hot Item",
    isFeatured: true,
    pricesBySize: [
      { size: "3.5 ฟุต (Single)", price: "3,990.-", originalPrice: "6,900.-" },
      { size: "5 ฟุต (Queen)", price: "4,990.-", originalPrice: "8,900.-" },
      { size: "6 ฟุต (King)", price: "5,990.-", originalPrice: "9,900.-" }
    ]
  },
  {
    id: "prod-8",
    slug: "ergonomic-latex-contour-pillow",
    name: "หมอนยางพาราเพื่อสุขภาพทรง Contour (Ergonomic Latex Pillow)",
    category: "pillow",
    categoryLabel: "หมอนเพื่อสุขภาพ",
    shortDescription:
      "หมอนยางพาราแท้ทรงลอนสโลป ปรับระดับความสูงตามต้นคอ ช่วยลดอาการปวดคอ บ่า ไหล่ และลดการนอนกรน",
    fullDescription:
      "หมอนยางพาราเพื่อสุขภาพทรง Contour ถูกดีไซน์ตามหลักสรีรศาสตร์ มีระดับความสูง 2 ด้าน (High-Low Slope) ช่วยประคองกระดูกคอให้อยู่ในแนวตรง ไม่เกร็งขณะนอนหลับ รูระบายอากาศทั่วทั้งใบช่วยให้อากาศถ่ายเทสะดวก ไม่ร้อนหัว",
    price: "890.-",
    originalPrice: "1,590.-",
    images: [
      "/images/healthcare.png",
      "/images/jasmine.png"
    ],
    features: [
      "ทรง Contour สโลป 2 ระดับ เหมาะทั้งท่านอนหงายและท่านอนตะแคง",
      "ยางพาราฉีดแท้ 100% นุ่มยืดหยุ่น คืนตัวดี ไม่ยุบเป็นแอ่ง",
      "มีปุ่มนวดกระจายทั่วใบ ช่วยกระตุ้นการไหลเวียนโลหะบริเวณต้นคอ",
      "แถมฟรี ปลอกหมอนแจ็คการ์ดติดซิป ถอดซักทำความสะอาดได้"
    ],
    specifications: [
      { label: "ขนาดมิติ", value: "38 x 60 x 10/12 cm." },
      { label: "วัสดุ", value: "100% Natural Latex" },
      { label: "ปลอกหมอน", value: "Double Knit Cover with Zipper" }
    ],
    warranty: "รับประกันคุณภาพยางพารา 3 ปี",
    badge: "Health Pick",
    isFeatured: true
  },
  {
    id: "prod-9",
    slug: "premium-cotton-sateen-bedsheet-set",
    name: "ชุดผ้าปูที่นอน Cotton Sateen 700 เส้นด้าย (Luxury Sheets)",
    category: "bedding",
    categoryLabel: "เครื่องนอนพรีเมียม",
    shortDescription:
      "สัมผัสนุ่มลื่นเงางามระดับโรงแรม 6 ดาว ทอด้วยด้ายทอแน่น 700 เส้นด้าย ระบายความร้อนดีเยี่ยม เย็นสบายผิว",
    fullDescription:
      "ชุดผ้าปูที่นอนรุ่น Premium Cotton Sateen จาก Happiness Bedding ทอจากเส้นใยฝ้ายธรรมชาติยาวพิเศษ (Long-Staple Cotton) ทอละเอียด 700 เส้นด้ายต่อ 10 ตร.ซม. ให้สัมผัสนุ่มลื่น เงางาม ป้องกันการเกิดขุยและไม่หดตัวหลังซัก",
    price: "2,290.-",
    originalPrice: "3,900.-",
    images: [
      "/images/butterfly.png",
      "/images/hero-bed.jpg"
    ],
    features: [
      "เส้นใย Cotton Sateen 100% ทอละเอียด 700 เส้นด้าย",
      "สัมผัสเย็นสบาย ระบายอากาศดีเยี่ยม ป้องกันการสะสมความชื้น",
      "ยางยืดรัดมุมสูงถึง 14 นิ้ว สวมใส่ที่นอนหนาได้กระชับ ไม่หลุดง่าย",
      "ในชุดประกอบด้วย: ผ้าปูที่นอน 1 ผืน + ปลอกหมอนหนุน 2 ใบ + ปลอกหมอนข้าง 2 ใบ"
    ],
    specifications: [
      { label: "จำนวนเส้นด้าย", value: "700 Thread Count / 10 sq.cm." },
      { label: "วัสดุผ้า", value: "100% Long-Staple Cotton Sateen" },
      { label: "ความสูงที่รองรับ", value: "รองรับที่นอนหนาสูงสุด 14 นิ้ว" }
    ],
    warranty: "รับประกันการชำรุดจากการผลิต 1 ปี",
    badge: "Luxury Touch",
    isFeatured: false,
    pricesBySize: [
      { size: "3.5 ฟุต (Single)", price: "1,890.-", originalPrice: "3,200.-" },
      { size: "5 ฟุต (Queen)", price: "2,090.-", originalPrice: "3,600.-" },
      { size: "6 ฟุต (King)", price: "2,290.-", originalPrice: "3,900.-" }
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS_DATA.find((p) => p.slug === slug);
}

export function getRelatedProducts(category: string, currentSlug: string, limit = 3): Product[] {
  const filtered = PRODUCTS_DATA.filter(
    (p) => p.category === category && p.slug !== currentSlug
  );
  if (filtered.length < limit) {
    const additional = PRODUCTS_DATA.filter((p) => p.slug !== currentSlug && !filtered.includes(p));
    return [...filtered, ...additional].slice(0, limit);
  }
  return filtered.slice(0, limit);
}
