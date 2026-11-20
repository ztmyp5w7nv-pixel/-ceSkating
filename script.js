// ==========================================
// 1. 36 FAMOUS U.S. FIGURE SKATERS DATA
// ==========================================
const usSkaters = [
  { id: "malinin", name: "Ilia Malinin", wikiTitle: "Ilia Malinin", category: "men", categoryLabel: "Men's Singles", title: "World Champion & Olympic Team Gold Medalist", hometown: "Fairfax, VA", signature: "Quadruple Axel (4A)", initials: "IM", snippet: "Historic jumper known for landing the quadruple Axel in competition.", bio: "Fairfax native Ilia Malinin made figure skating history by landing a ratified quadruple Axel and winning major international titles and Olympic team gold." },
  { id: "brown", name: "Jason Brown", wikiTitle: "Jason Brown (figure skater)", category: "men", categoryLabel: "Men's Singles", title: "U.S. Champion & Olympic Medalist", hometown: "Highland Park, IL", signature: "Signature Hydroblade & Spin Artistry", initials: "JB", snippet: "Celebrated for unmatched skating skills, spins, and expressive programs.", bio: "Jason Brown is beloved worldwide for his fluid edge work, musicality, iconic spins, and long-standing presence on Team USA." },
  { id: "torgashev", name: "Andrew Torgashev", wikiTitle: "Andrew Torgashev", category: "men", categoryLabel: "Men's Singles", title: "U.S. National Silver Medalist", hometown: "Coral Springs, FL", signature: "Quad Toe Loop & Smooth Transitions", initials: "AT", snippet: "Athletic American singles skater with strong quad jumps and polish.", bio: "Andrew Torgashev has risen through international competition with powerful jumps, dynamic choreography, and podium finishes at U.S. Nationals." },
  { id: "naumov", name: "Maxim Naumov", wikiTitle: "Maxim Naumov", category: "men", categoryLabel: "Men's Singles", title: "U.S. National Medalist", hometown: "Simsbury, CT", signature: "Clean Triple & Quad Jumps", initials: "MN", snippet: "Composed competitor with crisp jump technique and musical line.", bio: "Maxim Naumov represents American men's singles on the international stage with steady technical execution and poise." },
  { id: "sanchez", name: "Jacob Sanchez", wikiTitle: "Jacob Sanchez", category: "men", categoryLabel: "Men's Singles", title: "U.S. National Medalist", hometown: "New York, NY", signature: "High-Energy Footwork", initials: "JS", snippet: "Rising American singles skater known for spirited skating.", bio: "Jacob Sanchez brings energy and competitive drive to senior and junior events across the U.S. skating circuit." },
  { id: "hiwatashi", name: "Tomoki Hiwatashi", wikiTitle: "Tomoki Hiwatashi", category: "men", categoryLabel: "Men's Singles", title: "World Junior Champion & U.S. Medalist", hometown: "Illinois / California", signature: "Quad Toe & Lutz Combinations", initials: "TH", snippet: "Former World Junior champion with veteran international experience.", bio: "Tomoki Hiwatashi captured the World Junior title before becoming a regular contender in senior Grand Prix and U.S. events." },
  { id: "kapeikis", name: "Liam Kapeikis", wikiTitle: "Liam Kapeikis", category: "men", categoryLabel: "Men's Singles", title: "International U.S. Competitor", hometown: "United States", signature: "Expressive Free Skates", initials: "LK", snippet: "Competitive American men's skater with strong athletic jumps.", bio: "Liam Kapeikis competes internationally for the United States, combining jumping ability with expressive skating." },
  { id: "zhou", name: "Vincent Zhou", wikiTitle: "Vincent Zhou", category: "men", categoryLabel: "Men's Singles", title: "Olympic Medalist & 2x World Medalist", hometown: "Palo Alto, CA", signature: "Multiple Quad Jumps", initials: "VZ", snippet: "California-born Olympic team medalist and multi-quad jumper.", bio: "Vincent Zhou earned Olympic team hardware and two World Championship medals while pushing technical jump difficulty." },
  { id: "lysacek", name: "Evan Lysacek", wikiTitle: "Evan Lysacek", category: "legends", categoryLabel: "Olympic Legend", title: "2010 Olympic Champion", hometown: "Naperville, IL", signature: "Athletic Free Skate & Spins", initials: "EL", snippet: "2010 Vancouver Olympic gold medalist in men's singles.", bio: "Evan Lysacek won Olympic gold in 2010 and captured the 2009 World title with athletic precision and competitive grit." },
  { id: "weir", name: "Johnny Weir", wikiTitle: "Johnny Weir", category: "legends", categoryLabel: "U.S. Legend", title: "3x U.S. Champion & World Medalist", hometown: "Quarryville, PA", signature: "Dramatic Costumes & Grace", initials: "JW", snippet: "Three-time U.S. champion and pop-culture skating icon.", bio: "Johnny Weir won three U.S. titles and a World bronze medal, becoming one of figure skating's most recognizable personalities." },
  { id: "boitano", name: "Brian Boitano", wikiTitle: "Brian Boitano", category: "legends", categoryLabel: "Olympic Legend", title: "1988 Olympic Champion", hometown: "Sunnyvale, CA", signature: "'Tano' Triple Lutz", initials: "BB", snippet: "1988 Calgary Olympic champion famed for his overhead-arm Lutz.", bio: "Brian Boitano won gold at the 1988 Winter Olympics in one of men's figure skating's most famous duels." },
  { id: "hamilton", name: "Scott Hamilton", wikiTitle: "Scott Hamilton", category: "legends", categoryLabel: "Olympic Legend", title: "1984 Olympic Champion & 4x World Champion", hometown: "Bowling Green, OH", signature: "Backflips & Crowd-Pleasing Showmanship", initials: "SH", snippet: "1984 Olympic gold medalist and four-time World champion.", bio: "Scott Hamilton dominated men's skating in the early 1980s with speed, charisma, and four consecutive World titles." },

  { id: "liu", name: "Alysa Liu", wikiTitle: "Alysa Liu", category: "women", categoryLabel: "Women's Singles", title: "World Champion & Olympic Gold Medalist", hometown: "Oakland / Richmond, CA", signature: "Triple Axel & Joyful Free Skates", initials: "AL", snippet: "Olympic gold medalist and World champion celebrated for her joy on ice.", bio: "Alysa Liu made a celebrated return to competition to claim World Championship gold and Olympic honors." },
  { id: "glenn", name: "Amber Glenn", wikiTitle: "Amber Glenn", category: "women", categoryLabel: "Women's Singles", title: "3x U.S. Champion & Olympic Gold Medalist", hometown: "Plano, TX", signature: "Powerful Triple Axel", initials: "AG", snippet: "Three-time U.S. champion known for her soaring triple Axel.", bio: "Amber Glenn won three consecutive U.S. National titles and Olympic team gold with power and artistry." },
  { id: "levito", name: "Isabeau Levito", wikiTitle: "Isabeau Levito", category: "women", categoryLabel: "Women's Singles", title: "World Silver Medalist & U.S. Champion", hometown: "Mount Holly, NJ", signature: "Classic Balletic Extensions", initials: "IL", snippet: "Known for classical posture, musicality, and graceful lines.", bio: "Isabeau Levito is a U.S. champion and World silver medalist admired for classic elegance on the ice." },
  { id: "tennell", name: "Bradie Tennell", wikiTitle: "Bradie Tennell", category: "women", categoryLabel: "Women's Singles", title: "2x U.S. Champion & Olympic Medalist", hometown: "Winfield, IL", signature: "Crisp Jumps & Strong Spins", initials: "BT", snippet: "Two-time U.S. champion and Olympic team medalist.", bio: "Bradie Tennell has earned multiple U.S. titles and represented Team USA on the Olympic and World stages." },
  { id: "everhardt", name: "Sarah Everhardt", wikiTitle: "Sarah Everhardt", category: "women", categoryLabel: "Women's Singles", title: "U.S. National Medalist", hometown: "Virginia", signature: "Fluid Skating & Jumps", initials: "SE", snippet: "Rising American women's singles contender.", bio: "Sarah Everhardt has emerged as a standout U.S. singles skater with clean jumping and poise." },
  { id: "andrews", name: "Starr Andrews", wikiTitle: "Starr Andrews", category: "women", categoryLabel: "Women's Singles", title: "U.S. National Medalist & Grand Prix Medalist", hometown: "Los Angeles, CA", signature: "Expressive Performance & Jumps", initials: "SA", snippet: "Los Angeles skater with Grand Prix and U.S. Championship medals.", bio: "Starr Andrews has captured hearts and international medals with expressive programs and determination." },
  { id: "edmunds", name: "Polina Edmunds", wikiTitle: "Polina Edmunds", category: "women", categoryLabel: "Women's Singles", title: "2014 Olympian & Four Continents Champion", hometown: "Santa Clara, CA", signature: "Long Lines & Triple-Triple Combos", initials: "PE", snippet: "Four Continents champion and 2014 Winter Olympian.", bio: "Polina Edmunds won the 2015 Four Continents title and skated at the 2014 Winter Olympics in Sochi." },
  { id: "gold", name: "Gracie Gold", wikiTitle: "Gracie Gold", category: "women", categoryLabel: "Women's Singles", title: "2x U.S. Champion & Olympic Medalist", hometown: "Springfield, IL", signature: "High Triple Lutz & Classic Style", initials: "GG", snippet: "Two-time U.S. champion and 2014 Olympic team medalist.", bio: "Gracie Gold won two U.S. titles and an Olympic medal, inspiring fans with her comeback journey." },
  { id: "wagner", name: "Ashley Wagner", wikiTitle: "Ashley Wagner", category: "women", categoryLabel: "Women's Singles", title: "3x U.S. Champion & World Silver Medalist", hometown: "Annapolis, MD", signature: "Fierce Performance & Musicality", initials: "AW", snippet: "Three-time U.S. champion and 2016 World silver medalist.", bio: "Ashley Wagner delivered unforgettable programs like 'Moulin Rouge' and 'Black Swan' across a decorated career." },
  { id: "kwan", name: "Michelle Kwan", wikiTitle: "Michelle Kwan", category: "legends", categoryLabel: "U.S. Legend", title: "9x U.S. Champion & 5x World Champion", hometown: "Torrance, CA", signature: "Change-of-Edge Spiral", initials: "MK", snippet: "Most decorated U.S. figure skater in national history.", bio: "Michelle Kwan won nine U.S. titles and five World championships, defining American figure skating for over a decade." },
  { id: "cohen", name: "Sasha Cohen", wikiTitle: "Sasha Cohen", category: "legends", categoryLabel: "Olympic Legend", title: "2006 Olympic Silver Medalist", hometown: "Laguna Niguel, CA", signature: "Signature Spiral & Flexibility", initials: "SC", snippet: "2006 Olympic silver medalist famous for her spiral position.", bio: "Sasha Cohen captivated audiences worldwide with her extension, spirals, and 2006 Olympic silver medal." },
  { id: "yamaguchi", name: "Kristi Yamaguchi", wikiTitle: "Kristi Yamaguchi", category: "legends", categoryLabel: "Olympic Legend", title: "1992 Olympic Champion", hometown: "Fremont, CA", signature: "Precision Jumps & Musicality", initials: "KY", snippet: "1992 Albertville Olympic gold medalist and two-time World champion.", bio: "Kristi Yamaguchi captured Olympic gold in 1992 and became one of America's most admired winter champions." },
  { id: "lipinski", name: "Tara Lipinski", wikiTitle: "Tara Lipinski", category: "legends", categoryLabel: "Olympic Legend", title: "1998 Olympic Champion", hometown: "Sugar Land, TX", signature: "Triple Loop–Triple Loop Combo", initials: "TL", snippet: "Youngest individual winter Olympic gold medalist in history.", bio: "Tara Lipinski won World and Olympic gold in 1997–1998 with energetic combinations and speed." },
  { id: "hamill", name: "Dorothy Hamill", wikiTitle: "Dorothy Hamill", category: "legends", categoryLabel: "Olympic Legend", title: "1976 Olympic Champion", hometown: "Riverside, CT", signature: "The 'Hamill Camel' Spin", initials: "DH", snippet: "1976 Olympic gold medalist who popularized the Hamill camel.", bio: "Dorothy Hamill won gold at the 1976 Innsbruck Olympics and made her spin and hairstyle iconic." },
  { id: "fleming", name: "Peggy Fleming", wikiTitle: "Peggy Fleming", category: "legends", categoryLabel: "Olympic Legend", title: "1968 Olympic Champion", hometown: "San Jose, CA", signature: "Graceful Edges & Flow", initials: "PF", snippet: "1968 Grenoble Olympic champion and three-time World champion.", bio: "Peggy Fleming revived American figure skating with grace and won Olympic gold in 1968." },

  { id: "chock-bates", name: "Madison Chock & Evan Bates", wikiTitle: "Madison Chock", category: "pairs-dance", categoryLabel: "Ice Dance", title: "7x U.S. Champions & Olympic Gold Medalists", hometown: "Redondo Beach, CA / Ann Arbor, MI", signature: "Sculptural Lifts & Storytelling", initials: "CB", snippet: "Record seven-time U.S. ice dance champions.", bio: "Madison Chock and Evan Bates have set records in U.S. ice dance with theatrical choreography and unison." },
  { id: "kam-oshea", name: "Ellie Kam & Danny O'Shea", wikiTitle: "Ellie Kam", category: "pairs-dance", categoryLabel: "Pairs", title: "Olympic Team Gold Medalists & U.S. Medalists", hometown: "Colorado Springs, CO", signature: "Throw Jumps & Pairs Lifts", initials: "KO", snippet: "Team USA pairs skaters and 2026 Olympic team gold medalists.", bio: "Ellie Kam and Danny O'Shea deliver dynamic pairs elements and helped power Team USA's Olympic team gold." },
  { id: "efimova-mitrofanov", name: "Alisa Efimova & Misha Mitrofanov", wikiTitle: "Misha Mitrofanov", category: "pairs-dance", categoryLabel: "Pairs", title: "2026 U.S. Pairs Champions", hometown: "Boston, MA", signature: "Synchronized Spins & Twists", initials: "EM", snippet: "U.S. pairs champions known for partnership and polish.", bio: "Alisa Efimova and Misha Mitrofanov captured national pairs honors with strong technical elements." },
  { id: "chan-howe", name: "Emily Chan & Spencer Akira Howe", wikiTitle: "Spencer Akira Howe", category: "pairs-dance", categoryLabel: "Pairs", title: "U.S. Champions & Olympians", hometown: "Pasadena, TX / Los Angeles, CA", signature: "High-Speed Pairs Elements", initials: "CH", snippet: "Former U.S. pairs champions and Olympians.", bio: "Emily Chan and Spencer Akira Howe won the U.S. pairs title and represented the U.S. internationally." },
  { id: "carreira-ponomarenko", name: "Christina Carreira & Anthony Ponomarenko", wikiTitle: "Christina Carreira", category: "pairs-dance", categoryLabel: "Ice Dance", title: "U.S. Ice Dance Medalists", hometown: "Saint Clair, MI / San Jose, CA", signature: "Deep Twizzles & Smooth Edges", initials: "CP", snippet: "Multi-time U.S. ice dance medalists and Four Continents medalists.", bio: "Christina Carreira and Anthony Ponomarenko are mainstays on the international ice dance podium." },
  { id: "zingas-kolesnik", name: "Emilea Zingas & Vadym Kolesnik", wikiTitle: "Vadym Kolesnik", category: "pairs-dance", categoryLabel: "Ice Dance", title: "U.S. Ice Dance Silver Medalists", hometown: "Michigan", signature: "Expressive Rhythm & Free Dance", initials: "ZK", snippet: "Rising U.S. ice dance team with national medals.", bio: "Emilea Zingas and Vadym Kolesnik bring speed, extension, and strong choreography to ice dance." },
  { id: "green-parsons", name: "Caroline Green & Michael Parsons", wikiTitle: "Caroline Green", category: "pairs-dance", categoryLabel: "Ice Dance", title: "Four Continents Champions", hometown: "Clifton, VA / Abingdon, MD", signature: "Intricate Footwork & Lifts", initials: "GP", snippet: "Four Continents ice dance champions and U.S. medalists.", bio: "Caroline Green and Michael Parsons won the 2022 Four Continents title and earned multiple U.S. medals." },
  { id: "davis-white", name: "Meryl Davis & Charlie White", wikiTitle: "Meryl Davis", category: "legends", categoryLabel: "Ice Dance Legend", title: "2014 Olympic Ice Dance Champions", hometown: "West Bloomfield / Royal Oak, MI", signature: "Blazing Twizzles & Speed", initials: "DW", snippet: "First American ice dancers to win Olympic gold.", bio: "Meryl Davis and Charlie White won gold at the 2014 Sochi Olympics with unmatched speed and precision." },
  { id: "shibutani", name: "Maia & Alex Shibutani", wikiTitle: "Alex Shibutani", category: "legends", categoryLabel: "Ice Dance Legend", title: "2x Olympic Bronze Medalists", hometown: "Ann Arbor, MI", signature: "'Shib Sibs' Twizzles & Unison", initials: "MS", snippet: "Sibling ice dance duo and two-time Olympic medalists.", bio: "Maia and Alex Shibutani earned two Olympic medals in 2018 and World podium finishes with remarkable unison." }
];

