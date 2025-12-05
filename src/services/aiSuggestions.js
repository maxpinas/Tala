// AI Suggestie logica voor zinsbouw

export const getAISuggestions = (currentSentence) => {
  const lastWord = currentSentence[currentSentence.length - 1]?.toLowerCase();
  if (!lastWord) return ["Ik", "Mag ik", "Hoe gaat", "Waar is"];
  switch (lastWord) {
    case 'ik': return ["wil", "ben", "heb", "ga"];
    case 'jij': return ["bent", "moet", "kunt", "wilt"];
    case 'wil': return ["graag", "niet", "even", "naar huis"];
    case 'heb': return ["pijn", "honger", "dorst", "het koud"];
    default: return ["graag", "niet", "nu", "even"];
  }
};

export const getAIFullSentences = (sentenceArray) => {
  const base = sentenceArray.join(' ');
  if (!base) return ["Ik wil graag koffie.", "Ik heb hulp nodig.", "Hoe gaat het?"];
  if (base.includes("pijn")) return [base + " in mijn hoofd.", base + ", bel de dokter.", base + ", ik wil liggen."];
  if (base.includes("wil")) return [base + " naar huis.", base + " wat eten.", base + " even rusten."];
  return [base + " alstublieft.", base + " en bedankt.", base + ", snap je?"];
};
