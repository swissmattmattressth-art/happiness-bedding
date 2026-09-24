
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://navcltypevacpwljygyy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hdmNsdHlwZXZhY3B3bGp5Z3l5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjcwNTIsImV4cCI6MjA5NDEwMzA1Mn0.Q-s3tr9yu3MctDfwEbvrst1wh7hi40Kt64MdnNsWiRE';
const supabase = createClient(supabaseUrl, supabaseKey);

const reviews = [
    {
        customer_name: 'คุณวิมลลักษณ์',
        rating: 5,
        comment: 'สั่งที่นอนจากซ้อเป้มาใช้ได้ 2 เดือนแล้วค่ะ อาการปวดหลังเรื้อรังดีขึ้นมากจริงๆ ที่นอนนุ่มแน่นกำลังดี ไม่ยุบตัวเลยค่ะ ประทับใจมาก',
        image_url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=400'
    },
    {
        customer_name: 'คุณธนพล (ระยอง)',
        rating: 5,
        comment: 'ส่งเร็วมากครับ พนักงานสุภาพ ที่นอน Jasmine นอนสบายมากครับ ไม่นุ่มเกินไป รองรับน้ำหนักได้ดีมาก แฟนชมว่านอนหลับลึกขึ้นเยอะเลยครับ',
        image_url: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=400'
    },
    {
        customer_name: 'คุณสิรินธร',
        rating: 5,
        comment: 'ตอนแรกกังวลเรื่องราคา แต่พอได้ของมาบอกเลยว่าคุ้มค่ามากค่ะ วัสดุพรีเมียมจริงๆ งานเย็บประณีตมาก แนะนำเลยค่ะสำหรับใครที่หาที่นอนเพื่อสุขภาพ',
        image_url: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=400'
    },
    {
        customer_name: 'คุณมานพ',
        rating: 5,
        comment: 'พึ่งเคยสั่งที่นอนสั่งทำครั้งแรก ซ้อเป้ให้คำแนะนำดีมากครับ อธิบายชัดเจนจนได้ที่นอนที่เหมาะกับสรีระผมจริงๆ นอนแล้วไม่ปวดเอวเลยครับ',
        image_url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400'
    },
    {
        customer_name: 'คุณจริยา',
        rating: 5,
        comment: 'ที่นอนสวยหรูมากค่ะ นอนสบายสมกับเป็นงานโรงงานมืออาชีพจริงๆ ประทับใจการดูแลที่เป็นกันเองของแบรนด์นี้มากค่ะ เหมือนสั่งของจากคนในครอบครัว',
        image_url: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=400'
    }
];

async function upload() {
    console.log('🚀 Starting upload...');
    for (const review of reviews) {
        const { data, error } = await supabase
            .from('reviews')
            .insert([review]);
        
        if (error) {
            console.error(`❌ Error inserting ${review.customer_name}:`, error.message);
        } else {
            console.log(`✅ Uploaded review from ${review.customer_name}`);
        }
    }
    console.log('🎉 Done!');
}

upload();
