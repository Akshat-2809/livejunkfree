# Live Junk Free: replace all placeholder content with real content from livejunkfree.ca

## Rule for this pass
Only use content that already exists on livejunkfree.ca. **Don't invent anything:** no sample reviews, no made-up stats, no stock photos, and no new promises.
- If a real value exists on their site, use it (the values are listed below).
- If it doesn't exist on their site, **remove that element or sentence entirely**. Don't leave "to confirm", XXX or placeholder text.
- Remove every "to confirm" / "confirm scope" / "approved prices" / "sample — replace…" / "Stock photos for the pitch…" tag across all pages.
- Fix it in the shared components (review block, pricing block, trust strip, footer, quote form), so all pages, template previews and landing pages update together.

---

## 1. Real data to use (taken from livejunkfree.ca, 7 Nov 2026)

### Contact and business
| Field | Value | Source |
|---|---|---|
| Phone | 647-922-5865 (`tel:+16479225865`) | every page |
| Email | info@livejunkfree.ca | every page footer |
| Hours | **7 days a week, 6AM to 11PM** | /locations/toronto/ FAQ |
| Facebook | https://www.facebook.com/share/18y5rgyG68/ | homepage footer |
| Instagram | https://www.instagram.com/livejunkfree.ca | homepage footer |
| TikTok | https://www.tiktok.com/@livejunkfree.ca | homepage footer |
| Insurance | "fully licensed and insured" | couch page FAQ, Toronto page |
| Same-day | "same-day appointments when available; recommend booking 24–48 hours in advance" | /how-it-works/ FAQ |

### Rating and stats
| Field | Value | Source |
|---|---|---|
| Google rating | **5.0 ★** (not 4.9) | Google Maps embed on homepage |
| Review count | **780 Google reviews** (the Maps embed shows 787, so write "780+") | Trustindex widget on homepage |
| Services completed | 1,000+ | homepage counters |
| Happy clients | 700+ | homepage counters |
| Years experience | 6+ | homepage counters |

### Pricing (only these two figures exist on their site)
- Small or single-item removals **start at C$125** (couch, deck, office, Toronto and estate pages)
- **Full truckload: C$655** (estate page)
- Pricing is volume-based: you pay for the space your items fill in the truck, with a free on-site estimate, no hidden fees, and the price you approve is the price you pay (Toronto page)

### Real Google reviews (from the Trustindex widget on their homepage, all 5★)
Use these exactly as written. Don't edit the wording. Label them "Google review" and leave out the made-up job and town labels (e.g. "Couch removal, Etobicoke"), because that information isn't given.

1. **Suzette Legault:** "Nav and Ash got here before the designated time. That was great. They were extremely polite, and very efficient. A couch I had for 22 years was up and out the door in less than 10 min. I could not believe it! Nothing bumped or bumped off walls or anything. I'd recommend them to anyone. Experts for sure!" *(couch page)*
2. **SSH Canine Academy:** "These guys were great. Not only did they come on time, they picked everything I sent them in the photos. There were a couple extra pieces of wood and they took them too at no extra charge. Polite, punctual, and kind. What more could you ask for? Will definitely call them again for junk removal"
3. **Madelyn Volpe:** "We had a great experience with LiveJunkFree! They removed all the old appliances from my daughter's condo, and the entire process was smooth and hassle-free. The team was professional, efficient, and handled everything with care. It was such a relief to have everything taken care of without any stress. We really appreciated their service and would happily recommend LiveJunkFree to anyone looking for reliable and professional appliance removal. Thank you for making the process so easy!"
4. **C L:** "Nav and his partner came for a piano removal, they communicated well and were professional. Thanks for your help and coming back to put the door back, much appreciated! Would recommend to friends and family."
5. **Raymond Chan:** "It was an excellent service! Very professional and gently handle to remove the large and heavy water tank… highly recommended!"
6. **Joan Savage:** "The two men were excellent at removing our freezer from the basement... punctual and very efficient. Thank you very much."
7. **Heather Gilroy:** "Great service. Friendly, quick, polite and called when they were 30 minutes away to let me know their ETA."
8. **Libbie Lightstone:** "They let me know when they were a half-hour away. They were very professional and lovely to work with."
9. **Rifka N:** "Nice, professional team that was fast and efficient!"
10. **CG GG:** "So friendly and amazing work they brought a huge bin into my unit and baggee garage rolled it out amazing service fast and efficient"