// ==========================================
// 2. 15 SKILL VAULT ELEMENTS (STEP-BY-STEP TEXT)
// ==========================================
const skatingElements = [
  {
    id: "waltz-jump",
    type: "jump",
    name: "1. Waltz Jump",
    edge: "Forward Outside • 0.5 Rot",
    steps: [
      "Glide forward on your takeoff foot's outside edge with knees slightly soft.",
      "Swing your free leg forward and spring upward into a half turn in the air.",
      "Land backward on your opposite outside edge with bent landing knee."
    ]
  },
  {
    id: "salchow",
    type: "jump",
    name: "2. Salchow",
    edge: "Back Inside Edge • 1–4 Rot",
    steps: [
      "Enter on a back inside edge and bring your free leg back to create momentum.",
      "Swing the free leg around and jump cleanly off the back inside edge without toe-picking.",
      "Rotate in the air and land backward on your opposite back outside edge."
    ]
  },
  {
    id: "toe-loop",
    type: "jump",
    name: "3. Toe Loop",
    edge: "Back Outside + Toe Pick",
    steps: [
      "Glide backward on your skating foot's outside edge with steady posture.",
      "Reach back with your free foot and tap the toe pick into the ice.",
      "Vault up using the toe pick, rotate, and land on the back outside edge of your toe-pick foot."
    ]
  },
  {
    id: "loop-jump",
    type: "jump",
    name: "4. Loop Jump",
    edge: "Back Outside Edge • 1–4 Rot",
    steps: [
      "Set up on a smooth back outside edge with knees bent and core tight.",
      "Spring directly off that same back outside edge while crossing your ankles in the air.",
      "Land on the exact same back outside edge with soft knee absorption."
    ]
  },
  {
    id: "flip-jump",
    type: "jump",
    name: "5. Flip Jump",
    edge: "Back Inside + Toe Pick",
    steps: [
      "Approach on a controlled back inside edge with shoulders aligned.",
      "Tap your opposite toe pick behind you to vault upward into rotation.",
      "Complete the turns in the air and land on the opposite back outside edge."
    ]
  },
  {
    id: "lutz",
    type: "jump",
    name: "6. Lutz",
    edge: "Back Outside Counter-Rotated",
    steps: [
      "Glide on a long, clean back outside edge while rotating your upper body counter to the jump.",
      "Pick into the ice with your opposite toe pick and jump into a counter-rotated turn.",
      "Land backward on the opposite back outside edge with strong check-out."
    ]
  },
  {
    id: "axel",
    type: "jump",
    name: "7. Axel",
    edge: "Forward Outside • +0.5 Rot",
    steps: [
      "Skate forward onto a strong forward outside edge and drive your free leg through.",
      "Launch forward and upward, completing 1.5 (or more) rotations in mid-air.",
      "Land backward on your opposite back outside edge with steady balance."
    ]
  },
  {
    id: "scratch-spin",
    type: "spin",
    name: "8. Upright Scratch Spin",
    edge: "Upright Spin • Tight Axis",
    steps: [
      "Enter on a tight curve and pivot onto the ball/sweet spot of your skating blade.",
      "Keep your body tall and centered over one spot on the ice.",
      "Pull your free foot and arms in close to speed up rotation smoothly."
    ]
  },
  {
    id: "sit-spin",
    type: "spin",
    name: "9. Sit Spin",
    edge: "Low Thigh Position",
    steps: [
      "Start spinning on one foot and lower your hips until your thigh is nearly parallel to the ice.",
      "Extend your free leg straight forward while keeping your back upright.",
      "Hold the low axis steady and stand up cleanly on exit."
    ]
  },
  {
    id: "camel-spin",
    type: "spin",
    name: "10. Camel Spin",
    edge: "Arabesque T-Position",
    steps: [
      "Establish rotation on one foot and hinge forward at the hips.",
      "Lift your free leg straight back at hip level or higher in a clean arabesque.",
      "Keep your chest lifted and centered over the blade for balanced rotations."
    ]
  },
  {
    id: "biellmann-spin",
    type: "spin",
    name: "11. Biellmann Spin",
    edge: "High Overhead Blade Pull",
    steps: [
      "Begin an upright spin and reach back with one or both hands to hold your free skate blade.",
      "Extend your back and free leg upward so the blade rises above your head.",
      "Keep your spinning foot centered and release the blade smoothly as you exit."
    ]
  },
  {
    id: "combo-spin",
    type: "spin",
    name: "12. Combination Spin",
    edge: "Multi-Position + Foot Change",
    steps: [
      "Spin in a primary position (such as camel or sit) with clean speed.",
      "Change positions smoothly into a second spin shape on the same foot.",
      "Step onto the other foot to continue spinning in a new position without losing speed."
    ]
  },
  {
    id: "spiral",
    type: "edge-move",
    name: "13. Spiral Sequence",
    edge: "Deep Edge + High Free Leg",
    steps: [
      "Push onto a strong inside or outside edge and lean slightly forward.",
      "Extend your free leg behind you at or above hip height with toes pointed.",
      "Hold the edge glide smoothly across the ice with open chest and arms."
    ]
  },
  {
    id: "hydroblade",
    type: "edge-move",
    name: "14. Hydroblade",
    edge: "Low Lean Edge Glide",
    steps: [
      "Build speed on a deep edge and bend your skating knee deeply.",
      "Lean your torso far back toward the ice while keeping your core engaged.",
      "Sweep your free leg low and glide smoothly before rising back up."
    ]
  },
  {
    id: "twizzles",
    type: "edge-move",
    name: "15. Twizzles",
    edge: "Traveling Multi-Turn",
    steps: [
      "Push into a traveling line and perform continuous one-foot turns without touching down the free foot.",
      "Keep weight centered over the blade's rocker while rotating quickly.",
      "Maintain forward travel down the ice and check cleanly at the end."
    ]
  }
];

