/* ============================================================
   295 ASHFIELD — SINGLE EDITABLE ROSTER FILE
   客户以后只需要修改此文件：人员资料、图片、Hover图片、每周排班。
   Hover photos rotate while the pointer stays on a profile.
============================================================ */
(function () {
  const profiles = {
    Domi: {
      name: "Domi",
      nationality: "Chinese",
      height: "160 cm",
      weight: "44 kg",
      age: 21,
      cup: "B",
      description: "New young Chinese team member",
      image: "images/domi.jpg",
      hoverImages: [
        "images/domi1.jpg",
        "images/domi2.jpg",
        "images/domi3.jpg"
      ]
    },
    Sky: {
      name: "Sky",
      nationality: "Thai",
      height: "168 cm",
      weight: "48 kg",
      age: 22,
      cup: "B",
      description: "New tall and slim Thai team member",
      image: "images/sky.jpg",
      hoverImages: [
        "images/sky1.jpg",
        "images/sky2.jpg",
        "images/sky3.jpg",
        "images/sky4.jpg",
        "images/sky5.jpg",
        "images/sky6.jpg"
      ]
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
      hoverImages: [
        "images/Doris1.jpg",
        "images/Doris2.jpg",
        "images/Doris3.jpg",
        "images/Doris4.jpg",
        "images/Doris5.jpg",
        "images/Doris6.jpg"
      ]
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
      hoverImages: [
        "images/lucy1.jpg",
        "images/lucy2.jpg",
        "images/lucy3.jpg"
      ]
    },
    Lulu: {
      name: "Lulu",
      nationality: "Chinese",
      height: "165 cm",
      weight: "57 kg",
      age: 26,
      cup: "E",
      description: "Confident and friendly Chinese team member",
      image: "images/lulu.jpg"
    },
    Aya: {
      name: "Aya",
      nationality: "Chinese",
      height: "169 cm",
      weight: "50 kg",
      age: 24,
      cup: "C",
      description: "Friendly Chinese team member",
      image: "images/aya.jpg",
      hoverImages: []
  
    },
    Sofia: {
      name: "Sofia",
      nationality: "Filipino",
      height: "164 cm",
      weight: "54 kg",
      age: 23,
      cup: "D",
      description: "Cute Filipino team member",
      image: "images/sofia.jpg",
      hoverImages: [
        "images/sofia1.jpg"
      ]
    },
    Ayumi: {
      name: "Ayumi",
      nationality: "Japanese",
      height: "166 cm",
      weight: "49 kg",
      age: 28,
      cup: "D",
      description: "Fun cosplay-loving Japanese team member",
      image: "images/Ayumi.jpg",
      hoverImages: [
        "images/Ayumi1.jpg",
        "images/Ayumi2.jpg",
        "images/Ayumi3.jpg",
        "images/Ayumi4.jpg"
      ]
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
      hoverImages: [
        "images/Melody1.jpg",
        "images/Melody2.jpg",
        "images/Melody3.jpg",
        "images/Melody4.jpg"
      ]
    },
    Mona: {
      name: "Mona",
      nationality: "Thai",
      height: "165 cm",
      weight: "52 kg",
      age: 22,
      cup: "D",
      description: "Gorgeous Thai team member",
      image: "images/mona.jpg",
      hoverImages: [
        "images/mona1.jpg",
        "images/mona2.jpg",
        "images/mona3.jpg",
        "images/mona4.jpg"
      ]
    },
    Lina: {
      name: "Lina",
      nationality: "Korean",
      height: "159 cm",
      weight: "46 kg",
      age: 22,
      cup: "C",
      description: "Lovely Korean beauty",
      image: "images/lina.jpg",
      hoverImages: [
        "images/lina1.jpg",
        "images/lina2.jpg",
        "images/lina3.jpg",
        "images/lina4.jpg",
        "images/lina5.jpg",
        "images/lina6.jpg",
        "images/lina7.jpg"
      ]
    },
    Jeniffer: {
      name: "Jeniffer",
      nationality: "Singaporean",
      height: "168 cm",
      weight: "50 kg",
      age: 26,
      cup: "D",
      description: "Glamorous Singaporean team member",
      image: "images/Jenifer.jpg",
      hoverImages: [
        "images/Jenifer1.jpg",
        "images/Jenifer2.jpg",
        "images/Jenifer3.jpg"
      ]
    },
    Mina: {
      name: "Mina",
      nationality: "Thai",
      height: "165 cm",
      weight: "57 kg",
      age: 28,
      cup: "E",
      description: "Friendly Thai team member",
      image: "images/mina.jpg",
      hoverImages: [
        "images/Mina1.jpg",
        "images/Mina2.jpg",
        "images/Mina3.jpg"
      ]
    },
    Isabella: {
      name: "Isabella",
      nationality: "Singaporean",
      height: "168 cm",
      weight: "50 kg",
      age: 26,
      cup: "D",
      description: "Stunning Singaporean team member",
      image: "images/Isabella.jpg"
    },
    Angela: {
      name: "Angela",
      nationality: "Chinese",
      height: "165 cm",
      weight: "49 kg",
      age: 21,
      cup: "C",
      description: "Friendly Chinese team member",
      image: "images/Angela.jpg"
    },
    Candice: {
      name: "Candice",
      nationality: "Taiwanese",
      height: "166 cm",
      weight: "48 kg",
      age: 22,
      cup: "C",
      description: "Friendly Taiwanese team member",
      image: "images/candice.jpg"
   
  
    },
    May: {
      name: "May",
      nationality: "Chinese",
      height: "166 cm",
      weight: "54kg",
      age: 24,
      cup: "D",
      description: "Gorgeous Chinese team member",
      image: "images/may.jpg",
      hoverImages: [
        "images/may1.jpg",
        "images/may2.jpg",
        "images/may3.jpg"
      ]
    },
   
    Andie: {
      name: "Andie",
      nationality: "Korean",
      height: "166 cm",
      weight: "60 kg",
      age: 29,
      cup: "D",
      description: "Charming Korean team member",
      image: "images/andie.jpg",
       hoverImages: [
        "images/andie1.jpg",
        "images/andie2.jpg",
        "images/andie3.jpg"
      ]
    },
    Anna: {
      name: "Anna",
      nationality: "Australian",
      height: "166 cm",
      weight: "49 kg",
      age: 30,
      cup: "B",
      description: "Blonde, blue-eyed Australian team member",
      image: "images/anna.jpg",
       hoverImages: [
        "images/anna1.jpg",
        "images/anna2.jpg",
        "images/anna3.jpg"
      ]
    },
    Rina: {
      name: "Rina",
      nationality: "Chinese",
      height: "169 cm",
      weight: "58 kg",
      age: 20,
      cup: "D",
      description: "University student",
      image: "images/Rina.jpg"
    },
    Ai: {
      name: "Ai",
      nationality: "Japanese",
      height: "158 cm",
      weight: "43 kg",
      age: 19,
      cup: "B",
      description: "Fresh-faced Japanese beauty",
      image: "images/ai.jpg",
      hoverImages: [
        "images/ai1.jpg",
        "images/ai2.jpg",
        "images/ai3.jpg"
      ]

    },
    Mickey: {
      name: "Mickey",
      nationality: "Chinese",
      height: "169 cm",
      weight: "49 kg",
      age: 20,
      cup: "B",
      description: "Tall young Chinese beauty",
      image: "images/Mickey.jpg",
      hoverImages: [
        "images/mickey1.jpg",
        "images/mickey2.jpg",
        "images/mickey3.jpg",
        "images/mickey4.jpg"
      ]
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
      hoverImages: [
        "images/jdae1.jpg",
        "images/jade2.jpg",
        "images/jade3.jpg"
      ]
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
      hoverImages: [
        "images/wendy1.jpg",
        "images/wendy2.jpg",
        "images/wendy3.jpg"
      ]
     },
    Erin: {
      name: "Erin",
      nationality: "Chinese",
      height: "165cm",
      weight: "49 kg",
      age: 21,
      cup: "B",
      description: "TOP1, stunning Chinese beauty",
      image: "images/erin.jpg",
      hoverImages: [
        "images/erin1.jpg",
        "images/erin.jpg"
      
      ]
  
    },
     Tia: {
      name: "Tia",
      nationality: "Vietnam",
      height: "160 cm",
      weight: "54 kg",
      age: 28,
      cup: "D",
      description: "Playfull Friendly Vietnam team member",
      image: "images/tia.jpg",
      hoverImages: [
        "images/tia1.jpg",
        "images/tia2.jpg",
        "images/tia3.jpg"
      ]
     },
     Rose: {
      name: "Rose",
      nationality: "Vietnam",
      height: "162 cm",
      weight: "55 kg",
      age: 26,
      cup: "D",
      description: "Playfull Friendly Vietnam team member",
      image: "images/rose.jpg",
      hoverImages: [
        "images/rose1.jpg",
        "images/rose2.jpg",
        "images/rose3.jpg"
      ]
      },
     Bella: {
      name: "Bella",
      nationality: "Vietnam",
      height: "163 cm",
      weight: "55 kg",
      age: 24,
      cup: "D",
      description: "Playfull Friendly Vietnam team member",
      image: "images/bella.jpg",
      hoverImages: [
        "images/bella1.jpg",
        "images/bella2.jpg",
        "images/bella3.jpg"
      ]
    },
     Liya: {
      name: "Liya",
      nationality: "Thai",
      height: "166 cm",
      weight: "51 kg",
      age: 21,
      cup: "D",
      description: "Beauty Friendly Thai team member",
      image: "images/liya.jpg",
      hoverImages: [
        "images/liya1.jpg",
        "images/liya2.jpg",
        "images/liya3.jpg"
      ]
    },
     Sasa: {
      name: "Sasa",
      nationality: "Chinese",
      height: "166 cm",
      weight: "55 kg",
      age: 25,
      cup: "D",
      description: "Open M Friendly Chinese team member",
      image: "images/sasa.jpg",
      hoverImages: [
        "images/sasa1.jpg",
        "images/sasa2.jpg",
        "images/sasa3.jpg"
      ]
     
     },
     Moon: {
      name: "Moon",
      nationality: "Vietnam",
      height: "163 cm",
      weight: "55 kg",
      age: 26,
      cup: "D",
      description: "Beauty Friendly Vietnam team member",
      image: "images/moon.jpg",
      hoverImages: [
        "images/moon1.jpg",
        "images/moon2.jpg",
        "images/moon3.jpg"
      ]
    
    },
     Kitty: {
      name: "Kitty",
      nationality: "Indonesia",
      height: "162 cm",
      weight: "55 kg",
      age: 26,
      cup: "D",
      description: "Beauty Friendly Indonesia team member",
      image: "images/kitty.jpg",
      hoverImages: [
        "images/kitty1.jpg",
        "images/kitty2.jpg",
        "images/kitty3.jpg"
      ]

    },
     Fiona: {
      name: "Fiona",
      nationality: "Chinese",
      height: "162 cm",
      weight: "55 kg",
      age: 24,
      cup: "D",
      description: " Friendly and Excellent skills Chinese team member",
      image: "images/fiona.jpg",
      hoverImages: [
        "images/fiona1.jpg",
        "images/fiona2.jpg",
        "images/fiona3.jpg"
      ]
    
    },
     Bruna: {
      name: "Bruna",
      nationality: "Argentina",
      height: "168 cm",
      weight: "55 kg",
      age: 21,
      cup: "D",
      description: " Super Model Argentina team member",
      image: "images/bruna.jpg",
      hoverImages: [
        "images/bruna1.jpg",
        "images/bruna2.jpg",
        "images/bruna3.jpg"
      ]
    },
     Dodo: {
      name: "Dodo",
      nationality: "Vietnam",
      height: "166 cm",
      weight: "50 kg",
      age: 21,
      cup: "D",
      description: " New to Industry team member",
      image: "images/dodo.jpg",
      hoverImages: [
        "images/dodo1.jpg",
        "images/dodo2.jpg",
        "images/dodo3.jpg"
      ]
    
     },
     Mona: {
      name: "Mona",
      nationality: "Thai",
      height: "163 cm",
      weight: "50 kg",
      age: 21,
      cup: "D",
      description: " New Pretty thai team member",
      image: "images/mona-main.jpg",
      hoverImages: [
        "images/mona1.jpg",
        "images/mona2.jpg",
        "images/mona3.jpg"
      ]
    
    },
    Amber: {
      name: "Amber",
      nationality: "Taiwanese",
      height: "160 cm",
      weight: "50 kg",
      age: 23,
      cup: "B",
      role: "Massage Practitioner",
      description: "Highly skilled massage practitioner",
      image: "images/amber.jpg"
    
    },
    Rani: {
      name: "Rani",
      nationality: "India",
      height: "163cm",
      weight: "57 kg",
      age: 22,
      cup: "D",
      role: "Massage Practitioner",
      description: "Highly skilled massage practitioner",
      
    },
    Aria: {
      name: "Aria",
      nationality: "Africa",
      height: "175 cm",
      weight: "55 kg",
      age: 21,
      cup: "B",
      role: "super model ",
      description: "Charming young africa ",
      image: "images/aria.jpg",
      hoverImages: [
        "images/aria1.jpg",
        "images/aria2.jpg",
        "images/aria3.jpg"
      ]

    },
    Angelina: {
      name: "Angelina",
      nationality: "French",
      height: "165 cm",
      weight: "65 kg",
      age: 29,
      cup: "D",
      role: "Good at cosplay-loving",
      description: "Friendly massage practitioner",
      image: "images/angelina.jpg",
      hoverImages: [
        "images/angelina1.jpg",
        "images/angelina2.jpg",
        "images/anglina3.jpg"
      ]

    },
    Selina: {
      name: "Selina",
      nationality: "Chinese",
      height: "164 cm",
      weight: "48 kg",
      age: 22,
      cup: "C",
      description: "Attractive Chinese beauty",
      image: "images/selina.jpg"
    }
  };

  const weeklyNames = {
    monday: ["Lucy", "Melody","Bella", "Tia", "Rose" ],
    tuesday: [ "Liya","Erin","Lucy", "Wendy", "Melody", "Tia", "Rose"],
    wednesday: ["Ai","Angelina", "Jeniffer",  "Lucy", "Tia", "Rose"],
    thursday: ["Aria","Fiona","Lucy", "May",  "Melody", "Andie", "Anna" ,"Tia", "Rose"],
    friday: [ "Mona", "Ai","Sasa", "Angelina","Melody", "May","Tia", "Rose"],
    saturday: ["Mickey", "Jade", "May", "Lucy","Wendy","Melody",  "Tia", "Rose"],
    sunday: ["Lucy", "Dodo", "Melody","Rani", "Ai", "Angelina", "Tia", "Rose"]
  };

  const days = {};
  Object.entries(weeklyNames).forEach(([day, names]) => {
    days[day] = names.map(name => ({ ...profiles[name] }));
  });

  window.ROSTER_PROFILES = profiles;
  window.WEEKLY_ROSTER = {
    dateRange: "21 SE – 27 SEP 2026",
    address: "295 Liverpool Road, Ashfield NSW 2131",
    days
  };
})();
