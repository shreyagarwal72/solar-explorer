export interface Moon {
  name: string;
  texture?: string;
  position: { left: number; top: number };
  scale: number;
  trajectorySize: { width: number; height: number };
  trajectoryPosition: { left: number; top: number };
}

export interface PlanetData {
  id: string;
  name: string;
  type: string;
  distance: string;
  color: string;
  colorClass: string;
  description: string;
  previewTexture: string;
  moons: Moon[];
  facts: {
    title: string;
    content: string;
  }[];
  image?: string;
}

export const planets: PlanetData[] = [
  {
    id: "mercury",
    name: "Mercury",
    type: "Planet",
    distance: "0.39 AU",
    color: "#E8927C",
    colorClass: "text-planet-mercury",
    description: "The closest planet to the sun. It circles the sun faster than all the other planets, which is why Romans named it after their swift-footed messenger god.",
    previewTexture: "https://www.solarsystemscope.com/images/textures/full/2k_makemake_fictional.jpg",
    moons: [],
    facts: [
      {
        title: "A year on Mercury is just 88 days long",
        content: "One solar day on Mercury lasts the equivalent of 176 Earth days while the sidereal day lasts 59 Earth days. Mercury is nearly tidally locked to the Sun."
      },
      {
        title: "Mercury is the smallest planet in the Solar System",
        content: "One of five planets visible with the naked eye, Mercury is just 4,879 kilometres across its equator, compared with 12,742 kilometres for the Earth."
      },
      {
        title: "Mercury is the second densest planet",
        content: "Each cubic centimetre has a density of 5.4 grams, with only the Earth having a higher density. This is largely due to Mercury being composed mainly of heavy metals and rock."
      },
      {
        title: "Mercury has wrinkles",
        content: "As the iron core of the planet cooled and contracted, the surface of the planet became wrinkled. Scientists have named these wrinkles Lobate Scarps."
      }
    ],
    image: "https://i2.wp.com/www.astronomytrek.com/wp-content/uploads/2012/11/mercury-1.jpg?fit=678%2C381&ssl=1"
  },
  {
    id: "venus",
    name: "Venus",
    type: "Planet",
    distance: "0.723 AU",
    color: "#b45d15",
    colorClass: "text-planet-venus",
    description: "Named for the Roman goddess of love and beauty. In ancient times, Venus was often thought to be two different stars, the evening star and the morning star.",
    previewTexture: "https://nasa3d.arc.nasa.gov/shared_assets/images/ven0aaa2/ven0aaa2-copy-428-321.jpg",
    moons: [],
    facts: [
      {
        title: "A day on Venus lasts longer than a year",
        content: "It takes 243 Earth days to rotate once on its axis. The planet's orbit around the Sun takes 225 Earth days."
      },
      {
        title: "Venus rotates in the opposite direction",
        content: "This means that Venus is rotating in the opposite direction to the Sun, also known as retrograde rotation."
      },
      {
        title: "Venus is the second brightest object in the night sky",
        content: "Only the Moon is brighter. With a magnitude of between -3.8 to -4.6, Venus is so bright it can be seen during daytime."
      },
      {
        title: "Atmospheric pressure is 92 times greater than Earth's",
        content: "The pressure felt by a human on the surface would be equivalent to that experienced deep beneath the sea on Earth."
      }
    ],
    image: "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2014/2-whatistheave.jpg"
  },
  {
    id: "earth",
    name: "Earth",
    type: "Planet",
    distance: "1 AU",
    color: "#26daaa",
    colorClass: "text-planet-earth",
    description: "Earth, our home. It is the only planet known to have an atmosphere containing free oxygen, oceans of liquid water on its surface, and, of course, life.",
    previewTexture: "https://img00.deviantart.net/04ef/i/2009/114/3/e/new_earth_texture_map_by_lightondesigns.jpg",
    moons: [
      {
        name: "Moon",
        texture: "https://img2.cgtrader.com/items/702173/682fad2a11/92k-moon-color-map-3d-model.jpg",
        position: { left: 800, top: -160 },
        scale: 0.45,
        trajectorySize: { width: 1500, height: 1500 },
        trajectoryPosition: { left: -150, top: -110 }
      }
    ],
    facts: [
      {
        title: "The Earth's rotation is gradually slowing",
        content: "This deceleration is happening at approximately 17 milliseconds per hundred years. It could be 140 million years before the length of a day increases to 25 hours."
      },
      {
        title: "The Earth was once believed to be the centre of the universe",
        content: "Ancient scientists insisted that the Earth remained static, whilst other celestial bodies travelled in circular orbits around it."
      },
      {
        title: "Earth has a powerful magnetic field",
        content: "This phenomenon is caused by the nickel-iron core of the planet, coupled with its rapid rotation. This field protects the Earth from the effects of solar wind."
      },
      {
        title: "There is only one natural satellite of Earth",
        content: "As a percentage of the size of the body it orbits, the Moon is the largest satellite of any planet in our solar system."
      }
    ],
    image: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=350"
  },
  {
    id: "mars",
    name: "Mars",
    type: "Planet",
    distance: "1.524 AU",
    color: "#e55f45",
    colorClass: "text-planet-mars",
    description: "Fourth planet from the Sun and the second smallest planet in the solar system. Named after the Roman god of war, often described as the \"Red Planet\".",
    previewTexture: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mars_texture.jpg",
    moons: [
      {
        name: "Deimos",
        texture: "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA07782_hires.jpg",
        position: { left: 900, top: -100 },
        scale: 0.45,
        trajectorySize: { width: 1770, height: 1770 },
        trajectoryPosition: { left: -317, top: -110 }
      },
      {
        name: "Phobos",
        texture: "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA07782_hires.jpg",
        position: { left: 100, top: -160 },
        scale: 0.5,
        trajectorySize: { width: 1600, height: 1600 },
        trajectoryPosition: { left: -200, top: -160 }
      }
    ],
    facts: [
      {
        title: "Mars and Earth have approximately the same landmass",
        content: "Even though Mars has only 15% of the Earth's volume, Earth has 70% of its surface covered by water."
      },
      {
        title: "Mars is home to the tallest mountain in the solar system",
        content: "Olympus Mons, a shield volcano, is 21km high and 600km in diameter."
      },
      {
        title: "Only 18 missions to Mars have been successful",
        content: "As of September 2014 there have been 40 missions to Mars, but only 18 have been successful."
      }
    ],
    image: "https://1.bp.blogspot.com/-ou7Je3OVg6U/WYtxDqjNp_I/AAAAAAAACSQ/fsopS5VtFg4bmlv8hQNfiRYfJqTygCotQCLcBGAs/s2048/Martian%2Blandscape%2Bby%2BAmante%2BLombardi.jpg"
  },
  {
    id: "jupiter",
    name: "Jupiter",
    type: "Planet",
    distance: "5.203 AU",
    color: "orange",
    colorClass: "text-planet-jupiter",
    description: "Jupiter is the largest planet in the solar system. Fittingly, it was named after the king of the gods in Roman mythology.",
    previewTexture: "https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA07782_hires.jpg",
    moons: [
      {
        name: "Io",
        texture: "http://stevealbers.net/albers/sos/jupiter/io/io_rgb_cyl.jpg",
        position: { left: 100, top: -100 },
        scale: 0.4,
        trajectorySize: { width: 1500, height: 1500 },
        trajectoryPosition: { left: -210, top: -189 }
      },
      {
        name: "Europa",
        texture: "http://i.imgur.com/ZZBiHOH.jpg",
        position: { left: 400, top: -210 },
        scale: 0.45,
        trajectorySize: { width: 1530, height: 1530 },
        trajectoryPosition: { left: -165, top: -130 }
      },
      {
        name: "Ganymede",
        texture: "https://vignette.wikia.nocookie.net/planet-texture-maps/images/1/14/Ganymede.jpg",
        position: { left: 900, top: -70 },
        scale: 0.4,
        trajectorySize: { width: 1760, height: 1760 },
        trajectoryPosition: { left: -360, top: -114 }
      }
    ],
    facts: [
      {
        title: "Jupiter has the shortest day of all the planets",
        content: "It turns on its axis once every 9 hours and 55 minutes."
      },
      {
        title: "The Great Red Spot is a huge storm on Jupiter",
        content: "It has raged for at least 350 years. It is so large that three Earths could fit inside it."
      },
      {
        title: "Jupiter has 79 known moons",
        content: "The four largest are Io, Europa, Ganymede and Callisto, known as the Galilean moons."
      }
    ]
  },
  {
    id: "saturn",
    name: "Saturn",
    type: "Planet",
    distance: "9.539 AU",
    color: "#b29d81",
    colorClass: "text-planet-saturn",
    description: "Saturn is the sixth planet from the sun and the second largest planet in the solar system. Saturn was the Roman name for Cronus, the lord of the Titans.",
    previewTexture: "https://www.solarsystemscope.com/images/textures/full/2k_saturn.jpg",
    moons: [
      {
        name: "Titan",
        texture: "https://pre00.deviantart.net/bea3/th/pre/i/2017/057/7/f/titan_texture_map_8k_by_fargetanik-db0f8m0.png",
        position: { left: 100, top: -100 },
        scale: 0.4,
        trajectorySize: { width: 1500, height: 1500 },
        trajectoryPosition: { left: -210, top: -189 }
      },
      {
        name: "Dione",
        texture: "https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA12577-640x350.jpg",
        position: { left: 400, top: -210 },
        scale: 0.45,
        trajectorySize: { width: 1530, height: 1530 },
        trajectoryPosition: { left: -165, top: -130 }
      },
      {
        name: "Enceladus",
        texture: "https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA0NC8yMzkvb3JpZ2luYWwvZW5jZWxhZHVzLW1hcC1jYXNzaW5pLmpwZw==",
        position: { left: 900, top: -70 },
        scale: 0.4,
        trajectorySize: { width: 1760, height: 1760 },
        trajectoryPosition: { left: -360, top: -114 }
      }
    ],
    facts: [
      {
        title: "Saturn has the most extensive ring system",
        content: "They are made mostly of chunks of ice and small amounts of carbonaceous dust."
      },
      {
        title: "Saturn has 82 known moons",
        content: "Titan is the largest and comprises more than 90% of the mass in orbit around Saturn."
      },
      {
        title: "Saturn is the flattest planet",
        content: "Its polar diameter is 90% of its equatorial diameter due to its low density and fast rotation."
      }
    ]
  },
  {
    id: "uranus",
    name: "Uranus",
    type: "Planet",
    distance: "19.18 AU",
    color: "#8dcdd8",
    colorClass: "text-planet-uranus",
    description: "The first planet to be discovered by scientists. The planet is notable for its dramatic tilt, which causes its axis to point nearly directly at the sun.",
    previewTexture: "https://img00.deviantart.net/957c/i/2017/165/4/9/uranus_texture_map_by_jcpag2010-db7yjwb.png",
    moons: [
      {
        name: "Miranda",
        texture: "http://celestia.simulatorlabbs.com/CelSL/textures/medres/miranda.jpg",
        position: { left: 100, top: -100 },
        scale: 0.4,
        trajectorySize: { width: 1500, height: 1500 },
        trajectoryPosition: { left: -210, top: -189 }
      },
      {
        name: "Ariel",
        texture: "http://celestia.freedoors.org/Celestia-Doors/textures/medres/ariel.jpg",
        position: { left: 400, top: -210 },
        scale: 0.45,
        trajectorySize: { width: 1530, height: 1530 },
        trajectoryPosition: { left: -165, top: -130 }
      },
      {
        name: "Umbriel",
        texture: "http://celestia.freedoors.org/Celestia-Doors/textures/medres/titania.jpg",
        position: { left: 900, top: -70 },
        scale: 0.4,
        trajectorySize: { width: 1760, height: 1760 },
        trajectoryPosition: { left: -360, top: -114 }
      }
    ],
    facts: [
      {
        title: "Uranus makes one trip around the Sun every 84 Earth years",
        content: "During some parts of its orbit, one or the other of its poles point directly at the Sun."
      },
      {
        title: "Uranus is often referred to as an \"ice giant\"",
        content: "While it has a hydrogen and helium upper layer like other gas giants, it also has an icy mantle."
      },
      {
        title: "Uranus hits the coldest temperatures of any planet",
        content: "With its minimum atmospheric temperature of -224°C, Uranus is nearly the coldest planet in the solar system."
      }
    ]
  },
  {
    id: "neptune",
    name: "Neptune",
    type: "Planet",
    distance: "30.06 AU",
    color: "#4f83e2",
    colorClass: "text-planet-neptune",
    description: "Neptune is the eighth and farthest known planet from the Sun. It was named after the Roman god of the sea due to its blue color.",
    previewTexture: "https://img00.deviantart.net/f068/i/2017/165/b/c/neptune_texture_map_by_jcpag2010-dbcjcv5.png",
    moons: [
      {
        name: "Triton",
        texture: "https://img00.deviantart.net/b934/i/2016/198/b/0/triton_texture_map_14k_by_fargetanik-daac9tm.png",
        position: { left: 100, top: -100 },
        scale: 0.4,
        trajectorySize: { width: 1500, height: 1500 },
        trajectoryPosition: { left: -210, top: -189 }
      },
      {
        name: "Proteus",
        texture: "http://2.bp.blogspot.com/-NrsDNbSk8TU/VKmLHdOgw0I/AAAAAAAAHvY/dod1Kqv2Ta8/s1600/NereidTxt2.jpg",
        position: { left: 400, top: -210 },
        scale: 0.45,
        trajectorySize: { width: 1530, height: 1530 },
        trajectoryPosition: { left: -165, top: -130 }
      },
      {
        name: "Nereid",
        texture: "http://4.bp.blogspot.com/-3eyaVs4az74/VKmMpLo6FYI/AAAAAAAAHvs/zK5NTllQYnk/s1600/NereidTxt.jpg",
        position: { left: 900, top: -70 },
        scale: 0.4,
        trajectorySize: { width: 1760, height: 1760 },
        trajectoryPosition: { left: -360, top: -114 }
      }
    ],
    facts: [
      {
        title: "Neptune has the strongest winds in the Solar System",
        content: "Winds whip clouds of frozen methane across the planet at speeds of more than 2,000 km/hour."
      },
      {
        title: "Neptune is the smallest of the ice giants",
        content: "Despite being smaller than Uranus, Neptune has a greater mass."
      },
      {
        title: "Neptune has 14 known moons",
        content: "The most interesting moon is Triton, a frozen world that is spewing nitrogen ice and dust particles from below its surface."
      }
    ]
  },
  {
    id: "pluto",
    name: "Pluto",
    type: "Dwarf planet",
    distance: "39.5 AU",
    color: "#FF8732",
    colorClass: "text-planet-pluto",
    description: "Pluto, once considered the ninth and most distant planet from the sun, is now the largest known dwarf planet in the solar system.",
    previewTexture: "https://pre00.deviantart.net/4677/th/pre/f/2015/314/4/e/pluto_map__2015_nov_10__by_snowfall_the_cat-d918tlb.png",
    moons: [],
    facts: [
      {
        title: "Pluto was reclassified as a dwarf planet in 2006",
        content: "The International Astronomical Union defined the term \"planet\" and Pluto did not meet the criteria."
      },
      {
        title: "Pluto has five known moons",
        content: "The largest is Charon, which is so big that Pluto and Charon are sometimes referred to as a double dwarf planet system."
      },
      {
        title: "Pluto is smaller than many moons",
        content: "It is smaller than the Earth's Moon as well as the Galilean moons of Jupiter."
      }
    ]
  }
];
