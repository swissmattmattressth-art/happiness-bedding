export interface ContentBlock {
  type: "paragraph" | "heading" | "image" | "list" | "quote" | "callout" | "divider";
  text?: string;
  items?: string[];
  url?: string;
  caption?: string;
  author?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: "mattress-knowledge" | "sleep-health" | "bedding-selection" | "sleep-tips";
  categoryLabel: string;
  excerpt: string;
  content: ContentBlock[];
  coverImage: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  isFeatured?: boolean;
  relatedArticleIds?: string[];
}

export const ARTICLE_CATEGORIES = [
  { id: "all", name: "ทั้งหมด" },
  { id: "mattress-knowledge", name: "ความรู้เรื่องที่นอน" },
  { id: "sleep-health", name: "สุขภาพการนอน" },
  { id: "bedding-selection", name: "การเลือกเครื่องนอน" },
  { id: "sleep-tips", name: "Tips การนอน" },
];

export const ARTICLES_DATA: Article[] = [
  {
    id: "art-1",
    slug: "5-tips-choosing-mattress-back-pain",
    title: "5 เทคนิคเลือกที่นอนแก้ปวดหลังสำหรับคนวัย 30+",
    category: "sleep-health",
    categoryLabel: "สุขภาพการนอน",
    excerpt:
      "เจาะลึกวิธีเลือกความแน่นและนวัตกรรมยางพาราแท้ที่ช่วยรองรับแนวกระดูกสันหลังอย่างถูกต้องตามหลักสรีรวิทยา",
    author: "ซ้อเป้ Happiness Bedding",
    publishedAt: "15 กันยายน 2026",
    readingTime: "5 นาที",
    coverImage: "/images/healthcare.png",
    isFeatured: true,
    relatedArticleIds: ["art-2", "art-3", "art-4"],
    content: [
      {
        type: "paragraph",
        text: "อาการปวดหลังตื่นนอนเป็นหนึ่งในปัญหายอดฮิตที่รบกวนชีวิตประจำวันของคนไทยวัย 30 ขึ้นไปอย่างมาก หลายคนเข้าใจผิดว่าปวดหลังเกิดจากอายุน้อยลงหรือทำงานหนักเกินไป แต่ในความเป็นจริงแล้ว สาเหตุหลักกว่า 70% มักมาจาก 'ที่นอนที่ไม่ออกแบบตามสรีระ'"
      },
      {
        type: "heading",
        text: "1. เลือกที่นอนยืดหยุ่นสูง (High Density Natural Latex)"
      },
      {
        type: "paragraph",
        text: "ยางพาราธรรมชาติฉีดแท้ 100% มีคุณสมบัติในการคืนตัวและกระจายแรงกดทับได้อย่างสมบูรณ์แบบ แตกต่างจากฟองน้ำหรือโฟมทั่วไปที่เมื่อโดนน้ำหนักกดทับจะจมเป็นแอ่ง ยางพาราแท้จะยืดหยุ่นพยุงแนวกระดูกสันหลังให้อยู่ในแนวตรงธรรมชาติ"
      },
      {
        type: "quote",
        text: "การเลือกที่นอนที่ถูกต้อง ไม่ใช่การเลือกที่นอนที่นุ่มที่สุดหรือแข็งที่สุด แต่คือการเลือกที่นอนที่พยุงกระดูกสันหลังได้สมดุลที่สุด",
        author: "ซ้อเป้ Happiness Bedding"
      },
      {
        type: "heading",
        text: "2. เช็กระดับความแน่น (Firmness Level) ให้ตรงกับน้ำหนักตัว"
      },
      {
        type: "paragraph",
        text: "ความแน่นของที่นอนควรสอดคล้องกับน้ำหนักตัวและท่านอนประจำของคุณ:"
      },
      {
        type: "list",
        items: [
          "น้ำหนัก 45 - 65 กก.: เหมาะกับความแน่นระดับ Medium (นุ่มแน่นปานกลาง)",
          "น้ำหนัก 65 - 85 กก.: เหมาะกับความแน่นระดับ Medium-Firm (แน่นกำลังดี)",
          "น้ำหนัก 85 กก. ขึ้นไป: เหมาะกับความแน่นระดับ Firm (แน่นพิเศษเพื่อป้องกันแนวหลังจม)"
        ]
      },
      {
        type: "callout",
        text: "ข้อควรระวัง: ผู้สูงอายุหรือผู้ที่มีอาการหมอนรองกระดูกทับเส้นประสาท ไม่ควรนอนที่นอนนิ่มเด็ดขาด เพราะจะทำให้เชิงโครงบิดเบี้ยวตลอดคืน"
      },
      {
        type: "heading",
        text: "3. ระบบระบายอากาศต้องถ่ายเทได้ดี"
      },
      {
        type: "paragraph",
        text: "ประเทศไทยมีสภาพอากาศร้อนชื้น หากที่นอนอมความร้อน ร่างกายจะปรับอุณหภูมิโดยการพลิกตัวสลับไปมาตลอดคืนโดยที่เราไม่รู้ตัว ส่งผลให้กล้ามเนื้อหลังเกร็งตัวและตื่นมาเพลีย ที่นอนที่ดีต้องมีรูระบายอากาศตามธรรมชาติเพื่อระบายความชื้น"
      },
      {
        type: "divider"
      },
      {
        type: "heading",
        text: "สรุปคำแนะนำจากซ้อเป้"
      },
      {
        type: "paragraph",
        text: "หากคุณกำลังเผชิญปัญหานอนตื่นมาแล้วปวดเอว ปวดสะโพก ลองทดสอบเปลี่ยนมาใช้ที่นอนพยุงสรีระเสริมยางพาราแท้จาก Happiness Bedding ซึ่งเรามีบริการคำนวณสเปกที่นอนตามน้ำหนักและปัญหาสุขภาพเฉพาะบุคคลให้ฟรีค่ะ"
      }
    ]
  },
  {
    id: "art-2",
    slug: "natural-latex-vs-memory-foam",
    title: "ยางพาราพรีเมียม vs เมมโมรี่โฟม ต่างกันอย่างไร?",
    category: "mattress-knowledge",
    categoryLabel: "ความรู้เรื่องที่นอน",
    excerpt:
      "เปรียบเทียบจุดเด่น ข้อดี-ข้อเสียของวัสดุที่นอนยอดฮิต เพื่อให้คุณเลือกที่นอนที่ตอบโจทย์ความชอบและสภาพอากาศไทยได้ดีที่สุด",
    author: "ซ้อเป้ Happiness Bedding",
    publishedAt: "28 สิงหาคม 2026",
    readingTime: "6 นาที",
    coverImage: "/images/jasmine.png",
    isFeatured: false,
    relatedArticleIds: ["art-1", "art-3", "art-4"],
    content: [
      {
        type: "paragraph",
        text: "ผู้ซื้อที่นอนจำนวนมากมักสับสนระหว่าง 'ยางพาราแท้' และ 'เมมโมรี่โฟม' เนื่องจากทั้งคู่ต่างชูจุดเด่นเรื่องการลดแรงกดทับเหมือนกัน แต่ในแง่ของโครงสร้าง ฟีลลิ่งการนอน และความทนทานนั้นแตกต่างกันอย่างสิ้นเชิง"
      },
      {
        type: "heading",
        text: "เจาะลึก: ยางพาราพรีเมียม (Natural Latex)"
      },
      {
        type: "paragraph",
        text: "ผลิตจากน้ำยางพาราธรรมชาติฉีดขึ้นรูป มีรูระบายอากาศนับล้านจุดทั่วทั้งแผ่น สัมผัสมีความยืดหยุ่นเด้ง คืนตัวทันทีเมื่อยกน้ำหนักออก"
      },
      {
        type: "list",
        items: [
          "ข้อดี: ยืดหยุ่นสูง พลิกตัวง่าย ไม่สะสมความร้อน ปราศจากไรฝุ่นและเชื้อรา ทนทาน 10-15 ปี",
          "ข้อเสีย: น้ำหนักแผ่นยางพาราค่อนข้างหนัก เคลื่อนย้ายคนเดียวลำบาก"
        ]
      },
      {
        type: "heading",
        text: "เจาะลึก: เมมโมรี่โฟม (Memory Foam)"
      },
      {
        type: "paragraph",
        text: "เป็นวัสดุสังเคราะห์ปิโตรเคมีที่คิดค้นขึ้นโดย NASA คืนตัวช้า โอบรับตามอุณหภูมิและความร้อนของร่างกาย"
      },
      {
        type: "list",
        items: [
          "ข้อดี: ซับแรงกระแทกได้ดี ให้ความรู้สึกเหมือนถูกโอบอุ้ม",
          "ข้อเสีย: อมความร้อนสะสม พลิกตัวยากกว่า และเสื่อมสภาพไวกว่าในสภาพอากาศร้อนชื้น"
        ]
      },
      {
        type: "callout",
        text: "คำแนะนำ: สำหรับสภาพอากาศประเทศไทย ยางพาราแท้ 100% ตอบโจทย์เรื่องความเย็นสบายและความทนทานมากกว่าเมมโมรี่โฟม"
      }
    ]
  },
  {
    id: "art-3",
    slug: "how-to-maintain-mattress-10-years",
    title: "ดูแลที่นอนเพื่อสุขภาพอย่างไรให้ใช้งานได้นานเกิน 10 ปี",
    category: "bedding-selection",
    categoryLabel: "การเลือกเครื่องนอน",
    excerpt:
      "วิธีดูแล ทำความสะอาด และหมุนกลับด้านที่นอนที่ถูกต้อง ช่วยยืดอายุการใช้งานและป้องกันไรฝุ่นอย่างได้ผล",
    author: "ซ้อเป้ Happiness Bedding",
    publishedAt: "10 สิงหาคม 2026",
    readingTime: "4 นาที",
    coverImage: "/images/hero-bed.jpg",
    isFeatured: false,
    relatedArticleIds: ["art-1", "art-2", "art-4"],
    content: [
      {
        type: "paragraph",
        text: "ที่นอนเพื่อสุขภาพถือเป็นการลงทุนระยะยาวเพื่อสุขภาวะที่ดี การดูแลรักษาที่ถูกวิธีจะช่วยคงประสิทธิภาพในการพยุงแนวกระดูกสันหลังให้สมบูรณ์เหมือนวันแรกที่ซื้อ"
      },
      {
        type: "heading",
        text: "1. สลับหมุนทิศทางที่นอนทุก 3-6 เดือน"
      },
      {
        type: "paragraph",
        text: "การหมุนสลับทิศทางหัวเตียง-ปลายเตียง จะช่วยให้โครงสร้างสปริงและชั้นยางพารากระจายการรับน้ำหนักอย่างสม่ำเสมอ ป้องกันไม่ให้จุดเดิมถูกกดทับซ้ำๆ"
      },
      {
        type: "heading",
        text: "2. ใช้ผ้ารองกันน้ำและกันไรฝุ่นเสมอ"
      },
      {
        type: "paragraph",
        text: "คราบเหงื่อไคลและความชื้นขณะนอนหลับ คือสาเหตุหลักที่ทำลายชั้นโฟมภายในและกระตุ้นการเจริญเติบโตของไรฝุ่น ผ้ารองกันน้ำคุณภาพดีจะช่วยบล็อกคราบสะสมได้อย่างสม่ำเสมอ"
      },
      {
        type: "heading",
        text: "3. เปิดหน้าต่างถ่ายเทอากาศในห้องนอน"
      },
      {
        type: "paragraph",
        text: "ทุกครั้งที่ถอดผ้าปูซัก ควรเปิดหน้าต่างให้แสงแดดและลมธรรมชาติช่วยระบายความชื้นสะสมออกจากที่นอนประมาณ 1-2 ชั่วโมงก่อนปูผ้าปูผืนใหม่"
      }
    ]
  },
  {
    id: "art-4",
    slug: "best-sleeping-positions-spine-health",
    title: "นอนท่าไหนช่วยลดอาการปวดคอและหลังได้ดีที่สุด?",
    category: "sleep-tips",
    categoryLabel: "Tips การนอน",
    excerpt:
      "จัดท่านอนที่ถูกต้องตามหลักการแพทย์ พร้อมการเลือกหมอนและที่นอนที่สอดคล้องกับท่านอนของคุณ",
    author: "ซ้อเป้ Happiness Bedding",
    publishedAt: "02 กรกฎาคม 2026",
    readingTime: "5 นาที",
    coverImage: "/images/sor-pae.jpg",
    isFeatured: false,
    relatedArticleIds: ["art-1", "art-2", "art-3"],
    content: [
      {
        type: "paragraph",
        text: "ท่านอนขณะหลับสนิทมีผลโดยตรงต่อการจัดแนวกระดูกสันหลัง การทำงานของระบบหายใจ และการผ่อนคลายของกล้ามเนื้อต้นคอ"
      },
      {
        type: "heading",
        text: "ท่านอนหงาย: ท่านอนที่ดีที่สุดสำหรับแนวกระดูกสันหลัง"
      },
      {
        type: "paragraph",
        text: "ท่านอนหงายช่วยให้กระจายน้ำหนักตัวได้สม่ำเสมอที่สุด แนะนำให้สอดหมอนใบเล็กใต้ข้อพับเข่าเพื่อผ่อนคลายแรงกดบริเวณหลังล่าง"
      },
      {
        type: "heading",
        text: "ท่านอนตะแคง: ท่านอนยอดนิยมของคนไทย"
      },
      {
        type: "paragraph",
        text: "หากนอนตะแคง ควรกกหมอนข้างไว้ระหว่างเข่าทั้งสองข้าง เพื่อป้องกันไม่ให้สะโพกและเชิงโครงบิดเบี้ยว และเลือกหมอนหนุนที่มีความสูงพอดีกับช่วงไหล่"
      },
      {
        type: "callout",
        text: "ข้อแนะนำ: หลีกเลี่ยงท่านอนคว่ำเด็ดขาด เพราะจะทำให้กระดูกคอบิดเอียงผิดธรรมชาติและเกิดอาการคอเคล็ด"
      }
    ]
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES_DATA.find((a) => a.slug === slug);
}

export function getRelatedArticles(currentSlug: string, limit = 3): Article[] {
  const current = getArticleBySlug(currentSlug);
  if (current && current.relatedArticleIds) {
    const matched = ARTICLES_DATA.filter((a) => current.relatedArticleIds?.includes(a.id));
    if (matched.length >= limit) return matched.slice(0, limit);
  }
  return ARTICLES_DATA.filter((a) => a.slug !== currentSlug).slice(0, limit);
}
