const categories=[['Toys & Shopping','Games, gifts and kids essentials'],['Parties & Events','Entertainment, rentals and venues'],['Classes & Camps','Sports, gymnastics and enrichment'],['Childcare','Babysitting and family support'],['Kids Fashion','Clothing, uniforms and accessories'],['Family Services','Useful services for parents'],['Food & Treats','Catering, sweets and party food'],['Experiences','Playgrounds and family activities']];

const businesses=[
{name:'UPA Entertainment',category:'Parties & Events',location:'Miami-Dade & Broward, FL',phone:'+1 561-367-5662',website:'https://upaentertainment.com/',offer:'Kids entertainment, birthday parties, sports classes, rentals and event services.',official:true},
{name:'Little Princess Spa Aventura',category:'Parties & Events',location:'Aventura, FL',phone:'+1 954-330-4654',offer:'Princess-themed birthday parties, private events and kids spa experiences.'},
{name:'Learning Express Aventura',category:'Toys & Shopping',location:'Aventura, FL',phone:'+1 305-931-8085',website:'http://www.learningexpress.com',offer:'Educational toys, games, STEM kits, crafts, collectibles, books and gift wrapping.'},
{name:"MiaAthletics Gymnastics and Kid's Activity Center",category:'Classes & Camps',location:'Sunny Isles Beach, FL',phone:'+1 786-321-8471',offer:'Gymnastics, dance, ballet, yoga, STEM, art, music and day-camp activities for kids.'},
{name:'Fun Stations Miami',category:'Parties & Events',location:'Miami-Dade · Broward · Palm Beach',phone:'+1 786-491-1763',website:'https://funstationsmiami.com/',offer:'Soft play, ball pits, bounce houses, bubble houses, kids tables and balloon decor. Party Station venue listed from $850 + tax for 5 hours.'},
{name:'CAMP Miami',category:'Experiences',location:'Aventura Mall, FL',phone:'+1 305-928-7601',website:'https://camp.com/miami',offer:'Ticketed family experiences, creative activities, toys and kids events inside Aventura Mall.'},
{name:'Kids Empire Miami Dolphin Mall',category:'Experiences',location:'Miami, FL',phone:'+1 305-874-7596',offer:'Large indoor playground and kids amusement center with birthday-party options.'},
{name:'Ocaquatics Swim School',category:'Classes & Camps',location:'Multiple Miami-Dade locations, FL',phone:'+1 786-530-5224',website:'https://www.ocaquatics.com',offer:'Year-round warm-water swim lessons for babies, children and adults with a water-safety focus.'},
{name:'Code Ninjas Aventura',category:'Classes & Camps',location:'Aventura, FL',phone:'+1 786-592-6300',website:'https://www.codeninjas.com',offer:'Coding and STEM programs for ages 5–14, camps, clubs and coding-themed birthday parties.'},
{name:'The Real Food Academy Miami',category:'Classes & Camps',location:'Miami, FL',phone:'+1 786-395-0355',website:'https://realfoodacademy.com/miami',offer:'Hands-on kids cooking classes and birthday parties. Published party pricing starts at $795 for up to 10 children.'},
{name:'ALA Gymnastics',category:'Parties & Events',location:'Miami, FL',phone:'+1 888-559-5909',website:'https://alagymnastics.com/',offer:'Gymnastics birthday parties. Published Gold package: $700 for up to 20 children; Platinum: $800 for up to 30.'},
{name:"Miami Children's Museum",category:'Parties & Events',location:'Miami, FL',website:'https://www.miamichildrensmuseum.org/birthday-parties',offer:'Weekend birthday parties with private room and museum access. Published standard packages start at $650.'},
{name:'EGA Gymnastics Doral',category:'Parties & Events',location:'Doral, FL',phone:'+1 786-212-1065',website:'https://egamiami.com/birthday-parties/',offer:'Gymnastics birthday parties with certified coaches. Published packages start at $950 for 1–10 kids.'},
{name:'Gymnastics Du Sol',category:'Parties & Events',location:'North Miami, FL',phone:'+1 888-737-8818',website:'https://gymnasticsdusol.com/birthday-party/',offer:'Gymnastics birthday parties. Published Gold package: $600 for up to 20 children; Platinum: $700 for up to 30.'},
{name:'Michael-Ann Russell JCC',category:'Parties & Events',location:'North Miami Beach, FL',phone:'+1 305-932-4200',website:'https://marjcc.org/venuesandeventsservices/',offer:'Standard and specialty birthday parties including sports, art, pool, gymnastics, tennis and dance. Published standard pricing starts at $350.'},
{name:'Chuck E. Cheese Miami (Aventura)',category:'Parties & Events',location:'Miami / Aventura, FL',website:'https://www.chuckecheese.com/miami-aventura/birthday-parties/',offer:'Kids birthday packages with unlimited gameplay and birthday show. Current published entry package: $99.99 for 6 kids.'},
{name:'Switch Doral',category:'Parties & Events',location:'Doral, FL',website:'https://switchdoral.com/',offer:'Private indoor kids parties with themed entertainment zones. Published weekday Switch Mini plan starts at $1,099 plus tax/service fee.'}
];