// ==========================================
// 3. SKATE BOOT & BLADE MAINTENANCE TIPS
// ==========================================
const skateCareTips = [
  {
    icon: "🥾",
    title: "Skate Boot Air-Drying & Padding Care",
    desc: "Right after stepping off the ice, unlace your skate boots wide, pull out the tongue/liners, and let them air-dry at room temperature. Never put skate boots near a radiator, heater, or direct sun."
  },
  {
    icon: "🔒",
    title: "Lacing & Ankle Support Routine",
    desc: "Snug the lower laces over the foot without cutting circulation, pull tight around the ankle crease to lock the heel in place, and keep top hooks firm without over-strangling your calf."
  },
  {
    icon: "🧦",
    title: "Soakers vs. Hard Guards",
    desc: "Use fabric/towel soakers inside your skate bag to absorb moisture and protect blades from bumping. Always wear hard rubber/plastic guards when walking off the ice—never walk on concrete or tile bare-bladed."
  },
  {
    icon: "💧",
    title: "Wipe Blades After Every Session",
    desc: "Ice melts fast once you step off. Wipe your figure skate blades dry with a clean cloth before putting on soakers to prevent rust and edge pitting."
  }
];

// ==========================================
// 4. U.S. ICE SKATING RINKS BY STATE & CITY
// ==========================================
const usRinks = [
  { name: "Pickwick Ice Center", state: "California", city: "Los Angeles (Burbank)", nearbyCities: ["Los Angeles", "Burbank", "Glendale", "Pasadena"], address: "1001 W Riverside Dr, Burbank, CA", desc: "Classic Southern California indoor rink popular for figure skating, public sessions, and lessons." },
  { name: "East West Ice Palace", state: "California", city: "Los Angeles (Artesia)", nearbyCities: ["Los Angeles", "Artesia", "Cerritos", "Norwalk"], address: "11446 Artesia Blvd, Artesia, CA", desc: "Well-known LA-area figure skating facility with training ice and public skate sessions." },
  { name: "Iceland Ice Skating Center", state: "California", city: "Los Angeles (Van Nuys)", nearbyCities: ["Los Angeles", "Van Nuys", "Burbank", "Sherman Oaks"], address: "14318 Calvert St, Van Nuys, CA", desc: "Long-standing San Fernando Valley ice rink in Los Angeles offering public skate and classes." },
  { name: "LA Kings Ice at Burbank", state: "California", city: "Los Angeles (Burbank)", nearbyCities: ["Los Angeles", "Burbank", "Pasadena"], address: "555 N Third St, Burbank, CA", desc: "Modern LA-area rink convenient for central and valley skaters." },
  { name: "Lakewood ICE", state: "California", city: "Los Angeles (Lakewood)", nearbyCities: ["Los Angeles", "Lakewood", "Long Beach", "Artesia"], address: "3975 Pixie Ave, Lakewood, CA", desc: "South Bay / LA County rink hosting freestyle sessions, public skating, and hockey." },
  { name: "Toyota Sports Performance Center", state: "California", city: "Los Angeles (El Segundo)", nearbyCities: ["Los Angeles", "El Segundo", "Manhattan Beach", "Culver City"], address: "555 N Nash St, El Segundo, CA", desc: "South Bay skating facility near LAX with multi-sheet ice." },
  { name: "Great Park Ice & FivePoint Arena", state: "California", city: "Irvine (SoCal)", nearbyCities: ["Irvine", "Los Angeles", "Anaheim", "Newport Beach"], address: "888 Ridge Valley, Irvine, CA", desc: "Four-sheet Southern California skating complex south of Los Angeles in Orange County." },
  { name: "Solar4America Ice at San Jose", state: "California", city: "San Jose", nearbyCities: ["San Jose", "Santa Clara", "Cupertino"], address: "1500 S 10th St, San Jose, CA", desc: "Major Northern California multi-rink skating center." },
  { name: "Oakland Ice Center", state: "California", city: "Oakland", nearbyCities: ["Oakland", "San Francisco", "Berkeley"], address: "519 18th St, Oakland, CA", desc: "Bay Area ice facility offering public skate, freestyle, and skating programs." },

  { name: "The Rink at Rockefeller Center", state: "New York", city: "New York City", nearbyCities: ["New York City", "Manhattan", "Brooklyn"], address: "600 5th Ave, New York, NY", desc: "World-famous outdoor holiday skating rink in Midtown Manhattan." },
  { name: "Wollman Rink", state: "New York", city: "New York City", nearbyCities: ["New York City", "Manhattan", "Central Park"], address: "830 5th Ave, New York, NY", desc: "Iconic Central Park ice rink with skyline views." },
  { name: "Herb Brooks Arena", state: "New York", city: "Lake Placid", nearbyCities: ["Lake Placid", "Saranac Lake"], address: "2634 Main St, Lake Placid, NY", desc: "Historic Olympic arena hosting figure skating competitions and training camps." },

  { name: "Broadmoor World Arena", state: "Colorado", city: "Colorado Springs", nearbyCities: ["Colorado Springs", "Denver"], address: "3185 Venetucci Blvd, Colorado Springs, CO", desc: "Premier Colorado skating venue near U.S. Figure Skating training hubs." },
  { name: "Edge Ice Arena", state: "Colorado", city: "Denver", nearbyCities: ["Denver", "Littleton", "Colorado Springs"], address: "6623 S Ward St, Littleton, CO", desc: "Active Denver-metro ice facility for figure skaters and public sessions." },

  { name: "Galleria Ice Skating Center", state: "Texas", city: "Houston", nearbyCities: ["Houston", "Pasadena"], address: "5015 Westheimer Rd, Houston, TX", desc: "Indoor shopping center ice rink in Houston." },
  { name: "Allen Community Ice Rink", state: "Texas", city: "Dallas", nearbyCities: ["Dallas", "Plano", "Allen"], address: "200 E Stacy Rd, Allen, TX", desc: "North Texas skating rink near the Dallas–Plano area." },

  { name: "McCormick Tribune Ice Rink", state: "Illinois", city: "Chicago", nearbyCities: ["Chicago", "Evanston"], address: "11 N Michigan Ave, Chicago, IL", desc: "Millennium Park winter rink in downtown Chicago." },
  { name: "Centennial Ice Arena", state: "Illinois", city: "Highland Park", nearbyCities: ["Highland Park", "Chicago"], address: "3100 Trail Way, Highland Park, IL", desc: "North Shore Illinois rink with figure skating programs." },

  { name: "Arctic Edge Ice Arena", state: "Michigan", city: "Ann Arbor", nearbyCities: ["Ann Arbor", "Canton", "Detroit"], address: "46615 Michigan Ave, Canton, MI", desc: "Michigan rink near Ann Arbor and Detroit with figure skating ice." },

  { name: "Frog Pond Ice Skating Rink", state: "Massachusetts", city: "Boston", nearbyCities: ["Boston", "Cambridge"], address: "38 Beacon St, Boston, MA", desc: "Boston Common seasonal rink in the heart of the city." },

  { name: "Kraken Community Iceplex", state: "Washington", city: "Seattle", nearbyCities: ["Seattle", "Bellevue"], address: "10601 5th Ave NE, Seattle, WA", desc: "Multi-sheet Seattle skating complex with public and training ice." }
];

