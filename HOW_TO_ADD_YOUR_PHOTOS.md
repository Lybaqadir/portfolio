# How to add your real photos

All images now live in one place: `src/assets/images/`

Right now that folder has 9 placeholder images (just colored boxes with labels)
so the site builds and runs. Swap them out with your real photos using the
**exact same filenames** below — no code changes needed.

| Filename                          | Used in        | Where it shows up                  |
|-----------------------------------|----------------|-------------------------------------|
| `about-main.jpg`                  | About section  | Big photo of you                   |
| `about-secondary.jpg`             | About section  | Small floating photo (bottom-right)|
| `project-shiftguard.jpg`          | Projects       | ShiftGuard card                    |
| `project-hotel-system.jpg`        | Projects       | Hotel Management System card       |
| `project-garagego.jpg`            | Projects       | GarageGo card                      |
| `experience-alexmind.jpg`         | Experience     | AlexMind role                      |
| `experience-chorate.jpg`          | Experience     | Chorate AI role                    |
| `experience-tutoring.jpg`         | Experience     | Peer Tutoring role                  |
| `hackathon-snoonu.jpg`            | Hackathons     | Snoonu Hackathon photo             |

## Steps

1. Rename your photo to match the filename in the table (e.g. rename your
   headshot to `about-main.jpg`).
2. Drop it into `src/assets/images/`, replacing the placeholder.
3. Save — if `npm run dev` is running, the browser updates automatically.

Your photo doesn't have to be exactly `.jpg` — `.png` or `.webp` work too, just
update the file extension in the matching `import` line in the component
(e.g. in `src/app/components/About.tsx`, change
`import imgAbout from "../../assets/images/about-main.jpg";` to `.png` if needed).

## Why this changed

The original Figma Make export referenced photos by their raw iPhone filenames
(like `IMG_2833.jpeg`) but the actual photo files never made it into the export
— only the code referencing them did. That broke the build entirely. This
version uses a dedicated `src/assets/images/` folder with clear, stable names
so swapping photos is just drag-and-drop.
