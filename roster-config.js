/* ============================================================
   295 ASHFIELD — SINGLE EDITABLE ROSTER FILE
   客户以后只需要修改此文件：人员资料、图片、Hover图片、每周排班。
   Hover photos rotate every 2 seconds while the pointer stays on a profile.
============================================================ */
(function () {
  const profiles = {
    Domi: {
      name: "Domi",
      nationality: "Chinese",
      height: "165 cm",
      weight: "47kg",
      age: 21,
      cup: "B",
      description: "Young Pretty Chinese team member",
      image: "images/domi.jpg",
      hoverImages: ["images/domi1.jpg", "images/domi2.jpg", "images/domi3.jpg"]
    },
    Doris: {
      name: "Doris",
      nationality: "Chinese",
      height: "164 cm",
      weight: "52 kg",
      age: 23,
      cup: "D",
      description: "Adorable Chinese team member",
      image: "images/doris.jpg",
      hoverImages: ["images/Doris1.jpg", "images/Doris2.jpg", "images/Doris3.jpg", "images/Doris4.jpg", "images/Doris5.jpg", "images/Doris6.jpg"]
    },
    Lucy: {
      name: "Lucy",
      nationality: "Chinese",
      height: "162 cm",
      weight: "54 kg",
      age: 23,
      cup: "D",
      description: "Excellent Chinese massage practitioner",
      image: "images/lucy.jpg",
      hoverImages: ["images/lucy1.jpg", "images/lucy2.jpg", "images/lucy3.jpg"]
    },
    Jolie: {
      name: "Jolie",
      nationality: "Vietnam",
      height: "166cm",
      weight: "55kg",
      age: 21,
      cup: "C",
      description: "Fun playful Vietnam member",
      image: "images/jolie.jpg",
      hoverImages: ["images/jolie1.jpg", "images/jolie2.jpg"]
    },
    Aya: {
      name: "Aya",
      nationality: "Chinese",
      height: "168 cm",
      weight: "47kg",
      age: 23,
      cup: "B",
      description: "Fun playful Chinese team member",
      image: "images/aya.jpg",
      hoverImages: ["images/aya1.jpg", "images/aya2.jpg", "images/aya3.jpg"]
    },
    Tia: {
      name: "Tia",
      nationality: "Vietnam",
      height: "165 cm",
      weight: "54kg",
      age: 30,
      cup: "D",
      description: "Fun playful Vietnam team member",
      image: "images/tia.jpg",
      hoverImages: ["images/tia1.jpg", "images/tia2.jpg", "images/tia3.jpg"]
    },
    Rose: {
      name: "Rose",
      nationality: "Vietnam",
      height: "163 cm",
      weight: "57kg",
      age: 26,
      cup: "C",
      description: "Fun playful Vietnam team member",
      image: "images/rose.jpg",
      hoverImages: ["images/rose1.jpg", "images/rose2.jpg", "images/rose3.jpg"]
    },
    Regina: {
      name: "Regina",
      nationality: "Colombia",
      height: "162 cm",
      weight: "60 kg",
      age: 22,
      cup: "D",
      description: "Young Pretty Colombia team member",
      image: "images/regina.jpg",
      hoverImages: ["images/regina1.jpg", "images/regina2.jpg"]
    },
    Rachel: {
      name: "Rachel",
      nationality: "Lebanon",
      height: "172cm",
      weight: "70kg",
      age: 25,
      cup: "G",
      description: "Full service Busty team member",
      image: "images/rachel.jpg",
      hoverImages: ["images/rachel1.jpg", "images/rachel2.jpg"]
    },
    Melody: {
      name: "Melody",
      nationality: "Brazilian",
      height: "165 cm",
      weight: "50 kg",
      age: 22,
      cup: "D",
      description: "Gorgeous Brazilian team member",
      image: "images/Melody.jpg",
      hoverImages: ["images/Melody1.jpg", "images/Melody2.jpg", "images/Melody3.jpg", "images/Melody4.jpg"]
    },
    Venessa: {
      name: "Venessa",
      nationality: "Mexico",
      height: "166 cm",
      weight: "60 kg",
      age: 25,
      cup: "D",
      description: "Fun cosplay-loving team member",
      image: "images/Venessa.jpg",
      hoverImages: ["images/Venessa1.jpg", "images/Venessa2.jpg", "images/Venessa3.jpg", "images/Venessa4.jpg"]
    },
    BB: {
      name: "BB",
      nationality: "Korean",
      height: "164 cm",
      weight: "51kg",
      age: 21,
      cup: "C",
      description: "Lovely Korean beauty",
      image: "images/BB.jpg",
      hoverImages: ["images/BB1.jpg", "images/BB2.jpg", "images/BB3.jpg", "images/BB4.jpg"]
    },
    May: {
      name: "May",
      nationality: "Chinese",
      height: "164 cm",
      weight: "50 kg",
      age: 28,
      cup: "D",
      description: "Excellent Chinese team member",
      image: "images/may.jpg",
      hoverImages: ["images/may1.jpg", "images/may2.jpg", "images/may3.jpg"]
    },
    Anna: {
      name: "Anna",
      nationality: "Australian",
      height: "166 cm",
      weight: "49 kg",
      age: 30,
      cup: "B",
      description: "Blonde, blue-eyed Australian team member",
      image: "images/anna.jpg"
    },
    Bruna: {
      name: "Bruna",
      nationality: "Argentina",
      height: "167 cm",
      weight: "52kg",
      age: 23,
      cup: "D",
      description: "Charming playful Argentina team member",
      image: "images/bruna.jpg",
      hoverImages: ["images/bruna1.jpg", "images/bruna2.jpg", "images/bruna3.jpg"]
    },
    Tiffany: {
      name: "Tiffany",
      nationality: "Chinese",
      height: "165 cm",
      weight: "50kg",
      age: 23,
      cup: "D",
      description: "Charming playful Chinese team member",
      image: "images/tiffany.jpg",
      hoverImages: ["images/tiffany1.jpg", "images/tiffany2.jpg", "images/tiffany3.jpg"]
    },
    Angie: {
      name: "Angie",
      nationality: "Chinese",
      height: "170cm",
      weight: "54kg",
      age: 23,
      cup: "B",
      description: "Friendly cute young team member",
      image: "images/angie.jpg"
    },
    Kiko: {
      name: "Kiko",
      nationality: "Chinese",
      height: "165 cm",
      weight: "50kg",
      age: 23,
      cup: "D",
      description: "Charming playful Chinese team member",
      image: "images/kiko.jpg",
      hoverImages: ["images/kiko1.jpg", "images/kiko2.jpg", "images/kiko3.jpg"]
    },
    Ai: {
      name: "Ai",
      nationality: "Japanese",
      height: "160 cm",
      weight: "45 kg",
      age: 19,
      cup: "C",
      description: "Friendly cute japanese team member",
      image: "images/ai.jpg",
      hoverImages: ["images/ai1.jpg", "images/ai2.jpg", "images/ai3.jpg"]
    },
    Andie: {
      name: "Andie",
      nationality: "Korean",
      height: "165 cm",
      weight: "58 kg",
      age: 25,
      cup: "D",
      description: "Gorgeous korean team member",
      image: "images/andie.jpg",
      hoverImages: ["images/andie1.jpg", "images/andie2.jpg", "images/andie3.jpg", "images/andie4.jpg"]
    },
    Angelina: {
      name: "Angelina",
      nationality: "French",
      height: "165cm",
      weight: "66kg",
      age: 28,
      cup: "G",
      description: "Good at cosplay-loving team member",
      image: "images/angelina.jpg",
      hoverImages: ["images/angelina1.jpg", "images/angelina2.jpg", "images/angelina3.jpg"]
    },
    Sasa: {
      name: "Sasa",
      nationality: "Chinese",
      height: "165cm",
      weight: "49 kg",
      age: 31,
      cup: "D",
      description: "Amazing chinese girl",
      image: "images/sasa.jpg",
      hoverImages: ["images/sasa1.jpg", "images/sasa2.jpg", "images/sasa3.jpg"]
    },
    Jade: {
      name: "Jade",
      nationality: "Chinese",
      height: "165 cm",
      weight: "50 kg",
      age: 20,
      cup: "C",
      description: "Sweet and fresh student style",
      image: "images/Jade.jpg",
      hoverImages: ["images/jade1.jpg", "images/jade2.jpg", "images/jade3.jpg"]
    },
    Mickey: {
      name: "Mickey",
      nationality: "Chinese",
      height: "168 cm",
      weight: "47kg",
      age: 21,
      cup: "B",
      description: "Young pretty Chinese team member",
      image: "images/mickey.jpg",
      hoverImages: ["images/mickey1.jpg", "images/mickey2.jpg", "images/mickey3.jpg"]
    },
    Wendy: {
      name: "Wendy",
      nationality: "Chinese",
      height: "170 cm",
      weight: "49 kg",
      age: 21,
      cup: "B",
      description: "Tall, stunning Chinese beauty",
      image: "images/Wendy.jpg",
      hoverImages: ["images/wendy1.jpg", "images/wendyy2.jpg"]
    },
    Sweet: {
      name: "Sweet",
      nationality: "Philippines",
      height: "160 cm",
      weight: "47 kg",
      age: 24,
      cup: "C",
      description: "Friendly Philippines team member",
      image: "images/sweet.jpg",
      hoverImages: ["images/sweet1.jpg", "images/sweet2.jpg", "images/sweet3.jpg"]
    },
    Amber: {
      name: "Amber",
      nationality: "Taiwan",
      height: "159 cm",
      weight: "44 kg",
      age: 23,
      cup: "B",
      description: "Excellent skills Taiwan team member",
      image: "images/amber.jpg",
      hoverImages: ["images/amber1.jpg", "images/amber2.jpg", "images/amber3.jpg"]
    },
    Sky: {
      name: "Sky",
      nationality: "Thai",
      height: "168 cm",
      weight: "47kg",
      age: 22,
      cup: "B",
      description: "Fun playful Thai team member",
      image: "images/sky.jpg",
      hoverImages: ["images/sky1.jpg", "images/sky2.jpg", "images/sky3.jpg"]
    },
    Dodo: {
      name: "Dodo",
      nationality: "VIE MIX CHN",
      height: "163cm",
      weight: "48 kg",
      age: 20,
      cup: "B",
      description: "New to massage team member",
      image: "images/dodo.jpg",
      hoverImages: ["images/dodo1.jpg", "images/dodo2.jpg", "images/dodo3.jpg"]
    },
    Sally: {
      name: "Sally",
      nationality: "Thai",
      height: "164 cm",
      weight: "54 kg",
      age: 23,
      cup: "D",
      description: "New young thai team member",
      image: "images/sally.jpg",
      hoverImages: ["images/sally1.jpg", "images/sally2.jpg", "images/sally3.jpg", "images/sally4.jpg"]
    }
  };

  const weeklyNames = {
    monday: ["Domi", "Doris", "Lucy", "Jolie", "Aya", "Tia", "Rose"],
    tuesday: ["Lucy", "Aya", "Regina", "Tia", "Rose", "Rachel", "Melody"],
    wednesday: ["Aya", "Venessa", "Melody", "Tia", "Rose", "Lucy"],
    thursday: ["BB", "Lucy", "Melody", "Tia", "Rose", "Aya", "May", "Anna"],
    friday: ["Bruna", "Tiffany", "Angie", "Kiko", "Lucy", "Ai", "Melody", "Andie", "Tia", "Rose", "Angelina", "Sasa"],
    saturday: ["Jade", "Mickey", "May", "Wendy", "Sweet", "Melody", "Rose", "Andie", "Tia"],
    sunday: ["Amber", "Sky", "Dodo", "BB", "Ai", "Rose", "Sally", "Tia"]
  };

  const days = {};
  Object.entries(weeklyNames).forEach(([day, names]) => {
    days[day] = names.map(name => ({ ...profiles[name] }));
  });

  window.ROSTER_PROFILES = profiles;
  window.WEEKLY_ROSTER = {
    dateRange: "31 Aug – 6 Sep 2026",
    address: "295 Liverpool Road, Ashfield NSW 2131",
    days
  };
})();