Suggested placement: homepage → 2, 4, 3. Couch → 1, 9, 7. Estate → 2, 8, 6. Office → 2, 9, 5. Toronto → 3, 1, 7. Landing pages → reuse the homepage set.
Link "Read all reviews on Google" to their Google Maps listing (the "Open in Maps" link in the homepage map embed).

### Real photos (replace ALL Unsplash images)
| Use for | Image URL |
|---|---|
| Homepage hero / crew | https://livejunkfree.ca/wp-content/uploads/2025/07/DSC08977-scaled-1.webp |
| Crew / about | https://livejunkfree.ca/wp-content/uploads/2025/07/DSC08963-scaled-1.webp |
| Crew at truck | https://livejunkfree.ca/wp-content/uploads/2025/07/Rectangle-1660-2.webp |
| Couch page / residential card | https://livejunkfree.ca/wp-content/uploads/2026/07/couch-removal-services_before.jfif_202607151247-1024x765.jpeg |
| Estate page hero + cleanouts card | https://livejunkfree.ca/wp-content/uploads/2026/11/estate-cleanout-services-1024x765.jpeg |
| Office page / commercial card | https://livejunkfree.ca/wp-content/uploads/2026/07/Best-Business-Cleanout-Services-1024x765.jpeg |
| Hoarding page | https://livejunkfree.ca/wp-content/uploads/2026/07/hoarding-cleanouts-services-1024x765.jpeg |
| Deck page + **homepage Demolition card** | https://livejunkfree.ca/wp-content/uploads/2026/07/deck-demolition-services-after1-1024x572.jpeg |
| **Before/after slider: BEFORE** | https://livejunkfree.ca/wp-content/uploads/2026/07/deck-demolition-services-before1-1024x572.jpeg |
| **Before/after slider: AFTER** | https://livejunkfree.ca/wp-content/uploads/2026/07/deck-demolition-services-after1-1024x572.jpeg |
| Job gallery (if needed) | https://livejunkfree.ca/wp-content/uploads/2025/07/20250405_140825-1024x577.webp, …/20250405_142357-1024x577.webp, …/20250611_115029-1024x577.webp |

Change the before/after heading from "Same garage. One visit later." to fit a deck, e.g. "Same yard. One visit later." Add `livejunkfree.ca` to `images.remotePatterns` in next.config, or download the images into `/public/images/`, which is better for launch.

---

## 2. What to change, page by page

### Shared components (affects every page)
| Current | Change to |
|---|---|
| "4.9 on Google" / "4.9 from XXX Google reviews" | "5.0 on Google · 780+ reviews" |
| "Based on XXX Google reviews for …" | "5.0 from 780+ Google reviews" |
| 3 placeholder review cards | Real reviews from section 1 |
| "Read all reviews on Google" → `#` | Google Maps listing URL |
| Load-size picker with $XXX for each size | Show only **"From C$125"** (small loads) and **"Full truck C$655"**. Remove the price from the 1/8, 1/4, 1/2 and 3/4 sizes. Keep only the "what usually fits" text, or remove the picker. |
| "Same or next day / When the schedule allows" | "Same-day when available" |
| "Insured crews / Licensing details to confirm" | "Fully licensed and insured" |
| "Donate and recycle first / Landfill is the last stop" | Keep the claim, using their wording: "We recycle or donate whenever possible" |
| "We reply within the hour during business hours" | **Remove** (not on their site). Use: "Prefer to talk? Call 647-922-5865" |
| Footer hours "Mon–Fri 7am–8pm / Sat–Sun 8am–6pm" | "7 days a week, 6AM–11PM" |
| Footer social links → `#` | Real Facebook, Instagram and TikTok URLs |

### Homepage
- **Hero image:** remove the Unsplash truck branded "Taylor's" and use the real crew photo.
- **"Where your junk ends up" → "XX% kept out of landfill":** remove the % stat. Keep the Donated/Recycled/Disposed explanation, worded as "whenever possible".
- **"Stock photos for the pitch…" note:** remove it, and use the real deck before/after photos.
- Optional: add a stats strip with 1,000+ services, 700+ clients and 6+ years.

