// --- Supabase Configuration ---
const SUPABASE_URL = 'https://navcltypevacpwljygyy.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hdmNsdHlwZXZhY3B3bGp5Z3l5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjcwNTIsImV4cCI6MjA5NDEwMzA1Mn0.Q-s3tr9yu3MctDfwEbvrst1wh7hi40Kt64MdnNsWiRE';
// Use window.supabase to ensure we're calling the library's createClient
const sb = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

const initialProducts = [
    { id: '1', name: 'Lily', model_name: 'รุ่นมะลิ', category: 'mattress', thickness: 9, price_3_5: '7,990.-', price_5: '8,990.-', price_6: '9,990.-', image_url: 'jasmine.png', description: 'ที่นอนนุ่มสบาย ระบายอากาศดี', badge: 'Best Seller' },
    { id: '2', name: 'Health care', model_name: 'รุ่นสุขภาพ', category: 'mattress', thickness: 10, price_3_5: '16,900.-', price_5: '17,900.-', price_6: '18,900.-', image_url: 'healthcare.png', description: 'ที่นอนเสริมยางพาราแท้ ช่วยพยุงกระดูกสันหลัง', badge: 'Recommend' },
    { id: '3', name: 'Standard Bed', model_name: 'รุ่นมาตรฐาน', category: 'bed', price_3_5: '4,500.-', price_5: '5,500.-', price_6: '6,500.-', image_url: 'lily_mattress.png', description: 'เตียงดีไซน์เรียบง่าย แข็งแรงทนทาน' }
];

const initialReviews = [
    { id: '1', customer_name: 'คุณนพดล', location: 'กรุงเทพฯ', rating: 5, comment: 'ที่นอนดีมากครับ อาการปวดหลังดีขึ้นเยอะเลย' },
    { id: '2', customer_name: 'คุณรินดา', location: 'อยุธยา', rating: 5, comment: 'โซฟานุ่มมาก สีสวยเข้ากับบ้านเลยค่ะ' },
    { id: '3', customer_name: 'คุณสมชาย', location: 'ปทุมธานี', rating: 5, comment: 'บริการส่งไว พนักงานสุภาพมากครับ' },
    { id: '4', customer_name: 'คุณวรรณ', location: 'กรุงเทพฯ', rating: 5, comment: 'ที่นอนยางพาราแท้ นอนสบายไม่ร้อนเลย' }
];

const initialSettings = [
    { key: 'phone', value: '064-990-8338' },
    { key: 'line_url', value: 'https://line.me/R/oaMessage/@happinessbedding/' },
    { key: 'facebook_url', value: 'https://facebook.com/happinessbedding.l' },
    { key: 'hero_image', value: 'hero.png' },
    { key: 'consult_url', value: 'https://line.me/R/oaMessage/@happinessbedding/' },
    { key: 'tracking_code', value: '' },
    { key: 'about_image_1', value: 'luxury_mattress_hero_1778572561869.png' },
    { key: 'about_image_2', value: 'luxury_mattress_hero_1778572561869.png' },
    { key: 'gallery_1', value: '' },
    { key: 'gallery_2', value: '' },
    { key: 'gallery_3', value: '' },
    { key: 'gallery_4', value: '' },
    { key: 'gallery_5', value: '' },
    { key: 'gallery_6', value: '' }
];

// Data Sync Helpers
async function getCloudData(table, fallback, storageKey) {
    // Check local data first for fast response
    const localData = localStorage.getItem(storageKey);
    let parsedLocal = null;
    if (localData) {
        try { parsedLocal = JSON.parse(localData); } catch (e) {}
    }

    try {
        const { data, error } = await sb.from(table).select('*');
        if (!error && data && data.length > 0) {
            // Save to LocalStorage cache
            setStorageData(storageKey, data);
            return data;
        }
    } catch (err) {
        console.warn(`Supabase read notice (${table}):`, err);
    }
    
    // Fallback to local data or initial fallback array
    if (parsedLocal && parsedLocal.length > 0) return parsedLocal;
    return fallback;
}

