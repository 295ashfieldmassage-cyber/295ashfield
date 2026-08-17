const galleryRoot=document.querySelector("#all-girls-gallery");
if(galleryRoot){
  const people=getCompleteTeamData();
  galleryRoot.innerHTML=people.map(person=>{
    const nationality=person.nationality||person.hours||"";
    const facts=[nationality,person.height,person.weight,person.age?`${person.age} yo`:"",person.cup?`${person.cup} cup`:""].filter(Boolean);
    return `<article class="gallery-person"><div class="therapist-image hover-gallery" data-hover-images='${JSON.stringify(getHoverImages(person))}'><img src="${person.image}" data-original-src="${person.image}" alt="${person.name}" loading="lazy"><div class="gallery-profile-overlay"><h3>${person.name}</h3>${person.description?`<p>${person.description}</p>`:""}<div>${facts.map(fact=>`<span>${fact}</span>`).join("")}</div></div></div><div class="therapist-info"><h3>${person.name}</h3><p>${nationality}</p></div></article>`;
  }).join("");
  initialiseHoverGalleries(galleryRoot);
}
