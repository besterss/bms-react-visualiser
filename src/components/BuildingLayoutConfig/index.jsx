export const CONFIG_DATA = {
  floors: [
    {
      id: -2,
      name: "P2",
      type: "underground",
      segments: [
        { width: 35.82, depth: 35.82, position: { x: 0, z: 0 } }, // kostka hlavni
        { width: 78, depth: 46.9, position: { x: 0, z: 31.5 } }, //sklad
        { width: 8, depth: 29, position: { x: -40, z: 40.3 } }, //retencni nadrz
      ],
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },

        walls: [
          {
            //Schodiste02 - leva
            type: "partition",
            start: { x: -9.925, z: 14.5 },
            end: { x: -9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste02 - spodni
            type: "partition",
            start: { x: -9.65, z: 10.075 },
            end: { x: -7.15, z: 10.075 },
            partitionWidth: 0.95,
          },
          {
            //Schodiste02 - prava
            type: "partition",
            start: { x: -6.875, z: 16.8 },
            end: { x: -6.875, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste02 - vrchni leva
            type: "partition",
            start: { x: -10.2, z: 16.875 },
            end: { x: -8.2, z: 16.875 },
            partitionWidth: 0.15,
          },
          {
            //Schodiste02 - vrchni prava
            type: "partition",
            start: { x: -7.3, z: 16.875 },
            end: { x: -6.6, z: 16.875 },
            partitionWidth: 0.15,
          },
          {
            //V4 - vrchni
            type: "partition",
            start: { x: -6.6, z: 16.7 },
            end: { x: -3.6, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //V4 - vrchni
            type: "partition",
            start: { x: 18.12, z: 16.7 },
            end: { x: 14.66, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //V4 - vrchni
            type: "partition",
            start: { x: 10, z: 16.7 },
            end: { x: 12.56, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //V4 - vrchni
            type: "partition",
            start: { x: -18.12, z: 16.7 },
            end: { x: -9.925, z: 16.7 },
            partitionWidth: 0.25,
          },
          {
            //V4 - prava
            type: "partition",
            start: { x: -3.95, z: 16.6 },
            end: { x: -3.95, z: 16.145 },
            partitionWidth: 0.2,
          },
          {
            //V5 - vrchni
            type: "partition",
            start: { x: -6.6, z: 14.95 },
            end: { x: -4.05, z: 14.95 },
            partitionWidth: 0.2,
          },
          {
            //V5 - prava
            type: "partition",
            start: { x: -3.95, z: 15.145 },
            end: { x: -3.95, z: 14.445 },
            partitionWidth: 0.2,
          },
          {
            //01.03 - vrchni
            type: "partition",
            start: { x: -6.6, z: 13.375 },
            end: { x: -4.05, z: 13.375 },
            partitionWidth: 0.15,
          },
          {
            //01.03 - prava
            type: "partition",
            start: { x: -3.95, z: 13.545 },
            end: { x: -3.95, z: 12.85 },
            partitionWidth: 0.2,
          },
          {
            //01.67 - vrchni
            type: "partition",
            start: { x: -6.6, z: 11.675 },
            end: { x: -4.05, z: 11.675 },
            partitionWidth: 0.15,
          },
          {
            //01.67 - prava
            type: "partition",
            start: { x: -3.95, z: 11.85 },
            end: { x: -3.95, z: 11.15 },
            partitionWidth: 0.2,
          },
          {
            //01.67 - prava 2
            type: "partition",
            start: { x: -3.95, z: 10.15 },
            end: { x: -3.95, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //01.67 - spodni
            type: "partition",
            start: { x: -6.6, z: 9.7 },
            end: { x: -3.35, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //01.05 - vrchni
            type: "partition",
            start: { x: -1.8, z: 16.7 },
            end: { x: 10.2, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 16.145 },
            partitionWidth: 0.4,
          },
          {
            //1.19 - leva 2
            type: "partition",
            start: { x: -0.95, z: 15.145 },
            end: { x: -0.95, z: 9.8 },
            partitionWidth: 0.4,
          },
          {
            //V1 - spodni
            type: "partition",
            start: { x: -1.45, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - prava spodni
            type: "partition",
            start: { x: 1.955, z: 14 },
            end: { x: 1.955, z: 15.095 },
            partitionWidth: 0.15,
          },
          {
            //1.19 - prava horni
            type: "partition",
            start: { x: 1.955, z: 16.145 },
            end: { x: 1.955, z: 16.6 },
            partitionWidth: 0.15,
          },
          {
            //1.16 - spodni
            type: "partition",
            start: { x: -0.75, z: 14.15 },
            end: { x: 4.5, z: 14.15 },
            partitionWidth: 0.3,
          },
          {
            //sachta - spodni
            type: "partition",
            start: { x: -0.75, z: 11.8 },
            end: { x: 4.5, z: 11.8 },
            partitionWidth: 0.2,
          },
          {
            //V1 - prava
            type: "partition",
            start: { x: 1.06, z: 11.7 },
            end: { x: 1.06, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //V2 - prava
            type: "partition",
            start: { x: 2.86, z: 11.7 },
            end: { x: 2.86, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //1.16 - prava
            type: "partition",
            start: { x: 4.775, z: 16.6 },
            end: { x: 4.775, z: 11.7 },
            partitionWidth: 0.55,
          },
          {
            //V3 - prava
            type: "partition",
            start: { x: 4.8125, z: 11.7 },
            end: { x: 4.8125, z: 9.8 },
            partitionWidth: 0.475,
          },
          {
            //V3 - spodni
            type: "partition",
            start: { x: 4.23, z: 9.7 },
            end: { x: 5.05, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.08 - prava
            type: "partition",
            start: { x: 9.925, z: 16.6 },
            end: { x: 9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //sachta2 - spodni
            type: "partition",
            start: { x: 5.05, z: 15.2 },
            end: { x: 9.65, z: 15.2 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - prava vrchni
            type: "partition",
            start: { x: 7.325, z: 15.1 },
            end: { x: 7.325, z: 13.3 },
            partitionWidth: 0.25,
          },
          {
            //1.07 - prava spodni
            type: "partition",
            start: { x: 7.3, z: 13.3 },
            end: { x: 7.3, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - spodni
            type: "partition",
            start: { x: 6.05, z: 9.7 },
            end: { x: 8.65, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //prava zed nad schodistem - prava
            type: "partition",
            start: { x: 10.1, z: -10.2 },
            end: { x: 10.1, z: -8.9 },
            partitionWidth: 0.2,
          },
          {
            //prava zed nad schodistem vyssi - leva
            type: "partition",
            start: { x: 10.1, z: -2.8 },
            end: { x: 10.1, z: -7.8 },
            partitionWidth: 0.2,
          },
          {
            //prostredni zed vpravo s H spodni
            type: "partition",
            start: { x: 10.2, z: -2.9 },
            end: { x: 11.85, z: -2.9 },
            partitionWidth: 0.2,
          },

          {
            //prostredni zed nahoru od H
            type: "partition",
            start: { x: 11.775, z: -2.85 },
            end: { x: 11.775, z: 6.04 },
            partitionWidth: 0.15,
          },
          {
            //prostredni zed doprava vrchni nahore
            type: "partition",
            start: { x: 11.7, z: 5.965 },
            end: { x: 12.31, z: 5.965 },
            partitionWidth: 0.15,
          },
          {
            //prostredni zed doprava spodni pokjracovani
            type: "partition",
            start: { x: 13.61, z: 5.965 },
            end: { x: 16.875, z: 5.965 },
            partitionWidth: 0.15,
          },
          {
            //prostredni zed doprava spodni pokjracovani
            type: "partition",
            start: { x: 17.87, z: 5.965 },
            end: { x: 17.795, z: 5.965 },
            partitionWidth: 0.15,
          },

          {
            //prostredni zed LEVA dnahoruoprava prava
            type: "partition",
            start: { x: 16.7, z: 6.04 },
            end: { x: 16.7, z: 9.55 },
            partitionWidth: 0.3,
          },

          {
            //prostredni doprava ke konci k outlionu
            type: "partition",
            start: { x: 16.55, z: 9.55 },
            end: { x: 18.498, z: 9.55 },
            partitionWidth: 0.3,
          },

          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 9.925, z: -16.8 },
            end: { x: 9.925, z: -10.07 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 8.35, z: -10.2 },
            partitionWidth: 0.26,
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 6.875, z: -10.2 },
            end: { x: 6.875, z: -16.8 },
            partitionWidth: 0.55,
          },
          {
            //Rozvadece - dolni
            type: "partition",
            start: { x: -16.8, z: -10 },
            end: { x: -10.2, z: -10 },
            partitionWidth: 0.4,
          },
          {
            //Rozvadece - horni
            type: "partition",
            start: { x: -16.8, z: -8 },
            end: { x: -10.2, z: -8 },
            partitionWidth: 0.4,
          },
          {
            //Rozdelovace - leva
            type: "partition",
            start: { x: -16.5, z: -8.2 },
            end: { x: -16.5, z: -9.8 },
            partitionWidth: 0.6,
          },
          {
            //Rozdelovace - prava
            type: "partition",
            start: { x: -13.59, z: -8.2 },
            end: { x: -13.59, z: -9.8 },
          },
          {
            //Rozdelovace mala stena - nahore
            type: "partition",
            start: { x: -11.95, z: -8.35 },
            end: { x: -10.2, z: -8.35 },
            partitionWidth: 0.3,
          },
          {
            //Rozdelovace mala stena - dole
            type: "partition",
            start: { x: -11.95, z: -9.65 },
            end: { x: -10.2, z: -9.65 },
            partitionWidth: 0.3,
          },
          {
            //hl rozvadecec
            type: "partition",
            start: { x: -16.5, z: -13.075 },
            end: { x: -10.35, z: -13.075 },
            partitionWidth: 0.15,
          },
          {
            //hl rozvadec - prava dole
            type: "partition",
            start: { x: -10.275, z: -12.205 },
            end: { x: -10.275, z: -13.725 },
            partitionWidth: 0.15,
          },

          {
            //rozvodna RPO - leva
            type: "partition",
            start: { x: -13.35, z: -13.15 },
            end: { x: -13.35, z: -15.925 },
            partitionWidth: 0.15,
          },

          {
            //rozvodna RPO - dolni leva kratka
            type: "partition",
            start: { x: -10.275, z: -14.35 },
            end: { x: -10.275, z: -16.075 },
            partitionWidth: 0.15,
          },
          {
            //rozvodna RPO - dolni
            type: "partition",
            start: { x: -10.2, z: -16 },
            end: { x: -13.525, z: -16 },
            partitionWidth: 0.15,
          },

          {
            //mistnost CBS - SPODek
            type: "partition",
            start: { x: -16.5, z: -16 },
            end: { x: -15.325, z: -16 },
            partitionWidth: 0.15,
          },
          {
            //mistnost CBS - leva leva
            type: "partition",
            start: { x: -16.6, z: -10.2 },
            end: { x: -16.6, z: -16.075 },
            partitionWidth: 0.3,
          },
          {
            //spodek modra vnitrni leva
            type: "partition",
            start: { x: 13.495, z: -17.87 },
            end: { x: 13.495, z: -4.31 },
            partitionWidth: 0.25,
          },

          {
            //spodek modra vnejsi vrchni
            type: "partition",
            start: { x: 13.37, z: -4.185 },
            end: { x: 17.87, z: -4.185 },
            partitionWidth: 0.25,
          },
          {
            //šachta vrchni
            type: "partition",
            start: { x: 12.27, z: -4.165 },
            end: { x: 11.775, z: -4.165 },
            partitionWidth: 0.2,
          },
          {
            //šachta  leva
            type: "partition",
            start: { x: 11.775, z: -4.06 },
            end: { x: 11.775, z: -5.475 },
            partitionWidth: 0.2,
          },
          {
            //šachta  spodni
            type: "partition",
            start: { x: 13.37, z: -5.375 },
            end: { x: 11.775, z: -5.375 },
            partitionWidth: 0.2,
          },
          {
            //strojovna chlazeni vnejsi prava 1
            type: "partition",
            start: { x: 4.075, z: -0.35 },
            end: { x: 4.075, z: -0.95 },
            partitionWidth: 0.15,
          },
          {
            //strojovna chlazeni vnejsi prava 2
            type: "partition",
            start: { x: 4.075, z: -2.85 },
            end: { x: 4.075, z: -3.675 },
            partitionWidth: 0.15,
          },
          {
            //strojovna chlazeni vnejsi prava 3
            type: "partition",
            start: { x: 4.075, z: -5.175 },
            end: { x: 4.075, z: -5.85 },
            partitionWidth: 0.15,
          },
          {
            //strojovna chlazeni vnejsi prava 4
            type: "partition",
            start: { x: 4.075, z: -7.35 },
            end: { x: 4.075, z: -8.85 },
            partitionWidth: 0.15,
          },
          {
            //strojovna chlazeni vnejsi leva
            type: "partition",
            start: { x: -1.676, z: -0.35 },
            end: { x: -1.675, z: -8.85 },
            partitionWidth: 0.15,
          },
          {
            //strojovna chlazeni vnejsi leva
            type: "partition",
            start: { x: -1.675, z: -3.15 },
            end: { x: -2.075, z: -3.15 },
            partitionWidth: 0.4,
          },
          {
            //strojovna chlazeni vnejsi leva
            type: "partition",
            start: { x: 4.075, z: -3.15 },
            end: { x: 4.475, z: -3.15 },
            partitionWidth: 0.4,
          },
          {
            //strojovna chlazeni spodni vnejsi
            type: "partition",
            start: { x: -1.75, z: -8.775 },
            end: { x: 4.15, z: -8.775 },
            partitionWidth: 0.15,
          },
          {
            //strojovna chlazeni vrchni vnejsi
            type: "partition",
            start: { x: -1.75, z: -0.425 },
            end: { x: 4.15, z: -0.425 },
            partitionWidth: 0.15,
          },
          {
            //spodek B
            type: "partition",
            start: { x: -17.87, z: 21.72 },
            end: { x: 17.87, z: 21.72 },
            partitionWidth: 0.7,
          },
          {
            //spodek B KOSTKA MALA
            type: "partition",
            start: { x: -18.22, z: 21.6 },
            end: { x: -18.22, z: 21.3 },
            partitionWidth: 0.7,
          },
          {
            //spodek B KOSTKA MALA
            type: "partition",
            start: { x: 18.2, z: 21.6 },
            end: { x: 18.2, z: 21.3 },
            partitionWidth: 0.7,
          },
          {
            type: "partition",
            start: { x: -17.87, z: 21.72 },
            end: { x: -37.2, z: 21.72 },
            partitionWidth: 0.7,
          },
          {
            //spodek B
            type: "partition",
            start: { x: -39.05, z: 21.37 },
            end: { x: -39.05, z: 54.68 },
            partitionWidth: 0.4,
          },
          {
            //prava parkoviste
            type: "partition",
            start: { x: 17.87, z: 21.72 },
            end: { x: 37.75, z: 21.72 },
            partitionWidth: 0.7,
          },
          {
            //prava parkoviste
            type: "partition",
            start: { x: 39.05, z: 21.37 },
            end: { x: 39.05, z: 54.68 },
            partitionWidth: 0.4,
          },
          {
            //vrchni parkoviste horni
            type: "partition",
            start: { x: -39.25, z: 54.68 },
            end: { x: 39.25, z: 54.68 },
            partitionWidth: 0.4,
          },
          {
            //parkoviste stredova leva
            type: "partition",
            start: { x: -0.9375, z: 21.37 },
            end: { x: -0.9375, z: 54.68 },
            partitionWidth: 0.425,
          },
          {
            // C
            type: "partition",
            start: { x: -17.83, z: 8.03 },
            end: { x: -39.25, z: 8.03 },
            partitionWidth: 0.4,
          },
          {
            // a
            type: "partition",
            start: { x: 17.87, z: 8.03 },
            end: { x: 39.25, z: 8.03 },
            partitionWidth: 0.4,
          },
          {
            // avrchni
            type: "partition",
            start: { x: 39.05, z: 8.03 },
            end: { x: 39.05, z: 21.37 },
            partitionWidth: 0.4,
          },
          {
            // cvrchni
            type: "partition",
            start: { x: -39.05, z: 8.23 },
            end: { x: -39.05, z: 21.37 },
            partitionWidth: 0.4,
          },
          {
            // cvrchni
            type: "partition",
            start: { x: -32.325, z: 8.23 },
            end: { x: -32.325, z: 11.95 },
            partitionWidth: 0.2,
          },
          {
            // cvrchni
            type: "partition",
            start: { x: -32.325, z: 11.85 },
            end: { x: -37, z: 11.85 },
            partitionWidth: 0.2,
          },
          {
            // cvrchni
            type: "partition",
            start: { x: -38.25, z: 11.85 },
            end: { x: -38.85, z: 11.85 },
            partitionWidth: 0.2,
          },
          {
            //odvetraci šachta š7 spodni
            type: "partition",
            start: { x: 37.65, z: 50.745 },
            end: { x: 35.71, z: 50.745 },
            partitionWidth: 0.32,
          },
          {
            //odvetraci šachta š7 leva horni
            type: "partition",
            start: { x: 35.81, z: 54.48 },
            end: { x: 35.81, z: 53.925 },
            partitionWidth: 0.32,
          },
          {
            //odvetraci šachta š7 leva horni kostka prodstedni
            type: "partition",
            start: { x: 35.81, z: 53.165 },
            end: { x: 35.81, z: 52.885 },
            partitionWidth: 0.32,
          },
          {
            //odvetraci šachta š7 leva horni kostka druha
            type: "partition",
            start: { x: 35.81, z: 52.125 },
            end: { x: 35.81, z: 51.845 },
            partitionWidth: 0.32,
          },
          {
            //odvetraci schodiste B2 leva horni
            type: "partition",
            start: { x: 35.81, z: 49.59 },
            end: { x: 35.81, z: 51.25 },
            partitionWidth: 0.2,
          },
          {
            //odvetraci Schodiste B2 leva
            type: "partition",
            start: { x: 35.81, z: 48.59 },
            end: { x: 35.81, z: 41.96 },
            partitionWidth: 0.2,
          },

          {
            //odvetraci šachta š7
            type: "partition",
            start: { x: 35.81, z: 40.76 },
            end: { x: 35.81, z: 40.96 },
            partitionWidth: 0.2,
          },
          {
            //odvetraci šachta š7
            type: "partition",
            start: { x: 37.325, z: 40.76 },
            end: { x: 37.325, z: 40.96 },
            partitionWidth: 0.2,
          },
          {
            //schodiste jadro B2 spodni
            type: "partition",
            start: { x: 39.25, z: 40.76 },
            end: { x: 35.71, z: 40.76 },
            partitionWidth: 0.2,
          },
          {
            //Leva strana kostka
            type: "partition",
            start: { x: -18.12, z: -18.37 },
            end: { x: -18.12, z: 7.86 },
            partitionWidth: 0.5,
          },
          {
            //rozvadece spojovaci Zed
            type: "partition",
            start: { x: -18.12, z: -8.9 },
            end: { x: -16.7, z: -8.9 },
            partitionWidth: 2.2,
          },
          {
            //sklad B2 leva strana
            type: "partition",
            start: { x: 37.325, z: 44.215 },
            end: { x: 39.25, z: 44.215 },
            partitionWidth: 0.15,
          },
          {
            //sklad prostredni B2
            type: "partition",
            start: { x: 37.325, z: 41.86 },
            end: { x: 37.325, z: 47.5 },
            partitionWidth: 0.15,
          },
          {
            //Prvni anglicky dvorek spodni vyklenek
            type: "partition",
            start: { x: -16.625, z: -7.8 },
            end: { x: -16.625, z: -7.35 },
            partitionWidth: 0.35,
          },
          {
            //Prvni anglicky dvorek spodni, stredova kostka
            type: "partition",
            start: { x: -16.625, z: -6 },
            end: { x: -16.625, z: -5.5 },
            partitionWidth: 0.35,
          },
          {
            //Prvni anglicky dvorek  2.26c spodek
            type: "partition",
            start: { x: -16.625, z: -4 },
            end: { x: -16.625, z: -2.85 },
            partitionWidth: 0.35,
          },
          {
            //Prvni anglicky dvorek  2.26c spodek
            type: "partition",
            start: { x: -16.625, z: -0.75 },
            end: { x: -16.625, z: 0.75 },
            partitionWidth: 0.35,
          },
          {
            //Prvni anglicky dvorek  2.26b spodek
            type: "partition",
            start: { x: -16.625, z: -0.75 },
            end: { x: -16.625, z: 0.75 },
            partitionWidth: 0.35,
          },
          {
            //Prvni anglicky dvorek  2.26b spodek
            type: "partition",
            start: { x: -16.625, z: 2.85 },
            end: { x: -16.625, z: 4.15 },
            partitionWidth: 0.35,
          },
          {
            //Prvni anglicky dvorek  2.26a spodek
            type: "partition",
            start: { x: -16.625, z: 5.5 },
            end: { x: -16.625, z: 6 },
            partitionWidth: 0.35,
          },
          {
            //Prvni anglicky dvorek  2.26b spodek
            type: "partition",
            start: { x: -16.625, z: 7.35 },
            end: { x: -16.625, z: 9.55 },
            partitionWidth: 0.35,
          },
          {
            //Prvni anglicky dvorek horni smer doleva 02,26a
            type: "partition",
            start: { x: -16.625, z: 9.35 },
            end: { x: -18.12, z: 9.35 },
            partitionWidth: 0.4,
          },
          {
            //Prvni anglicky dvorek  2.26b spodek
            type: "partition",
            start: { x: -16.625, z: -3.6 },
            end: { x: -18.12, z: -3.6 },
            partitionWidth: 0.4,
          },
          {
            //Prvni anglicky dvorek  2.26b spodek
            type: "partition",
            start: { x: -16.625, z: 0 },
            end: { x: -18.12, z: 0 },
            partitionWidth: 0.4,
          },
          {
            //Prvni anglicky dvorek  2.26b spodek
            type: "partition",
            start: { x: -16.625, z: 3.6 },
            end: { x: -18.12, z: 3.6 },
            partitionWidth: 0.5,
          },
          {
            //Prvni outline zed
            type: "partition",
            start: { x: -18.195, z: 9.15 },
            end: { x: -18.195, z: 19.745 },
            partitionWidth: 0.75,
          },
          {
            //spodni outline
            type: "partition",
            start: { x: -18.37, z: -18.12 },
            end: { x: 18.37, z: -18.12 },
            partitionWidth: 0.5,
          },
          {
            // prava spodni outline
            type: "partition",
            start: { x: 18.12, z: 7.86 },
            end: { x: 18.12, z: -18.12 },
            partitionWidth: 0.5,
          },
          {
            // prava horni outline
            type: "partition",
            start: { x: 18.12, z: 19.745 },
            end: { x: 18.12, z: 9.55 },
            partitionWidth: 0.75,
          },
          {
            //šachta leva
            type: "partition",
            start: { x: -32.365, z: 54.48 },
            end: { x: -32.365, z: 51.03 },
            partitionWidth: 0.37,
          },
          {
            //šachta spodni prava
            type: "partition",
            start: { x: -29.435, z: 50.895 },
            end: { x: -29.1, z: 50.895 },
            partitionWidth: 0.27,
          },
          {
            //šachta spodni leva
            type: "partition",
            start: { x: -32.55, z: 50.895 },
            end: { x: -30.335, z: 50.895 },
            partitionWidth: 0.27,
          },
          {
            //šachta š6 prava 1
            type: "partition",
            start: { x: -29.26, z: 54.485 },
            end: { x: -29.26, z: 54.095 },
            partitionWidth: 0.32,
          },
          {
            //šachta š6 prava 2
            type: "partition",
            start: { x: -29.26, z: 53.335 },
            end: { x: -29.26, z: 53.055 },
            partitionWidth: 0.32,
          },
          {
            //šachta š6 prava 3
            type: "partition",
            start: { x: -29.26, z: 52.295 },
            end: { x: -29.26, z: 52.015 },
            partitionWidth: 0.32,
          },
          {
            //šachta š6 prava 4
            type: "partition",
            start: { x: -29.26, z: 51.255 },
            end: { x: -29.26, z: 51.03 },
            partitionWidth: 0.32,
          },
          {
            //nepristupny prostor vytah leva
            type: "partition",
            start: { x: -32.425, z: 50.76 },
            end: { x: -32.425, z: 48.71 },
            partitionWidth: 0.25,
          },
          {
            //nepristupny prostor vytah prava
            type: "partition",
            start: { x: -30.825, z: 50.76 },
            end: { x: -30.825, z: 48.71 },
            partitionWidth: 0.15,
          },
          {
            //manipulacni prostor prava
            type: "partition",
            start: { x: -29.2, z: 50.76 },
            end: { x: -29.2, z: 41.74 },
            partitionWidth: 0.2,
          },
          {
            //nepristupny vytah spodni leva
            type: "partition",
            start: { x: -32.55, z: 48.81 },
            end: { x: -30.335, z: 48.81 },
            partitionWidth: 0.2,
          },
          {
            //nepristupny vytah spodni  prava
            type: "partition",
            start: { x: -29.435, z: 48.81 },
            end: { x: -29.1, z: 48.81 },
            partitionWidth: 0.25,
          },
          {
            //skladB1  leva
            type: "partition",
            start: { x: -32.4, z: 47.81 },
            end: { x: -32.4, z: 40.44 },
            partitionWidth: 0.25,
          },
          {
            //mschodiste jadro B1 prava
            type: "partition",
            start: { x: -29.2, z: 40.74 },
            end: { x: -29.2, z: 40.44 },
            partitionWidth: 0.2,
          },
          {
            //sklad schodiste stredova
            type: "partition",
            start: { x: -30.775, z: 47.105 },
            end: { x: -30.775, z: 41.64 },
            partitionWidth: 0.35,
          },
          {
            //sklad schodiste spodni
            type: "partition",
            start: { x: -29.1, z: 40.44 },
            end: { x: -32.525, z: 40.44 },
            partitionWidth: 0.2,
          },
          {
            //mschodiste jadro B1 spodni stredova kratka
            type: "partition",
            start: { x: -30.775, z: 40.74 },
            end: { x: -30.775, z: 40.44 },
            partitionWidth: 0.2,
          },
          {
            //mschodiste jadro B1 stredova vodorovna
            type: "partition",
            start: { x: -32.525, z: 44.845 },
            end: { x: -30.95, z: 44.845 },
            partitionWidth: 0.15,
          },
          {
            //sloup 1
            type: "partition",
            start: { x: -25.15, z: 51.16 },
            end: { x: -24.55, z: 51.16 },
            partitionWidth: 0.6,
          },
          {
            //sloup 2
            type: "partition",
            start: { x: -17.15, z: 51.16 },
            end: { x: -16.55, z: 51.16 },
            partitionWidth: 0.6,
          },
          {
            //sloup 3
            type: "partition",
            start: { x: -9.15, z: 51.16 },
            end: { x: -8.55, z: 51.16 },
            partitionWidth: 0.6,
          },
          {
            //sloup 4
            type: "partition",
            start: { x: -25.15, z: 43.56 },
            end: { x: -24.55, z: 43.56 },
            partitionWidth: 0.6,
          },
          {
            //sloup 5
            type: "partition",
            start: { x: -17.15, z: 43.56 },
            end: { x: -16.55, z: 43.56 },
            partitionWidth: 0.6,
          },
          {
            //sloup 6
            type: "partition",
            start: { x: -32.725, z: 35.96 },
            end: { x: -32.125, z: 35.96 },
            partitionWidth: 0.6,
          },
          {
            //sloup 8
            type: "partition",
            start: { x: -9.15, z: 43.56 },
            end: { x: -8.55, z: 43.56 },
            partitionWidth: 0.6,
          },
          {
            //sloup 9
            type: "partition",
            start: { x: -25.15, z: 35.96 },
            end: { x: -24.55, z: 35.96 },
            partitionWidth: 0.6,
          },
          {
            //sloup 10
            type: "partition",
            start: { x: -17.15, z: 35.96 },
            end: { x: -16.55, z: 35.96 },
            partitionWidth: 0.6,
          },
          {
            //sloup 11
            type: "partition",
            start: { x: -9.15, z: 35.96 },
            end: { x: -8.55, z: 35.96 },
            partitionWidth: 0.6,
          },
          {
            //sloup 9
            type: "partition",
            start: { x: -25.15, z: 28.36 },
            end: { x: -24.55, z: 28.36 },
            partitionWidth: 0.6,
          },
          {
            //sloup 10
            type: "partition",
            start: { x: -17.15, z: 28.36 },
            end: { x: -16.55, z: 28.36 },
            partitionWidth: 0.6,
          },
          {
            //sloup 11
            type: "partition",
            start: { x: -9.15, z: 28.36 },
            end: { x: -8.55, z: 28.36 },
            partitionWidth: 0.6,
          },
          {
            //sloup 6
            type: "partition",
            start: { x: -32.725, z: 28.36 },
            end: { x: -32.125, z: 28.36 },
            partitionWidth: 0.6,
          },
          {
            //sloup stredovy 1
            type: "partition",
            start: { x: -1.45, z: 51.16 },
            end: { x: -0.425, z: 51.16 },
            partitionWidth: 0.6,
          },
          {
            //sloup stredovy 1
            type: "partition",
            start: { x: -1.45, z: 43.56 },
            end: { x: -0.425, z: 43.56 },
            partitionWidth: 0.6,
          },
          {
            //sloup stredovy 1
            type: "partition",
            start: { x: -1.45, z: 35.95 },
            end: { x: -0.425, z: 35.95 },
            partitionWidth: 0.6,
          },
          {
            //sloup stredovy 1
            type: "partition",
            start: { x: -1.45, z: 28.36 },
            end: { x: -0.425, z: 28.36 },
            partitionWidth: 0.6,
          },
          {
            //sloup 1
            type: "partition",
            start: { x: 6.763, z: 51.16 },
            end: { x: 7.363, z: 51.16 },
            partitionWidth: 0.6,
          },
          {
            //sloup 2
            type: "partition",
            start: { x: 14.763, z: 51.16 },
            end: { x: 15.363, z: 51.16 },
            partitionWidth: 0.6,
          },
          {
            //sloup 3
            type: "partition",
            start: { x: 22.763, z: 51.16 },
            end: { x: 23.363, z: 51.16 },
            partitionWidth: 0.6,
          },
          {
            //sloup 3
            type: "partition",
            start: { x: 30.763, z: 51.16 },
            end: { x: 31.363, z: 51.16 },
            partitionWidth: 0.6,
          },
          {
            //sloup 1
            type: "partition",
            start: { x: 6.763, z: 43.56 },
            end: { x: 7.363, z: 43.56 },
            partitionWidth: 0.6,
          },
          {
            //sloup 2
            type: "partition",
            start: { x: 14.763, z: 43.56 },
            end: { x: 15.363, z: 43.56 },
            partitionWidth: 0.6,
          },
          {
            //sloup 3
            type: "partition",
            start: { x: 22.763, z: 43.56 },
            end: { x: 23.363, z: 43.56 },
            partitionWidth: 0.6,
          },
          {
            //sloup 3
            type: "partition",
            start: { x: 30.763, z: 43.56 },
            end: { x: 31.363, z: 43.56 },
            partitionWidth: 0.6,
          },
          {
            //sloup 1
            type: "partition",
            start: { x: 6.763, z: 35.95 },
            end: { x: 7.363, z: 35.95 },
            partitionWidth: 0.6,
          },
          {
            //sloup 2
            type: "partition",
            start: { x: 14.763, z: 35.95 },
            end: { x: 15.363, z: 35.95 },
            partitionWidth: 0.6,
          },
          {
            //sloup 3
            type: "partition",
            start: { x: 22.763, z: 35.95 },
            end: { x: 23.363, z: 35.95 },
            partitionWidth: 0.6,
          },
          {
            //sloup 3
            type: "partition",
            start: { x: 30.763, z: 35.95 },
            end: { x: 31.363, z: 35.95 },
            partitionWidth: 0.6,
          },
          {
            //sloup 1
            type: "partition",
            start: { x: 6.763, z: 28.36 },
            end: { x: 7.363, z: 28.36 },
            partitionWidth: 0.6,
          },
          {
            //sloup 2
            type: "partition",
            start: { x: 14.763, z: 28.36 },
            end: { x: 15.363, z: 28.36 },
            partitionWidth: 0.6,
          },
          {
            //sloup 3
            type: "partition",
            start: { x: 22.763, z: 28.36 },
            end: { x: 23.363, z: 28.36 },
            partitionWidth: 0.6,
          },
          {
            //sloup 3
            type: "partition",
            start: { x: 30.763, z: 28.36 },
            end: { x: 31.363, z: 28.36 },
            partitionWidth: 0.6,
          },
          {
            //retencni nadrz leva
            type: "partition",
            start: { x: -44.025, z: 54.68 },
            end: { x: -44.025, z: 25.68 },
            partitionWidth: 0.35,
          },
          {
            //retencni nadrz vrchni
            type: "partition",
            start: { x: -44.2, z: 54.68 },
            end: { x: -39.25, z: 54.68 },
            partitionWidth: 0.35,
          },
          {
            //retencni nadrz spodni
            type: "partition",
            start: { x: -44.2, z: 25.68 },
            end: { x: -39.25, z: 25.68 },
            partitionWidth: 0.3,
          },
        ],
      },
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [
          { x: 10, z: 10, value: 28 },
          { x: 30, z: 30, value: 25 },
        ],
        wifi: [{ x: 20, z: 20, value: 60 }],
        airQuality: [{ x: 40, z: 10, value: 50 }],
      },
      roomLabels: [
        { x: 5, z: 5, label: "Room 101" },
        { x: 15, z: 10, label: "Room 102" },
      ],
    },
    {
      id: -1,
      name: "P1",
      type: "underground",
      segments: [
        { width: 35.82, depth: 35.82, position: { x: 0, z: 0 } }, // kostka hlavni
        { width: 78, depth: 47, position: { x: 0, z: 31.2 } }, //parkoviste
        { width: 3.5, depth: 31, position: { x: -39, z: 39 } },
        { width: 6, depth: 14.55, position: { x: -41, z: 18.05 } },
      ],
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },
        walls: [
          {
            //kostka vnejsi spodni
            type: "partition",
            start: { x: -18.37, z: -18.12 },
            end: { x: 18.37, z: -18.12 },
            partitionWidth: 0.5,
          },
          {
            //kostka vnejsi leva
            type: "partition",
            start: { x: -18.12, z: -17.87 },
            end: { x: -18.12, z: 7.63 },
            partitionWidth: 0.5,
          },
          {
            //kostka vnejsi prava
            type: "partition",
            start: { x: 18.12, z: -17.87 },
            end: { x: 18.12, z: 7.63 },
            partitionWidth: 0.5,
          },
          {
            //kostka vnitrni spodni
            type: "partition",
            start: { x: -16.8, z: -16.8 },
            end: { x: 16.8, z: -16.8 },
          },
          {
            //kostka vnitrni leva
            type: "partition",
            start: { x: -16.8, z: 16.8 },
            end: { x: -16.8, z: -16.8 },
          },
          {
            //kostka vnitrni prava
            type: "partition",
            start: { x: 16.8, z: 17.87 },
            end: { x: 16.8, z: -16.8 },
          },
          {
            //schodiste11 vnejsi leva
            type: "partition",
            start: { x: -0.6, z: 4.775 },
            end: { x: -0.6, z: -4.825 },
          },
          {
            //schodiste11 vnejsi prava
            type: "partition",
            start: { x: 4.2, z: -4.825 },
            end: { x: 4.2, z: 4.775 },
          },
          {
            //schodiste11 vnejsi vrchni
            type: "partition",
            start: { x: 4.225, z: 4.775 },
            end: { x: -0.625, z: 4.775 },
          },
          {
            //schodiste11 vnitrni
            type: "partition",
            start: { x: 1.8, z: 2.37 },
            end: { x: 1.8, z: -2.37 },
            partitionWidth: 0.2,
          },
          {
            //Schodiste02 - leva
            type: "partition",
            start: { x: -9.925, z: 14.5 },
            end: { x: -9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste02 - spodni
            type: "partition",
            start: { x: -9.65, z: 10.075 },
            end: { x: -7.15, z: 10.075 },
            partitionWidth: 0.95,
          },
          {
            //Schodiste02 - prava
            type: "partition",
            start: { x: -6.875, z: 16.8 },
            end: { x: -6.875, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste02 - vrchni leva
            type: "partition",
            start: { x: -10.2, z: 16.9 },
            end: { x: -8.2, z: 16.9 },
            partitionWidth: 0.2,
          },
          {
            //Schodiste02 - vrchni prava
            type: "partition",
            start: { x: -7.3, z: 16.9 },
            end: { x: -6.6, z: 16.9 },
            partitionWidth: 0.2,
          },
          {
            //V4 - vrchni
            type: "partition",
            start: { x: -6.6, z: 16.7 },
            end: { x: -3.6, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //V4 - prava
            type: "partition",
            start: { x: -3.95, z: 16.6 },
            end: { x: -3.95, z: 16.145 },
            partitionWidth: 0.2,
          },
          {
            //V5 - vrchni
            type: "partition",
            start: { x: -6.6, z: 14.95 },
            end: { x: -4.05, z: 14.95 },
            partitionWidth: 0.2,
          },
          {
            //V5 - prava
            type: "partition",
            start: { x: -3.95, z: 15.145 },
            end: { x: -3.95, z: 14.445 },
            partitionWidth: 0.2,
          },
          {
            //01.03 - vrchni
            type: "partition",
            start: { x: -6.6, z: 13.375 },
            end: { x: -4.05, z: 13.375 },
            partitionWidth: 0.15,
          },
          {
            //01.03 - prava
            type: "partition",
            start: { x: -3.95, z: 13.545 },
            end: { x: -3.95, z: 12.85 },
            partitionWidth: 0.2,
          },
          {
            //01.67 - vrchni
            type: "partition",
            start: { x: -6.6, z: 11.675 },
            end: { x: -4.05, z: 11.675 },
            partitionWidth: 0.15,
          },
          {
            //01.67 - prava
            type: "partition",
            start: { x: -3.95, z: 11.85 },
            end: { x: -3.95, z: 11.15 },
            partitionWidth: 0.2,
          },
          {
            //01.67 - prava 2
            type: "partition",
            start: { x: -3.95, z: 10.15 },
            end: { x: -3.95, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //01.67 - spodni
            type: "partition",
            start: { x: -6.6, z: 9.7 },
            end: { x: -3.35, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //01.05 - vrchni
            type: "partition",
            start: { x: -1.8, z: 16.7 },
            end: { x: 10.2, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 16.145 },
            partitionWidth: 0.4,
          },
          {
            //1.19 - leva 2
            type: "partition",
            start: { x: -0.95, z: 15.145 },
            end: { x: -0.95, z: 9.8 },
            partitionWidth: 0.4,
          },
          {
            //V1 - spodni
            type: "partition",
            start: { x: -1.45, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - prava spodni
            type: "partition",
            start: { x: 1.955, z: 14 },
            end: { x: 1.955, z: 15.095 },
            partitionWidth: 0.15,
          },
          {
            //1.19 - prava horni
            type: "partition",
            start: { x: 1.955, z: 16.145 },
            end: { x: 1.955, z: 16.6 },
            partitionWidth: 0.15,
          },
          {
            //1.16 - spodni
            type: "partition",
            start: { x: -0.75, z: 14.15 },
            end: { x: 4.5, z: 14.15 },
            partitionWidth: 0.3,
          },
          {
            //sachta - spodni
            type: "partition",
            start: { x: -0.75, z: 11.8 },
            end: { x: 4.5, z: 11.8 },
            partitionWidth: 0.2,
          },
          {
            //sachta - spodni
            type: "partition",
            start: { x: -0.75, z: 11.8 },
            end: { x: 4.5, z: 11.8 },
            partitionWidth: 0.2,
          },
          {
            //V1 - prava
            type: "partition",
            start: { x: 1.06, z: 11.7 },
            end: { x: 1.06, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //V2 - prava
            type: "partition",
            start: { x: 2.86, z: 11.7 },
            end: { x: 2.86, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //1.16 - prava
            type: "partition",
            start: { x: 4.775, z: 16.6 },
            end: { x: 4.775, z: 11.7 },
            partitionWidth: 0.55,
          },
          {
            //V3 - prava
            type: "partition",
            start: { x: 4.8125, z: 11.7 },
            end: { x: 4.8125, z: 9.8 },
            partitionWidth: 0.475,
          },
          {
            //V3 - spodni
            type: "partition",
            start: { x: 4.23, z: 9.7 },
            end: { x: 5.05, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.08 - prava
            type: "partition",
            start: { x: 9.925, z: 16.6 },
            end: { x: 9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //sachta2 - spodni
            type: "partition",
            start: { x: 5.05, z: 15.2 },
            end: { x: 9.65, z: 15.2 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - prava vrchni
            type: "partition",
            start: { x: 7.325, z: 15.1 },
            end: { x: 7.325, z: 13.3 },
            partitionWidth: 0.25,
          },
          {
            //1.07 - prava spodni
            type: "partition",
            start: { x: 7.3, z: 13.3 },
            end: { x: 7.3, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - spodni
            type: "partition",
            start: { x: 6.05, z: 9.7 },
            end: { x: 8.65, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - partition 1 leva
            type: "partition",
            start: { x: 5.05, z: 13.275 },
            end: { x: 5.125, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 1 prava
            type: "partition",
            start: { x: 6.025, z: 13.275 },
            end: { x: 7.2, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 2 leva
            type: "partition",
            start: { x: 5.05, z: 11.525 },
            end: { x: 5.125, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 2 prava
            type: "partition",
            start: { x: 6.025, z: 11.525 },
            end: { x: 7.2, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 1 leva
            type: "partition",
            start: { x: 7.4, z: 13.275 },
            end: { x: 8.675, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 1 prava
            type: "partition",
            start: { x: 9.575, z: 13.275 },
            end: { x: 9.65, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 2 leva
            type: "partition",
            start: { x: 7.4, z: 11.525 },
            end: { x: 8.3, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - zachod prava 1
            type: "partition",
            start: { x: 8.325, z: 11.575 },
            end: { x: 8.325, z: 11.5 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - zachod prava 2
            type: "partition",
            start: { x: 8.325, z: 13.3 },
            end: { x: 8.325, z: 12.275 },
            partitionWidth: 0.05,
          },
          {
            //1.09a - spodni
            type: "partition",
            start: { x: -16.8, z: -10 },
            end: { x: -11.85, z: -10 },
            partitionWidth: 0.4,
          },
          {
            //1.09a - leva
            type: "partition",
            start: { x: -16.5, z: -8.2 },
            end: { x: -16.5, z: -9.8 },
            partitionWidth: 0.6,
          },
          {
            //1.09a - partition
            type: "partition",
            start: { x: -13.6, z: -8.2 },
            end: { x: -13.6, z: -9.8 },
            partitionWidth: 0.22,
          },
          {
            //1.09a - vrchni
            type: "partition",
            start: { x: -16.8, z: -8 },
            end: { x: -11.85, z: -8 },
            partitionWidth: 0.4,
          },
          {
            //1.09b - spodni
            type: "partition",
            start: { x: -11.85, z: -9.85 },
            end: { x: -10.2, z: -9.85 },
            partitionWidth: 0.7,
          },
          {
            //1.09b - vrchni
            type: "partition",
            start: { x: -11.85, z: -8.15 },
            end: { x: -10.2, z: -8.15 },
            partitionWidth: 0.7,
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 6.875, z: -15.5 },
            end: { x: 6.875, z: -10.2 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste01 - prava 1
            type: "partition",
            start: { x: 9.925, z: -15.8 },
            end: { x: 9.925, z: -10.2 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste01 - prava 2
            type: "partition",
            start: { x: 9.925, z: -16.8 },
            end: { x: 9.925, z: -16.7 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste01 - vrchni
            type: "partition",
            start: { x: 7.15, z: -10.425 },
            end: { x: 9.65, z: -10.425 },
            partitionWidth: 0.45,
          },
          {
            //Schodiste01 - spodni
            type: "partition",
            start: { x: 6.6, z: -16.875 },
            end: { x: 10.15, z: -16.875 },
            partitionWidth: 0.15,
          },
          {
            //01.69 - spodni
            type: "partition",
            start: { x: -6.6, z: -15.55 },
            end: { x: 4.2, z: -15.55 },
            partitionWidth: 0.1,
          },
          {
            //01.69 - leva 2
            type: "partition",
            start: { x: -6.55, z: -11.402 },
            end: { x: -6.55, z: -15.5 },
            partitionWidth: 0.1,
          },
          {
            //01.69 - leva 2
            type: "partition",
            start: { x: -6.55, z: -7.9 },
            end: { x: -6.55, z: -10.502 },
            partitionWidth: 0.1,
          },
          {
            //01.69 - vrchni 1
            type: "partition",
            start: { x: -6.6, z: -7.85 },
            end: { x: -3.05, z: -7.85 },
            partitionWidth: 0.1,
          },
          {
            //01.69 - vrchni 1
            type: "partition",
            start: { x: -1.25, z: -7.85 },
            end: { x: 4.2, z: -7.85 },
            partitionWidth: 0.1,
          },
          {
            //01.69 - prava
            type: "partition",
            start: { x: 4.15, z: -7.9 },
            end: { x: 4.15, z: -15.5 },
            partitionWidth: 0.1,
          },
          {
            //01.12 - spodni
            type: "partition",
            start: { x: -15, z: -5.95 },
            end: { x: -3, z: -5.95 },
            partitionWidth: 0.1,
          },
          {
            //01.12 - vrchni
            type: "partition",
            start: { x: -15, z: 7.75 },
            end: { x: -3, z: 7.75 },
            partitionWidth: 0.1,
          },
          {
            //01.12 - prava 1
            type: "partition",
            start: { x: -3.05, z: 7.7 },
            end: { x: -3.05, z: 6.57 },
            partitionWidth: 0.1,
          },
          {
            //01.12 - prava 2
            type: "partition",
            start: { x: -3.05, z: 5.67 },
            end: { x: -3.05, z: -4.17 },
            partitionWidth: 0.1,
          },
          {
            //01.12 - prava 3
            type: "partition",
            start: { x: -3.05, z: -4.97 },
            end: { x: -3.05, z: -5.9 },
            partitionWidth: 0.1,
          },
          {
            //01.12 - leva 1
            type: "partition",
            start: { x: -14.95, z: 7.7 },
            end: { x: -14.95, z: 6.57 },
            partitionWidth: 0.1,
          },
          {
            //01.12 - leva 2
            type: "partition",
            start: { x: -14.95, z: 5.67 },
            end: { x: -14.95, z: -4.17 },
            partitionWidth: 0.1,
          },
          {
            //01.12 - leva 3
            type: "partition",
            start: { x: -14.95, z: -4.97 },
            end: { x: -14.95, z: -5.9 },
            partitionWidth: 0.1,
          },
          {
            //01.66 - spodni
            type: "partition",
            start: { x: -15.65, z: 9.6 },
            end: { x: -11.35, z: 9.6 },
            partitionWidth: 0.1,
          },
          {
            //01.65 - vrchni
            type: "partition",
            start: { x: -15.65, z: 15.6 },
            end: { x: -11.35, z: 15.6 },
            partitionWidth: 0.1,
          },
          {
            //01.65 - spodni
            type: "partition",
            start: { x: -15.6, z: 12.6 },
            end: { x: -11.4, z: 12.6 },
            partitionWidth: 0.1,
          },
          {
            //01.65 - prava
            type: "partition",
            start: { x: -11.4, z: 15.6 },
            end: { x: -11.4, z: 14.7 },
            partitionWidth: 0.1,
          },
          {
            //01.65 a 01.66 - prava
            type: "partition",
            start: { x: -11.4, z: 13.8 },
            end: { x: -11.4, z: 10.95 },
            partitionWidth: 0.1,
          },
          {
            //01.66 - prava
            type: "partition",
            start: { x: -11.4, z: 10.05 },
            end: { x: -11.4, z: 9.6 },
            partitionWidth: 0.1,
          },
          {
            //01.65 a 01.66 - leva
            type: "partition",
            start: { x: -15.6, z: 15.6 },
            end: { x: -15.6, z: 9.6 },
            partitionWidth: 0.1,
          },
          {
            //01.13 - leva 2
            type: "partition",
            start: { x: 10.01, z: -8.25 },
            end: { x: 10.01, z: -10.2 },
            partitionWidth: 0.08,
          },
          {
            //01.13 - leva 1
            type: "partition",
            start: { x: 10.01, z: -7.35 },
            end: { x: 10.01, z: -5.475 },
            partitionWidth: 0.08,
          },
          {
            //01.21 - spodni
            type: "partition",
            start: { x: 16.8, z: -5.4 },
            end: { x: 10.2, z: -5.4 },
            partitionWidth: 0.15,
          },
          {
            //01.21 - leva 1
            type: "partition",
            start: { x: 10.085, z: -5.475 },
            end: { x: 10.085, z: -3.05 },
            partitionWidth: 0.23,
          },
          {
            //01.21 - leva 2
            type: "partition",
            start: { x: 10.085, z: -2.05 },
            end: { x: 10.085, z: -1.25 },
            partitionWidth: 0.23,
          },
          {
            //01.22 - vrchni 1
            type: "partition",
            start: { x: 10.2, z: -3.2 },
            end: { x: 11, z: -3.2 },
            partitionWidth: 0.15,
          },
          {
            //01.22 - vrchni 2
            type: "partition",
            start: { x: 11.9, z: -3.2 },
            end: { x: 12.19, z: -3.2 },
            partitionWidth: 0.15,
          },
          {
            //01.22 - prava
            type: "partition",
            start: { x: 12.115, z: -3.275 },
            end: { x: 12.115, z: -5.325 },
            partitionWidth: 0.15,
          },
          {
            //V7 - vrchni1
            type: "partition",
            start: { x: 12.19, z: -4.56 },
            end: { x: 12.315, z: -4.56 },
            partitionWidth: 0.1,
          },
          {
            //V7 - vrchni2
            type: "partition",
            start: { x: 13.265, z: -4.56 },
            end: { x: 13.29, z: -4.56 },
            partitionWidth: 0.1,
          },
          {
            //V7 - prava
            type: "partition",
            start: { x: 13.34, z: -4.51 },
            end: { x: 13.34, z: -5.325 },
            partitionWidth: 0.1,
          },
          {
            //01.21 - vrchni 2
            type: "partition",
            start: { x: 16.8, z: -1.8 },
            end: { x: 11.865, z: -1.8 },
            partitionWidth: 0.15,
          },
          {
            //01.21 - vrchni 1
            type: "partition",
            start: { x: 10.965, z: -1.8 },
            end: { x: 10.2, z: -1.8 },
            partitionWidth: 0.15,
          },
          {
            //01.14 - vrchni
            type: "partition",
            start: { x: 16.8, z: 0.6 },
            end: { x: 10.2, z: 0.6 },
            partitionWidth: 0.15,
          },
          {
            //01.14 - leva
            type: "partition",
            start: { x: 10.085, z: -0.25 },
            end: { x: 10.085, z: 1.45 },
            partitionWidth: 0.23,
          },
          {
            //Š11 - spodni
            type: "partition",
            start: { x: 10.2, z: -0.1 },
            end: { x: 11.2, z: -0.1 },
            partitionWidth: 0.1,
          },
          {
            //Š11 - prava
            type: "partition",
            start: { x: 11.15, z: 0.525 },
            end: { x: 11.15, z: -0.05 },
            partitionWidth: 0.1,
          },
          {
            //01.16 - vertikalni
            type: "partition",
            start: { x: 10.5, z: 1.45 },
            end: { x: 10.5, z: 0.675 },
            partitionWidth: 0.1,
          },
          {
            //01.16 - vertikalni
            type: "partition",
            start: { x: 10.5, z: 1.4 },
            end: { x: 10.2, z: 1.4 },
            partitionWidth: 0.1,
          },
          {
            //01.16 - vrchni
            type: "partition",
            start: { x: 16.8, z: 3.05 },
            end: { x: 10.3, z: 3.05 },
            partitionWidth: 0.25,
          },
          {
            //01.16 - leva
            type: "partition",
            start: { x: 10.085, z: 2.45 },
            end: { x: 10.085, z: 2.925 },
            partitionWidth: 0.23,
          },
          {
            //01.70 - leva 1
            type: "partition",
            start: { x: 10.135, z: 2.925 },
            end: { x: 10.135, z: 3.25 },
            partitionWidth: 0.33,
          },
          {
            //01.70 - leva 2
            type: "partition",
            start: { x: 10.135, z: 4.25 },
            end: { x: 10.135, z: 6.675 },
            partitionWidth: 0.33,
          },
          {
            //01.70 - vrchni
            type: "partition",
            start: { x: 16.8, z: 6.55 },
            end: { x: 10.3, z: 6.55 },
            partitionWidth: 0.25,
          },
          {
            //01.70 - vertikalni 1
            type: "partition",
            start: { x: 13.275, z: 3.175 },
            end: { x: 13.275, z: 3.25 },
            partitionWidth: 0.25,
          },
          {
            //01.70 - vertikalni 2
            type: "partition",
            start: { x: 13.275, z: 4.25 },
            end: { x: 13.275, z: 4.725 },
            partitionWidth: 0.25,
          },
          {
            //01.70 - vertikalni 3
            type: "partition",
            start: { x: 13.275, z: 5.925 },
            end: { x: 13.275, z: 4.725 },
            partitionWidth: 0.25,
          },
          {
            //01.70 - vertikalni 3
            type: "partition",
            start: { x: 13.275, z: 5.925 },
            end: { x: 13.275, z: 6.425 },
            partitionWidth: 0.25,
          },
          {
            //01.17 - leva 2
            type: "partition",
            start: { x: 10.01, z: 9.6 },
            end: { x: 10.01, z: 8.138 },
            partitionWidth: 0.08,
          },
          {
            //01.17 - leva 1
            type: "partition",
            start: { x: 10.01, z: 7.138 },
            end: { x: 10.01, z: 6.675 },
            partitionWidth: 0.08,
          },
          {
            //01.17 - prava
            type: "partition",
            start: { x: 18.245, z: 7.63 },
            end: { x: 18.245, z: 18.57 },
            partitionWidth: 0.75,
          },
          {
            //01.17 - vrchni 2
            type: "partition",
            start: { x: 14.575, z: 18.02 },
            end: { x: 17.87, z: 18.02 },
            partitionWidth: 0.3,
          },
          {
            //01.17 - vrchni 1
            type: "partition",
            start: { x: 12.475, z: 18.02 },
            end: { x: 10.2, z: 18.02 },
            partitionWidth: 0.3,
          },
          {
            //01.17 - leva 3
            type: "partition",
            start: { x: 10.05, z: 18.17 },
            end: { x: 10.05, z: 16.8 },
            partitionWidth: 0.3,
          },
          {
            //01.20 - vrchni 1
            type: "partition",
            start: { x: 9.9, z: 18.08 },
            end: { x: 8.655, z: 18.08 },
            partitionWidth: 0.18,
          },
          {
            //01.20 - vrchni 2
            type: "partition",
            start: { x: 7.655, z: 18.08 },
            end: { x: 6.955, z: 18.08 },
            partitionWidth: 0.18,
          },
          {
            //01.20 - leva
            type: "partition",
            start: { x: 6.865, z: 18.17 },
            end: { x: 6.865, z: 16.8 },
            partitionWidth: 0.18,
          },
          {
            //01.64 - prava 1
            type: "partition",
            start: { x: -6.69, z: 17.045 },
            end: { x: -6.69, z: 17 },
            partitionWidth: 0.18,
          },
          {
            //01.64 - prava 2
            type: "partition",
            start: { x: -6.69, z: 17.945 },
            end: { x: -6.69, z: 17.99 },
            partitionWidth: 0.18,
          },
          {
            //01.64 - rozdeleni 1
            type: "partition",
            start: { x: -8.425, z: 17.045 },
            end: { x: -8.425, z: 17 },
            partitionWidth: 0.15,
          },
          {
            //01.64 - rozdeleni 2
            type: "partition",
            start: { x: -8.425, z: 17.945 },
            end: { x: -8.425, z: 17.99 },
            partitionWidth: 0.15,
          },
          {
            //01.64 - vrchni
            type: "partition",
            start: { x: -6.6, z: 18.08 },
            end: { x: -9.9, z: 18.08 },
            partitionWidth: 0.18,
          },
          {
            //01.64 - leva
            type: "partition",
            start: { x: -10.05, z: 18.17 },
            end: { x: -10.05, z: 16.8 },
            partitionWidth: 0.3,
          },
          {
            //kostka vnitrni leva vrchni
            type: "partition",
            start: { x: -18.245, z: 7.63 },
            end: { x: -18.245, z: 18.57 },
            partitionWidth: 0.75,
          },
          {
            //kostka vnitrni vrchni 1
            type: "partition",
            start: { x: -17.87, z: 18.035 },
            end: { x: -16, z: 18.035 },
            partitionWidth: 0.27,
          },
          {
            //kostka vnitrni vrchni 2
            type: "partition",
            start: { x: -15.2, z: 18.035 },
            end: { x: -10.2, z: 18.035 },
            partitionWidth: 0.27,
          },
          {
            //ucho leve vnejsi spodni 1
            type: "partition",
            start: { x: -18.37, z: 7.83 },
            end: { x: -39.25, z: 7.83 },
            partitionWidth: 0.4,
          },
          {
            //ucho leve vnejsi leva 1
            type: "partition",
            start: { x: -39.05, z: 8.03 },
            end: { x: -39.05, z: 10.83 },
            partitionWidth: 0.4,
          },
          {
            //01.48 - prava
            type: "partition",
            start: { x: -39.15, z: 16.02 },
            end: { x: -39.15, z: 10.83 },
            partitionWidth: 0.6,
          },
          {
            //01.48 - spodni
            type: "partition",
            start: { x: -39.35, z: 11.03 },
            end: { x: -44.2, z: 11.03 },
            partitionWidth: 0.4,
          },
          {
            //01.48 - leva
            type: "partition",
            start: { x: -44, z: 11.23 },
            end: { x: -44, z: 25.63 },
            partitionWidth: 0.4,
          },
          {
            //01.48 - vrchni 2
            type: "partition",
            start: { x: -39.6, z: 12.955 },
            end: { x: -39.45, z: 12.955 },
            partitionWidth: 0.15,
          },
          {
            //01.48 - vrchni 1
            type: "partition",
            start: { x: -43.8, z: 12.955 },
            end: { x: -40.8, z: 12.955 },
            partitionWidth: 0.15,
          },
          {
            //01.47 - vrchni 2
            type: "partition",
            start: { x: -39.6, z: 15.945 },
            end: { x: -39.45, z: 15.945 },
            partitionWidth: 0.15,
          },
          {
            //01.47 - vrchni 1
            type: "partition",
            start: { x: -43.8, z: 15.945 },
            end: { x: -40.8, z: 15.945 },
            partitionWidth: 0.15,
          },
          {
            //01.46 - vrchni 2
            type: "partition",
            start: { x: -39.6, z: 18.55 },
            end: { x: -39.45, z: 18.55 },
            partitionWidth: 0.15,
          },
          {
            //01.46 - vrchni 1
            type: "partition",
            start: { x: -43.8, z: 18.55 },
            end: { x: -40.8, z: 18.55 },
            partitionWidth: 0.15,
          },
          {
            //01.46 - prava
            type: "partition",
            start: { x: -39.15, z: 17.92 },
            end: { x: -39.15, z: 22.63 },
            partitionWidth: 0.6,
          },
          {
            //01.49 - vrchni 1
            type: "partition",
            start: { x: -43.8, z: 21.205 },
            end: { x: -43.045, z: 21.205 },
            partitionWidth: 0.05,
          },
          {
            //01.49 - vrchni 2
            type: "partition",
            start: { x: -42.245, z: 21.205 },
            end: { x: -39.45, z: 21.205 },
            partitionWidth: 0.05,
          },
          {
            //01.50 - vrchni
            type: "partition",
            start: { x: -43.8, z: 23.93 },
            end: { x: -38.85, z: 23.93 },
            partitionWidth: 0.2,
          },
          {
            //01.32 - vrchni 1
            type: "partition",
            start: { x: -44.2, z: 25.43 },
            end: { x: -40.55, z: 25.43 },
            partitionWidth: 0.4,
          },
          {
            //01.32 - vrchni 2
            type: "partition",
            start: { x: -39.25, z: 25.38 },
            end: { x: -39.55, z: 25.38 },
            partitionWidth: 0.3,
          },
          {
            //01.26 - leva
            type: "partition",
            start: { x: -21.67, z: 8.03 },
            end: { x: -21.67, z: 17.97 },
            partitionWidth: 0.2,
          },
          {
            //01.26 - vrchni
            type: "partition",
            start: { x: -20.72, z: 18.07 },
            end: { x: -22.205, z: 18.07 },
            partitionWidth: 0.2,
          },
          {
            //01.44 - leva 1
            type: "partition",
            start: { x: -24.9, z: 14.905 },
            end: { x: -24.9, z: 17.97 },
            partitionWidth: 0.2,
          },
          {
            //01.44 - vrchni
            type: "partition",
            start: { x: -24.305, z: 18.07 },
            end: { x: -25.5, z: 18.07 },
            partitionWidth: 0.2,
          },
          {
            //01.44 - sloup
            type: "partition",
            start: { x: -24.85, z: 14.905 },
            end: { x: -24.85, z: 14.455 },
            partitionWidth: 0.6,
          },
          {
            //01.44 - leva 2
            type: "partition",
            start: { x: -24.9, z: 14.455 },
            end: { x: -24.9, z: 14.255 },
            partitionWidth: 0.2,
          },
          {
            //01.44 - leva 3
            type: "partition",
            start: { x: -24.9, z: 13.255 },
            end: { x: -24.9, z: 8.03 },
            partitionWidth: 0.2,
          },
          {
            //01.43 - vrchni 1
            type: "partition",
            start: { x: -25, z: 11.395 },
            end: { x: -25.15, z: 11.395 },
            partitionWidth: 0.2,
          },
          {
            //01.43 - vrchni 2
            type: "partition",
            start: { x: -26.15, z: 11.395 },
            end: { x: -28.3, z: 11.395 },
            partitionWidth: 0.2,
          },
          {
            //01.43 - leva
            type: "partition",
            start: { x: -28.45, z: 8.03 },
            end: { x: -28.45, z: 16.02 },
            partitionWidth: 0.3,
          },
          {
            //01.42 - vrchni
            type: "partition",
            start: { x: -25, z: 14.805 },
            end: { x: -28.3, z: 14.805 },
            partitionWidth: 0.2,
          },
          {
            //01.71 - leva
            type: "partition",
            start: { x: -28.45, z: 17.7 },
            end: { x: -28.45, z: 18.57 },
            partitionWidth: 0.3,
          },
          {
            //01.71 - vrchni 2
            type: "partition",
            start: { x: -26.5, z: 18.07 },
            end: { x: -28.3, z: 18.07 },
            partitionWidth: 0.2,
          },
          {
            //01.58 - prava
            type: "partition",
            start: { x: -35.775, z: 8.03 },
            end: { x: -35.775, z: 14.755 },
            partitionWidth: 0.15,
          },
          {
            //01.58 - vrchni leva
            type: "partition",
            start: { x: -38.7, z: 9.98 },
            end: { x: -38.85, z: 9.98 },
            partitionWidth: 0.15,
          },
          {
            //01.58 - vrchni prava
            type: "partition",
            start: { x: -35.85, z: 9.98 },
            end: { x: -37.6, z: 9.98 },
            partitionWidth: 0.15,
          },
          {
            //01.41 - vrchni leva
            type: "partition",
            start: { x: -38.85, z: 14.89 },
            end: { x: -38.525, z: 14.89 },
            partitionWidth: 0.27,
          },
          {
            //01.41 - vrchni prava
            type: "partition",
            start: { x: -36.425, z: 14.89 },
            end: { x: -35.7, z: 14.89 },
            partitionWidth: 0.27,
          },
          {
            //01.39 - vrchni leva
            type: "partition",
            start: { x: -35.6, z: 14.965 },
            end: { x: -35.7, z: 14.965 },
            partitionWidth: 0.12,
          },
          {
            //01.39 - vrchni prostredni
            type: "partition",
            start: { x: -32.875, z: 14.965 },
            end: { x: -32.275, z: 14.965 },
            partitionWidth: 0.12,
          },
          {
            //01.39 - vrchni prostredni
            type: "partition",
            start: { x: -32.575, z: 14.905 },
            end: { x: -32.575, z: 14.68 },
            partitionWidth: 0.4,
          },
          {
            //01.39 - vrchni prava
            type: "partition",
            start: { x: -29.3, z: 14.965 },
            end: { x: -29.2, z: 14.965 },
            partitionWidth: 0.12,
          },
          {
            //01.39 - vrchni prava 1
            type: "partition",
            start: { x: -29.3, z: 14.965 },
            end: { x: -29.2, z: 14.965 },
            partitionWidth: 0.12,
          },
          {
            //01.39 - vrchni prava 2
            type: "partition",
            start: { x: -29.2, z: 14.89 },
            end: { x: -28.65, z: 14.89 },
            partitionWidth: 0.27,
          },
          {
            //ucho prave vnejsi spodni
            type: "partition",
            start: { x: 18.62, z: 7.83 },
            end: { x: 39.25, z: 7.83 },
            partitionWidth: 0.4,
          },
          {
            //01.18 vrchni leva
            type: "partition",
            start: { x: 18.62, z: 18.07 },
            end: { x: 19.37, z: 18.07 },
            partitionWidth: 0.2,
          },
          {
            //01.18 vrchni prava
            type: "partition",
            start: { x: 21.47, z: 18.07 },
            end: { x: 25.45, z: 18.07 },
            partitionWidth: 0.2,
          },
          {
            //01.74 leva
            type: "partition",
            start: { x: 24.92, z: 14.525 },
            end: { x: 24.92, z: 8.03 },
            partitionWidth: 0.34,
          },
          {
            //01.74 prava
            type: "partition",
            start: { x: 33.2, z: 14.525 },
            end: { x: 33.2, z: 8.03 },
            partitionWidth: 0.38,
          },
          {
            //01.74 vrchni leva
            type: "partition",
            start: { x: 24.75, z: 14.695 },
            end: { x: 28.75, z: 14.695 },
            partitionWidth: 0.34,
          },
          {
            //01.74 vrchni prava
            type: "partition",
            start: { x: 29.35, z: 14.695 },
            end: { x: 35, z: 14.695 },
            partitionWidth: 0.34,
          },
          {
            //01.75 prava
            type: "partition",
            start: { x: 37.08, z: 14.525 },
            end: { x: 37.08, z: 8.03 },
            partitionWidth: 0.3,
          },
          {
            //01.75 vrchni
            type: "partition",
            start: { x: 35.6, z: 14.695 },
            end: { x: 38.05, z: 14.695 },
            partitionWidth: 0.34,
          },
          {
            //01.76 prava
            type: "partition",
            start: { x: 39.05, z: 54.88 },
            end: { x: 39.05, z: 8.03 },
            partitionWidth: 0.4,
          },
          {
            //01.27 leva
            type: "partition",
            start: { x: 24.9, z: 14.865 },
            end: { x: 24.9, z: 17.97 },
            partitionWidth: 0.3,
          },
          {
            //01.27 vrchni prostredni
            type: "partition",
            start: { x: 27.55, z: 18.07 },
            end: { x: 29.54, z: 18.07 },
            partitionWidth: 0.2,
          },
          {
            //01.27 vrchni prava
            type: "partition",
            start: { x: 30.44, z: 18.07 },
            end: { x: 38.85, z: 18.07 },
            partitionWidth: 0.2,
          },
          {
            //01.28a leva 1
            type: "partition",
            start: { x: 28.85, z: 18.17 },
            end: { x: 28.85, z: 19.87 },
            partitionWidth: 0.2,
          },
          {
            //01.28a leva 2
            type: "partition",
            start: { x: 28.85, z: 20.87 },
            end: { x: 28.85, z: 21.27 },
            partitionWidth: 0.2,
          },
          {
            //01.28b leva
            type: "partition",
            start: { x: 31.475, z: 18.17 },
            end: { x: 31.475, z: 19.82 },
            partitionWidth: 0.15,
          },
          {
            //01.28b vrchni leva
            type: "partition",
            start: { x: 31.55, z: 19.745 },
            end: { x: 32.35, z: 19.745 },
            partitionWidth: 0.15,
          },
          {
            //01.28b vrchni prava
            type: "partition",
            start: { x: 33.25, z: 19.745 },
            end: { x: 34.75, z: 19.745 },
            partitionWidth: 0.15,
          },
          {
            //01.28c vrchni prava
            type: "partition",
            start: { x: 35.65, z: 19.745 },
            end: { x: 37.15, z: 19.745 },
            partitionWidth: 0.15,
          },
          {
            //01.28c leva
            type: "partition",
            start: { x: 34.05, z: 18.17 },
            end: { x: 34.05, z: 19.82 },
            partitionWidth: 0.15,
          },
          {
            //01.28d vrchni prava
            type: "partition",
            start: { x: 38.05, z: 19.745 },
            end: { x: 38.85, z: 19.745 },
            partitionWidth: 0.15,
          },
          {
            //01.28d leva
            type: "partition",
            start: { x: 36.275, z: 18.17 },
            end: { x: 36.275, z: 19.82 },
            partitionWidth: 0.15,
          },
          {
            //01.28d vrchni
            type: "partition",
            start: { x: 38.85, z: 21.62 },
            end: { x: 27.55, z: 21.62 },
            partitionWidth: 0.7,
          },
          {
            //01.52 leva
            type: "partition",
            start: { x: 35.75, z: 21.97 },
            end: { x: 35.75, z: 22.67 },
            partitionWidth: 0.2,
          },
          {
            //01.52 vrchni
            type: "partition",
            start: { x: 35.85, z: 23.745 },
            end: { x: 38.85, z: 23.745 },
            partitionWidth: 0.15,
          },
          {
            //01.30 leva
            type: "partition",
            start: { x: 35.75, z: 23.57 },
            end: { x: 35.75, z: 24.76 },
            partitionWidth: 0.2,
          },
          {
            //01.30 vrchni
            type: "partition",
            start: { x: 35.85, z: 26.195 },
            end: { x: 38.85, z: 26.195 },
            partitionWidth: 0.2,
          },
          {
            //01.51 leva spodni
            type: "partition",
            start: { x: 35.75, z: 25.86 },
            end: { x: 35.75, z: 31.46 },
            partitionWidth: 0.2,
          },
          {
            //01.51 leva vrchni
            type: "partition",
            start: { x: 35.75, z: 32.96 },
            end: { x: 35.75, z: 47.63 },
            partitionWidth: 0.2,
          },
          {
            //01.30 vrchni
            type: "partition",
            start: { x: 35.85, z: 37.26 },
            end: { x: 38.85, z: 37.26 },
            partitionWidth: 0.2,
          },
          {
            //01.31 leva vrchni
            type: "partition",
            start: { x: 35.75, z: 48.63 },
            end: { x: 35.75, z: 48.71 },
            partitionWidth: 0.2,
          },
          {
            //01.31 prava vrchni
            type: "partition",
            start: { x: 37.175, z: 48.63 },
            end: { x: 37.175, z: 48.71 },
            partitionWidth: 0.35,
          },
          {
            //01.31 prava prostredni
            type: "partition",
            start: { x: 37.175, z: 47.63 },
            end: { x: 37.175, z: 39.76 },
            partitionWidth: 0.35,
          },
          {
            //01.31 prava prostredni
            type: "partition",
            start: { x: 37.175, z: 37.36 },
            end: { x: 37.175, z: 38.76 },
            partitionWidth: 0.35,
          },
          {
            //01.31 vrchni
            type: "partition",
            start: { x: 35.85, z: 48.8525 },
            end: { x: 38.85, z: 48.8525 },
            partitionWidth: 0.285,
          },
          {
            //01.61 leva spodni
            type: "partition",
            start: { x: 35.8175, z: 48.71 },
            end: { x: 35.8175, z: 49.311 },
            partitionWidth: 0.335,
          },
          {
            //01.61 leva vrchni
            type: "partition",
            start: { x: 35.8175, z: 50.211 },
            end: { x: 35.8175, z: 50.71 },
            partitionWidth: 0.335,
          },
          {
            //01.61 vrchni
            type: "partition",
            start: { x: 35.985, z: 50.87 },
            end: { x: 38.85, z: 50.87 },
            partitionWidth: 0.32,
          },
          {
            //šachta leva
            type: "partition",
            start: { x: 35.81, z: 50.71 },
            end: { x: 35.81, z: 54.48 },
            partitionWidth: 0.32,
          },
          {
            //šachta vrchni
            type: "partition",
            start: { x: 38.73, z: 54.62 },
            end: { x: 35.65, z: 54.62 },
            partitionWidth: 0.52,
          },
          {
            //šachta prava
            type: "partition",
            start: { x: 38.79, z: 54.88 },
            end: { x: 38.79, z: 51.03 },
            partitionWidth: 0.12,
          },
          {
            //parkoviste vrsek
            type: "partition",
            start: { x: 35.65, z: 54.68 },
            end: { x: -39.25, z: 54.68 },
            partitionWidth: 0.4,
          },
          {
            //privod vzduchu vrsek
            type: "partition",
            start: { x: -38.85, z: 54.48 },
            end: { x: -40.75, z: 54.48 },
            partitionWidth: 0.3,
          },
          {
            //privod vzduchu leva
            type: "partition",
            start: { x: -40.6, z: 54.33 },
            end: { x: -40.6, z: 51.66 },
            partitionWidth: 0.3,
          },
          {
            //privod vzduchu spodni
            type: "partition",
            start: { x: -40.45, z: 53.27 },
            end: { x: -38.85, z: 53.27 },
            partitionWidth: 0.12,
          },
          {
            //odtah vzduchu spodni
            type: "partition",
            start: { x: -39.6, z: 51.81 },
            end: { x: -39.25, z: 51.81 },
            partitionWidth: 0.3,
          },
          {
            //01.53 leva
            type: "partition",
            start: { x: -39.05, z: 51.96 },
            end: { x: -39.05, z: 45.01 },
            partitionWidth: 0.4,
          },
          {
            //01.53 spodni 1
            type: "partition",
            start: { x: -38.85, z: 50.605 },
            end: { x: -35.29, z: 50.605 },
            partitionWidth: 0.15,
          },
          {
            //01.53 spodni 2
            type: "partition",
            start: { x: -33.79, z: 50.605 },
            end: { x: -32.55, z: 50.605 },
            partitionWidth: 0.15,
          },
          {
            //01.54 spodni 1
            type: "partition",
            start: { x: -38.85, z: 46.805 },
            end: { x: -35.29, z: 46.805 },
            partitionWidth: 0.15,
          },
          {
            //01.53 spodni 2
            type: "partition",
            start: { x: -34.39, z: 46.805 },
            end: { x: -32.55, z: 46.805 },
            partitionWidth: 0.15,
          },
          {
            //kanal pro dieselvrchni
            type: "partition",
            start: { x: -39.6, z: 45.16 },
            end: { x: -39.25, z: 45.16 },
            partitionWidth: 0.3,
          },
          {
            //kanal pro diesel leva
            type: "partition",
            start: { x: -40.6, z: 45.31 },
            end: { x: -40.6, z: 43.41 },
            partitionWidth: 0.3,
          },
          {
            //kanal pro diesel spodni
            type: "partition",
            start: { x: -39.6, z: 43.56 },
            end: { x: -39.25, z: 43.56 },
            partitionWidth: 0.3,
          },
          {
            //01.57 leva 1
            type: "partition",
            start: { x: -39.05, z: 43.71 },
            end: { x: -39.05, z: 40.21 },
            partitionWidth: 0.4,
          },
          {
            //01.57 leva 2
            type: "partition",
            start: { x: -39, z: 39.11 },
            end: { x: -39, z: 38.21 },
            partitionWidth: 0.3,
          },
          {
            //01.57 leva 3
            type: "partition",
            start: { x: -39.05, z: 37.51 },
            end: { x: -39.05, z: 25.23 },
            partitionWidth: 0.4,
          },
          {
            //kanal pro dieselvrchni 2
            type: "partition",
            start: { x: -39.6, z: 40.36 },
            end: { x: -39.25, z: 40.36 },
            partitionWidth: 0.3,
          },
          {
            //kanal pro diesel leva 2
            type: "partition",
            start: { x: -40.6, z: 40.51 },
            end: { x: -40.6, z: 37.21 },
            partitionWidth: 0.3,
          },
          {
            //kanal pro diesel spodni 2
            type: "partition",
            start: { x: -39.6, z: 37.36 },
            end: { x: -39.25, z: 37.36 },
            partitionWidth: 0.3,
          },
          {
            //kanal pro diesel prostredni 2
            type: "partition",
            start: { x: -40.45, z: 39.01 },
            end: { x: -39.15, z: 39.01 },
            partitionWidth: 0.2,
          },
          {
            //tlumice hluku pravaa
            type: "partition",
            start: { x: -39.35, z: 25.53 },
            end: { x: -39.35, z: 27.73 },
            partitionWidth: 0.2,
          },
          {
            //tlumice horni 1
            type: "partition",
            start: { x: -39.6, z: 27.88 },
            end: { x: -39.25, z: 27.88 },
            partitionWidth: 0.3,
          },
          {
            //tlumice horni 1
            type: "partition",
            start: { x: -40.4, z: 27.88 },
            end: { x: -40.9, z: 27.88 },
            partitionWidth: 0.3,
          },
          {
            //tlumice hluku leva
            type: "partition",
            start: { x: -40.75, z: 25.53 },
            end: { x: -40.75, z: 27.73 },
            partitionWidth: 0.3,
          },
          {
            //šachta leva
            type: "partition",
            start: { x: -32.365, z: 54.48 },
            end: { x: -32.365, z: 51.03 },
            partitionWidth: 0.37,
          },
          {
            //šachta spodni
            type: "partition",
            start: { x: -32.55, z: 50.895 },
            end: { x: -29.1, z: 50.895 },
            partitionWidth: 0.27,
          },
          {
            //šachta prava
            type: "partition",
            start: { x: -29.26, z: 54.485 },
            end: { x: -29.26, z: 51.03 },
            partitionWidth: 0.32,
          },
          {
            //01.56 prava
            type: "partition",
            start: { x: -29.2, z: 50.76 },
            end: { x: -29.2, z: 48.61 },
            partitionWidth: 0.2,
          },
          {
            //01.56 leva
            type: "partition",
            start: { x: -30.75, z: 50.76 },
            end: { x: -30.75, z: 49.06 },
            partitionWidth: 0.3,
          },
          {
            //01.56 spodni prava
            type: "partition",
            start: { x: -29.3, z: 48.76 },
            end: { x: -29.375, z: 48.76 },
            partitionWidth: 0.3,
          },
          {
            //01.56 spodni leva
            type: "partition",
            start: { x: -30.45, z: 48.885 },
            end: { x: -30.9, z: 48.885 },
            partitionWidth: 0.35,
          },
          {
            //V6 - leva 1
            type: "partition",
            start: { x: -32.475, z: 50.76 },
            end: { x: -32.475, z: 50.53 },
            partitionWidth: 0.15,
          },
          {
            //V6 - leva 1
            type: "partition",
            start: { x: -32.525, z: 48.61 },
            end: { x: -32.525, z: 50.53 },
            partitionWidth: 0.25,
          },
          {
            //V6 - leva spodni1
            type: "partition",
            start: { x: -32.35, z: 48.61 },
            end: { x: -32.35, z: 48.91 },
            partitionWidth: 0.1,
          },
          {
            //V6 - leva spodni2
            type: "partition",
            start: { x: -32.3, z: 48.81 },
            end: { x: -31.95, z: 48.81 },
            partitionWidth: 0.2,
          },
          {
            //V6 - prava spodni
            type: "partition",
            start: { x: -30.9, z: 48.81 },
            end: { x: -31, z: 48.81 },
            partitionWidth: 0.2,
          },
          {
            //01.55 - prava spodni
            type: "partition",
            start: { x: -29.275, z: 47.11 },
            end: { x: -29.275, z: 46.51 },
            partitionWidth: 0.35,
          },
          {
            //01.35 - prava
            type: "partition",
            start: { x: -29.2, z: 46.51 },
            end: { x: -29.2, z: 37.66 },
            partitionWidth: 0.2,
          },
          {
            //01.35 - leva 1
            type: "partition",
            start: { x: -30.7, z: 46.81 },
            end: { x: -30.7, z: 39.91 },
            partitionWidth: 0.5,
          },
          {
            //01.35 - leva 2
            type: "partition",
            start: { x: -30.7, z: 37.66 },
            end: { x: -30.7, z: 38.91 },
            partitionWidth: 0.5,
          },
          {
            //parko - leva 1
            type: "partition",
            start: { x: -32.4, z: 47.11 },
            end: { x: -32.4, z: 40.015 },
            partitionWidth: 0.5,
          },
          {
            //parko - leva 1
            type: "partition",
            start: { x: -32.35, z: 40.015 },
            end: { x: -32.35, z: 33.035 },
            partitionWidth: 0.4,
          },
          {
            //parko - spodni
            type: "partition",
            start: { x: -32.15, z: 37.56 },
            end: { x: -30.35, z: 37.56 },
            partitionWidth: 0.2,
          },
          {
            //01.34 - prava
            type: "partition",
            start: { x: -29.275, z: 37.66 },
            end: { x: -29.275, z: 33.36 },
            partitionWidth: 0.36,
          },
          {
            //01.37a - prava 1
            type: "partition",
            start: { x: -29.275, z: 32.46 },
            end: { x: -29.275, z: 31.53 },
            partitionWidth: 0.36,
          },
          {
            //01.37a - prava 2
            type: "partition",
            start: { x: -29.275, z: 29.73 },
            end: { x: -29.275, z: 28.8 },
            partitionWidth: 0.36,
          },
          {
            //01.37c - vrchni
            type: "partition",
            start: { x: -32.15, z: 35.7725 },
            end: { x: -29.45, z: 35.7725 },
            partitionWidth: 0.375,
          },
          {
            //01.37c - prava 1
            type: "partition",
            start: { x: -31.15, z: 35.585 },
            end: { x: -31.15, z: 34.635 },
            partitionWidth: 0.1,
          },
          {
            //01.37c - prava 2
            type: "partition",
            start: { x: -31.15, z: 33.835 },
            end: { x: -31.15, z: 33.685 },
            partitionWidth: 0.1,
          },
          {
            //01.37c - spodni 1
            type: "partition",
            start: { x: -32.15, z: 33.635 },
            end: { x: -30.95, z: 33.635 },
            partitionWidth: 0.1,
          },
          {
            //01.37c - spodni 2
            type: "partition",
            start: { x: -30.15, z: 33.635 },
            end: { x: -29.45, z: 33.635 },
            partitionWidth: 0.1,
          },
          {
            //01.36 vrchni leva
            type: "partition",
            start: { x: -28.45, z: 20.87 },
            end: { x: -28.45, z: 21.27 },
            partitionWidth: 0.3,
          },
          {
            //01.36 vrchni
            type: "partition",
            start: { x: -28.6, z: 21.62 },
            end: { x: 13.49, z: 21.62 },
            partitionWidth: 0.7,
          },
          {
            //01.36 vrchni
            type: "partition",
            start: { x: 16.54, z: 21.77 },
            end: { x: 13.49, z: 21.77 },
            partitionWidth: 0.4,
          },
          {
            //01.36 vrchni
            type: "partition",
            start: { x: 16.54, z: 21.62 },
            end: { x: 26.67, z: 21.62 },
            partitionWidth: 0.7,
          },
          {
            //01.24 - prava
            type: "partition",
            start: { x: 18.245, z: 20.87 },
            end: { x: 18.245, z: 21.27 },
            partitionWidth: 0.75,
          },
          {
            //01.24 - leva
            type: "partition",
            start: { x: -18.245, z: 20.87 },
            end: { x: -18.245, z: 21.27 },
            partitionWidth: 0.75,
          },
          {
            //01.24 - leva
            type: "partition",
            start: { x: 29.425, z: 21.97 },
            end: { x: 29.425, z: 24.71 },
          },
          {
            //01.24 - leva
            type: "partition",
            start: { x: 29.4, z: 24.71 },
            end: { x: 35.65, z: 24.71 },
          },
          {
            //sloup 1
            type: "partition",
            start: { x: -24.85, z: 51.385 },
            end: { x: -24.85, z: 50.935 },
            partitionWidth: 0.6,
          },
          {
            //sloup 2
            type: "partition",
            start: { x: -24.85, z: 43.785 },
            end: { x: -24.85, z: 43.335 },
            partitionWidth: 0.6,
          },
          {
            //sloup 3
            type: "partition",
            start: { x: -24.85, z: 36.185 },
            end: { x: -24.85, z: 35.735 },
            partitionWidth: 0.6,
          },
          {
            //sloup 4
            type: "partition",
            start: { x: -24.85, z: 28.135 },
            end: { x: -24.85, z: 28.585 },
            partitionWidth: 0.6,
          },
          {
            //sloup 5
            type: "partition",
            start: { x: -16.85, z: 51.385 },
            end: { x: -16.85, z: 50.935 },
            partitionWidth: 0.6,
          },
          {
            //sloup 6
            type: "partition",
            start: { x: -16.85, z: 43.785 },
            end: { x: -16.85, z: 43.335 },
            partitionWidth: 0.6,
          },
          {
            //sloup 7
            type: "partition",
            start: { x: -16.85, z: 36.185 },
            end: { x: -16.85, z: 35.735 },
            partitionWidth: 0.6,
          },
          {
            //sloup 8
            type: "partition",
            start: { x: -16.85, z: 28.135 },
            end: { x: -16.85, z: 28.585 },
            partitionWidth: 0.6,
          },
          {
            //sloup 9
            type: "partition",
            start: { x: -8.85, z: 51.385 },
            end: { x: -8.85, z: 50.935 },
            partitionWidth: 0.6,
          },
          {
            //sloup 10
            type: "partition",
            start: { x: -8.85, z: 43.785 },
            end: { x: -8.85, z: 43.335 },
            partitionWidth: 0.6,
          },
          {
            //sloup 11
            type: "partition",
            start: { x: -8.85, z: 36.185 },
            end: { x: -8.85, z: 35.735 },
            partitionWidth: 0.6,
          },
          {
            //sloup 12
            type: "partition",
            start: { x: -8.85, z: 28.135 },
            end: { x: -8.85, z: 28.585 },
            partitionWidth: 0.6,
          },
          {
            //sloup 13
            type: "partition",
            start: { x: -0.8495, z: 51.385 },
            end: { x: -0.8495, z: 50.935 },
            partitionWidth: 1.225,
          },
          {
            //sloup 14
            type: "partition",
            start: { x: -0.8495, z: 43.785 },
            end: { x: -0.8495, z: 43.335 },
            partitionWidth: 1.225,
          },
          {
            //sloup 15
            type: "partition",
            start: { x: -0.8495, z: 36.185 },
            end: { x: -0.8495, z: 35.735 },
            partitionWidth: 1.225,
          },
          {
            //sloup 16
            type: "partition",
            start: { x: -0.8495, z: 28.135 },
            end: { x: -0.8495, z: 28.585 },
            partitionWidth: 1.225,
          },
          {
            //sloup 17
            type: "partition",
            start: { x: 7.1805, z: 51.385 },
            end: { x: 7.1805, z: 50.935 },
            partitionWidth: 0.661,
          },
          {
            //sloup 18
            type: "partition",
            start: { x: 7.1805, z: 43.785 },
            end: { x: 7.1805, z: 43.335 },
            partitionWidth: 0.661,
          },
          {
            //sloup 19
            type: "partition",
            start: { x: 7.1805, z: 36.185 },
            end: { x: 7.1805, z: 35.735 },
            partitionWidth: 0.661,
          },
          {
            //sloup 20
            type: "partition",
            start: { x: 7.1805, z: 28.135 },
            end: { x: 7.1805, z: 28.585 },
            partitionWidth: 0.661,
          },
          {
            //sloup 21
            type: "partition",
            start: { x: 15.15, z: 51.385 },
            end: { x: 15.15, z: 50.935 },
            partitionWidth: 0.6,
          },
          {
            //sloup 22
            type: "partition",
            start: { x: 15.15, z: 43.785 },
            end: { x: 15.15, z: 43.335 },
            partitionWidth: 0.6,
          },
          {
            //sloup 23
            type: "partition",
            start: { x: 15.15, z: 36.185 },
            end: { x: 15.15, z: 35.735 },
            partitionWidth: 0.6,
          },
          {
            //sloup 24
            type: "partition",
            start: { x: 15.15, z: 28.135 },
            end: { x: 15.15, z: 28.585 },
            partitionWidth: 0.6,
          },
          {
            //sloup 25
            type: "partition",
            start: { x: 23.15, z: 51.385 },
            end: { x: 23.15, z: 50.935 },
            partitionWidth: 0.6,
          },
          {
            //sloup 26
            type: "partition",
            start: { x: 23.15, z: 43.785 },
            end: { x: 23.15, z: 43.335 },
            partitionWidth: 0.6,
          },
          {
            //sloup 27
            type: "partition",
            start: { x: 23.15, z: 36.185 },
            end: { x: 23.15, z: 35.735 },
            partitionWidth: 0.6,
          },
          {
            //sloup 28
            type: "partition",
            start: { x: 23.15, z: 28.135 },
            end: { x: 23.15, z: 28.585 },
            partitionWidth: 0.6,
          },
          {
            //sloup 29
            type: "partition",
            start: { x: 31.15, z: 51.385 },
            end: { x: 31.15, z: 50.935 },
            partitionWidth: 0.6,
          },
          {
            //sloup 30
            type: "partition",
            start: { x: 31.15, z: 43.785 },
            end: { x: 31.15, z: 43.335 },
            partitionWidth: 0.6,
          },
          {
            //sloup 31
            type: "partition",
            start: { x: 31.15, z: 36.185 },
            end: { x: 31.15, z: 35.735 },
            partitionWidth: 0.6,
          },
          {
            //sloup 32
            type: "partition",
            start: { x: 31.15, z: 28.135 },
            end: { x: 31.15, z: 28.585 },
            partitionWidth: 0.6,
          },
          {
            //curved stena
            type: "curved",
            start: { x: -32.35, z: 33.135 },
            end: { x: -27.55, z: 28.335 },
            center: { x: -27.55, z: 33.135 },
            radius: 4.8,
            width: 0.4,
          },
          {
            //sstena u curved
            type: "partition",
            start: { x: -25.15, z: 28.335 },
            end: { x: -27.55, z: 28.335 },
            partitionWidth: 0.4,
          },
        ],
      },
      parking: [
        // 1
        {
          start: { x: -29.14, z: 30.98 },
          end: { x: -24.14, z: 28.48 },
          status: "free",
        },
        {
          start: { x: -29.14, z: 35.98 },
          end: { x: -24.14, z: 33.48 },
          status: "occupied",
        },
        {
          start: { x: -29.14, z: 38.48 },
          end: { x: -24.14, z: 35.98 },
          status: "reserved",
        },
        {
          start: { x: -29.14, z: 40.98 },
          end: { x: -24.14, z: 38.48 },
          status: "reserved",
        },
        {
          start: { x: -29.14, z: 43.48 },
          end: { x: -24.14, z: 40.98 },
          status: "reserved",
        },
        {
          start: { x: -29.14, z: 45.98 },
          end: { x: -24.14, z: 43.48 },
          status: "reserved",
        },
        {
          start: { x: -29.14, z: 50.98 },
          end: { x: -24.14, z: 48.48 },
          status: "free",
        },
        {
          start: { x: -29.14, z: 54.48 },
          end: { x: -24.14, z: 50.98 },
          status: "free",
        },

        // 2
        {
          start: { x: -18.065, z: 30.98 },
          end: { x: -13.065, z: 28.48 },
          status: "occupied",
        },
        {
          start: { x: -18.065, z: 33.48 },
          end: { x: -13.065, z: 30.98 },
          status: "occupied",
        },
        {
          start: { x: -18.065, z: 35.98 },
          end: { x: -13.065, z: 33.48 },
          status: "occupfreeied",
        },
        {
          start: { x: -18.065, z: 38.48 },
          end: { x: -13.065, z: 35.98 },
          status: "free",
        },
        {
          start: { x: -18.065, z: 40.98 },
          end: { x: -13.065, z: 38.48 },
          status: "free",
        },
        {
          start: { x: -18.065, z: 43.48 },
          end: { x: -13.065, z: 40.98 },
          status: "free",
        },
        {
          start: { x: -18.065, z: 45.98 },
          end: { x: -13.065, z: 43.48 },
          status: "free",
        },
        {
          start: { x: -18.065, z: 48.48 },
          end: { x: -13.065, z: 45.98 },
          status: "reserved",
        },
        {
          start: { x: -18.065, z: 50.98 },
          end: { x: -13.065, z: 48.48 },
          status: "reserved",
        },
        {
          start: { x: -18.065, z: 54.48 },
          end: { x: -13.065, z: 50.98 },
          status: "reserved",
        },

        // 3
        {
          start: { x: -12.915, z: 30.98 },
          end: { x: -7.915, z: 28.48 },
          status: "free",
        },
        {
          start: { x: -12.915, z: 33.48 },
          end: { x: -7.915, z: 30.98 },
          status: "free",
        },
        {
          start: { x: -12.915, z: 35.98 },
          end: { x: -7.915, z: 33.48 },
          status: "free",
        },
        {
          start: { x: -12.915, z: 38.48 },
          end: { x: -7.915, z: 35.98 },
          status: "free",
        },
        {
          start: { x: -12.915, z: 40.98 },
          end: { x: -7.915, z: 38.48 },
          status: "occupied",
        },
        {
          start: { x: -12.915, z: 43.48 },
          end: { x: -7.915, z: 40.98 },
          status: "occupied",
        },
        {
          start: { x: -12.915, z: 45.98 },
          end: { x: -7.915, z: 43.48 },
          status: "occupied",
        },
        {
          start: { x: -12.915, z: 48.48 },
          end: { x: -7.915, z: 45.98 },
          status: "occupied",
        },
        {
          start: { x: -12.915, z: 50.98 },
          end: { x: -7.915, z: 48.48 },
          status: "occupied",
        },
        {
          start: { x: -12.915, z: 54.48 },
          end: { x: -7.915, z: 50.98 },
          status: "occupied",
        },

        // 4
        {
          start: { x: -1.84, z: 30.98 },
          end: { x: 3.16, z: 28.48 },
          status: "free",
        },
        {
          start: { x: -1.84, z: 33.48 },
          end: { x: 3.16, z: 30.98 },
          status: "free",
        },
        {
          start: { x: -1.84, z: 35.98 },
          end: { x: 3.16, z: 33.48 },
          status: "occupied",
        },
        {
          start: { x: -1.84, z: 38.48 },
          end: { x: 3.16, z: 35.98 },
          status: "free",
        },
        {
          start: { x: -1.84, z: 40.98 },
          end: { x: 3.16, z: 38.48 },
          status: "free",
        },
        {
          start: { x: -1.84, z: 43.48 },
          end: { x: 3.16, z: 40.98 },
          status: "free",
        },
        {
          start: { x: -1.84, z: 45.98 },
          end: { x: 3.16, z: 43.48 },
          status: "free",
        },
        {
          start: { x: -1.84, z: 48.48 },
          end: { x: 3.16, z: 45.98 },
          status: "free",
        },
        {
          start: { x: -1.84, z: 50.98 },
          end: { x: 3.16, z: 48.48 },
          status: "occupied",
        },
        {
          start: { x: -1.84, z: 54.48 },
          end: { x: 3.16, z: 50.98 },
          status: "occupied",
        },

        // 5
        {
          start: { x: 3.31, z: 30.98 },
          end: { x: 8.31, z: 28.48 },
          status: "occupied",
        },
        {
          start: { x: 3.31, z: 33.48 },
          end: { x: 8.31, z: 30.98 },
          status: "free",
        },
        {
          start: { x: 3.31, z: 35.98 },
          end: { x: 8.31, z: 33.48 },
          status: "occupied",
        },
        {
          start: { x: 3.31, z: 38.48 },
          end: { x: 8.31, z: 35.98 },
          status: "occupied",
        },
        {
          start: { x: 3.31, z: 40.98 },
          end: { x: 8.31, z: 38.48 },
          status: "free",
        },
        {
          start: { x: 3.31, z: 43.48 },
          end: { x: 8.31, z: 40.98 },
          status: "free",
        },
        {
          start: { x: 3.31, z: 45.98 },
          end: { x: 8.31, z: 43.48 },
          status: "occupied",
        },
        {
          start: { x: 3.31, z: 48.48 },
          end: { x: 8.31, z: 45.98 },
          status: "free",
        },
        {
          start: { x: 3.31, z: 50.98 },
          end: { x: 8.31, z: 48.48 },
          status: "occupied",
        },
        {
          start: { x: 3.31, z: 54.48 },
          end: { x: 8.31, z: 50.98 },
          status: "occupied",
        },

        // 6
        {
          start: { x: 14.385, z: 30.98 },
          end: { x: 19.385, z: 28.48 },
          status: "occupied",
        },
        {
          start: { x: 14.385, z: 33.48 },
          end: { x: 19.385, z: 30.98 },
          status: "free",
        },
        {
          start: { x: 14.385, z: 35.98 },
          end: { x: 19.385, z: 33.48 },
          status: "free",
        },
        {
          start: { x: 14.385, z: 38.48 },
          end: { x: 19.385, z: 35.98 },
          status: "occupied",
        },
        {
          start: { x: 14.385, z: 40.98 },
          end: { x: 19.385, z: 38.48 },
          status: "free",
        },
        {
          start: { x: 14.385, z: 43.48 },
          end: { x: 19.385, z: 40.98 },
          status: "occupied",
        },
        {
          start: { x: 14.385, z: 45.98 },
          end: { x: 19.385, z: 43.48 },
          status: "occupied",
        },
        {
          start: { x: 14.385, z: 48.48 },
          end: { x: 19.385, z: 45.98 },
          status: "free",
        },
        {
          start: { x: 14.385, z: 50.98 },
          end: { x: 19.385, z: 48.48 },
          status: "free",
        },
        {
          start: { x: 14.385, z: 54.48 },
          end: { x: 19.385, z: 50.98 },
          status: "occupied",
        },

        // 7
        {
          start: { x: 19.535, z: 30.98 },
          end: { x: 24.535, z: 28.48 },
          status: "occupied",
        },
        {
          start: { x: 19.535, z: 33.48 },
          end: { x: 24.535, z: 30.98 },
          status: "free",
        },
        {
          start: { x: 19.535, z: 35.98 },
          end: { x: 24.535, z: 33.48 },
          status: "occupied",
        },
        {
          start: { x: 19.535, z: 38.48 },
          end: { x: 24.535, z: 35.98 },
          status: "occupied",
        },
        {
          start: { x: 19.535, z: 40.98 },
          end: { x: 24.535, z: 38.48 },
          status: "free",
        },
        {
          start: { x: 19.535, z: 43.48 },
          end: { x: 24.535, z: 40.98 },
          status: "free",
        },
        {
          start: { x: 19.535, z: 45.98 },
          end: { x: 24.535, z: 43.48 },
          status: "free",
        },
        {
          start: { x: 19.535, z: 48.48 },
          end: { x: 24.535, z: 45.98 },
          status: "free",
        },
        {
          start: { x: 19.535, z: 50.98 },
          end: { x: 24.535, z: 48.48 },
          status: "occupied",
        },
        {
          start: { x: 19.535, z: 54.48 },
          end: { x: 24.535, z: 50.98 },
          status: "occupied",
        },

        // 8
        {
          start: { x: 30.61, z: 28.48 },
          end: { x: 35.61, z: 25.98 },
          status: "free",
        },
        {
          start: { x: 30.61, z: 30.98 },
          end: { x: 35.61, z: 28.48 },
          status: "free",
        },
        {
          start: { x: 30.61, z: 33.48 },
          end: { x: 35.61, z: 30.98 },
          status: "free",
        },
        {
          start: { x: 30.61, z: 35.98 },
          end: { x: 35.61, z: 33.48 },
          status: "free",
        },
        {
          start: { x: 30.61, z: 38.48 },
          end: { x: 35.61, z: 35.98 },
          status: "occupied",
        },
        {
          start: { x: 30.61, z: 40.98 },
          end: { x: 35.61, z: 38.48 },
          status: "free",
        },
        {
          start: { x: 30.61, z: 43.48 },
          end: { x: 35.61, z: 40.98 },
          status: "occupied",
        },
        {
          start: { x: 30.61, z: 45.98 },
          end: { x: 35.61, z: 43.48 },
          status: "occupied",
        },
        {
          start: { x: 30.61, z: 50.98 },
          end: { x: 35.61, z: 48.48 },
          status: "occupied",
        },
        {
          start: { x: 30.61, z: 54.48 },
          end: { x: 35.61, z: 50.98 },
          status: "free",
        },
      ],
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [
          { x: 5, z: 6, value: 24 },
          { x: 15, z: 14, value: 26 },
        ],
        wifi: [{ x: 20, z: 20, value: 65 }],
        airQuality: [
          { x: 25, z: 18, value: 55 },
          { x: 8, z: 15, value: 52 },
        ],
      },
      roomLabels: [
                { x: -13.5, z: 14.1, label: "01.02" },
        { x: -13.5, z: 11.1, label: "01.66" },
        { x: -8.25, z: 15.5, label: "01.65" },
        { x: -5.4, z: 15.8, label: "V4" },
        { x: -5.4, z: 14.1, label: "V5" },
        { x: -5.4, z: 12.5, label: "01.03" },
        { x: -5.4, z: 10.7, label: "01.67" },
        { x: -2.5, z: 13.5, label: "01.04" },
        { x: 0.6, z: 15.5, label: "01.05" },
        { x: 3.2, z: 15.5, label: "01.59" },
        { x: 0.1, z: 10.6, label: "V1" },
        { x: 1.95, z: 10.6, label: "V2" },
        { x: 3.8, z: 10.6, label: "V3" },
        { x: 6.15, z: 12.4, label: "01.07" },
        { x: 9, z: 12.4, label: "01.08" },
        { x: 13.5, z: 12.4, label: "01.17" },
        { x: 11.8, z: 4.8, label: "01.70a" },
        { x: 15.2, z: 4.8, label: "01.70b" },
        { x: 13.3, z: 1.8, label: "01.16" },
        { x: 13.3, z: -0.6, label: "01.14" },
        { x: 13.3, z: -3.2, label: "01.21" },
        { x: 11.1, z: -4.3, label: "01.22" },
        { x: 13.3, z: -11, label: "01.13" },
        { x: 8.4, z: -15, label: "01.11" },
        { x: -1.3, z: -11.6, label: "01.69" },
        { x: -12.7, z: -9, label: "01.09a" },
        { x: -11, z: -9, label: "01.09b" },
        { x: -12, z: -13.5, label: "01.68" },
        { x: 1.8, z: 3.5, label: "01.11" },
        { x: -9, z: 1.2, label: "01.12" },
        { x: 2, z: 8, label: "01.10" },
        { x: -9.1, z: 17.5, label: "01.64" },
        { x: 0, z: 19, label: "01.24" },
        { x: -20.1, z: 13, label: "01.26" },
        { x: -23.2, z: 13, label: "01.44" },
        { x: -26.6, z: 9.7, label: "01.43" },
        { x: -26.6, z: 13, label: "01.42" },
        { x: -26.6, z: 16.4, label: "01.71" },
        { x: -23.3, z: 19.8, label: "01.36" },
        { x: -32.2, z: 11.8, label: "01.39" },
        { x: -37.5, z: 9, label: "01.41" },
        { x: -37.5, z: 12.4, label: "01.39" },
        { x: -41.7, z: 12.1, label: "01.48" },
        { x: -41.7, z: 14.4, label: "01.47" },
        { x: -42.5, z: 17.2, label: "01.46" },
        { x: -40.5, z: 17.2, label: "01.45" },
        { x: -42.5, z: 19.8, label: "01.49" },
        { x: -41.7, z: 22.5, label: "01.50" },
        { x: -41.7, z: 24.6, label: "01.32" },
        { x: 21.7, z: 13, label: "01.18" },
        { x: 29.1, z: 11.6, label: "01.74" },
        { x: 35.1, z: 11.6, label: "01.75" },
        { x: 38, z: 11.6, label: "01.76" },
        { x: 32.2, z: 16.4, label: "01.27" },
        { x: 34, z: 20.5, label: "01.28a" },
        { x: 32.8, z: 18.9, label: "01.28b" },
        { x: 35.2, z: 18.9, label: "01.28c" },
        { x: 37.6, z: 18.9, label: "01.28d" },
        { x: 23.5, z: 19.7, label: "01.28d" },
        { x: 23.5, z: 19.7, label: "01.28d" },
        { x: 32.7, z: 23.3, label: "01.40" },
        { x: 37.4, z: 22.8, label: "01.52" },
        { x: 37.4, z: 24.9, label: "01.30" },
        { x: 37.4, z: 32, label: "01.51" },
        { x: 36.4, z: 43, label: "01.31" },
        { x: 38.1, z: 43, label: "01.19" },
        { x: 37.4, z: 49.8, label: "01.61" },
        { x: -35.8, z: 52.6, label: "01.53" },
        { x: -35.8, z: 48.7, label: "01.54" },
        { x: -35.8, z: 43.4, label: "01.57" },
        { x: -31.6, z: 49.8, label: "V6" },
        { x: -30, z: 49.8, label: "01.56" },
        { x: -30.8, z: 47.8, label: "01.55" },
        { x: -29.9, z: 43, label: "01.35" },
        { x: -30.7, z: 36.7, label: "01.34" },
        { x: -31.8, z: 34.6, label: "01.37c" },
        { x: -30.2, z: 34.6, label: "01.37b" },
      ],
    },
    {
      id: 0,
      name: "1NP",
      type: "underground",
      dimensions: {
        width: 120,
        depth: 120,
      },
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },
        walls: [
          {
            //Kostka - vnejsi vrsek 1
            type: "partition",
            start: { x: -17.91, z: 17.91 },
            end: { x: -9, z: 17.91 },
          },
          {
            //Kostka - vnejsi vrsek 2
            type: "partition",
            start: { x: -7.8, z: 17.91 },
            end: { x: -3.6, z: 17.91 },
          },
          {
            //Kostka - vnejsi vrsek 3
            type: "partition",
            start: { x: -1.8, z: 17.91 },
            end: { x: 0.61, z: 17.91 },
          },
          {
            //Kostka - vnejsi vrsek 4
            type: "partition",
            start: { x: 1.79, z: 17.91 },
            end: { x: 17.91, z: 17.91 },
          },
          {
            //Kostka - vnejsi leva
            type: "partition",
            start: { x: -17.91, z: 17.91 },
            end: { x: -17.91, z: -17.91 },
          },
          {
            //Kostka - vnejsi prava
            type: "partition",
            start: { x: 17.91, z: 17.91 },
            end: { x: 17.91, z: -17.91 },
          },
          {
            //Kostka - vnejsi spodni 1
            type: "partition",
            start: { x: -17.91, z: -17.91 },
            end: { x: -7.68, z: -17.91 },
          },
          {
            //Kostka - vnejsi spodni 2
            type: "partition",
            start: { x: -5.48, z: -17.91 },
            end: { x: -4.08, z: -17.91 },
          },
          {
            //Kostka - vnejsi spodni 3
            type: "partition",
            start: { x: -1.88, z: -17.91 },
            end: { x: 7.76, z: -17.91 },
          },
          {
            //Kostka - vnejsi spodni 4
            type: "partition",
            start: { x: 10.2, z: -17.91 },
            end: { x: 17.91, z: -17.91 },
          },
          {
            //Kostka - vnitrni vrsek 1
            type: "partition",
            start: { x: -16.8, z: 16.8 },
            end: { x: -10.2, z: 16.8 },
          },
          {
            //Kostka - vnitrni vrsek 2
            type: "partition",
            start: { x: 10.2, z: 16.8 },
            end: { x: 16.8, z: 16.8 },
          },
          {
            //Kostka - vnitrni prava
            type: "partition",
            start: { x: 16.8, z: 16.8 },
            end: { x: 16.8, z: -16.8 },
          },
          {
            //Kostka - vnitrni spodni 3
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 16.8, z: -16.8 },
          },
          {
            //Kostka - vnitrni spodni 2
            type: "partition",
            start: { x: 2.97, z: -16.8 },
            end: { x: 6.6, z: -16.8 },
          },
          {
            //Kostka - vnitrni spodni 1
            type: "partition",
            start: { x: -16.8, z: -16.8 },
            end: { x: -8.93, z: -16.8 },
          },
          {
            //Kostka - vnitrni leva
            type: "partition",
            start: { x: -16.8, z: 16.8 },
            end: { x: -16.8, z: -16.8 },
          },
          {
            //schodiste11 vnejsi leva
            type: "partition",
            start: { x: -0.6, z: 4.8 },
            end: { x: -0.6, z: -4.8 },
            partitionWidth: 0.05,
          },
          {
            //schodiste11 vnejsi prava
            type: "partition",
            start: { x: 4.2, z: -4.8 },
            end: { x: 4.2, z: 4.8 },
            partitionWidth: 0.05,
          },
          {
            //schodiste11 vnejsi vrchni
            type: "partition",
            start: { x: 4.225, z: 4.8 },
            end: { x: -0.625, z: 4.8 },
            partitionWidth: 0.05,
          },
          {
            //schodiste11 vnitrni
            type: "partition",
            start: { x: 1.8, z: 2.37 },
            end: { x: 1.8, z: -2.37 },
            partitionWidth: 0.2,
          },
          {
            //1.13 spodni stena
            type: "partition",
            start: { x: -16.8, z: 10.2 },
            end: { x: -10.2, z: 10.2 },
            partitionWidth: 0.1,
          },
          {
            //Schodiste02 - leva
            type: "partition",
            start: { x: -9.925, z: 16.8 },
            end: { x: -9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste02 - spodni
            type: "partition",
            start: { x: -9.65, z: 10.075 },
            end: { x: -7.15, z: 10.075 },
            partitionWidth: 0.95,
          },
          {
            //Schodiste02 - prava
            type: "partition",
            start: { x: -6.875, z: 16.8 },
            end: { x: -6.875, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste02 - vrchni leva
            type: "partition",
            start: { x: -10.2, z: 16.875 },
            end: { x: -9, z: 16.875 },
            partitionWidth: 0.15,
          },
          {
            //Schodiste02 - vrchni prava
            type: "partition",
            start: { x: -7.8, z: 16.875 },
            end: { x: -6.61, z: 16.875 },
            partitionWidth: 0.15,
          },
          {
            //V4 - vrchni
            type: "partition",
            start: { x: -6.6, z: 16.7 },
            end: { x: -3.6, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //V4 - prava
            type: "partition",
            start: { x: -3.95, z: 16.6 },
            end: { x: -3.95, z: 16.145 },
            partitionWidth: 0.2,
          },
          {
            //V5 - vrchni
            type: "partition",
            start: { x: -6.6, z: 14.95 },
            end: { x: -4.05, z: 14.95 },
            partitionWidth: 0.2,
          },
          {
            //V5 - prava
            type: "partition",
            start: { x: -3.95, z: 15.145 },
            end: { x: -3.95, z: 14.445 },
            partitionWidth: 0.2,
          },
          {
            //1.03 - vrchni
            type: "partition",
            start: { x: -6.6, z: 13.375 },
            end: { x: -4.05, z: 13.375 },
            partitionWidth: 0.15,
          },
          {
            //1.03 - prava
            type: "partition",
            start: { x: -3.95, z: 13.545 },
            end: { x: -3.95, z: 12.85 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - vrchni
            type: "partition",
            start: { x: -6.6, z: 11.675 },
            end: { x: -4.05, z: 11.675 },
            partitionWidth: 0.15,
          },
          {
            //1.06 - prava
            type: "partition",
            start: { x: -3.95, z: 11.85 },
            end: { x: -3.95, z: 11.15 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - prava 2
            type: "partition",
            start: { x: -3.95, z: 10.15 },
            end: { x: -3.95, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - spodni
            type: "partition",
            start: { x: -6.6, z: 9.7 },
            end: { x: -3.35, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - vrchni
            type: "partition",
            start: { x: -1.8, z: 16.7 },
            end: { x: 0.61, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //1.16 - vrchni
            type: "partition",
            start: { x: 1.79, z: 16.7 },
            end: { x: 10.2, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 16.145 },
            partitionWidth: 0.4,
          },
          {
            //1.19 - leva 2
            type: "partition",
            start: { x: -0.95, z: 15.145 },
            end: { x: -0.95, z: 9.8 },
            partitionWidth: 0.4,
          },
          {
            //V1 - spodni
            type: "partition",
            start: { x: -1.45, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - spodni
            type: "partition",
            start: { x: -0.75, z: 14.15 },
            end: { x: 3.25, z: 14.15 },
            partitionWidth: 0.3,
          },
          {
            //1.19 - prava spodni
            type: "partition",
            start: { x: 3.325, z: 14 },
            end: { x: 3.325, z: 15.095 },
            partitionWidth: 0.15,
          },
          {
            //1.19 - prava horni
            type: "partition",
            start: { x: 3.325, z: 16.145 },
            end: { x: 3.325, z: 16.6 },
            partitionWidth: 0.15,
          },
          {
            //1.16 - spodni
            type: "partition",
            start: { x: 3.4, z: 14.15 },
            end: { x: 4.5, z: 14.15 },
            partitionWidth: 0.3,
          },
          {
            //sachta - spodni
            type: "partition",
            start: { x: -0.75, z: 11.8 },
            end: { x: 4.5, z: 11.8 },
            partitionWidth: 0.2,
          },
          {
            //V1 - prava
            type: "partition",
            start: { x: 1.06, z: 11.7 },
            end: { x: 1.06, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //V2 - prava
            type: "partition",
            start: { x: 2.86, z: 11.7 },
            end: { x: 2.86, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //1.16 - prava
            type: "partition",
            start: { x: 4.775, z: 16.6 },
            end: { x: 4.775, z: 11.7 },
            partitionWidth: 0.55,
          },
          {
            //V3 - prava
            type: "partition",
            start: { x: 4.8125, z: 11.7 },
            end: { x: 4.8125, z: 9.8 },
            partitionWidth: 0.475,
          },
          {
            //V3 - spodni
            type: "partition",
            start: { x: 4.23, z: 9.7 },
            end: { x: 5.05, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.08 - prava
            type: "partition",
            start: { x: 9.925, z: 16.6 },
            end: { x: 9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //sachta2 - spodni
            type: "partition",
            start: { x: 5.05, z: 15.2 },
            end: { x: 9.65, z: 15.2 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - prava vrchni
            type: "partition",
            start: { x: 7.325, z: 15.1 },
            end: { x: 7.325, z: 13.3 },
            partitionWidth: 0.25,
          },
          {
            //1.07 - prava spodni
            type: "partition",
            start: { x: 7.3, z: 13.3 },
            end: { x: 7.3, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - spodni
            type: "partition",
            start: { x: 6.05, z: 9.7 },
            end: { x: 8.65, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - partition 1 leva
            type: "partition",
            start: { x: 5.05, z: 13.275 },
            end: { x: 5.125, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 1 prava
            type: "partition",
            start: { x: 6.025, z: 13.275 },
            end: { x: 7.2, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 2 leva
            type: "partition",
            start: { x: 5.05, z: 11.525 },
            end: { x: 5.125, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 2 prava
            type: "partition",
            start: { x: 6.025, z: 11.525 },
            end: { x: 7.2, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 1 leva
            type: "partition",
            start: { x: 7.4, z: 13.275 },
            end: { x: 8.675, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 1 prava
            type: "partition",
            start: { x: 9.575, z: 13.275 },
            end: { x: 9.65, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 2 leva
            type: "partition",
            start: { x: 7.4, z: 11.525 },
            end: { x: 8.3, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - zachod prava 1
            type: "partition",
            start: { x: 8.325, z: 11.575 },
            end: { x: 8.325, z: 11.5 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - zachod prava 2
            type: "partition",
            start: { x: 8.325, z: 13.3 },
            end: { x: 8.325, z: 12.275 },
            partitionWidth: 0.05,
          },
          {
            //1.09a - spodni
            type: "partition",
            start: { x: -16.8, z: -10 },
            end: { x: -11.85, z: -10 },
            partitionWidth: 0.4,
          },
          {
            //1.09a - leva
            type: "partition",
            start: { x: -16.5, z: -8.2 },
            end: { x: -16.5, z: -9.8 },
            partitionWidth: 0.6,
          },
          {
            //1.09a - partition
            type: "partition",
            start: { x: -13.6, z: -8.2 },
            end: { x: -13.6, z: -9.8 },
            partitionWidth: 0.22,
          },
          {
            //1.09a - vrchni
            type: "partition",
            start: { x: -16.8, z: -8 },
            end: { x: -11.85, z: -8 },
            partitionWidth: 0.4,
          },
          {
            //1.09b - spodni
            type: "partition",
            start: { x: -11.85, z: -9.85 },
            end: { x: -10.2, z: -9.85 },
            partitionWidth: 0.7,
          },
          {
            //1.09b - vrchni
            type: "partition",
            start: { x: -11.85, z: -8.15 },
            end: { x: -10.2, z: -8.15 },
            partitionWidth: 0.7,
          },
          {
            //1.15 leva
            type: "partition",
            start: { x: -8.93, z: -17.91 },
            end: { x: -8.93, z: -13.875 },
            partitionWidth: 0.1,
          },
          {
            //1.15 vrchni 1
            type: "partition",
            start: { x: -8.98, z: -13.875 },
            end: { x: -7.68, z: -13.875 },
            partitionWidth: 0.1,
          },
          {
            //1.15 vertilalni 1
            type: "partition",
            start: { x: -7.73, z: -13.875 },
            end: { x: -7.73, z: -14.215 },
            partitionWidth: 0.1,
          },
          {
            //1.15 vertilalni 1 spodni
            type: "partition",
            start: { x: -7.73, z: -17.935 },
            end: { x: -7.73, z: -17.545 },
            partitionWidth: 0.1,
          },
          {
            //1.15 vrchni 2
            type: "partition",
            start: { x: -5.48, z: -13.875 },
            end: { x: -4.08, z: -13.875 },
            partitionWidth: 0.1,
          },
          {
            //1.15 vertilalni 2
            type: "partition",
            start: { x: -5.43, z: -13.875 },
            end: { x: -5.43, z: -14.215 },
            partitionWidth: 0.1,
          },
          {
            //1.15 vertilalni 3
            type: "partition",
            start: { x: -4.13, z: -13.875 },
            end: { x: -4.13, z: -14.215 },
            partitionWidth: 0.1,
          },
          {
            //1.15 vertilalni 2 spodni
            type: "partition",
            start: { x: -5.43, z: -17.935 },
            end: { x: -5.43, z: -17.545 },
            partitionWidth: 0.1,
          },
          {
            //1.15 vertilalni 3 spodni
            type: "partition",
            start: { x: -4.13, z: -17.935 },
            end: { x: -4.13, z: -17.545 },
            partitionWidth: 0.1,
          },
          {
            //1.14 vrchni
            type: "partition",
            start: { x: -1.88, z: -13.875 },
            end: { x: 3.02, z: -13.875 },
            partitionWidth: 0.1,
          },
          {
            //1.14 vertilalni
            type: "partition",
            start: { x: -1.83, z: -13.875 },
            end: { x: -1.83, z: -14.215 },
            partitionWidth: 0.1,
          },
          {
            //1.14 vertilalni spodni
            type: "partition",
            start: { x: -1.83, z: -17.935 },
            end: { x: -1.83, z: -17.545 },
            partitionWidth: 0.1,
          },
          {
            //1.14 prava vrchni
            type: "partition",
            start: { x: 2.97, z: -13.875 },
            end: { x: 2.97, z: -15.2 },
            partitionWidth: 0.1,
          },
          {
            //1.14 prava spodni
            type: "partition",
            start: { x: 2.97, z: -16.2 },
            end: { x: 2.97, z: -17.935 },
            partitionWidth: 0.1,
          },
          {
            //1.14 leva
            type: "partition",
            start: { x: 0.555, z: -13.875 },
            end: { x: 0.555, z: -17.91 },
            partitionWidth: 0.1,
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 6.875, z: -15.7 },
            end: { x: 6.875, z: -10.2 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 9.925, z: -16.8 },
            end: { x: 9.925, z: -10.2 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste01 - vrchni
            type: "partition",
            start: { x: 7.15, z: -10.425 },
            end: { x: 9.65, z: -10.425 },
            partitionWidth: 0.45,
          },
          {
            //Schodiste01 - spodni leva
            type: "partition",
            start: { x: 6.6, z: -16.875 },
            end: { x: 7.76, z: -16.875 },
            partitionWidth: 0.15,
          },
          {
            //Schodiste01 - spodni prava
            type: "partition",
            start: { x: 8.94, z: -16.875 },
            end: { x: 10.15, z: -16.875 },
            partitionWidth: 0.15,
          },
        ],
      },
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [{ x: 12, z: 9, value: 28 }],
        wifi: [
          { x: 18, z: 12, value: 75 },
          { x: 6, z: 21, value: 70 },
        ],
        airQuality: [{ x: 30, z: 8, value: 60 }],
      },
      roomLabels: [
        { x: -13.5, z: 13.5, label: "1.13" },
        { x: -8.25, z: 15.5, label: "1.02" },
        { x: -5.4, z: 15.8, label: "V4" },
        { x: -5.4, z: 14.1, label: "V5" },
        { x: -5.4, z: 12.5, label: "1.03" },
        { x: -5.4, z: 10.7, label: "1.06" },
        { x: -2.5, z: 13.5, label: "1.04" },
        { x: 1.3, z: 15.5, label: "1.19" },
        { x: 4, z: 15.5, label: "1.16" },
        { x: 0.1, z: 10.6, label: "V1" },
        { x: 1.95, z: 10.6, label: "V2" },
        { x: 3.8, z: 10.6, label: "V3" },
        { x: 6.15, z: 12.4, label: "1.07" },
        { x: 9, z: 12.4, label: "1.08" },
        { x: 0, z: 7.5, label: "1.10" },
        { x: 1.8, z: -3.5, label: "1.11" },
        { x: 13.5, z: -8, label: "1.12" },
        { x: -12.7, z: -9, label: "1.09a" },
        { x: -11, z: -9, label: "1.09b" },
        { x: 8.4, z: -13.5, label: "1.01" },
        { x: -4.75, z: -16, label: "1.15" },
        { x: 1.8, z: -16, label: "1.14" },
      ],
    },
    {
      id: 1,
      name: "2NP",
      type: "underground",
      dimensions: {
        width: 35.82,
        depth: 35.82,
      },
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },

        walls: [
          {
            type: "outline",
            points: [
              { x: -17.91, z: -17.91 },
              { x: 17.91, z: -17.91 },
              { x: 17.91, z: 17.91 },
              { x: -17.91, z: 17.91 },
            ],
          },

          {
            type: "outline",
            points: [
              { x: -16.8, z: -16.8 },
              { x: 16.8, z: -16.8 },
              { x: 16.8, z: 16.8 },
              { x: -16.8, z: 16.8 },
            ],
          },
          {
            //schody tocite v pravo nahore
            type: "circular",
            center: { x: 13.5, z: 7.2 },
            radius: 1.515,
          },
          {
            //schody tocite v pravo nahore sloup
            type: "circular",
            center: { x: 13.5, z: 7.2 },
            radius: 0,
            circularWidth: 0.8,
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 9.925, z: -16.8 },
            end: { x: 9.925, z: -10.07 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 8.35, z: -10.2 },
            partitionWidth: 0.26,
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 6.875, z: -10.2 },
            end: { x: 6.875, z: -16.8 },
            partitionWidth: 0.55,
          },

          {
            //Rozvadece - dolni
            type: "partition",
            start: { x: -16.8, z: -10 },
            end: { x: -10.2, z: -10 },
            partitionWidth: 0.4,
          },
          {
            //Rozvadece - horni
            type: "partition",
            start: { x: -16.8, z: -8 },
            end: { x: -10.2, z: -8 },
            partitionWidth: 0.4,
          },
          {
            //Rozdelovace - leva
            type: "partition",
            start: { x: -16.5, z: -8.2 },
            end: { x: -16.5, z: -9.8 },
            partitionWidth: 0.6,
          },
          {
            //Rozdelovace - prava
            type: "partition",
            start: { x: -13.59, z: -8.2 },
            end: { x: -13.59, z: -9.8 },
          },
          {
            //Rozdelovace - spodni
            type: "partition",
            start: { x: -16.2, z: -9.8 },
            end: { x: -13.59, z: -9.8 },
          },
          {
            //Rozdelovace prava - horni
            type: "partition",
            start: { x: -13.59, z: -8.2 },
            end: { x: -11.95, z: -8.2 },
          },
          {
            //Rozdelovace mala stena - nahore
            type: "partition",
            start: { x: -11.95, z: -8.35 },
            end: { x: -10.2, z: -8.35 },
            partitionWidth: 0.3,
          },
          {
            //Rozdelovace mala stena - dole
            type: "partition",
            start: { x: -11.95, z: -9.65 },
            end: { x: -10.2, z: -9.65 },
            partitionWidth: 0.3,
          },
          {
            //2.13 - dole
            type: "partition",
            start: { x: -4.93, z: -15.6 },
            end: { x: -2.43, z: -15.6 },
            partitionWidth: 0.1,
          },
          {
            //2.13 - nahore
            type: "partition",
            start: { x: -4.93, z: -11.4 },
            end: { x: -2.43, z: -11.4 },
            partitionWidth: 0.1,
          },
          {
            //2.13 - vlevo
            type: "partition",
            start: { x: -4.88, z: -11.4 },
            end: { x: -4.88, z: -15.6 },
            partitionWidth: 0.1,
          },
          {
            //2.13 - vpravo
            type: "partition",
            start: { x: -2.48, z: -12.3 },
            end: { x: -2.48, z: -15.6 },
            partitionWidth: 0.1,
          },
          //2.14 - vlevo
          {
            type: "partition",
            start: { x: -10.2, z: -4.8 },
            end: { x: -10.2, z: -0.4 },
            partitionWidth: 0.1,
          },
          //2.14 - vpravo
          {
            type: "partition",
            start: { x: -6, z: -4.8 },
            end: { x: -6, z: -1.3 },
            partitionWidth: 0.1,
          },
          //2.14 - dole
          {
            type: "partition",
            start: { x: -5.95, z: -4.8 },
            end: { x: -10.25, z: -4.8 },
            partitionWidth: 0.1,
          },
          //2.14 - nahore
          {
            type: "partition",
            start: { x: -5.95, z: -0.4 },
            end: { x: -10.25, z: -0.4 },
            partitionWidth: 0.1,
          },
          {
            //schodiste11 vnejsi leva
            type: "partition",
            start: { x: -0.6, z: 4.8 },
            end: { x: -0.6, z: -4.8 },
            partitionWidth: 0.05,
          },
          {
            //schodiste11 vnejsi spodni
            type: "partition",
            start: { x: -0.625, z: -4.8 },
            end: { x: 4.225, z: -4.8 },
            partitionWidth: 0.05,
          },

          {
            //schodiste11 vnejsi prava
            type: "partition",
            start: { x: 4.2, z: -4.8 },
            end: { x: 4.2, z: 4.8 },
            partitionWidth: 0.05,
          },
          {
            //schodiste11 vnejsi prava
            type: "partition",
            start: { x: 2.025, z: 4.8 },
            end: { x: -0.625, z: 4.8 },
            partitionWidth: 0.05,
          },

          {
            //schodiste11 vnitrni leva
            type: "partition",
            start: { x: 1.8, z: 2.37 },
            end: { x: 1.8, z: -2.37 },
            partitionWidth: 0.2,
          },

          //2.18 vlevo
          {
            type: "partition",
            start: { x: 8.3, z: 4.8 },
            end: { x: 8.3, z: 1.5 },
            partitionWidth: 0.1,
          },
          //2.18 vpravo
          {
            type: "partition",
            start: { x: 5.9, z: 4.8 },
            end: { x: 5.9, z: 0.6 },
            partitionWidth: 0.1,
          },
          //2.18 dole
          {
            type: "partition",
            start: { x: 5.85, z: 0.6 },
            end: { x: 8.35, z: 0.6 },
            partitionWidth: 0.1,
          },
          //2.18 nahore
          {
            type: "partition",
            start: { x: 5.85, z: 4.8 },
            end: { x: 8.35, z: 4.8 },
            partitionWidth: 0.1,
          },
          {
            //2.15 vlevo
            type: "partition",
            start: { x: -15.6, z: 13.8 },
            end: { x: -15.6, z: 9.6 },
            partitionWidth: 0.1,
          },
          {
            //2.15 vpravo
            type: "partition",
            start: { x: -11.4, z: 13.8 },
            end: { x: -11.4, z: 10.5 },
            partitionWidth: 0.1,
          },
          {
            //2.15 dole
            type: "partition",
            start: { x: -15.65, z: 9.6 },
            end: { x: -11.35, z: 9.6 },
            partitionWidth: 0.1,
          },
          {
            //2.15 nahore
            type: "partition",
            start: { x: -15.65, z: 13.8 },
            end: { x: -11.35, z: 13.8 },
            partitionWidth: 0.1,
          },
          {
            //Schodiste02 - leva
            type: "partition",
            start: { x: -9.925, z: 16.8 },
            end: { x: -9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste02 - spodni
            type: "partition",
            start: { x: -8.35, z: 9.7 },
            end: { x: -7.15, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //Schodiste02 - prava
            type: "partition",
            start: { x: -6.875, z: 16.8 },
            end: { x: -6.875, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //V4 - vrchni
            type: "partition",
            start: { x: -9.65, z: 16.7 },
            end: { x: 0.61, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //V4 - prava
            type: "partition",
            start: { x: -3.95, z: 16.6 },
            end: { x: -3.95, z: 16.145 },
            partitionWidth: 0.2,
          },
          {
            //V5 - vrchni
            type: "partition",
            start: { x: -6.6, z: 14.95 },
            end: { x: -4.05, z: 14.95 },
            partitionWidth: 0.2,
          },
          {
            //V5 - prava
            type: "partition",
            start: { x: -3.95, z: 15.145 },
            end: { x: -3.95, z: 14.445 },
            partitionWidth: 0.2,
          },
          {
            //1.03 - vrchni
            type: "partition",
            start: { x: -6.6, z: 13.375 },
            end: { x: -4.05, z: 13.375 },
            partitionWidth: 0.15,
          },
          {
            //1.03 - prava
            type: "partition",
            start: { x: -3.95, z: 13.545 },
            end: { x: -3.95, z: 12.85 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - vrchni
            type: "partition",
            start: { x: -6.6, z: 11.675 },
            end: { x: -4.05, z: 11.675 },
            partitionWidth: 0.15,
          },
          {
            //1.06 - prava
            type: "partition",
            start: { x: -3.95, z: 11.85 },
            end: { x: -3.95, z: 11.15 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - prava 2
            type: "partition",
            start: { x: -3.95, z: 10.15 },
            end: { x: -3.95, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - spodni
            type: "partition",
            start: { x: -6.6, z: 9.7 },
            end: { x: -3.35, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.16 - vrchni
            type: "partition",
            start: { x: 1.79, z: 16.7 },
            end: { x: 10.2, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 16.145 },
            partitionWidth: 0.4,
          },
          {
            //1.19 - leva 2
            type: "partition",
            start: { x: -0.95, z: 15.145 },
            end: { x: -0.95, z: 9.8 },
            partitionWidth: 0.4,
          },
          {
            //V1 - spodni
            type: "partition",
            start: { x: -1.45, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - spodni
            type: "partition",
            start: { x: -0.75, z: 14.15 },
            end: { x: 3.25, z: 14.15 },
            partitionWidth: 0.3,
          },
          {
            //1.19 - prava spodni
            type: "partition",
            start: { x: 3.325, z: 14 },
            end: { x: 3.325, z: 15.095 },
            partitionWidth: 0.15,
          },
          {
            //1.19 - prava horni
            type: "partition",
            start: { x: 3.325, z: 16.145 },
            end: { x: 3.325, z: 16.6 },
            partitionWidth: 0.15,
          },
          {
            //1.16 - spodni
            type: "partition",
            start: { x: 3.4, z: 14.15 },
            end: { x: 4.5, z: 14.15 },
            partitionWidth: 0.3,
          },
          {
            //sachta - spodni
            type: "partition",
            start: { x: -0.75, z: 11.8 },
            end: { x: 4.5, z: 11.8 },
            partitionWidth: 0.2,
          },
          {
            //V1 - prava
            type: "partition",
            start: { x: 1.06, z: 11.7 },
            end: { x: 1.06, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //V2 - prava
            type: "partition",
            start: { x: 2.86, z: 11.7 },
            end: { x: 2.86, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //1.16 - prava
            type: "partition",
            start: { x: 4.775, z: 16.6 },
            end: { x: 4.775, z: 11.7 },
            partitionWidth: 0.55,
          },
          {
            //V3 - prava
            type: "partition",
            start: { x: 4.8125, z: 11.7 },
            end: { x: 4.8125, z: 9.8 },
            partitionWidth: 0.475,
          },
          {
            //V3 - spodni
            type: "partition",
            start: { x: 4.23, z: 9.7 },
            end: { x: 5.05, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.08 - prava
            type: "partition",
            start: { x: 9.925, z: 16.6 },
            end: { x: 9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //sachta2 - spodni
            type: "partition",
            start: { x: 5.05, z: 15.2 },
            end: { x: 9.65, z: 15.2 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - prava vrchni
            type: "partition",
            start: { x: 7.325, z: 15.1 },
            end: { x: 7.325, z: 13.3 },
            partitionWidth: 0.25,
          },
          {
            //1.07 - prava spodni
            type: "partition",
            start: { x: 7.3, z: 13.3 },
            end: { x: 7.3, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - spodni
            type: "partition",
            start: { x: 6.05, z: 9.7 },
            end: { x: 8.65, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - partition 1 leva
            type: "partition",
            start: { x: 5.05, z: 13.275 },
            end: { x: 5.125, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 1 prava
            type: "partition",
            start: { x: 6.025, z: 13.275 },
            end: { x: 7.2, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 2 leva
            type: "partition",
            start: { x: 5.05, z: 11.525 },
            end: { x: 5.125, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 2 prava
            type: "partition",
            start: { x: 6.025, z: 11.525 },
            end: { x: 7.2, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 1 leva
            type: "partition",
            start: { x: 7.4, z: 13.275 },
            end: { x: 8.675, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 1 prava
            type: "partition",
            start: { x: 9.575, z: 13.275 },
            end: { x: 9.65, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 2 leva
            type: "partition",
            start: { x: 7.4, z: 11.525 },
            end: { x: 8.3, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - zachod prava 1
            type: "partition",
            start: { x: 8.325, z: 11.575 },
            end: { x: 8.325, z: 11.5 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - zachod prava 2
            type: "partition",
            start: { x: 8.325, z: 13.3 },
            end: { x: 8.325, z: 12.275 },
            partitionWidth: 0.05,
          },
        ],
      },
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [
          { x: 7, z: 17, value: 25 },
          { x: 19, z: 9, value: 29 },
          { x: 13, z: 5, value: 30 },
        ],
        wifi: [{ x: 24, z: 12, value: 80 }],
        airQuality: [
          { x: 9, z: 11, value: 50 },
          { x: 16, z: 7, value: 58 },
        ],
      },
      roomLabels: [
        //2NP
        { x: 7.1, z: 3, label: "2.18" },
        { x: -13.5, z: 11.7, label: "2.15" },
        { x: -8, z: -2.8, label: "2.14" },
        { x: 1.8, z: -3.5, label: "2.11" },
        { x: -3.6, z: -13, label: "2.13" },
        { x: 0, z: 7, label: "2.16" },
        { x: -12.7, z: -9, label: "2.09a" },
        { x: -11, z: -9, label: "2.09b" },
        { x: 8.5, z: -15, label: "2.01" },
        { x: -8.25, z: 15.5, label: "2.02" },
        { x: -5.4, z: 15.8, label: "V4" },
        { x: -5.4, z: 14.1, label: "V5" },
        { x: -5.4, z: 12.5, label: "2.03" },
        { x: -5.4, z: 10.7, label: "2.06" },
        { x: 1.3, z: 15.5, label: "2.05" },
        { x: 4, z: 15.5, label: "2.17" },
        { x: 0.1, z: 10.6, label: "V1" },
        { x: 1.95, z: 10.6, label: "V2" },
        { x: 3.8, z: 10.6, label: "V3" },
        { x: 6.15, z: 12.4, label: "2.07" },
        { x: 9, z: 12.4, label: "2.08" },
        { x: -2.5, z: 13.5, label: "2.04" },
      ],
    },
    {
      id: 2,
      name: "3NP",
      type: "underground",
      dimensions: {
        width: 35.82,
        depth: 35.82,
      },
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },
        walls: [
          {
            type: "outline",
            points: [
              { x: -17.91, z: -17.91 },
              { x: 17.91, z: -17.91 },
              { x: 17.91, z: 17.91 },
              { x: -17.91, z: 17.91 },
            ],
          },
          {
            type: "outline",
            points: [
              { x: -16.8, z: -16.8 },
              { x: 16.8, z: -16.8 },
              { x: 16.8, z: 16.8 },
              { x: -16.8, z: 16.8 },
            ],
          },
          {
            //Schodiste02 - leva
            type: "partition",
            start: { x: -9.925, z: 16.8 },
            end: { x: -9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste02 - spodni
            type: "partition",
            start: { x: -8.35, z: 9.7 },
            end: { x: -7.15, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //Schodiste02 - prava
            type: "partition",
            start: { x: -6.875, z: 16.8 },
            end: { x: -6.875, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //V4 - vrchni
            type: "partition",
            start: { x: -9.65, z: 16.7 },
            end: { x: 0.61, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //V4 - prava
            type: "partition",
            start: { x: -3.95, z: 16.6 },
            end: { x: -3.95, z: 16.145 },
            partitionWidth: 0.2,
          },
          {
            //V5 - vrchni
            type: "partition",
            start: { x: -6.6, z: 14.95 },
            end: { x: -4.05, z: 14.95 },
            partitionWidth: 0.2,
          },
          {
            //V5 - prava
            type: "partition",
            start: { x: -3.95, z: 15.145 },
            end: { x: -3.95, z: 14.445 },
            partitionWidth: 0.2,
          },
          {
            //1.03 - vrchni
            type: "partition",
            start: { x: -6.6, z: 13.375 },
            end: { x: -4.05, z: 13.375 },
            partitionWidth: 0.15,
          },
          {
            //1.03 - prava
            type: "partition",
            start: { x: -3.95, z: 13.545 },
            end: { x: -3.95, z: 12.85 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - vrchni
            type: "partition",
            start: { x: -6.6, z: 11.675 },
            end: { x: -4.05, z: 11.675 },
            partitionWidth: 0.15,
          },
          {
            //1.06 - prava
            type: "partition",
            start: { x: -3.95, z: 11.85 },
            end: { x: -3.95, z: 11.15 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - prava 2
            type: "partition",
            start: { x: -3.95, z: 10.15 },
            end: { x: -3.95, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - spodni
            type: "partition",
            start: { x: -6.6, z: 9.7 },
            end: { x: -3.35, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.16 - vrchni
            type: "partition",
            start: { x: 1.79, z: 16.7 },
            end: { x: 10.2, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 16.145 },
            partitionWidth: 0.4,
          },
          {
            //1.19 - leva 2
            type: "partition",
            start: { x: -0.95, z: 15.145 },
            end: { x: -0.95, z: 9.8 },
            partitionWidth: 0.4,
          },
          {
            //V1 - spodni
            type: "partition",
            start: { x: -1.45, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - spodni
            type: "partition",
            start: { x: -0.75, z: 14.15 },
            end: { x: 3.25, z: 14.15 },
            partitionWidth: 0.3,
          },
          {
            //1.19 - prava spodni
            type: "partition",
            start: { x: 3.325, z: 14 },
            end: { x: 3.325, z: 15.095 },
            partitionWidth: 0.15,
          },
          {
            //1.19 - prava horni
            type: "partition",
            start: { x: 3.325, z: 16.145 },
            end: { x: 3.325, z: 16.6 },
            partitionWidth: 0.15,
          },
          {
            //1.16 - spodni
            type: "partition",
            start: { x: 3.4, z: 14.15 },
            end: { x: 4.5, z: 14.15 },
            partitionWidth: 0.3,
          },
          {
            //sachta - spodni
            type: "partition",
            start: { x: -0.75, z: 11.8 },
            end: { x: 4.5, z: 11.8 },
            partitionWidth: 0.2,
          },
          {
            //V1 - prava
            type: "partition",
            start: { x: 1.06, z: 11.7 },
            end: { x: 1.06, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //V2 - prava
            type: "partition",
            start: { x: 2.86, z: 11.7 },
            end: { x: 2.86, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //1.16 - prava
            type: "partition",
            start: { x: 4.775, z: 16.6 },
            end: { x: 4.775, z: 11.7 },
            partitionWidth: 0.55,
          },
          {
            //V3 - prava
            type: "partition",
            start: { x: 4.8125, z: 11.7 },
            end: { x: 4.8125, z: 9.8 },
            partitionWidth: 0.475,
          },
          {
            //V3 - spodni
            type: "partition",
            start: { x: 4.23, z: 9.7 },
            end: { x: 5.05, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.08 - prava
            type: "partition",
            start: { x: 9.925, z: 16.6 },
            end: { x: 9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //sachta2 - spodni
            type: "partition",
            start: { x: 5.05, z: 15.2 },
            end: { x: 9.65, z: 15.2 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - prava vrchni
            type: "partition",
            start: { x: 7.325, z: 15.1 },
            end: { x: 7.325, z: 13.3 },
            partitionWidth: 0.25,
          },
          {
            //1.07 - prava spodni
            type: "partition",
            start: { x: 7.3, z: 13.3 },
            end: { x: 7.3, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - spodni
            type: "partition",
            start: { x: 6.05, z: 9.7 },
            end: { x: 8.65, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - partition 1 leva
            type: "partition",
            start: { x: 5.05, z: 13.275 },
            end: { x: 5.125, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 1 prava
            type: "partition",
            start: { x: 6.025, z: 13.275 },
            end: { x: 7.2, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 2 leva
            type: "partition",
            start: { x: 5.05, z: 11.525 },
            end: { x: 5.125, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 2 prava
            type: "partition",
            start: { x: 6.025, z: 11.525 },
            end: { x: 7.2, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 1 leva
            type: "partition",
            start: { x: 7.4, z: 13.275 },
            end: { x: 8.675, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 1 prava
            type: "partition",
            start: { x: 9.575, z: 13.275 },
            end: { x: 9.65, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 2 leva
            type: "partition",
            start: { x: 7.4, z: 11.525 },
            end: { x: 8.3, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - zachod prava 1
            type: "partition",
            start: { x: 8.325, z: 11.575 },
            end: { x: 8.325, z: 11.5 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - zachod prava 2
            type: "partition",
            start: { x: 8.325, z: 13.3 },
            end: { x: 8.325, z: 12.275 },
            partitionWidth: 0.05,
          },
          {
            //3.11 leva stena
            type: "partition",
            start: { x: -15.6, z: 4.6 },
            end: { x: -15.6, z: 0.4 },
            partitionWidth: 0.05,
          },
          {
            //3.11 spodni stena
            type: "partition",
            start: { x: -15.625, z: 0.4 },
            end: { x: -11.375, z: 0.4 },
            partitionWidth: 0.05,
          },
          {
            //3.11 prava stena
            type: "partition",
            start: { x: -11.4, z: 0.4 },
            end: { x: -11.4, z: 4.6 },
            partitionWidth: 0.05,
          },
          {
            //3.11 vrchni stena
            type: "partition",
            start: { x: -11.375, z: 4.6 },
            end: { x: -15.625, z: 4.6 },
            partitionWidth: 0.05,
          },
          {
            //3.12 leva strana
            type: "partition",
            start: { x: -4.8, z: -0.8 },
            end: { x: -4.8, z: -5 },
            partitionWidth: 0.05,
          },
          {
            //3.12 spodni strana
            type: "partition",
            start: { x: -4.825, z: -5 },
            end: { x: -2.375, z: -5 },
            partitionWidth: 0.05,
          },
          {
            //3.12 prava strana
            type: "partition",
            start: { x: -2.4, z: -5 },
            end: { x: -2.4, z: -0.8 },
            partitionWidth: 0.05,
          },
          {
            //3.12 vrchni strana
            type: "partition",
            start: { x: -2.375, z: -0.8 },
            end: { x: -4.825, z: -0.8 },
            partitionWidth: 0.05,
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 9.925, z: -16.8 },
            end: { x: 9.925, z: -10.07 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 8.35, z: -10.2 },
            partitionWidth: 0.26,
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 6.875, z: -10.2 },
            end: { x: 6.875, z: -16.8 },
            partitionWidth: 0.55,
          },
          {
            //1.09a - spodni
            type: "partition",
            start: { x: -16.8, z: -10 },
            end: { x: -11.85, z: -10 },
            partitionWidth: 0.4,
          },
          {
            //1.09a - leva
            type: "partition",
            start: { x: -16.5, z: -8.2 },
            end: { x: -16.5, z: -9.8 },
            partitionWidth: 0.6,
          },
          {
            //1.09a - partition
            type: "partition",
            start: { x: -13.6, z: -8.2 },
            end: { x: -13.6, z: -9.8 },
            partitionWidth: 0.22,
          },
          {
            //1.09a - vrchni
            type: "partition",
            start: { x: -16.8, z: -8 },
            end: { x: -11.85, z: -8 },
            partitionWidth: 0.4,
          },
          {
            //1.09b - spodni
            type: "partition",
            start: { x: -11.85, z: -9.85 },
            end: { x: -10.2, z: -9.85 },
            partitionWidth: 0.7,
          },
          {
            //1.09b - vrchni
            type: "partition",
            start: { x: -11.85, z: -8.15 },
            end: { x: -10.2, z: -8.15 },
            partitionWidth: 0.7,
          },
          {
            //schody tocite vpravo nahore vnejsi
            type: "circular",
            center: { x: 13.5, z: 7.2 },
            radius: 1.515,
          },
          {
            //schody tocite vpravo nahore vnitrni
            type: "circular",
            center: { x: 13.5, z: 7.2 },
            circularWidth: 0.8,
            radius: 0,
          },
          {
            //schody tocite dole vlevo vnejsi
            type: "circular",
            center: { x: -7.2, z: -13.5 },
            radius: 1.515,
          },
          {
            //schody tocite dole vlevo vnitrni
            type: "circular",
            center: { x: -7.2, z: -13.5 },
            radius: 0,
            circularWidth: 0.8,
          },
        ],
      },
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [{ x: 8, z: 3, value: 27 }],
        wifi: [
          { x: 10, z: 15, value: 68 },
          { x: 22, z: 20, value: 72 },
        ],
        airQuality: [
          { x: 14, z: 22, value: 55 },
          { x: 19, z: 13, value: 53 },
        ],
      },
      roomLabels: [
        { x: -8.25, z: 15.5, label: "3.02" },
        { x: -5.4, z: 15.8, label: "V4" },
        { x: -5.4, z: 14.1, label: "V5" },
        { x: -5.4, z: 12.5, label: "3.03" },
        { x: -5.4, z: 10.7, label: "3.06" },
        { x: -2.5, z: 13.5, label: "3.04" },
        { x: 1.3, z: 15.5, label: "3.05" },
        { x: 4, z: 15.5, label: "3.14" },
        { x: 0.1, z: 10.6, label: "V1" },
        { x: 1.95, z: 10.6, label: "V2" },
        { x: 3.8, z: 10.6, label: "V3" },
        { x: 6.15, z: 12.4, label: "3.07" },
        { x: 9, z: 12.4, label: "3.08" },
        { x: 14, z: 8, label: "3.15" },
        { x: 0, z: 7.5, label: "3.13" },
        { x: -13.5, z: 2.5, label: "3.11" },
        { x: -3.5, z: -3, label: "3.12" },
        { x: 0, z: -7.5, label: "3.10" },
        { x: -12.7, z: -9, label: "3.09a" },
        { x: -11, z: -9, label: "3.09b" },
        { x: 8.4, z: -13.5, label: "3.01" },
      ],
    },
    {
      id: 3,
      name: "4NP",
      type: "underground",
      dimensions: {
        width: 35.82,
        depth: 35.82,
      },
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },

        walls: [
          {
            type: "outline",
            points: [
              { x: -17.91, z: -17.91 },
              { x: 17.91, z: -17.91 },
              { x: 17.91, z: 17.91 },
              { x: -17.91, z: 17.91 },
            ],
          },

          {
            type: "outline",
            points: [
              { x: -16.8, z: -16.8 },
              { x: 16.8, z: -16.8 },
              { x: 16.8, z: 16.8 },
              { x: -16.8, z: 16.8 },
            ],
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 9.925, z: -16.8 },
            end: { x: 9.925, z: -10.07 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 8.35, z: -10.2 },
            partitionWidth: 0.26,
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 6.875, z: -10.2 },
            end: { x: 6.875, z: -16.8 },
            partitionWidth: 0.55,
          },
          {
            //Rozvadece - dolni
            type: "partition",
            start: { x: -16.8, z: -10 },
            end: { x: -10.2, z: -10 },
            partitionWidth: 0.4,
          },
          {
            //Rozvadece - horni
            type: "partition",
            start: { x: -16.8, z: -8 },
            end: { x: -10.2, z: -8 },
            partitionWidth: 0.4,
          },
          {
            //Rozdelovace - leva
            type: "partition",
            start: { x: -16.5, z: -8.2 },
            end: { x: -16.5, z: -9.8 },
            partitionWidth: 0.6,
          },
          {
            //Rozdelovace - prava
            type: "partition",
            start: { x: -13.59, z: -8.2 },
            end: { x: -13.59, z: -9.8 },
          },
          {
            //Rozdelovace - spodni
            type: "partition",
            start: { x: -16.2, z: -9.8 },
            end: { x: -13.59, z: -9.8 },
          },
          {
            //Rozdelovace prava - horni
            type: "partition",
            start: { x: -13.59, z: -8.2 },
            end: { x: -11.95, z: -8.2 },
          },
          {
            //Rozdelovace mala stena - nahore
            type: "partition",
            start: { x: -11.95, z: -8.35 },
            end: { x: -10.2, z: -8.35 },
            partitionWidth: 0.3,
          },
          {
            //Rozdelovace mala stena - dole
            type: "partition",
            start: { x: -11.95, z: -9.65 },
            end: { x: -10.2, z: -9.65 },
            partitionWidth: 0.3,
          },
          {
            //Schodiste02 - leva
            type: "partition",
            start: { x: -9.925, z: 16.8 },
            end: { x: -9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste02 - spodni
            type: "partition",
            start: { x: -8.35, z: 9.7 },
            end: { x: -7.15, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //Schodiste02 - prava
            type: "partition",
            start: { x: -6.875, z: 16.8 },
            end: { x: -6.875, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //V4 - vrchni
            type: "partition",
            start: { x: -9.65, z: 16.7 },
            end: { x: 0.61, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //V4 - prava
            type: "partition",
            start: { x: -3.95, z: 16.6 },
            end: { x: -3.95, z: 16.145 },
            partitionWidth: 0.2,
          },
          {
            //V5 - vrchni
            type: "partition",
            start: { x: -6.6, z: 14.95 },
            end: { x: -4.05, z: 14.95 },
            partitionWidth: 0.2,
          },
          {
            //V5 - prava
            type: "partition",
            start: { x: -3.95, z: 15.145 },
            end: { x: -3.95, z: 14.445 },
            partitionWidth: 0.2,
          },
          {
            //1.03 - vrchni
            type: "partition",
            start: { x: -6.6, z: 13.375 },
            end: { x: -4.05, z: 13.375 },
            partitionWidth: 0.15,
          },
          {
            //1.03 - prava
            type: "partition",
            start: { x: -3.95, z: 13.545 },
            end: { x: -3.95, z: 12.85 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - vrchni
            type: "partition",
            start: { x: -6.6, z: 11.675 },
            end: { x: -4.05, z: 11.675 },
            partitionWidth: 0.15,
          },
          {
            //1.06 - prava
            type: "partition",
            start: { x: -3.95, z: 11.85 },
            end: { x: -3.95, z: 11.15 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - prava 2
            type: "partition",
            start: { x: -3.95, z: 10.15 },
            end: { x: -3.95, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - spodni
            type: "partition",
            start: { x: -6.6, z: 9.7 },
            end: { x: -3.35, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.16 - vrchni
            type: "partition",
            start: { x: 1.79, z: 16.7 },
            end: { x: 10.2, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 16.145 },
            partitionWidth: 0.4,
          },
          {
            //1.19 - leva 2
            type: "partition",
            start: { x: -0.95, z: 15.145 },
            end: { x: -0.95, z: 9.8 },
            partitionWidth: 0.4,
          },
          {
            //V1 - spodni
            type: "partition",
            start: { x: -1.45, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - spodni
            type: "partition",
            start: { x: -0.75, z: 14.15 },
            end: { x: 3.25, z: 14.15 },
            partitionWidth: 0.3,
          },
          {
            //1.19 - prava spodni
            type: "partition",
            start: { x: 3.325, z: 14 },
            end: { x: 3.325, z: 15.095 },
            partitionWidth: 0.15,
          },
          {
            //1.19 - prava horni
            type: "partition",
            start: { x: 3.325, z: 16.145 },
            end: { x: 3.325, z: 16.6 },
            partitionWidth: 0.15,
          },
          {
            //1.16 - spodni
            type: "partition",
            start: { x: 3.4, z: 14.15 },
            end: { x: 4.5, z: 14.15 },
            partitionWidth: 0.3,
          },
          {
            //sachta - spodni
            type: "partition",
            start: { x: -0.75, z: 11.8 },
            end: { x: 4.5, z: 11.8 },
            partitionWidth: 0.2,
          },
          {
            //V1 - prava
            type: "partition",
            start: { x: 1.06, z: 11.7 },
            end: { x: 1.06, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //V2 - prava
            type: "partition",
            start: { x: 2.86, z: 11.7 },
            end: { x: 2.86, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //1.16 - prava
            type: "partition",
            start: { x: 4.775, z: 16.6 },
            end: { x: 4.775, z: 11.7 },
            partitionWidth: 0.55,
          },
          {
            //V3 - prava
            type: "partition",
            start: { x: 4.8125, z: 11.7 },
            end: { x: 4.8125, z: 9.8 },
            partitionWidth: 0.475,
          },
          {
            //V3 - spodni
            type: "partition",
            start: { x: 4.23, z: 9.7 },
            end: { x: 5.05, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.08 - prava
            type: "partition",
            start: { x: 9.925, z: 16.6 },
            end: { x: 9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //sachta2 - spodni
            type: "partition",
            start: { x: 5.05, z: 15.2 },
            end: { x: 9.65, z: 15.2 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - prava vrchni
            type: "partition",
            start: { x: 7.325, z: 15.1 },
            end: { x: 7.325, z: 13.3 },
            partitionWidth: 0.25,
          },
          {
            //1.07 - prava spodni
            type: "partition",
            start: { x: 7.3, z: 13.3 },
            end: { x: 7.3, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - spodni
            type: "partition",
            start: { x: 6.05, z: 9.7 },
            end: { x: 8.65, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - partition 1 leva
            type: "partition",
            start: { x: 5.05, z: 13.275 },
            end: { x: 5.125, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 1 prava
            type: "partition",
            start: { x: 6.025, z: 13.275 },
            end: { x: 7.2, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 2 leva
            type: "partition",
            start: { x: 5.05, z: 11.525 },
            end: { x: 5.125, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 2 prava
            type: "partition",
            start: { x: 6.025, z: 11.525 },
            end: { x: 7.2, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 1 leva
            type: "partition",
            start: { x: 7.4, z: 13.275 },
            end: { x: 8.675, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 1 prava
            type: "partition",
            start: { x: 9.575, z: 13.275 },
            end: { x: 9.65, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 2 leva
            type: "partition",
            start: { x: 7.4, z: 11.525 },
            end: { x: 8.3, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - zachod prava 1
            type: "partition",
            start: { x: 8.325, z: 11.575 },
            end: { x: 8.325, z: 11.5 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - zachod prava 2
            type: "partition",
            start: { x: 8.325, z: 13.3 },
            end: { x: 8.325, z: 12.275 },
            partitionWidth: 0.05,
          },
          {
            //4.12 vlevo
            type: "partition",
            start: { x: 4.22, z: 4.8 },
            end: { x: 4.22, z: 4.15 },
            partitionWidth: 0.2,
          },
          {
            //4.12 vlevo
            type: "partition",
            start: { x: 4.22, z: 3.25 },
            end: { x: 4.22, z: -4.8 },
            partitionWidth: 0.2,
          },
          {
            //4.12 vpravo
            type: "partition",
            start: { x: 10.02, z: 4.8 },
            end: { x: 10.02, z: 4.15 },
            partitionWidth: 0.2,
          },
          {
            //4.12 vpravo
            type: "partition",
            start: { x: 10.02, z: 3.25 },
            end: { x: 10.02, z: -4.8 },
            partitionWidth: 0.2,
          },
          {
            //4.12 nahore
            type: "partition",
            start: { x: 4.12, z: 4.8 },
            end: { x: 10.12, z: 4.8 },
            partitionWidth: 0.2,
          },
          {
            //4.12 dole
            type: "partition",
            start: { x: 4.12, z: -4.8 },
            end: { x: 10.12, z: -4.8 },
            partitionWidth: 0.2,
          },

          {
            //4.11 - vlevo
            type: "partition",
            start: { x: -8.48, z: -4.8 },
            end: { x: -8.48, z: 0 },
            partitionWidth: 0.1,
          },
          {
            //4.11 - vpravo
            type: "partition",
            start: { x: 2.92, z: -4.8 },
            end: { x: 2.92, z: 0 },
            partitionWidth: 0.1,
          },
          {
            //4.11 - dole
            type: "partition",
            start: { x: 2.97, z: -4.8 },
            end: { x: -8.53, z: -4.8 },
            partitionWidth: 0.1,
          },
          {
            //4.11 - nahore
            type: "partition",
            start: { x: 2.97, z: 0 },
            end: { x: 2.17, z: 0 },
            partitionWidth: 0.1,
          },
          {
            //4.11 - nahore
            type: "partition",
            start: { x: 1.27, z: 0 },
            end: { x: -6.68, z: 0 },
            partitionWidth: 0.1,
          },
          {
            //4.11 - nahore
            type: "partition",
            start: { x: -7.58, z: 0 },
            end: { x: -8.53, z: 0 },
            partitionWidth: 0.1,
          },

          {
            //4.11 - stred
            type: "partition",
            start: { x: -6.08, z: -4.8 },
            end: { x: -6.08, z: 0 },
            partitionWidth: 0.1,
          },
          {
            //4.13a - nahore
            type: "partition",
            start: { x: -8.53, z: -6 },
            end: { x: -8.22, z: -6 },
            partitionWidth: 0.1,
          },
          {
            //4.13a - nahore
            type: "partition",
            start: { x: -7.42, z: -6 },
            end: { x: -7.04, z: -6 },
            partitionWidth: 0.1,
          },
          {
            //4.13a - nahore
            type: "partition",
            start: { x: -6.24, z: -6 },
            end: { x: -6.03, z: -6 },
            partitionWidth: 0.1,
          },

          {
            //4.13a - dole
            type: "partition",
            start: { x: -8.53, z: -8.4 },
            end: { x: -6.03, z: -8.4 },
            partitionWidth: 0.1,
          },
          {
            //4.13a - vlevo
            type: "partition",
            start: { x: -8.48, z: -6 },
            end: { x: -8.48, z: -8.4 },
            partitionWidth: 0.1,
          },
          {
            //4.13a - vpravo
            type: "partition",
            start: { x: -6.08, z: -6 },
            end: { x: -6.08, z: -8.4 },
            partitionWidth: 0.1,
          },
          {
            //4.13a - STRED
            type: "partition",
            start: { x: -7.28, z: -6 },
            end: { x: -7.28, z: -8.4 },
            partitionWidth: 0.1,
          },

          {
            //4.14 - vpravo
            type: "partition",
            start: { x: 15.6, z: 15.6 },
            end: { x: 15.6, z: 9.62 },
            partitionWidth: 0.1,
          },
          {
            //4.14 - vlevo
            type: "partition",
            start: { x: 11.4, z: 14.7 },
            end: { x: 11.4, z: 10.52 },
            partitionWidth: 0.1,
          },

          {
            //4.14 - nahore
            type: "partition",
            start: { x: 15.65, z: 15.6 },
            end: { x: 11.35, z: 15.6 },
            partitionWidth: 0.1,
          },
          {
            //4.14 - dole
            type: "partition",
            start: { x: 15.65, z: 9.62 },
            end: { x: 11.35, z: 9.62 },
            partitionWidth: 0.1,
          },
          {
            //4.14 - prostredek
            type: "partition",
            start: { x: 15.65, z: 12 },
            end: { x: 11.35, z: 12 },
            partitionWidth: 0.1,
          },
          {
            //schody tocite dole vlevo vnejsi
            type: "circular",
            center: { x: -7.2, z: -13.5 },
            radius: 1.515,
          },
          {
            //schody tocite dole vlevo vnitrni
            type: "circular",
            center: { x: -7.2, z: -13.5 },
            radius: 0,
            circularWidth: 0.8,
          },
          {
            //schody tocite vlravo nahore
            type: "circular",
            center: { x: -13.5, z: 7.2 },
            radius: 1.515,
          },
          {
            //schody tocite vlevo nahore sloup
            type: "circular",
            center: { x: -13.5, z: 7.2 },
            radius: 0,
            circularWidth: 0.8,
          },
        ],
      },
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [
          { x: 16, z: 11, value: 30 },
          { x: 25, z: 19, value: 26 },
        ],
        wifi: [{ x: 5, z: 10, value: 70 }],
        airQuality: [
          { x: 28, z: 15, value: 48 },
          { x: 2, z: 16, value: 62 },
        ],
      },
      roomLabels: [
        //4NP
        { x: -8.25, z: 15.5, label: "4.02" },
        { x: -5.4, z: 15.8, label: "V4" },
        { x: -5.4, z: 14.1, label: "V5" },
        { x: -5.4, z: 12.5, label: "4.03" },
        { x: -5.4, z: 10.7, label: "4.06" },
        { x: 1.3, z: 15.5, label: "4.05" },
        { x: 4, z: 15.5, label: "4.18" },
        { x: 0.1, z: 10.6, label: "V1" },
        { x: 1.95, z: 10.6, label: "V2" },
        { x: 3.8, z: 10.6, label: "V3" },
        { x: 6.15, z: 12.4, label: "4.07" },
        { x: 9, z: 12.4, label: "4.08" },
        { x: -2.5, z: 13.5, label: "4.04" },
        { x: 13.5, z: 13.5, label: "4.14" },
        { x: 13.5, z: 10.8, label: "4.15" },
        { x: 7, z: 2, label: "4.12" },
        { x: -2, z: -2.5, label: "4.11" },
        { x: -7.3, z: -2.5, label: "4.16" },
        { x: -7.9, z: -7.3, label: "4.13a" },
        { x: -6.65, z: -7.3, label: "4.13b" },
        { x: -12.7, z: -9, label: "4.09a" },
        { x: -11, z: -9, label: "4.09b" },
        { x: 8.4, z: -13.5, label: "4.01" },
      ],
    },
    {
      id: 4,
      name: "5NP",
      type: "underground",
      dimensions: {
        width: 35.82,
        depth: 35.82,
      },
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },
        walls: [
          {
            type: "outline",
            points: [
              { x: -17.91, z: -17.91 },
              { x: 17.91, z: -17.91 },
              { x: 17.91, z: 17.91 },
              { x: -17.91, z: 17.91 },
            ],
          },
          {
            type: "outline",
            points: [
              { x: -16.8, z: -16.8 },
              { x: 16.8, z: -16.8 },
              { x: 16.8, z: 16.8 },
              { x: -16.8, z: 16.8 },
            ],
          },
          {
            //Schodiste02 - leva
            type: "partition",
            start: { x: -9.925, z: 16.8 },
            end: { x: -9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste02 - spodni
            type: "partition",
            start: { x: -8.35, z: 9.7 },
            end: { x: -7.15, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //Schodiste02 - prava
            type: "partition",
            start: { x: -6.875, z: 16.8 },
            end: { x: -6.875, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //V4 - vrchni
            type: "partition",
            start: { x: -9.65, z: 16.7 },
            end: { x: 0.61, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //V4 - prava
            type: "partition",
            start: { x: -3.95, z: 16.6 },
            end: { x: -3.95, z: 16.145 },
            partitionWidth: 0.2,
          },
          {
            //V5 - vrchni
            type: "partition",
            start: { x: -6.6, z: 14.95 },
            end: { x: -4.05, z: 14.95 },
            partitionWidth: 0.2,
          },
          {
            //V5 - prava
            type: "partition",
            start: { x: -3.95, z: 15.145 },
            end: { x: -3.95, z: 14.445 },
            partitionWidth: 0.2,
          },
          {
            //1.03 - vrchni
            type: "partition",
            start: { x: -6.6, z: 13.375 },
            end: { x: -4.05, z: 13.375 },
            partitionWidth: 0.15,
          },
          {
            //1.03 - prava
            type: "partition",
            start: { x: -3.95, z: 13.545 },
            end: { x: -3.95, z: 12.85 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - vrchni
            type: "partition",
            start: { x: -6.6, z: 11.675 },
            end: { x: -4.05, z: 11.675 },
            partitionWidth: 0.15,
          },
          {
            //1.06 - prava
            type: "partition",
            start: { x: -3.95, z: 11.85 },
            end: { x: -3.95, z: 11.15 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - prava 2
            type: "partition",
            start: { x: -3.95, z: 10.15 },
            end: { x: -3.95, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - spodni
            type: "partition",
            start: { x: -6.6, z: 9.7 },
            end: { x: -3.35, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.16 - vrchni
            type: "partition",
            start: { x: 1.79, z: 16.7 },
            end: { x: 10.2, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 16.145 },
            partitionWidth: 0.4,
          },
          {
            //1.19 - leva 2
            type: "partition",
            start: { x: -0.95, z: 15.145 },
            end: { x: -0.95, z: 9.8 },
            partitionWidth: 0.4,
          },
          {
            //V1 - spodni
            type: "partition",
            start: { x: -1.45, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - spodni
            type: "partition",
            start: { x: -0.75, z: 14.15 },
            end: { x: 3.25, z: 14.15 },
            partitionWidth: 0.3,
          },
          {
            //1.19 - prava spodni
            type: "partition",
            start: { x: 3.325, z: 14 },
            end: { x: 3.325, z: 15.095 },
            partitionWidth: 0.15,
          },
          {
            //1.19 - prava horni
            type: "partition",
            start: { x: 3.325, z: 16.145 },
            end: { x: 3.325, z: 16.6 },
            partitionWidth: 0.15,
          },
          {
            //1.16 - spodni
            type: "partition",
            start: { x: 3.4, z: 14.15 },
            end: { x: 4.5, z: 14.15 },
            partitionWidth: 0.3,
          },
          {
            //sachta - spodni
            type: "partition",
            start: { x: -0.75, z: 11.8 },
            end: { x: 4.5, z: 11.8 },
            partitionWidth: 0.2,
          },
          {
            //V1 - prava
            type: "partition",
            start: { x: 1.06, z: 11.7 },
            end: { x: 1.06, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //V2 - prava
            type: "partition",
            start: { x: 2.86, z: 11.7 },
            end: { x: 2.86, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //1.16 - prava
            type: "partition",
            start: { x: 4.775, z: 16.6 },
            end: { x: 4.775, z: 11.7 },
            partitionWidth: 0.55,
          },
          {
            //V3 - prava
            type: "partition",
            start: { x: 4.8125, z: 11.7 },
            end: { x: 4.8125, z: 9.8 },
            partitionWidth: 0.475,
          },
          {
            //V3 - spodni
            type: "partition",
            start: { x: 4.23, z: 9.7 },
            end: { x: 5.05, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.08 - prava
            type: "partition",
            start: { x: 9.925, z: 16.6 },
            end: { x: 9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //sachta2 - spodni
            type: "partition",
            start: { x: 5.05, z: 15.2 },
            end: { x: 9.65, z: 15.2 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - prava vrchni
            type: "partition",
            start: { x: 7.325, z: 15.1 },
            end: { x: 7.325, z: 13.3 },
            partitionWidth: 0.25,
          },
          {
            //1.07 - prava spodni
            type: "partition",
            start: { x: 7.3, z: 13.3 },
            end: { x: 7.3, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - spodni
            type: "partition",
            start: { x: 6.05, z: 9.7 },
            end: { x: 8.65, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - partition 1 leva
            type: "partition",
            start: { x: 5.05, z: 13.275 },
            end: { x: 5.125, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 1 prava
            type: "partition",
            start: { x: 6.025, z: 13.275 },
            end: { x: 7.2, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 2 leva
            type: "partition",
            start: { x: 5.05, z: 11.525 },
            end: { x: 5.125, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 2 prava
            type: "partition",
            start: { x: 6.025, z: 11.525 },
            end: { x: 7.2, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 1 leva
            type: "partition",
            start: { x: 7.4, z: 13.275 },
            end: { x: 8.675, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 1 prava
            type: "partition",
            start: { x: 9.575, z: 13.275 },
            end: { x: 9.65, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 2 leva
            type: "partition",
            start: { x: 7.4, z: 11.525 },
            end: { x: 8.3, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - zachod prava 1
            type: "partition",
            start: { x: 8.325, z: 11.575 },
            end: { x: 8.325, z: 11.5 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - zachod prava 2
            type: "partition",
            start: { x: 8.325, z: 13.3 },
            end: { x: 8.325, z: 12.275 },
            partitionWidth: 0.05,
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 9.925, z: -16.8 },
            end: { x: 9.925, z: -10.07 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 8.35, z: -10.2 },
            partitionWidth: 0.26,
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 6.875, z: -10.2 },
            end: { x: 6.875, z: -16.8 },
            partitionWidth: 0.55,
          },
          {
            //1.09a - spodni
            type: "partition",
            start: { x: -16.8, z: -10 },
            end: { x: -11.85, z: -10 },
            partitionWidth: 0.4,
          },
          {
            //1.09a - leva
            type: "partition",
            start: { x: -16.5, z: -8.2 },
            end: { x: -16.5, z: -9.8 },
            partitionWidth: 0.6,
          },
          {
            //1.09a - partition
            type: "partition",
            start: { x: -13.6, z: -8.2 },
            end: { x: -13.6, z: -9.8 },
            partitionWidth: 0.22,
          },
          {
            //1.09a - vrchni
            type: "partition",
            start: { x: -16.8, z: -8 },
            end: { x: -11.85, z: -8 },
            partitionWidth: 0.4,
          },
          {
            //1.09b - spodni
            type: "partition",
            start: { x: -11.85, z: -9.85 },
            end: { x: -10.2, z: -9.85 },
            partitionWidth: 0.7,
          },
          {
            //1.09b - vrchni
            type: "partition",
            start: { x: -11.85, z: -8.15 },
            end: { x: -10.2, z: -8.15 },
            partitionWidth: 0.7,
          },
          {
            //5.13 a 5.15 - leva stena
            type: "partition",
            start: { x: -4.6, z: -5.775 },
            end: { x: -4.6, z: -10.025 },
            partitionWidth: 0.05,
          },
          {
            //5.13 a 5.15 - spodni stena
            type: "partition",
            start: { x: -4.6, z: -10 },
            end: { x: 5, z: -10 },
            partitionWidth: 0.05,
          },
          {
            //5.13 a 5.15 - prava stena
            type: "partition",
            start: { x: 5, z: -10.025 },
            end: { x: 5, z: -5.775 },
            partitionWidth: 0.05,
          },
          {
            //5.13 a 5.15 - horni stena 1
            type: "partition",
            start: { x: -4.6, z: -5.8 },
            end: { x: -3.75, z: -5.8 },
            partitionWidth: 0.05,
          },
          {
            //5.13 a 5.15 - horni stena 2
            type: "partition",
            start: { x: -2.85, z: -5.8 },
            end: { x: 3.25, z: -5.8 },
            partitionWidth: 0.05,
          },
          {
            //5.13 a 5.15 - horni stena 2
            type: "partition",
            start: { x: 4.15, z: -5.8 },
            end: { x: 5, z: -5.8 },
            partitionWidth: 0.05,
          },
          {
            //5.13 a 5.15 - rozdeleni
            type: "partition",
            start: { x: 0.8, z: -5.8 },
            end: { x: 0.8, z: -10 },
            partitionWidth: 0.05,
          },
          {
            //5.12 a 5.14 - leva stena
            type: "partition",
            start: { x: -4.6, z: 5.025 },
            end: { x: -4.6, z: -4.625 },
            partitionWidth: 0.05,
          },
          {
            //5.12 a 5.14 - spodni stena 1
            type: "partition",
            start: { x: -4.6, z: -4.6 },
            end: { x: -1.37, z: -4.6 },
            partitionWidth: 0.05,
          },
          {
            //5.12 a 5.14 - spodni stena 2
            type: "partition",
            start: { x: -0.4, z: -4.6 },
            end: { x: -0.47, z: -4.6 },
            partitionWidth: 0.05,
          },
          {
            //5.12 a 5.14 - prava stena
            type: "partition",
            start: { x: -0.4, z: -4.625 },
            end: { x: -0.4, z: 5.025 },
            partitionWidth: 0.05,
          },
          {
            //5.12 a 5.14 - vrchni stena 1
            type: "partition",
            start: { x: -1.37, z: 5 },
            end: { x: -4.6, z: 5 },
            partitionWidth: 0.05,
          },
          {
            //5.12 a 5.14 - vrchni stena 2
            type: "partition",
            start: { x: -0.4, z: 5 },
            end: { x: -0.47, z: 5 },
            partitionWidth: 0.05,
          },
          {
            //5.12 a 5.14 - rozdeleni
            type: "partition",
            start: { x: -0.4, z: -0.4 },
            end: { x: -4.6, z: -0.4 },
            partitionWidth: 0.05,
          },
          {
            //5.19 - leva stena 1
            type: "partition",
            start: { x: 4.4, z: -0.4 },
            end: { x: 4.4, z: -0.71 },
            partitionWidth: 0.05,
          },
          {
            //5.19 - leva stena 2
            type: "partition",
            start: { x: 4.4, z: -1.51 },
            end: { x: 4.4, z: -2.11 },
            partitionWidth: 0.05,
          },
          {
            //5.19 - leva stena 3
            type: "partition",
            start: { x: 4.4, z: -2.91 },
            end: { x: 4.4, z: -3.49 },
            partitionWidth: 0.05,
          },
          {
            //5.19 - leva stena 4
            type: "partition",
            start: { x: 4.4, z: -4.29 },
            end: { x: 4.4, z: -4.6 },
            partitionWidth: 0.05,
          },
          {
            //5.19 - prava stena 1
            type: "partition",
            start: { x: 8.6, z: -0.4 },
            end: { x: 8.6, z: -0.71 },
            partitionWidth: 0.05,
          },
          {
            //5.19 - prava stena 2
            type: "partition",
            start: { x: 8.6, z: -1.51 },
            end: { x: 8.6, z: -2.11 },
            partitionWidth: 0.05,
          },
          {
            //5.19 - prava stena 3
            type: "partition",
            start: { x: 8.6, z: -2.91 },
            end: { x: 8.6, z: -3.49 },
            partitionWidth: 0.05,
          },
          {
            //5.19 - prava stena 4
            type: "partition",
            start: { x: 8.6, z: -4.29 },
            end: { x: 8.6, z: -4.6 },
            partitionWidth: 0.05,
          },
          {
            //5.19 - vrchni stena
            type: "partition",
            start: { x: 8.625, z: -0.4 },
            end: { x: 4.375, z: -0.4 },
            partitionWidth: 0.05,
          },
          {
            //5.19 - vodorovne rozdeleni 1
            type: "partition",
            start: { x: 6.5, z: -0.4 },
            end: { x: 6.5, z: -4.625 },
            partitionWidth: 0.1,
          },
          {
            //5.19 - horizontalni rozdeleni 1
            type: "partition",
            start: { x: 4.4, z: -1.8 },
            end: { x: 6.45, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            //5.19 - horizontalni rozdeleni 2
            type: "partition",
            start: { x: 4.4, z: -3.2 },
            end: { x: 6.45, z: -3.2 },
            partitionWidth: 0.05,
          },
          {
            //5.19 - horizontalni rozdeleni 3
            type: "partition",
            start: { x: 4.375, z: -4.6 },
            end: { x: 6.45, z: -4.6 },
            partitionWidth: 0.05,
          },
          {
            //5.19 - horizontalni rozdeleni 4
            type: "partition",
            start: { x: 6.55, z: -1.8 },
            end: { x: 8.6, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            //5.19 - horizontalni rozdeleni 5
            type: "partition",
            start: { x: 6.55, z: -3.2 },
            end: { x: 8.6, z: -3.2 },
            partitionWidth: 0.05,
          },
          {
            //5.19 - horizontalni rozdeleni 6
            type: "partition",
            start: { x: 6.55, z: -4.6 },
            end: { x: 8.625, z: -4.6 },
            partitionWidth: 0.05,
          },
          {
            //schody tocite vpravo nahore vnejsi
            type: "circular",
            center: { x: 13.5, z: 7.2 },
            radius: 1.515,
          },
          {
            //schody tocite vpravo nahore vnitrni
            type: "circular",
            center: { x: 13.5, z: 7.2 },
            radius: 0,
            circularWidth: 0.8,
          },
          {
            //schody tocite vlevo nahore vnejsi
            type: "circular",
            center: { x: -13.5, z: 7.2 },
            radius: 1.515,
          },
          {
            //schody tocite vlevo nahore vnitrni
            type: "circular",
            center: { x: -13.5, z: 7.2 },
            radius: 0,
            circularWidth: 0.8,
          },
        ],
      },
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [{ x: 11, z: 10, value: 31 }],
        wifi: [
          { x: 3, z: 14, value: 77 },
          { x: 17, z: 18, value: 69 },
        ],
        airQuality: [{ x: 5, z: 9, value: 60 }],
      },
      roomLabels: [
        { x: -8.25, z: 15.5, label: "5.02" },
        { x: -5.4, z: 15.8, label: "V4" },
        { x: -5.4, z: 14.1, label: "V5" },
        { x: -5.4, z: 12.5, label: "5.03" },
        { x: -5.4, z: 10.7, label: "5.06" },
        { x: -2.5, z: 13.5, label: "5.04" },
        { x: 1.3, z: 15.5, label: "5.05" },
        { x: 4, z: 15.5, label: "5.17" },
        { x: 0.1, z: 10.6, label: "V1" },
        { x: 1.95, z: 10.6, label: "V2" },
        { x: 3.8, z: 10.6, label: "V3" },
        { x: 6.15, z: 12.4, label: "5.07" },
        { x: 9, z: 12.4, label: "5.08" },
        { x: -14, z: 8, label: "5.18" },
        { x: 0, z: 7.5, label: "5.16" },
        { x: -12.7, z: -9, label: "5.09a" },
        { x: -11, z: -9, label: "5.09b" },
        { x: 8.4, z: -13.5, label: "5.01" },
        { x: -2.5, z: 2.5, label: "5.12" },
        { x: -2.5, z: -2.5, label: "5.14" },
        { x: -1.8, z: -7.75, label: "5.13" },
        { x: 2.9, z: -7.75, label: "5.15" },
        { x: 5.4, z: -1.1, label: "5.19f" },
        { x: 5.4, z: -2.6, label: "5.19e" },
        { x: 5.4, z: -3.9, label: "5.19d" },
        { x: 7.6, z: -1.1, label: "5.19a" },
        { x: 7.6, z: -2.6, label: "5.19b" },
        { x: 7.6, z: -3.9, label: "5.19c" },
        { x: 3.5, z: 1, label: "5.10" },
      ],
    },
    {
      id: 5,
      name: "6NP",
      type: "underground",
      dimensions: {
        width: 35.82,
        depth: 35.82,
      },
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },
        walls: [
          {
            type: "outline",
            points: [
              { x: -17.91, z: -17.91 },
              { x: 17.91, z: -17.91 },
              { x: 17.91, z: 17.91 },
              { x: -17.91, z: 17.91 },
            ],
          },

          {
            type: "outline",
            points: [
              { x: -16.8, z: -16.8 },
              { x: 16.8, z: -16.8 },
              { x: 16.8, z: 16.8 },
              { x: -16.8, z: 16.8 },
            ],
          },
          {
            //schody tocite v pravo nahore
            type: "circular",
            center: { x: 13.5, z: 7.2 },
            radius: 1.515,
          },
          {
            //schody tocite v pravo nahore sloup
            type: "circular",
            center: { x: 13.5, z: 7.2 },
            radius: 0,
            circularWidth: 0.8,
          },

          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 9.925, z: -16.8 },
            end: { x: 9.925, z: -10.07 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 8.35, z: -10.2 },
            partitionWidth: 0.26,
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 6.875, z: -10.2 },
            end: { x: 6.875, z: -16.8 },
            partitionWidth: 0.55,
          },
          {
            //Rozvadece - dolni
            type: "partition",
            start: { x: -16.8, z: -10 },
            end: { x: -10.2, z: -10 },
            partitionWidth: 0.4,
          },
          {
            //Rozvadece - horni
            type: "partition",
            start: { x: -16.8, z: -8 },
            end: { x: -10.2, z: -8 },
            partitionWidth: 0.4,
          },
          {
            //Rozdelovace - leva
            type: "partition",
            start: { x: -16.5, z: -8.2 },
            end: { x: -16.5, z: -9.8 },
            partitionWidth: 0.6,
          },
          {
            //Rozdelovace - prava
            type: "partition",
            start: { x: -13.59, z: -8.2 },
            end: { x: -13.59, z: -9.8 },
          },
          {
            //Rozdelovace - spodni
            type: "partition",
            start: { x: -16.2, z: -9.8 },
            end: { x: -13.59, z: -9.8 },
          },
          {
            //Rozdelovace prava - horni
            type: "partition",
            start: { x: -13.59, z: -8.2 },
            end: { x: -11.95, z: -8.2 },
          },
          {
            //Rozdelovace mala stena - nahore
            type: "partition",
            start: { x: -11.95, z: -8.35 },
            end: { x: -10.2, z: -8.35 },
            partitionWidth: 0.3,
          },
          {
            //Rozdelovace mala stena - dole
            type: "partition",
            start: { x: -11.95, z: -9.65 },
            end: { x: -10.2, z: -9.65 },
            partitionWidth: 0.3,
          },
          {
            //Schodiste02 - leva
            type: "partition",
            start: { x: -9.925, z: 16.8 },
            end: { x: -9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste02 - spodni
            type: "partition",
            start: { x: -8.35, z: 9.7 },
            end: { x: -7.15, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //Schodiste02 - prava
            type: "partition",
            start: { x: -6.875, z: 16.8 },
            end: { x: -6.875, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //V4 - vrchni
            type: "partition",
            start: { x: -9.65, z: 16.7 },
            end: { x: 0.61, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //V4 - prava
            type: "partition",
            start: { x: -3.95, z: 16.6 },
            end: { x: -3.95, z: 16.145 },
            partitionWidth: 0.2,
          },
          {
            //V5 - vrchni
            type: "partition",
            start: { x: -6.6, z: 14.95 },
            end: { x: -4.05, z: 14.95 },
            partitionWidth: 0.2,
          },
          {
            //V5 - prava
            type: "partition",
            start: { x: -3.95, z: 15.145 },
            end: { x: -3.95, z: 14.445 },
            partitionWidth: 0.2,
          },
          {
            //1.03 - vrchni
            type: "partition",
            start: { x: -6.6, z: 13.375 },
            end: { x: -4.05, z: 13.375 },
            partitionWidth: 0.15,
          },
          {
            //1.03 - prava
            type: "partition",
            start: { x: -3.95, z: 13.545 },
            end: { x: -3.95, z: 12.85 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - vrchni
            type: "partition",
            start: { x: -6.6, z: 11.675 },
            end: { x: -4.05, z: 11.675 },
            partitionWidth: 0.15,
          },
          {
            //1.06 - prava
            type: "partition",
            start: { x: -3.95, z: 11.85 },
            end: { x: -3.95, z: 11.15 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - prava 2
            type: "partition",
            start: { x: -3.95, z: 10.15 },
            end: { x: -3.95, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - spodni
            type: "partition",
            start: { x: -6.6, z: 9.7 },
            end: { x: -3.35, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.16 - vrchni
            type: "partition",
            start: { x: 1.79, z: 16.7 },
            end: { x: 10.2, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 16.145 },
            partitionWidth: 0.4,
          },
          {
            //1.19 - leva 2
            type: "partition",
            start: { x: -0.95, z: 15.145 },
            end: { x: -0.95, z: 9.8 },
            partitionWidth: 0.4,
          },
          {
            //V1 - spodni
            type: "partition",
            start: { x: -1.45, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - spodni
            type: "partition",
            start: { x: -0.75, z: 14.15 },
            end: { x: 3.25, z: 14.15 },
            partitionWidth: 0.3,
          },
          {
            //1.19 - prava spodni
            type: "partition",
            start: { x: 3.325, z: 14 },
            end: { x: 3.325, z: 15.095 },
            partitionWidth: 0.15,
          },
          {
            //1.19 - prava horni
            type: "partition",
            start: { x: 3.325, z: 16.145 },
            end: { x: 3.325, z: 16.6 },
            partitionWidth: 0.15,
          },
          {
            //1.16 - spodni
            type: "partition",
            start: { x: 3.4, z: 14.15 },
            end: { x: 4.5, z: 14.15 },
            partitionWidth: 0.3,
          },
          {
            //sachta - spodni
            type: "partition",
            start: { x: -0.75, z: 11.8 },
            end: { x: 4.5, z: 11.8 },
            partitionWidth: 0.2,
          },
          {
            //V1 - prava
            type: "partition",
            start: { x: 1.06, z: 11.7 },
            end: { x: 1.06, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //V2 - prava
            type: "partition",
            start: { x: 2.86, z: 11.7 },
            end: { x: 2.86, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //1.16 - prava
            type: "partition",
            start: { x: 4.775, z: 16.6 },
            end: { x: 4.775, z: 11.7 },
            partitionWidth: 0.55,
          },
          {
            //V3 - prava
            type: "partition",
            start: { x: 4.8125, z: 11.7 },
            end: { x: 4.8125, z: 9.8 },
            partitionWidth: 0.475,
          },
          {
            //V3 - spodni
            type: "partition",
            start: { x: 4.23, z: 9.7 },
            end: { x: 5.05, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.08 - prava
            type: "partition",
            start: { x: 9.925, z: 16.6 },
            end: { x: 9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //sachta2 - spodni
            type: "partition",
            start: { x: 5.05, z: 15.2 },
            end: { x: 9.65, z: 15.2 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - prava vrchni
            type: "partition",
            start: { x: 7.325, z: 15.1 },
            end: { x: 7.325, z: 13.3 },
            partitionWidth: 0.25,
          },
          {
            //1.07 - prava spodni
            type: "partition",
            start: { x: 7.3, z: 13.3 },
            end: { x: 7.3, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - spodni
            type: "partition",
            start: { x: 6.05, z: 9.7 },
            end: { x: 8.65, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - partition 1 leva
            type: "partition",
            start: { x: 5.05, z: 13.275 },
            end: { x: 5.125, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 1 prava
            type: "partition",
            start: { x: 6.025, z: 13.275 },
            end: { x: 7.2, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 2 leva
            type: "partition",
            start: { x: 5.05, z: 11.525 },
            end: { x: 5.125, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 2 prava
            type: "partition",
            start: { x: 6.025, z: 11.525 },
            end: { x: 7.2, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 1 leva
            type: "partition",
            start: { x: 7.4, z: 13.275 },
            end: { x: 8.675, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 1 prava
            type: "partition",
            start: { x: 9.575, z: 13.275 },
            end: { x: 9.65, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            // Zasedací místnost - stredova rozdelovaci NA 6NP
            type: "partition",
            start: { x: -3, z: -2.62 },
            end: { x: 3, z: -2.62 },
            partitionWidth: 0.15,
          },
          {
            //1.08 - partition 2 leva
            type: "partition",
            start: { x: 7.4, z: 11.525 },
            end: { x: 8.3, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - zachod prava 1
            type: "partition",
            start: { x: 8.325, z: 11.575 },
            end: { x: 8.325, z: 11.5 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - zachod prava 2
            type: "partition",
            start: { x: 8.325, z: 13.3 },
            end: { x: 8.325, z: 12.275 },
            partitionWidth: 0.05,
          },
          {
            //Rozvadece - dolni
            type: "partition",
            start: { x: -16.8, z: -10.2 },
            end: { x: -10.2, z: -10.2 },
          },
          {
            //Rozvadece - prava
            type: "partition",
            start: { x: -10.2, z: -10.2 },
            end: { x: -10.2, z: -7.8 },
          },
          {
            //Rozvadece - horni
            type: "partition",
            start: { x: -16.8, z: -7.8 },
            end: { x: -10.2, z: -7.8 },
          },
          {
            //Rozdelovace - leva
            type: "partition",
            start: { x: -16.2, z: -8.2 },
            end: { x: -16.2, z: -9.8 },
          },
          {
            //Rozdelovace - prava
            type: "partition",
            start: { x: -13.59, z: -8.2 },
            end: { x: -13.59, z: -9.8 },
          },
          {
            //Rozdelovace - spodni
            type: "partition",
            start: { x: -16.2, z: -9.8 },
            end: { x: -13.59, z: -9.8 },
          },
          {
            //Rozdelovace - vrchni
            type: "partition",
            start: { x: -16.2, z: -8.2 },
            end: { x: -13.59, z: -8.2 },
          },
          {
            //Rozdelovace vnitrni - vrchni
            type: "partition",
            start: { x: -16.12, z: -8.28 },
            end: { x: -13.71, z: -8.28 },
          },
          {
            //Rozdelovace vnitrni - spodni
            type: "partition",
            start: { x: -16.12, z: -9.72 },
            end: { x: -13.71, z: -9.72 },
          },
          {
            //Rozdelovace vnitrni - leva
            type: "partition",
            start: { x: -16.12, z: -8.28 },
            end: { x: -16.12, z: -9.72 },
          },
          {
            //Rozdelovace vnitrni - prava
            type: "partition",
            start: { x: -13.71, z: -8.28 },
            end: { x: -13.71, z: -9.72 },
          },
          {
            //Rozdelovace prava - horni
            type: "partition",
            start: { x: -13.59, z: -8.2 },
            end: { x: -11.95, z: -8.2 },
          },
          {
            //Rozdelovace prava - spodni
            type: "partition",
            start: { x: -13.59, z: -9.8 },
            end: { x: -11.95, z: -9.8 },
          },
          {
            //Rozdelovace mala stena - spodni
            type: "partition",
            start: { x: -11.95, z: -9.8 },
            end: { x: -11.95, z: -9.5 },
          },
          {
            //Rozdelovace mala stena - horni
            type: "partition",
            start: { x: -11.95, z: -8.2 },
            end: { x: -11.95, z: -8.5 },
          },
          {
            //Rozdelovace mala stena - nahore
            type: "partition",
            start: { x: -11.95, z: -8.5 },
            end: { x: -10.2, z: -8.5 },
          },
          {
            //Rozdelovace mala stena - dole
            type: "partition",
            start: { x: -11.95, z: -9.5 },
            end: { x: -10.2, z: -9.5 },
          },
          {
            //Y osa - vlevo
            type: "partition",
            start: { x: -10.2, z: -16.8 },
            end: { x: -10.2, z: 16.8 },
          },
          {
            //Y osa - vlevo
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: 16.8 },
          },
          {
            // Technické hnízdo - vlevo
            type: "partition",
            start: { x: -9, z: 6.68 },
            end: { x: -9, z: 3.08 },
            partitionWidth: 0.1,
          },
          {
            // Technické hnízdo - vpravo
            type: "partition",
            start: { x: -4.8, z: 6.68 },
            end: { x: -4.8, z: 5.35 },
            partitionWidth: 0.1,
          },
          {
            // Technické hnízdo - vpravo
            type: "partition",
            start: { x: -4.8, z: 4.41 },
            end: { x: -4.8, z: 3.08 },
            partitionWidth: 0.1,
          },
          {
            // Technické hnízdo - nahore
            type: "partition",
            start: { x: -9.05, z: 6.68 },
            end: { x: -4.75, z: 6.68 },
            partitionWidth: 0.1,
          },

          {
            // Technické hnízdo - dole
            type: "partition",
            start: { x: -9.05, z: 3.08 },
            end: { x: -4.75, z: 3.08 },
            partitionWidth: 0.1,
          },
          {
            // Zasedací místnost - vlevo
            type: "partition",
            start: { x: -3, z: 5.78 },
            end: { x: -3, z: -6.78 },
            partitionWidth: 0.1,
          },
          {
            // Zasedací místnost - vpravo
            type: "partition",
            start: { x: 3, z: 5.78 },
            end: { x: 3, z: -6.78 },
            partitionWidth: 0.1,
          },
          {
            // Zasedací místnost - nahore
            type: "partition",
            start: { x: -3.05, z: 6.68 },
            end: { x: 3.05, z: 6.68 },
            partitionWidth: 0.1,
          },
          {
            // Zasedací místnost - dole
            type: "partition",
            start: { x: 3.05, z: -7.8 },
            end: { x: -3.05, z: -7.8 },
            partitionWidth: 0.1,
          },

          {
            //leva strana - vrchni stena
            type: "partition",
            start: { x: 10.2, z: 6.8 },
            end: { x: 13.5, z: 6.8 },
          },
          {
            //leva strana - spodni stena
            type: "partition",
            start: { x: 10.2, z: 8.7 },
            end: { x: 13.5, z: 8.7 },
          },
        ],
      },
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [
          { x: 13, z: 4, value: 29 },
          { x: 21, z: 8, value: 24 },
        ],
        wifi: [
          { x: 11, z: 23, value: 62 },
          { x: 25, z: 26, value: 75 },
        ],
        airQuality: [{ x: 22, z: 5, value: 57 }],
      },
      roomLabels: [
        //6NP
        { x: -8.25, z: 15.5, label: "6.02" },
        { x: -5.4, z: 15.8, label: "V4" },
        { x: -5.4, z: 14.1, label: "V5" },
        { x: -5.4, z: 12.5, label: "6.05" },
        { x: -5.4, z: 10.7, label: "6.15" },
        { x: 1.3, z: 15.5, label: "6.06" },
        { x: 4, z: 15.5, label: "6.03" },
        { x: 0.1, z: 10.6, label: "V1" },
        { x: 1.95, z: 10.6, label: "V2" },
        { x: 3.8, z: 10.6, label: "V3" },
        { x: 6.15, z: 12.4, label: "6.07" },
        { x: 9, z: 12.4, label: "6.08" },
        { x: -2.5, z: 13.5, label: "6.04" },
        { x: 0, z: 3, label: "6.13" },
        { x: -7, z: 4.8, label: "6.11" },
        { x: 0, z: -5, label: "6.12" },
        { x: 0, z: -12, label: "6.10" },
        { x: -12.7, z: -9, label: "6.09a" },
        { x: -11, z: -9, label: "6.09b" },
        { x: 8.4, z: -13.5, label: "6.01" },
      ],
    },
    {
      id: 6,
      name: "7NP",
      type: "underground",
      dimensions: {
        width: 35.82,
        depth: 35.82,
      },
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },
        walls: [
          {
            type: "outline",
            points: [
              { x: -17.91, z: -17.91 },
              { x: 17.91, z: -17.91 },
              { x: 17.91, z: 17.91 },
              { x: -17.91, z: 17.91 },
            ],
          },
          {
            type: "outline",
            points: [
              { x: -16.8, z: -16.8 },
              { x: 16.8, z: -16.8 },
              { x: 16.8, z: 16.8 },
              { x: -16.8, z: 16.8 },
            ],
          },
          {
            //Schodiste02 - leva
            type: "partition",
            start: { x: -9.925, z: 16.8 },
            end: { x: -9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste02 - spodni
            type: "partition",
            start: { x: -8.35, z: 9.7 },
            end: { x: -7.15, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //Schodiste02 - prava
            type: "partition",
            start: { x: -6.875, z: 16.8 },
            end: { x: -6.875, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //V4 - vrchni
            type: "partition",
            start: { x: -9.65, z: 16.7 },
            end: { x: 0.61, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //V4 - prava
            type: "partition",
            start: { x: -3.95, z: 16.6 },
            end: { x: -3.95, z: 16.145 },
            partitionWidth: 0.2,
          },
          {
            //V5 - vrchni
            type: "partition",
            start: { x: -6.6, z: 14.95 },
            end: { x: -4.05, z: 14.95 },
            partitionWidth: 0.2,
          },
          {
            //V5 - prava
            type: "partition",
            start: { x: -3.95, z: 15.145 },
            end: { x: -3.95, z: 14.445 },
            partitionWidth: 0.2,
          },
          {
            //1.03 - vrchni
            type: "partition",
            start: { x: -6.6, z: 13.375 },
            end: { x: -4.05, z: 13.375 },
            partitionWidth: 0.15,
          },
          {
            //1.03 - prava
            type: "partition",
            start: { x: -3.95, z: 13.545 },
            end: { x: -3.95, z: 12.85 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - vrchni
            type: "partition",
            start: { x: -6.6, z: 11.675 },
            end: { x: -4.05, z: 11.675 },
            partitionWidth: 0.15,
          },
          {
            //1.06 - prava
            type: "partition",
            start: { x: -3.95, z: 11.85 },
            end: { x: -3.95, z: 11.15 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - prava 2
            type: "partition",
            start: { x: -3.95, z: 10.15 },
            end: { x: -3.95, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - spodni
            type: "partition",
            start: { x: -6.6, z: 9.7 },
            end: { x: -3.35, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.16 - vrchni
            type: "partition",
            start: { x: 1.79, z: 16.7 },
            end: { x: 10.2, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 16.145 },
            partitionWidth: 0.4,
          },
          {
            //1.19 - leva 2
            type: "partition",
            start: { x: -0.95, z: 15.145 },
            end: { x: -0.95, z: 9.8 },
            partitionWidth: 0.4,
          },
          {
            //V1 - spodni
            type: "partition",
            start: { x: -1.45, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - spodni
            type: "partition",
            start: { x: -0.75, z: 14.15 },
            end: { x: 3.25, z: 14.15 },
            partitionWidth: 0.3,
          },
          {
            //1.19 - prava spodni
            type: "partition",
            start: { x: 3.325, z: 14 },
            end: { x: 3.325, z: 15.095 },
            partitionWidth: 0.15,
          },
          {
            //1.19 - prava horni
            type: "partition",
            start: { x: 3.325, z: 16.145 },
            end: { x: 3.325, z: 16.6 },
            partitionWidth: 0.15,
          },
          {
            //1.16 - spodni
            type: "partition",
            start: { x: 3.4, z: 14.15 },
            end: { x: 4.5, z: 14.15 },
            partitionWidth: 0.3,
          },
          {
            //sachta - spodni
            type: "partition",
            start: { x: -0.75, z: 11.8 },
            end: { x: 4.5, z: 11.8 },
            partitionWidth: 0.2,
          },
          {
            //V1 - prava
            type: "partition",
            start: { x: 1.06, z: 11.7 },
            end: { x: 1.06, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //V2 - prava
            type: "partition",
            start: { x: 2.86, z: 11.7 },
            end: { x: 2.86, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //1.16 - prava
            type: "partition",
            start: { x: 4.775, z: 16.6 },
            end: { x: 4.775, z: 11.7 },
            partitionWidth: 0.55,
          },
          {
            //V3 - prava
            type: "partition",
            start: { x: 4.8125, z: 11.7 },
            end: { x: 4.8125, z: 9.8 },
            partitionWidth: 0.475,
          },
          {
            //V3 - spodni
            type: "partition",
            start: { x: 4.23, z: 9.7 },
            end: { x: 5.05, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.08 - prava
            type: "partition",
            start: { x: 9.925, z: 16.6 },
            end: { x: 9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //sachta2 - spodni
            type: "partition",
            start: { x: 5.05, z: 15.2 },
            end: { x: 9.65, z: 15.2 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - prava vrchni
            type: "partition",
            start: { x: 7.325, z: 15.1 },
            end: { x: 7.325, z: 13.3 },
            partitionWidth: 0.25,
          },
          {
            //1.07 - prava spodni
            type: "partition",
            start: { x: 7.3, z: 13.3 },
            end: { x: 7.3, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - spodni
            type: "partition",
            start: { x: 6.05, z: 9.7 },
            end: { x: 8.65, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - partition 1 leva
            type: "partition",
            start: { x: 5.05, z: 13.275 },
            end: { x: 5.125, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 1 prava
            type: "partition",
            start: { x: 6.025, z: 13.275 },
            end: { x: 7.2, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 2 leva
            type: "partition",
            start: { x: 5.05, z: 11.525 },
            end: { x: 5.125, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 2 prava
            type: "partition",
            start: { x: 6.025, z: 11.525 },
            end: { x: 7.2, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 1 leva
            type: "partition",
            start: { x: 7.4, z: 13.275 },
            end: { x: 8.675, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 1 prava
            type: "partition",
            start: { x: 9.575, z: 13.275 },
            end: { x: 9.65, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 2 leva
            type: "partition",
            start: { x: 7.4, z: 11.525 },
            end: { x: 8.3, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - zachod prava 1
            type: "partition",
            start: { x: 8.325, z: 11.575 },
            end: { x: 8.325, z: 11.5 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - zachod prava 2
            type: "partition",
            start: { x: 8.325, z: 13.3 },
            end: { x: 8.325, z: 12.275 },
            partitionWidth: 0.05,
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 9.925, z: -16.8 },
            end: { x: 9.925, z: -10.07 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 8.35, z: -10.2 },
            partitionWidth: 0.26,
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 6.875, z: -10.2 },
            end: { x: 6.875, z: -16.8 },
            partitionWidth: 0.55,
          },
          {
            //1.09a - spodni
            type: "partition",
            start: { x: -16.8, z: -10 },
            end: { x: -11.85, z: -10 },
            partitionWidth: 0.4,
          },
          {
            //1.09a - leva
            type: "partition",
            start: { x: -16.5, z: -8.2 },
            end: { x: -16.5, z: -9.8 },
            partitionWidth: 0.6,
          },
          {
            //1.09a - partition
            type: "partition",
            start: { x: -13.6, z: -8.2 },
            end: { x: -13.6, z: -9.8 },
            partitionWidth: 0.22,
          },
          {
            //1.09a - vrchni
            type: "partition",
            start: { x: -16.8, z: -8 },
            end: { x: -11.85, z: -8 },
            partitionWidth: 0.4,
          },
          {
            //1.09b - spodni
            type: "partition",
            start: { x: -11.85, z: -9.85 },
            end: { x: -10.2, z: -9.85 },
            partitionWidth: 0.7,
          },
          {
            //1.09b - vrchni
            type: "partition",
            start: { x: -11.85, z: -8.15 },
            end: { x: -10.2, z: -8.15 },
            partitionWidth: 0.7,
          },
          {
            //leva strana stena 1
            type: "partition",
            start: { x: -10.2, z: 8.85 },
            end: { x: -10.2, z: 9.6 },
          },
          {
            //leva strana stena 2
            type: "partition",
            start: { x: -10.2, z: 7.95 },
            end: { x: -10.2, z: 1.65 },
          },
          {
            //leva strana stena 3
            type: "partition",
            start: { x: -10.2, z: 0.75 },
            end: { x: -10.2, z: -1.95 },
          },
          {
            //leva strana stena 4
            type: "partition",
            start: { x: -10.2, z: -2.85 },
            end: { x: -10.2, z: -5.55 },
          },
          {
            //leva strana stena 5
            type: "partition",
            start: { x: -10.2, z: -6.45 },
            end: { x: -10.2, z: -7.8 },
          },
          {
            //leva strana rozdeleni 1 1
            type: "partition",
            start: { x: -16.8, z: 6.6 },
            end: { x: -11.17, z: 6.6 },
          },
          {
            //leva strana rozdeleni 1 2
            type: "partition",
            start: { x: -10.27, z: 6.6 },
            end: { x: -10.2, z: 6.6 },
          },
          {
            //leva strana rozdeleni 2 1
            type: "partition",
            start: { x: -16.8, z: -0.6 },
            end: { x: -11.17, z: -0.6 },
          },
          {
            //leva strana rozdeleni 2 2
            type: "partition",
            start: { x: -10.27, z: -0.6 },
            end: { x: -10.2, z: -0.6 },
          },
          {
            //leva strana rozdeleni 3
            type: "partition",
            start: { x: -16.8, z: -4.2 },
            end: { x: -10.2, z: -4.2 },
          },
          {
            //leva strana rozdeleni 4
            type: "partition",
            start: { x: -16.8, z: -7.8 },
            end: { x: -10.2, z: -7.8 },
          },
          {
            //spodni strana stena 1
            type: "partition",
            start: { x: -10.2, z: -10.2 },
            end: { x: -9.41, z: -10.2 },
          },
          {
            //spodni strana stena 2
            type: "partition",
            start: { x: -8.51, z: -10.2 },
            end: { x: -2.85, z: -10.2 },
          },
          {
            //spodni strana stena 3
            type: "partition",
            start: { x: -1.95, z: -10.2 },
            end: { x: 0.75, z: -10.2 },
          },
          {
            //spodni strana stena 4
            type: "partition",
            start: { x: 1.65, z: -10.2 },
            end: { x: 4.35, z: -10.2 },
          },
          {
            //spodni strana stena 5
            type: "partition",
            start: { x: 5.25, z: -10.2 },
            end: { x: 6.6, z: -10.2 },
          },
          {
            //spodni strana rozdeleni 1
            type: "partition",
            start: { x: -7.6, z: -10.2 },
            end: { x: -7.6, z: -16.8 },
          },
          {
            //spodni strana rozdeleni 2
            type: "partition",
            start: { x: -0.4, z: -10.2 },
            end: { x: -0.4, z: -16.8 },
          },
          {
            //spodni strana rozdeleni 3
            type: "partition",
            start: { x: 3.2, z: -10.2 },
            end: { x: 3.2, z: -16.8 },
          },
          {
            //prava strana stena 1
            type: "partition",
            start: { x: 10.2, z: -10.2 },
            end: { x: 10.2, z: -9.41 },
          },
          {
            //prava strana stena 2
            type: "partition",
            start: { x: 10.2, z: -8.51 },
            end: { x: 10.2, z: -6.45 },
          },
          {
            //prava strana stena 3
            type: "partition",
            start: { x: 10.2, z: -5.55 },
            end: { x: 10.2, z: -0.45 },
          },
          {
            //prava strana stena 4
            type: "partition",
            start: { x: 10.2, z: 0.45 },
            end: { x: 10.2, z: 7.95 },
          },
          {
            //prava strana stena 4
            type: "partition",
            start: { x: 10.2, z: 8.85 },
            end: { x: 10.2, z: 9.6 },
          },
          {
            //prava strana rozdeleni 1 1
            type: "partition",
            start: { x: 10.2, z: -7.8 },
            end: { x: 10.27, z: -7.8 },
          },
          {
            //prava strana rozdeleni 1 2
            type: "partition",
            start: { x: 11.17, z: 6.6 },
            end: { x: 16.8, z: 6.6 },
          },
          {
            //prava strana rozdeleni 2 1
            type: "partition",
            start: { x: 10.2, z: -4.2 },
            end: { x: 10.27, z: -4.2 },
          },
          {
            //prava strana rozdeleni 2 2
            type: "partition",
            start: { x: 11.17, z: -4.2 },
            end: { x: 16.8, z: -4.2 },
          },
          {
            //prava strana rozdeleni 3
            type: "partition",
            start: { x: 10.2, z: -7.8 },
            end: { x: 16.8, z: -7.8 },
          },
          {
            //7.25 - vlevo 1
            type: "partition",
            start: { x: -7.675, z: -7.75 },
            end: { x: -7.675, z: -4.25 },
            partitionWidth: 0.15,
          },
          {
            //7.25 - vlevo 2
            type: "partition",
            start: { x: -7.675, z: -3.25 },
            end: { x: -7.675, z: 2.05 },
            partitionWidth: 0.15,
          },
          {
            //7.24 - vlevo
            type: "partition",
            start: { x: -7.675, z: 3.05 },
            end: { x: -7.675, z: 4.75 },
            partitionWidth: 0.15,
          },
          {
            //7.28 - vlevo
            type: "partition",
            start: { x: -7.675, z: 5.75 },
            end: { x: -7.675, z: 6.55 },
            partitionWidth: 0.15,
          },
          {
            //7.28 - prava
            type: "partition",
            start: { x: -3.125, z: -7.75 },
            end: { x: -3.125, z: 6.55 },
            partitionWidth: 0.15,
          },
          {
            //7.28 - vrchni
            type: "partition",
            start: { x: -7.6, z: 6.475 },
            end: { x: -3.2, z: 6.475 },
            partitionWidth: 0.15,
          },
          {
            //7.28 - spodni
            type: "partition",
            start: { x: -7.6, z: 4.525 },
            end: { x: -3.2, z: 4.525 },
            partitionWidth: 0.15,
          },
          {
            //7.25 - vrchni
            type: "partition",
            start: { x: -7.6, z: 0 },
            end: { x: -3.2, z: 0 },
            partitionWidth: 0.15,
          },
          {
            //7.25 - spodni
            type: "partition",
            start: { x: -7.6, z: -7.675 },
            end: { x: -3.2, z: -7.675 },
            partitionWidth: 0.15,
          },
          {
            //dira - vlevo
            type: "partition",
            start: { x: -0.45, z: 6.4 },
            end: { x: -0.45, z: -7.44 },
            partitionWidth: 0.05,
          },
          {
            //dira - vpravo
            type: "partition",
            start: { x: 6.19, z: 6.4 },
            end: { x: 6.19, z: -7.44 },
            partitionWidth: 0.05,
          },
          {
            //dira - nahore
            type: "partition",
            start: { x: -0.475, z: 6.4 },
            end: { x: 6.215, z: 6.4 },
            partitionWidth: 0.05,
          },
          {
            //dira - dole
            type: "partition",
            start: { x: -0.475, z: -7.44 },
            end: { x: 6.215, z: -7.44 },
            partitionWidth: 0.05,
          },
        ],
      },
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [
          { x: 9, z: 7, value: 28 },
          { x: 14, z: 15, value: 27 },
        ],
        wifi: [{ x: 20, z: 3, value: 68 }],
        airQuality: [
          { x: 30, z: 7, value: 60 },
          { x: 6, z: 11, value: 54 },
        ],
      },
      roomLabels: [
        { x: -8.25, z: 15.5, label: "7.02" },
        { x: -5.4, z: 15.8, label: "V4" },
        { x: -5.4, z: 14.1, label: "V5" },
        { x: -5.4, z: 12.5, label: "7.05" },
        { x: -5.4, z: 10.7, label: "7.27" },
        { x: -2.5, z: 13.5, label: "7.04" },
        { x: 1.3, z: 15.5, label: "7.06" },
        { x: 4, z: 15.5, label: "7.03" },
        { x: 0.1, z: 10.6, label: "V1" },
        { x: 1.95, z: 10.6, label: "V2" },
        { x: 3.8, z: 10.6, label: "V3" },
        { x: 6.15, z: 12.4, label: "7.07" },
        { x: 9, z: 12.4, label: "7.08" },
        { x: 0, z: 7.5, label: "7.10" },
        { x: -12.7, z: -9, label: "7.09a" },
        { x: -11, z: -9, label: "7.09b" },
        { x: 8.4, z: -13.5, label: "7.01" },
        { x: 8, z: -0.5, label: "7.26" },
        { x: 3, z: -0.5, label: "7.11" },
        { x: -13.5, z: 12, label: "7.12" },
        { x: -13.5, z: 3, label: "7.13" },
        { x: -13.5, z: -2.5, label: "7.14" },
        { x: -13.5, z: -6, label: "7.15" },
        { x: -12, z: -13.5, label: "7.16" },
        { x: -4, z: -13.5, label: "7.17" },
        { x: 1.5, z: -13.5, label: "7.18" },
        { x: 5, z: -13.5, label: "7.19" },
        { x: 13.5, z: -12.25, label: "7.20" },
        { x: 13.5, z: -6.15, label: "7.21" },
        { x: 13.5, z: 1, label: "7.21" },
        { x: 13.5, z: 12, label: "7.21" },
        { x: -5.25, z: 5.5, label: "7.28" },
        { x: -5.25, z: 2.1, label: "7.24" },
        { x: -5.25, z: -3.9, label: "7.25" },
      ],
    },
    {
      id: 7,
      name: "8NP",
      type: "underground",
      dimensions: {
        width: 35.82,
        depth: 35.82,
      },
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },

        walls: [
          {
            type: "outline",
            points: [
              { x: -17.91, z: -17.91 },
              { x: 17.91, z: -17.91 },
              { x: 17.91, z: 17.91 },
              { x: -17.91, z: 17.91 },
            ],
          },

          {
            type: "outline",
            points: [
              { x: -16.8, z: -16.8 },
              { x: 16.8, z: -16.8 },
              { x: 16.8, z: 16.8 },
              { x: -16.8, z: 16.8 },
            ],
          },

          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 9.925, z: -16.8 },
            end: { x: 9.925, z: -10.07 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 8.35, z: -10.2 },
            partitionWidth: 0.26,
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 6.875, z: -10.2 },
            end: { x: 6.875, z: -16.8 },
            partitionWidth: 0.55,
          },
          {
            //Rozvadece - dolni
            type: "partition",
            start: { x: -16.8, z: -10 },
            end: { x: -10.2, z: -10 },
            partitionWidth: 0.4,
          },
          {
            //Rozvadece - horni
            type: "partition",
            start: { x: -16.8, z: -8 },
            end: { x: -10.2, z: -8 },
            partitionWidth: 0.4,
          },
          {
            //Rozdelovace - leva
            type: "partition",
            start: { x: -16.5, z: -8.2 },
            end: { x: -16.5, z: -9.8 },
            partitionWidth: 0.6,
          },
          {
            //Rozdelovace - prava
            type: "partition",
            start: { x: -13.59, z: -8.2 },
            end: { x: -13.59, z: -9.8 },
          },
          {
            //Rozdelovace - spodni
            type: "partition",
            start: { x: -16.2, z: -9.8 },
            end: { x: -13.59, z: -9.8 },
          },
          {
            //Rozdelovace prava - horni
            type: "partition",
            start: { x: -13.59, z: -8.2 },
            end: { x: -11.95, z: -8.2 },
          },
          {
            //Rozdelovace mala stena - nahore
            type: "partition",
            start: { x: -11.95, z: -8.35 },
            end: { x: -10.2, z: -8.35 },
            partitionWidth: 0.3,
          },
          {
            //Rozdelovace mala stena - dole
            type: "partition",
            start: { x: -11.95, z: -9.65 },
            end: { x: -10.2, z: -9.65 },
            partitionWidth: 0.3,
          },
          {
            //Schodiste02 - leva
            type: "partition",
            start: { x: -9.925, z: 16.8 },
            end: { x: -9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste02 - spodni
            type: "partition",
            start: { x: -8.35, z: 9.7 },
            end: { x: -7.15, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //Schodiste02 - prava
            type: "partition",
            start: { x: -6.875, z: 16.8 },
            end: { x: -6.875, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //V4 - vrchni
            type: "partition",
            start: { x: -9.65, z: 16.7 },
            end: { x: 0.61, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //V4 - prava
            type: "partition",
            start: { x: -3.95, z: 16.6 },
            end: { x: -3.95, z: 16.145 },
            partitionWidth: 0.2,
          },
          {
            //V5 - vrchni
            type: "partition",
            start: { x: -6.6, z: 14.95 },
            end: { x: -4.05, z: 14.95 },
            partitionWidth: 0.2,
          },
          {
            //V5 - prava
            type: "partition",
            start: { x: -3.95, z: 15.145 },
            end: { x: -3.95, z: 14.445 },
            partitionWidth: 0.2,
          },
          {
            //1.03 - vrchni
            type: "partition",
            start: { x: -6.6, z: 13.375 },
            end: { x: -4.05, z: 13.375 },
            partitionWidth: 0.15,
          },
          {
            //1.03 - prava
            type: "partition",
            start: { x: -3.95, z: 13.545 },
            end: { x: -3.95, z: 12.85 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - vrchni
            type: "partition",
            start: { x: -6.6, z: 11.675 },
            end: { x: -4.05, z: 11.675 },
            partitionWidth: 0.15,
          },
          {
            //1.06 - prava
            type: "partition",
            start: { x: -3.95, z: 11.85 },
            end: { x: -3.95, z: 11.15 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - prava 2
            type: "partition",
            start: { x: -3.95, z: 10.15 },
            end: { x: -3.95, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //1.06 - spodni
            type: "partition",
            start: { x: -6.6, z: 9.7 },
            end: { x: -3.35, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.16 - vrchni
            type: "partition",
            start: { x: 1.79, z: 16.7 },
            end: { x: 10.2, z: 16.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 16.145 },
            partitionWidth: 0.4,
          },
          {
            //1.19 - leva 2
            type: "partition",
            start: { x: -0.95, z: 15.145 },
            end: { x: -0.95, z: 9.8 },
            partitionWidth: 0.4,
          },
          {
            //V1 - spodni
            type: "partition",
            start: { x: -1.45, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.19 - spodni
            type: "partition",
            start: { x: -0.75, z: 14.15 },
            end: { x: 3.25, z: 14.15 },
            partitionWidth: 0.3,
          },
          {
            //1.19 - prava spodni
            type: "partition",
            start: { x: 3.325, z: 14 },
            end: { x: 3.325, z: 15.095 },
            partitionWidth: 0.15,
          },
          {
            //1.19 - prava horni
            type: "partition",
            start: { x: 3.325, z: 16.145 },
            end: { x: 3.325, z: 16.6 },
            partitionWidth: 0.15,
          },
          {
            //1.16 - spodni
            type: "partition",
            start: { x: 3.4, z: 14.15 },
            end: { x: 4.5, z: 14.15 },
            partitionWidth: 0.3,
          },
          {
            //sachta - spodni
            type: "partition",
            start: { x: -0.75, z: 11.8 },
            end: { x: 4.5, z: 11.8 },
            partitionWidth: 0.2,
          },
          {
            //V1 - prava
            type: "partition",
            start: { x: 1.06, z: 11.7 },
            end: { x: 1.06, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //V2 - prava
            type: "partition",
            start: { x: 2.86, z: 11.7 },
            end: { x: 2.86, z: 9.8 },
            partitionWidth: 0.19,
          },
          {
            //1.16 - prava
            type: "partition",
            start: { x: 4.775, z: 16.6 },
            end: { x: 4.775, z: 11.7 },
            partitionWidth: 0.55,
          },
          {
            //V3 - prava
            type: "partition",
            start: { x: 4.8125, z: 11.7 },
            end: { x: 4.8125, z: 9.8 },
            partitionWidth: 0.475,
          },
          {
            //V3 - spodni
            type: "partition",
            start: { x: 4.23, z: 9.7 },
            end: { x: 5.05, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.08 - prava
            type: "partition",
            start: { x: 9.925, z: 16.6 },
            end: { x: 9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //sachta2 - spodni
            type: "partition",
            start: { x: 5.05, z: 15.2 },
            end: { x: 9.65, z: 15.2 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - prava vrchni
            type: "partition",
            start: { x: 7.325, z: 15.1 },
            end: { x: 7.325, z: 13.3 },
            partitionWidth: 0.25,
          },
          {
            //1.07 - prava spodni
            type: "partition",
            start: { x: 7.3, z: 13.3 },
            end: { x: 7.3, z: 9.8 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - spodni
            type: "partition",
            start: { x: 6.05, z: 9.7 },
            end: { x: 8.65, z: 9.7 },
            partitionWidth: 0.2,
          },
          {
            //1.07 - partition 1 leva
            type: "partition",
            start: { x: 5.05, z: 13.275 },
            end: { x: 5.125, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 1 prava
            type: "partition",
            start: { x: 6.025, z: 13.275 },
            end: { x: 7.2, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 2 leva
            type: "partition",
            start: { x: 5.05, z: 11.525 },
            end: { x: 5.125, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.07 - partition 2 prava
            type: "partition",
            start: { x: 6.025, z: 11.525 },
            end: { x: 7.2, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 1 leva
            type: "partition",
            start: { x: 7.4, z: 13.275 },
            end: { x: 8.675, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 1 prava
            type: "partition",
            start: { x: 9.575, z: 13.275 },
            end: { x: 9.65, z: 13.275 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - partition 2 leva
            type: "partition",
            start: { x: 7.4, z: 11.525 },
            end: { x: 8.3, z: 11.525 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - zachod prava 1
            type: "partition",
            start: { x: 8.325, z: 11.575 },
            end: { x: 8.325, z: 11.5 },
            partitionWidth: 0.05,
          },
          {
            //1.08 - zachod prava 2
            type: "partition",
            start: { x: 8.325, z: 13.3 },
            end: { x: 8.325, z: 12.275 },
            partitionWidth: 0.05,
          },
          {
            //Kostka - vlevo1
            type: "partition",
            start: { x: -10.2, z: 9.6 },
            end: { x: -10.2, z: 8.85 },
          },
          {
            //Kostka - vlevo2
            type: "partition",
            start: { x: -10.2, z: 5.25 },
            end: { x: -10.2, z: 7.95 },
          },
          {
            //Kostka - vlevo3
            type: "partition",
            start: { x: -10.2, z: 4.35 },
            end: { x: -10.2, z: 1.65 },
          },
          {
            //Kostka - vlevo4
            type: "partition",
            start: { x: -10.2, z: 0.75 },
            end: { x: -10.2, z: -1.95 },
          },
          {
            //Kostka - vlevo4
            type: "partition",
            start: { x: -10.2, z: -2.85 },
            end: { x: -10.2, z: -5.55 },
          },
          {
            //Kostka - vlevo4
            type: "partition",
            start: { x: -10.2, z: -6.45 },
            end: { x: -10.2, z: -10.2 },
          },
          {
            //Kostka - dole
            type: "partition",
            start: { x: -10.2, z: -10.2 },
            end: { x: -9.41, z: -10.2 },
          },
          {
            //Kostka - dole
            type: "partition",
            start: { x: -8.51, z: -10.2 },
            end: { x: -6.45, z: -10.2 },
          },
          {
            //Kostka - dole
            type: "partition",
            start: { x: -5.55, z: -10.2 },
            end: { x: -1.65, z: -10.2 },
          },
          {
            //Kostka - dole
            type: "partition",
            start: { x: -0.75, z: -10.2 },
            end: { x: 1.95, z: -10.2 },
          },
          {
            //Kostka - dole
            type: "partition",
            start: { x: 2.85, z: -10.2 },
            end: { x: 4.95, z: -10.2 },
          },
          {
            //Kostka - dole
            type: "partition",
            start: { x: 5.85, z: -10.2 },
            end: { x: 6.85, z: -10.2 },
          },

          {
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.2, z: 9.6 },
            end: { x: 10.2, z: 8.85 },
          },
          {
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.2, z: 5.25 },
            end: { x: 10.2, z: 7.95 },
          },
          {
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.2, z: 4.35 },
            end: { x: 10.2, z: 1.65 },
          },
          {
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.2, z: 0.75 },
            end: { x: 10.2, z: -1.95 },
          },
          {
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.2, z: -2.85 },
            end: { x: 10.2, z: -5.55 },
          },
          {
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.2, z: -6.45 },
            end: { x: 10.2, z: -8.8 },
          },
          {
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.2, z: -9.8 },
            end: { x: 10.2, z: -10.2 },
          },

          {
            //Spisovna/Tiskarna - vlevo
            type: "partition",
            start: { x: -7.72, z: 3.08 },
            end: { x: -7.72, z: 2.43 },
            partitionWidth: 0.22,
          },
          {
            //Spisovna/Tiskarna - vlevo
            type: "partition",
            start: { x: -7.72, z: 1.53 },
            end: { x: -7.72, z: -4.67 },
            partitionWidth: 0.22,
          },
          {
            //Spisovna/Tiskarna - vlevo
            type: "partition",
            start: { x: -7.72, z: -5.57 },
            end: { x: -7.72, z: -7.8 },
            partitionWidth: 0.22,
          },

          {
            //Spisovna/Tiskarna - vpravo
            type: "partition",
            start: { x: -3.24, z: 3.08 },
            end: { x: -3.24, z: -7.8 },
            partitionWidth: 0.22,
          },
          {
            //Spisovna/Tiskarna - nahore
            type: "partition",
            start: { x: -7.83, z: 3.18 },
            end: { x: -3.13, z: 3.18 },
            partitionWidth: 0.2,
          },
          {
            //Spisovna/Tiskarna - dole
            type: "partition",
            start: { x: -7.83, z: -7.69 },
            end: { x: -3.13, z: -7.69 },
            partitionWidth: 0.22,
          },
          {
            //spisovna - nahore
            type: "partition",
            start: { x: -7.83, z: 1.02 },
            end: { x: -3.24, z: 1.02 },
            partitionWidth: 0.22,
          },
          {
            //dira - vlevo
            type: "partition",
            start: { x: -0.45, z: 6.4 },
            end: { x: -0.45, z: -7.44 },
            partitionWidth: 0.1,
          },
          {
            //dira - vpravo
            type: "partition",
            start: { x: 6.19, z: 6.4 },
            end: { x: 6.19, z: -7.44 },
            partitionWidth: 0.1,
          },
          {
            //dira - nahore
            type: "partition",
            start: { x: -0.5, z: 6.4 },
            end: { x: 6.24, z: 6.4 },
            partitionWidth: 0.1,
          },

          {
            //dira - dole
            type: "partition",
            start: { x: -0.5, z: -7.44 },
            end: { x: 6.24, z: -7.44 },
            partitionWidth: 0.1,
          },
          {
            //CENTRUM VZDELAVANI - spodni
            type: "partition",
            start: { x: -16.8, z: 6.6 },
            end: { x: -10.2, z: 6.6 },
          },
          {
            //jednaci prostor - spodni
            type: "partition",
            start: { x: -16.8, z: 3 },
            end: { x: -10.2, z: 3 },
          },
          {
            //kancelar projektoveho manazera - spodni
            type: "partition",
            start: { x: -16.8, z: -0.6 },
            end: { x: -10.2, z: -0.6 },
          },
          {
            //pracoviste PR a organizace akci pro verejnost - spodni
            type: "partition",
            start: { x: -16.8, z: -4.2 },
            end: { x: -10.2, z: -4.2 },
          },
          {
            //graficke studio - spodni
            type: "partition",
            start: { x: -16.8, z: -7.8 },
            end: { x: -10.2, z: -7.8 },
          },
          {
            //reditelna - vpravo
            type: "partition",
            start: { x: -7.8, z: -16.8 },
            end: { x: -7.8, z: -10.2 },
          },
          {
            //sekretariat - vpravo
            type: "partition",
            start: { x: -4.2, z: -16.8 },
            end: { x: -4.2, z: -10.2 },
          },
          {
            //kancelar zastupce reditele - vpravo
            type: "partition",
            start: { x: 0.6, z: -16.8 },
            end: { x: 0.6, z: -10.2 },
          },
          {
            //kancelar spravy budovy - vpravo
            type: "partition",
            start: { x: 4.2, z: -16.8 },
            end: { x: 4.2, z: -10.2 },
          },
          {
            //účtárna - nahore
            type: "partition",
            start: { x: 10.2, z: -7.8 },
            end: { x: 16.8, z: -7.8 },
          },
          {
            //sklad pro účtárnu - nahore
            type: "partition",
            start: { x: 10.2, z: -4.2 },
            end: { x: 16.8, z: -4.2 },
          },
          {
            //kancelář vedoucí ekonomiky a provozu - nahore
            type: "partition",
            start: { x: 10.2, z: -0.6 },
            end: { x: 16.8, z: -0.6 },
          },
          {
            //odborné pracoviště pro vzdělání uživatelů - nahore
            type: "partition",
            start: { x: 10.2, z: 3 },
            end: { x: 16.8, z: 3 },
          },
          {
            //odborné pracoviště pro vědu, výzkum a vývoj - nahore
            type: "partition",
            start: { x: 10.2, z: 6.6 },
            end: { x: 16.8, z: 6.6 },
          },
        ],
      },
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [{ x: 18, z: 12, value: 24 }],
        wifi: [
          { x: 25, z: 22, value: 70 },
          { x: 7, z: 17, value: 65 },
        ],
        airQuality: [{ x: 12, z: 20, value: 50 }],
      },
      roomLabels: [
        //8NP
        { x: -12.7, z: -9, label: "8.09a" },
        { x: -11, z: -9, label: "8.09b" },
        { x: 8.4, z: -13.5, label: "8.01" },
        { x: -14, z: 12, label: "8.11" },
        { x: -14, z: 4.6, label: "8.12" },
        { x: -14, z: 1, label: "8.13" },
        { x: -14, z: -2.6, label: "8.14" },
        { x: -14, z: -6.2, label: "8.15" },
        { x: -12, z: -13.5, label: "8.16" },
        { x: -5.8, z: -13.5, label: "8.17" },
        { x: -1.5, z: -13.5, label: "8.18" },
        { x: 2.4, z: -13.5, label: "8.19" },
        { x: 5.6, z: -13.5, label: "8.20" },
        { x: 14, z: -13.5, label: "8.21" },
        { x: 14, z: -6.2, label: "8.22" },
        { x: 14, z: -2.6, label: "8.23" },
        { x: 14, z: 1, label: "8.24" },
        { x: 14, z: 4.6, label: "8.25" },
        { x: 14, z: 12, label: "8.26" },
        { x: -5.7, z: 2, label: "8.30" },
        { x: -5.7, z: -3, label: "8.27" },
        { x: 8, z: -1, label: "8.28a" },
        { x: 0, z: 8, label: "8.10" },
        { x: -5.7, z: 6, label: "8.28b" },
        { x: -8.25, z: 15.5, label: "8.02" },
        { x: -5.4, z: 15.8, label: "V4" },
        { x: -5.4, z: 14.1, label: "V5" },
        { x: -5.4, z: 12.5, label: "8.05" },
        { x: -2.6, z: 13.3, label: "8.04" },
        { x: -5.4, z: 10.7, label: "8.29" },
        { x: 1.3, z: 15.5, label: "8.06" },
        { x: 4, z: 15.5, label: "8.03" },
        { x: 0.1, z: 10.6, label: "V1" },
        { x: 1.95, z: 10.6, label: "V2" },
        { x: 3.8, z: 10.6, label: "V3" },
        { x: 6.15, z: 12.4, label: "8.07" },
        { x: 9, z: 12.4, label: "8.08" },
      ],
    },
    {
      id: 8,
      name: "9NP",
      type: "underground",
      dimensions: {
        width: 35.82,
        depth: 35.82,
      },
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },

        walls: [
          {
            type: "outline",
            points: [
              { x: -17.91, z: -17.91 },
              { x: 17.91, z: -17.91 },
              { x: 17.91, z: 17.91 },
              { x: -17.91, z: 17.91 },
            ],
          },

          {
            type: "outline",
            points: [
              { x: -16.8, z: -16.8 },
              { x: 16.8, z: -16.8 },
              { x: 16.8, z: 16.8 },
              { x: -16.8, z: 16.8 },
            ],
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 9.925, z: -16.8 },
            end: { x: 9.925, z: -10.07 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 8.35, z: -10.2 },
            partitionWidth: 0.26,
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 6.875, z: -10.2 },
            end: { x: 6.875, z: -16.8 },
            partitionWidth: 0.55,
          },
          {
            //Rozvadece - dolni
            type: "partition",
            start: { x: -16.8, z: -10 },
            end: { x: -10.2, z: -10 },
            partitionWidth: 0.4,
          },
          {
            //Rozvadece - horni
            type: "partition",
            start: { x: -16.8, z: -8 },
            end: { x: -10.2, z: -8 },
            partitionWidth: 0.4,
          },
          {
            //Rozdelovace - leva
            type: "partition",
            start: { x: -16.5, z: -8.2 },
            end: { x: -16.5, z: -9.8 },
            partitionWidth: 0.6,
          },
          {
            //Rozdelovace - prava
            type: "partition",
            start: { x: -13.59, z: -8.2 },
            end: { x: -13.59, z: -9.8 },
          },
          {
            //Rozdelovace - spodni
            type: "partition",
            start: { x: -16.2, z: -9.8 },
            end: { x: -13.59, z: -9.8 },
          },
          {
            //Rozdelovace prava - horni
            type: "partition",
            start: { x: -13.59, z: -8.2 },
            end: { x: -11.95, z: -8.2 },
          },
          {
            //Rozdelovace mala stena - nahore
            type: "partition",
            start: { x: -11.95, z: -8.35 },
            end: { x: -10.2, z: -8.35 },
            partitionWidth: 0.3,
          },
          {
            //Rozdelovace mala stena - dole
            type: "partition",
            start: { x: -11.95, z: -9.65 },
            end: { x: -10.2, z: -9.65 },
            partitionWidth: 0.3,
          },
          {
            //Schodiste02 - leva
            type: "partition",
            start: { x: -9.925, z: 16.8 },
            end: { x: -9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //vrsek - spodni stena
            type: "partition",
            start: { x: -1.1, z: 9.76 },
            end: { x: 10.2, z: 9.76 },
            partitionWidth: 0.32,
          },

          {
            //vrsek - prava stena
            type: "partition",
            start: { x: 10.05, z: 16.8 },
            end: { x: 10.05, z: 16.075 },
            partitionWidth: 0.43,
          },
          {
            //vrsek - prava stena
            type: "partition",
            start: { x: 10.05, z: 15.625 },
            end: { x: 10.05, z: 15.235 },
            partitionWidth: 0.43,
          },
          {
            //vrsek - prava stena
            type: "partition",
            start: { x: 10.05, z: 14.635 },
            end: { x: 10.05, z: 12.3 },
            partitionWidth: 0.43,
          },
          {
            //vrsek - prava stena
            type: "partition",
            start: { x: 10.05, z: 11.1 },
            end: { x: 10.05, z: 9.6 },
            partitionWidth: 0.43,
          },

          {
            //Schodiste02 - spodni
            type: "partition",
            start: { x: -8.35, z: 9.78 },
            end: { x: -6.6, z: 9.78 },
            partitionWidth: 0.32,
          },

          {
            //Schodiste02 - prava
            type: "partition",
            start: { x: -6.875, z: 16.8 },
            end: { x: -6.875, z: 10.9 },
            partitionWidth: 0.55,
          },
          {
            //  prava stena vedle schodiste2
            type: "partition",
            start: { x: -6.6, z: 10.9 },
            end: { x: -7.15, z: 10.9 },
          },
          {
            //  vrchni stena stena vedle schodiste
            type: "partition",
            start: { x: -6.6, z: 16.65 },
            end: { x: 4.5, z: 16.65 },
            partitionWidth: 0.3,
          },
          {
            //  WC Zaměstnanci - prava stena
            type: "partition",
            start: { x: -4.875, z: 16.55 },
            end: { x: -4.875, z: 14.35 },
            partitionWidth: 0.15,
          },
          {
            //  spodni stena1
            type: "partition",
            start: { x: -6.6, z: 14.425 },
            end: { x: -6.185, z: 14.425 },
            partitionWidth: 0.15,
          },
          {
            //  spodni stena2
            type: "partition",
            start: { x: -5.285, z: 14.425 },
            end: { x: -2.175, z: 14.425 },
            partitionWidth: 0.15,
          },
          {
            //  spodni stena3
            type: "partition",
            start: { x: -1.275, z: 14.425 },
            end: { x: -0.78, z: 14.425 },
            partitionWidth: 0.15,
          },
          {
            //  spodni stena4
            type: "partition",
            start: { x: 0.12, z: 14.425 },
            end: { x: 4.125, z: 14.425 },
            partitionWidth: 0.15,
          },
          {
            //  WC ženy - prava stena
            type: "partition",
            start: { x: -3.075, z: 16.55 },
            end: { x: -3.075, z: 15.65 },
            partitionWidth: 0.2,
          },
          {
            //  WC ženy - prava stena
            type: "partition",
            start: { x: -1.125, z: 16.55 },
            end: { x: -1.125, z: 14.35 },
            partitionWidth: 0.1,
          },

          {
            //  WC muži -prava stena
            type: "partition",
            start: { x: 0.45, z: 16.55 },
            end: { x: 0.45, z: 15.25 },
          },

          {
            //  WC muži2 -prava stena
            type: "partition",
            start: { x: 2.295, z: 16.55 },
            end: { x: 2.295, z: 15.25 },
          },

          {
            //  WC muži3 -prava stena
            type: "partition",
            start: { x: 4.2875, z: 16.55 },
            end: { x: 4.2875, z: 14.35 },
            partitionWidth: 0.325,
          },
          {
            //  šachta -vrchni stena
            type: "partition",
            start: { x: 4.45, z: 16.65 },
            end: { x: 10, z: 16.65 },
            partitionWidth: 0.32,
          },
          {
            //  šachta -spodni stena
            type: "partition",
            start: { x: 4.45, z: 15.35 },
            end: { x: 9.4, z: 15.35 },
            partitionWidth: 0.2,
          },

          {
            //  šachta -prava stena
            type: "partition",
            start: { x: 9.615, z: 16.8 },
            end: { x: 9.615, z: 16.075 },
            partitionWidth: 0.44,
          },
          {
            //  šachta -prava stena
            type: "partition",
            start: { x: 9.615, z: 15.625 },
            end: { x: 9.615, z: 15.235 },
            partitionWidth: 0.44,
          },
          {
            //  šachta -prava stena
            type: "partition",
            start: { x: 9.615, z: 14.635 },
            end: { x: 9.615, z: 12.3 },
            partitionWidth: 0.44,
          },
          {
            //  šachta -prava stena
            type: "partition",
            start: { x: 9.615, z: 11.1 },
            end: { x: 9.615, z: 9.6 },
            partitionWidth: 0.44,
          },

          {
            //   -prava stena2?
            type: "partition",
            start: { x: 4.35, z: 12.25 },
            end: { x: 4.35, z: 14.35 },
            partitionWidth: 0.2,
          },

          {
            //   -rozvadeec horni FVE
            type: "partition",
            start: { x: -0.81, z: 12.15 },
            end: { x: -1.2, z: 12.15 },
            partitionWidth: 0.2,
          },
          {
            //   -rozvadeec horni FVE
            type: "partition",
            start: { x: 0.31, z: 12.15 },
            end: { x: 4.45, z: 12.15 },
            partitionWidth: 0.2,
          },
          {
            //   -prava stena2?
            type: "partition",
            start: { x: -1.1, z: 12.25 },
            end: { x: -1.1, z: 9.6 },
            partitionWidth: 0.2,
          },
          {
            //   -rozvadec prava stena
            type: "partition",
            start: { x: 1, z: 12.05 },
            end: { x: 1, z: 9.92 },
            partitionWidth: 0.19,
          },
          {
            //   -rozvadec prava stena
            type: "partition",
            start: { x: 1, z: 12.05 },
            end: { x: 1, z: 14.5 },
            partitionWidth: 0.19,
          },

          {
            //   -rozvadec FVE prava stena
            type: "partition",
            start: { x: 2.94, z: 12.05 },
            end: { x: 2.94, z: 10.92 },
            partitionWidth: 0.15,
          },
          {
            //   -rozvadec FVE prava stena
            type: "partition",
            start: { x: 2.94, z: 10.02 },
            end: { x: 2.94, z: 9.92 },
            partitionWidth: 0.15,
          },

          {
            //dira - vlevo
            type: "partition",
            start: { x: -0.45, z: 6.4 },
            end: { x: -0.45, z: -7.44 },
            partitionWidth: 0.1,
          },
          {
            //dira - vpravo
            type: "partition",
            start: { x: 6.19, z: 6.4 },
            end: { x: 6.19, z: -7.44 },
            partitionWidth: 0.1,
          },
          {
            //dira - nahore
            type: "partition",
            start: { x: -0.5, z: 6.4 },
            end: { x: 6.24, z: 6.4 },
            partitionWidth: 0.1,
          },

          {
            //dira - dole
            type: "partition",
            start: { x: -0.5, z: -7.44 },
            end: { x: 6.24, z: -7.44 },
            partitionWidth: 0.1,
          },
          {
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.02, z: 9.6 },
            end: { x: 10.02, z: 7.75 },
            partitionWidth: 0.36,
          },
          {
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.02, z: -6.75 },
            end: { x: 10.02, z: -10.2 },

            partitionWidth: 0.36,
          },
          {
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.02, z: -5.65 },
            end: { x: 10.02, z: 6.65 },
            partitionWidth: 0.36,
          },
          {
            //VODOROVNA OSA VPRAVO KRATKA 9.18
            type: "partition",
            start: { x: 10.2, z: -5.47 },
            end: { x: 16.8, z: -5.47 },
            partitionWidth: 0.36,
          },
        ],
      },
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [
          { x: 27, z: 10, value: 30 },
          { x: 30, z: 18, value: 29 },
          { x: 2, z: 9, value: 31 },
        ],
        wifi: [{ x: 15, z: 14, value: 73 }],
        airQuality: [
          { x: 10, z: 6, value: 56 },
          { x: 21, z: 25, value: 60 },
        ],
      },
      roomLabels: [
        { x: -12.7, z: -9, label: "9.12a" },
        { x: -11, z: -9, label: "9.12b" },
        { x: -3, z: -12, label: "9.16" },
        { x: 8.4, z: -13.5, label: "9.01" },
        { x: 14, z: -10.5, label: "9.18" },
        { x: 14, z: 6, label: "9.13" },
        { x: 8, z: 2, label: "9.14" },
        { x: -6, z: 0, label: "9.10" },
        { x: -13.5, z: 12, label: "9.15" },
        { x: -8.25, z: 15.5, label: "9.02" },
        { x: -5.7, z: 15.5, label: "9.04" },
        { x: -3, z: 15, label: "9.05" },
        { x: 1.4, z: 15.5, label: "9.06" },
        { x: 0, z: 10.8, label: "V1" },
        { x: 2, z: 10.8, label: "9.11" },
        { x: 7, z: 13, label: "9.09" },
      ],
    },
  ],
  visualization: {
    wall_height: 3.0,
    floor_thickness: 0.2,
    floor_spacing: 0.25,
    wall_thickness: 0.15,
    room_floor_height: 0.05,
  },
  building_info: {
    name: "CERNA KOSTKA",
    address: "-",
    total_floors: 11,
    construction_year: 2027,
    building_type: "commercial",
  },
  sensors: {
    temperature: {
      unit: "celsius",
      min_range: 10,
      max_range: 35,
      precision: 0.1,
    },
    wifi: {
      signal_levels: {
        0: "No Signal",
        1: "Weak",
        2: "Normal",
        3: "Strong",
      },
      frequency: "2.4GHz/5GHz",
    },
  },
  materials: {
    floor_types: {
      concrete: { color: "#808080", roughness: 0.8 },
      marble: { color: "#f5f5f5", roughness: 0.1 },
      carpet: { color: "#8b4513", roughness: 0.9 },
      tile: { color: "#ffffff", roughness: 0.3 },
    },
    wall_types: {
      drywall: { color: "#f0f0f0", roughness: 0.7 },
      brick: { color: "#b22222", roughness: 0.9 },
      glass: { color: "#87ceeb", roughness: 0.1, transparency: 0.8 },
      concrete: { color: "#808080", roughness: 0.8 },
    },
  },
};
