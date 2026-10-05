# Happiness Bedding - Official Website

เว็บไซต์หลักสำหรับ **Happiness Bedding (แฮปปี้เนส เบดดิ้ง)** โรงงานผู้ผลิตที่นอนเพื่อสุขภาพ เตียงดีไซน์ โซฟาปรับไฟฟ้า หมอน และเครื่องนอนคุณภาพโดยซ้อเป้

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript
- **Deployment**: Vercel / GitHub Pages / Node Server

---

## 📁 Project Structure

```text
happiness-bedding-app/
├── app/
│   ├── about/          # หน้าเกี่ยวกับเรา (About Us)
│   ├── articles/       # คลังบทความ (Articles & Blog)
│   │   └── [slug]/     # หน้ารายละเอียดบทความ (Article Detail)
│   ├── products/       # แคตตาล็อกสินค้า (Products Catalog)
│   │   └── [slug]/     # หน้ารายละเอียดสินค้า (Product Detail)
│   ├── reviews/        # รีวิวจากลูกค้าจริง (Customer Reviews)
│   ├── not-found.tsx   # หน้า 404 Custom Error
│   ├── sitemap.ts      # Sitemap XML Generator
│   ├── robots.ts       # Robots.txt Generator
│   ├── layout.tsx      # Root Layout & Global Metadata
│   └── page.tsx        # หน้าแรก (Homepage)
├── components/         # Reusable UI Components
├── config/             # Centralized Configuration (contact.ts)
├── data/               # Centralized Datasets (products, articles, reviews)
└── public/             # Static Assets & WebP Images
```

---

## 🛠️ Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Production Build**:
   ```bash
   npm run build
   ```

4. **Start Production Server**:
   ```bash
   npm run start
   ```

---

## 🌐 Vercel Deployment

1. Push code to your GitHub repository.
2. Import project into Vercel Dashboard.
3. Framework Preset: **Next.js**
4. Click **Deploy**.

---

## 📞 Contact Information

Centralized configuration managed in `config/contact.ts`.
