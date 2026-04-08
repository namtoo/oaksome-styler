# FINISH_INT Data Structure Analysis

## 1. Excel Source — `NEW_DATA_OAKSOME - Copy.xlsx`

### File overview

| Property | Value |
|---|---|
| Sheet | `FInish_Int` |
| Total rows (data) | 18,352 |
| Unique FINISH_INT items | 31 |
| Unique collections | 4 |
| Unique front variants (`col12`) | 36 |
| Unique FINISH_EXT values (`col7`) | 160 |
| Unique valid triplets `(collection × front × finish_ext)` | 2,025 |
| Average FINISH_INT items per triplet | 9.1 (range: 7–12) |

---

## 2. Column Map

The sheet has **two header rows** (row 0 = group labels, row 1 = field names). Data starts at row 2.

| Col | Field name | Role | Example |
|---|---|---|---|
| 0 | `Value` | **FINISH_INT item key** (JS object `value`) | `0WE28_CST` |
| 1 | `Label` | FINISH_INT display name | `Everest White CST` |
| 2 | `collection` | **Filter key 1** — exact collection name | `COLLECTION 1` |
| 3 | `facade` | Front base label (human, not the code) | `FA 01` |
| 4 | `finition_ext` | FINISH_EXT human label ← **pivot table uses this** | `Black Tobacco` |
| 5 | `ref_teinte` | Exterior color reference | `0WE28` |
| 6 | `ref_aspect` | Exterior aspect suffix | `CST` |
| 7 | `Decor_Texture` | **Filter key 3** — FINISH_EXT item key | `0WE28_CST` |
| 8 | `Collection_Facade_finishExt` | Composite description key | `COLLECTION 1_FA 01_Everest White CST` |
| 9 | `aspect_name` | FINISH_EXT display name (≠ pivot label) | `Soft Pearl` |
| 10 | `Colonne4` | Material type short code | `MEL` |
| 11 | `Colonne5` | Front base code | `FA_01` |
| 12 | `Colonne6` | **Filter key 2** — exact FRONT_TYPE value | `FA_01_MEL` |
| 13 | `type_matiere_ext` | Exterior material description | `mélamine / stratifié` |
| 14 | `gamme_look_ext` | Exterior look family | `neutre blanc` |
| 15 | `Fabricant_Ext` | Exterior manufacturer | `UN` |
| 16 | `lien img` | Exterior finish image path | `UN_0WE28_CST.png` |
| 17 | `finition_int` | Interior finish label (= col 1) | `Everest White CST` |
| 18 | `decor_texture2` | Interior finish code (= col 0) | `0WE28_CST` |
| 19 | `type_int` | Interior material description | `melamine/stratifie` |
| 20 | `Colonne1` | Interior material type short | `MEL` |
| 21 | `Colonne2` | Interior front base code | `FA_01` |
| 22 | `Colonne3` | Interior front full code | `FA_01_MEL` |
| 23 | `Fabricant_Int` | Interior manufacturer | `UN` |
| 24 | `Lien_IMG_Int` | **Interior finish image path** | `UN_0WE28_CST.png` |

### Critical observations

- **col 3 (`facade`) ≠ col 12 (`Colonne6`)**. `facade` is human-readable (`FA 01`) while `Colonne6` is the exact code that matches `FRONT_TYPE_ITEMS` values (`FA_01_MEL`). The filter must use **col 12**.
- **col 4 (`finition_ext`) ≠ col 9 (`aspect_name`)**. The pivot table uses `finition_ext` as the display label (e.g., `Black Tobacco`), while `options_02.js` currently uses `aspect_name` (e.g., `Soft Pearl`). These are different naming systems for the same exterior finish.
- **col 7 (`Decor_Texture`)** is the actual `value` key of the FINISH_EXT item used in filtering.
- `Lien_IMG_Int` (col 24) is **constant per FINISH_INT item** — it does not vary by combination.

---

## 3. The Fundamental Pattern — Flat Relation Table

Each row encodes exactly **one valid combination**:

