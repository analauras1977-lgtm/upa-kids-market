const STRIPE_LINK = "https://buy.stripe.com/test_aFadRa1iPcTI9lk8Uv14400";

const categories = [
  "Parties & Entertainment",
  "Sports & Classes",
  "Babysitting & Care",
  "Education & Tutors",
  "Camps & Activities",
  "Toys & Gifts",
  "Health & Wellness",
  "Family Experiences",
];

const featured = [
  { name: "UPA Entertainment", text: "Custom kids parties, games, face painting, sports and complete event production.", url: "https://upaentertainment.com" },
  { name: "UPA Care", text: "Find babysitters and caregivers through the UPA network.", url: "https://babysittingupa.com" },
  { name: "UPA Events", text: "Corporate, social and adult entertainment, production and live experiences.", url: "https://upaevents.com" },
];

const sampleListings = [
  ["Kids Soccer Coach", "Miami, FL", "Sports"],
  ["Birthday Party Decor", "Aventura, FL", "Parties"],
  ["Family Photographer", "Miami Beach, FL", "Services"],
  ["STEM Activity Box", "Ships in USA", "Products"],
  ["Private Swim Lessons", "North Miami, FL", "Classes"],
  ["Kids Art Workshop", "Miami, FL", "Activities"],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="UPA Kids Market home">
          <span className="brandMark">UPA</span>
          <span>Kids Market</span>
        </a>
        <nav>
          <a href="#categories">Categories</a>
          <a href="#featured">Featured</a>
          <a href="#sell">Sell</a>
        </nav>
        <a className="smallCta" href={STRIPE_LINK} target="_blank" rel="noreferrer">Open your store · $5</a>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <div className="eyebrow">THE FAMILY MARKETPLACE</div>
          <h1>Everything kids and families need, in one place.</h1>
          <p>Discover products, services, classes, care, parties and experiences from family-focused providers.</p>
          <div className="heroActions">
            <a className="primary" href="#market">Explore marketplace</a>
            <a className="secondary" href={STRIPE_LINK} target="_blank" rel="noreferrer">Become a seller for $5</a>
          </div>
          <div className="trustRow">
            <span>One-time seller registration</span>
            <span>0% UPA sales commission</span>
            <span>Products + services</span>
          </div>
        </div>
        <div className="heroCard">
          <div className="heroCardTop">Built for families</div>
          <div className="heroGrid">
            <div>🎉<b>Parties</b></div><div>⚽<b>Sports</b></div><div>🧸<b>Products</b></div><div>👶<b>Care</b></div>
          </div>
        </div>
      </section>

      <section className="searchBand">
        <div className="searchBox">Search products, services, classes or providers...</div>
        <button type="button">Search</button>
      </section>

      <section className="section" id="categories">
        <div className="sectionHead"><div><span className="eyebrow">BROWSE</span><h2>Shop by category</h2></div></div>
        <div className="categoryGrid">
          {categories.map((item, index) => <article className="category" key={item}><span>{["🎈","🏀","🧑‍🍼","📚","⛺","🎁","💛","🌴"][index]}</span><h3>{item}</h3><p>Explore listings</p></article>)}
        </div>
      </section>

      <section className="section soft" id="featured">
        <div className="sectionHead"><div><span className="eyebrow">FROM THE UPA FAMILY</span><h2>Featured UPA services</h2></div></div>
        <div className="featuredGrid">
          {featured.map((item) => <a className="featuredCard" href={item.url} target="_blank" rel="noreferrer" key={item.name}><div className="pill">Featured</div><h3>{item.name}</h3><p>{item.text}</p><span className="linkLabel">Visit website →</span></a>)}
        </div>
      </section>

      <section className="section" id="market">
        <div className="sectionHead"><div><span className="eyebrow">MARKETPLACE PREVIEW</span><h2>Popular with families</h2></div><span className="muted">Real provider onboarding coming next</span></div>
        <div className="listingGrid">
          {sampleListings.map(([name, location, type], i) => <article className="listing" key={name}><div className={`listingImage image${i + 1}`}>{["⚽","🎂","📸","🧪","🏊","🎨"][i]}</div><div className="listingBody"><span className="listingType">{type}</span><h3>{name}</h3><p>{location}</p><button type="button">View details</button></div></article>)}
        </div>
      </section>

      <section className="seller" id="sell">
        <div><span className="eyebrow light">SELL ON UPA KIDS MARKET</span><h2>Launch your store for $5. Once.</h2><p>Join the marketplace as a family-focused business or independent provider. UPA does not take a commission on your marketplace sales.</p><ul><li>One-time $5 seller registration</li><li>0% UPA commission on sales</li><li>Products and services welcome</li><li>Optional paid featured placements</li></ul></div>
        <div className="sellerBox"><div className="price"><span>$</span>5</div><p>one-time registration</p><a href={STRIPE_LINK} target="_blank" rel="noreferrer">Pay $5 with Stripe</a><small>Secure checkout powered by Stripe</small></div>
      </section>

      <footer><div className="brand"><span className="brandMark">UPA</span><span>Kids Market</span></div><p>A UPA Entertainment marketplace for kids, families and family-focused businesses.</p><div className="footerLinks"><a href="https://upaentertainment.com" target="_blank" rel="noreferrer">UPA Entertainment</a><a href="https://upaevents.com" target="_blank" rel="noreferrer">UPA Events</a><a href="https://babysittingupa.com" target="_blank" rel="noreferrer">UPA Care</a></div></footer>
    </main>
  );
}
