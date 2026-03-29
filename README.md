# NodelyPy SC Overlay

A Star Citizen companion overlay and PWA — built for desktop (Electron) and mobile (Progressive Web App).

Live at: **[nodelypy.github.io/sc-overlay](https://nodelypy.github.io/sc-overlay/overlay.html)**

---

## Features

### ⏱ Timer
- Stopwatch with start, pause, resume, and reset
- Lap tracking
- Quick countdown timers (5, 10, 15, 30 minutes)

### 💰 Trade
- Live commodity prices from UEX API
- Profit calculator — select a commodity, enter buy/sell prices and SCU amount
- Top cargo ship reference list with SCU capacities

### 💎 Mining
- Live refined ore prices (ship-mineable) from UEX API
- Live hand-mineable gem prices from UEX API
- Top-value ores highlighted in gold

### 🚀 Ships
- Full ship database from UEX API with search
- Ship details: manufacturer, crew size, length, SCU capacity
- Clickable rows open an embedded cargo grid viewer (via sc-cargo.space)

### ⌨ Keys
- Searchable Star Citizen keybinds reference
- Organised by category: Flight, Combat, On Foot, Mining

### 📝 Notes
- Quick notepad for jotting down mission details, trade routes, coordinates, targets
- Auto-saves locally (persists between sessions)

### 🎯 Missions
- ~130 blueprint missions sourced from SCMDB (Star Citizen Mission Database)
- 8 faction-specific blueprint reward pools with collapsible drop lists:
  - Vaughn, Foxwell, Eckhart, InterSec, Citizens For Prosperity, Headhunters, Bounty Hunters Guild, Bit Zeros
- Search by mission name, faction, type, or blueprint item name
- System filters: All, Stanton, Pyro, Nyx, Multi-system

---

## Desktop Overlay (Electron)

- Transparent, always-on-top overlay window
- Global hotkeys:
  - `Ctrl+Shift+O` — Toggle visibility
  - `Ctrl+Shift+P` — Toggle click-through mode
- Draggable titlebar

### Running the Desktop Overlay

```bash
cd sc-overlay
npm install
npm start
```

---

## Mobile App (PWA)

The overlay is also available as a Progressive Web App — install it directly from your phone's browser.

1. Open [nodelypy.github.io/sc-overlay/overlay.html](https://nodelypy.github.io/sc-overlay/overlay.html) on your phone
2. **Android (Chrome):** Tap ⋮ menu → "Add to Home Screen"
3. **iPhone (Safari):** Tap Share → "Add to Home Screen"

The app works offline (cached via service worker) and auto-updates when new versions are pushed.

---

## Credits & Acknowledgements

This project uses data and services from the following sources. Full credit goes to their respective creators and communities:

- **[UEX Corp](https://uexcorp.space/)** — Live commodity prices, ore/gem prices, and ship data provided via the UEX API. UEX Corp is a community-driven Star Citizen trading and data platform.

- **[SC Cargo Space](https://sc-cargo.space/)** — Cargo grid viewer embedded in the Ships tab. A community tool for visualising ship cargo grids.

- **[SCMDB (Star Citizen Mission Database)](https://scmdb.com/)** — Blueprint mission data and faction reward pool information used in the Missions tab.

- **[Font Awesome](https://fontawesome.com/)** — Icon library used for UI tab icons.

- **[Star Citizen](https://robertsspaceindustries.com/)** — Star Citizen is developed by Cloud Imperium Games. This project is a fan-made tool and is not affiliated with or endorsed by CIG.

---

## License

Copyright © 2025 NodelyPy. All Rights Reserved. See [LICENSE](LICENSE) for details.