```
FINISH_INT item  ×  collection  ×  front_variant  ×  finish_ext
    (col 0)           (col 2)       (col 12)           (col 7)
```

This is a **relational join table**. The 18,352 rows represent all allowed combinations. A FINISH_INT item appears for a given `(collection, front, finish_ext)` triplet **only if a row exists for it**.

### Example: `WE_181` (Decor_Texture) = "Black Tobacco" (finition_ext label)

`WE_181` maps to `finition_ext = "Black Tobacco"` (col 4), not "181" (the `aspect_name`/label in the FINISH_EXT dataset). This explains why the pivot shows `Black Tobacco` while `options_02.js` uses `181` — two different naming systems.

For `COLLECTION 1 × FA_03_LAQ × WE_181` → **exactly 11 FINISH_INT items** in the Excel. This matches the pivot (`Black Tobacco: 11`). The current filter incorrectly returns **15**.

---

## 4. Why the Current `options_02.js` Structure Is Wrong

The conversion script built each FINISH_INT object by **aggregating all rows for that value into flat arrays**:

```js
// Current (wrong) structure for "Seashell CST" (0U147_CST, 1663 rows)
{
  value: "0U147_CST",
  label: "Seashell CST",
  Attributes: {
    collection: ["COLLECTION 1", "COLLECTION 2", ...],   // all collections seen across 1663 rows
    front:      ["FA_01_MEL", "FA_01_LAQ", ...],          // all fronts seen across 1663 rows
    finish_ext: ["0WE28_CST", "00025_CST", ..., "0H915_V2A", ...],  // ALL 151 exteriors seen
    Lien_IMG_Int: ["UN_0U147_CST.png"]
  }
}
```

The filter then checks each attribute **independently**:

```
collection.includes(designStyle)   ← TRUE for COLLECTION 2 (seen in some of the 1663 rows)
front.includes(activeFront)        ← TRUE for FA_01_MEL (seen in some rows)
finish_ext.includes(activeFinishExt) ← TRUE for 0H915_V2A (seen in some rows, but different collection/front rows!)
```

All three pass → Seashell CST appears. But the Excel only has a row for Seashell CST with `0H915_V2A` in a **different** collection/front context. The specific triplet `COLLECTION 2 × FA_01_MEL × 0H915_V2A` has **no row** for Seashell CST in the Excel.

### Observed impact

| Combination | Excel (correct) | Current filter (wrong) | Extra items |
|---|---|---|---|
| `COLL2 × FA_01_MEL × 0H915_V2A` | 12 | 18 | +6 |
| `COLL1 × FA_03_LAQ × WE_181` | 11 | 15 | +4 |
| Max across all combinations | 12 | 18 | — |

---

## 5. Proposed FINISH_INT Object Structures

The filter must check the **three keys simultaneously** as a triplet, not independently.

---

### Option A — Array of combination objects

```js
{
  value: "0U147_CST",
  label: "Seashell CST",
  Lien_IMG_Int: "UN_0U147_CST.png",
  combinations: [
    { collection: "COLLECTION 1", front: "FA_01_MEL", finish_ext: "0WE28_CST" },
    { collection: "COLLECTION 1", front: "FA_01_MEL", finish_ext: "0WE28_MST" },
    // ... up to 1663 entries for this item
  ]
}
```

**Filter:**
```js
item.combinations.some(c =>
  c.collection === designStyle &&
  c.front      === activeFront &&
  c.finish_ext === activeFinishExt
)
```

| Pro | Con |
|---|---|
| Exact representation of the source data | Large payload (18,352 objects across 31 items) |
| Easy to generate from Excel rows | `.some()` is O(n) per item |
| Can add extra fields per combination | — |

---

### Option B — Nested map `collection → front → Set<finish_ext>`

```js
{
  value: "0U147_CST",
  label: "Seashell CST",
  Lien_IMG_Int: "UN_0U147_CST.png",
  map: {
    "COLLECTION 1": {
      "FA_01_MEL": ["0WE28_CST", "0WE28_MST", "0UD81_MST", ...],
      "FA_01_LAQ": ["0WE28_CST", ...],
      // ...
    },
    "COLLECTION 2": { ... },
    // ...
  }
}
```

