# OPEN/DAYS 12 — The Keepers Issue

All the creative-life features from version 11 are present, including the original collage-style homepage, morning routines, the Daily Edit, 14-day skill chapters, constellations, mastery grimoire, weekly planner, project ateliers, weekly reset and Life Archive.

## Two ways to open it

**1. Quick, standalone copy:** open `OPEN_DAYS_12_Standalone.html` from the download. It includes all app code/styles in one HTML file and runs locally, but **cannot be installed as a PWA from a `file://` URL**. You can still use the tracker and its JSON backups. Some browser privacy modes block local storage for standalone files.

**2. Installable PWA:** upload the contents of the `OPEN_DAYS_12_PWA.zip` file to the **root** of a static HTTPS host (for instance, a dedicated project on Netlify or GitHub Pages). Ensure the host serves `index.html`, `manifest.webmanifest`, `sw.js`, and the `icons` folder at the same location. Open that HTTPS address, let the app load once with internet access, then use Install App in the browser or your device's Add to Home Screen control. Desktop browsers commonly show an install icon or install entry in the browser menu; on iPhone, use Safari's Share → Add to Home Screen. A local web server at `http://localhost` also allows PWA testing. **Do not open `index.html` directly from disk for installation.**

### Test locally

If you have Python installed, unzip the PWA in a folder and run:

```bash
python3 -m http.server 8080
```

Visit `http://localhost:8080`. Browser installation rules still vary. A normal downloaded HTML file can always be used without installation.

## Offline behavior

The service worker caches same-origin app files (HTML, JS, CSS, icons, local botanical SVG and manifest) after a successful first load. The app can then load offline from the same hosted address. Google Fonts and externally hosted photographs may require internet. It does not cache your photo URLs from third-party hosts.

## Data storage, backups & recovery

- All tracker data still uses the existing `the-open-days-v1` localStorage key, so older save data remains compatible when opened on the **same origin**. Opening the same app from a new URL or different browser creates separate storage.
- **Settings → Data & Recovery** shows a guided backup export, JSON import preview, device storage information and a local recovery shelf.
- Exports use JSON (including archive images stored in the tracker). Save exported files somewhere outside the browser such as your computer or private cloud folder.
- Local recovery snapshots are stored in IndexedDB on the **same device and same origin**. Up to eight snapshots are retained, created periodically while changing data, before imports/restores when possible, and manually on demand. The browser may deny IndexedDB or erase it along with website data.
- Browser storage durability can be requested when supported, but it **doesn't guarantee** data will never be deleted.
- Import shows a preview before replacing your data, with an attempted pre-import snapshot and explicit confirmation. Snapshots can be inspected and restored from Settings.
- A weekly backup reminder is shown when your recorded external export is more than seven days old or missing. The app doesn't silently download or sync backups, and it cannot remind you when closed.
- There is **no account, cloud sync, server-side database, or cross-device automatic transfer**.

### Moving from version 11

1. Open v11 and use Settings → Export backup. Confirm the JSON file exists in your Downloads.
2. Open v12 (standalone or hosted PWA).
3. Go to Settings → Data & Recovery → Import / inspect backup. Confirm the counts and choose Import.
4. Check your projects, practice sessions, Life Archive, chapters and mastery tree before deleting the old copy.

Version 12 does not require any third-party credentials, and all user content stays local until you choose to export it.
