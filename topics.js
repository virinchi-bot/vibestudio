const topics = [
    {
        id: 1,
        num: "01",
        badge: "Beginner",
        title: "What is Vibecoding?",
        subtitle: "The mindset shift that changes how you build forever.",
        sections: [
            {
                type: "text",
                heading: "The old way of learning to code",
                content: "Traditional coding means memorising syntax, fighting error messages, watching 10-hour tutorials, and building nothing for months. Most people quit before they ever ship anything real."
            },
            {
                type: "callout",
                content: "Vibecoding is different. You describe what you want to build in plain English. AI writes the code. You learn by reading, editing, and shipping — not by memorising."
            },
            {
                type: "text",
                heading: "What exactly is Vibecoding?",
                content: "Vibecoding = using AI as your coding co-pilot. You stay in creative flow — focused on the idea and the problem. AI handles the syntax. You handle the thinking."
            },
            {
                type: "code",
                heading: "Real example",
                code: `// You type this to AI:
"Build me a dark themed landing page
for a photography portfolio"

// AI gives you:
✓ index.html  — full structure
✓ style.css   — dark theme + animations
✓ script.js   — working interactions

// Time taken: 4 minutes`
            },
            {
                type: "points",
                heading: "The Vibecoding mindset",
                points: [
                    { icon: "🎯", title: "Ideas first", desc: "Focus on what you want to build, not the technical how." },
                    { icon: "🤝", title: "AI is your partner", desc: "Not a shortcut. A collaborator. You direct, AI executes." },
                    { icon: "🚢", title: "Ship fast, learn faster", desc: "Build something real every session. Real projects teach real skills." }
                ]
            }
        ]
    },
    {
        id: 2,
        num: "02",
        badge: "Beginner",
        title: "Your First Webpage",
        subtitle: "Build and deploy a real webpage in one session.",
        sections: [
            {
                type: "text",
                heading: "What we're building",
                content: "A clean personal webpage with your name, a short bio, and links. By the end of this topic it will be live on the internet with a real URL you can share."
            },
            {
                type: "callout",
                content: "HTML is just structure. Think of it like the skeleton of a webpage. Every website you've ever seen — Google, Instagram, YouTube — is built on HTML."
            },
            {
                type: "code",
                heading: "The basic structure of every webpage",
                code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, I'm Virinchi</h1>
    <p>I build things with AI.</p>
  </body>
</html>`
            },
            {
                type: "text",
                heading: "Adding style with CSS",
                content: "HTML gives structure. CSS makes it look good. Colors, fonts, spacing, animations — all CSS. You don't need to memorise it. Describe what you want to AI and it writes the CSS for you."
            },
            {
                type: "code",
                heading: "Making it look good",
                code: `/* Tell AI: make background dark,
   text white, center everything */

body {
  background: #0a0a0a;
  color: #f0f0f0;
  font-family: sans-serif;
  text-align: center;
  padding: 60px 20px;
}

h1 {
  font-size: 48px;
  color: #c8f135;
}`
            },
            {
                type: "points",
                heading: "Three things to remember",
                points: [
                    { icon: "🏗️", title: "HTML = structure", desc: "Headings, paragraphs, buttons, images — all HTML." },
                    { icon: "🎨", title: "CSS = style", desc: "Colors, fonts, spacing, animations — all CSS." },
                    { icon: "⚡", title: "JS = behaviour", desc: "Clicks, animations, API calls — all JavaScript." }
                ]
            }
        ]
    },
    {
        id: 3,
        num: "03",
        badge: "Beginner",
        title: "Prompting for Code",
        subtitle: "How to talk to AI so it gives exactly what you want.",
        sections: [
            {
                type: "text",
                heading: "Why prompting matters",
                content: "The quality of code AI gives you depends entirely on how well you describe what you want. A vague prompt gives vague code. A specific prompt gives exactly what you need."
            },
            {
                type: "callout",
                content: "Prompting is a skill. The best vibecoders are the best prompters. This is the most important thing you'll learn on this platform."
            },
            {
                type: "code",
                heading: "Bad prompt vs good prompt",
                code: `// BAD prompt — too vague
"make a button"

// GOOD prompt — specific and detailed
"Create a lime green button with
rounded corners, white text saying
'Get Started', subtle hover animation
that scales it up slightly, and a
glow effect on hover"`
            },
            {
                type: "points",
                heading: "The 4 parts of a great prompt",
                points: [
                    { icon: "📝", title: "What to build", desc: "Be specific — button, navbar, card, full page?" },
                    { icon: "🎨", title: "How it should look", desc: "Colors, fonts, size, style — describe visually." },
                    { icon: "⚡", title: "How it should behave", desc: "What happens on hover, click, scroll?" },
                    { icon: "📐", title: "Context", desc: "Is this for mobile? Dark theme? What's around it?" }
                ]
            },
            {
                type: "text",
                heading: "Iterating with AI",
                content: "Don't expect perfect output in one prompt. Vibecoding is a conversation. Get something close, then say 'make the button bigger' or 'change the color to pink' or 'add a loading animation'. Each message refines it."
            }
        ]
    },
    {
        id: 4,
        num: "04",
        badge: "Intermediate",
        title: "JavaScript Basics Fast",
        subtitle: "Only the JS you actually need to build things.",
        sections: [
            {
                type: "text",
                heading: "What JavaScript actually does",
                content: "HTML is the skeleton. CSS is the skin. JavaScript is the brain. It makes things happen — when you click a button, submit a form, fetch data from an API, animate something. Without JS, websites are just static documents."
            },
            {
                type: "code",
                heading: "The 4 things JS you'll use 90% of the time",
                code: `// 1. Select an element
const btn = document.getElementById('myBtn')

// 2. React to a click
btn.addEventListener('click', () => {
  console.log('clicked!')
})

// 3. Change content
document.getElementById('title').textContent = 'Hello!'

// 4. Fetch data from an API
const res = await fetch('https://api.example.com/data')
const data = await res.json()
console.log(data)`
            },
            {
                type: "callout",
                content: "You don't need to memorise all of JavaScript. You need to understand what's possible, then let AI write the specific syntax. That's vibecoding."
            },
            {
                type: "points",
                heading: "JS concepts that actually matter",
                points: [
                    { icon: "📦", title: "Variables", desc: "Store data. const for fixed values, let for changing ones." },
                    { icon: "🔁", title: "Functions", desc: "Reusable blocks of code. Write once, use anywhere." },
                    { icon: "🎯", title: "Events", desc: "React to user actions — click, scroll, type, submit." },
                    { icon: "🌐", title: "Fetch API", desc: "Talk to the internet. Get data from any API." }
                ]
            }
        ]
    },
    {
        id: 5,
        num: "05",
        badge: "Intermediate",
        title: "APIs — Talk to the Web",
        subtitle: "Connect your project to real data from anywhere.",
        sections: [
            {
                type: "text",
                heading: "What is an API?",
                content: "API = Application Programming Interface. Think of it as a waiter in a restaurant. You (your website) tell the waiter (API) what you want. The waiter goes to the kitchen (server) and brings back your order (data)."
            },
            {
                type: "callout",
                content: "Every app you use runs on APIs. Instagram's feed, Zomato's restaurants, Google Maps, weather apps — all fetching data through APIs. You can use them too."
            },
            {
                type: "code",
                heading: "Fetching real weather data",
                code: `// Get current weather for Hyderabad
const API_KEY = 'your_free_key_here'
const city = 'Hyderabad'

const res = await fetch(
  \`https://api.openweathermap.org/data/2.5/weather
  ?q=\${city}&appid=\${API_KEY}&units=metric\`
)

const weather = await res.json()
console.log(weather.main.temp) // 32.5
console.log(weather.weather[0].description) // "clear sky"`
            },
            {
                type: "points",
                heading: "Free APIs you can use right now",
                points: [
                    { icon: "🌤️", title: "OpenWeatherMap", desc: "Real weather data for any city. Free tier available." },
                    { icon: "🎵", title: "Spotify API", desc: "Search songs, get playlists, show now playing." },
                    { icon: "📰", title: "NewsAPI", desc: "Latest news headlines from any topic or country." },
                    { icon: "🤖", title: "Gemini API", desc: "Add AI to any project. Free and very generous." }
                ]
            }
        ]
    },
    {
        id: 6,
        num: "06",
        badge: "Intermediate",
        title: "Deploy & Share Live",
        subtitle: "Get your project on the internet in under 10 minutes.",
        sections: [
            {
                type: "text",
                heading: "What is deployment?",
                content: "Deployment = putting your project on a real server so anyone in the world can visit it with a URL. Right now your project only exists on your laptop. After deploying, it exists on the internet."
            },
            {
                type: "callout",
                content: "Vercel is the easiest and best free hosting for HTML, CSS, JS projects. No credit card. No server setup. Just drag, drop, done."
            },
            {
                type: "points",
                heading: "Deploy on Vercel in 4 steps",
                points: [
                    { icon: "1️⃣", title: "Go to vercel.com", desc: "Sign up with GitHub. Free forever for personal projects." },
                    { icon: "2️⃣", title: "Click Add New Project", desc: "Upload your project folder or connect your GitHub repo." },
                    { icon: "3️⃣", title: "Click Deploy", desc: "Vercel builds and deploys automatically. Takes 30 seconds." },
                    { icon: "4️⃣", title: "Share your URL", desc: "You get a real URL like yourproject.vercel.app instantly." }
                ]
            },
            {
                type: "text",
                heading: "Custom domain later",
                content: "Once you have a domain (like virinchi.dev), you connect it to Vercel in one setting. Everything stays the same — only the URL in the browser changes. That's it."
            },
            {
                type: "code",
                heading: "Your deploy checklist",
                code: `Before deploying — check these:

✓ index.html exists in root folder
✓ All file names are lowercase
✓ No broken image links
✓ Tested in browser locally
✓ API keys are not hardcoded
  (use environment variables)

After deploying:
✓ Visit your live URL
✓ Test on mobile too
✓ Share it everywhere 🚀`
            }
        ]
    }
]

// Attach slug + clean URL to each topic (single source of truth)
const TOPIC_SLUGS = {
    1: 'what-is-vibecoding',
    2: 'your-first-webpage',
    3: 'prompting-for-code',
    4: 'javascript-basics-fast',
    5: 'apis-talk-to-the-web',
    6: 'deploy-and-share-live'
}
topics.forEach(t => {
    t.slug = TOPIC_SLUGS[t.id]
    t.url  = '/topic/' + t.slug
})