### /how-it-works/ (pricing page)
- **Example prices table** (mattress $XX, fridge $XX, one room $XXX, garage $XXX, hot tub $XXX): **remove the table.** Replace it with: "Small or single-item removals start at C$125. A full truckload is C$655. Final price depends on volume, item type and access, confirmed with a free on-site estimate."
- **"Heavy materials… priced by weight":** remove (not on their site).
- **"How do I pay? Card, e-transfer or cash…":** remove this FAQ (not on their site).
- Replace the FAQs with their real ones from /how-it-works/: items removed, how pricing works, recycle/donate, areas served, how far in advance to book.

### Couch page
- Replace the `$XX` / `$XXX` prices with "Starting at C$125 (single item, all cleanup included)".
- **"Do I need to be home? … pay online and we'll text you":** remove (not on their site).
- Use their FAQs: all furniture types, apartments/high-rises, disassembly when it won't fit through the door, bundle deals for other items, licensed & insured.

### Estate page
- **"What we don't do" box:** reword to match their site: "Live Junk Free is a paid removal service. We don't buy, appraise or sell estate contents." Remove the biohazard/trauma and "people we trust" parts.
- **"Receipts to confirm" (donations):** remove "Receipts".
- **"We can collect a key, send photos…":** replace with their answer: "Tell us who can provide access, approve the removal scope and identify which items should stay."
- **"We box and label them… deliver them for a fee":** replace with their answer about setting aside valuables and documents and clearly marking items that must stay.
- Pricing: "A full truckload is C$655, small removals start at C$125. Larger properties may take several loads."
- Use their FAQ list: cost, calling before you know what needs to go, whole house, being at the property, lifting from inside, valuables, whether they buy contents, closing dates, donations.

### Office / commercial page
Remove all of these (none are on their site):
- "Evening and weekend scheduling"
- "Certificate of insurance on request"
- "One invoice for multi-site and recurring jobs"
- "After-hours and weekend work"
- "Insurance and WSIB documents"
- "short diversion summary for your records"
- "recurring pickups… monthly or per-turnover"
- "Timings are examples"
- The $XXX price table → replace with "Clear quotes starting at C$125"

### Deck page
- "Small deck from $XXX" → "Starting at C$125, final price based on size, materials and complexity"
- "Footings and posts": remove from the "Included" list.
- Use their FAQs: all deck types (wood, composite, concrete pool decks), cost, areas, permits ("Most municipalities don't require permits… we'll advise on local regulations"), how long it takes ("Most standard decks take 3–5 hours").

### Toronto page
- "Neighbourhood list to confirm": use their list: downtown, Midtown, West End, East End, North York, York, East York, Etobicoke, Scarborough, Willowdale, King West.
- Use their Toronto FAQs: cost (from $125, volume-based), same-day (7 days, 6AM–11PM), condo/high-rise (elevator booking, loading docks), restaurant equipment.

### /contact/
- "Hours: Mon–Sun, 7am–8pm" → "7 days a week, 6AM–11PM"
- "Google Maps embed (existing)" label: drop the label and add the real embed from their homepage.
- "Request sent. We'll call or text you shortly…": keep, but remove "with a price range and available times". Better still, match the wording of their current confirmation page.

### /locations/
- "We often take jobs a little past these areas… we'll confirm": use their line instead: "If you're unsure if we cover your area, please don't hesitate to contact us."
- Their area list also includes **Stouffville** and mentions **Oakville**. Add them if they aren't already on the list.

### Landing pages (/lp/same-day…, /lp/estate…)
- "Call before noon and we can often be there today": remove. Use "Same-day available across Toronto, 7 days a week, 6AM–11PM. Call for same-day availability."
- "We can collect a key and send photos throughout": replace as on the estate page.

### /about/
- It's currently "This page is a placeholder". Use their About page content (537 words at livejunkfree.ca/about/), rewritten into the new layout without adding new facts.

---

## 3. Before you finish
Search the codebase for these and make sure there are **zero hits**:
`to confirm`, `confirm scope`, `XXX`, `XX%`, `$XX`, `Placeholder`, `placeholder`, `Customer name`, `sample`, `replace with`, `Stock photo`, `unsplash`, `4.9`, `within the hour`, `before noon`, `href="#"`
