# Image slots

Drop photographs here using the exact filenames below. Any file that is missing
falls back to a textured placeholder automatically — the layout never breaks, so
you can add images one at a time.

| Filename               | Used in           | Suggested size | Subject                                 |
| ---------------------- | ----------------- | -------------- | --------------------------------------- |
| `hero-moringa.jpg`     | Hero, left panel  | 1200 x 900     | Bowl of moringa powder with leaves      |
| `hero-coir.jpg`        | Hero, right panel | 1200 x 900     | Stacked coir pith blocks / coco peat    |
| `moringa-powder.jpg`   | Products card     | 800 x 800      | Moringa powder close-up                 |
| `coir-pith.jpg`        | Products card     | 800 x 800      | Coir pith block close-up                |
| `process-source.jpg`   | Process step 1    | 300 x 300      | Moringa crop / farm                     |
| `process-process.jpg`  | Process step 2    | 300 x 300      | Powder being processed                  |
| `process-test.jpg`     | Process step 3    | 300 x 300      | Lab testing                             |
| `process-pack.jpg`     | Process step 4    | 300 x 300      | Export cartons                          |
| `process-ship.jpg`     | Process step 5    | 300 x 300      | Container ship / port                   |
| `india-gate.jpg`       | France band, left | 900 x 600      | India Gate, New Delhi                   |
| `paris.jpg`            | France band, right| 900 x 600      | Eiffel Tower / Paris skyline            |

Process step images are rendered as 80px circles, so tight crops work best.

To change a filename, edit `src/data/content.js` (products and process steps) or
the `src` props in `src/components/Hero.jsx` and `src/components/FranceBand.jsx`.