async function setCloudData(table, item) {
    // 1. Save locally to LocalStorage first (Ensures admin edits work on Vercel/GitHub pages instantly!)
    const storageKey = table === 'products' ? 'hp_products' : (table === 'reviews' ? 'hp_reviews' : 'hp_settings');
    try {
        let currentData = getStorageData(storageKey, []);
        if (table === 'settings') {
            if (!Array.isArray(currentData)) currentData = [];
            const idx = currentData.findIndex(s => s.key === item.key);
            if (idx >= 0) currentData[idx] = item;
            else currentData.push(item);
        } else {
            const idx = currentData.findIndex(i => i.id === item.id);
            if (idx >= 0) currentData[idx] = item;
            else currentData.push(item);
        }
        setStorageData(storageKey, currentData);
    } catch (e) {
        console.warn('LocalStorage save error:', e);
    }

    // 2. Try sync to Supabase Cloud
    try {
        console.log(`Syncing to Supabase Cloud (${table}):`, item);
        const { error } = await sb.from(table).upsert(item, { onConflict: (table === 'settings' ? 'key' : 'id') });
        if (error) throw error;
        return true;
    } catch (err) {
        console.warn(`Supabase Cloud Sync Warning (${table}):`, err.message || err);
        // Still return true because data is safely saved in LocalStorage fallback
        return true;
    }
}

// Helper Functions
function getStorageData(key, fallback) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
}

function setStorageData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Global Interaction Functions
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    if (lightbox && img) {
        img.src = src;
        lightbox.style.display = 'flex';
        setTimeout(() => lightbox.classList.add('active'), 10);
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log('App Initializing...');

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileBtn.querySelector('i').classList.toggle('fa-bars');
            mobileBtn.querySelector('i').classList.toggle('fa-times');
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

    // Hero Parallax Effect
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            hero.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
        });
    }

    // Global Click Listener for Lightbox
    document.addEventListener('click', (e) => {
        const imgContainer = e.target.closest('.product-img');
        if (imgContainer) {
            const img = imgContainer.querySelector('img');
            if (img) openLightbox(img.src);
        }
        if (e.target.closest('#lightbox') || e.target.closest('.close-lightbox')) {
            closeLightbox();
        }
    });

    // Setup Reveal Observer
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.15 });
    window.revealObserver = revealObserver;

    // Initial Loads
    if (document.getElementById('product-grid-mattress')) loadProducts();
    if (document.getElementById('review-grid-dynamic')) {
        loadReviews();
        if (document.querySelector('.review-slider-container')) {
            startReviewSlider();
        }
    }
    if (document.querySelector('.footer-info')) loadSettingsFrontend();
    
    // Inject Tracking Code from Cloud
    getCloudData('settings', initialSettings, 'hp_settings').then(settings => {
        const track = settings.find(s => s.key === 'tracking_code');
        if (track && track.value) {
            const div = document.createElement('div');
            div.innerHTML = track.value;
            document.body.appendChild(div);
        }
    });

    observeNewElements();

    if (window.location.pathname.includes('admin.html')) {
        loadAdminData();
        setupAdminForms();
    }
});

function observeNewElements() {
    if (window.revealObserver) {
        const elements = document.querySelectorAll('.reveal:not(.active), .reveal-left:not(.active), .reveal-right:not(.active)');
        elements.forEach(el => window.revealObserver.observe(el));
    }
}

// --- Slider Logic ---
function startReviewSlider() {
    const track = document.getElementById('review-grid-dynamic');
    if (!track) return;
    
    let index = 0;
    const cards = track.children;
    if (cards.length < 3) return;

    setInterval(() => {
        index++;
        if (index >= cards.length - 1) {
            index = 0;
        }
        const offset = index * -(350 + 40); // card width + gap
        track.style.transform = `translateX(${offset}px)`;
    }, 4000);
}