const filter=document.getElementById('filter');
categories.forEach(([n])=>{filter.innerHTML+=`<option value="${n}">${n}</option>`});

function renderBusinesses(){
  const q=(document.getElementById('searchInput').value||'').toLowerCase();
  const f=filter.value;
  const grid=document.getElementById('businessGrid');
  grid.innerHTML='';
  const matches=businesses.filter(b=>(f==='all'||b.category===f)&&(`${b.name} ${b.category} ${b.location} ${b.offer||''}`.toLowerCase().includes(q)));
  const rc=document.getElementById('resultCount');
  if(rc)rc.textContent=`${matches.length} ${ui('results')}`;
  matches.forEach(b=>{
    grid.innerHTML+=`<article class="card">
      <span class="badge ${b.official?'official':''}">${b.official?ui('officialLabel'):ui('publicListing')}</span>
      <h3>${b.name}</h3>
      <div class="meta">${b.category}</div>
      <div class="meta">📍 ${b.location}</div>
      ${b.offer?`<p class="meta"><strong>${ui('offerLabel')}</strong> ${b.offer}</p>`:''}
      <div class="card-actions">
        ${b.website?`<a href="${b.website}" target="_blank" rel="noopener">${ui('viewOffer')}</a>`:''}
        ${b.phone?`<a href="tel:${b.phone.replace(/\s/g,'')}">${ui('call')}</a>`:''}
      </div>
    </article>`
  });
  if(!grid.innerHTML)grid.innerHTML=`<p class="muted">${ui('noResults')}</p>`
}
function runSearch(){renderBusinesses();document.getElementById('businesses').scrollIntoView({behavior:'smooth'})}
document.getElementById('searchInput').addEventListener('keyup',e=>{if(e.key==='Enter')runSearch()});
function submitSeller(e){
  e.preventDefault();
  const f=new FormData(e.target);
  const subject=encodeURIComponent('UPA Kids Market Seller Application - '+f.get('business'));
  const body=encodeURIComponent(`Business: ${f.get('business')}\nContact: ${f.get('name')}\nEmail: ${f.get('email')}\nPhone: ${f.get('phone')}\nLocation: ${f.get('location')}\nCategory: ${f.get('category')}\nWebsite/Instagram: ${f.get('web')}\nOffer: ${f.get('offer')}\n\nLaunch offer requested: $5 for 12 months / 0% commission during the promotional period.`);
  document.getElementById('formMsg').textContent=ui('formOpening');
  window.location.href=`mailto:info@upaentertainment.com?subject=${subject}&body=${body}`
}
renderBusinesses();

