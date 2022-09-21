const vinyls = [
    {
        title: 'Happier Than Ever',
        artist: 'Billie Eilish',
        price: '$8500',
        id: '1',
        img: 'https://imgs.search.brave.com/vcW9-keICY1BQuBzUWpZOs69tNxWyHiuPiqKwz5Djew/rs:fit:522:519:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxdVFNLWtIZWVM/Ll9TWDUyMl8uanBn',
        description: "Happier Than Ever is the second studio album by American singer Billie Eilish. It was released on July 30, 2021. This album is characterized by sparse, jazz-influenced, electropop arrangements set to meditative tempos",
        genre: 'Pop',
        tracks: [
            "1- Getting Older  ",
            "2- I Didn't Change My Number  ",
            "3- Billie Bossa Nova  ",
            "4- My Future  ",
            "5- Oxytocin  ",
            "6- Goldwig  ",
            "7- Lost Cause  ",
            "8- Halley's Comet  ",
            "9- Not My Responsibility  ",
            "10- Overheated  ",
            "11- Everybody Dies  ",
            "12- Your Power  ",
            "13- NDA  ",
            "14- Therefore I Am  ",
            "15- Happier Than Ever  ",
            "16- Male Fantasy  "
        ]
    },

    {
        title: 'Ok Computer',
        artist: 'Radiohead',
        price: '$13000',
        id: '2',
        img: 'https://imgs.search.brave.com/349rR5msHEJUz3OcEdOVEGUElzCczAd_cSQ8ViPbPss/rs:fit:612:612:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvNjQz/MzI2YjUtZmIyNi00/YThlLWJlMDMtOGZh/NjhlYzEwNWExXzEu/ODFhODEzNWI5YzEw/MDcxOGI5MmIyNWRj/YzNmOGI5ODIuanBl/Zz9vZG5XaWR0aD02/MTImb2RuSGVpZ2h0/PTYxMiZvZG5CZz1m/ZmZmZmY',
        description: "OK Computer is Radiohead's third studio album. With OK Computer, the band made a deliberate attempt to distance themselves from the guitar-oriented, lyrically introspective style of their previous album The Bends (1995).",
        genre: 'Indie',
        tracks: [
         '1- Airbag  ',
         '2- Paranoid Android  ',
         '3- Subterranean Homesick Alien  ',
         '4- Exit Music (For a Film)  ',
         '5- Let Down  ',
         '6- Karma Police  ',
         '7- Fitter Happier  ',
         '8- Electioneering  ',
         '9- Climbing Up the Walls  ',
         '10- No Surprises  ',
         '11- Lucky  ',
         '12- The Tourist'
        ]
    },

    {
        title: 'A Night At The Opera',
        artist: 'Queen',
        price: '$10000',
        id: '3',
        img: 'https://imgs.search.brave.com/yZgW3H1lVfvCrADvhORs0Ffnwp3PLtQaoX9zmygYS_I/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9wcm9k/dWN0LmhzdGF0aWMu/bmV0LzEwMDAzMDQ5/MjAvcHJvZHVjdC9h/aWdvbi12aW55bC1y/ZWNvcmRzLXN0b3Jl/LXF1ZWVuLWEtbmln/aHQtYXQtdGhlLW9w/ZXJhLWxwLXZpbnls/LWxwLWFsYnVtX2E3/ZjJmODZkNGU5MDQz/MzJiZDEwYWUzMDc5/ODQ1ZTQ2X21hc3Rl/ci5qcGc',
        description: 'A Night at the Opera is the fourth studio album by the British rock band Queen, released on 21 November 1975 by EMI Records. The songs incorporated a wide range of styles, such as ballads, music hall, dixieland, hard rock and progressive rock influences.',
        genre: 'Rock',
        tracks: [
            "1- Death on Two Legs  ",
            "2- Lazing on a Sunday Afternoon  ",
            "3- I'm in Love with My Car  ",
            "4- You're My Best Friend  ",
            "5- 39  ",
            "6- Sweet Lady  ",
            "7- Seaside Rendezvous  ",
            "8- The Prophet's Song  ",
            "9- Love of My Life  ",
            "10- Good Company  ",
            "11- Boemia Rhapsody  ",
            "12- God Save the Queen  "
        ]
    },
    {
        title: 'Abbey Road',
        artist: 'The Beatles',
        price: '$11000',
        id: '4',
        img: 'https://imgs.search.brave.com/d0QqeicASEbJOO8I8TPsa7I_YHI2a0bvjhaAG_r72VY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA4/ODEvNDU2OC9wcm9k/dWN0cy9UaGVCZWF0/bGVzLUFiYmV5Um9h/ZF8xLmpwZz92PTE2/MTQ4OTA1Njc',
        description: 'Abbey Road is the 11th studio album released by the English rock band the Beatles. This album incorporates genres such as blues, pop, and progressive rock and makes prominent use of the moog synthesizer and the Leslie speaker.',
        genre: 'Rock',
        tracks: [
            "1- Come Together  ",
            "2- Something  ",
            "3- Maxwell's Silver Hammer  ",
            "4- Oh! Darling  ",
            "5- Octopus's Garden  ",
            "6- I Want You (She's So Heavy)  ",
            "7- Here Comes the Sun  ",
            "8- Because  ",
            "9- You Never Give Me Your Money  ",
            "10- Sun King  ",
            "11- Mean Mr. Mustard  ",
            "12- Polythene Pam  ",
            "13- She Came In Through the Bathroom Window  ",
            "14- Golden Slumbers  ",
            "15- Carry That Weight  ",
            "16- The End  ",
            "17- Her Majesty  "
        ]
    },
    {
        title: 'A Rush Of Blood To The Head',
        artist: 'Coldplay',
        price: '$4000',
        id: '5',
        img: 'https://imgs.search.brave.com/OsxcwkvetQQhO4V5gXlne5EeRK0371U9zQQFSuWDLAw/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAw/NzkvNjY1Mi8zNDQ0/L3Byb2R1Y3RzL0FS/VVNIT0ZCTE9PRFZJ/TllMLnBuZz92PTE2/MTk0NzExMTA',
        description: 'A Rush of Blood to the Head is the second studio album by British rock band Coldplay. It was released on 26 August 2002. The album topped the UK Albums Chart upon its first week of release in the United Kingdom, and became the eighth biggest-selling album of the 21st century in the UK.',
        genre: 'Indie',
        tracks: [
            "1- Politik  ",
            "2- In My Place  ",
            "3- God Put a Smile upon Your Face  ",
            "4- The Scientist  ",
            "5- Clocks  ",
            "6- Daylight  ",
            "7- Green Eyes  ",
            "8- Warning Sign  ",
            "9- A Whisper  ",
            "10- A Rush of Blood to the Head  ",
            "11- Amsterdam  "
        ],
    },
    {
        title: 'Perfect Symmetry',
        artist: 'Keane',
        price: '$6200',
        id: '6',
        img: 'https://imgs.search.brave.com/VbKlsLO_jyy2PnMLi0xOfQo9PEk2aItei-mqKQfvf_0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZXJj/aGJhci5pbWdpeC5u/ZXQvcHJvZHVjdC92/aW55bGl6ZWQvdXBj/Lzc0LzYwMjU2NzE3/NzQwMS5qcGc_dz02/NDAmaD02NDAmcXVh/bGl0eT0yMCZhdXRv/PWNvbXByZXNzJTI1/MkNmb3JtYXQmZHBy/PTM',        
        description: 'Perfect Symmetry is the third studio album by English rock band Keane, released on 13 October 2008 in the United Kingdom.',
        genre: 'Pop',
        tracks: [
            "1- Spiralling  ",
            "2- The Lovers Are Losing ",
            "3- Better Than This  ",
            "4- You Haven't Told Me Anyting  ",
            "5- Perfect Symmetry  ",
            "6- You Don't See Me  ",
            "7- Again and Again  ",
            "8- Playing Along  ",
            "9- Pretend That You're Alone  ",
            "10- Black Burning Heart  ",
            "11- Love Is the End  "
        ]
    },

    {
        title: 'Greatest Hits',
        artist: 'Foo Fighters',
        price: '$9990',
        id: '7',
        img: 'https://http2.mlstatic.com/D_NQ_NP_697637-MLA27221374752_042018-W.jpg',
        description: "Greatest Hits is a greatest hits album released by American rock band the Foo Fighters on November 3, 2009.",
        genre: 'Rock',
        tracks: [
            "1- All My Life  ",
            "2- Best of You  ",
            "3- Everlong  ",
            "4- The Pretender  ",
            "5- My Hero  ",
            "6- Learn to Fly  ",
            "7- Times Like These  ",
            "8- Monkey Wrench  ",
            "9- Big Me  ",
            "10- Breakout  ",
            "11- Long Road to Ruin  ",
            "12- This Is a Call  ",
            "13- Skin and Bones  ",
            "14- Wheels  ",
            "15- Word Forward  ",
            "16- Everlong (Acoustic version)  "
        ]
    },

    {
        title: 'Future Nostalgia',
        artist: 'Dua Lipa',
        price: '$5300',
        id: '9',
        img: 'https://cdn.shopify.com/s/files/1/0572/2400/3783/products/DuaLipa-FutureNostalgia_Vinilo.jpg?v=1650301434',
        description: `Future Nostalgia is the second studio album by English singer Dua Lipa, released on 27 March 2020 by Warner Records. Lipa enlisted writers and producers such as Jeff Bhasker, Ian Kirkpatrick, Stuart Price, the Monsters & Strangerz, and Koz in order to create a "nostalgic" pop and disco record with influences from dance-pop and electronic music, inspired by the music that Lipa enjoyed during her childhood.`,
        genre: 'Pop',
        tracks: [
            "1- Future Nostalgia  ",
            "2- Don't Start Now  ",
            "3- Cool  ",
            "4- Physical  ",
            "5- Levitating  ",
            "6- Pretty Please  ",
            "7- Hallucinate  ",
            "8- Love Again  ",
            "9- Break My Heart  ",
            "10- Good in Bed  ",
            "11- Boys Will Be Boys  "
        ]
    }
];

export default vinyls;