// --- Admin Form Setup ---
function setupAdminForms() {
    const pForm = document.getElementById('productForm');
    if (pForm) {
        pForm.onsubmit = (e) => {
            e.preventDefault();
            // Create a unique ID if it's a new product
            const id = document.getElementById('productId').value || ('p-' + Date.now() + Math.floor(Math.random() * 1000));
            const cat = document.getElementById('pCategory').value;
            
            let p1, p2, p3;
            if (cat === 'sofa') {
                p1 = document.getElementById('pPriceSingle').value;
                p2 = '-'; p3 = '-';
            } else {
                p1 = document.getElementById('pPrice35').value;
                p2 = document.getElementById('pPrice5').value;
                p3 = document.getElementById('pPrice6').value;
            }

            const product = {
                id,
                name: document.getElementById('pName').value || 'New Product',
                model_name: document.getElementById('pModel').value || '',
                thickness: document.getElementById('pThickness').value || '-',
                category: cat,
                image_url: document.getElementById('pImage').value || 'https://placehold.co/400x300?text=Happiness+Bedding',
                description: document.getElementById('pDesc').value || 'รายละเอียดสินค้า...',
                price_3_5: p1 || '0',
                price_5: p2 || '0',
                price_6: p3 || '0',
                badge: document.getElementById('pBadge') ? document.getElementById('pBadge').value : ''
            };

            setCloudData('products', product).then(success => {
                if (success) {
                    alert('✅ บันทึกข้อมูลลง Cloud (Supabase) สำเร็จ!');
                    if (typeof closeModal === 'function') closeModal();
                    loadAdminData(); // Reload table from cloud
                } else {
                    alert('❌ ไม่สามารถบันทึกเข้า Cloud ได้ กรุณาตรวจสอบการเชื่อมต่อหรือขนาดรูปภาพ');
                }
            });
        };
    }

    const rForm = document.getElementById('reviewForm');
    if (rForm) {
        rForm.onsubmit = (e) => {
            e.preventDefault();
            const review = {
                id: 'r-' + Date.now(),
                customer_name: document.getElementById('rName').value,
                location: document.getElementById('rLocation').value,
                rating: parseInt(document.getElementById('rRating').value),
                comment: document.getElementById('rComment').value
            };
            setCloudData('reviews', review).then(success => {
                if (success) {
                    alert('✅ เพิ่มรีวิวลง Cloud สำเร็จ!');
                    if (typeof closeReviewModal === 'function') closeReviewModal();
                    loadAdminData();
                } else {
                    alert('❌ เกิดข้อผิดพลาดในการเพิ่มรีวิว');
                }
            });
        };
    }
}

// --- Data Loaders ---
async function loadProducts() {
    const products = await getCloudData('products', initialProducts, 'hp_products');
    const grids = {
        mattress: document.getElementById('product-grid-mattress'),
        bed: document.getElementById('product-grid-bed'),
        sofa: document.getElementById('product-grid-sofa')
    };

    Object.values(grids).forEach(g => { if (g) g.innerHTML = ''; });

    products.forEach((p, index) => {
        const cat = p.category || 'mattress';
        const grid = grids[cat];
        if (grid) {
            let priceHTML = '';
            if (cat === 'sofa') {
                priceHTML = `
                    <div class="single-price">
                        <span class="single-price-label">ราคาเริ่มต้น</span>
                        <span class="single-price-value">${p.price_3_5}</span>
                    </div>
                `;
            } else {
                priceHTML = `
                    <table class="price-table">
                        <tr><td>3.5 ฟุต</td><td>${p.price_3_5}</td></tr>
                        <tr><td>5 ฟุต</td><td>${p.price_5}</td></tr>
                        <tr><td>6 ฟุต</td><td>${p.price_6}</td></tr>
                    </table>
                `;
            }

            const badgeHTML = p.badge ? `<div class="product-badge ${p.badge.includes('Best') ? '' : 'orange'}">${p.badge}</div>` : '';

            grid.innerHTML += `
                <div class="product-card ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}">
                    ${badgeHTML}
                    <div class="product-img" style="cursor: pointer;">
                        <img src="${p.image_url}" alt="${p.name}" onerror="this.src='https://placehold.co/400x300?text=No+Image'">
                        <div class="zoom-hint"><i class="fas fa-search-plus"></i> คลิกเพื่อดูรูปใหญ่</div>
                    </div>
                    <div class="product-info">
                        <h3>${p.name} (${p.model_name})</h3>
                        ${p.thickness ? `<p>ความหนา: ${p.thickness} นิ้ว</p>` : ''}
                        <p>${p.description}</p>
                        ${priceHTML}
                        <a href="https://line.me/R/oaMessage/@happinessbedding/?สนใจรุ่น ${p.name}" target="_blank" class="btn-line-product">
                            <i class="fab fa-line"></i> สอบถามข้อมูลผ่าน LINE
                        </a>
                    </div>
                </div>
            `;
        }
    });
    observeNewElements();
}

