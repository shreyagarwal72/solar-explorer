# 🌌 Orbit World

<div align="center">

![Orbit World](https://img.shields.io/badge/Orbit_World-Space_Explorer-orange?style=for-the-badge&logo=planet)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![No JavaScript](https://img.shields.io/badge/JavaScript-None_Required-success?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

**An immersive, interactive solar system explorer built with pure HTML and CSS. No JavaScript required!**

[Live Demo](https://lovable.dev/projects/6bd8f616-d80a-47f7-bc08-0dfb891abc9e) · [Report Bug](https://github.com/yourusername/orbit-world/issues) · [Request Feature](https://github.com/yourusername/orbit-world/issues)

</div>

---

## ✨ Features

- 🪐 **9 Celestial Bodies** — Explore Mercury through Pluto with accurate astronomical data
- 🌙 **Moon Systems** — Discover the major moons orbiting each planet
- 🎨 **Pure CSS 3D** — Immersive 3D transformations without a single line of JavaScript
- 📖 **Rich Information** — Detailed descriptions and facts about each celestial body
- ⚡ **CSS Animations** — Smooth transitions and planetary rotation effects
- 📱 **Responsive** — Works on desktop browsers
- 🎯 **SEO Optimized** — Full meta tags, Open Graph, and structured data

## 🚀 How It Works

This project demonstrates the incredible power of CSS:

- **Radio Button Hack** — Planet selection is controlled entirely through CSS `:checked` selectors
- **CSS Transforms** — 3D perspective and translateZ create depth illusion
- **Sibling Selectors** — Complex state management using `+` and `~` combinators
- **CSS Animations** — Keyframe animations for planet rotation

```css
/* Example: Planet selection using CSS only */
input.planet3:checked + label + div .solar_systm:nth-of-type(3) .planet {
  transform: translateZ(0px) translateY(0) rotatex(4deg) scaleX(0.89);
  opacity: 1;
  animation: planet 60s infinite linear;
}
```

## 📁 Project Structure

```
orbit-world/
├── public/
│   ├── orbit-world/
│   │   ├── index.html      # Main HTML file
│   │   └── style.css       # All CSS styles (2000+ lines!)
│   ├── favicon.svg         # Custom planet favicon
│   └── robots.txt          # SEO configuration
├── src/
│   └── pages/
│       └── Index.tsx       # React wrapper (iframe)
└── README.md
```

## 🌍 Planet Data

| Planet | Distance from Sun | Key Feature |
|--------|-------------------|-------------|
| Mercury | 0.39 AU | Fastest orbit — 88 Earth days |
| Venus | 0.723 AU | Hottest planet — 465°C surface |
| Earth | 1 AU | Our home — the only known life |
| Mars | 1.524 AU | The Red Planet — tallest mountain |
| Jupiter | 5.203 AU | Largest planet — Great Red Spot |
| Saturn | 9.539 AU | Famous rings — 82 moons |
| Uranus | 19.18 AU | Sideways spin — ice giant |
| Neptune | 30.06 AU | Windiest planet — 2000 km/h |
| Pluto | 39.5 AU | Dwarf planet — heart-shaped glacier |

## 🎨 Design Philosophy

Orbit World embraces a **cosmic aesthetic**:

- **Deep black background** simulating the void of space
- **Glowing planetary atmospheres** using CSS box-shadows
- **3D perspective** creating depth and immersion
- **Warm accent colors** (#f39041) inspired by solar flares
- **Montserrat font** for clean, modern typography

## 🛠️ Technical Highlights

### CSS-Only Interactivity
- No JavaScript event listeners
- State managed through hidden radio inputs
- Label elements as clickable triggers
- `:checked` pseudo-class for state detection

### 3D Effects
- `perspective: 800px` on parent container
- `transform-style: preserve-3d` for child elements
- `translateZ()` for depth positioning
- `rotateX()` for viewing angle

### Performance
- Hardware-accelerated CSS transforms
- Minimal repaints through opacity transitions
- No JavaScript execution overhead

## 🤝 Contributing

Contributions are welcome! This project proves what's possible with pure CSS.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Planet textures from [Solar System Scope](https://www.solarsystemscope.com/)
- Astronomical data from NASA
- Original CSS concept by [@coding.stella](https://codepen.io)
- Montserrat font from Google Fonts

---

<div align="center">

**Built with ❤️ using pure HTML & CSS**

*No JavaScript was harmed in the making of this solar system*

</div>
