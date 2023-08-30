import { changeLogT } from "./src/types.d";

const changeLog: changeLogT = [
  {
    release: "1.0.0",
    date: "2-8-2023",
    info: "First draft",
  },
  {
    release: "1.0.1",
    date: "2-8-2023",
    info: "Fixed incorrect time calculations. Also added a changelog, a warning that this website is in fact, not very good, and finally, the ability to choose the number of items you want to create! (Thanks to the person who suggested this!)",
  },
  {
    release: "1.0.2",
    date: "4-8-2023",
    info: "Fixed the website crashing when the marketAPI has items missing. Remember you can always remove the cookies (it only stores what you were last searching for). The calculations now take into account gathering quantity.",
  },
  {
    release: "1.1.0",
    date: "14-8-2023",
    info: "Massive rewrite behind-the-scenes. Some changes infront of-the-scenes.\nChanged the way data is stored, now it seperates items and actions. You now have to choose the action you will do to get the item (combat planned to be added as an action to show how many combat actions you will need on average). Also added skill levels and speed which effects the result. Tea, items (like Ring Of Gathering), and community buffs will be added next.\n \nSide Note: the pricing and worth of some items (like rare loot drops) are funky because they don't have an actual value (no vendor nor on the market) so please ignore those.",
  },
  {
    release: "1.1.1",
    date: "14-8-2023",
    info: "Now taking into account teas, equipment, and community buffs! The data is saved as a cookie (expires after 1 week), and resetting doesn't save if you refresh before clicking save. Also, clicking reset now requires a confirmation.",
  },
  {
    release: "1.2.0",
    date: "23-8-2023",
    info: "A not-as-major-as-last-time overhaul of the way data is stored and processed (game data... I don't know how to get yours lmao).\nAdded a button that shows all ingredients collated together, showing you the actions you need to do to get them as well as the items you will have extra of (eg if you do Misty Forest but only need Oranges).\nAlso added 3 new items to make this ever more accurate (credit goes to the person on discord who suggested this, if you want me to put your name here where I'm typing this right now let me know and I will, just don't want to put your name here without permission).\nLastly I've also made it so checking one necklace removes the other, because why not (even though I'm not doing anything with exp yet).",
  },
  {
    release: "1.2.1",
    date: "23-8-2023",
    info: 'So apparently items were doing absolutely nothing lmao. Now they work, and are based off of enhancement levels instead of "Do you have this item equipped", -1 is when the item isn\'t equipped (will be far better when I eventually get around to adding styling).',
  },
  {
    release: "1.2.1-hotfix",
    date: "23-8-2023",
    info: "Fixed saving being weird, and items being broken... again.",
  },
  {
    release: "1.2.2",
    date: "25-8-2023",
    info: "Now takes into account items you already have! No longer do you have to duplicate tabs and get out the calculator to work out how much you actually need to do (well, at least I don't have to anymore). Currently whenever you switch item it resets the items you own, but I'll be working on that (probably) in the future.\nIt's worth noting I'm disabled some of the teas that have no effect. I plan to re-enable them as I add functionality for them. Sorry about that :/\nFeel free to contact me (in game or on discord) with any suggestions you may have, I might want to add that feature too! (DMs OK)",
  },
];
// Granttank
export default changeLog;

// total time to make
// combat actions and drops
// exp
// enhancing

// styling
