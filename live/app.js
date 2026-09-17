const categories=[['Toys & Shopping','Games, gifts and kids essentials'],['Parties & Events','Entertainment, rentals and venues'],['Classes & Camps','Sports, gymnastics and enrichment'],['Childcare','Babysitting and family support'],['Kids Fashion','Clothing, uniforms and accessories'],['Family Services','Useful services for parents'],['Food & Treats','Catering, sweets and party food'],['Experiences','Playgrounds and family activities']];
const businesses=[
{name:'UPA Entertainment',category:'Parties & Events',location:'Miami-Dade & Broward, FL',phone:'+1 561-367-5662',website:'https://upaentertainment.com/',official:true},
{name:'Little Princess Spa Aventura',category:'Parties & Events',location:'Aventura, FL',phone:'+1 954-330-4654'},
{name:'We Rock the Spectrum - North Miami',category:'Classes & Camps',location:'North Miami, FL',phone:'+1 786-803-8053'},
{name:'Learning Express Aventura',category:'Toys & Shopping',location:'Aventura, FL',phone:'+1 305-931-8085',website:'http://www.learningexpress.com'},
{name:'Aventura Kids',category:'Kids Fashion',location:'Miami, FL',phone:'+1 305-405-6100'},
{name:"MiaAthletics Gymnastics and Kid's Activity Center",category:'Classes & Camps',location:'Sunny Isles Beach, FL',phone:'+1 786-321-8471'},
{name:'Super Anime Store - North Miami',category:'Toys & Shopping',location:'North Miami, FL',phone:'+1 561-475-8952'},
{name:'Fun Stations Miami',category:'Parties & Events',location:'South Florida',phone:'+1 786-491-1763',website:'https://funstationsmiami.com/'},
{name:'Planet Kids Playground and Cafe',category:'Experiences',location:'Miami, FL',phone:'+1 305-573-1379',website:'https://www.planetkidsplayplayground.com/'},
{name:'CAMP Miami',category:'Experiences',location:'Aventura, FL',website:'https://camp.com/miami'},
{name:'Kids Empire Miami Dolphin Mall',category:'Experiences',location:'Miami, FL',phone:'+1 305-874-7596'},
{name:'Ocaquatics Swim School Coral Gables',category:'Classes & Camps',location:'Coral Gables, FL',phone:'+1 786-567-3243'},
{name:'Revolution Party Venues – Doral Miami',category:'Parties & Events',location:'Doral / Miami, FL',phone:'+1 786-332-7065'},
{name:'Abercrombie Kids Aventura',category:'Kids Fashion',location:'Aventura, FL',phone:'+1 305-466-0110'},
{name:'The Real Food Academy',category:'Classes & Camps',location:'Miami, FL'}
];
const filter=document.getElementById('filter');
categories.forEach(([n])=>{filter.innerHTML+=`<option value="${n}">${n}</option>`});
function renderBusinesses(){const q=(document.getElementById('searchInput').value||'').toLowerCase();const f=filter.value;const grid=document.getElementById('businessGrid');grid.innerHTML='';const matches=businesses.filter(b=>(f==='all'||b.category===f)&&(`${b.name} ${b.category} ${b.location}`.toLowerCase().includes(q)));const rc=document.getElementById('resultCount');if(rc)rc.textContent=`${matches.length} resultados`;matches.forEach(b=>{grid.innerHTML+=`<article class="card"><span class="badge ${b.official?'official':''}">${b.official?'UPA Official':'Local Business'}</span><h3>${b.name}</h3><div class="meta">${b.category}</div><div class="meta">📍 ${b.location}</div><div class="card-actions">${b.website?`<a href="${b.website}" target="_blank" rel="noopener">Ver sitio</a>`:''}${b.phone?`<a href="tel:${b.phone.replace(/\s/g,'')}">Llamar</a>`:''}</div></article>`});if(!grid.innerHTML)grid.innerHTML='<p class="muted">No encontramos resultados con ese filtro.</p>'}
function runSearch(){renderBusinesses();document.getElementById('businesses').scrollIntoView({behavior:'smooth'})}
document.getElementById('searchInput').addEventListener('keyup',e=>{if(e.key==='Enter')runSearch()});
function submitSeller(e){e.preventDefault();const f=new FormData(e.target);const subject=encodeURIComponent('UPA Kids Market Seller Application - '+f.get('business'));const body=encodeURIComponent(`Business: ${f.get('business')}\nContact: ${f.get('name')}\nEmail: ${f.get('email')}\nPhone: ${f.get('phone')}\nLocation: ${f.get('location')}\nCategory: ${f.get('category')}\nWebsite/Instagram: ${f.get('web')}\nOffer: ${f.get('offer')}\n\nLaunch offer requested: $5 one-time / 0% commission.`);document.getElementById('formMsg').textContent='Opening your email app to send the application to UPA.';window.location.href=`mailto:info@upaentertainment.com?subject=${subject}&body=${body}`}
renderBusinesses();