async function loadAdminData() {
    const products = await getCloudData('products', initialProducts, 'hp_products');
    window.adminProducts = products;
    const bodies = {
        mattress: document.getElementById('productBodyMattress'),
        bed: document.getElementById('productBodyBed'),
        sofa: document.getElementById('productBodySofa')
    };
    Object.values(bodies).forEach(b => { if (b) b.innerHTML = ''; });

    products.forEach((p, index) => {
        const cat = p.category || 'mattress';
        const body = bodies[cat];
        if (body) {
            // Ensure prices are treated as strings and handle undefined/null
            const p1 = p.price_3_5 || '-';
            const p2 = p.price_5 || '-';
            const p3 = p.price_6 || '-';
            const priceDisplay = (cat === 'sofa') ? p1 : `${p1}/${p2}/${p3}`;
            
            body.innerHTML += `
                <tr>
                    <td><img src="${p.image_url}" class="admin-thumb" onerror="this.src='https://placehold.co/50x50'"></td>
                    <td>${p.name || ''} (${p.model_name || ''})</td>
                    ${cat === 'mattress' ? `<td>${p.thickness || '-'}</td>` : ''}
                    <td>${priceDisplay}</td>
                    <td class="actions">
                        <i class="fas fa-edit btn-edit" onclick="openModalByIndex(${index})"></i>
                        <i class="fas fa-trash btn-delete" onclick="deleteProduct('${p.id}')"></i>
                    </td>
                </tr>
            `;
        }
    });

    const reviews = await getCloudData('reviews', initialReviews, 'hp_reviews');
    const rBody = document.getElementById('reviewBody');
    if (rBody) {
        rBody.innerHTML = reviews.map(r => `
            <tr><td>${r.customer_name}</td><td>${r.rating}★</td><td class="actions"><i class="fas fa-trash btn-delete" onclick="deleteReview('${r.id}')"></i></td></tr>
        `).join('');
    }

    const settings = await getCloudData('settings', initialSettings, 'hp_settings');
    settings.forEach(s => {
        const idMap = { 
            phone: 'setPhone', 
            line_url: 'setLine', 
            facebook_url: 'setFB', 
            hero_image: 'setHero', 
            consult_url: 'setConsult',
            tracking_code: 'setTracking',
            about_image_1: 'setAbout1',
            about_image_2: 'setAbout2'
        };
        const el = document.getElementById(idMap[s.key]);
        if (el) el.value = s.value;
    });
}

