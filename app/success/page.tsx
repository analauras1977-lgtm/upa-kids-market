'use client';

import { FormEvent, useState } from 'react';

const SUPABASE_URL = 'https://sixwopmpqrdrupkwpjpb.supabase.co';
const SUPABASE_KEY = 'sb_publishable_uIaYo95VHuiiGQJ1Ut2rFg_HzlRVd9R';

const categories = [
  'Parties & Entertainment',
  'Sports & Classes',
  'Babysitting & Care',
  'Education & Tutors',
  'Camps & Activities',
  'Toys & Gifts',
  'Health & Wellness',
  'Family Experiences',
  'Other',
];

export default function SuccessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');

    const form = new FormData(event.currentTarget);
    const payload = {
      business_name: String(form.get('business_name') || '').trim(),
      contact_name: String(form.get('contact_name') || '').trim(),
      email: String(form.get('email') || '').trim(),
      phone: String(form.get('phone') || '').trim() || null,
      website: String(form.get('website') || '').trim() || null,
      instagram: String(form.get('instagram') || '').trim() || null,
      city: String(form.get('city') || '').trim() || null,
      state: String(form.get('state') || '').trim() || null,
      country: String(form.get('country') || 'USA').trim(),
      seller_type: String(form.get('seller_type') || '').trim(),
      category: String(form.get('category') || '').trim(),
      description: String(form.get('description') || '').trim(),
      product_service_details: String(form.get('product_service_details') || '').trim() || null,
      status: 'pending_review',
    };

    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/marketplace_sellers`, {
        method: 'POST',
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Could not save your profile.');
      setSubmitted(true);
    } catch {
      setError('We could not save your profile. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <main style={{minHeight:'100vh',display:'grid',placeItems:'center',padding:32,background:'#f7f7fb',fontFamily:'Arial, Helvetica, sans-serif'}}>
        <section style={{maxWidth:680,background:'white',border:'1px solid #e5e8ee',borderRadius:24,padding:40,textAlign:'center',boxShadow:'0 18px 50px rgba(31,36,48,.09)'}}>
          <div style={{fontSize:52}}>✓</div>
          <h1 style={{fontSize:36,margin:'8px 0 12px',color:'#172033'}}>Your seller profile was submitted</h1>
          <p style={{fontSize:18,lineHeight:1.6,color:'#687180'}}>We received your business information. Your profile is now pending review before it is published in UPA Kids Market.</p>
          <a href="/" style={{display:'inline-block',marginTop:18,padding:'13px 20px',background:'#5B3C81',color:'white',borderRadius:12,textDecoration:'none',fontWeight:800}}>Back to UPA Kids Market</a>
        </section>
      </main>
    );
  }

  const inputStyle = {width:'100%',padding:'12px 14px',border:'1px solid #dfe3ea',borderRadius:10,fontSize:15,boxSizing:'border-box' as const};
  const labelStyle = {display:'grid',gap:7,fontWeight:700,color:'#263247'};

  return (
    <main style={{minHeight:'100vh',padding:'36px 18px',background:'#f7f7fb',fontFamily:'Arial, Helvetica, sans-serif'}}>
      <section style={{maxWidth:820,margin:'0 auto',background:'white',border:'1px solid #e5e8ee',borderRadius:24,padding:'32px',boxShadow:'0 18px 50px rgba(31,36,48,.09)'}}>
        <div style={{textAlign:'center',marginBottom:28}}>
          <div style={{fontSize:48}}>✓</div>
          <h1 style={{fontSize:36,margin:'6px 0 10px',color:'#172033'}}>Payment received</h1>
          <p style={{fontSize:17,lineHeight:1.6,color:'#687180',maxWidth:650,margin:'0 auto'}}>Thank you for joining UPA Kids Market. Complete your seller profile below so we can review and publish your business.</p>
        </div>

        <form onSubmit={handleSubmit} style={{display:'grid',gap:18}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:16}}>
            <label style={labelStyle}>Business name<input required name="business_name" style={inputStyle} /></label>
            <label style={labelStyle}>Contact name<input required name="contact_name" style={inputStyle} /></label>
            <label style={labelStyle}>Email<input required type="email" name="email" style={inputStyle} /></label>
            <label style={labelStyle}>Phone<input name="phone" style={inputStyle} /></label>
            <label style={labelStyle}>Website<input name="website" placeholder="https://" style={inputStyle} /></label>
            <label style={labelStyle}>Instagram<input name="instagram" placeholder="@yourbusiness" style={inputStyle} /></label>
            <label style={labelStyle}>City<input name="city" style={inputStyle} /></label>
            <label style={labelStyle}>State<input name="state" style={inputStyle} /></label>
            <label style={labelStyle}>Country<input name="country" defaultValue="USA" style={inputStyle} /></label>
            <label style={labelStyle}>What do you sell?
              <select required name="seller_type" style={inputStyle} defaultValue="">
                <option value="" disabled>Select one</option>
                <option value="products">Products</option>
                <option value="services">Services</option>
                <option value="products_and_services">Products + Services</option>
              </select>
            </label>
            <label style={labelStyle}>Main category
              <select required name="category" style={inputStyle} defaultValue="">
                <option value="" disabled>Select category</option>
                {categories.map((category) => <option key={category}>{category}</option>)}
              </select>
            </label>
          </div>

          <label style={labelStyle}>Business description
            <textarea required name="description" rows={4} placeholder="Tell families what you offer, who you serve, and what makes your business different." style={{...inputStyle,resize:'vertical'}} />
          </label>
          <label style={labelStyle}>Products / services you want to list
            <textarea name="product_service_details" rows={4} placeholder="List your main products, services, classes, packages or experiences." style={{...inputStyle,resize:'vertical'}} />
          </label>

          {error && <div style={{padding:12,borderRadius:10,background:'#fff1f1',color:'#a82424',fontWeight:700}}>{error}</div>}

          <button disabled={loading} type="submit" style={{border:0,borderRadius:12,padding:'14px 20px',background:'#5B3C81',color:'white',fontWeight:800,fontSize:16,cursor:'pointer'}}>{loading ? 'Saving...' : 'Submit seller profile'}</button>
          <p style={{margin:0,textAlign:'center',fontSize:13,color:'#7a8391'}}>Profiles are reviewed before appearing publicly in UPA Kids Market.</p>
        </form>
      </section>
    </main>
  );
}
