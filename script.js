var trope = "Click the button to generate a new trope!";
document.getElementById("myTrope").textContent = trope;

let randomTropeElement = (Math.floor(Math.random() * 5) + 1);
console.log("THIS IS ELEMENT", randomTropeElement)



let counter = 0

//list of my tropes assigned to keys
let myTropes = {
  "1": ["Lovers-to-Enemies", "A couple destined to be together realizes they absolutely despise each other after trying to make it work. They end up thriving as rivals."],
  "2": ["Soulmate Misdirection", "Characters meet, believe they are soulmates, and spend the story happily proving why they are not."],
  "3": ["Jobless After Glory", "A hero arrives in the modern world but can’t get a job because all their skills are things like 'slaying dragons' or 'lifting curses.'"],
  "4": ["Billionaire, Stalker, Alpha, Dominant, Woman!", "YASSSSSSSS"],
  "5": ["Opposites Attract - 180° Change", "Two opposites attract—only to realize that they completely transform into each other’s original personalities by the end."],
  "6": ["Divorce of Convenience", "They are oh-so in love but they have to divorce and convince everyone that the divorce is legitimate."],
  "7": ["The Parentful Heroine", "Instead of being isolated or disowned, a heroine with strong family support spends the story rescuing her love interest's mess of a family."],
  "8": ["Accidently Kidnapping One Direction", "IFYKYK"],
  "9": ["Loyal to Another", "The love interest stays loyal to their current partner, turning down the main character, who’s devastated that someone didn’t fall for them."],
  "10": ["Fantasy Royal Falls for Barista", "A fantasy queen/king isekai’s into the modern world and falls for the simple shop worker."],
  "11": ["Too Many Chosen Ones", "Instead of one chosen savior, the prophecy picks everybody—[insert spiderman pointing meme]."],
  "12": ["Opposites (Not) Attract", "Two opposites attract—only to realize that they’re actually very, very similar."],
  "13": ["Loveless MC", "The heroic main character can’t seem to get any love interests no matter how hard they try. If anything, everyone they meet hates them."],
  "14": ["The Non-Chosen One", "A character constantly mistaken for 'The Chosen One' but is completely ordinary and achieves their goals by convincing others to stop relying on chosen saviors."],
  "15": ["Prophecy: Self-Sabotage Edition", "A prophecy is so ambiguous that the protagonist misunderstands and inadvertently ensures the foretold tragedy happens."],
  "16": ["The Thriving Apocalypse", "Instead of desolation, the world thrives post-apocalypse with characters loving their post-civilization lives and not wanting to fix the world."],
  "17": ["Witch ML x Werewolf FL", "Bonus points if the witch ML comes in a slutty dress."],
  "18": ["Magic is the Mundane", "Characters live in a magical world, but magic is the equivalent of appliances, and mundane tasks without magic are seen as heroic."],
  "19": ["The Nice Guy Who Only Hates You", "Exactly what the title says ;3"],
  "20": ["The Reverse Love Triangle", "Two characters both try to set each other up with the same third person, refusing to believe they might be the real endgame couple."],
  "21": ["The Enemies Share a Best Friend", "The sworn enemies both have the same best friend, and fight over it."],
  "22": ["Accidental Marriage", "Two people wake up married by mistake, not because of a wild night but due to… clerical errors…"],
  "23": ["Sunshine-No-Grumpy", "Both characters are absolute sunshines who match each other's positivity while equally annoying everyone around them."],
  "24": ["Villainous Crush Swap", "Both the hero and villain are in love—but not with each other. Instead, they're awkwardly crushing on the other’s sidekick."],
  "25": ["Reverse Haunted House", "Instead of ghosts terrifying the humans, the house is overrun by humans terrifying the ghosts, who just want some peace."],
  "26": ["ML Makes a Bet That FL Would Never Get With Him", "‘Bro, she’s way out of my league. I’ll bet you there’s no way in hell she’ll ever even look my way.’... Little did he know…"],
  "27": ["Relationship Saboteur", "Instead of a matchmaker, one character is hired to break up relationships—but inadvertently falls for their own target."],
  "28": ["The Serial Roommate", "Instead of finding love with a single roommate, one character goes through a series of messy roommate situations, each one ending with the partner moving out."],
  "29": ["Upsetting Scents", "They love each other, but they HATE each other's natural scent."],
  "30": ["Grumpy-No-Sunshine", "Both characters are grumps who attempt to outdo each other in pessimism, but it results in them falling for each other's sarcasm."],
  "31": ["Corporate Hero", "A legendary hero from a fantasy world isekai's to the modern world, and has to conquer the corporate world (except, it's worse than any monster they’ve ever slayed…)."],
  "32": ["Marriage of Inconvenience", "They get married to cause chaos between the two families. By being together, they mess up everything their families have worked for, and it’s exactly what they want."],
  "33": ["Accidentally Kidnapping the Mafia Boss", "‘Why the F is the don of the Italian mafia tied up to my bed post rn.’"],
  "34": ["MC Make-Under", "The fashionable icon MC has to be taught to blend in because of [insert reason] by the love interest."],
  "35": ["Same-Age Romance", "…Like, the EXACT same age. Same year, same day, no age gap whatsoever."]

}

const dictionaryLength = Object.keys(myTropes).length;
console.log("THIS IS DICTIONARY LENGTH", dictionaryLength);

function changeTrope(){
  
  if (counter > 0) {
    randomTropeElement = randomTropeElement + 1
    if (randomTropeElement > dictionaryLength) {
      randomTropeElement = 1
    }
  } else if (counter == 0) {
    randomTropeElement = (Math.floor(Math.random() * 4) + 1);
    counter += 1;
    
  }
  trope = myTropes[randomTropeElement][0];
  document.getElementById("myTrope").textContent = trope;

  tropeDesc = myTropes[randomTropeElement][1];
  document.getElementById("myTropeDescription").textContent = tropeDesc;
  
  console.log("THIS IS THE ELEMENT", randomTropeElement)
}