// ==========================================
// 5. ONLINE SKATER IMAGE FETCHER
// ==========================================
async function fetchOnlineSkaterImages() {
  await Promise.all(
    usSkaters.map(async (skater) => {
      try {
        const endpoint = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(skater.wikiTitle)}`;
        const res = await fetch(endpoint);
        if (!res.ok) return;
        const data = await res.json();
        if (data.thumbnail && data.thumbnail.source) {
          skater.image = data.thumbnail.source;
        }
      } catch {
        // Fallback initials remain active
      }
    })
  );
  const activeFilter = document.querySelector("#disciplineFilters .chip.active")?.dataset.filter || "all";
  renderSkaters(activeFilter);
}

// ==========================================
// 6. RENDER SKATERS & MODAL
// ==========================================
const skatersGrid = document.getElementById("skatersGrid");
const skaterCountText = document.getElementById("skaterCountText");
const skaterModal = document.getElementById("skaterModal");
const modalBody = document.getElementById("modalBody");
const closeModalBtn = document.getElementById("closeModal");

function renderSkaters(filter = "all") {
  skatersGrid.innerHTML = "";
  const filtered = filter === "all"
    ? usSkaters
    : usSkaters.filter(s => s.category === filter);

  skaterCountText.textContent = `${filtered.length} Skaters`;

  filtered.forEach(skater => {
    const card = document.createElement("div");
    card.className = "skater-card";
    const imgMarkup = skater.image
      ? `<img src="${skater.image}" alt="${skater.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span class="avatar-fallback" style="display:none;">${skater.initials}</span>`
      : `<span class="avatar-fallback">${skater.initials}</span>`;

    card.innerHTML = `
      <div class="skater-avatar-wrap">
        ${imgMarkup}
      </div>
      <div class="skater-info">
        <div class="skater-top-row">
          <h4>${skater.name}</h4>
          <span class="discipline-tag">${skater.categoryLabel}</span>
        </div>
        <div class="skater-title">${skater.title}</div>
        <p class="skater-snippet">${skater.snippet}</p>
      </div>
    `;
    card.addEventListener("click", () => openSkaterModal(skater));
    skatersGrid.appendChild(card);
  });
}

function openSkaterModal(skater) {
  const modalImg = skater.image
    ? `<img src="${skater.image}" alt="${skater.name}" onerror="this.outerHTML='<div class=\\'modal-fallback-lg\\'>${skater.initials}</div>'">`
    : `<div class="modal-fallback-lg">${skater.initials}</div>`;

  modalBody.innerHTML = `
    <div class="modal-hero">
      ${modalImg}
      <div>
        <span class="discipline-tag">${skater.categoryLabel}</span>
        <h3 style="margin-top:4px; font-size:1.25rem; color:#0c4a6e;">${skater.name}</h3>
        <p style="font-size:0.78rem; color:#0284c7; font-weight:600;">${skater.title}</p>
      </div>
    </div>
    <div class="modal-stats">
      <div class="stat-pill">
        <span>Hometown</span>
        <strong>${skater.hometown}</strong>
      </div>
      <div class="stat-pill">
        <span>Signature Element</span>
        <strong>${skater.signature}</strong>
      </div>
    </div>
    <p style="font-size:0.88rem; line-height:1.55; color:#334155;">${skater.bio}</p>
  `;
  skaterModal.classList.add("open");
  skaterModal.setAttribute("aria-hidden", "false");
}

closeModalBtn.addEventListener("click", () => {
  skaterModal.classList.remove("open");
  skaterModal.setAttribute("aria-hidden", "true");
});

skaterModal.addEventListener("click", (e) => {
  if (e.target === skaterModal) {
    skaterModal.classList.remove("open");
  }
});

document.querySelectorAll("#disciplineFilters .chip").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#disciplineFilters .chip").forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    renderSkaters(btn.dataset.filter);
  });
});