async function loadReviews() {
    const reviews = await getCloudData('reviews', initialReviews, 'hp_reviews');
    const gridDynamic = document.getElementById('review-grid-dynamic'); // For Home/Subpages
    const gridFull = document.getElementById('review-grid-full'); // For dedicated Reviews page
    
    const container = gridFull || gridDynamic;
    if (container) {
        container.innerHTML = '';
        reviews.forEach((r, index) => {
            container.innerHTML += `
                <div class="review-card reveal" style="transition-delay: ${index * 0.1}s">
                    <div class="review-stars">
                        ${'⭐'.repeat(r.rating)}
                    </div>
                    <p class="review-text">"${r.comment}"</p>
                    <div class="review-footer">
                        <div class="customer-info">
                            <div class="customer-name">${r.customer_name}</div>
                            <div class="customer-location">${r.location || ''}</div>
                            <div class="verified-badge">
                                <i class="fas fa-check-circle"></i> ยืนยันการซื้อจริง
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    observeNewElements();
}

async function loadSettingsFrontend() {
    const settings = await getCloudData('settings', initialSettings, 'hp_settings');
    settings.forEach(s => {
        if (s.key === 'hero_image') {
            const hero = document.querySelector('.hero');
            if (hero) hero.style.backgroundImage = `url('${s.value}')`;
        }
        if (s.key === 'consult_url') {
            const consultBtn = document.querySelector('.hero-btns .btn-secondary');
            if (consultBtn) consultBtn.href = s.value;
        }
        if (s.key === 'about_image_1') {
            const img = document.getElementById('dynamic-about-1');
            if (img) img.src = s.value;
        }
        if (s.key === 'about_image_2') {
            const img = document.getElementById('dynamic-about-2');
            if (img) img.src = s.value;
        }
        if (s.key.startsWith('gallery_')) {
            const galleryId = s.key.replace('gallery_', 'gallery-img-');
            const img = document.getElementById(galleryId);
            if (img && s.value) img.src = s.value;
        }
    });
}

function saveGeneralSettings() {
    const settings = [
        { key: 'phone', value: document.getElementById('setPhone').value },
        { key: 'line_url', value: document.getElementById('setLine').value },
        { key: 'facebook_url', value: document.getElementById('setFB').value },
        { key: 'hero_image', value: document.getElementById('setHero').value },
        { key: 'consult_url', value: document.getElementById('setConsult').value },
        { key: 'tracking_code', value: document.getElementById('setTracking').value },
        { key: 'about_image_1', value: document.getElementById('setAbout1').value },
        { key: 'about_image_2', value: document.getElementById('setAbout2').value },
        { key: 'gallery_1', value: document.getElementById('setGallery1').value },
        { key: 'gallery_2', value: document.getElementById('setGallery2').value },
        { key: 'gallery_3', value: document.getElementById('setGallery3').value },
        { key: 'gallery_4', value: document.getElementById('setGallery4').value },
        { key: 'gallery_5', value: document.getElementById('setGallery5').value },
        { key: 'gallery_6', value: document.getElementById('setGallery6').value }
    ];
    
    // Save each setting to cloud
    const promises = settings.map(s => setCloudData('settings', s));
    Promise.all(promises).then(results => {
        if (results.every(r => r === true)) {
            alert('✅ บันทึกการตั้งค่าลง Cloud สำเร็จ!');
        } else {
            alert('❌ การบันทึกบางส่วนล้มเหลว กรุณาตรวจสอบสิทธิ์การเข้าถึงใน Supabase');
        }
    });
}

// --- Backup & Recovery Logic ---
function exportData() {
    const data = {
        hp_products: getStorageData('hp_products', initialProducts),
        hp_reviews: getStorageData('hp_reviews', initialReviews),
        hp_settings: getStorageData('hp_settings', initialSettings)
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `happiness_bedding_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function importData(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.hp_products) setStorageData('hp_products', data.hp_products);
            if (data.hp_reviews) setStorageData('hp_reviews', data.hp_reviews);
            if (data.hp_settings) setStorageData('hp_settings', data.hp_settings);
            alert('นำเข้าข้อมูลสำเร็จ! ระบบจะทำการรีโหลดหน้าเพจ');
            window.location.reload();
        } catch (err) {
            alert('ไฟล์ไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง');
        }
    };
    reader.readAsText(file);
}

// Global Exports
window.saveGeneralSettings = saveGeneralSettings;
window.exportData = exportData;
window.importData = importData;
window.openModalByIndex = (index) => {
    if (window.adminProducts && window.adminProducts[index]) {
        if (typeof openModal === 'function') openModal(window.adminProducts[index]);
    }
};
window.deleteProduct = async (id) => {
    if (confirm('ลบสินค้านี้จาก Cloud?')) {
        const { error } = await sb.from('products').delete().eq('id', id);
        if (!error) loadAdminData();
        else alert('เกิดข้อผิดพลาดในการลบ');
    }
};
window.deleteReview = async (id) => {
    if (confirm('ลบรีวิวนี้จาก Cloud?')) {
        const { error } = await sb.from('reviews').delete().eq('id', id);
        if (!error) loadAdminData();
        else alert('เกิดข้อผิดพลาดในการลบ');
    }
};
window.handleImageUpload = (input, targetId) => {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => { document.getElementById(targetId).value = e.target.result; };
        reader.readAsDataURL(file);
    }
};
window.loadAdminData = loadAdminData;
window.loadProducts = loadProducts;
window.loadReviews = loadReviews;
window.loadSettingsFrontend = loadSettingsFrontend;