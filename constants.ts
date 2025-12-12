import { Riddle } from './types';

export const RIDDLES: Riddle[] = [
  {
    id: 1,
    question: "A murderer must choose between three rooms — fires, assassins with guns, or lions that haven’t eaten in three years. Which room is safest?",
    visualType: 'three-doors-assassins',
    clues: [
      "Analyze the nature of the threats. Fire burns. Guns kill. Lions eat.",
      "Consider the time factor mentioned carefully: 'Three years'.",
      "Biological needs are absolute. What happens to a lion after 3 years without food?"
    ],
    solution: "The third room — the lions would be dead from starvation.",
    motivation: "Always check the premises of the problem. Time changes the nature of a threat."
  },
  {
    id: 2,
    question: "A prisoner must go into one of three rooms — fire, explosives, or lions starved for years. Which room should he choose?",
    visualType: 'three-doors-explosives',
    clues: [
      "Explosives are volatile, fire is immediate, but lions are biological.",
      "A lion's primary need is food. What happens if that need isn't met?",
      "Years is a very long time for a living creature to survive without sustenance."
    ],
    solution: "The lion room, because the lions would be dead from not eating.",
    motivation: "Sometimes threats solve themselves if you wait long enough."
  },
  {
    id: 3,
    question: "You must pick one safe door out of four: freezing cold, deadly sharks, poisonous gas, or blazing sun — how do you escape?",
    visualType: 'four-doors',
    clues: [
      "Three of these conditions are constant threats (Cold, Sharks, Gas).",
      "One of these conditions relies on the time of day.",
      "The sun is only 'blazing' when it is visible in the sky."
    ],
    solution: "Wait until the sun goes down to go through the fourth door.",
    motivation: "Timing is often a hidden variable in solving impossible problems."
  },
  {
    id: 4,
    question: "If Door 2 has alligators and Door 3 has lions, which is safe?",
    visualType: 'alligator-doors',
    clues: [
      "This is a trick question about the premises. Read carefully.",
      "Are alligators naturally found behind doors? Are lions safe?",
      "Wait, the solution is about logical exclusion. If neither seems safe, is there a safe option?"
    ],
    solution: "Neither — the idea is to realize timed survival details; logic must be applied carefully. (Or potentially the Lion room if starved, but this riddle emphasizes the trap).",
    motivation: "Don't accept a choice if all options are bad. Look for the third way."
  },
  {
    id: 5,
    question: "You’re in a concrete room with no doors or windows and only a mirror and table — how do you get out?",
    visualType: 'mirror-room',
    clues: [
      "This is not a physics puzzle; it is a play on words.",
      "Look in the mirror. What do you see? You see what you 'saw'.",
      "Use the homonym 'saw' (the tool) to interact with the table."
    ],
    solution: "Look in the mirror, see what you saw, take the saw, cut the table, make a door, and escape.",
    motivation: "Imagination exploits the ambiguity of language to create new realities."
  },
  {
    id: 6,
    question: "What can go through the Green Glass Door?",
    visualType: 'green-glass',
    clues: [
      "Look at the spelling of the words 'Green', 'Glass', and 'Door'.",
      "A 'book' can pass. A 'cat' cannot. A 'moon' can pass. A 'sun' cannot.",
      "It has nothing to do with the object's physical properties, only its name."
    ],
    solution: "Only words with double letters (e.g., 'book', 'moon').",
    motivation: "Patterns often exist in the structure of the information, not the content."
  },
  {
    id: 7,
    question: "Two guards — one always lies, one always tells the truth — which question reveals the safe door?",
    visualType: 'two-guards',
    clues: [
      "If you ask a guard directly, you won't know if it's true.",
      "You must make them talk about each other.",
      "The liar will lie about the truth. The truth-teller will tell the truth about the lie."
    ],
    solution: "“What door would the other guard say leads outside?” Then choose the opposite.",
    motivation: "To find the truth in a system of contradictions, embed one contradiction within another."
  },
  {
    id: 8,
    question: "You choose one of three doors; one has a prize, two goats. After revealing a goat, should you switch?",
    visualType: 'monty-hall',
    clues: [
      "Your initial choice has a 1/3 chance of being correct.",
      "The host reveals a goat from the remaining 2/3 probability space.",
      "Switching allows you to capture that 2/3 probability."
    ],
    solution: "Yes — switching gives a higher probability of winning.",
    motivation: "Intuition fails in probability; rely on calculation."
  },
  {
    id: 9,
    question: "You are forced to pick between a fire room, a lion’s room, or a room with exploding traps — which is safest?",
    visualType: 'three-doors-traps',
    clues: [
      "Fire burns. Explosions kill.",
      "Lions eat. But they need to eat often.",
      "Check the timeline of the lion's last meal implicitly."
    ],
    solution: "The lion room (timed starvation logic).",
    motivation: "Biological constraints are more rigid than mechanical ones."
  },
  {
    id: 10,
    question: "You must go through one of two passageways, one leads to freedom, one to death — clue given?",
    visualType: 'blind-passage',
    clues: [
      "You have limited information.",
      "This is a classic variation of the Guards riddle.",
      "Deduce the correct path based on reliable sources."
    ],
    solution: "Use logic or a truthful/lying source to deduce correct path.",
    motivation: "Information is only as good as its source."
  },
  {
    id: 11,
    question: "You’re nearly out of water in the jungle — which water source should you filter?",
    visualType: 'water-sources',
    clues: [
      "Moving water gathers sediment. Puddles are stagnant.",
      "A still lake allows heavy particles to settle.",
      "Filtration works best on water that has already started the settling process."
    ],
    solution: "The still lake — least contaminated water.",
    motivation: "Stillness often brings clarity."
  },
  {
    id: 12,
    question: "How to measure exactly 45 minutes using two ropes that individually burn in one hour but burn unevenly?",
    visualType: 'ropes',
    clues: [
      "If you light one end, it takes 60 mins. What happens if you light both ends?",
      "Lighting both ends burns the rope in 30 mins.",
      "You need 30 mins + 15 mins. Use the second rope while the first is burning."
    ],
    solution: "Light one rope at both ends and the other at one end; when the first finishes, light the second at both ends.",
    motivation: "Parallel processing can manipulate time."
  },
  {
    id: 13,
    question: "A man must choose between doors — fire, lions not fed for years, electric eels — which door to survive?",
    visualType: 'three-doors-eels',
    clues: [
      "Fire is deadly. Electric eels are deadly in water.",
      "Lions not fed for years are...?",
      "Dead lions cannot bite."
    ],
    solution: "The lion door — the lions would be long dead.",
    motivation: "The state of the threat changes over time."
  }
];

export const QUOTES = [
  "Logic will get you from A to B. Imagination will take you everywhere. — Albert Einstein",
  "You cannot dig a hole in a different place by digging the same hole deeper. — Edward de Bono"
];