// ==========================================
// 7. SKILL VAULT (15 ELEMENTS) & LOCALSTORAGE
// ==========================================
let masteredIds = JSON.parse(localStorage.getItem("frostglide_mastered_15") || "[]");
const elementsList = document.getElementById("elementsList");
const progressCounter = document.getElementById("progressCounter");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");

function renderVault(filter = "all") {
  elementsList.innerHTML = "";
  const visibleElements = filter === "all"
    ? skatingElements
    : skatingElements.filter(el => el.type === filter);

  visibleElements.forEach(el => {
    const isMastered = masteredIds.includes(el.id);
    const stepsHtml = el.steps
      .map((stepText, index) => `
        <li class="step-item">
          <span class="step-tag">Step ${index + 1}:</span>${stepText}
        </li>
      `)
      .join("");

    const card = document.createElement("div");
    card.className = "element-card";
    card.innerHTML = `
      <div class="element-header">
        <h4>${el.name}</h4>
        <span class="edge-badge">${el.edge}</span>
      </div>
      <ul class="steps-list">
        ${stepsHtml}
      </ul>
      <button class="master-btn ${isMastered ? "mastered" : ""}" data-id="${el.id}">
        ${isMastered ? "✓ Mastered on Ice" : "+ Mark as Mastered"}
      </button>
    `;
    card.querySelector(".master-btn").addEventListener("click", () => toggleMastered(el.id));
    elementsList.appendChild(card);
  });

  const count = masteredIds.length;
  const total = skatingElements.length;
  const pct = Math.round((count / total) * 100);
  progressCounter.textContent = `${count} / ${total} Mastered`;
  progressPercent.textContent = `${pct}%`;
  progressFill.style.width = `${pct}%`;
}

