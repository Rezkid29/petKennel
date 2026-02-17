# Pet Kennel Manager

A React app where you can feed a dog and a gorilla and watch them go from sad to happy. Built this to learn React class components and state management.

## What it does

Got two animals - a golden retriever puppy and a gorilla. They both start out looking sad/grumpy. Click the "Feed Me!" button on their cards and they transform into happy versions with big smiles. The dog sticks his tongue out and the gorilla shows all his teeth - it's pretty funny.

## Tech stuff

- React 19 with class components (old school, I know)
- Vite for the dev server
- Uses `.map()` to render the animal cards
- Parent component manages state, child components handle the display
- Props flow down, events bubble up

## Running it

### Local dev
```bash
npm install
npm run dev
```
Opens at http://localhost:5173

### Docker (if you're into that)

Development with hot reload:
```bash
npm run docker:dev
```

Production build:
```bash
npm run docker:prod
```
Opens at http://localhost:8080

Stop everything:
```bash
npm run docker:down
```

## How it works

The parent component (`App.jsx`) holds the state - just an array of two animals. When you click a button on a card, it fires an event up to the parent, parent updates the state, and React re-renders that card with the happy image. That's it.

Each animal card is its own component with a ton of HTML - image, status, stats, button, footer, all that. Keeps the parent clean and focused on just managing data.

## The images

Using real photos I uploaded:
- `sad-dog.png` - serious looking golden retriever puppy
- `happy-dog.png` - same puppy but smiling with tongue out
- `sad-gorilla.png` - gorilla with a grumpy frown
- `happy-gorilla.png` - gorilla with the biggest grin you've ever seen

They're in `/public/images/`

## Project structure

```
src/
├── App.jsx              - parent component, manages state
├── Header.jsx           - shows stats at the top
├── CardGrid.jsx         - wraps the animal cards
├── childComponent.jsx   - individual animal card (lots of HTML)
└── data.js              - initial animal data
```

Docker files are there if you want to containerize it. Multi-stage build keeps the production image tiny.

## Why this exists

Built this as a learning project for React fundamentals - class components, state, props, events, that whole flow. Picked animals with funny expressions because why not make it entertaining.

That's pretty much it. Feed the animals, watch them smile.
