#  Walking Sponge Animation

An interactive CSS and JavaScript animation of a cartoon sponge character walking across a scenic path with dynamic leg movement, eye tracking, and environmental elements.

![Walking Sponge Demo]: 

##  Features

### Character Animation
- 🚶 Smooth walking cycle with realistic leg and arm movement
- 👀 Interactive eyes that follow your mouse cursor
- 🦘 Click the character to make it jump!
- 💃 Body bounce effect synchronized with walking
- 👟 Dynamic foot rotation for natural stepping motion

### Visual Effects
- ☀️ Animated sun with pulsing glow effect
- ☁️ Floating clouds drifting across the sky
- 🌸 Swaying flowers in the foreground
- 🎨 Gradient backgrounds with depth and lighting
- 🌈 Professional shadows and visual polish

### Technical Highlights
- Pure vanilla JavaScript (no frameworks)
- CSS animations and keyframes
- DOM-based animation using `requestAnimationFrame`
- Responsive character interactions
- Smooth mathematical animations using sine waves

## 🎮 Demo

**[Live Demo](#)** <!-- Add your GitHub Pages or demo link -->

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/walking-sponge.git
```

2. Navigate to the project directory:
```bash
cd walking-sponge
```

3. Open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

That's it! No installation or build process needed.

## 📁 Project Structure

```
walking-sponge/
│
├── index.html          # Main HTML file with character structure
├── styles.css          # All styling and CSS animations
├── script.js           # JavaScript animation logic
└── README.md           # Project documentation
```

## 🎨 How It Works

### Walking Animation
The character's walking motion is created using sine waves for smooth, natural movement:

```javascript
// Leg rotation using sine waves
const leftAngle = Math.sin(step) * 35;
const rightAngle = Math.sin(step + Math.PI) * 35;
```

### Eye Tracking
Eyes follow your mouse cursor using trigonometry:

```javascript
const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);
const distance = Math.min(3, Math.hypot(mouseX - eyeX, mouseY - eyeY) / 100);
```

### Body Bounce
Vertical bounce synchronized with steps:

```javascript
const bounceY = Math.abs(Math.sin(bounce)) * 8;
```

## 🎯 Interactive Features

- **Mouse Movement**: Move your cursor around to make the character's eyes follow you
- **Click Character**: Click on the walking sponge to make it jump
- **Continuous Loop**: Character walks across the screen and reappears on the left

## 🛠️ Customization

### Adjust Walking Speed
In `script.js`, modify the position increment:
```javascript
position += 1.5;  // Change this value (default: 1.5)
```

### Change Colors
In `styles.css`, modify the gradient values:
```javascript
background: linear-gradient(135deg, #ffeb3b 0%, #ffd74a 100%);
```

### Modify Animation Speed
Adjust the step increment in `script.js`:
```javascript
step += 0.12;  // Change this value (default: 0.12)
```

## 📚 What I Learned

This project demonstrates:
- **DOM Manipulation**: Controlling HTML elements with JavaScript
- **CSS Animation**: Creating smooth visual effects
- **Trigonometry**: Using `Math.sin()`, `Math.cos()`, `Math.atan2()` for realistic motion
- **Animation Timing**: Using `requestAnimationFrame` for smooth 60fps animation
- **Event Handling**: Mouse tracking and click interactions
- **Creative Coding**: Combining math and code for visual expression

## 🌟 Future Enhancements

- [ ] Add sound effects for footsteps
- [ ] Multiple characters with different personalities
- [ ] Day/night cycle with lighting changes
- [ ] Mobile touch controls
- [ ] Obstacles to jump over
- [ ] Background parallax scrolling
- [ ] Character customization options

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: https://github.com/ProximaD

## 🙏 Acknowledgments

- Inspired by classic 2D character animations
- Mathematical concepts from creative coding tutorials
- Animation techniques from game development resources

## 📖 Resources

If you want to learn more about animation programming:
- [The Nature of Code](https://natureofcode.com) - Physics and math for animation
- [Coding Math](https://www.youtube.com/user/codingmath) - Video tutorials on math for programmers
- [MDN Animation Guide](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations) - Web animation fundamentals

---

⭐ If you found this project helpful, please give it a star!

## 📸 Screenshots

### Desktop View
<img width="2554" height="1255" alt="image" src="https://github.com/user-attachments/assets/7ba43250-82e4-4f89-a977-df41bda9aae8" />

---

Made with ❤️ and lots of ☕