function toggleMastered(id) {
  if (masteredIds.includes(id)) {
    masteredIds = masteredIds.filter(item => item !== id);
  } else {
    masteredIds.push(id);
  }
  localStorage.setItem("frostglide_mastered_15", JSON.stringify(masteredIds));
  const activeFilter = document.querySelector("#elementFilters .chip.active")?.dataset.efilter || "all";
  renderVault(activeFilter);
}

document.querySelectorAll("#elementFilters .chip").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#elementFilters .chip").forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    renderVault(btn.dataset.efilter);
  });
});

// ==========================================
// 8. SKATE BOOT & BLADE CARE
// ==========================================
const hoursInput = document.getElementById("hoursInput");
const hoursValue = document.getElementById("hoursValue");
const bladeStatusBox = document.getElementById("bladeStatusBox");

hoursInput.addEventListener("input", () => {
  const hrs = Number(hoursInput.value);
  hoursValue.textContent = `${hrs} hrs`;

  if (hrs < 20) {
    bladeStatusBox.className = "status-box good";
    bladeStatusBox.innerHTML = `<strong>Edges Looking Sharp!</strong><p>About ${30 - hrs} hours of clean edge grip left.</p>`;
  } else if (hrs < 28) {
    bladeStatusBox.className = "status-box warn";
    bladeStatusBox.innerHTML = `<strong>Book a Sharpening Soon</strong><p>Your hollow is starting to dull—plan a pro-shop visit within ${30 - hrs} hrs.</p>`;
  } else {
    bladeStatusBox.className = "status-box urgent";
    bladeStatusBox.innerHTML = `<strong>Time to Sharpen!</strong><p>Dull edges can slip on deep turns and takeoffs. Get fresh edges before your next session.</p>`;
  }
});

