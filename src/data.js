export const POSTS = [
  {
    id: 1,
    author: 'Cheeryjingle',
    avatar: '🎵',
    timeAgo: '7 hr. ago',
    flair: 'NTA',
    title: "AITAH for not claiming my husband's speeding ticket which caused him to lose the licence",
    body: "Disclaimer: we are not in USA so laws and rules may differ. My husband got a speeding ticket going 28kmh over the speed limit in 50kmh zone. Because camera catches only the licence plate he could claim that someone else was driving. That person would then get an email notification and if accepted the fine would go to them. The catch is that he had under two years of driving experience therefore for such violation he had to go to some extra classes. He was asking me to write that ticket on myself because I have 2+ years of driving experience and it would only be a small fine for me as I had not had any other violations on record. I, however, refused because I didn't feel comfortable lying. He ended up losing his licence for 3 months.",
    votes: 2300,
    comments: 618,
  },
  {
    id: 2,
    author: 'throwaway_ladybug99',
    avatar: '🐞',
    timeAgo: '3 hr. ago',
    flair: 'NTA',
    title: 'AITAH for refusing to split the bill evenly when I ordered a salad and my friend ordered three cocktails and a steak?',
    body: "We went out for dinner with a group of six. I ordered a house salad and water — total maybe $14. My friend ordered two cocktails before the food even arrived, then a ribeye steak, dessert, and another drink. When the bill came she immediately said 'let's just split it six ways.' I said no, I'd pay for what I ordered. She called me cheap in front of everyone.",
    votes: 24700,
    comments: 4821,
  },
  {
    id: 3,
    author: 'quietdad_throwaway',
    avatar: '👨',
    timeAgo: '5 hr. ago',
    flair: 'YTA',
    title: "AITAH for telling my daughter her homemade birthday cake was 'not as good as store-bought' in front of her friends?",
    body: "My daughter (16) spent two days making her own birthday cake from scratch. It was her first time doing a layered cake with fondant. It looked a little lopsided and the frosting wasn't perfectly smooth. When she brought it out I said 'it's cute but honestly not as good as a bakery cake.' Her friends went quiet. She didn't speak to me for the rest of the party.",
    votes: 18100,
    comments: 6203,
  },
  {
    id: 4,
    author: 'middlesibling_chaos',
    avatar: '🌀',
    timeAgo: '8 hr. ago',
    flair: 'ESH',
    title: "AITAH for telling my brother I won't attend his wedding because he chose our estranged uncle as best man?",
    body: "Our uncle cut off contact with our entire family 8 years ago after a major falling out with my parents. No explanation, no communication. Last year out of nowhere he reconnected with my brother. Now my brother has chosen him as best man. I told my brother I can't watch someone who abandoned our family stand next to him like nothing happened. My brother says I'm making his wedding about me.",
    votes: 11300,
    comments: 2904,
  },
  {
    id: 5,
    author: 'freelance_nightmare',
    avatar: '💼',
    timeAgo: '11 hr. ago',
    flair: 'NAH',
    title: 'AITAH for charging my roommate extra rent because her boyfriend basically lives here?',
    body: "My roommate's boyfriend has been staying over 5-6 nights a week for the past three months. He uses our shower daily, eats food from the fridge, and takes up the couch every evening. Our lease says guests can stay up to 7 days a month. I brought up splitting utilities three ways. She said that was unfair since he's not on the lease.",
    votes: 9800,
    comments: 1544,
  },
  {
    id: 6,
    author: 'coffeeshop_worker99',
    avatar: '☕',
    timeAgo: '14 hr. ago',
    flair: 'NTA',
    title: "AITAH for refusing to cover my coworker's shift for the fifth time this month after she posted vacation photos?",
    body: "She texted me Sunday night saying she was 'sick' and needed me to cover her Monday opening shift — 5am start. I said no. An hour later she posted a beach photo on Instagram tagged three states away. My manager called me and said I was being uncooperative. I showed him the post. He got very quiet.",
    votes: 31200,
    comments: 7830,
  },
  {
    id: 7,
    author: 'newmom_burnout',
    avatar: '🍼',
    timeAgo: '16 hr. ago',
    flair: 'NTA',
    title: "AITAH for asking my in-laws to call before visiting after they showed up unannounced for the third time this week?",
    body: "We have a 6-week-old. My in-laws live 20 minutes away and have been showing up unannounced, sometimes before 8am. This week alone they came Monday, Wednesday, and Friday. I was still in my robe on Friday when they walked in — my MIL has a key. I asked them to please text first. My husband said I was being ungrateful for the support.",
    votes: 27500,
    comments: 5210,
  },
  {
    id: 8,
    author: 'petlover_throwaway',
    avatar: '🐕',
    timeAgo: '22 hr. ago',
    flair: 'NAH',
    title: "AITAH for keeping my dog off the furniture now that my partner has moved in?",
    body: "I've had my dog Biscuit for 4 years. He's always slept on the couch and sometimes on the bed. My partner moved in two months ago and she's mildly allergic. I told Biscuit he has to stay on his dog bed now. He's confused and keeps trying to get up. My sister says I'm choosing a new relationship over my dog's comfort.",
    votes: 6700,
    comments: 1890,
  },
]