**Filter:**
```js
item.map[designStyle]?.[activeFront]?.includes(activeFinishExt)
```

| Pro | Con |
|---|---|
| O(1) lookup for collection + front | Still O(n) for the final `.includes()` |
| Compact — deduplicates collections/fronts | Slightly more complex to generate |
| Very readable filter logic | — |

---

### Option C — Set of composite keys (recommended)

```js
{
  value: "0U147_CST",
  label: "Seashell CST",
  Lien_IMG_Int: "UN_0U147_CST.png",
  combos: new Set([
    "COLLECTION 1§FA_01_MEL§0WE28_CST",
    "COLLECTION 1§FA_01_MEL§0WE28_MST",
    "COLLECTION 2§FA_01_MEL§0H362_BST",
    // ... 1663 strings for this item
  ])
}
```

Or stored as a plain array (for JSON serialisation) and converted to `Set` at load time:

```js
{
  value: "0U147_CST",
  label: "Seashell CST",
  Lien_IMG_Int: "UN_0U147_CST.png",
  combos: [
    "COLLECTION 1§FA_01_MEL§0WE28_CST",
    "COLLECTION 1§FA_01_MEL§0WE28_MST",
    // ...
  ]
}
```

**Filter** (after converting combos to a `Set` at load time):

```js
item.comboSet.has(`${designStyle}§${activeFront}§${activeFinishExt}`)
```

| Pro | Con |
|---|---|
| **O(1) lookup** via Set | Requires one-time Set construction at load |
| Smallest payload per item (one string per row) | Composite key is opaque |
| Trivial to generate: one string per Excel row | Cannot add per-combination metadata |

---

## 6. Recommendation

**Option B or C**, depending on whether you need fast exact lookup or readability.

For this configurator (real-time filtering), **Option C** is best:

1. Generate one composite key string per Excel row during conversion.
2. At load time, build a `Set` from the array for O(1) lookups.
3. The filter collapses to a single `.has()` call — no array traversal.

### Conversion script logic (pseudo-code)

```js
// For each unique FINISH_INT value, collect all valid triplets
const items = {};
for (const row of excelRows) {
  const value    = row[0];   // FINISH_INT value
  const label    = row[1];   // FINISH_INT label
  const image    = row[24];  // Lien_IMG_Int
  const combo    = `${row[2]}§${row[12]}§${row[7]}`;  // collection§front_full§finish_ext

  if (!items[value]) items[value] = { value, label, Lien_IMG_Int: image, combos: [] };
  items[value].combos.push(combo);
}
```

### Updated filter function

```js
// At load time — run once
for (const item of FINISH_INT_ITEMS) {
  item.comboSet = new Set(item.combos);
}

// Filter
function getFilteredFinishInt(designStyle, activeFront, activeFinishExt) {
  const key = `${designStyle}§${activeFront}§${activeFinishExt}`;
  return FINISH_INT_ITEMS.filter(item => item.comboSet.has(key));
}
```

---

## 7. Additional Notes

- **FINISH_EXT labelling discrepancy**: `options_02.js` labels FINISH_EXT items by `aspect_name` (col 9, e.g., `Soft Pearl`). The pivot table and this Excel use `finition_ext` (col 4, e.g., `Black Tobacco`) as the display label. If the FINISH_EXT dataset is also regenerated from this Excel, col 4 should be used as the label, not col 9.
- **`col 3` (`facade`) must NOT be used for filtering** — it is a human-readable group label (`FA 01`) that does not distinguish material variants. Use **col 12 (`Colonne6`)** which contains the exact variant code (`FA_01_MEL`) that matches `FRONT_TYPE_ITEMS` values.
- **Row count per FINISH_INT item** ranges from 7 (`0H912_V2A`) to 1,663 (`0U147_CST` / `0U222_CST`). Total across all 31 items = 18,352 combos — manageable as 18,352 strings in a flat array.