function renderCareTips() {
  const careList = document.getElementById("careTipsList");
  careList.innerHTML = skateCareTips.map(tip => `
    <div class="care-card">
      <div class="care-card-head">
        <div class="care-icon">${tip.icon}</div>
        <h4>${tip.title}</h4>
      </div>
      <p>${tip.desc}</p>
    </div>
  `).join("");
}

// ==========================================
// 9. STATE & CITY RINK FINDER (TAB 4)
// ==========================================
const stateSelect = document.getElementById("stateSelect");
const citySelect = document.getElementById("citySelect");
const rinksList = document.getElementById("rinksList");
const finderSummary = document.getElementById("finderSummary");

const citiesByState = {
  "California": ["All California", "Los Angeles", "Irvine", "San Jose", "Oakland"],
  "New York": ["All New York", "New York City", "Lake Placid"],
  "Colorado": ["All Colorado", "Colorado Springs", "Denver"],
  "Texas": ["All Texas", "Houston", "Dallas"],
  "Illinois": ["All Illinois", "Chicago", "Highland Park"],
  "Michigan": ["All Michigan", "Ann Arbor"],
  "Massachusetts": ["All Massachusetts", "Boston"],
  "Washington": ["All Washington", "Seattle"]
};

function populateStates() {
  const states = Object.keys(citiesByState);
  stateSelect.innerHTML = states.map(st => `<option value="${st}">${st}</option>`).join("");
  stateSelect.value = "California";
  populateCities("California", "Los Angeles");
}

