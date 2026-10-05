import { PRODUCTS_DATA } from "./products";
import { ARTICLES_DATA, Article as DetailedArticle } from "./articles";

export interface Review {
  id: string;
  customer_name: string;
  location: string;
  rating: number;
  comment: string;
  product_name?: string;
  date?: string;
  image?: string;
}

export const SITE_INFO = {
  name: "Happiness Bedding",
  subTitle: "ที่นอนเพื่อสุขภาพ สั่งทำตามสรีระ แก้ปวดหลัง โดยซ้อเป้",
  brandName: "HAPPINESS BEDDING",
  phone: "064-990-8338",
  secondaryPhone: "094-826-3597",
  email: "happinessbedding.l@gmail.com",
  address: "33/37 หมู่ 4 ต. โคกช้าง อ.บางไทร จ.พระนครศรีอยุธยา",
  lineUrl: "https://line.me/R/oaMessage/@happinessbedding/",
  facebookUrl: "https://facebook.com/happinessbedding.l",
  lineId: "@happinessbedding",
  experienceYears: "20+",
  customerCount: "500+",
};

export const PRODUCTS = PRODUCTS_DATA;
export const ARTICLES: DetailedArticle[] = ARTICLES_DATA;

export const REVIEWS: Review[] = [
  {
    id: "1",
    customer_name: "คุณนพดล",
    location: "กรุงเทพมหานคร",
    rating: 5,
    comment: "ที่นอนรุ่นสุขภาพของซ้อเป้ดีมากจริงๆ ครับ ซื้อให้คุณแม่ใช้ อาการปวดหลังและปวดเอวดีขึ้นเยอะเลย ตื่นมาสดชื่น งานประกอบประณีตสมราคา จัดส่งตรงเวลามากครับ",
    product_name: "รุ่นสุขภาพ (Health Care)",
    date: "24 ก.ย. 2026",
    image: "/images/healthcare.png"
  },
  {
    id: "2",
    customer_name: "คุณรินดา",
    location: "พระนครศรีอยุธยา",
    rating: 5,
    comment: "โซฟา Monaco นุ่มสบายมากค่ะ สีสวยหรูหราเข้ากับห้องรับแขกที่บ้านเลย ระบบไฟฟ้าทำงานเงียบ ปรับนอนดูทีวีสบายจนหลับ ประทับใจบริการของซ้อเป้มากค่ะ",
    product_name: "Monaco (HAPPYTIME SOFA)",
    date: "18 ก.ย. 2026",
    image: "/images/monaco_sofa_main.jpg"
  },
  {
    id: "3",
    customer_name: "คุณสมชาย",
    location: "ปทุมธานี",
    rating: 5,
    comment: "บริการส่งไวมากครับ พนักงานยกขึ้นชั้นสองให้อย่างสุภาพ ที่นอนยางพาราแน่นกำลังดี ไม่ย้วย ไม่จม แนะนำใครปวดหลังต้องลองที่นอนซ้อเป้ครับ",
    product_name: "รุ่นมะลิ (Lily)",
    date: "05 ก.ย. 2026",
    image: "/images/jasmine.png"
  },
  {
    id: "4",
    customer_name: "คุณวรรณ",
    location: "กรุงเทพมหานคร",
    rating: 5,
    comment: "ที่นอนยางพาราแท้ นอนสบายมากไม่สะสมความร้อนเลยค่ะ ปกติเป็นคนตื่นง่ายเวลานอนกับแฟน ตอนนี้ขยับตัวแล้วไม่สะเทือน คุ้มค่าเงินที่สุดค่ะ",
    product_name: "Royal Butterfly",
    date: "22 ส.ค. 2026",
    image: "/images/butterfly.png"
  },
  {
    id: "5",
    customer_name: "คุณประเสริฐ",
    location: "นนทบุรี",
    rating: 5,
    comment: "สั่งทำที่นอนขนาดพิเศษกับซ้อเป้ ได้ตรงตามสเปกเป๊ะ ซ้อให้คำแนะนำละเอียดมาก คุยง่าย เป็นกันเอง การันตีว่าโรงงานผลิตเองคุณภาพแตกต่างจากงานโชว์รูมทั่วไปแน่นอน",
    product_name: "ที่นอนสั่งทำพิเศษ",
    date: "10 ส.ค. 2026",
    image: "/images/hero-bed.jpg"
  },
  {
    id: "6",
    customer_name: "คุณสุพัตรา",
    location: "ชลบุรี",
    rating: 5,
    comment: "สั่งเตียงดีไซน์คู่กับที่นอนเพื่อสุขภาพ ประทับใจความแน่นหนาของโครงเตียงมาก ไม่มีเสียงดังรบกวนเวลาพลิกตัวเลยค่ะ 10/10 ไม่หัก",
    product_name: "เตียงดีไซน์ + ที่นอนสุขภาพ",
    date: "01 ส.ค. 2026",
    image: "/images/monaco_sofa_main.jpg"
  }
];