let currentLang='en';
const translations={
  en:{
    launch:'🚀 Seller launch offer through September 18: <strong>USD 5 for 12 months · 0% sales commission</strong>',
    searchPlaceholder:'Search products and services',search:'Search',explore:'Explore',sellAtUpa:'Sell on UPA',advertising:'Advertising',
    all:'All',experiences:'Experiences',parties:'Parties',toys:'Toys',sports:'Sports',care:'Care',creativity:'Creativity',education:'Education',wellness:'Health & Wellness',familyPlans:'Family Plans',
    eyebrow:'EVERYTHING FOR THEIR WORLD',heroTitle:'Products and experiences kids love.',heroText:'Discover businesses, compare offers and contact services for kids and families in one place, backed by UPA Entertainment.',exploreMarket:'Explore the market',
    upaSelection:'✓ UPA Selection',identifiedBusinesses:'✓ Identified businesses',realHelp:'✓ Real help',everythingNeed:'Everything they need.',productsServicesExperiences:'Products + services + experiences',happyFamilies:'Happy families',directContact:'Direct contact',productsServices:'Products + services',
    toRemember:'To remember',everythingSolved:'Everything handled',classesKits:'Classes & kits',handsOn:'Hands on',withConfidence:'With confidence',learnPlaying:'Learn through play',wellnessShort:'Wellness',growHealthy:'Grow healthy',plans:'Plans',wholeFamily:'For the whole family',
    pickedForYou:'PICKED FOR YOU',bestUpaKids:'The best of UPA Kids',realBusinesses:'Real businesses and services for families.',advertisingArrow:'ADVERTISING ↗',brandHere:'Your brand can be here',reachFamilies:'Reach families already searching for kids products and services.',viewAdSpaces:'View ad spaces',
    listingDisclaimer:'Listings marked “Public Listing” use publicly available business information and do not imply affiliation, sponsorship or commercial verification by UPA. Prices and availability may change; confirm directly with the provider.',
    featuredShops:'FEATURED SHOPS',brandsProfessionals:'Brands and professionals for your family',appearHere:'I want to appear here →',upaOfficialShop:'UPA · OFFICIAL SHOP',partiesSportsExperiences:'Parties, sports, experiences and services.',officialUpa:'✓ Official UPA →',localBusinesses:'Local businesses',classesCampsActivities:'Classes, camps and activities for all ages.',exploreArrow:'Explore →',sponsoredParty:'SPONSORED · PARTY SERVICES',companyHere:'Your company can be here',premiumSpace:'A premium space in front of families ready to buy.',viewAdvertising:'View advertising options →',
    moreThanStore:'MUCH MORE THAN A STORE',wholeKidsWorld:'The whole world of kids, in one portal.',worldText:'Products, professionals, classes, camps, birthdays, care, health, education and family plans.',productsIcon:'🛍️ Products',birthdaysIcon:'🎂 Birthdays',professionalsIcon:'👩‍🏫 Professionals',ticketsIcon:'🎟️ Tickets',familyIcon:'👨‍👩‍👧‍👦 Family',
    forBusinesses:'FOR BUSINESSES & PROFESSIONALS',sellMore:'Sell more. Reach more families.',joinMarketplace:'Add your business to the marketplace or gain visibility with advertising for families.',wantSell:'I want to sell',launchPrice:'$5 for 12 months during launch',publishOffer:'Publish products, classes, experiences or services. No sales commission during the promotional period.',advertisingEmoji:'📣 ADVERTISING',highlightBrand:'I want to highlight my brand',buyAds:'Buy banners, sponsored categories or featured positions for your listings.',
    addBusiness:'Add your business',businessName:'Business name',contactName:'Contact name',phone:'Phone',cityState:'City / State',category:'Category',whatOffer:'What do you sell or offer?',sendApplication:'Send application',identifiedTitle:'🛡️ Identified businesses',identifiedText:'We clearly distinguish UPA businesses from public directory listings.',humanSupport:'💬 Human support',humanSupportText:'Real people to help you through the process.',yearsJoy:'✨ 25+ years creating joy',yearsJoyText:"UPA's experience is now also in a marketplace.",footerText:'A new way to find everything your kids need.',
    results:'results',offerLabel:'Offer:',viewOffer:'View offer',call:'Call',publicListing:'Public Listing',officialLabel:'UPA Official',noResults:'No results found with that filter.',formOpening:'Opening your email app to send the application to UPA.'
  },
  es:{
    launch:'🚀 Oferta de lanzamiento para vendedores hasta el 18 de septiembre: <strong>USD 5 por 12 meses · 0% comisión por venta</strong>',
    searchPlaceholder:'Buscar productos y servicios',search:'Buscar',explore:'Explorar',sellAtUpa:'Vendé en UPA',advertising:'Publicidad',
    all:'Todo',experiences:'Experiencias',parties:'Fiestas',toys:'Juguetes',sports:'Deportes',care:'Cuidado',creativity:'Creatividad',education:'Educación',wellness:'Salud y bienestar',familyPlans:'Planes en familia',
    eyebrow:'TODO PARA SU MUNDO',heroTitle:'Productos y experiencias que los chicos aman.',heroText:'Descubrí negocios, compará propuestas y contactá servicios para chicos y familias en un solo lugar, con el respaldo de UPA Entertainment.',exploreMarket:'Explorar el market',
    upaSelection:'✓ Selección UPA',identifiedBusinesses:'✓ Negocios identificados',realHelp:'✓ Ayuda real',everythingNeed:'Todo lo que necesitan.',productsServicesExperiences:'Productos + servicios + experiencias',happyFamilies:'Familias felices',directContact:'Contacto directo',productsServices:'Productos + servicios',
    toRemember:'Para recordar',everythingSolved:'Todo resuelto',classesKits:'Clases y kits',handsOn:'Manos a la obra',withConfidence:'Con confianza',learnPlaying:'Aprender jugando',wellnessShort:'Bienestar',growHealthy:'Crecer saludables',plans:'Planes',wholeFamily:'Para toda la familia',
    pickedForYou:'ELEGIDOS PARA VOS',bestUpaKids:'Lo mejor de UPA Kids',realBusinesses:'Negocios y servicios reales para familias.',advertisingArrow:'PUBLICIDAD ↗',brandHere:'Tu marca puede estar acá',reachFamilies:'Llegá a familias que ya buscan productos y servicios para sus chicos.',viewAdSpaces:'Ver espacios',
    listingDisclaimer:'Los listados marcados como “Public Listing” usan información pública del negocio y no implican afiliación, patrocinio ni verificación comercial por UPA. Precios y disponibilidad pueden cambiar; confirmalos directamente con el proveedor.',
    featuredShops:'TIENDAS DESTACADAS',brandsProfessionals:'Marcas y profesionales para tu familia',appearHere:'Quiero aparecer acá →',upaOfficialShop:'UPA · TIENDA OFICIAL',partiesSportsExperiences:'Fiestas, deportes, experiencias y servicios.',officialUpa:'✓ Oficial UPA →',localBusinesses:'Negocios locales',classesCampsActivities:'Clases, camps y actividades para todas las edades.',exploreArrow:'Explorar →',sponsoredParty:'PATROCINADO · PARTY SERVICES',companyHere:'Tu empresa puede estar acá',premiumSpace:'Un espacio premium frente a familias listas para comprar.',viewAdvertising:'Ver opciones de publicidad →',
    moreThanStore:'MUCHO MÁS QUE UNA TIENDA',wholeKidsWorld:'Todo el mundo de los chicos, en un solo portal.',worldText:'Productos, profesionales, clases, campamentos, cumpleaños, cuidado, salud, educación y planes en familia.',productsIcon:'🛍️ Productos',birthdaysIcon:'🎂 Cumpleaños',professionalsIcon:'👩‍🏫 Profesionales',ticketsIcon:'🎟️ Entradas',familyIcon:'👨‍👩‍👧‍👦 Familia',
    forBusinesses:'PARA EMPRESAS Y PROFESIONALES',sellMore:'Vendé más. Llegá a más familias.',joinMarketplace:'Sumá tu negocio al marketplace o ganá visibilidad con publicidad para familias.',wantSell:'Quiero vender',launchPrice:'$5 por 12 meses durante el lanzamiento',publishOffer:'Publicá productos, clases, experiencias o servicios. Sin comisión durante el período promocional.',advertisingEmoji:'📣 PUBLICIDAD',highlightBrand:'Quiero destacar mi marca',buyAds:'Comprá banners, categorías patrocinadas o posiciones destacadas.',
    addBusiness:'Sumá tu negocio',businessName:'Nombre del negocio',contactName:'Nombre de contacto',phone:'Teléfono',cityState:'Ciudad / Estado',category:'Categoría',whatOffer:'¿Qué vendés u ofrecés?',sendApplication:'Enviar solicitud',identifiedTitle:'🛡️ Negocios identificados',identifiedText:'Distinguimos claramente los negocios UPA de los listados públicos.',humanSupport:'💬 Soporte humano',humanSupportText:'Personas reales para ayudarte durante el proceso.',yearsJoy:'✨ 25+ años creando alegría',yearsJoyText:'La experiencia de UPA ahora también en un marketplace.',footerText:'Una nueva forma de encontrar todo lo que tus chicos necesitan.',
    results:'resultados',offerLabel:'Oferta:',viewOffer:'Ver oferta',call:'Llamar',publicListing:'Listado público',officialLabel:'UPA Oficial',noResults:'No encontramos resultados con ese filtro.',formOpening:'Abriendo tu aplicación de email para enviar la solicitud a UPA.'
  },
  he:{
    launch:'🚀 מבצע השקה למוכרים עד 18 בספטמבר: <strong>5 דולר ל-12 חודשים · 0% עמלה על מכירות</strong>',
    searchPlaceholder:'חיפוש מוצרים ושירותים',search:'חיפוש',explore:'גילוי',sellAtUpa:'מכירה ב-UPA',advertising:'פרסום',
    all:'הכל',experiences:'חוויות',parties:'מסיבות',toys:'צעצועים',sports:'ספורט',care:'טיפול',creativity:'יצירה',education:'חינוך',wellness:'בריאות ורווחה',familyPlans:'פעילויות למשפחה',
    eyebrow:'כל מה שעולם הילדים צריך',heroTitle:'מוצרים וחוויות שילדים אוהבים.',heroText:'גלו עסקים, השוו הצעות וצרו קשר עם שירותים לילדים ולמשפחות במקום אחד, בגיבוי UPA Entertainment.',exploreMarket:'לגלות את המרקט',
    upaSelection:'✓ בחירת UPA',identifiedBusinesses:'✓ עסקים מזוהים',realHelp:'✓ עזרה אנושית',everythingNeed:'כל מה שהם צריכים.',productsServicesExperiences:'מוצרים + שירותים + חוויות',happyFamilies:'משפחות מרוצות',directContact:'יצירת קשר ישירה',productsServices:'מוצרים + שירותים',
    toRemember:'לזכור',everythingSolved:'הכל במקום אחד',classesKits:'חוגים וערכות',handsOn:'יצירה מעשית',withConfidence:'בביטחון',learnPlaying:'לומדים דרך משחק',wellnessShort:'רווחה',growHealthy:'גדלים בריא',plans:'פעילויות',wholeFamily:'לכל המשפחה',
    pickedForYou:'נבחר עבורכם',bestUpaKids:'המיטב של UPA Kids',realBusinesses:'עסקים ושירותים אמיתיים למשפחות.',advertisingArrow:'פרסום ↗',brandHere:'המותג שלכם יכול להיות כאן',reachFamilies:'הגיעו למשפחות שכבר מחפשות מוצרים ושירותים לילדים.',viewAdSpaces:'צפייה בשטחי פרסום',
    listingDisclaimer:'רשומות המסומנות “Public Listing” מבוססות על מידע ציבורי ואינן מעידות על שותפות, חסות או אימות מסחרי מצד UPA. מחירים וזמינות עשויים להשתנות; יש לאשר ישירות מול הספק.',
    featuredShops:'חנויות נבחרות',brandsProfessionals:'מותגים ואנשי מקצוע למשפחה שלכם',appearHere:'אני רוצה להופיע כאן →',upaOfficialShop:'UPA · חנות רשמית',partiesSportsExperiences:'מסיבות, ספורט, חוויות ושירותים.',officialUpa:'✓ UPA רשמי →',localBusinesses:'עסקים מקומיים',classesCampsActivities:'חוגים, קייטנות ופעילויות לכל הגילים.',exploreArrow:'לגלות →',sponsoredParty:'ממומן · שירותי מסיבות',companyHere:'העסק שלכם יכול להיות כאן',premiumSpace:'מיקום פרימיום מול משפחות שמוכנות לקנות.',viewAdvertising:'אפשרויות פרסום →',
    moreThanStore:'הרבה יותר מחנות',wholeKidsWorld:'כל עולם הילדים בפורטל אחד.',worldText:'מוצרים, אנשי מקצוע, חוגים, קייטנות, ימי הולדת, טיפול, בריאות, חינוך ופעילויות למשפחה.',productsIcon:'🛍️ מוצרים',birthdaysIcon:'🎂 ימי הולדת',professionalsIcon:'👩‍🏫 אנשי מקצוע',ticketsIcon:'🎟️ כרטיסים',familyIcon:'👨‍👩‍👧‍👦 משפחה',
    forBusinesses:'לעסקים ולאנשי מקצוע',sellMore:'למכור יותר. להגיע ליותר משפחות.',joinMarketplace:'הוסיפו את העסק למרקטפלייס או קבלו חשיפה בפרסום למשפחות.',wantSell:'אני רוצה למכור',launchPrice:'5 דולר ל-12 חודשים בתקופת ההשקה',publishOffer:'פרסמו מוצרים, חוגים, חוויות או שירותים. ללא עמלת מכירה בתקופת המבצע.',advertisingEmoji:'📣 פרסום',highlightBrand:'אני רוצה לקדם את המותג',buyAds:'רכשו באנרים, קטגוריות ממומנות או מיקומים בולטים.',
    addBusiness:'הוספת עסק',businessName:'שם העסק',contactName:'שם איש קשר',phone:'טלפון',cityState:'עיר / מדינה',category:'קטגוריה',whatOffer:'מה אתם מוכרים או מציעים?',sendApplication:'שליחת בקשה',identifiedTitle:'🛡️ עסקים מזוהים',identifiedText:'אנו מבדילים בבירור בין עסקי UPA לבין רשומות ציבוריות.',humanSupport:'💬 תמיכה אנושית',humanSupportText:'אנשים אמיתיים שיעזרו לכם בתהליך.',yearsJoy:'✨ יותר מ-25 שנים של שמחה',yearsJoyText:'הניסיון של UPA נמצא עכשיו גם במרקטפלייס.',footerText:'דרך חדשה למצוא כל מה שהילדים שלכם צריכים.',
    results:'תוצאות',offerLabel:'הצעה:',viewOffer:'צפייה בהצעה',call:'התקשרו',publicListing:'רשומה ציבורית',officialLabel:'UPA רשמי',noResults:'לא נמצאו תוצאות במסנן הזה.',formOpening:'פותח את אפליקציית האימייל כדי לשלוח את הבקשה ל-UPA.'
  }
};