function populateCities(state, preferredCity = "") {
  const cities = citiesByState[state] || [];
  citySelect.innerHTML = cities.map(c => `<option value="${c}">${c}</option>`).join("");
  if (preferredCity && cities.includes(preferredCity)) {
    citySelect.value = preferredCity;
  }
  renderFilteredRinks();
}

function renderFilteredRinks() {
  const selectedState = stateSelect.value;
  const selectedCity = citySelect.value;
  const stateRinks = usRinks.filter(r => r.state === selectedState);

  let matched = stateRinks;
  if (selectedCity && !selectedCity.startsWith("All ")) {
    const exactOrNear = stateRinks.filter(r =>
      r.city.toLowerCase().includes(selectedCity.toLowerCase()) ||
      r.nearbyCities.some(nc => nc.toLowerCase() === selectedCity.toLowerCase())
    );
    if (exactOrNear.length > 0) {
      matched = exactOrNear;
    }
  }

  finderSummary.textContent = `${matched.length} rink(s) found near ${selectedCity}, ${selectedState}.`;

  rinksList.innerHTML = matched.map(r => {
    const isDirectCity =
      r.city.toLowerCase().includes(selectedCity.toLowerCase()) ||
      (r.nearbyCities[0] && r.nearbyCities[0].toLowerCase() === selectedCity.toLowerCase());
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + " " + r.address)}`;

    return `
      <div class="rink-item">
        <div class="rink-top">
          <h4>${r.name}</h4>
          <span class="nearby-tag">${isDirectCity ? "Near " + selectedCity : r.state}</span>
        </div>
        <div class="rink-loc">📍 ${r.address}</div>
        <p>${r.desc}</p>
        <a class="map-link-btn" href="${mapsUrl}" target="_blank" rel="noopener noreferrer">Open in Maps ↗</a>
      </div>
    `;
  }).join("");
}

stateSelect.addEventListener("change", () => populateCities(stateSelect.value));
citySelect.addEventListener("change", renderFilteredRinks);

// ==========================================
// 10. BOTTOM NAVIGATION TABS
// ==========================================
document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
    document.querySelectorAll(".tab-view").forEach(v => v.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.target).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.getElementById("catEasterEgg").addEventListener("click", () => {
  alert("🐱⛸️ Purr-fect edge control! Keep gliding!");
});

// ==========================================
// 11. ENHANCED SNOWFALL & ICE SPARKLES
// ==========================================
const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");
let snowActive = true;
let flakes = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createFlakes() {
  flakes = Array.from({ length: 85 }, (_, idx) => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3.6 + 1.1,
    speedY: Math.random() * 1.25 + 0.45,
    speedX: (Math.random() - 0.5) * 0.85,
    swayOffset: Math.random() * Math.PI * 2,
    opacity: Math.random() * 0.65 + 0.3,
    isSparkle: idx % 7 === 0
  }));
}
createFlakes();

function animateSnow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (snowActive) {
    flakes.forEach(f => {
      f.swayOffset += 0.025;
      const swayX = Math.sin(f.swayOffset) * 0.45;

      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fillStyle = f.isSparkle
        ? `rgba(186, 230, 253, ${f.opacity + 0.15})`
        : `rgba(255, 255, 255, ${f.opacity})`;
      ctx.shadowColor = f.isSparkle ? "rgba(2, 132, 199, 0.55)" : "rgba(56, 189, 248, 0.45)";
      ctx.shadowBlur = f.isSparkle ? 7 : 4;
      ctx.fill();

      f.y += f.speedY;
      f.x += f.speedX + swayX;

      if (f.y > canvas.height) {
        f.y = -6;
        f.x = Math.random() * canvas.width;
      }
      if (f.x > canvas.width) f.x = 0;
      if (f.x < 0) f.x = canvas.width;
    });
  }
  requestAnimationFrame(animateSnow);
}
animateSnow();

document.getElementById("snowToggle").addEventListener("click", (e) => {
  snowActive = !snowActive;
  e.target.style.opacity = snowActive ? "1" : "0.45";
});

// Initialize App
renderSkaters();
renderVault();
renderCareTips();
populateStates();
fetchOnlineSkaterImages();
