-- 1. Create Products Table
CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    model_name TEXT,
    thickness TEXT,
    category TEXT,
    description TEXT,
    image_url TEXT,
    price_3_5 TEXT,
    price_5 TEXT,
    price_6 TEXT,
    badge TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create Reviews Table
CREATE TABLE IF NOT EXISTS reviews (
    id TEXT PRIMARY KEY,
    customer_name TEXT,
    location TEXT,
    rating INTEGER,
    comment TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Create Settings Table
CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Create Metadata Logs Table
CREATE TABLE IF NOT EXISTS metadata_logs (
    id BIGSERIAL PRIMARY KEY,
    module TEXT NOT NULL,
    action TEXT NOT NULL,
    record_id TEXT,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. Create Inventory Table
CREATE TABLE IF NOT EXISTS inventory (
    id TEXT PRIMARY KEY,
    product_id TEXT REFERENCES products(id),
    quantity_on_hand INTEGER DEFAULT 0,
    min_stock_level INTEGER DEFAULT 5,
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 8. Create Commissions Table
CREATE TABLE IF NOT EXISTS commissions (
    id BIGSERIAL PRIMARY KEY,
    order_id TEXT REFERENCES orders(id),
    staff_name TEXT NOT NULL,
    commission_amount DECIMAL(10, 2) NOT NULL,
    status TEXT DEFAULT 'pending', -- pending, paid
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 9. Disable RLS (Row Level Security) 
ALTER TABLE products DISABLE ROW LEVEL SECURITY;
ALTER TABLE reviews DISABLE ROW LEVEL SECURITY;
ALTER TABLE settings DISABLE ROW LEVEL SECURITY;
ALTER TABLE orders DISABLE ROW LEVEL SECURITY;
ALTER TABLE expenses DISABLE ROW LEVEL SECURITY;
ALTER TABLE metadata_logs DISABLE ROW LEVEL SECURITY;
ALTER TABLE inventory DISABLE ROW LEVEL SECURITY;
ALTER TABLE commissions DISABLE ROW LEVEL SECURITY;