function ui(key){return (translations[currentLang]&&translations[currentLang][key])||translations.en[key]||key}

function setLanguage(lang){
  currentLang=translations[lang]?lang:'en';
  document.documentElement.lang=currentLang;
  document.documentElement.dir=currentLang==='he'?'rtl':'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const val=ui(el.dataset.i18n);
    if(val!==undefined) el.innerHTML=val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{el.placeholder=ui(el.dataset.i18nPlaceholder)});
  document.querySelectorAll('.lang-btn').forEach(btn=>btn.classList.toggle('active',btn.dataset.lang===currentLang));
  try{localStorage.setItem('upaKidsLang',currentLang)}catch(e){}
  renderBusinesses();
}
try{
  const saved=localStorage.getItem('upaKidsLang');
  if(saved&&translations[saved]) setLanguage(saved); else setLanguage('en');
}catch(e){setLanguage('en')}

const rotatingPublic=[
 {name:'CAMP Miami',detail:'Toys · crafts · immersive experiences',url:'https://camp.com/miami'},
 {name:'Super Anime Store',detail:'Collectibles · gifts · North Miami',url:'https://superanimestore.com'},
 {name:'Code Ninjas Aventura',detail:'Coding · STEM · camps',url:'https://www.codeninjas.com'}
];
let rotatingIndex=0;
setInterval(()=>{
  const el=document.querySelector('.ad-slot.public-brand');
  if(!el) return;
  rotatingIndex=(rotatingIndex+1)%rotatingPublic.length;
  const item=rotatingPublic[rotatingIndex];
  el.href=item.url;
  el.innerHTML='<span>PUBLIC LISTING SPOTLIGHT</span><strong>'+item.name+'</strong><small>'+item.detail+'</small>';
},4500);
