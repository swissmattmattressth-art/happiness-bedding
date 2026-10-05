export interface Review {
  id: string;
  customerName: string;
  customerType: "ลูกค้าทั่วไป" | "ลูกค้าโรงแรม" | "ลูกค้าโครงการ";
  customerTypeCategory: "general" | "hotel" | "project";
  rating: number;
  reviewText: string;
  customerImage?: string;
  reviewImage?: string;
  productName?: string;
  location: string;
  featured?: boolean;
  date: string;
}

export interface PhotoGalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  location: string;
}

export const REVIEW_CATEGORIES = [
  { id: "all", name: "ทั้งหมด" },
  { id: "general", name: "ลูกค้าทั่วไป" },
  { id: "hotel", name: "โรงแรม / รีสอร์ท" },
  { id: "project", name: "โครงการ" },
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    customerName: "คุณนพดล สุวรรณรัตน์",
    customerType: "ลูกค้าทั่วไป",
    customerTypeCategory: "general",
    rating: 5,
    reviewText:
      "ที่นอนรุ่นสุขภาพของซ้อเป้ดีมากจริงๆ ครับ ซื้อให้คุณแม่ใช้ อาการปวดหลังและปวดเอวดีขึ้นเยอะเลย ตื่นมาสดชื่น งานประกอบประณีตสมราคา จัดส่งตรงเวลามากครับ",
    customerImage: "/images/sor-pae.jpg",
    reviewImage: "/images/healthcare.png",
    productName: "รุ่นสุขภาพ (Health Care Orthopedic)",
    location: "กรุงเทพมหานคร",
    featured: true,
    date: "24 กันยายน 2026"
  },
  {
    id: "rev-2",
    customerName: "คุณรินดา & โรงแรมอยุธยากรุ๊ป",
    customerType: "ลูกค้าโรงแรม",
    customerTypeCategory: "hotel",
    rating: 5,
    reviewText:
      "สั่งซื้อโซฟา Monaco ปรับไฟฟ้าและที่นอนพรีเมียมสำหรับห้องพัก VIP ลักชัวรี แขกที่มาพักชมเป็นเสียงเดียวกันว่านอนสบายมาก หนังตัดเย็บประณีต งานคุณภาพส่งตรงจากโรงงาน",
    customerImage: "/images/monaco_sofa_main.jpg",
    reviewImage: "/images/monaco_dim_perspective.jpg",
    productName: "Monaco (HAPPYTIME SOFA ปรับไฟฟ้า)",
    location: "พระนครศรีอยุธยา",
    featured: true,
    date: "18 กันยายน 2026"
  },
  {
    id: "rev-3",
    customerName: "คุณสมชาย วงศ์ประเสริฐ",
    customerType: "ลูกค้าทั่วไป",
    customerTypeCategory: "general",
    rating: 5,
    reviewText:
      "บริการส่งไวมากครับ พนักงานยกขึ้นชั้นสองให้อย่างสุภาพ ที่นอนยางพาราแน่นกำลังดี ไม่ย้วย ไม่จม แนะนำใครปวดหลังต้องลองที่นอนซ้อเป้ครับ",
    customerImage: "/images/jasmine.png",
    reviewImage: "/images/lily.png",
    productName: "รุ่นมะลิ (Lily Health Mattress)",
    location: "ปทุมธานี",
    featured: true,
    date: "05 กันยายน 2026"
  },
  {
    id: "rev-4",
    customerName: "คุณวรรณวิสาข์",
    customerType: "ลูกค้าทั่วไป",
    customerTypeCategory: "general",
    rating: 5,
    reviewText:
      "ที่นอนยางพาราแท้ นอนสบายมากไม่สะสมความร้อนเลยค่ะ ปกติเป็นคนตื่นง่ายเวลานอนกับแฟน ตอนนี้ขยับตัวแล้วไม่สะเทือน คุ้มค่าเงินที่สุดค่ะ",
    customerImage: "/images/butterfly.png",
    reviewImage: "/images/butterfly.png",
    productName: "Royal Butterfly Mattress",
    location: "กรุงเทพมหานคร",
    featured: false,
    date: "22 สิงหาคม 2026"
  },
  {
    id: "rev-5",
    customerName: "โครงการบ้านเดี่ยว The Heritage",
    customerType: "ลูกค้าโครงการ",
    customerTypeCategory: "project",
    rating: 5,
    reviewText:
      "ทางโครงการสั่งทำเตียงดีไซน์และที่นอนสำหรับบ้านตัวอย่าง 12 หลัง ซ้อเป้ดูแลงานรวดเร็ว งานประณีตเรียบร้อยมาก จัดส่งตรงตามกำหนดเวลา 100%",
    customerImage: "/images/hero-bed.jpg",
    reviewImage: "/images/hero-bed.jpg",
    productName: "เตียงดีไซน์มาตรฐาน + ที่นอนสั่งทำ",
    location: "นนทบุรี",
    featured: false,
    date: "10 สิงหาคม 2026"
  },
  {
    id: "rev-6",
    customerName: "คุณสุพัตรา & ชลบุรี บีช รีสอร์ต",
    customerType: "ลูกค้าโรงแรม",
    customerTypeCategory: "hotel",
    rating: 5,
    reviewText:
      "สั่งเตียงดีไซน์คู่กับที่นอนเพื่อสุขภาพ ประทับใจความแน่นหนาของโครงเตียงมาก ไม่มีเสียงดังรบกวนเวลาพลิกตัวเลยค่ะ ลูกค้าโรงแรมประทับใจมาก",
    customerImage: "/images/monaco_sofa_main.jpg",
    reviewImage: "/images/healthcare.png",
    productName: "เตียงดีไซน์ + ที่นอนสุขภาพ",
    location: "ชลบุรี",
    featured: false,
    date: "01 สิงหาคม 2026"
  }
];

export const PHOTO_GALLERY_ITEMS: PhotoGalleryItem[] = [
  { id: "p1", title: "จัดส่งที่นอนรุ่นสุขภาพ บ้านคุณนพดล", category: "บ้านลูกค้า", image: "/images/healthcare.png", location: "กรุงเทพฯ" },
  { id: "p2", title: "จัดส่งโซฟา Monaco ปรับไฟฟ้า", category: "บ้านลูกค้า", image: "/images/monaco_sofa_main.jpg", location: "อยุธยา" },
  { id: "p3", title: "จัดส่งที่นอนรุ่นมะลิ", category: "บ้านลูกค้า", image: "/images/jasmine.png", location: "ปทุมธานี" },
  { id: "p4", title: "จัดส่งที่นอน Royal Butterfly", category: "บ้านลูกค้า", image: "/images/butterfly.png", location: "กรุงเทพฯ" },
  { id: "p5", title: "ส่งมอบเตียงดีไซน์ ณ โครงการ The Heritage", category: "โครงการ", image: "/images/hero-bed.jpg", location: "นนทบุรี" },
  { id: "p6", title: "ห้องพัก VIP ชลบุรี บีช รีสอร์ต", category: "โรงแรม", image: "/images/monaco_dim_perspective.jpg", location: "ชลบุรี" },
];
