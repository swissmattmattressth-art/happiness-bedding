const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://navclttypevacpwljygyy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hdmNsdHlwZXZhY3B3bGp5Z3l5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MjcwNTIsImV4cCI6MjA5NDEwMzA1Mn0.Q-s3tr9yu3MctDfwEbvrst1wh7hi40Kt64MdnNsWiRE';

const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
    console.log('Checking connection...');
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log('Success! Found ' + data.length + ' products.');
        console.log(JSON.stringify(data, null, 2));
    }
}

check();
