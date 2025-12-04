import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const planetData = {
  mercury: {
    name: "Mercury",
    facts: "Closest planet to the Sun, fastest orbit at 88 Earth days, extreme temperature variations from -180°C to 430°C, no moons, smallest planet, 4,879 km diameter, no atmosphere, heavily cratered surface.",
  },
  venus: {
    name: "Venus",
    facts: "Second planet from Sun, hottest planet at 465°C average, rotates backwards (retrograde), 225 Earth days orbit, thick CO2 atmosphere, similar size to Earth at 12,104 km, no moons, volcanic surface.",
  },
  earth: {
    name: "Earth",
    facts: "Third planet, only known planet with life, 71% water coverage, 12,742 km diameter, nitrogen-oxygen atmosphere, one moon, 365.25 day orbit, magnetic field protection, average 15°C temperature.",
  },
  mars: {
    name: "Mars",
    facts: "Red Planet due to iron oxide, 6,779 km diameter, two moons (Phobos and Deimos), Olympus Mons tallest volcano in solar system, -65°C average, thin CO2 atmosphere, polar ice caps, potential for past water.",
  },
  jupiter: {
    name: "Jupiter",
    facts: "Largest planet at 139,820 km diameter, gas giant, 95+ moons including Io/Europa/Ganymede/Callisto, Great Red Spot storm, 9h 56m day, -110°C, strongest magnetic field, could fit 1,300 Earths inside.",
  },
  saturn: {
    name: "Saturn",
    facts: "Famous ring system spanning 282,000 km, second largest planet at 116,460 km, 146 moons including Titan, rings made of ice and rock, least dense planet (would float on water), gas giant composition.",
  },
  uranus: {
    name: "Uranus",
    facts: "Ice giant, 98° axial tilt (rolls on side), 50,724 km diameter, 28 moons, -224°C, 84 Earth year orbit, discovered by William Herschel in 1781, blue-green color from methane, faint ring system.",
  },
  neptune: {
    name: "Neptune",
    facts: "Farthest planet, strongest winds at 2,100 km/h, ice giant, 49,244 km diameter, 16 moons including Triton, -214°C, deep blue color, discovered through mathematical predictions 1846, 165 year orbit.",
  },
  pluto: {
    name: "Pluto",
    facts: "Dwarf planet since 2006, 2,377 km diameter, 5 moons including Charon, -230°C, 248 year orbit, heart-shaped Tombaugh Regio, Kuiper Belt object, discovered 1930 by Clyde Tombaugh, eccentric orbit.",
  },
};

const websiteInfo = `
Orbit World is an interactive 3D solar system explorer website created by Vanshu Agarwal of Nextup Studio. 
Features include:
- Pure CSS 3D planet rendering with realistic textures and animations
- Interactive planet selection menu showing distance from Sun in AU
- Detailed planet descriptions with stats (diameter, temperature, moons, orbital period)
- "Read More" panels with comprehensive information for each celestial body
- Guided tour mode that automatically cycles through all planets
- Ambient space sounds using Web Audio API
- Keyboard navigation (arrow keys) for planet switching
- Starfield background with parallax effect and shooting stars
- Nebula visual effects with floating animations
- Saturn's iconic ring system visualization
- Moon systems for Earth, Mars, Jupiter, Saturn, Uranus, and Neptune
- Responsive design with mobile disclaimer
- Loading screen animation
- SEO optimized with structured data

The solar system includes: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, and dwarf planet Pluto.
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, context } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Build context about the solar system and website
    let systemPrompt = `You are the Orbit World AI assistant, an expert guide for an interactive solar system explorer website. You help users learn about planets, the solar system, astronomy, and explain the website's features.

Website Information:
${websiteInfo}

Planet Data:
${Object.values(planetData).map(p => `${p.name}: ${p.facts}`).join('\n\n')}

IMPORTANT GUIDELINES:
- **Keep answers BRIEF** - maximum 2-3 short sentences unless the user asks for details
- Use **bold text** with double asterisks for important facts and planet names (e.g., **Jupiter** is the largest planet)
- Be enthusiastic but concise about space and astronomy
- Provide accurate scientific information in bite-sized chunks
- When asked about website features, explain them briefly
- Use interesting facts to engage users
- If asked about the current planet (provided in context), focus on that planet
`;

    if (context?.currentPlanet) {
      const planetKey = context.currentPlanet.toLowerCase() as keyof typeof planetData;
      const planet = planetData[planetKey];
      if (planet) {
        systemPrompt += `\n\nThe user is currently viewing ${planet.name}. If relevant, you can reference this in your response.`;
      }
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits depleted. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "I couldn't generate a response. Please try again.";

    return new Response(JSON.stringify({ response: aiResponse }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in orbit-ai-chat:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
