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
  if(rc)rc.textContent=`${matches.length} resultados`;
  matches.forEach(b=>{
    grid.innerHTML+=`<article class="card">
      <span class="badge ${b.official?'official':''}">${b.official?'UPA Official':'Public Listing'}</span>
      <h3>${b.name}</h3>
      <div class="meta">${b.category}</div>
      <div class="meta">📍 ${b.location}</div>
      ${b.offer?`<p class="meta"><strong>Oferta:</strong> ${b.offer}</p>`:''}
      <div class="card-actions">
        ${b.website?`<a href="${b.website}" target="_blank" rel="noopener">Ver oferta</a>`:''}
        ${b.phone?`<a href="tel:${b.phone.replace(/\s/g,'')}">Llamar</a>`:''}
      </div>
    </article>`
  });
  if(!grid.innerHTML)grid.innerHTML='<p class="muted">No encontramos resultados con ese filtro.</p>'
}
function runSearch(){renderBusinesses();document.getElementById('businesses').scrollIntoView({behavior:'smooth'})}
document.getElementById('searchInput').addEventListener('keyup',e=>{if(e.key==='Enter')runSearch()});
function submitSeller(e){
  e.preventDefault();
  const f=new FormData(e.target);
  const subject=encodeURIComponent('UPA Kids Market Seller Application - '+f.get('business'));
  const body=encodeURIComponent(`Business: ${f.get('business')}\nContact: ${f.get('name')}\nEmail: ${f.get('email')}\nPhone: ${f.get('phone')}\nLocation: ${f.get('location')}\nCategory: ${f.get('category')}\nWebsite/Instagram: ${f.get('web')}\nOffer: ${f.get('offer')}\n\nLaunch offer requested: $5 one-time / 0% commission.`);
  document.getElementById('formMsg').textContent='Opening your email app to send the application to UPA.';
  window.location.href=`mailto:info@upaentertainment.com?subject=${subject}&body=${body}`
}
renderBusinesses();