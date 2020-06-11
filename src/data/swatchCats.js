export const themeList = [

    { label: "Holiday",  value: "holiday"},
    { label: "Flag",  value: "flag"},
    { label: "Sports",  value: "sports"},
    { label: "Predators",  value: "predators"},
    { label: "Patriotic",  value: "patriotic"},
    { label: "Disney",  value: "disney"},
    { label: "Flowers",  value: "flowers"},
    { label: "kids",  value: "kids"},
    { label: "hearts",  value: "hearts"},
    { label: "Design/Artsy",  value: "design"},
    { label: "Stripes",  value: "stripe"},
    { label: "paisley",  value: "paisley"},
    { label: "Solid Color",  value: "solid"},
    { label: "Polka Dots",  value: "polka"},

    { label: "Dr. Suess",  value: "suess"},

    { label: "Dog",  value: "dog"},
    { label: "Paws",  value: "paws"},
    { label: "Plaid",  value: "plaid"},
    { label: "Military",  value: "military"},
    { label: "Cats",  value: "cats"},
    { label: "Glasses",  value: "glasses"},
    { label: "Boats",  value: "boats"},
    { label: "Skulls",  value: "skull"},
    { label: "Fruit",  value: "fruit"},
    { label: "Frogs",  value: "frog"},
    { label: "Butterfly",  value: "butterfly"},
    { label: "Baby",  value: "baby"},
    { label: "Unicorn",  value: "purple"},
    { label: "Stars",  value: "star"},
    { label: "Balloons",  value: "balloon"},
    { label: "Travel",  value: "travel"},
    { label: "Dresses",  value: "dress"},
    { label: "School",  value: "school"},
    { label: "Hands",  value: "hands"},
    { label: "Colorful",  value: "colorful"},

    { label: "",  value: ""},
] ;

export const charList = [

    { label: "Mickey Mouse",  value: "mickey"},
    { label: "Minnie Mouse",  value: "minnie"},
    { label: "Transformers",  value: "transformers"},
    { label: "My Litter Pony",  value: "mlp"},
    { label: "Sofia",  value: "sofia"},
    { label: "Cat In The Hat",  value: "catinthehat"},
    { label: "Shopkins",  value: "shopkins"},
    { label: "Captain Marval",  value: "captmarval"},
    { label: "Toy Story",  value: "toystory"},
    { label: "Daniel Tiger",  value: "white"},
    { label: "Minecraft",  value: "minecraft"},
    { label: "Winnie the Poo",  value: "winnie"},
    { label: "Superman",  value: "superman"},
    { label: "Charlie Brown",  value: "charlie"},
    { label: "Snoopy",  value: "snoopy"},
    { label: "Star Wars",  value: "starwars"},
    { label: "Batman",  value: "batman"},
    { label: "Littlest Pet Shop",  value: "petshop"},
    { label: "Princess",  value: "princess"},
    { label: "Harry Potter",  value: "potter"},
    { label: "Care Bears",  value: "carebear"},
    { label: "Disney Cars",  value: "cars"},
    { label: "Frozen",  value: "frozen"},
    { label: "Lion King",  value: "lion"},
    { label: "Looney Toons",  value: "looney"},
    { label: "Tweety",  value: "tweety"},
    { label: "Spiderman",  value: "spiderman"},
    { label: "Ironman",  value: "ironman"},
    { label: "Superheros",  value: "superhero"},
    { label: "Snow White",  value: "snowwhite"},
    { label: "Pokemon",  value: "pokemon"},
    { label: "Minions",  value: "minions"},
    { label: "",  value: ""},
    { label: "",  value: ""},
];
export const colorsList =  [
    { label: "Purple",  value: "purple"},
    { label: "Blue",  value: "blue"},
    { label: "Pink",  value: "pink"},
    { label: "White",  value: "white"},
    { label: "Red",  value: "red"},
    { label: "Yellow",  value: "yellow"},
    { label: "Green",  value: "green"},
    { label: "Black",  value: "black"},
    { label: "Orange",  value: "orange"},
    { label: "Gold",  value: "gold"},
    { label: "Grey",  value: "grey"},
    { label: "",  value: ""},
    { label: "",  value: ""},
];


const  groupedOptions = [
    {
        label: 'New',
        value: "new"
    },
    {
        label: 'Premimum',
        value: "prem"
    },
    {
        label: 'Colors',
        options: colorsList,
    },
    {
        label: 'Theme',
        options: themeList,
    },
    {
        label: 'Character ',
        options: charList,
    },
];

export default groupedOptions;