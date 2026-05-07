# Rashmi Patil — Modern Portfolio Website

A modern, responsive portfolio built with **React**, featuring:
- 🌗 Dark / Light theme toggle
- 🤖 Agentic AI Chatbot (powered by Claude)
- ✨ Smooth animations & micro-interactions
- 📱 Fully responsive for all devices
- ⚡ Filterable project gallery
- 📊 Animated skill bars
- 🕐 Career timeline
- 📬 Contact form

---

## 🚀 Quick Start (VS Code)

### Prerequisites
- Node.js v18+ — https://nodejs.org
- Git — https://git-scm.com
- VS Code — https://code.visualstudio.com

---

### Step 1 — Clone & Open
```bash
# Clone this repo (after pushing to GitHub)
git clone https://github.com/rashmipatil47/rashmi-portfolio.git

# Open in VS Code
cd rashmi-portfolio
code .
```

### Step 2 — Install Dependencies
Open the VS Code terminal (`Ctrl + `` ` ``) and run:
```bash
npm install
```

### Step 3 — Add Your Anthropic API Key
The AI Chatbot needs a Claude API key.

1. Go to https://console.anthropic.com and get your API key
2. Open `src/components/Chatbot.js`
3. The API calls go through the Anthropic API — **for production**, create a simple backend proxy (see Backend Setup below) so your key isn't exposed.

> **Quick local test:** You can temporarily hardcode the key in `Chatbot.js` by adding an `Authorization` header:
```js
headers: {
  'Content-Type': 'application/json',
  'x-api-key': 'YOUR_KEY_HERE',       // ← temporary dev only
  'anthropic-version': '2023-06-01',
},
```

### Step 4 — Run Locally
```bash
npm start
```
Opens at **http://localhost:3000** 🎉

---

## 🔑 Chatbot API Key — Production Setup (Express Proxy)

To keep your API key safe, create a simple Node.js proxy:

```bash
mkdir portfolio-api && cd portfolio-api
npm init -y
npm install express cors axios dotenv
```

Create `server.js`:
```js
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors({ origin: 'https://rashmipatil47.github.io' }));
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      req.body,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'API error' });
  }
});

app.listen(3001, () => console.log('Proxy running on :3001'));
```

Create `.env`:
```
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

Then in `Chatbot.js`, change the fetch URL to your proxy:
```js
const response = await fetch('https://your-api.vercel.app/api/chat', { ... });
```

Deploy the proxy to **Vercel**, **Railway**, or **Render** (all have free tiers).

---

## 🌐 Deploy to GitHub Pages

### Step 1 — Create GitHub Repo
```bash
git init
git add .
git commit -m "🚀 Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/rashmipatil47/rashmi-portfolio.git
git push -u origin main
```

### Step 2 — Update homepage in package.json
Already set to:
```json
"homepage": "https://rashmipatil47.github.io/rashmi-portfolio"
```

### Step 3 — Deploy
```bash
npm run deploy
```

This builds the app and pushes to `gh-pages` branch automatically.

### Step 4 — Enable GitHub Pages
1. Go to your GitHub repo → **Settings** → **Pages**
2. Set Source to `gh-pages` branch
3. Your site will be live at: `https://rashmipatil47.github.io/rashmi-portfolio`

---

## 📁 Project Structure
```
rashmi-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js / .css
│   │   ├── Hero.js / .css
│   │   ├── About.js / .css
│   │   ├── Skills.js / .css
│   │   ├── Projects.js / .css
│   │   ├── Experience.js / .css
│   │   ├── Contact.js / .css
│   │   ├── Footer.js / .css
│   │   └── Chatbot.js / .css     ← AI Chatbot
│   ├── context/
│   │   └── ThemeContext.js        ← Dark/Light theme
│   ├── data/
│   │   └── portfolioData.js       ← All your content
│   ├── styles/
│   │   └── global.css             ← Theme variables & utilities
│   ├── App.js
│   └── index.js
└── package.json
```

## 🎨 Customizing Your Content

All portfolio content is in **one file**: `src/data/portfolioData.js`

Update:
- `personalInfo` — your name, bio, links
- `skills` — your skill levels
- `projects` — your projects with descriptions
- `experience` — your work history
- `chatbotSystemPrompt` — tune the AI assistant's personality

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI Framework |
| react-type-animation | Typing effect in Hero |
| react-intersection-observer | Scroll-triggered animations |
| react-icons | Icon library |
| framer-motion | Page animations |
| gh-pages | GitHub Pages deployment |
| Claude API | AI Chatbot backend |

---

## 📞 Support

Questions? Reach out at rashmipatil47@gmail.com
