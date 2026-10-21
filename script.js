const skills=["HTML","CSS","JavaScript","C++"];
const projects=[
 {icon:"📚",bg:"linear-gradient(135deg,#f97316,#ef4444)",badge:"Website",title:"Comic Vault",desc:"A comic storybook site featuring manga and comics like Berserk, The Boys and The Walking Dead.",tags:["HTML","CSS","JavaScript"],links:[["Live site","https://rainzzz4.github.io/Comic-Books/"]]},
 {icon:"🍎",bg:"linear-gradient(135deg,#34d399,#0ea5e9)",badge:"Tribute page",title:"Teachers’ Month",desc:"A thank-you page for our beloved teacher, made with my BSIT classmates.",tags:["HTML","CSS"],links:[["Live site","https://rainzzz4.github.io/Teachers-month/"]]},
 {icon:"🎵",bg:"linear-gradient(135deg,#8b5cf6,#ec4899)",badge:"Multimedia",title:"Multimedia Page",desc:"A page with photos of Greek gods, a classical music list and video clips.",tags:["HTML","CSS"],links:[["Live site","https://rainzzz4.github.io/MultimediaPage/"]]},
 {icon:"🪪",bg:"linear-gradient(135deg,#eab308,#f97316)",badge:"Layout practice",title:"Student Profile Cards",desc:"A set of student profile cards showing name, student ID and program.",tags:["HTML","CSS"],links:[["Live site","https://rainzzz4.github.io/StudentProfileCards/"]]},
 {icon:"🌐",bg:"linear-gradient(135deg,#6aa7ff,#8b5cf6)",badge:"My first project",title:"My First Webpage",desc:"My very first webpage, made with HTML, CSS and JavaScript.",tags:["HTML","CSS","JavaScript"],links:[["Live site","https://rainzzz4.github.io/Webpage/"]]}
];
const chips=document.getElementById("chips"),grid=document.getElementById("grid"),hint=document.getElementById("hint");
let active=null;
skills.forEach(s=>{const b=document.createElement("button");b.className="chip";b.textContent=s;b.onclick=()=>{active=active===s?null:s;render()};chips.appendChild(b)});
function render(){
  [...chips.children].forEach(c=>c.classList.toggle("on",c.textContent===active));
  let n=0;
  grid.innerHTML=projects.map(p=>{
    const hit=!active||p.tags.includes(active);n+=hit&&active?1:0;
    return `<article class="card${hit?"":" dim"}"><div class="icon" style="background:${p.bg}">${p.icon}</div><div><div class="badge">${p.badge}</div><h3>${p.title}</h3><p>${p.desc}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div>${p.links.map(l=>`<a href="${l[1]}" target="_blank" rel="noopener">${l[0]} ↗</a>`).join("")}</div></article>`}).join("");
  hint.textContent=active?`${n} featured project${n===1?"":"s"} use ${active}`:"tap a skill to see where I’ve used it";
}
render();
// scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
// theme toggle
document.getElementById("theme").onclick=()=>{
  const r=document.documentElement;
  const dark=r.dataset.theme?r.dataset.theme==="dark":!matchMedia("(prefers-color-scheme: light)").matches;
  r.dataset.theme=dark?"light":"dark";
};
