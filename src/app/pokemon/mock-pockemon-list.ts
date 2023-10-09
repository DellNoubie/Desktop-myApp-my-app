
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
import { Pokemon } from './pokemon';

export const POKEMONS: Pokemon[] = [
    {
        id: 1,
        name: "Bulbizarre",
        hp: 25,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
        types: ["Plante", "Poison"],
        created: new Date()
    },
    {
        id: 2,
        name: "Salamèche",
        hp: 28,
        cp: 6,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
        types: ["Feu"],
        created: new Date()
    },
    {
        id: 3,
        name: "Carapuce",
        hp: 21,
        cp: 4,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
        types: ["Eau"],
        created: new Date()
    },
    {
        id: 4,
        name: "Aspicot",
        hp: 16,
        cp: 2,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
        types: ["Insecte", "Poison"],
        created: new Date()
    },
    {
        id: 5,
        name: "Roucool",
        hp: 30,
        cp: 7,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
        types: ["Normal", "Vol"],
        created: new Date()
    },
    {
        id: 6,
        name: "Rattata",
        hp: 18,
        cp: 6,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
        types: ["Normal"],
        created: new Date()
    },
    {
        id: 7,
        name: "Piafabec",
        hp: 14,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",
        types: ["Normal", "Vol"],
        created: new Date()
    },
    {
        id: 8,
        name: "Abo",
        hp: 16,
        cp: 4,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
        types: ["Poison"],
        created: new Date()
    },
    {
        id: 9,
        name: "Pikachu",
        hp: 21,
        cp: 7,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
        types: ["Electrik"],
        created: new Date()
    },
    {
        id: 10,
        name: "Sabelette",
        hp: 19,
        cp: 3,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
        types: ["Normal"],
        created: new Date()
    },
    {
        id: 11,
        name: "Mélofée",
        hp: 25,
        cp: 5,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",
        types: ["Fée"],
        created: new Date()
    },
    {
        id: 12,
        name: "Groupix",
        hp: 17,
        cp: 8,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
        types: ["Feu"],
        created: new Date()
    }
];