export const FLAIRS = {
  NTA: { label: 'NTA', bg: '#1a3a22', color: '#46d160', border: '#2d5c38' },
  YTA: { label: 'YTA', bg: '#3a1a1a', color: '#ff6b6b', border: '#5c2d2d' },
  ESH: { label: 'ESH', bg: '#3a2e00', color: '#ffd166', border: '#5c4a00' },
  NAH: { label: 'NAH', bg: '#0e2a3a', color: '#4fbdba', border: '#1a4a5c' },
  INFO: { label: 'INFO', bg: '#2a2a3a', color: '#a0a0c8', border: '#3a3a5c' },
}

export const COMMENTS = {
  1: [
    {
      id: 'c1', author: 'SensibleSarah42', avatar: '👩', votes: 14200, timeAgo: '6 hr. ago',
      text: "NTA. You didn't feel comfortable lying and that's completely valid. The fact that he then lost his licence is a consequence of his own speeding, not your refusal to cover for him.",
      replies: [
        {
          id: 'c1a', author: 'LegalEagle99', avatar: '⚖️', votes: 8700, timeAgo: '5 hr. ago',
          text: "Also worth noting — signing a false declaration that you were driving when you weren't is fraud in most jurisdictions. OP could have faced serious legal consequences.",
          replies: [
            {
              id: 'c1a1', author: 'ThriftyTom99', avatar: '👨', votes: 3200, timeAgo: '4 hr. ago',
              text: "Exactly. He was asking her to commit a crime on his behalf and is now upset she said no. That's a massive red flag.",
              replies: [
                {
                  id: 'c1a1a', author: 'BudgetBarbara', avatar: '💰', votes: 1100, timeAgo: '3 hr. ago',
                  text: "And she would have been the one facing consequences if it came out. He had zero skin in the game if she got caught.",
                  replies: [
                    {
                      id: 'c1a1a1', author: 'DirectDave', avatar: '🎯', votes: 540, timeAgo: '2 hr. ago',
                      text: "This. He gets to keep his licence and she takes all the risk. And now he's upset about it. NTA 1000%.",
                      replies: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'c1b', author: 'MathMaven', avatar: '🔢', votes: 4100, timeAgo: '5 hr. ago',
          text: "Not just fraud — insurance fraud in many places. OP made the right call.",
          replies: []
        }
      ]
    },
    {
      id: 'c2', author: 'FrugalFiona', avatar: '🌿', votes: 9800, timeAgo: '6 hr. ago',
      text: "He was speeding. He got caught. He wanted you to lie to save him from consequences of his own actions. You said no. He faced consequences. NTA. This is exactly how it should work.",
      replies: [
        {
          id: 'c2a', author: 'RedFlagRadar', avatar: '🚩', votes: 5600, timeAgo: '5 hr. ago',
          text: "The entitlement of expecting your spouse to commit fraud for your mistake is wild. NTA OP.",
          replies: []
        }
      ]
    },
    {
      id: 'c3', author: 'DevilsAdvocate77', avatar: '😈', votes: 1200, timeAgo: '5 hr. ago',
      text: "I mean... married couples help each other out. A small fine versus losing a licence for 3 months is a big deal. Slight YTA for not at least considering it.",
      replies: [
        {
          id: 'c3a', author: 'CounterPoint', avatar: '⚖️', votes: 6400, timeAgo: '4 hr. ago',
          text: "She was asked to commit fraud. There is no 'slight YTA' for refusing to break the law.",
          replies: []
        }
      ]
    },
    {
      id: 'c4', author: 'ServerSympathy', avatar: '🚗', votes: 7600, timeAgo: '4 hr. ago',
      text: "He chose to speed. He chose not to take the classes. Every decision that led here was his. You just declined to add your own crime to the list.",
      replies: []
    },
  ],
  2: [
    {
      id: 'c1', author: 'SensibleSarah42', avatar: '👩', votes: 14200, timeAgo: '3 hr. ago',
      text: "NTA. You ordered what you ordered. The whole 'split evenly' thing only works when everyone orders roughly the same amount.",
      replies: [
        {
          id: 'c1a', author: 'ThriftyTom99', avatar: '👨', votes: 8700, timeAgo: '2 hr. ago',
          text: "Exactly. The moment someone orders three drinks before the appetizers arrive, the even-split contract is void.",
          replies: []
        }
      ]
    },
    {
      id: 'c2', author: 'FrugalFiona', avatar: '🌿', votes: 9800, timeAgo: '3 hr. ago',
      text: "Your friend called YOU cheap while ordering three cocktails and a steak? The audacity. NTA, and honestly I'd reconsider this friendship.",
      replies: []
    },
  ]
}
