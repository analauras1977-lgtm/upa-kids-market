export default function SuccessPage() {
  return (
    <main style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:"32px",background:"#f7f7fb",fontFamily:"Arial, Helvetica, sans-serif"}}>
      <section style={{maxWidth:640,background:"white",border:"1px solid #e5e8ee",borderRadius:24,padding:40,textAlign:"center",boxShadow:"0 18px 50px rgba(31,36,48,.09)"}}>
        <div style={{fontSize:52}}>✓</div>
        <h1 style={{fontSize:38,margin:"8px 0 12px",color:"#172033"}}>Payment received</h1>
        <p style={{fontSize:18,lineHeight:1.6,color:"#687180"}}>Thank you for joining UPA Kids Market. Your seller registration payment was completed through Stripe.</p>
        <p style={{lineHeight:1.6,color:"#687180"}}>The next onboarding step will collect your business profile, categories, location, contact information and listings.</p>
        <a href="/" style={{display:"inline-block",marginTop:18,padding:"13px 20px",background:"#5B3C81",color:"white",borderRadius:12,textDecoration:"none",fontWeight:800}}>Back to UPA Kids Market</a>
      </section>
    </main>
  );
}
