export const CONFIG_DATA = {
  floors: [
    {
      id: -2,
      name: "P2",
      type: "underground",
      segments: [
        { width: 35.82, depth: 35.82, position: { x: 0, z: 0 } }, // kostka hlavni
        {
          width: 78,
          depth: 46.9,
          position: { x: 0, z: 31.46 },
        }, //sklad
        {
          width: 5.1,
          depth: 29,
          position: { x: -41.4, z: 40.3 },
        }, //retencni nadrz
      ],
      endPoints: [
        { x: -9, z: 16, id: "B" },
        { x: 9, z: -16, id: "B" },
        { x: -31.5625, z: 48, id: "B" },
        { x: 38.175, z: 48 },
      ],
      nav: {
        clearance: 0.35, // menší clearance, aby prošly i 0.8 m dveře (2 * 0.35 = 0.7)
      },
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },

        walls: [
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1, z: 16.6 },
            end: { x: -4.1, z: 16.145 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1125, z: 16.145 },
            end: { x: -4.1125, z: 15.645 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.125, z: 15.645 },
            end: { x: -4.125, z: 15.145 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1, z: 15.145 },
            end: { x: -4.1, z: 16.145 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1, z: 15.145 },
            end: { x: -4.1, z: 15.045 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1, z: 14.845 },
            end: { x: -4.1, z: 14.445 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1125, z: 14.445 },
            end: { x: -4.1125, z: 13.995 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.125, z: 13.995 },
            end: { x: -4.125, z: 13.545 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1, z: 14.445 },
            end: { x: -4.1, z: 13.545 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1, z: 13.545 },
            end: { x: -4.1, z: 13.445 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            type: "stairs",
            position: { x: -31.5625, z: 46.8 },
            stepWidth: 1.225,
            stepDepth: 0.291,
            partPosition: 1,
            numSteps: 23,
            totalSteps: 23,
            direction: "bottom",
          },
          {
            type: "stairs",
            position: { x: 38.175, z: 47.107 },
            stepWidth: 1.35,
            stepDepth: 0.291,
            partPosition: 1,
            numSteps: 23,
            totalSteps: 23,
            direction: "bottom",
          },
          {
            type: "stairs",
            position: { x: 9.075, z: -15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: 7.15, z: -11.855 },
            floorP2: { x: 9.65, z: -10.1 },
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: 7.725, z: -12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: 7.15, z: -15.7 },
            floorP2: { x: 9.65, z: -16.8 },
            direction: "bottom",
          },
          {
            type: "stairs",
            position: { x: -9.075, z: 15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: -7.15, z: 11.855 },
            floorP2: { x: -9.65, z: 10.555 },
            direction: "bottom",
          },
          {
            type: "stairs",
            position: { x: -7.725, z: 12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: -7.15, z: 15.7 },
            floorP2: { x: -9.65, z: 16.8 },
            direction: "top",
          },
          {
            //04 - spodni pricka
            type: "partition",
            start: { x: -5, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //ROZVADECE - pricka
            type: "partition",
            start: { x: -10.36, z: -8.2 },
            end: { x: -10.36, z: -9.85 },
            partitionWidth: 0.3,
            yLevel: 2.1,
          },
          {
            //Schodiste02 - leva
            type: "partition",
            start: { x: -9.925, z: 15.6 },
            end: { x: -9.925, z: 9.6 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste02 - leva
            type: "partition",
            start: { x: -9.925, z: 16.875 },
            end: { x: -9.925, z: 9.6 },
            partitionWidth: 0.55,
            yLevel: 2.1,
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
            //Schodiste02 - vrchni leva pricka full
            type: "partition",
            start: { x: -10.2, z: 16.875 },
            end: { x: -6.6, z: 16.875 },
            partitionWidth: 0.15,
            yLevel: 2.1,
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
            start: { x: 14.66, z: 16.7 },
            end: { x: -3.6, z: 16.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
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
            //01.67 - prava 2
            type: "partition",
            start: { x: -3.95, z: 10.15 },
            end: { x: -3.95, z: 16.145 },
            partitionWidth: 0.2,
            yLevel: 2.1,
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
            //1.19 - leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 15.145 },
            partitionWidth: 0.4,
            yLevel: 2.1,
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
            //1.19 - prava spodni
            type: "partition",
            start: { x: 1.955, z: 14 },
            end: { x: 1.955, z: 16.6 },
            partitionWidth: 0.15,
            yLevel: 2.1,
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
            //sachta2 - spodni1
            type: "partition",
            start: { x: 5.05, z: 15.2 },
            end: { x: 5.35, z: 15.2 },
            partitionWidth: 0.2,
          },
          {
            //sachta2 - spodni2
            type: "partition",
            start: { x: 9.65, z: 15.2 },
            end: { x: 9.35, z: 15.2 },
            partitionWidth: 0.2,
          },
          {
            //sachta2 - spodni
            type: "partition",
            start: { x: 7.05, z: 9.8 },
            end: { x: 7.65, z: 9.8 },
            partitionWidth: 0.4,
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
            //prava zed nad schodistem vyssi - leva
            type: "partition",
            start: { x: 10.1, z: -2.8 },
            end: { x: 10.1, z: -8.9 },
            partitionWidth: 0.2,
            yLevel: 2.1,
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
            //prostredni zed doprava vrchni nahore
            type: "partition",
            start: { x: 11.7, z: 5.965 },
            end: { x: 13.61, z: 5.965 },
            partitionWidth: 0.15,
            yLevel: 2.1,
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
            //prostredni zed doprava spodni pokjracovani
            type: "partition",
            start: { x: 13.61, z: 5.965 },
            end: { x: 17.795, z: 5.965 },
            partitionWidth: 0.15,
            yLevel: 2.1,
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
            start: { x: 9.925, z: -15.9 },
            end: { x: 9.925, z: -10.07 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 10.2, z: -10.2 },
            partitionWidth: 0.26,
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 6.875, z: -10.2 },
            end: { x: 6.875, z: -15.9 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste01 - spodek
            type: "partition",
            start: { x: 10.2, z: -17.335 },
            end: { x: 6.6, z: -17.335 },
            partitionWidth: 1.07,
          },

          {
            //Schodiste01 - spodekleva pricka
            type: "partition",
            start: { x: 9.925, z: -14.25 },
            end: { x: 9.925, z: -17.25 },
            partitionWidth: 0.55,
            yLevel: 2.1,
          },
          {
            //Schodiste01 - spodekleva
            type: "partition",
            start: { x: 9.925, z: -17.25 },
            end: { x: 9.925, z: -17.25 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste01 - spodekprava
            type: "partition",
            start: { x: 6.875, z: -17.25 },
            end: { x: 6.875, z: -17.25 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste01 - spodekprava pricka
            type: "partition",
            start: { x: 6.875, z: -14.25 },
            end: { x: 6.875, z: -17.25 },
            partitionWidth: 0.55,
            yLevel: 2.1,
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
            start: { x: -10.275, z: -15.175 },
            end: { x: -10.275, z: -16.075 },
            partitionWidth: 0.15,
          },
          {
            //pricka 02.24 - 02.25
            type: "partition",
            start: { x: -10.275, z: -9.65 },
            end: { x: -10.275, z: -16.075 },
            partitionWidth: 0.15,
            yLevel: 2.1,
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
            //pricka 02.31
            type: "partition",
            start: { x: -16.5, z: -16 },
            end: { x: -13.525, z: -16 },
            partitionWidth: 0.15,
            yLevel: 2.1,
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
            //šachta vrchni pricka
            type: "partition",
            start: { x: 15.27, z: -4.165 },
            end: { x: 11.775, z: -4.165 },
            partitionWidth: 0.2,
            yLevel: 2.1,
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
            //strojovna chlazeni vnejsi prava 1
            type: "partition",
            start: { x: 4.075, z: -0.35 },
            end: { x: 4.075, z: -8.85 },
            partitionWidth: 0.2,
            yLevel: 2.1,
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
            start: { x: -18.19, z: 21.6 },
            end: { x: -18.19, z: 21.3 },
            partitionWidth: 0.75,
          },
          {
            //spodek B KOSTKA MALA
            type: "partition",
            start: { x: -18.19, z: 21.6 },
            end: { x: -18.19, z: 17.7 },
            partitionWidth: 0.75,
            yLevel: 2.1,
          },
          {
            //spodek B KOSTKA MALA
            type: "partition",
            start: { x: 18.12, z: 21.6 },
            end: { x: 18.12, z: 21.3 },
            partitionWidth: 0.75,
          },
          {
            //spodek B KOSTKA MALA
            type: "partition",
            start: { x: 18.12, z: 21.6 },
            end: { x: 18.12, z: 17.7 },
            partitionWidth: 0.75,
            yLevel: 2.1,
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
            start: { x: -39.25, z: 21.72 },
            end: { x: 39.25, z: 21.72 },
            partitionWidth: 0.7,
            yLevel: 2.1,
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
            end: { x: -39.05, z: 11.85 },
            partitionWidth: 0.2,
            yLevel: 2.1,
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
            //odvetraci šachta š7 spodni
            type: "partition",
            start: { x: 38.85, z: 50.745 },
            end: { x: 35.71, z: 50.745 },
            partitionWidth: 0.32,
            yLevel: 2.1,
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
            //odvetraci Schodiste B2 leva
            type: "partition",
            start: { x: 35.81, z: 49.59 },
            end: { x: 35.81, z: 40.76 },
            partitionWidth: 0.2,
            yLevel: 2.1,
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
            start: { x: 37.325, z: 41.86 },
            end: { x: 37.325, z: 40.76 },
            partitionWidth: 0.35,
            yLevel: 2.1,
          },
          {
            //sklad prostredni B2
            type: "partition",
            start: { x: 37.325, z: 41.86 },
            end: { x: 37.325, z: 47.5 },
            partitionWidth: 0.35,
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
            start: { x: -32.35, z: 54.48 },
            end: { x: -32.35, z: 51.03 },
            partitionWidth: 0.35,
          },
          {
            //šachta leva
            type: "partition",
            start: { x: -32.35, z: 54.48 },
            end: { x: -32.35, z: 45.895 },
            partitionWidth: 0.35,
            yLevel: 2.1,
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
            start: { x: -32.525, z: 50.895 },
            end: { x: -30.335, z: 50.895 },
            partitionWidth: 0.27,
          },
          {
            //šachta spodni leva
            type: "partition",
            start: { x: -32.525, z: 50.895 },
            end: { x: -29.1, z: 50.895 },
            partitionWidth: 0.27,
            yLevel: 2.1,
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
            start: { x: -32.35, z: 50.76 },
            end: { x: -32.35, z: 48.71 },
            partitionWidth: 0.35,
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
            start: { x: -32.525, z: 48.81 },
            end: { x: -30.335, z: 48.81 },
            partitionWidth: 0.2,
          },
          {
            //nepristupny vytah spodni leva pricka
            type: "partition",
            start: { x: -32.525, z: 48.81 },
            end: { x: -29.1, z: 48.81 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //nepristupny vytah spodni  prava
            type: "partition",
            start: { x: -29.435, z: 48.81 },
            end: { x: -29.1, z: 48.81 },
            partitionWidth: 0.2,
          },
          {
            //skladB1  leva
            type: "partition",
            start: { x: -32.35, z: 47.81 },
            end: { x: -32.35, z: 40.44 },
            partitionWidth: 0.35,
          },
          {
            //mschodiste jadro B1 prava
            type: "partition",
            start: { x: -29.2, z: 40.74 },
            end: { x: -29.2, z: 40.44 },
            partitionWidth: 0.2,
          },
          {
            //mschodiste jadro B1 prava
            type: "partition",
            start: { x: -29.2, z: 43.74 },
            end: { x: -29.2, z: 40.44 },
            partitionWidth: 0.2,
            yLevel: 2.1,
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
            //mschodiste jadro B1 spodni stredova kratka
            type: "partition",
            start: { x: -30.775, z: 43.74 },
            end: { x: -30.775, z: 40.44 },
            partitionWidth: 0.35,
            yLevel: 2.1,
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
      rooms: [
        {
          //vrsek
          name: "SCHODIŠTĚ (JÁDRO C)",
          bounds: { minX: -9.7, minZ: 10.4, maxX: -7.2, maxZ: 16.75 },
          number: "02.02",
        },
        {
          name: "V4",
          bounds: { minX: -6.6, minZ: 14.95, maxX: -4.05, maxZ: 16.6 },
          number: "V4",
        },
        {
          name: "V5",
          bounds: { minX: -6.6, minZ: 13.375, maxX: -4.05, maxZ: 14.95 },
          number: "V5",
        },
        {
          name: "ROZVODNA SLP",
          bounds: { minX: -6.6, minZ: 11.675, maxX: -4.05, maxZ: 13.375 },
          number: "02.18",
        },
        {
          name: "ÚKLID",
          bounds: { minX: -6.6, minZ: 9.7, maxX: -4.05, maxZ: 11.675 },
          number: "2.30",
        },
        {
          name: "MANIPULAČNÍ PROSTOR",
          bounds: { minX: -3.85, minZ: 9.8, maxX: -1.15, maxZ: 16.6 },
          number: "02.04",
        },
        {
          name: "ŠATNA A ZÁZEMÍ ZAMĚSTNANCI",
          bounds: { minX: -0.75, minZ: 14.2, maxX: 1.9, maxZ: 16.6 },
          number: "02.05",
        },
        {
          name: "KOUPELNA",
          bounds: { minX: 2.02, minZ: 14.2, maxX: 4.5, maxZ: 16.6 },
          number: "02.03",
        },
        {
          name: "PROSTOR PRO VEDENÍ INSTALACÍ",
          bounds: { minX: -0.75, minZ: 9.82, maxX: 4.7, maxZ: 11.7 },
          number: "02.28",
        },
        {
          name: "ŠACHTA - Š2",
          bounds: { minX: -0.75, minZ: 11.75, maxX: 4.7, maxZ: 14 },
          number: "02.32",
        },
        {
          name: "ŠACHTA - Š3",
          bounds: { minX: 4.9, minZ: 15.2, maxX: 9.7, maxZ: 16.6 },
          number: "02.19",
        },
        {
          // rozvaděče
          name: "INSTALAČNÍ PROSTOR",
          baseBounds: { minX: -13.5, minZ: -9.8, maxX: -11.85, maxZ: -8.2 },
          extensionBoundsList: [
            { minX: -11.85, minZ: -9.5, maxX: -10.2, maxZ: -8.5 },
          ],
          number: "02.27b",
        },
        {
          name: "INSTALAČNÍ ŠACHTA - Š1",
          bounds: { minX: -16.6, minZ: -9.8, maxX: -13.65, maxZ: -8.2 },
          number: "02.27a",
        },
        {
          name: "SCHODIŠTĚ (JÁDRO B)",
          bounds: { minX: 7.15, minZ: -15.67, maxX: 9.65, maxZ: -10.3 },
          number: "02.01",
        },
        {
          name: "HLAVNÍ ROZVADĚČ ELEKTRO",
          bounds: { minX: -16.5, minZ: -13.075, maxX: -10.35, maxZ: -10.2 },
          number: "02.25",
        },
        {
          name: "MÍSTNOST CBS",
          bounds: { minX: -16.5, minZ: -15.925, maxX: -13.4, maxZ: -13.15 },
          number: "02.31",
        },
        {
          name: "ROZVODNA RPO",
          bounds: { minX: -13.35, minZ: -15.925, maxX: -10.275, maxZ: -13.15 },
          number: "02.24",
        },
        {
          name: "NÁDRŽ SHZ",
          bounds: { minX: 13.4, minZ: -17.87, maxX: 17.87, maxZ: -4.185 },
          number: "02.22",
        },
        {
          name: "ŠACHTA Š10",
          bounds: { minX: 11.775, minZ: -5.375, maxX: 13.37, maxZ: -4.265 },
          number: "02.34",
        },
        {
          name: "STROJOVNA CHLAZENÍ",
          bounds: { minX: -1.7, minZ: -8.7, maxX: 4, maxZ: -0.5 },
          number: "02.35",
        },
        {
          name: "ANGLICKÝ DVOREK",
          bounds: { minX: -17.87, minZ: 3.6, maxX: -16.8, maxZ: 9.2 },
          number: "02.26a",
        },
        {
          name: "ANGLICKÝ DVOREK",
          bounds: { minX: -17.87, minZ: 0.2, maxX: -16.8, maxZ: 3.4 },
          number: "02.26b",
        },
        {
          name: "ANGLICKÝ DVOREK",
          bounds: { minX: -17.87, minZ: -3.6, maxX: -16.8, maxZ: -0.2 },
          number: "02.26c",
        },
        {
          name: "ANGLICKÝ DVOREK",
          bounds: { minX: -17.87, minZ: -7.8, maxX: -16.8, maxZ: -3.8 },
          number: "02.26d",
        },
        {
          name: "TREZOROVÁ MÍSTNOST",
          bounds: { minX: -38.85, minZ: 8, maxX: -32.325, maxZ: 11.75 },
          number: "02.08",
        },
        {
          name: "ODVĚTRACÍ ŠACHTA Š6",
          bounds: { minX: -32.4, minZ: 51.03, maxX: -29.435, maxZ: 54.485 },
          number: "02.12",
        },
        {
          name: "MANIPULAČNÍ PROSTOR",
          bounds: { minX: -30.825, minZ: 48.91, maxX: -29.26, maxZ: 50.76 },
          number: "02.29",
        },
        {
          name: "SKLAD (JÁDRO B1)",
          bounds: { minX: -32.4, minZ: 40.44, maxX: -30.9, maxZ: 44.845 },
          number: "02.11",
        },
        {
          name: "ODVĚTRACÍ ŠACHTA Š7",
          bounds: { minX: 35.9, minZ: 50.9, maxX: 38.85, maxZ: 54.48 },
          number: "02.16",
        },
        {
          name: "SKLAD (JÁDRO B2)",
          bounds: { minX: 37.325, minZ: 40.76, maxX: 38.85, maxZ: 44.215 },
          number: "02.15",
        },
        {
          name: "STROJOVNA HAŠENÍ DUSÍKEM",
          bounds: { minX: 11.85, minZ: -4.06, maxX: 17.87, maxZ: 5.89 },
          number: "02.21",
        },
        {
          name: "RETENČNÍ NÁDRŽ",
          bounds: { minX: -44.15, minZ: 25.68, maxX: -39.25, maxZ: 54.68 },
          number: "02.38",
        },
      ],
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [
          { x: -12, z: 14, value: 21 },
          { x: 10, z: -10, value: 26 },
          { x: 5, z: 3, value: 19 },
        ],
        wifi: [{ x: 20, z: 20, value: 60 }],
        airQuality: [{ x: 40, z: 10, value: 50 }],
      },

      roomLabels: [
        //2PP
        { x: -12.7, z: -9, label: "02.27b" },
        { x: -15, z: -9, label: "02.27a" },
        { x: 8.4, z: -16.2, label: "4.01" },
        { x: -17.1, z: 6.6, label: "02.26a" },
        { x: -17.1, z: 1.8, label: "02.26b" },
        { x: -17.1, z: -1.8, label: "02.26c" },
        { x: -17.1, z: -6.8, label: "02.26d" },
        { x: -13.5, z: -11.5, label: "02.25" },
        { x: -15, z: -14.5, label: "02.31" },
        { x: -11.8, z: -14.5, label: "02.24" },
        { x: 1, z: -4.8, label: "02.35" },
        { x: 12, z: -11.5, label: "02.23" },
        { x: 16, z: -7, label: "02.22" },
        { x: 12.7, z: -4.8, label: "02.34" },
        { x: 15, z: 2.5, label: "02.21" },
        { x: -8.25, z: 15.5, label: "02.02" },
        { x: -5.4, z: 15.8, label: "V4" },
        { x: -5.4, z: 14.1, label: "V5" },
        { x: -5.4, z: 12.5, label: "02.18" },
        { x: -5.4, z: 10.7, label: "02.30" },
        { x: -2.5, z: 13.5, label: "02.04" },
        { x: 0.6, z: 15.5, label: "02.05" },
        { x: 3.2, z: 15.5, label: "02.03" },
        { x: 1.95, z: 11, label: "02.28" },
        { x: 1, z: 6, label: "02.20" },
        { x: 1.95, z: 13, label: "02.32" },
        { x: 7.2, z: 16, label: "02.19" },
        { x: 17.7, z: 8.6, label: "02.26e" },
        { x: -31, z: 53, label: "02.12" },
        { x: -30, z: 50, label: "02.29" },
        { x: -30, z: 46, label: "02.10" },
        { x: -31.6, z: 43, label: "02.11" },
        { x: -20, z: 39, label: "02.09" },
        { x: -41.5, z: 40, label: "02.38" },
        { x: 37.5, z: 53, label: "02.16" },
        { x: 37.5, z: 49, label: "02.14" },
        { x: 38.2, z: 42.5, label: "02.15" },
        { x: 19, z: 39, label: "02.13" },
        { x: 27.5, z: 15, label: "02.17" },
        { x: -27.5, z: 15, label: "02.07" },
        { x: -35.5, z: 10, label: "02.08" },
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
        { width: 5, depth: 20.1, position: { x: -41.85, z: -3.2 } }, // retencni nadrz2
      ],
      holes: [
        { x: 8.4, z: -12.9, width: 2.6, depth: 5.2 },
        { x: -8.4, z: 12.9, width: 2.6, depth: 5.2 },
        { x: 1.875, z: 12.95, width: 5.3, depth: 2.15 },
        { x: 7.35, z: 15.95, width: 4.65, depth: 1.35 },
        { x: -31.5625, z: 43.5205, width: 1.225, depth: 6.568 },
        { x: 38.175, z: 43.8985, width: 1.35, depth: 6.568 },
        { x: -5.375, z: 15.825, width: 2.45, depth: 1.6 }, //v4
        { x: -5.375, z: 14.15, width: 2.45, depth: 1.45 }, //v5
      ],
      endPoints: [
        { x: -9, z: 15.4, id: "B" },
        { x: 9, z: -15.2, id: "B" },
        { x: 2.95, z: -2.9, id: "B" },
      ],
      nav: {
        clearance: 0.35, // menší clearance, aby prošly i 0.8 m dveře (2 * 0.35 = 0.7)
      },
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },
        walls: [
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: -0.75, z: 9.85 },
            end: { x: -0.45, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0, z: 9.875 },
            end: { x: -0.45, z: 9.875 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0.45, z: 9.8625 },
            end: { x: 0, z: 9.8625 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0.45, z: 9.85 },
            end: { x: -0.45, z: 9.85 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0.45, z: 9.85 },
            end: { x: 0.965, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.155, z: 9.85 },
            end: { x: 1.35, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.35, z: 9.875 },
            end: { x: 1.8, z: 9.875 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.8, z: 9.8625 },
            end: { x: 2.25, z: 9.8625 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.35, z: 9.85 },
            end: { x: 2.25, z: 9.85 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 2.25, z: 9.85 },
            end: { x: 2.765, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 2.955, z: 9.85 },
            end: { x: 3.15, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 3.15, z: 9.875 },
            end: { x: 3.6, z: 9.875 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 3.6, z: 9.8625 },
            end: { x: 4.05, z: 9.8625 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 3.15, z: 9.85 },
            end: { x: 4.05, z: 9.85 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 4.05, z: 9.85 },
            end: { x: 4.575, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1, z: 16.6 },
            end: { x: -4.1, z: 16.145 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1125, z: 16.145 },
            end: { x: -4.1125, z: 15.645 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.125, z: 15.645 },
            end: { x: -4.125, z: 15.145 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1, z: 15.145 },
            end: { x: -4.1, z: 16.145 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1, z: 15.145 },
            end: { x: -4.1, z: 15.045 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1, z: 14.845 },
            end: { x: -4.1, z: 14.445 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1125, z: 14.445 },
            end: { x: -4.1125, z: 13.995 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.125, z: 13.995 },
            end: { x: -4.125, z: 13.545 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1, z: 14.445 },
            end: { x: -4.1, z: 13.545 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1, z: 13.545 },
            end: { x: -4.1, z: 13.445 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            type: "partition",
            start: { x: 0.45, z: 9.775 },
            end: { x: 1.35, z: 9.775 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 2.25, z: 9.775 },
            end: { x: 3.15, z: 9.775 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.63, z: 9.7 },
            end: { x: 4.23, z: 9.7 },
            yLevel: 2.1,
            partitionWidth: 0.2,
          },
          {
            type: "stairs",
            position: { x: 9.075, z: -15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: 7.15, z: -11.855 },
            floorP2: { x: 9.65, z: -10.555 },
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: 7.725, z: -12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: 7.15, z: -15.7 },
            floorP2: { x: 9.65, z: -16.8 },
            direction: "bottom",
          },
          {
            type: "stairs",
            position: { x: -9.075, z: 15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: -7.15, z: 11.855 },
            floorP2: { x: -9.65, z: 10.555 },
            direction: "bottom",
          },
          {
            type: "stairs",
            position: { x: -7.725, z: 12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: -7.15, z: 15.7 },
            floorP2: { x: -9.65, z: 16.8 },
            direction: "top",
          },
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
            type: "stairs",
            position: { x: 2.95, z: -2.222 },
            stepWidth: 2.1,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 16,
            totalSteps: 32,
            floorP1: { x: -0.4, z: 4.6 },
            floorP2: { x: 4, z: 2.37 },
            direction: "top",
            railing: "yes",
          },
          {
            type: "stairs",
            position: { x: 0.65, z: 2.218 },
            stepWidth: 2.1,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 16,
            totalSteps: 32,
            floorP1: { x: -0.4, z: -2.37 },
            floorP2: { x: 4, z: -4.6 },
            direction: "bottom",
            railing: "yes",
          },
          {
            //01.12 - prava 1 pricka
            type: "partition",
            start: { x: -3.05, z: 7.7 },
            end: { x: -3.05, z: -5.9 },
            partitionWidth: 0.1,
            yLevel: 2.1,
          },
          {
            //01.12 - leva 1 priocka
            type: "partition",
            start: { x: -14.95, z: 7.7 },
            end: { x: -14.95, z: -5.9 },
            partitionWidth: 0.1,
            yLevel: 2.1,
          },
          {
            //01.69 - leva 2 pricka
            type: "partition",
            start: { x: -6.55, z: -7.9 },
            end: { x: -6.55, z: -15.5 },
            partitionWidth: 0.1,
            yLevel: 2.1,
          },
          {
            //01.69 - vrchni 1 pricka
            type: "partition",
            start: { x: -6.6, z: -7.85 },
            end: { x: 4.2, z: -7.85 },
            partitionWidth: 0.1,
            yLevel: 2.1,
          },
          {
            //01.65 a 01.66 - prava pricka
            type: "partition",
            start: { x: -11.4, z: 15.6 },
            end: { x: -11.4, z: 9.6 },
            partitionWidth: 0.1,
            yLevel: 2.1,
          },
          {
            //01.21 - leva 2
            type: "partition",
            start: { x: 10.085, z: 15.475 },
            end: { x: 10.085, z: -15.25 },
            partitionWidth: 0.23,
            yLevel: 2.1,
          },
          {
            //01.22 - vrchni 1
            type: "partition",
            start: { x: 10.2, z: -3.2 },
            end: { x: 12.19, z: -3.2 },
            partitionWidth: 0.15,
            yLevel: 2.1,
          },
          {
            //V7 - vrchni1
            type: "partition",
            start: { x: 12.19, z: -4.56 },
            end: { x: 13.29, z: -4.56 },
            partitionWidth: 0.1,
            yLevel: 2.1,
          },
          {
            //01.21 - vrchni 2
            type: "partition",
            start: { x: 16.8, z: -1.8 },
            end: { x: 10.2, z: -1.8 },
            partitionWidth: 0.15,
            yLevel: 2.1,
          },
          {
            //01.70 - vertikalni 1
            type: "partition",
            start: { x: 13.275, z: 3.175 },
            end: { x: 13.275, z: 4.725 },
            partitionWidth: 0.25,
            yLevel: 2.1,
          },
          {
            //1.19 - prava spodni
            type: "partition",
            start: { x: 1.955, z: 14 },
            end: { x: 1.955, z: 16.6 },
            partitionWidth: 0.15,
            yLevel: 2.1,
          },
          {
            //1.19 - leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 15.145 },
            partitionWidth: 0.4,
            yLevel: 2.1,
          },
          {
            //VRCHNI PRICKY
            //V4, V5, 03, 06
            type: "partition",
            start: { x: -3.95, z: 16.6 },
            end: { x: -3.95, z: 10.15 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //01.64 - prava 1
            type: "partition",
            start: { x: -6.69, z: 17.045 },
            end: { x: -6.69, z: 17.945 },
            partitionWidth: 0.18,
            yLevel: 2.1,
          },
          {
            //01.64 - rozdeleni 1
            type: "partition",
            start: { x: -8.425, z: 17.045 },
            end: { x: -8.425, z: 17.945 },
            partitionWidth: 0.15,
            yLevel: 2.1,
          },
          {
            //Schodiste02 - vrchni prava pricka
            type: "partition",
            start: { x: -7.3, z: 16.9 },
            end: { x: -10.2, z: 16.9 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //Schodiste02 - leva
            type: "partition",
            start: { x: -9.925, z: 16.9 },
            end: { x: -9.925, z: 9.6 },
            partitionWidth: 0.55,
            yLevel: 2.1,
          },
          {
            //1.07 - vrchni pricka
            type: "partition",
            start: { x: 5.05, z: 13.275 },
            end: { x: 10.2, z: 13.275 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //1.07 - spodni pricka
            type: "partition",
            start: { x: 5.05, z: 11.525 },
            end: { x: 7.2, z: 11.525 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //1.08 - zachod prava 1
            type: "partition",
            start: { x: 8.325, z: 13.3 },
            end: { x: 8.325, z: 11.5 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //07 - prava spodni pricka
            type: "partition",
            start: { x: 5.05, z: 9.7 },
            end: { x: 10.2, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //01.17 - vrchni 2
            type: "partition",
            start: { x: 10.2, z: 18.02 },
            end: { x: 17.87, z: 18.02 },
            partitionWidth: 0.3,
            yLevel: 2.1,
          },
          {
            //01.20 - vrchni 2
            type: "partition",
            start: { x: 9.9, z: 18.08 },
            end: { x: 6.955, z: 18.08 },
            partitionWidth: 0.18,
            yLevel: 2.1,
          },
          {
            //01.18 vrchni leva
            type: "partition",
            start: { x: 18.62, z: 18.07 },
            end: { x: 25.45, z: 18.07 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //01.74 vrchni leva
            type: "partition",
            start: { x: 24.75, z: 14.695 },
            end: { x: 38.85, z: 14.695 },
            partitionWidth: 0.34,
            yLevel: 2.1,
          },
          {
            //01.27 vrchni prava
            type: "partition",
            start: { x: 27.55, z: 18.07 },
            end: { x: 38.85, z: 18.07 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //01.28a leva 1
            type: "partition",
            start: { x: 28.85, z: 18.17 },
            end: { x: 28.85, z: 21.27 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //01.30 leva
            type: "partition",
            start: { x: 35.75, z: 21.97 },
            end: { x: 35.75, z: 49.311 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //01.61 leva vrchni
            type: "partition",
            start: { x: 35.8175, z: 48.71 },
            end: { x: 35.8175, z: 50.71 },
            partitionWidth: 0.335,
            yLevel: 2.1,
          },
          {
            //01.31 prava prostredni
            type: "partition",
            start: { x: 37.175, z: 37.36 },
            end: { x: 37.175, z: 48.85 },
            partitionWidth: 0.35,
            yLevel: 2.1,
          },
          {
            //01.26 - vrchni
            type: "partition",
            start: { x: -18.07, z: 18.07 },
            end: { x: -28.3, z: 18.07 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //01.44 - leva 2
            type: "partition",
            start: { x: -24.9, z: 14.455 },
            end: { x: -24.9, z: 8.03 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //01.43 - vrchni 2
            type: "partition",
            start: { x: -25, z: 11.395 },
            end: { x: -28.3, z: 11.395 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //01.71 - leva
            type: "partition",
            start: { x: -28.45, z: 15.7 },
            end: { x: -28.45, z: 18.57 },
            partitionWidth: 0.3,
            yLevel: 2.1,
          },
          {
            //01.39 - vrchni leva
            type: "partition",
            start: { x: -35.6, z: 14.965 },
            end: { x: -38.7, z: 14.965 },
            partitionWidth: 0.12,
            yLevel: 2.1,
          },
          {
            //01.41 - vrchni leva
            type: "partition",
            start: { x: -38.85, z: 14.89 },
            end: { x: -35.7, z: 14.89 },
            partitionWidth: 0.27,
            yLevel: 2.1,
          },
          {
            //01.48 - vrchni 1
            type: "partition",
            start: { x: -43.8, z: 12.955 },
            end: { x: -39.45, z: 12.955 },
            partitionWidth: 0.15,
            yLevel: 2.1,
          },
          {
            //01.47 - vrchni 2
            type: "partition",
            start: { x: -43.8, z: 15.945 },
            end: { x: -39.45, z: 15.945 },
            partitionWidth: 0.15,
            yLevel: 2.1,
          },
          {
            //01.46 - vrchni 2
            type: "partition",
            start: { x: -43.8, z: 18.55 },
            end: { x: -39.45, z: 18.55 },
            partitionWidth: 0.15,
            yLevel: 2.1,
          },
          {
            //01.46 - prava
            type: "partition",
            start: { x: -39.15, z: 13.92 },
            end: { x: -39.15, z: 27.63 },
            partitionWidth: 0.6,
            yLevel: 2.1,
          },
          {
            //01.49 - vrchni 2
            type: "partition",
            start: { x: -43.8, z: 21.205 },
            end: { x: -39.45, z: 21.205 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //01.32 - vrchni 1
            type: "partition",
            start: { x: -44.2, z: 25.43 },
            end: { x: -39.25, z: 25.43 },
            partitionWidth: 0.4,
            yLevel: 2.1,
          },
          {
            //01.53 spodni 1
            type: "partition",
            start: { x: -38.85, z: 50.605 },
            end: { x: -32.55, z: 50.605 },
            partitionWidth: 0.15,
            yLevel: 2.1,
          },
          {
            //01.54 spodni 1
            type: "partition",
            start: { x: -38.85, z: 46.805 },
            end: { x: -32.55, z: 46.805 },
            partitionWidth: 0.15,
            yLevel: 2.1,
          },
          {
            //01.37c - spodni 1
            type: "partition",
            start: { x: -32.15, z: 33.635 },
            end: { x: -29.45, z: 33.635 },
            partitionWidth: 0.1,
            yLevel: 2.1,
          },
          {
            //01.37c - prava 2
            type: "partition",
            start: { x: -31.15, z: 35.585 },
            end: { x: -31.15, z: 33.685 },
            partitionWidth: 0.1,
            yLevel: 2.1,
          },
          {
            //01.35 - leva 2
            type: "partition",
            start: { x: -30.7, z: 37.66 },
            end: { x: -30.7, z: 46.81 },
            partitionWidth: 0.5,
            yLevel: 2.1,
          },
          {
            //V6 - leva 1
            type: "partition",
            start: { x: -32.525, z: 45.61 },
            end: { x: -32.525, z: 50.53 },
            yLevel: 2.1,
            partitionWidth: 0.25,
          },
          {
            //01.35 - prava
            type: "partition",
            start: { x: -29.2, z: 49.51 },
            end: { x: -29.2, z: 37.66 },
            yLevel: 2.1,
            partitionWidth: 0.2,
          },
          {
            //schodiste11 zabradli vetsi
            type: "partition",
            start: { x: 4.05, z: 4.62 },
            end: { x: -0.45, z: 4.62 },
            partitionWidth: 0.05,
            yLevel: 1.55,
            partitionHeight: 1,
            materialType: "pinkGlass",
          },
          {
            //schodiste11 zabradlni mensi
            type: "partition",
            start: { x: 1.7, z: 2.35 },
            end: { x: 1.85, z: 2.35 },
            partitionWidth: 0.05,
            yLevel: 1.55,
            partitionHeight: 1,
            materialType: "pinkGlass",
          },
          {
            //Schodiste02 - leva
            type: "partition",
            start: { x: -9.925, z: 15.2 },
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
            //retencni nadrz vrchni
            type: "partition",
            start: { x: -39.375, z: 6.905 },
            end: { x: -44.325, z: 6.905 },
            partitionWidth: 0.25,
          },
          {
            //retencni nadrz spodni
            type: "partition",
            start: { x: -39.375, z: -13.22 },
            end: { x: -44.325, z: -13.22 },
            partitionWidth: 0.25,
          },
          {
            //retencni nadrz leva
            type: "partition",
            start: { x: -44.2, z: 6.905 },
            end: { x: -44.2, z: -13.22 },
            partitionWidth: 0.25,
          },
          {
            //retencni nadrz prava
            type: "partition",
            start: { x: -39.5, z: 6.905 },
            end: { x: -39.5, z: -13.22 },
            partitionWidth: 0.25,
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
            //01.57 leva
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
            //ROZVADECE - pricka
            type: "partition",
            start: { x: -10.36, z: -8.2 },
            end: { x: -10.36, z: -9.85 },
            partitionWidth: 0.3,
            yLevel: 2.1,
          },
          {
            //04 - spodni pricka
            type: "partition",
            start: { x: -5, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //V4 - vrchni
            type: "partition",
            start: { x: 3, z: 16.7 },
            end: { x: -3.6, z: 16.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
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
          status: "occupied",
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
      rooms: [
        {
          //vrsek
          name: "SCHODIŠTĚ (JÁDRO C)",
          bounds: { minX: -9.7, minZ: 9.8, maxX: -7.2, maxZ: 16.8 },
          number: "01.02",
        },
        {
          name: "V4",
          bounds: { minX: -6.6, minZ: 14.95, maxX: -4.05, maxZ: 16.6 },
          number: "V4",
        },
        {
          name: "V5",
          bounds: { minX: -6.6, minZ: 13.375, maxX: -4.05, maxZ: 14.95 },
          number: "V5",
        },
        {
          name: "ROZVODNA SLP",
          bounds: { minX: -6.6, minZ: 11.675, maxX: -4.05, maxZ: 13.375 },
          number: "01.03",
        },
        {
          name: "WC ZAMĚSTNANCI",
          bounds: { minX: -6.6, minZ: 9.7, maxX: -4.05, maxZ: 11.675 },
          number: "01.67",
        },
        {
          name: "MANIPULAČNÍ PROSTOR",
          bounds: { minX: -3.85, minZ: 9.8, maxX: -1.15, maxZ: 16.6 },
          number: "01.04",
        },
        {
          name: "ZÁZEMÍ PRO KAVÁRNU - ŠATNA",
          bounds: { minX: -0.75, minZ: 14.2, maxX: 1.9, maxZ: 16.6 },
          number: "01.05",
        },
        {
          name: "ZÁZEMÍ PRO KAVÁRNU - WC ZAMĚSTNANCI",
          bounds: { minX: 2.02, minZ: 14.2, maxX: 4.5, maxZ: 16.6 },
          number: "01.06",
        },
        {
          name: "ŠACHTA V1",
          bounds: { minX: -0.75, minZ: 9.8, maxX: 0.97, maxZ: 11.7 },
          number: "V1",
        },
        {
          name: "ŠACHTA V2",
          bounds: { minX: 1.16, minZ: 9.8, maxX: 2.75, maxZ: 11.7 },
          number: "V2",
        },
        {
          name: "ŠACHTA V3",
          bounds: { minX: 2.95, minZ: 9.8, maxX: 4.7, maxZ: 11.7 },
          number: "V3",
        },
        {
          name: "WC MUŽI",
          bounds: { minX: 5.05, minZ: 9.8, maxX: 7.2, maxZ: 15.1 },
          number: "01.07",
        },
        {
          name: "WC ŽENY",
          bounds: { minX: 7.4, minZ: 9.8, maxX: 9.65, maxZ: 15.1 },
          number: "01.08",
        },
        {
          // rozvaděče
          name: "ROZVADĚČE",
          bounds: { minX: -13.5, minZ: -9.8, maxX: -11.85, maxZ: -8.2 },
          number: "01.09a",
        },
        {
          name: "ROZDĚLOVAČE PODLAHOVÉHO TOPENÍ",
          bounds: { minX: -11.85, minZ: -9.5, maxX: -10.2, maxZ: -8.5 },
          number: "01.09b",
        },
        {
          name: "SCHODIŠTĚ (JÁDRO B)",
          bounds: { minX: 7.15, minZ: -16.8, maxX: 9.65, maxZ: -10.325 },
          number: "01.01",
        },
        {
          name: "MAKERSPACE -3D TISK A ROBOTICKÁ DLAŇ",
          bounds: { minX: -6.55, minZ: -15.5, maxX: 4.15, maxZ: -7.9 },
          number: "01.69",
        },
        {
          name: "KONFERENČNÍ SÁL",
          bounds: { minX: -14.95, minZ: -5.95, maxX: -3.05, maxZ: 7.7 },
          number: "01.12",
        },
        {
          name: "STUDOVNA MÉDIÍ - I",
          bounds: { minX: -15.6, minZ: 12.6, maxX: -11.4, maxZ: 15.6 },
          number: "01.65",
        },
        {
          name: "STUDOVNA MÉDIÍ - II",
          bounds: { minX: -15.6, minZ: 9.6, maxX: -11.4, maxZ: 12.6 },
          number: "01.66",
        },
        {
          name: "POČÍTAČOVÝ SÁL",
          bounds: { minX: 10.05, minZ: -16.8, maxX: 16.8, maxZ: -5.475 },
          number: "01.13",
        },
        {
          name: "ZÁZEMÍ PRO KAVÁRNU - SKLAD NÁPOJŮ",
          bounds: { minX: 10.2, minZ: -5.325, maxX: 12.15, maxZ: -3.275 },
          number: "01.22",
        },
        {
          name: "V7",
          bounds: { minX: 12.15, minZ: -5.325, maxX: 13.34, maxZ: -4.61 },
          number: "V7",
        },
        {
          name: "NAHRÁVACÍ STUDIO",
          bounds: { minX: 13.4, minZ: 3, maxX: 16.8, maxZ: 6.55 },
          number: "01.70b",
        },
        {
          name: "REŽIE NAHRÁVACÍHO STUDIA",
          bounds: { minX: 10.3, minZ: 3, maxX: 13.15, maxZ: 6.55 },
          number: "01.70a",
        },
        {
          name: "KNIHAŘSKÁ DÍLNA",
          bounds: { minX: 10.05, minZ: 6.675, maxX: 16.8, maxZ: 17.87 },
          number: "01.17",
        },
        {
          name: "ÚKLID",
          bounds: { minX: 6.865, minZ: 16.8, maxX: 9.9, maxZ: 18.02 },
          number: "01.20",
        },
        {
          name: "ZÁZEMÍ PRO KAVÁRNU - PŘÍPRAVNA",
          baseBounds: { minX: 10.2, minZ: -3.125, maxX: 12.19, maxZ: -1.875 },
          extensionBoundsList: [
            {
              minX: 12.19,
              minZ: -4.51,
              maxX: 16.8,
              maxZ: -1.875,
            },
            {
              minX: 13.34,
              minZ: -5.325,
              maxX: 16.8,
              maxZ: -4.51,
            },
          ],
          number: "01.21",
        },
        {
          name: "KUCHYŇKA",
          baseBounds: { minX: 11.2, minZ: -1.725, maxX: 16.8, maxZ: 0.6 },
          extensionBoundsList: [
            {
              minX: 10.2,
              minZ: -1.725,
              maxX: 11.2,
              maxZ: -0.15,
            },
          ],
          number: "01.14",
        },
        {
          name: "ZÁZEMÍ PRO VYSTUPUJÍCÍ A PŘÍPRAVU AKCÍ",
          baseBounds: { minX: 10.55, minZ: 0.65, maxX: 16.8, maxZ: 3.15 },
          extensionBoundsList: [
            {
              minX: 10.2,
              minZ: 1.43,
              maxX: 10.55,
              maxZ: 3.15,
            },
          ],
          number: "01.16",
        },
        {
          name: "DIGITALIZAČNÍ PRACOVIŠTĚ",
          bounds: { minX: 18.62, minZ: 7.83, maxX: 24.92, maxZ: 18.07 },
          number: "01.18",
        },
        {
          name: "NÁDRŽ VODNÍ PLOCHY - Č.1",
          bounds: { minX: 25.1, minZ: 7.83, maxX: 33.2, maxZ: 14.525 },
          number: "01.74",
        },
        {
          name: "NÁDRŽ VODNÍ PLOCHY - Č.2",
          bounds: { minX: 33.4, minZ: 7.83, maxX: 37.08, maxZ: 14.525 },
          number: "01.75",
        },
        {
          name: "PŘÍVOD Z VODNÍ PLOCHY",
          bounds: { minX: 37.2, minZ: 7.83, maxX: 39.05, maxZ: 14.525 },
          number: "01.76",
        },
        {
          name: "T.Ú.V - SKLAD PRO REGULÁTOR PH A ALGICID",
          bounds: { minX: 31.475, minZ: 18.17, maxX: 34.05, maxZ: 19.675 },
          number: "01.28b",
        },
        {
          name: "T.Ú.V - DÁVKOVÁNÍ DEZINFEKČNÍHO ČINIDLA",
          bounds: { minX: 34.1, minZ: 18.17, maxX: 36.275, maxZ: 19.675 },
          number: "01.28c",
        },
        {
          name: "T.Ú.V - PROVOZNÍ SKLAD",
          bounds: { minX: 36.225, minZ: 18.17, maxX: 38.85, maxZ: 19.675 },
          number: "01.28d",
        },
        {
          name: "STROJOVNA ÚPRAVY VODY",
          bounds: { minX: 35.85, minZ: 21.9, maxX: 38.85, maxZ: 23.75 },
          number: "01.52",
        },
        {
          name: "ÚKLID A MYCÍ STROJ",
          bounds: { minX: 35.85, minZ: 23.8, maxX: 38.85, maxZ: 26.2 },
          number: "01.30",
        },
        {
          name: "STROJOVNA VZT GARÁŽE",
          bounds: { minX: 35.85, minZ: 26.25, maxX: 38.85, maxZ: 37.3 },
          number: "01.51",
        },
        {
          name: "ŠACHTA Š8",
          bounds: { minX: 35.85, minZ: 49, maxX: 38.85, maxZ: 51 },
          number: "01.61",
        },
        {
          name: "DÍLNA ÚDRŽBY",
          bounds: { minX: -21.62, minZ: 7.83, maxX: -18.62, maxZ: 17.96 },
          number: "01.26",
        },
        {
          name: "SKLAD NÁBYTKU",
          bounds: { minX: -24.8, minZ: 7.83, maxX: -21.67, maxZ: 17.96 },
          number: "01.44",
        },
        {
          name: "SKLAD KANCELÁŘSKÝCH POTŘEB",
          bounds: { minX: -28.3, minZ: 7.83, maxX: -24.85, maxZ: 11.3 },
          number: "01.43",
        },
        {
          name: "SKLAD ÚKLIDOVÝCH PROSTŘEDKŮ",
          bounds: { minX: -28.3, minZ: 11.5, maxX: -25, maxZ: 14.7 },
          number: "01.42",
        },
        {
          name: "VELÍN",
          bounds: { minX: -28.3, minZ: 14.9, maxX: -25, maxZ: 17.96 },
          number: "01.71",
        },
        {
          name: "AUTOMATICKÁ TLAKOVÁ STANICE",
          bounds: { minX: -39, minZ: 7.83, maxX: -35.85, maxZ: 9.9 },
          number: "01.58",
        },
        {
          name: "ODPAD",
          bounds: { minX: -39, minZ: 10.05, maxX: -35.85, maxZ: 14.75 },
          number: "01.41",
        },
        {
          name: "NAPOJOVACÍ UZEL SLABOPROUDU",
          bounds: { minX: -44, minZ: 11, maxX: -39.4, maxZ: 12.88 },
          number: "01.48",
        },
        {
          name: "ROZVODNA NÍZKÉHO NAPĚTÍ",
          bounds: { minX: -44, minZ: 13.03, maxX: -39.4, maxZ: 15.86 },
          number: "01.47",
        },
        {
          name: "TRANSFORMÁTOR",
          bounds: { minX: -44, minZ: 16.03, maxX: -41.35, maxZ: 18.46 },
          number: "01.46",
        },
        {
          name: "CHODBA (CELEK E)",
          bounds: { minX: -41.35, minZ: 16.03, maxX: -39.45, maxZ: 18.46 },
          number: "01.45",
        },
        {
          name: "ROZVODNA VYSOKÉHO NAPĚTÍ - MSVK",
          bounds: { minX: -44, minZ: 18.62, maxX: -39.45, maxZ: 21.18 },
          number: "01.49",
        },
        {
          name: "ROZVODNA VYSOKÉHO NAPĚTÍ - ČEZ",
          bounds: { minX: -44, minZ: 21.23, maxX: -39.25, maxZ: 24 },
          number: "01.50",
        },
        {
          name: "KOMORA PRO ARMATURY RETENCÍ",
          bounds: { minX: -44, minZ: 24, maxX: -39.25, maxZ: 25.22 },
          number: "01.32",
        },
        {
          name: "DIESELAGREGÁT",
          bounds: { minX: -38.85, minZ: 50.69, maxX: -32.5, maxZ: 54.5 },
          number: "01.53",
        },
        {
          name: "UPS",
          bounds: { minX: -38.85, minZ: 46.88, maxX: -32.65, maxZ: 50.5 },
          number: "01.54",
        },
        {
          name: "ROZVODNA SLP (GARÁŽ)",
          bounds: { minX: -32.5, minZ: 35.96, maxX: -29.1, maxZ: 37.47 },
          number: "01.34",
        },
      ],
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [
          { x: -3, z: -8, value: 26 },
          { x: 14, z: -15, value: 19 },
          { x: 7, z: 10, value: 25 },
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
        { x: 23.5, z: 19.7, label: "01.29" },
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
        { x: -41.7, z: -3, label: "01.77" },
      ],
    },
    {
      id: 0,
      name: "1NP",
      type: "aboveground",
      evacuation: [{ start: { x: 13.5, z: -8 }, end: { x: 1.5, z: 15.5 } }],
      dimensions: {
        width: 35.82,
        depth: 35.82,
      },
      holes: [
        { x: 0.86, z: 1.2, width: 2.1, depth: 6.8 }, // 2.11 - leva
        { x: 2, z: 1.2, width: 4, depth: 6.8 }, //2.11 - prava],
        { x: 8.4, z: -13.1775, width: 2.6, depth: 5.045 },
        { x: -8.4, z: 13.1775, width: 2.6, depth: 5.045 },
        { x: 1.875, z: 12.95, width: 5.3, depth: 2.15 },
        { x: 7.35, z: 15.95, width: 4.65, depth: 1.35 },
        { x: -5.375, z: 15.825, width: 2.45, depth: 1.6 }, //v4
        { x: -5.375, z: 14.15, width: 2.45, depth: 1.45 }, //v5
        { x: 0.1075, z: 10.8, width: 1.72, depth: 1.85 }, //v1
        { x: 1.96, z: 10.8, width: 1.615, depth: 1.85 }, //v2
        { x: 3.765, z: 10.8, width: 1.625, depth: 1.85 }, //v3
      ],
      endPoints: [
        { x: -2.6, z: 15.5, id: "B" },
        { x: -6.3, z: -16.5, id: "B" },
        { x: -3.3, z: -16.5, id: "B" },
      ],
      nav: {
        clearance: 0.05,
      },
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },

        furniture: [
          {
            type: "table",
            x: 12,
            z: -12,
            rotation: 0,
            tableOptions: { diameter: 1.6, height: 0.75 }, // kulatý stůl průměr 1.6 m
            chairs: 4,
            chairRadius: 1.1,
            chairAngleOffset: Math.PI / 4,
          },
          {
            type: "table",
            x: 15,
            z: -12,
            rotation: 0,
            tableOptions: { diameter: 1.6, height: 0.75 }, // kulatý stůl průměr 1.6 m
            chairs: 4,
            chairRadius: 1.1, // vzdálenost židlí od středu stolu
            chairAngleOffset: Math.PI / 4,
          },
          {
            type: "table",
            x: 12,
            z: -15,
            rotation: 0,
            tableOptions: { diameter: 1.6, height: 0.75 }, // kulatý stůl průměr 1.6 m
            chairs: 4,
            chairRadius: 1.1,
            chairAngleOffset: Math.PI / 4,
          },
          {
            type: "table",
            x: 15,
            z: -15,
            rotation: 0,
            tableOptions: { diameter: 1.6, height: 0.75 }, // kulatý stůl průměr 1.6 m
            chairs: 4,
            chairRadius: 1.1, // vzdálenost židlí od středu stolu
            chairAngleOffset: Math.PI / 4,
          },
          {
            type: "table",
            x: 12,
            z: -9,
            rotation: 0,
            tableOptions: { diameter: 1.6, height: 0.75 }, // kulatý stůl průměr 1.6 m
            chairs: 4,
            chairRadius: 1.1,
            chairAngleOffset: Math.PI / 4,
          },
          {
            type: "table",
            x: 15,
            z: -9,
            rotation: 0,
            tableOptions: { diameter: 1.6, height: 0.75 }, // kulatý stůl průměr 1.6 m
            chairs: 4,
            chairRadius: 1.1, // vzdálenost židlí od středu stolu
            chairAngleOffset: Math.PI / 4,
          },
          {
            type: "table",
            x: 12,
            z: 15,
            rotation: 0,
            tableOptions: { diameter: 1.6, height: 0.75 }, // kulatý stůl průměr 1.6 m
            chairs: 4,
            chairRadius: 1.1,
            chairAngleOffset: Math.PI / 4,
          },
          {
            type: "table",
            x: 15,
            z: 15,
            rotation: 0,
            tableOptions: { diameter: 1.6, height: 0.75 }, // kulatý stůl průměr 1.6 m
            chairs: 4,
            chairRadius: 1.1, // vzdálenost židlí od středu stolu
            chairAngleOffset: Math.PI / 4,
          },
          {
            type: "table",
            x: 12,
            z: 12,
            rotation: 0,
            tableOptions: { diameter: 1.6, height: 0.75 }, // kulatý stůl průměr 1.6 m
            chairs: 4,
            chairRadius: 1.1,
            chairAngleOffset: Math.PI / 4,
          },
          {
            type: "table",
            x: 15,
            z: 12,
            rotation: 0,
            tableOptions: { diameter: 1.6, height: 0.75 }, // kulatý stůl průměr 1.6 m
            chairs: 4,
            chairRadius: 1.1, // vzdálenost židlí od středu stolu
            chairAngleOffset: Math.PI / 4,
          },
          {
            type: "table",
            x: 12,
            z: 9,
            rotation: 0,
            tableOptions: { diameter: 1.6, height: 0.75 }, // kulatý stůl průměr 1.6 m
            chairs: 4,
            chairRadius: 1.1,
            chairAngleOffset: Math.PI / 4,
          },
          {
            type: "table",
            x: 15,
            z: 9,
            rotation: 0,
            tableOptions: { diameter: 1.6, height: 0.75 }, // kulatý stůl průměr 1.6 m
            chairs: 4,
            chairRadius: 1.1, // vzdálenost židlí od středu stolu
            chairAngleOffset: Math.PI / 4,
          },
          {
            type: "table",
            x: 12,
            z: 6,
            rotation: 0,
            tableOptions: { diameter: 1.6, height: 0.75 }, // kulatý stůl průměr 1.6 m
            chairs: 4,
            chairRadius: 1.1,
            chairAngleOffset: Math.PI / 4,
          },
          {
            type: "table",
            x: 15,
            z: 6,
            rotation: 0,
            tableOptions: { diameter: 1.6, height: 0.75 }, // kulatý stůl průměr 1.6 m
            chairs: 4,
            chairRadius: 1.1, // vzdálenost židlí od středu stolu
            chairAngleOffset: Math.PI / 4,
          },
          {
            type: "table",
            x: 12,
            z: 3,
            rotation: 0,
            tableOptions: { diameter: 1.6, height: 0.75 }, // kulatý stůl průměr 1.6 m
            chairs: 4,
            chairRadius: 1.1,
            chairAngleOffset: Math.PI / 4,
          },
          {
            type: "table",
            x: 15,
            z: 3,
            rotation: 0,
            tableOptions: { diameter: 1.6, height: 0.75 }, // kulatý stůl průměr 1.6 m
            chairs: 4,
            chairRadius: 1.1, // vzdálenost židlí od středu stolu
            chairAngleOffset: Math.PI / 4,
          },
        ],

        walls: [
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: -0.75, z: 9.85 },
            end: { x: -0.45, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0, z: 9.875 },
            end: { x: -0.45, z: 9.875 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0.45, z: 9.8625 },
            end: { x: 0, z: 9.8625 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0.45, z: 9.85 },
            end: { x: -0.45, z: 9.85 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0.45, z: 9.85 },
            end: { x: 0.965, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.155, z: 9.85 },
            end: { x: 1.35, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.35, z: 9.875 },
            end: { x: 1.8, z: 9.875 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.8, z: 9.8625 },
            end: { x: 2.25, z: 9.8625 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.35, z: 9.85 },
            end: { x: 2.25, z: 9.85 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 2.25, z: 9.85 },
            end: { x: 2.765, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 2.955, z: 9.85 },
            end: { x: 3.15, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 3.15, z: 9.875 },
            end: { x: 3.6, z: 9.875 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 3.6, z: 9.8625 },
            end: { x: 4.05, z: 9.8625 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 3.15, z: 9.85 },
            end: { x: 4.05, z: 9.85 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 4.05, z: 9.85 },
            end: { x: 4.575, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1, z: 16.6 },
            end: { x: -4.1, z: 16.145 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1125, z: 16.145 },
            end: { x: -4.1125, z: 15.645 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.125, z: 15.645 },
            end: { x: -4.125, z: 15.145 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1, z: 15.145 },
            end: { x: -4.1, z: 16.145 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1, z: 15.145 },
            end: { x: -4.1, z: 15.045 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1, z: 14.845 },
            end: { x: -4.1, z: 14.445 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1125, z: 14.445 },
            end: { x: -4.1125, z: 13.995 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.125, z: 13.995 },
            end: { x: -4.125, z: 13.545 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1, z: 14.445 },
            end: { x: -4.1, z: 13.545 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1, z: 13.545 },
            end: { x: -4.1, z: 13.445 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //kavarna sklo
            type: "partition",
            start: { x: 11.4, z: -1.2 },
            end: { x: 15.6, z: -1.2 },
            yLevel: 2.5,
            partitionWidth: 0.05,
            materialType: "greenGlass",
          },
          {
            //kavarna sklo
            type: "partition",
            start: { x: 11.4, z: -1.2 },
            end: { x: 11.4, z: -5.4 },
            yLevel: 2.5,
            partitionWidth: 0.05,
            materialType: "greenGlass",
          },
          {
            //kavarna sklo
            type: "partition",
            start: { x: 11.4, z: -5.4 },
            end: { x: 15.6, z: -5.4 },
            yLevel: 2.5,
            partitionWidth: 0.05,
            materialType: "greenGlass",
          },
          {
            //kavarna sklo
            type: "partition",
            start: { x: 15.6, z: -1.2 },
            end: { x: 15.6, z: -5.4 },
            yLevel: 2.5,
            partitionWidth: 0.05,
            materialType: "greenGlass",
          },
          {
            //kavarna
            type: "partition",
            start: { x: 11.4, z: -5.04 },
            end: { x: 12.19, z: -5.04 },
            partitionHeight: 1,
            partitionWidth: 0.72,
          },
          {
            //kavarna
            type: "partition",
            start: { x: 13.165, z: -5.375 },
            end: { x: 12.19, z: -5.375 },
            partitionHeight: 1,
            partitionWidth: 0.05,
          },
          {
            //kavarna
            type: "partition",
            start: { x: 13.165, z: -5.04 },
            end: { x: 13.7, z: -5.04 },
            partitionHeight: 1,
            partitionWidth: 0.72,
          },
          {
            //kavarna
            type: "partition",
            start: { x: 14.6, z: -5.04 },
            end: { x: 15.6, z: -5.04 },
            partitionHeight: 1,
            partitionWidth: 0.72,
          },
          {
            //kavarna
            type: "partition",
            start: { x: 11.45, z: -5.4 },
            end: { x: 11.45, z: -1.2 },
            partitionHeight: 1,
            partitionWidth: 0.1,
          },
          {
            //kavarna
            type: "partition",
            start: { x: 11.5, z: -1.25 },
            end: { x: 15.5, z: -1.25 },
            partitionHeight: 1,
            partitionWidth: 0.1,
          },
          {
            //kavarna
            type: "partition",
            start: { x: 15.55, z: -5.4 },
            end: { x: 15.55, z: -1.2 },
            partitionHeight: 1,
            partitionWidth: 0.1,
          },
          {
            //kavarna
            type: "partition",
            start: { x: 11.9, z: -4.68 },
            end: { x: 11.9, z: -1.2 },
            partitionHeight: 0.8,
            partitionWidth: 0.8,
          },
          {
            //kavarna
            type: "partition",
            start: { x: 15.1, z: -4.68 },
            end: { x: 15.1, z: -1.2 },
            partitionHeight: 0.8,
            partitionWidth: 0.8,
          },
          {
            //kavarna
            type: "partition",
            start: { x: 11.5, z: -1.7 },
            end: { x: 15.5, z: -1.7 },
            partitionHeight: 0.8,
            partitionWidth: 0.8,
          },
          {
            type: "partition",
            start: { x: 0.45, z: 9.775 },
            end: { x: 1.35, z: 9.775 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 2.25, z: 9.775 },
            end: { x: 3.15, z: 9.775 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.63, z: 9.7 },
            end: { x: 4.23, z: 9.7 },
            yLevel: 2.1,
            partitionWidth: 0.2,
          },
          {
            type: "partition",
            start: { x: 9.65, z: 9.65 },
            end: { x: 8.784, z: 9.2 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 5.05, z: 9.65 },
            end: { x: 5.916, z: 9.2 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -1.45, z: 9.65 },
            end: { x: -2.316, z: 10.15 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -3.35, z: 9.65 },
            end: { x: -2.484, z: 10.15 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -10.25, z: -9.5 },
            end: { x: -9.75, z: -8.634 },
            partitionWidth: 0.05,
            partitionHeight: 2.1,
          },
          {
            type: "stairs",
            position: { x: 9.075, z: -15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 39,
            floorP1: { x: 7.15, z: -11.855 },
            floorP2: { x: 9.65, z: -10.555 },
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: 7.725, z: -12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 39,
            floorP1: { x: 7.15, z: -15.7 },
            floorP2: { x: 9.65, z: -16.8 },
            direction: "bottom",
          },
          {
            type: "stairs",
            position: { x: 9.075, z: -15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 3,
            numSteps: 13,
            totalSteps: 39,
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: -9.075, z: 15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 39,
            floorP1: { x: -7.15, z: 11.855 },
            floorP2: { x: -9.65, z: 10.655 },
            direction: "bottom",
          },
          {
            type: "stairs",
            position: { x: -7.725, z: 12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 39,
            floorP1: { x: -7.15, z: 15.7 },
            floorP2: { x: -9.65, z: 16.8 },
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: -9.075, z: 15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 3,
            numSteps: 13,
            totalSteps: 39,
            direction: "bottom",
          },
          {
            type: "stairs",
            position: { x: 2.95, z: -2.222 },
            railing: "yes",
            stepWidth: 2.1,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 16,
            totalSteps: 48,
            floorP1: { x: -0.4, z: 4.6 },
            floorP2: { x: 4, z: 2.37 },
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: 2.95, z: -2.222 },
            railing: "yes",
            stepWidth: 2.1,
            stepDepth: 0.296,
            partPosition: 3,
            numSteps: 16,
            totalSteps: 48,
            direction: "top",
          },
          {
            type: "partition",
            start: { x: 4.05, z: -4.6 },
            end: { x: -0.45, z: -4.6 },
            partitionWidth: 0.05,
            yLevel: 3.65,
            partitionHeight: 1,
            materialType: "pinkGlass",
          },

          {
            type: "partition",
            start: { x: 4.05, z: 4.6 },
            end: { x: -0.45, z: 4.6 },
            partitionWidth: 0.05,
            yLevel: 1.765,
            partitionHeight: 1,
            materialType: "pinkGlass",
          },
          {
            type: "stairs",
            position: { x: 0.65, z: 2.218 },
            railing: "yes",
            stepWidth: 2.1,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 16,
            totalSteps: 48,
            floorP1: { x: -0.4, z: -2.37 },
            floorP2: { x: 4, z: -4.6 },
            direction: "bottom",
          },
          {
            //schodiste11 vnejsi leva
            type: "partition",
            start: { x: -0.3, z: 4.6 },
            end: { x: -0.3, z: -4.4 },
            partitionHeight: 1.2,
            partitionWidth: 0.05,
            materialType: "pinkGlass",
          },
          {
            //schodiste11 vnejsi vrchni leva
            type: "partition",
            start: { x: 4.05, z: 4.6 },
            end: { x: -0.32, z: 4.6 },
            partitionHeight: 1.2,
            partitionWidth: 0.05,
            materialType: "pinkGlass",
          },

          {
            //schodiste11 vnejsi prava
            type: "partition",
            start: { x: 4.03, z: -4.4 },
            end: { x: 4.03, z: 4.6 },
            partitionHeight: 1.2,
            partitionWidth: 0.05,
            materialType: "pinkGlass",
          },

          {
            //okna
            type: "partition",
            start: { x: 17.15, z: 17.15 },
            end: { x: 16.8, z: 16.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 16.2 },
            end: { x: 16.8, z: 16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 15 },
            end: { x: 16.8, z: 15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 13.8 },
            end: { x: 16.8, z: 13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 12.6 },
            end: { x: 16.8, z: 12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 11.4 },
            end: { x: 16.8, z: 11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 10.2 },
            end: { x: 16.8, z: 10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 9 },
            end: { x: 16.8, z: 9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 7.8 },
            end: { x: 16.8, z: 7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 6.6 },
            end: { x: 16.8, z: 6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 5.4 },
            end: { x: 16.8, z: 5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 4.2 },
            end: { x: 16.8, z: 4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 3 },
            end: { x: 16.8, z: 3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 1.8 },
            end: { x: 16.8, z: 1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 0.6 },
            end: { x: 16.8, z: 0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -0.6 },
            end: { x: 16.8, z: -0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -1.8 },
            end: { x: 16.8, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -3 },
            end: { x: 16.8, z: -3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -4.2 },
            end: { x: 16.8, z: -4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -5.4 },
            end: { x: 16.8, z: -5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -6.6 },
            end: { x: 16.8, z: -6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -7.8 },
            end: { x: 16.8, z: -7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -9 },
            end: { x: 16.8, z: -9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -10.2 },
            end: { x: 16.8, z: -10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -11.4 },
            end: { x: 16.8, z: -11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -12.6 },
            end: { x: 16.8, z: -12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -13.8 },
            end: { x: 16.8, z: -13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -15 },
            end: { x: 16.8, z: -15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -16.2 },
            end: { x: 16.8, z: -16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 16.8, z: -16.8 },
            end: { x: 17.15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 16.2, z: -16.8 },
            end: { x: 16.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 15, z: -16.8 },
            end: { x: 15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 13.8, z: -16.8 },
            end: { x: 13.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 12.6, z: -16.8 },
            end: { x: 12.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 11.4, z: -16.8 },
            end: { x: 11.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 9, z: -16.8 },
            end: { x: 9, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 7.8, z: -16.8 },
            end: { x: 7.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 6.6, z: -16.8 },
            end: { x: 6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 5.4, z: -16.8 },
            end: { x: 5.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 4.2, z: -16.8 },
            end: { x: 4.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 3, z: -16.8 },
            end: { x: 3, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -9, z: -16.8 },
            end: { x: -9, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -10.2, z: -16.8 },
            end: { x: -10.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -11.4, z: -16.8 },
            end: { x: -11.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -12.6, z: -16.8 },
            end: { x: -12.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -13.8, z: -16.8 },
            end: { x: -13.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -15, z: -16.8 },
            end: { x: -15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.2, z: -16.8 },
            end: { x: -16.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.8, z: -16.8 },
            end: { x: -17.15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //okna
            type: "partition",
            start: { x: -17.15, z: 17.15 },
            end: { x: -16.8, z: 16.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 16.2 },
            end: { x: -16.8, z: 16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 15 },
            end: { x: -16.8, z: 15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 13.8 },
            end: { x: -16.8, z: 13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 12.6 },
            end: { x: -16.8, z: 12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 11.4 },
            end: { x: -16.8, z: 11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 10.2 },
            end: { x: -16.8, z: 10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 9 },
            end: { x: -16.8, z: 9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 7.8 },
            end: { x: -16.8, z: 7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 6.6 },
            end: { x: -16.8, z: 6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 5.4 },
            end: { x: -16.8, z: 5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 4.2 },
            end: { x: -16.8, z: 4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 3 },
            end: { x: -16.8, z: 3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 1.8 },
            end: { x: -16.8, z: 1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 0.6 },
            end: { x: -16.8, z: 0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -0.6 },
            end: { x: -16.8, z: -0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -1.8 },
            end: { x: -16.8, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -3 },
            end: { x: -16.8, z: -3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -4.2 },
            end: { x: -16.8, z: -4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -5.4 },
            end: { x: -16.8, z: -5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -6.6 },
            end: { x: -16.8, z: -6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -7.8 },
            end: { x: -16.8, z: -7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -9 },
            end: { x: -16.8, z: -9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -10.2 },
            end: { x: -16.8, z: -10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -11.4 },
            end: { x: -16.8, z: -11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -12.6 },
            end: { x: -16.8, z: -12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -13.8 },
            end: { x: -16.8, z: -13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -15 },
            end: { x: -16.8, z: -15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -16.2 },
            end: { x: -16.8, z: -16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 16.8, z: 16.8 },
            end: { x: 17.15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 16.2, z: 16.8 },
            end: { x: 16.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 15, z: 16.8 },
            end: { x: 15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 13.8, z: 16.8 },
            end: { x: 13.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 12.6, z: 16.8 },
            end: { x: 12.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 11.4, z: 16.8 },
            end: { x: 11.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 10.2, z: 16.8 },
            end: { x: 10.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 9, z: 16.8 },
            end: { x: 9, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 7.8, z: 16.8 },
            end: { x: 7.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 6.6, z: 16.8 },
            end: { x: 6.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 5.4, z: 16.8 },
            end: { x: 5.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 4.2, z: 16.8 },
            end: { x: 4.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 3, z: 16.8 },
            end: { x: 3, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 1.8, z: 16.8 },
            end: { x: 1.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 0.6, z: 16.8 },
            end: { x: 0.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.6, z: 16.8 },
            end: { x: -0.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -1.8, z: 16.8 },
            end: { x: -1.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -4.2, z: 16.8 },
            end: { x: -4.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -5.4, z: 16.8 },
            end: { x: -5.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -6.6, z: 16.8 },
            end: { x: -6.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -7.8, z: 16.8 },
            end: { x: -7.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -9, z: 16.8 },
            end: { x: -9, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -10.2, z: 16.8 },
            end: { x: -10.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -11.4, z: 16.8 },
            end: { x: -11.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -12.6, z: 16.8 },
            end: { x: -12.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -13.8, z: 16.8 },
            end: { x: -13.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -15, z: 16.8 },
            end: { x: -15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.2, z: 16.8 },
            end: { x: -16.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.8, z: 16.8 },
            end: { x: -17.15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            //Kostka - vnejsi vrsek 1
            type: "partition",
            start: { x: -17.91, z: 17.91 },
            end: { x: -9, z: 17.91 },
            materialType: "glass",
          },
          {
            //Kostka - schodiste02 pricka dvere
            type: "partition",
            start: { x: -7.8, z: 17.91 },
            end: { x: -9, z: 17.91 },
            yLevel: 2.7,
            materialType: "glass",
          },
          {
            //Kostka - vnejsi vrsek 2
            type: "partition",
            start: { x: -7.8, z: 17.91 },
            end: { x: -3.6, z: 17.91 },
            materialType: "glass",
          },
          {
            //Kostka - pricka dvere 1.04
            type: "partition",
            start: { x: -1.8, z: 17.91 },
            end: { x: -3.6, z: 17.91 },
            yLevel: 2.7,
            materialType: "glass",
          },
          {
            //Kostka - vnejsi vrsek 3
            type: "partition",
            start: { x: -1.8, z: 17.91 },
            end: { x: 17.91, z: 17.91 },
            materialType: "glass",
          },
          {
            //Kostka - vnejsi leva
            type: "partition",
            start: { x: -17.91, z: 17.91 },
            end: { x: -17.91, z: -17.91 },
            materialType: "glass",
          },
          {
            //Kostka - vnejsi prava
            type: "partition",
            start: { x: 17.91, z: 17.91 },
            end: { x: 17.91, z: -17.91 },
            materialType: "glass",
          },
          {
            //Kostka - vnejsi spodni 1
            type: "partition",
            start: { x: -17.91, z: -17.91 },
            end: { x: -7.68, z: -17.91 },
            materialType: "glass",
          },
          {
            //Kostka - vnejsi spodni 2
            type: "partition",
            start: { x: -5.48, z: -17.91 },
            end: { x: -4.08, z: -17.91 },
            materialType: "glass",
          },
          {
            //Kostka - vnejsi spodni 3
            type: "partition",
            start: { x: -1.88, z: -17.91 },
            end: { x: 7.8, z: -17.91 },
            materialType: "glass",
          },
          {
            //Kostka - vnejsi pricka schodiste01
            type: "partition",
            start: { x: 7.8, z: -17.91 },
            end: { x: 10.2, z: -17.91 },
            yLevel: 2.7,
            materialType: "glass",
          },
          {
            //Kostka - vnejsi spodni 4
            type: "partition",
            start: { x: 10.2, z: -17.91 },
            end: { x: 17.91, z: -17.91 },
            materialType: "glass",
          },
          {
            //Kostka - vnitrni vrsek 1
            type: "partition",
            start: { x: -17.15, z: 17.15 },
            end: { x: -10.2, z: 17.15 },
            materialType: "glass",
          },
          {
            //Kostka - vnitrni vrsek 2
            type: "partition",
            start: { x: 10.2, z: 17.15 },
            end: { x: 17.15, z: 17.15 },
            materialType: "glass",
          },
          {
            //Kostka - vnitrni prava
            type: "partition",
            start: { x: 17.15, z: 17.15 },
            end: { x: 17.15, z: -17.15 },
            materialType: "glass",
          },
          {
            //Kostka - vnitrni spodni 3
            type: "partition",
            start: { x: 10.2, z: -17.15 },
            end: { x: 17.15, z: -17.15 },
            materialType: "glass",
          },
          {
            //Kostka - vnitrni spodni 2
            type: "partition",
            start: { x: 2.97, z: -17.15 },
            end: { x: 6.6, z: -17.15 },
            materialType: "glass",
          },
          {
            //Kostka - vnitrni spodni 1
            type: "partition",
            start: { x: -17.15, z: -17.15 },
            end: { x: -8.93, z: -17.15 },
            materialType: "glass",
          },
          {
            //Kostka - vnitrni leva
            type: "partition",
            start: { x: -17.15, z: 17.15 },
            end: { x: -17.15, z: -17.15 },
            materialType: "glass",
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
            //Schodiste02 - pricka dvere
            type: "partition",
            start: { x: -7.8, z: 16.875 },
            end: { x: -9, z: 16.875 },
            yLevel: 2.7,
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
            //VRCHNI PRICKY
            //V4, V5, 03, 06
            type: "partition",
            start: { x: -3.95, z: 16.6 },
            end: { x: -3.95, z: 10.15 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //2.05 - Pricka leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 9.8 },
            partitionWidth: 0.4,
            yLevel: 2.1,
          },
          {
            //2.05 - Pricka prava
            type: "partition",
            start: { x: 3.325, z: 16.6 },
            end: { x: 3.325, z: 14.3 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //2schodiste 02
            type: "partition",
            start: { x: -10, z: 9.7 },
            end: { x: -7.15, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //07 - prava spodni pricka
            type: "partition",
            start: { x: 5.05, z: 9.7 },
            end: { x: 10.2, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //04 - spodni pricka
            type: "partition",
            start: { x: -5, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //1.07 - vrchni pricka
            type: "partition",
            start: { x: 5.05, z: 13.275 },
            end: { x: 10.2, z: 13.275 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //1.07 - spodni pricka
            type: "partition",
            start: { x: 5.05, z: 11.525 },
            end: { x: 7.2, z: 11.525 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //1.08 - zachod prava 1
            type: "partition",
            start: { x: 8.325, z: 13.3 },
            end: { x: 8.325, z: 11.5 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //ROZVADECE - pricka
            type: "partition",
            start: { x: -10.36, z: -8.2 },
            end: { x: -10.36, z: -9.85 },
            partitionWidth: 0.3,
            yLevel: 2.1,
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
            //1.04 - pricka deere
            type: "partition",
            start: { x: -1.8, z: 16.7 },
            end: { x: -3.6, z: 16.7 },
            yLevel: 2.7,
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
            materialType: "glass",
          },
          {
            // devere 1 pricka spodni
            type: "partition",
            start: { x: -7.68, z: -17.91 },
            end: { x: -5.48, z: -17.91 },
            partitionWidth: 0.15,
            yLevel: 2.7,
            materialType: "glass",
          },
          {
            // devere 2 pricka spodni
            type: "partition",
            start: { x: -4.08, z: -17.91 },
            end: { x: -1.88, z: -17.91 },
            partitionWidth: 0.15,
            yLevel: 2.7,
            materialType: "glass",
          },
          {
            // devere 1 pricka vrchni
            type: "partition",
            start: { x: -7.68, z: -13.875 },
            end: { x: -5.48, z: -13.875 },
            partitionWidth: 0.1,
            yLevel: 2.7,
            materialType: "glass",
          },
          {
            // devere 2 pricka vrchni
            type: "partition",
            start: { x: -4.08, z: -13.875 },
            end: { x: -1.88, z: -13.875 },
            partitionWidth: 0.1,
            yLevel: 2.7,
            materialType: "glass",
          },
          {
            //1.15 vrchni 1
            type: "partition",
            start: { x: -8.98, z: -13.875 },
            end: { x: -7.68, z: -13.875 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //1.15 vertilalni 1
            type: "partition",
            start: { x: -7.73, z: -13.925 },
            end: { x: -7.73, z: -14.215 },
            partitionWidth: 0.1,
          },
          {
            //1.15 vertilalni 1 spodni
            type: "partition",
            start: { x: -7.73, z: -17.835 },
            end: { x: -7.73, z: -17.545 },
            partitionWidth: 0.1,
          },
          {
            //1.15 vrchni 2
            type: "partition",
            start: { x: -5.48, z: -13.875 },
            end: { x: -4.08, z: -13.875 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //1.15 vertilalni 2
            type: "partition",
            start: { x: -5.43, z: -13.925 },
            end: { x: -5.43, z: -14.215 },
            partitionWidth: 0.1,
          },
          {
            //1.15 vertilalni 3
            type: "partition",
            start: { x: -4.13, z: -13.925 },
            end: { x: -4.13, z: -14.215 },
            partitionWidth: 0.1,
          },
          {
            //1.15 vertilalni 2 spodni
            type: "partition",
            start: { x: -5.43, z: -17.835 },
            end: { x: -5.43, z: -17.545 },
            partitionWidth: 0.1,
          },
          {
            //1.15 vertilalni 3 spodni
            type: "partition",
            start: { x: -4.13, z: -17.835 },
            end: { x: -4.13, z: -17.545 },
            partitionWidth: 0.1,
          },
          {
            //1.14 vrchni
            type: "partition",
            start: { x: -1.88, z: -13.875 },
            end: { x: 3.02, z: -13.875 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //1.14 vertilalni
            type: "partition",
            start: { x: -1.83, z: -13.925 },
            end: { x: -1.83, z: -14.215 },
            partitionWidth: 0.1,
          },
          {
            //1.14 vertilalni spodni
            type: "partition",
            start: { x: -1.83, z: -17.835 },
            end: { x: -1.83, z: -17.545 },
            partitionWidth: 0.1,
          },
          {
            //1.14 vertilalni 2
            type: "partition",
            start: { x: 0.555, z: -13.925 },
            end: { x: 0.555, z: -14.215 },
            partitionWidth: 0.1,
          },
          {
            //1.14 vertilalni 2 spodni
            type: "partition",
            start: { x: 0.555, z: -17.835 },
            end: { x: 0.555, z: -17.545 },
            partitionWidth: 0.1,
          },
          {
            //1.14 prava vrchni
            type: "partition",
            start: { x: 2.97, z: -13.875 },
            end: { x: 2.97, z: -15.2 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //1.14 pricka dvere
            type: "partition",
            start: { x: 2.97, z: -16.2 },
            end: { x: 2.97, z: -15.2 },
            yLevel: 2.8,
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //1.14 prava spodni
            type: "partition",
            start: { x: 2.97, z: -16.2 },
            end: { x: 2.97, z: -17.935 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //1.14 leva
            type: "partition",
            start: { x: 0.555, z: -14.215 },
            end: { x: 0.555, z: -17.545 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 6.875, z: -15.7 },
            end: { x: 6.875, z: -10.2 },
            partitionWidth: 0.55,
          },
          {
            //Schodiste01 - pricka dvere leve
            type: "partition",
            start: { x: 6.875, z: -15.7 },
            end: { x: 6.875, z: -16.8 },
            yLevel: 2.7,
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
            end: { x: 7.8, z: -16.875 },
            partitionWidth: 0.15,
          },
          {
            //Schodiste01 - spodni pricka dvere
            type: "partition",
            start: { x: 9, z: -16.875 },
            end: { x: 7.8, z: -16.875 },
            yLevel: 2.7,
            partitionWidth: 0.15,
          },
          {
            //Schodiste01 - spodni prava
            type: "partition",
            start: { x: 9, z: -16.875 },
            end: { x: 10.15, z: -16.875 },
            partitionWidth: 0.15,
          },
          {
            // bar nejaky divny
            type: "partition",
            start: { x: -10.7, z: 3.4 },
            end: { x: -10.7, z: -4.4 },
            partitionWidth: 1.2,
            partitionHeight: 0.8,
          },
          {
            type: "partition",
            start: { x: -10.1, z: 3.4 },
            end: { x: -13.1, z: 3.4 },
            partitionWidth: 1.2,
            partitionHeight: 0.8,
          },
          {
            type: "partition",
            start: { x: -13.7, z: 4 },
            end: { x: -13.7, z: -0.8 },
            partitionWidth: 1.2,
            partitionHeight: 0.8,
          },
          {
            type: "partition",
            start: { x: -13.7, z: -1.8 },
            end: { x: -13.7, z: -4.4 },
            partitionWidth: 1.2,
            partitionHeight: 0.8,
          },
          {
            // bar nejaky divny sklo
            type: "partition",
            start: { x: -14.3, z: 4 },
            end: { x: -14.3, z: -0.2 },
            partitionWidth: 0.05,
            yLevel: 2.5,
            materialType: "yellowGlass",
          },
          {
            // bar nejaky divny sklo
            type: "partition",
            start: { x: -10.1, z: 4 },
            end: { x: -14.3, z: 4 },
            partitionWidth: 0.05,
            yLevel: 2.5,
            materialType: "yellowGlass",
          },
          {
            // bar nejaky divny sklo
            type: "partition",
            start: { x: -10.1, z: 4 },
            end: { x: -10.1, z: -0.2 },
            partitionWidth: 0.05,
            yLevel: 2.5,
            materialType: "yellowGlass",
          },
          {
            // bar nejaky divny sklo
            type: "partition",
            start: { x: -10.1, z: -0.2 },
            end: { x: -14.3, z: -0.2 },
            partitionWidth: 0.05,
            yLevel: 2.5,
            materialType: "yellowGlass",
          },
        ],
      },
      rooms: [
        {
          name: "TŘÍDÍCÍ PROSTOR",
          bounds: { minX: -16.8, minZ: 10.2, maxX: -10.2, maxZ: 16.8 },
          number: "1.13",
        },
        {
          //vrsek
          name: "SCHODIŠTĚ (JÁDRO C)",
          bounds: { minX: -9.7, minZ: 10.4, maxX: -7.2, maxZ: 16.8 },
          number: "1.02",
        },
        {
          name: "V4",
          bounds: { minX: -6.6, minZ: 14.95, maxX: -4.05, maxZ: 16.6 },
          number: "V4",
        },
        {
          name: "V5",
          bounds: { minX: -6.6, minZ: 13.375, maxX: -4.05, maxZ: 14.95 },
          number: "V5",
        },
        {
          name: "ROZVODNA SLP",
          bounds: { minX: -6.6, minZ: 11.675, maxX: -4.05, maxZ: 13.375 },
          number: "1.03",
        },
        {
          name: "WC ZAMĚSTNANCI",
          bounds: { minX: -6.6, minZ: 9.7, maxX: -4.05, maxZ: 11.675 },
          number: "1.06",
        },
        {
          name: "MANIPULAČNÍ PROSTOR",
          bounds: { minX: -3.85, minZ: 9.8, maxX: -1.15, maxZ: 16.6 },
          number: "1.04",
        },
        {
          name: "PODATELNA",
          bounds: { minX: -0.75, minZ: 14.2, maxX: 3.25, maxZ: 16.6 },
          number: "1.19",
        },
        {
          name: "ÚKLID",
          bounds: { minX: 3.4, minZ: 14.2, maxX: 4.5, maxZ: 16.6 },
          number: "1.16",
        },
        {
          name: "V1",
          bounds: { minX: -0.75, minZ: 9.8, maxX: 0.97, maxZ: 11.7 },
          number: "V1",
        },
        {
          name: "V2",
          bounds: { minX: 1.16, minZ: 9.8, maxX: 2.75, maxZ: 11.7 },
          number: "V2",
        },
        {
          name: "V3",
          bounds: { minX: 2.95, minZ: 9.8, maxX: 4.7, maxZ: 11.7 },
          number: "V3",
        },
        {
          name: "WC MUŽI",
          bounds: { minX: 5.05, minZ: 9.8, maxX: 7.2, maxZ: 15.1 },
          number: "1.07",
        },
        {
          name: "WC ŽENY",
          bounds: { minX: 7.4, minZ: 9.8, maxX: 9.65, maxZ: 15.1 },
          number: "1.08",
        },
        {
          // rozvaděče
          name: "ROZVADĚČE",
          bounds: { minX: -13.5, minZ: -9.8, maxX: -11.85, maxZ: -8.2 },
          number: "1.09a",
        },
        {
          name: "ROZDĚLOVAČE PODLAHOVÉHO TOPENÍ",
          bounds: { minX: -11.85, minZ: -9.5, maxX: -10.2, maxZ: -8.5 },
          number: "1.09b",
        },
        {
          name: "SCHODIŠTĚ (JÁDRO B)",
          bounds: { minX: 7.15, minZ: -16.8, maxX: 9.65, maxZ: -10.6 },
          number: "1.01",
        },
        {
          name: "ZÁDVEŘÍ",
          bounds: { minX: -8.93, minZ: -17.84, maxX: 0.555, maxZ: -13.925 },
          number: "1.15",
        },
        {
          name: "VRÁTNICE",
          bounds: { minX: 0.555, minZ: -17.84, maxX: 2.92, maxZ: -13.925 },
          number: "1.14",
        },
      ],
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [
          { x: -9, z: 0, value: 28 },
          { x: 6, z: -12, value: 18 },
          { x: -13, z: 4, value: 21 },
        ],
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
      icons: [
        {
          x: -2.5,
          z: 10.5,
          type: "camera",
          label: "Kamera - 1.04",
          status: "Aktivní",
        },
        {
          x: -15.5,
          z: 15.5,
          type: "thermometer",
          label: "Teploměr - 1.13",
          status: "Aktivní",
        },
        {
          x: 1.95,
          z: 13,
          type: "camera",
          label: "Kamera - Šachta",
          status: "Aktivní",
        },
        {
          x: 15.5,
          z: 15.5,
          type: "thermometer",
          label: "Teploměr - 1.10 / 1",
          status: "Aktivní",
        },
        {
          x: 1.8,
          z: -4.5,
          type: "camera",
          label: "Kamera - 1.11",
          status: "Aktivní",
        },
        {
          x: -15.4,
          z: -9,
          type: "camera",
          label: "Kamera - 1.09",
          status: "Neaktivní",
        },
        {
          x: 1.8,
          z: -17,
          type: "thermometer",
          label: "Teploměr - 1.14",
          status: "Aktivní",
        },
        {
          x: -11,
          z: 8,
          type: "wifi",
          label: "Router - 1",
          status: "Aktivní",
          healthStatus: "Good",
        },
        {
          x: -9,
          z: -11,
          type: "wifi",
          label: "Router /  2",
          status: "Aktivní",
          healthStatus: "Good",
        },
        {
          x: 13,
          z: -10,
          type: "wifi",
          label: "Router /  3",
          status: "Aktivní",
          healthStatus: "Unstable",
        },
        {
          x: 13,
          z: 10,
          type: "wifi",
          label: "Router /  4",
          status: "Aktivní",
          healthStatus: "Average",
        },
        {
          x: 3.2,
          z: 0,
          type: "wifi",
          label: "Router /  6",
          status: "Aktivní",
          healthStatus: "Good",
        },
        {
          x: 1,
          z: -11,
          type: "wifi",
          label: "Router /  7",
          status: "Aktivní",
          healthStatus: "Good",
        },
        {
          x: -0,
          z: 13,
          type: "wifi",
          label: "Router /  8",
          status: "Aktivní",
          healthStatus: "Average",
        },
        {
          x: 8.4,
          z: -16,
          type: "camera",
          label: "Kamera - 1.01",
          status: "Aktivní",
        },
        {
          x: -8.3,
          z: -14.5,
          type: "camera",
          label: "Kamera - 1.15",
          status: "Aktivní",
        },
      ],
    },
    {
      id: 1,
      name: "2NP",
      type: "aboveground",
      dimensions: {
        width: 35.82,
        depth: 35.82,
      },
      holes: [
        { x: 0.86, z: -0.2, width: 2.1, depth: 8.2 }, // 2.11 - leva
        { x: 2, z: -1, width: 4, depth: 6.6 }, //2.11 - prava
        { x: 8.4, z: -14.4, width: 3, depth: 5 }, //1.1
        { x: -8.4, z: 14.4, width: 3, depth: 5 }, //1.1
        { x: 1.875, z: 12.95, width: 5.3, depth: 2.15 },
        { x: 7.35, z: 15.95, width: 4.65, depth: 1.35 },
        { x: -5.375, z: 15.825, width: 2.45, depth: 1.6 }, //v4
        { x: -5.375, z: 14.15, width: 2.45, depth: 1.45 }, //v5
        { x: 0.1075, z: 10.8, width: 1.72, depth: 1.85 }, //v1
        { x: 1.96, z: 10.8, width: 1.615, depth: 1.85 }, //v2
        { x: 3.765, z: 10.8, width: 1.625, depth: 1.85 }, //v3
      ],
      endPoints: [
        { x: 2.95, z: 3.6, id: "B" },
        { x: -9.1, z: 11.2, id: "B" },
        { x: 9.1, z: -11.2, id: "B" },
      ],
      nav: {
        clearance: 0.35, // menší clearance, aby prošly i 0.8 m dveře (2 * 0.35 = 0.7)
      },
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },

        walls: [
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: -0.75, z: 9.85 },
            end: { x: -0.45, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0, z: 9.875 },
            end: { x: -0.45, z: 9.875 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0.45, z: 9.8625 },
            end: { x: 0, z: 9.8625 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0.45, z: 9.85 },
            end: { x: -0.45, z: 9.85 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0.45, z: 9.85 },
            end: { x: 0.965, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.155, z: 9.85 },
            end: { x: 1.35, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.35, z: 9.875 },
            end: { x: 1.8, z: 9.875 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.8, z: 9.8625 },
            end: { x: 2.25, z: 9.8625 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.35, z: 9.85 },
            end: { x: 2.25, z: 9.85 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 2.25, z: 9.85 },
            end: { x: 2.765, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 2.955, z: 9.85 },
            end: { x: 3.15, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 3.15, z: 9.875 },
            end: { x: 3.6, z: 9.875 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 3.6, z: 9.8625 },
            end: { x: 4.05, z: 9.8625 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 3.15, z: 9.85 },
            end: { x: 4.05, z: 9.85 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 4.05, z: 9.85 },
            end: { x: 4.575, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1, z: 16.6 },
            end: { x: -4.1, z: 16.145 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1125, z: 16.145 },
            end: { x: -4.1125, z: 15.645 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.125, z: 15.645 },
            end: { x: -4.125, z: 15.145 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1, z: 15.145 },
            end: { x: -4.1, z: 16.145 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1, z: 15.145 },
            end: { x: -4.1, z: 15.045 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1, z: 14.845 },
            end: { x: -4.1, z: 14.445 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1125, z: 14.445 },
            end: { x: -4.1125, z: 13.995 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.125, z: 13.995 },
            end: { x: -4.125, z: 13.545 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1, z: 14.445 },
            end: { x: -4.1, z: 13.545 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1, z: 13.545 },
            end: { x: -4.1, z: 13.445 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            type: "partition",
            start: { x: 0.45, z: 9.775 },
            end: { x: 1.35, z: 9.775 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 2.25, z: 9.775 },
            end: { x: 3.15, z: 9.775 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.63, z: 9.7 },
            end: { x: 4.23, z: 9.7 },
            yLevel: 2.1,
            partitionWidth: 0.2,
          },
          {
            type: "stairs",
            position: { x: 7.725, z: -12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: 7.15, z: -15.7 },
            floorP2: { x: 9.65, z: -16.8 },
            direction: "bottom",
          },
          {
            type: "stairs",
            position: { x: 9.075, z: -15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 26,
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: -7.725, z: 12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: -7.15, z: 15.7 },
            floorP2: { x: -9.65, z: 16.8 },
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: -9.075, z: 15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 26,
            direction: "bottom",
          },

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
              { x: -17.15, z: -17.15 },
              { x: 17.15, z: -17.15 },
              { x: 17.15, z: 17.15 },
              { x: -17.15, z: 17.15 },
            ],
          },
          {
            //okna
            type: "partition",
            start: { x: 17.15, z: 17.15 },
            end: { x: 16.8, z: 16.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 16.2 },
            end: { x: 16.8, z: 16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 15 },
            end: { x: 16.8, z: 15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 13.8 },
            end: { x: 16.8, z: 13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 12.6 },
            end: { x: 16.8, z: 12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 11.4 },
            end: { x: 16.8, z: 11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 10.2 },
            end: { x: 16.8, z: 10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 9 },
            end: { x: 16.8, z: 9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 7.8 },
            end: { x: 16.8, z: 7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 6.6 },
            end: { x: 16.8, z: 6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 5.4 },
            end: { x: 16.8, z: 5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 4.2 },
            end: { x: 16.8, z: 4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 3 },
            end: { x: 16.8, z: 3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 1.8 },
            end: { x: 16.8, z: 1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 0.6 },
            end: { x: 16.8, z: 0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -0.6 },
            end: { x: 16.8, z: -0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -1.8 },
            end: { x: 16.8, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -3 },
            end: { x: 16.8, z: -3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -4.2 },
            end: { x: 16.8, z: -4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -5.4 },
            end: { x: 16.8, z: -5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -6.6 },
            end: { x: 16.8, z: -6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -7.8 },
            end: { x: 16.8, z: -7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -9 },
            end: { x: 16.8, z: -9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -10.2 },
            end: { x: 16.8, z: -10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -11.4 },
            end: { x: 16.8, z: -11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -12.6 },
            end: { x: 16.8, z: -12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -13.8 },
            end: { x: 16.8, z: -13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -15 },
            end: { x: 16.8, z: -15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -16.2 },
            end: { x: 16.8, z: -16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 16.8, z: -16.8 },
            end: { x: 17.15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 16.2, z: -16.8 },
            end: { x: 16.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 15, z: -16.8 },
            end: { x: 15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 13.8, z: -16.8 },
            end: { x: 13.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 12.6, z: -16.8 },
            end: { x: 12.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 11.4, z: -16.8 },
            end: { x: 11.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 9, z: -16.8 },
            end: { x: 9, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 7.8, z: -16.8 },
            end: { x: 7.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 6.6, z: -16.8 },
            end: { x: 6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 5.4, z: -16.8 },
            end: { x: 5.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 4.2, z: -16.8 },
            end: { x: 4.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 3, z: -16.8 },
            end: { x: 3, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 1.8, z: -16.8 },
            end: { x: 1.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 0.6, z: -16.8 },
            end: { x: 0.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.6, z: -16.8 },
            end: { x: -0.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -1.8, z: -16.8 },
            end: { x: -1.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -3, z: -16.8 },
            end: { x: -3, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -4.2, z: -16.8 },
            end: { x: -4.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -5.4, z: -16.8 },
            end: { x: -5.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -6.6, z: -16.8 },
            end: { x: -6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -7.8, z: -16.8 },
            end: { x: -7.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -9, z: -16.8 },
            end: { x: -9, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -10.2, z: -16.8 },
            end: { x: -10.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -11.4, z: -16.8 },
            end: { x: -11.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -12.6, z: -16.8 },
            end: { x: -12.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -13.8, z: -16.8 },
            end: { x: -13.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -15, z: -16.8 },
            end: { x: -15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.2, z: -16.8 },
            end: { x: -16.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.8, z: -16.8 },
            end: { x: -17.15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //okna
            type: "partition",
            start: { x: -17.15, z: 17.15 },
            end: { x: -16.8, z: 16.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 16.2 },
            end: { x: -16.8, z: 16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 15 },
            end: { x: -16.8, z: 15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 13.8 },
            end: { x: -16.8, z: 13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 12.6 },
            end: { x: -16.8, z: 12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 11.4 },
            end: { x: -16.8, z: 11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 10.2 },
            end: { x: -16.8, z: 10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 9 },
            end: { x: -16.8, z: 9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 7.8 },
            end: { x: -16.8, z: 7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 6.6 },
            end: { x: -16.8, z: 6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 5.4 },
            end: { x: -16.8, z: 5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 4.2 },
            end: { x: -16.8, z: 4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 3 },
            end: { x: -16.8, z: 3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 1.8 },
            end: { x: -16.8, z: 1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 0.6 },
            end: { x: -16.8, z: 0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -0.6 },
            end: { x: -16.8, z: -0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -1.8 },
            end: { x: -16.8, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -3 },
            end: { x: -16.8, z: -3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -4.2 },
            end: { x: -16.8, z: -4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -5.4 },
            end: { x: -16.8, z: -5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -6.6 },
            end: { x: -16.8, z: -6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -7.8 },
            end: { x: -16.8, z: -7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -9 },
            end: { x: -16.8, z: -9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -10.2 },
            end: { x: -16.8, z: -10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -11.4 },
            end: { x: -16.8, z: -11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -12.6 },
            end: { x: -16.8, z: -12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -13.8 },
            end: { x: -16.8, z: -13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -15 },
            end: { x: -16.8, z: -15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -16.2 },
            end: { x: -16.8, z: -16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 16.8, z: 16.8 },
            end: { x: 17.15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 16.2, z: 16.8 },
            end: { x: 16.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 15, z: 16.8 },
            end: { x: 15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 13.8, z: 16.8 },
            end: { x: 13.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 12.6, z: 16.8 },
            end: { x: 12.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 11.4, z: 16.8 },
            end: { x: 11.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 10.2, z: 16.8 },
            end: { x: 10.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 9, z: 16.8 },
            end: { x: 9, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 7.8, z: 16.8 },
            end: { x: 7.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 6.6, z: -16.8 },
            end: { x: 6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 5.4, z: 16.8 },
            end: { x: 5.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 4.2, z: 16.8 },
            end: { x: 4.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 3, z: 16.8 },
            end: { x: 3, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 1.8, z: 16.8 },
            end: { x: 1.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 0.6, z: 16.8 },
            end: { x: 0.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.6, z: 16.8 },
            end: { x: -0.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -1.8, z: 16.8 },
            end: { x: -1.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -3, z: 16.8 },
            end: { x: -3, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -4.2, z: 16.8 },
            end: { x: -4.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -5.4, z: 16.8 },
            end: { x: -5.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -6.6, z: 16.8 },
            end: { x: -6.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -7.8, z: 16.8 },
            end: { x: -7.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -9, z: 16.8 },
            end: { x: -9, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -10.2, z: 16.8 },
            end: { x: -10.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -11.4, z: 16.8 },
            end: { x: -11.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -12.6, z: 16.8 },
            end: { x: -12.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -13.8, z: 16.8 },
            end: { x: -13.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -15, z: 16.8 },
            end: { x: -15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.2, z: 16.8 },
            end: { x: -16.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.8, z: 16.8 },
            end: { x: -17.15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "spiralStairs",
            center: { x: 13.5, z: 7.2 },
            radius: 0.45,
            numSteps: 30,
            stepWidth: 0.4,
            stepDepth: 1.165,
            start: 0,
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
            //Schodiste01 - spodni
            type: "partition",
            start: { x: 6.6, z: -16.875 },
            end: { x: 10.15, z: -16.875 },
            partitionWidth: 0.15,
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
            //2.13 - dole
            type: "partition",
            start: { x: -4.93, z: -15.6 },
            end: { x: -2.43, z: -15.6 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //2.13 - nahore
            type: "partition",
            start: { x: -4.93, z: -11.4 },
            end: { x: -2.43, z: -11.4 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //2.13 - vlevo
            type: "partition",
            start: { x: -4.88, z: -11.4 },
            end: { x: -4.88, z: -15.6 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //2.13 - vpravo
            type: "partition",
            start: { x: -2.48, z: -12.3 },
            end: { x: -2.48, z: -15.6 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          //2.14 - vlevo
          {
            type: "partition",
            start: { x: -10.2, z: -4.8 },
            end: { x: -10.2, z: -0.4 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          //2.14 - vpravo
          {
            type: "partition",
            start: { x: -6, z: -4.8 },
            end: { x: -6, z: -1.3 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          //2.14 - dole
          {
            type: "partition",
            start: { x: -5.95, z: -4.8 },
            end: { x: -10.25, z: -4.8 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          //2.14 - nahore
          {
            type: "partition",
            start: { x: -5.95, z: -0.4 },
            end: { x: -10.25, z: -0.4 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          //2.18 vlevo
          {
            type: "partition",
            start: { x: 8.3, z: 4.8 },
            end: { x: 8.3, z: 1.5 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          //2.18 vpravo
          {
            type: "partition",
            start: { x: 5.9, z: 4.8 },
            end: { x: 5.9, z: 0.6 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          //2.18 dole
          {
            type: "partition",
            start: { x: 5.85, z: 0.6 },
            end: { x: 8.35, z: 0.6 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          //2.18 nahore
          {
            type: "partition",
            start: { x: 5.85, z: 4.8 },
            end: { x: 8.35, z: 4.8 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //2.15 vlevo
            type: "partition",
            start: { x: -15.6, z: 13.8 },
            end: { x: -15.6, z: 9.6 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //2.15 vpravo
            type: "partition",
            start: { x: -11.4, z: 13.8 },
            end: { x: -11.4, z: 10.5 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //2.15 dole
            type: "partition",
            start: { x: -15.65, z: 9.6 },
            end: { x: -11.35, z: 9.6 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //2.15 nahore
            type: "partition",
            start: { x: -15.65, z: 13.8 },
            end: { x: -11.35, z: 13.8 },
            partitionWidth: 0.1,
            materialType: "glass",
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
            //VRCHNI PRICKY
            //V4, V5, 03, 06
            type: "partition",
            start: { x: -3.95, z: 16.6 },
            end: { x: -3.95, z: 10.15 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //2.05 - Pricka leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 9.8 },
            partitionWidth: 0.4,
            yLevel: 2.1,
          },
          {
            //2.05 - Pricka prava
            type: "partition",
            start: { x: 3.325, z: 16.6 },
            end: { x: 3.325, z: 14.3 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //2schodiste 02
            type: "partition",
            start: { x: -10, z: 9.7 },
            end: { x: -7.15, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //07 - prava spodni pricka
            type: "partition",
            start: { x: 5.05, z: 9.7 },
            end: { x: 10.2, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //04 - spodni pricka
            type: "partition",
            start: { x: -5, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //1.07 - vrchni pricka
            type: "partition",
            start: { x: 5.05, z: 13.275 },
            end: { x: 10.2, z: 13.275 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //1.07 - spodni pricka
            type: "partition",
            start: { x: 5.05, z: 11.525 },
            end: { x: 7.2, z: 11.525 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //1.08 - zachod prava 1
            type: "partition",
            start: { x: 8.325, z: 13.3 },
            end: { x: 8.325, z: 11.5 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //2.15 pricka
            type: "partition",
            start: { x: -11.4, z: 10.5 },
            end: { x: -11.4, z: 9.6 },
            partitionWidth: 0.1,
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //ROZVADECE - pricka
            type: "partition",
            start: { x: -10.36, z: -8.2 },
            end: { x: -10.36, z: -9.85 },
            partitionWidth: 0.3,
            yLevel: 2.1,
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 10.2, z: -10.2 },
            partitionWidth: 0.26,
            yLevel: 2.1,
          },
          {
            //2.18 pricka
            type: "partition",
            start: { x: 8.3, z: 1.5 },
            end: { x: 8.3, z: 0.65 },
            partitionWidth: 0.1,
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            type: "partition",
            start: { x: -6, z: -1.3 },
            end: { x: -6, z: -0.4 },
            partitionWidth: 0.1,
            yLevel: 2.1,
            materialType: "glass",
          },

          {
            //2.13 - vpravo
            type: "partition",
            start: { x: -2.48, z: -11.4 },
            end: { x: -2.48, z: -12.3 },
            partitionWidth: 0.1,
            yLevel: 2.1,
            materialType: "glass",
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
            //schodiste11 vnejsi leva
            type: "partition",
            start: { x: -0.3, z: 4 },
            end: { x: -0.3, z: -4.4 },
            partitionHeight: 1.2,
            partitionWidth: 0.05,
            materialType: "pinkGlass",
          },
          {
            //schodiste11 vnejsi vrchni leva
            type: "partition",
            start: { x: 1.87, z: 4 },
            end: { x: -0.325, z: 4 },
            partitionHeight: 1.2,
            partitionWidth: 0.05,
            materialType: "pinkGlass",
          },
          {
            //schodiste11 vnejsi vrchni leva
            type: "partition",
            start: { x: 1.87, z: 4 },
            end: { x: 1.87, z: 2.35 },
            partitionHeight: 1.2,
            partitionWidth: 0.05,
            materialType: "pinkGlass",
          },
          {
            //schodiste11 vnejsi prava
            type: "partition",
            start: { x: 4.03, z: -4.4 },
            end: { x: 4.03, z: 4 },
            partitionHeight: 1.2,
            partitionWidth: 0.05,
            materialType: "pinkGlass",
          },
          {
            //schodiste11 vnejsi spodni
            type: "partition",
            start: { x: 4.05, z: -4.4 },
            end: { x: -0.325, z: -4.4 },
            partitionHeight: 1.2,
            partitionWidth: 0.05,
            materialType: "pinkGlass",
          },
        ],
      },
      rooms: [
        {
          //vrsek
          name: "SCHODIŠTĚ (JÁDRO C)",
          bounds: { minX: -9.7, minZ: 9.8, maxX: -7.2, maxZ: 16.75 },
          number: "2.02",
        },
        {
          name: "V4",
          bounds: { minX: -6.6, minZ: 14.95, maxX: -4.05, maxZ: 16.6 },
          number: "V4",
        },
        {
          name: "V5",
          bounds: { minX: -6.6, minZ: 13.375, maxX: -4.05, maxZ: 14.95 },
          number: "V5",
        },
        {
          name: "ROZVODNA SLP",
          bounds: { minX: -6.6, minZ: 11.675, maxX: -4.05, maxZ: 13.375 },
          number: "2.03",
        },
        {
          name: "WC ZAMĚSTNANCI",
          bounds: { minX: -6.6, minZ: 9.7, maxX: -4.05, maxZ: 11.675 },
          number: "2.06",
        },
        {
          name: "MANIPULAČNÍ PROSTOR",
          bounds: { minX: -3.85, minZ: 9.8, maxX: -1.15, maxZ: 16.6 },
          number: "2.04",
        },
        {
          name: "KUCHYŇKA",
          bounds: { minX: -0.75, minZ: 14.2, maxX: 3.25, maxZ: 16.6 },
          number: "2.05",
        },
        {
          name: "ÚKLID",
          bounds: { minX: 3.4, minZ: 14.2, maxX: 4.5, maxZ: 16.6 },
          number: "2.17",
        },
        {
          name: "V1",
          bounds: { minX: -0.75, minZ: 9.8, maxX: 0.97, maxZ: 11.7 },
          number: "V1",
        },
        {
          name: "V2",
          bounds: { minX: 1.16, minZ: 9.8, maxX: 2.75, maxZ: 11.7 },
          number: "V2",
        },
        {
          name: "V3",
          bounds: { minX: 2.95, minZ: 9.8, maxX: 4.7, maxZ: 11.7 },
          number: "V3",
        },
        {
          name: "WC MUŽI",
          bounds: { minX: 5.05, minZ: 9.8, maxX: 7.2, maxZ: 15.1 },
          number: "2.07",
        },
        {
          name: "WC ŽENY",
          bounds: { minX: 7.4, minZ: 9.8, maxX: 9.65, maxZ: 15.1 },
          number: "2.08",
        },
        {
          // rozvaděče
          name: "ROZVADĚČE",
          bounds: { minX: -13.5, minZ: -9.8, maxX: -11.85, maxZ: -8.2 },
          number: "2.09a",
        },
        {
          name: "ROZDĚLOVAČE PODLAHOVÉHO TOPENÍ",
          bounds: { minX: -11.85, minZ: -9.5, maxX: -10.2, maxZ: -8.5 },
          number: "2.09b",
        },
        {
          name: "SCHODIŠTĚ (JÁDRO B)",
          bounds: { minX: 7.15, minZ: -16.8, maxX: 9.65, maxZ: -10.325 },
          number: "2.01",
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 8 OSOB",
          bounds: { minX: -15.6, minZ: 9.6, maxX: -11.45, maxZ: 13.8 },
          number: "2.15",
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 8 OSOB",
          bounds: { minX: -10.2, minZ: -4.8, maxX: -6.05, maxZ: -0.4 },
          number: "2.14",
        },
        {
          name: "VÝSTAVA MARKERSPACE",
          bounds: { minX: 5.95, minZ: 0.6, maxX: 8.25, maxZ: 4.8 },
          number: "2.18",
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 4 OSOBY",
          bounds: { minX: -4.83, minZ: -15.6, maxX: -2.53, maxZ: -11.4 },
          number: "2.13",
        },
      ],
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [
          { x: -1, z: 11, value: 20 },
          { x: 8, z: -5, value: 25 },
          { x: -10, z: 2, value: 19 },
          { x: -2, z: 1, value: 28 },
          { x: 16, z: 3, value: 22 },
          { x: -8, z: 5, value: 13 },
          { x: -3, z: -11, value: 26 },
          { x: 5, z: 1, value: 21 },
          { x: -12, z: -2, value: 14 },
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
      type: "aboveground",
      segments: [
        { width: 28.19, depth: 35.82, position: { x: -3.855, z: 0 } },
        { width: 4, depth: 1.4, position: { x: 11.6, z: 8.1 } },
        { width: 35.82, depth: 0.84, position: { x: 0, z: -17.5 } },
        { width: 35.82, depth: 0.84, position: { x: 0, z: 17.5 } },
        { width: 0.84, depth: 35.8, position: { x: -17.5, z: 0 } },
        { width: 0.84, depth: 35.8, position: { x: 17.5, z: 0 } },
      ],
      holes: [
        { x: 8.4, z: -14.4, width: 3, depth: 5 },
        { x: 8.4, z: -14.4, width: 3, depth: 5 }, //1.1
        { x: -8.4, z: 14.4, width: 3, depth: 5 }, //1.1
        { x: 1.875, z: 12.95, width: 5.3, depth: 2.15 },
        { x: 7.35, z: 15.95, width: 4.65, depth: 1.35 },
        { x: -5.375, z: 15.825, width: 2.45, depth: 1.6 }, //v4
        { x: -5.375, z: 14.15, width: 2.45, depth: 1.45 }, //v5
        { x: 0.1075, z: 10.8, width: 1.72, depth: 1.85 }, //v1
        { x: 1.96, z: 10.8, width: 1.615, depth: 1.85 }, //v2
        { x: 3.765, z: 10.8, width: 1.625, depth: 1.85 }, //v3
      ],
      endPoints: [
        { x: 11.6, z: 8.1, id: "B" },
        { x: -9.1, z: 11.2, id: "B" },
        { x: 9.1, z: -11.2, id: "B" },
      ],
      nav: {
        clearance: 0.35, // menší clearance, aby prošly i 0.8 m dveře (2 * 0.35 = 0.7)
      },
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },
        walls: [
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: -0.75, z: 9.85 },
            end: { x: -0.45, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0, z: 9.875 },
            end: { x: -0.45, z: 9.875 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0.45, z: 9.8625 },
            end: { x: 0, z: 9.8625 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0.45, z: 9.85 },
            end: { x: -0.45, z: 9.85 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0.45, z: 9.85 },
            end: { x: 0.965, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.155, z: 9.85 },
            end: { x: 1.35, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.35, z: 9.875 },
            end: { x: 1.8, z: 9.875 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.8, z: 9.8625 },
            end: { x: 2.25, z: 9.8625 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.35, z: 9.85 },
            end: { x: 2.25, z: 9.85 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 2.25, z: 9.85 },
            end: { x: 2.765, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 2.955, z: 9.85 },
            end: { x: 3.15, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 3.15, z: 9.875 },
            end: { x: 3.6, z: 9.875 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 3.6, z: 9.8625 },
            end: { x: 4.05, z: 9.8625 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 3.15, z: 9.85 },
            end: { x: 4.05, z: 9.85 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 4.05, z: 9.85 },
            end: { x: 4.575, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1, z: 16.6 },
            end: { x: -4.1, z: 16.145 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1125, z: 16.145 },
            end: { x: -4.1125, z: 15.645 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.125, z: 15.645 },
            end: { x: -4.125, z: 15.145 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1, z: 15.145 },
            end: { x: -4.1, z: 16.145 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1, z: 15.145 },
            end: { x: -4.1, z: 15.045 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1, z: 14.845 },
            end: { x: -4.1, z: 14.445 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1125, z: 14.445 },
            end: { x: -4.1125, z: 13.995 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.125, z: 13.995 },
            end: { x: -4.125, z: 13.545 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1, z: 14.445 },
            end: { x: -4.1, z: 13.545 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1, z: 13.545 },
            end: { x: -4.1, z: 13.445 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            type: "partition",
            start: { x: 0.45, z: 9.775 },
            end: { x: 1.35, z: 9.775 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 2.25, z: 9.775 },
            end: { x: 3.15, z: 9.775 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.63, z: 9.7 },
            end: { x: 4.23, z: 9.7 },
            yLevel: 2.1,
            partitionWidth: 0.2,
          },
          {
            type: "stairs",
            position: { x: 7.725, z: -12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: 7.15, z: -15.7 },
            floorP2: { x: 9.65, z: -16.8 },
            direction: "bottom",
          },
          {
            type: "stairs",
            position: { x: 9.075, z: -15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 26,
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: -7.725, z: 12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: -7.15, z: 15.7 },
            floorP2: { x: -9.65, z: 16.8 },
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: -9.075, z: 15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 26,
            direction: "bottom",
          },
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
              { x: -17.15, z: -17.15 },
              { x: 17.15, z: -17.15 },
              { x: 17.15, z: 17.15 },
              { x: -17.15, z: 17.15 },
            ],
          },
          {
            //leva strana - vrchni stena
            type: "railing",
            start: { x: 10.2, z: 7.55 },
            end: { x: 13.55, z: 7.55 },
            railingHeight: 1.2,
            partitionWidth: 0.5,
          },
          {
            //leva strana - spodni stena
            type: "railing",
            start: { x: 10.2, z: 8.7 },
            end: { x: 13.45, z: 8.7 },
            railingHeight: 1.2,
            partitionWidth: 0.5,
          },
          {
            //VRCHNI PRICKY
            //V4, V5, 03, 06
            type: "partition",
            start: { x: -3.95, z: 16.6 },
            end: { x: -3.95, z: 10.15 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //2.05 - Pricka leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 9.8 },
            partitionWidth: 0.4,
            yLevel: 2.1,
          },
          {
            //2.05 - Pricka prava
            type: "partition",
            start: { x: 3.325, z: 16.6 },
            end: { x: 3.325, z: 14.3 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //2schodiste 02
            type: "partition",
            start: { x: -10, z: 9.7 },
            end: { x: -7.15, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //07 - prava spodni pricka
            type: "partition",
            start: { x: 5.05, z: 9.7 },
            end: { x: 10.2, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //04 - spodni pricka
            type: "partition",
            start: { x: -5, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //1.07 - vrchni pricka
            type: "partition",
            start: { x: 5.05, z: 13.275 },
            end: { x: 10.2, z: 13.275 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //1.07 - spodni pricka
            type: "partition",
            start: { x: 5.05, z: 11.525 },
            end: { x: 7.2, z: 11.525 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //1.08 - zachod prava 1
            type: "partition",
            start: { x: 8.325, z: 13.3 },
            end: { x: 8.325, z: 11.5 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //ROZVADECE - pricka
            type: "partition",
            start: { x: -10.36, z: -8.2 },
            end: { x: -10.36, z: -9.85 },
            partitionWidth: 0.3,
            yLevel: 2.1,
          },
          {
            //Schodiste01 - prava pricka
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 10.2, z: -10.2 },
            partitionWidth: 0.26,
            yLevel: 2.1,
          },
          {
            //3.12 leva spodni pricka
            type: "partition",
            start: { x: -4.8, z: -0.85 },
            end: { x: -4.8, z: -1.78 },
            partitionWidth: 0.05,
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //3.11 prava vrchni pricka
            type: "partition",
            start: { x: -11.4, z: 0.4 },
            end: { x: -11.4, z: 1.4 },
            partitionWidth: 0.05,
            materialType: "glass",
            yLevel: 2.1,
          },
          {
            //okna
            type: "partition",
            start: { x: 17.15, z: 17.15 },
            end: { x: 16.8, z: 16.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 16.2 },
            end: { x: 16.8, z: 16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 15 },
            end: { x: 16.8, z: 15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 13.8 },
            end: { x: 16.8, z: 13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 12.6 },
            end: { x: 16.8, z: 12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 11.4 },
            end: { x: 16.8, z: 11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 10.2 },
            end: { x: 16.8, z: 10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 9 },
            end: { x: 16.8, z: 9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 7.8 },
            end: { x: 16.8, z: 7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 6.6 },
            end: { x: 16.8, z: 6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 5.4 },
            end: { x: 16.8, z: 5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 4.2 },
            end: { x: 16.8, z: 4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 3 },
            end: { x: 16.8, z: 3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 1.8 },
            end: { x: 16.8, z: 1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 0.6 },
            end: { x: 16.8, z: 0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -0.6 },
            end: { x: 16.8, z: -0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -1.8 },
            end: { x: 16.8, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -3 },
            end: { x: 16.8, z: -3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -4.2 },
            end: { x: 16.8, z: -4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -5.4 },
            end: { x: 16.8, z: -5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -6.6 },
            end: { x: 16.8, z: -6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -7.8 },
            end: { x: 16.8, z: -7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -9 },
            end: { x: 16.8, z: -9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -10.2 },
            end: { x: 16.8, z: -10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -11.4 },
            end: { x: 16.8, z: -11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -12.6 },
            end: { x: 16.8, z: -12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -13.8 },
            end: { x: 16.8, z: -13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -15 },
            end: { x: 16.8, z: -15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -16.2 },
            end: { x: 16.8, z: -16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 16.8, z: -16.8 },
            end: { x: 17.15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 16.2, z: -16.8 },
            end: { x: 16.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 15, z: -16.8 },
            end: { x: 15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 13.8, z: -16.8 },
            end: { x: 13.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 12.6, z: -16.8 },
            end: { x: 12.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 11.4, z: -16.8 },
            end: { x: 11.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 9, z: -16.8 },
            end: { x: 9, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 7.8, z: -16.8 },
            end: { x: 7.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 6.6, z: -16.8 },
            end: { x: 6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 5.4, z: -16.8 },
            end: { x: 5.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 4.2, z: -16.8 },
            end: { x: 4.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 3, z: -16.8 },
            end: { x: 3, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 1.8, z: -16.8 },
            end: { x: 1.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 0.6, z: -16.8 },
            end: { x: 0.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.6, z: -16.8 },
            end: { x: -0.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -1.8, z: -16.8 },
            end: { x: -1.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -3, z: -16.8 },
            end: { x: -3, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -4.2, z: -16.8 },
            end: { x: -4.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -5.4, z: -16.8 },
            end: { x: -5.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -6.6, z: -16.8 },
            end: { x: -6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -7.8, z: -16.8 },
            end: { x: -7.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -9, z: -16.8 },
            end: { x: -9, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -10.2, z: -16.8 },
            end: { x: -10.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -11.4, z: -16.8 },
            end: { x: -11.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -12.6, z: -16.8 },
            end: { x: -12.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -13.8, z: -16.8 },
            end: { x: -13.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -15, z: -16.8 },
            end: { x: -15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.2, z: -16.8 },
            end: { x: -16.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.8, z: -16.8 },
            end: { x: -17.15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //okna
            type: "partition",
            start: { x: -17.15, z: 17.15 },
            end: { x: -16.8, z: 16.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 16.2 },
            end: { x: -16.8, z: 16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 15 },
            end: { x: -16.8, z: 15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 13.8 },
            end: { x: -16.8, z: 13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 12.6 },
            end: { x: -16.8, z: 12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 11.4 },
            end: { x: -16.8, z: 11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 10.2 },
            end: { x: -16.8, z: 10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 9 },
            end: { x: -16.8, z: 9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 7.8 },
            end: { x: -16.8, z: 7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 6.6 },
            end: { x: -16.8, z: 6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 5.4 },
            end: { x: -16.8, z: 5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 4.2 },
            end: { x: -16.8, z: 4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 3 },
            end: { x: -16.8, z: 3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 1.8 },
            end: { x: -16.8, z: 1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 0.6 },
            end: { x: -16.8, z: 0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -0.6 },
            end: { x: -16.8, z: -0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -1.8 },
            end: { x: -16.8, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -3 },
            end: { x: -16.8, z: -3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -4.2 },
            end: { x: -16.8, z: -4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -5.4 },
            end: { x: -16.8, z: -5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -6.6 },
            end: { x: -16.8, z: -6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -7.8 },
            end: { x: -16.8, z: -7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -9 },
            end: { x: -16.8, z: -9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -10.2 },
            end: { x: -16.8, z: -10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -11.4 },
            end: { x: -16.8, z: -11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -12.6 },
            end: { x: -16.8, z: -12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -13.8 },
            end: { x: -16.8, z: -13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -15 },
            end: { x: -16.8, z: -15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -16.2 },
            end: { x: -16.8, z: -16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 16.8, z: 16.8 },
            end: { x: 17.15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 16.2, z: 16.8 },
            end: { x: 16.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 15, z: 16.8 },
            end: { x: 15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 13.8, z: 16.8 },
            end: { x: 13.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 12.6, z: 16.8 },
            end: { x: 12.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 11.4, z: 16.8 },
            end: { x: 11.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 10.2, z: 16.8 },
            end: { x: 10.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 9, z: 16.8 },
            end: { x: 9, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 7.8, z: 16.8 },
            end: { x: 7.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 6.6, z: -16.8 },
            end: { x: 6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 5.4, z: 16.8 },
            end: { x: 5.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 4.2, z: 16.8 },
            end: { x: 4.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 3, z: 16.8 },
            end: { x: 3, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 1.8, z: 16.8 },
            end: { x: 1.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 0.6, z: 16.8 },
            end: { x: 0.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.6, z: 16.8 },
            end: { x: -0.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -1.8, z: 16.8 },
            end: { x: -1.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -3, z: 16.8 },
            end: { x: -3, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -4.2, z: 16.8 },
            end: { x: -4.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -5.4, z: 16.8 },
            end: { x: -5.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -6.6, z: 16.8 },
            end: { x: -6.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -7.8, z: 16.8 },
            end: { x: -7.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -9, z: 16.8 },
            end: { x: -9, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -10.2, z: 16.8 },
            end: { x: -10.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -11.4, z: 16.8 },
            end: { x: -11.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -12.6, z: 16.8 },
            end: { x: -12.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -13.8, z: 16.8 },
            end: { x: -13.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -15, z: 16.8 },
            end: { x: -15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.2, z: 16.8 },
            end: { x: -16.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.8, z: 16.8 },
            end: { x: -17.15, z: 17.15 },
            partitionWidth: 0.05,
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
            //Y osa - vpravo
            type: "railing",
            start: { x: 10.2, z: 9.6 },
            end: { x: 10.2, z: 8.55 },
            railingHeight: 1.2,
          },
          {
            //Y osa - vpravo 2
            type: "railing",
            start: { x: 10.2, z: -10.2 },
            end: { x: 10.2, z: 7.65 },
            railingHeight: 1.2,
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
            materialType: "glass",
          },
          {
            //3.11 spodni stena
            type: "partition",
            start: { x: -15.625, z: 0.4 },
            end: { x: -11.375, z: 0.4 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //3.11 prava spodni
            type: "partition",
            start: { x: -11.4, z: 0.4 },
            end: { x: -11.4, z: 0.47 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //3.11 prava vrchni
            type: "partition",
            start: { x: -11.4, z: 1.37 },
            end: { x: -11.4, z: 4.6 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //3.11 vrchni stena
            type: "partition",
            start: { x: -11.375, z: 4.6 },
            end: { x: -15.625, z: 4.6 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //3.12 leva spodni
            type: "partition",
            start: { x: -4.8, z: -1.77 },
            end: { x: -4.8, z: -5 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //3.12 leva vrchni
            type: "partition",
            start: { x: -4.8, z: -0.8 },
            end: { x: -4.8, z: -0.87 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //3.12 spodni strana
            type: "partition",
            start: { x: -4.825, z: -5 },
            end: { x: -2.375, z: -5 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //3.12 prava strana
            type: "partition",
            start: { x: -2.4, z: -5 },
            end: { x: -2.4, z: -0.8 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //3.12 vrchni strana
            type: "partition",
            start: { x: -2.375, z: -0.8 },
            end: { x: -4.825, z: -0.8 },
            partitionWidth: 0.05,
            materialType: "glass",
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
            //Schodiste01 - spodni
            type: "partition",
            start: { x: 6.6, z: -16.875 },
            end: { x: 10.15, z: -16.875 },
            partitionWidth: 0.15,
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
            type: "spiralStairs",
            center: { x: -7.2, z: -13.5 },
            radius: 0.45,
            numSteps: 30,
            stepWidth: 0.4,
            stepDepth: 1.165,
            start: 11,
          },
        ],
      },
      rooms: [
        {
          //vrsek
          name: "SCHODIŠTĚ (JÁDRO C)",
          bounds: { minX: -9.7, minZ: 9.8, maxX: -7.2, maxZ: 16.75 },
          number: "3.02",
        },
        {
          name: "V4",
          bounds: { minX: -6.6, minZ: 14.95, maxX: -4.05, maxZ: 16.6 },
          number: "V4",
        },
        {
          name: "V5",
          bounds: { minX: -6.6, minZ: 13.375, maxX: -4.05, maxZ: 14.95 },
          number: "V5",
        },
        {
          name: "ROZVODNA SLP",
          bounds: { minX: -6.6, minZ: 11.675, maxX: -4.05, maxZ: 13.375 },
          number: "3.03",
        },
        {
          name: "WC ZAMĚSTNANCI",
          bounds: { minX: -6.6, minZ: 9.7, maxX: -4.05, maxZ: 11.675 },
          number: "3.06",
        },
        {
          name: "MANIPULAČNÍ PROSTOR",
          bounds: { minX: -3.85, minZ: 9.8, maxX: -1.15, maxZ: 16.6 },
          number: "3.04",
        },
        {
          name: "KUCHYŇKA",
          bounds: { minX: -0.75, minZ: 14.2, maxX: 3.25, maxZ: 16.6 },
          number: "3.05",
        },
        {
          name: "ÚKLID",
          bounds: { minX: 3.4, minZ: 14.2, maxX: 4.5, maxZ: 16.6 },
          number: "3.14",
        },
        {
          name: "V1",
          bounds: { minX: -0.75, minZ: 9.8, maxX: 0.97, maxZ: 11.7 },
          number: "V1",
        },
        {
          name: "V2",
          bounds: { minX: 1.16, minZ: 9.8, maxX: 2.75, maxZ: 11.7 },
          number: "V2",
        },
        {
          name: "V3",
          bounds: { minX: 2.95, minZ: 9.8, maxX: 4.7, maxZ: 11.7 },
          number: "V3",
        },
        {
          name: "WC MUŽI",
          bounds: { minX: 5.05, minZ: 9.8, maxX: 7.2, maxZ: 15.1 },
          number: "3.07",
        },
        {
          name: "WC ŽENY",
          bounds: { minX: 7.4, minZ: 9.8, maxX: 9.65, maxZ: 15.1 },
          number: "3.08",
        },
        {
          // rozvaděče
          name: "ROZVADĚČE",
          bounds: { minX: -13.5, minZ: -9.8, maxX: -11.85, maxZ: -8.2 },
          number: "3.09a",
        },
        {
          name: "ROZDĚLOVAČE PODLAHOVÉHO TOPENÍ",
          bounds: { minX: -11.85, minZ: -9.5, maxX: -10.2, maxZ: -8.5 },
          number: "3.09b",
        },
        {
          name: "SCHODIŠTĚ (JÁDRO B)",
          bounds: { minX: 7.15, minZ: -16.8, maxX: 9.65, maxZ: -10.325 },
          number: "3.01",
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 8 OSOB",
          bounds: { minX: -15.6, minZ: 0.4, maxX: -11.425, maxZ: 4.6 },
          number: "3.11",
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 4 OSOB",
          bounds: { minX: -4.775, minZ: -5, maxX: -2.4, maxZ: -0.8 },
          number: "3.12",
        },
      ],
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [
          { x: 3, z: 13, value: 26 },
          { x: -14, z: -10, value: 18 },
          { x: 2, z: 7, value: 27 },
        ],
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
      type: "aboveground",
      segments: [
        { width: 35.82, depth: 28.19, position: { x: 0, z: 3.855 } },
        { width: 3, depth: 10, position: { x: 8.5, z: -12 } },
        { width: 1.2, depth: 3.2, position: { x: -6.3, z: -11.7 } },
        { width: 35.82, depth: 0.84, position: { x: 0, z: -17.5 } },
        { width: 35.82, depth: 0.84, position: { x: 0, z: 17.5 } },
        { width: 0.84, depth: 35.8, position: { x: -17.5, z: 0 } },
        { width: 0.84, depth: 35.8, position: { x: 17.5, z: 0 } }, // kostka hlavni
      ],
      holes: [
        { x: 8.4, z: -14.4, width: 3, depth: 5 },
        { x: 8.4, z: -14.4, width: 3, depth: 5 }, //1.1
        { x: -8.4, z: 14.4, width: 3, depth: 5 }, //1.1
        { x: 1.875, z: 12.95, width: 5.3, depth: 2.15 },
        { x: 7.35, z: 15.95, width: 4.65, depth: 1.35 },
        { x: -5.375, z: 15.825, width: 2.45, depth: 1.6 }, //v4
        { x: -5.375, z: 14.15, width: 2.45, depth: 1.45 }, //v5
        { x: 0.1075, z: 10.8, width: 1.72, depth: 1.85 }, //v1
        { x: 1.96, z: 10.8, width: 1.615, depth: 1.85 }, //v2
        { x: 3.765, z: 10.8, width: 1.625, depth: 1.85 }, //v3
      ],
      endPoints: [
        { x: -6.3, z: -11.7, id: "B" },
        { x: -9.1, z: 11.2, id: "B" },
        { x: 9.1, z: -11.2, id: "B" },
      ],
      nav: {
        clearance: 0.35, // menší clearance, aby prošly i 0.8 m dveře (2 * 0.35 = 0.7)
      },
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },

        walls: [
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: -0.75, z: 9.85 },
            end: { x: -0.45, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0, z: 9.875 },
            end: { x: -0.45, z: 9.875 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0.45, z: 9.8625 },
            end: { x: 0, z: 9.8625 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0.45, z: 9.85 },
            end: { x: -0.45, z: 9.85 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V1 dvere patro
            type: "partition",
            start: { x: 0.45, z: 9.85 },
            end: { x: 0.965, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.155, z: 9.85 },
            end: { x: 1.35, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.35, z: 9.875 },
            end: { x: 1.8, z: 9.875 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.8, z: 9.8625 },
            end: { x: 2.25, z: 9.8625 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 1.35, z: 9.85 },
            end: { x: 2.25, z: 9.85 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V2 dvere patro
            type: "partition",
            start: { x: 2.25, z: 9.85 },
            end: { x: 2.765, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 2.955, z: 9.85 },
            end: { x: 3.15, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 3.15, z: 9.875 },
            end: { x: 3.6, z: 9.875 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 3.6, z: 9.8625 },
            end: { x: 4.05, z: 9.8625 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 3.15, z: 9.85 },
            end: { x: 4.05, z: 9.85 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V3 dvere patro
            type: "partition",
            start: { x: 4.05, z: 9.85 },
            end: { x: 4.575, z: 9.85 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1, z: 16.6 },
            end: { x: -4.1, z: 16.145 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1125, z: 16.145 },
            end: { x: -4.1125, z: 15.645 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.125, z: 15.645 },
            end: { x: -4.125, z: 15.145 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1, z: 15.145 },
            end: { x: -4.1, z: 16.145 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V4 dvere patro
            type: "partition",
            start: { x: -4.1, z: 15.145 },
            end: { x: -4.1, z: 15.045 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1, z: 14.845 },
            end: { x: -4.1, z: 14.445 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1125, z: 14.445 },
            end: { x: -4.1125, z: 13.995 },
            partitionHeight: 2.1,
            partitionWidth: 0.075,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.125, z: 13.995 },
            end: { x: -4.125, z: 13.545 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1, z: 14.445 },
            end: { x: -4.1, z: 13.545 },
            yLevel: 2.1,
            partitionHeight: 0.2,
            partitionWidth: 0.1,
          },
          {
            //vytah V5 dvere patro
            type: "partition",
            start: { x: -4.1, z: 13.545 },
            end: { x: -4.1, z: 13.445 },
            partitionHeight: 2.3,
            partitionWidth: 0.1,
          },
          {
            type: "partition",
            start: { x: 0.45, z: 9.775 },
            end: { x: 1.35, z: 9.775 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 2.25, z: 9.775 },
            end: { x: 3.15, z: 9.775 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.63, z: 9.7 },
            end: { x: 4.23, z: 9.7 },
            yLevel: 2.1,
            partitionWidth: 0.2,
          },
          {
            type: "stairs",
            position: { x: 7.725, z: -12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: 7.15, z: -15.7 },
            floorP2: { x: 9.65, z: -16.8 },
            direction: "bottom",
          },
          {
            type: "stairs",
            position: { x: 9.075, z: -15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 26,
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: -7.725, z: 12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: -7.15, z: 15.7 },
            floorP2: { x: -9.65, z: 16.8 },
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: -9.075, z: 15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 26,
            direction: "bottom",
          },
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
              { x: -17.15, z: -17.15 },
              { x: 17.15, z: -17.15 },
              { x: 17.15, z: 17.15 },
              { x: -17.15, z: 17.15 },
            ],
          },
          {
            // Např. pro zábradlí na některém patře
            type: "railing",
            start: { x: -10.2, z: -10.2 },
            end: { x: -6.75, z: -10.2 },
            railingHeight: 1.2, // Specifikovat výšku zábradlí
          },
          {
            // Např. pro zábradlí na některém patře
            type: "railing",
            start: { x: -5.85, z: -10.2 },
            end: { x: 6.55, z: -10.2 },
            railingHeight: 1.2, // Specifikovat výšku zábradlí
          },
          {
            // Např. pro zábradlí na některém patře
            type: "railing",
            start: { x: 10.2, z: -10.2 },
            end: { x: 17.15, z: -10.2 },
            railingHeight: 1.2, // Specifikovat výšku zábradlí
          },
          {
            //leva strana - vrchni stena
            type: "railing",
            start: { x: -6.75, z: -10.2 },
            end: { x: -6.75, z: -13.25 },
            railingHeight: 1.2,
            partitionWidth: 0.5,
          },
          {
            //leva strana - vrchni stena
            type: "railing",
            start: { x: -5.85, z: -10.2 },
            end: { x: -5.85, z: -13.25 },
            railingHeight: 1.2,
            partitionWidth: 0.5,
          },
          {
            //VRCHNI PRICKY
            //V4, V5, 03, 06
            type: "partition",
            start: { x: -3.95, z: 16.6 },
            end: { x: -3.95, z: 10.15 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //2.05 - Pricka leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 9.8 },
            partitionWidth: 0.4,
            yLevel: 2.1,
          },
          {
            //2.05 - Pricka prava
            type: "partition",
            start: { x: 3.325, z: 16.6 },
            end: { x: 3.325, z: 14.3 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //2schodiste 02
            type: "partition",
            start: { x: -10, z: 9.7 },
            end: { x: -7.15, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //07 - prava spodni pricka
            type: "partition",
            start: { x: 5.05, z: 9.7 },
            end: { x: 10.2, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //04 - spodni pricka
            type: "partition",
            start: { x: -5, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //1.07 - vrchni pricka
            type: "partition",
            start: { x: 5.05, z: 13.275 },
            end: { x: 10.2, z: 13.275 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //1.07 - spodni pricka
            type: "partition",
            start: { x: 5.05, z: 11.525 },
            end: { x: 7.2, z: 11.525 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //1.08 - zachod prava 1
            type: "partition",
            start: { x: 8.325, z: 13.3 },
            end: { x: 8.325, z: 11.5 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //ROZVADECE - pricka
            type: "partition",
            start: { x: -10.36, z: -8.2 },
            end: { x: -10.36, z: -9.85 },
            partitionWidth: 0.3,
            yLevel: 2.1,
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 10.2, z: -10.2 },
            partitionWidth: 0.26,
            yLevel: 2.1,
          },
          {
            //4.11 - nahore pricka
            type: "partition",
            start: { x: -6.68, z: 0 },
            end: { x: -7.58, z: 0 },
            partitionWidth: 0.1,
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //4.11 - nahore pricka
            type: "partition",
            start: { x: 1.27, z: 0 },
            end: { x: 2.17, z: 0 },
            partitionWidth: 0.1,
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //4.13a - nahore pricka
            type: "partition",
            start: { x: -8.53, z: -6 },
            end: { x: -6.03, z: -6 },
            partitionWidth: 0.1,
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //4.12 vpravo pricka
            type: "partition",
            start: { x: 10.02, z: 4.8 },
            end: { x: 10.02, z: -4.8 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //4.12 vlevo pricka
            type: "partition",
            start: { x: 4.22, z: 4.8 },
            end: { x: 4.22, z: -4.8 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //4.14 - vlevo pricka
            type: "partition",
            start: { x: 11.4, z: 10.52 },
            end: { x: 11.4, z: 9.62 },
            partitionWidth: 0.1,
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //4.14 - vlevo pricka
            type: "partition",
            start: { x: 11.4, z: 15.6 },
            end: { x: 11.4, z: 14.7 },
            partitionWidth: 0.1,
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //okna
            type: "partition",
            start: { x: 17.15, z: 17.15 },
            end: { x: 16.8, z: 16.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 16.2 },
            end: { x: 16.8, z: 16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 15 },
            end: { x: 16.8, z: 15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 13.8 },
            end: { x: 16.8, z: 13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 12.6 },
            end: { x: 16.8, z: 12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 11.4 },
            end: { x: 16.8, z: 11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 10.2 },
            end: { x: 16.8, z: 10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 9 },
            end: { x: 16.8, z: 9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 7.8 },
            end: { x: 16.8, z: 7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 6.6 },
            end: { x: 16.8, z: 6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 5.4 },
            end: { x: 16.8, z: 5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 4.2 },
            end: { x: 16.8, z: 4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 3 },
            end: { x: 16.8, z: 3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 1.8 },
            end: { x: 16.8, z: 1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 0.6 },
            end: { x: 16.8, z: 0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -0.6 },
            end: { x: 16.8, z: -0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -1.8 },
            end: { x: 16.8, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -3 },
            end: { x: 16.8, z: -3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -4.2 },
            end: { x: 16.8, z: -4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -5.4 },
            end: { x: 16.8, z: -5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -6.6 },
            end: { x: 16.8, z: -6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -7.8 },
            end: { x: 16.8, z: -7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -9 },
            end: { x: 16.8, z: -9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -10.2 },
            end: { x: 16.8, z: -10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -11.4 },
            end: { x: 16.8, z: -11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -12.6 },
            end: { x: 16.8, z: -12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -13.8 },
            end: { x: 16.8, z: -13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -15 },
            end: { x: 16.8, z: -15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -16.2 },
            end: { x: 16.8, z: -16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 16.8, z: -16.8 },
            end: { x: 17.15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 16.2, z: -16.8 },
            end: { x: 16.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 15, z: -16.8 },
            end: { x: 15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 13.8, z: -16.8 },
            end: { x: 13.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 12.6, z: -16.8 },
            end: { x: 12.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 11.4, z: -16.8 },
            end: { x: 11.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 9, z: -16.8 },
            end: { x: 9, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 7.8, z: -16.8 },
            end: { x: 7.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 6.6, z: -16.8 },
            end: { x: 6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 5.4, z: -16.8 },
            end: { x: 5.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 4.2, z: -16.8 },
            end: { x: 4.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 3, z: -16.8 },
            end: { x: 3, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 1.8, z: -16.8 },
            end: { x: 1.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 0.6, z: -16.8 },
            end: { x: 0.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.6, z: -16.8 },
            end: { x: -0.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -1.8, z: -16.8 },
            end: { x: -1.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -3, z: -16.8 },
            end: { x: -3, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -4.2, z: -16.8 },
            end: { x: -4.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -5.4, z: -16.8 },
            end: { x: -5.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -6.6, z: -16.8 },
            end: { x: -6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -7.8, z: -16.8 },
            end: { x: -7.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -9, z: -16.8 },
            end: { x: -9, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -10.2, z: -16.8 },
            end: { x: -10.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -11.4, z: -16.8 },
            end: { x: -11.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -12.6, z: -16.8 },
            end: { x: -12.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -13.8, z: -16.8 },
            end: { x: -13.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -15, z: -16.8 },
            end: { x: -15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.2, z: -16.8 },
            end: { x: -16.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.8, z: -16.8 },
            end: { x: -17.15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //okna
            type: "partition",
            start: { x: -17.15, z: 17.15 },
            end: { x: -16.8, z: 16.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 16.2 },
            end: { x: -16.8, z: 16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 15 },
            end: { x: -16.8, z: 15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 13.8 },
            end: { x: -16.8, z: 13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 12.6 },
            end: { x: -16.8, z: 12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 11.4 },
            end: { x: -16.8, z: 11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 10.2 },
            end: { x: -16.8, z: 10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 9 },
            end: { x: -16.8, z: 9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 7.8 },
            end: { x: -16.8, z: 7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 6.6 },
            end: { x: -16.8, z: 6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 5.4 },
            end: { x: -16.8, z: 5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 4.2 },
            end: { x: -16.8, z: 4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 3 },
            end: { x: -16.8, z: 3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 1.8 },
            end: { x: -16.8, z: 1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 0.6 },
            end: { x: -16.8, z: 0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -0.6 },
            end: { x: -16.8, z: -0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -1.8 },
            end: { x: -16.8, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -3 },
            end: { x: -16.8, z: -3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -4.2 },
            end: { x: -16.8, z: -4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -5.4 },
            end: { x: -16.8, z: -5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -6.6 },
            end: { x: -16.8, z: -6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -7.8 },
            end: { x: -16.8, z: -7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -9 },
            end: { x: -16.8, z: -9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -10.2 },
            end: { x: -16.8, z: -10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -11.4 },
            end: { x: -16.8, z: -11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -12.6 },
            end: { x: -16.8, z: -12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -13.8 },
            end: { x: -16.8, z: -13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -15 },
            end: { x: -16.8, z: -15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -16.2 },
            end: { x: -16.8, z: -16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 16.8, z: 16.8 },
            end: { x: 17.15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 16.2, z: 16.8 },
            end: { x: 16.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 15, z: 16.8 },
            end: { x: 15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 13.8, z: 16.8 },
            end: { x: 13.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 12.6, z: 16.8 },
            end: { x: 12.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 11.4, z: 16.8 },
            end: { x: 11.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 10.2, z: 16.8 },
            end: { x: 10.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 9, z: 16.8 },
            end: { x: 9, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 7.8, z: 16.8 },
            end: { x: 7.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 6.6, z: -16.8 },
            end: { x: 6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 5.4, z: 16.8 },
            end: { x: 5.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 4.2, z: 16.8 },
            end: { x: 4.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 3, z: 16.8 },
            end: { x: 3, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 1.8, z: 16.8 },
            end: { x: 1.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 0.6, z: 16.8 },
            end: { x: 0.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.6, z: 16.8 },
            end: { x: -0.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -1.8, z: 16.8 },
            end: { x: -1.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -3, z: 16.8 },
            end: { x: -3, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -4.2, z: 16.8 },
            end: { x: -4.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -5.4, z: 16.8 },
            end: { x: -5.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -6.6, z: 16.8 },
            end: { x: -6.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -7.8, z: 16.8 },
            end: { x: -7.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -9, z: 16.8 },
            end: { x: -9, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -10.2, z: 16.8 },
            end: { x: -10.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -11.4, z: 16.8 },
            end: { x: -11.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -12.6, z: 16.8 },
            end: { x: -12.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -13.8, z: 16.8 },
            end: { x: -13.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -15, z: 16.8 },
            end: { x: -15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.2, z: 16.8 },
            end: { x: -16.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.8, z: 16.8 },
            end: { x: -17.15, z: 17.15 },
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
            //Schodiste01 - spodni
            type: "partition",
            start: { x: 6.6, z: -16.875 },
            end: { x: 10.15, z: -16.875 },
            partitionWidth: 0.15,
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
            materialType: "glass",
          },
          {
            //4.11 - vpravo
            type: "partition",
            start: { x: 2.92, z: -4.8 },
            end: { x: 2.92, z: 0 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //4.11 - dole
            type: "partition",
            start: { x: 2.97, z: -4.8 },
            end: { x: -8.53, z: -4.8 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //4.11 - nahore
            type: "partition",
            start: { x: 2.97, z: 0 },
            end: { x: 2.17, z: 0 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //4.11 - nahore
            type: "partition",
            start: { x: 1.27, z: 0 },
            end: { x: -6.68, z: 0 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //4.11 - nahore
            type: "partition",
            start: { x: -7.58, z: 0 },
            end: { x: -8.53, z: 0 },
            partitionWidth: 0.1,
            materialType: "glass",
          },

          {
            //4.11 - stred
            type: "partition",
            start: { x: -6.08, z: -4.8 },
            end: { x: -6.08, z: 0 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //4.13a - nahore
            type: "partition",
            start: { x: -8.53, z: -6 },
            end: { x: -8.22, z: -6 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //4.13a - nahore
            type: "partition",
            start: { x: -7.42, z: -6 },
            end: { x: -7.04, z: -6 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //4.13a - nahore
            type: "partition",
            start: { x: -6.24, z: -6 },
            end: { x: -6.03, z: -6 },
            partitionWidth: 0.1,
            materialType: "glass",
          },

          {
            //4.13a - dole
            type: "partition",
            start: { x: -8.53, z: -8.4 },
            end: { x: -6.03, z: -8.4 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //4.13a - vlevo
            type: "partition",
            start: { x: -8.48, z: -6 },
            end: { x: -8.48, z: -8.4 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //4.13a - vpravo
            type: "partition",
            start: { x: -6.08, z: -6 },
            end: { x: -6.08, z: -8.4 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //4.13a - STRED
            type: "partition",
            start: { x: -7.28, z: -6 },
            end: { x: -7.28, z: -8.4 },
            partitionWidth: 0.1,
            materialType: "glass",
          },

          {
            //4.14 - vpravo
            type: "partition",
            start: { x: 15.6, z: 15.6 },
            end: { x: 15.6, z: 9.62 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //4.14 - vlevo
            type: "partition",
            start: { x: 11.4, z: 14.7 },
            end: { x: 11.4, z: 10.52 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //4.14 - nahore
            type: "partition",
            start: { x: 15.65, z: 15.6 },
            end: { x: 11.35, z: 15.6 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //4.14 - dole
            type: "partition",
            start: { x: 15.65, z: 9.62 },
            end: { x: 11.35, z: 9.62 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //4.14 - prostredek
            type: "partition",
            start: { x: 15.65, z: 12 },
            end: { x: 11.35, z: 12 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            type: "spiralStairs",
            center: { x: -13.5, z: 7.2 },
            radius: 0.45,
            numSteps: 30,
            stepWidth: 0.4,
            stepDepth: 1.165,
            start: -22,
          },
        ],
      },
      rooms: [
        {
          //vrsek
          name: "SCHODIŠTĚ (JÁDRO C)",
          bounds: { minX: -9.7, minZ: 9.8, maxX: -7.2, maxZ: 16.75 },
          number: "4.02",
        },
        {
          name: "V4",
          bounds: { minX: -6.6, minZ: 14.95, maxX: -4.05, maxZ: 16.6 },
          number: "V4",
        },
        {
          name: "V5",
          bounds: { minX: -6.6, minZ: 13.375, maxX: -4.05, maxZ: 14.95 },
          number: "V5",
        },
        {
          name: "ROZVODNA SLP",
          bounds: { minX: -6.6, minZ: 11.675, maxX: -4.05, maxZ: 13.375 },
          number: "4.03",
        },
        {
          name: "WC ZAMĚSTNANCI",
          bounds: { minX: -6.6, minZ: 9.7, maxX: -4.05, maxZ: 11.675 },
          number: "4.06",
        },
        {
          name: "MANIPULAČNÍ PROSTOR",
          bounds: { minX: -3.85, minZ: 9.8, maxX: -1.15, maxZ: 16.6 },
          number: "4.04",
        },
        {
          name: "KUCHYŇKA",
          bounds: { minX: -0.75, minZ: 14.2, maxX: 3.25, maxZ: 16.6 },
          number: "4.05",
        },
        {
          name: "ÚKLID",
          bounds: { minX: 3.4, minZ: 14.2, maxX: 4.5, maxZ: 16.6 },
          number: "4.18",
        },
        {
          name: "V1",
          bounds: { minX: -0.75, minZ: 9.8, maxX: 0.97, maxZ: 11.7 },
          number: "V1",
        },
        {
          name: "V2",
          bounds: { minX: 1.16, minZ: 9.8, maxX: 2.75, maxZ: 11.7 },
          number: "V2",
        },
        {
          name: "V3",
          bounds: { minX: 2.95, minZ: 9.8, maxX: 4.7, maxZ: 11.7 },
          number: "V3",
        },
        {
          name: "WC MUŽI",
          bounds: { minX: 5.05, minZ: 9.8, maxX: 7.2, maxZ: 15.1 },
          number: "4.07",
        },
        {
          name: "WC ŽENY",
          bounds: { minX: 7.4, minZ: 9.8, maxX: 9.65, maxZ: 15.1 },
          number: "4.08",
        },
        {
          // rozvaděče
          name: "ROZVADĚČE",
          bounds: { minX: -13.5, minZ: -9.8, maxX: -11.85, maxZ: -8.2 },
          number: "4.09a",
        },
        {
          name: "ROZDĚLOVAČE PODLAHOVÉHO TOPENÍ",
          bounds: { minX: -11.85, minZ: -9.5, maxX: -10.2, maxZ: -8.5 },
          number: "4.09b",
        },
        {
          name: "SCHODIŠTĚ (JÁDRO B)",
          bounds: { minX: 7.15, minZ: -16.8, maxX: 9.65, maxZ: -10.325 },
          number: "4.01",
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 4 OSOBY",
          bounds: { minX: -8.48, minZ: -4.8, maxX: -6.08, maxZ: -0.05 },
          number: "4.16",
        },
        {
          name: "TÝMOVÁ STUDOVNA/KLUBOVÁ MÍSTNOST",
          bounds: { minX: -6.08, minZ: -4.8, maxX: 2.92, maxZ: -0.05 },
          number: "4.11",
        },
        {
          name: "UMĚLECKÉ A EXPERIMENTÁLNÍ KINO",
          bounds: { minX: 4.32, minZ: -4.8, maxX: 9.92, maxZ: 4.8 },
          number: "4.12",
        },
        {
          name: "INDIVIDUALNÍ STUDOVNA",
          bounds: { minX: -8.43, minZ: -8.4, maxX: -7.33, maxZ: -6 },
          number: "4.13a",
        },
        {
          name: "INDIVIDUALNÍ STUDOVNA",
          bounds: { minX: -7.23, minZ: -8.4, maxX: -6.08, maxZ: -6 },
          number: "4.13b",
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 6 OSOBY",
          bounds: { minX: 11.45, minZ: 12, maxX: 15.6, maxZ: 15.6 },
          number: "4.14",
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 4 OSOBY",
          bounds: { minX: 11.45, minZ: 9.62, maxX: 15.6, maxZ: 12 },
          number: "4.15",
        },
      ],
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [
          { x: -5, z: -15, value: 19 },
          { x: 9, z: 1, value: 28 },
          { x: -11, z: 3, value: 23 },
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
      type: "aboveground",
      segments: [
        { width: 9, depth: 2, position: { x: -12, z: -9 } },
        { width: 28.19, depth: 35.82, position: { x: 3.855, z: 0 } },
        { width: 3.5, depth: 1.2, position: { x: -11.6, z: 6.25 } },
        { width: 35.82, depth: 0.84, position: { x: 0, z: -17.5 } },
        { width: 35.82, depth: 0.84, position: { x: 0, z: 17.5 } },
        { width: 0.84, depth: 35.8, position: { x: -17.5, z: 0 } },
        { width: 0.84, depth: 35.8, position: { x: 17.5, z: 0 } }, // kostka hlavni
      ],
      holes: [
        { x: 8.4, z: -14.4, width: 3, depth: 5 }, //1.1
        { x: -8.4, z: 14.4, width: 3, depth: 5 }, //1.1
        { x: 1.875, z: 12.95, width: 5.3, depth: 2.15 },
        { x: 7.35, z: 15.95, width: 4.65, depth: 1.35 },
        { x: -5.325, z: 15.825, width: 2.56, depth: 1.6 }, //v4
        { x: -5.325, z: 14.15, width: 2.56, depth: 1.45 }, //v5
        { x: 0.1075, z: 10.75, width: 1.72, depth: 1.95 }, //v1
        { x: 1.96, z: 10.75, width: 1.615, depth: 1.95 }, //v2
        { x: 3.765, z: 10.75, width: 1.625, depth: 1.95 }, //v3
      ],
      endPoints: [
        { x: -11.6, z: 6.25, id: "B" },
        { x: -9.1, z: 11.2, id: "B" },
        { x: 9.1, z: -11.2, id: "B" },
      ],
      nav: {
        clearance: 0.35,
      },
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },

        walls: [
          {
            type: "partition",
            start: { x: 0.45, z: 9.775 },
            end: { x: 1.35, z: 9.775 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 2.25, z: 9.775 },
            end: { x: 3.15, z: 9.775 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.63, z: 9.7 },
            end: { x: 4.23, z: 9.7 },
            yLevel: 2.1,
            partitionWidth: 0.2,
          },
          {
            type: "stairs",
            position: { x: 7.725, z: -12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: 7.15, z: -15.7 },
            floorP2: { x: 9.65, z: -16.8 },
            direction: "bottom",
          },
          {
            type: "stairs",
            position: { x: 9.075, z: -15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 26,
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: -7.725, z: 12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: -7.15, z: 15.7 },
            floorP2: { x: -9.65, z: 16.8 },
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: -9.075, z: 15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 26,
            direction: "bottom",
          },
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
              { x: -17.15, z: -17.15 },
              { x: 17.15, z: -17.15 },
              { x: 17.15, z: 17.15 },
              { x: -17.15, z: 17.15 },
            ],
          },
          {
            type: "railing",
            start: { x: -10.2, z: -10.2 },
            end: { x: -10.2, z: -17.15 },
            railingHeight: 1.2,
          },
          {
            // Např. pro zábradlí na některém patře
            type: "railing",
            start: { x: -10.2, z: 9.6 },
            end: { x: -10.2, z: 6.7 },
            railingHeight: 1.2,
          },
          {
            // Např. pro zábradlí na některém patře
            type: "railing",
            start: { x: -10.2, z: 5.8 },
            end: { x: -10.2, z: -7.8 },
            railingHeight: 1.2,
          },
          {
            //leva strana - vrchni stena
            type: "railing",
            start: { x: -10.2, z: 5.8 },
            end: { x: -13.25, z: 5.8 },
            railingHeight: 1.2,
            partitionWidth: 0.5,
          },
          {
            //leva strana - spodni stena
            type: "railing",
            start: { x: -10.2, z: 6.7 },
            end: { x: -13.25, z: 6.7 },
            railingHeight: 1.2,
            partitionWidth: 0.5,
          },
          {
            //VRCHNI PRICKY
            //V4, V5, 03, 06
            type: "partition",
            start: { x: -3.95, z: 16.6 },
            end: { x: -3.95, z: 10.15 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //2.05 - Pricka leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 9.8 },
            partitionWidth: 0.4,
            yLevel: 2.1,
          },
          {
            //2.05 - Pricka prava
            type: "partition",
            start: { x: 3.325, z: 16.6 },
            end: { x: 3.325, z: 14.3 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //2schodiste 02
            type: "partition",
            start: { x: -10, z: 9.7 },
            end: { x: -7.15, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //07 - prava spodni pricka
            type: "partition",
            start: { x: 5.05, z: 9.7 },
            end: { x: 10.2, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //04 - spodni pricka
            type: "partition",
            start: { x: -5, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //1.07 - vrchni pricka
            type: "partition",
            start: { x: 5.05, z: 13.275 },
            end: { x: 10.2, z: 13.275 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //1.07 - spodni pricka
            type: "partition",
            start: { x: 5.05, z: 11.525 },
            end: { x: 7.2, z: 11.525 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //1.08 - zachod prava 1
            type: "partition",
            start: { x: 8.325, z: 13.3 },
            end: { x: 8.325, z: 11.5 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //ROZVADECE - pricka
            type: "partition",
            start: { x: -10.36, z: -8.2 },
            end: { x: -10.36, z: -9.85 },
            partitionWidth: 0.3,
            yLevel: 2.1,
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 10.2, z: -10.2 },
            partitionWidth: 0.26,
            yLevel: 2.1,
          },
          {
            //5.13 a 5.15 - horni pricka
            type: "partition",
            start: { x: 3.25, z: -5.8 },
            end: { x: 4.15, z: -5.8 },
            partitionWidth: 0.05,
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //5.13 a 5.15 - horni pricka
            type: "partition",
            start: { x: -2.85, z: -5.8 },
            end: { x: -3.75, z: -5.8 },
            partitionWidth: 0.05,
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //5.12 a 5.14 - spodni pricka
            type: "partition",
            start: { x: -1.37, z: -4.6 },
            end: { x: -0.47, z: -4.6 },
            partitionWidth: 0.05,
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //5.12 a 5.14 - vrchni pricka
            type: "partition",
            start: { x: -1.37, z: 5 },
            end: { x: -0.4, z: 5 },
            partitionWidth: 0.05,
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //5.19 - leva pricka
            type: "partition",
            start: { x: 4.4, z: -0.71 },
            end: { x: 4.4, z: -1.51 },
            partitionWidth: 0.05,
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //5.19 - leva pricka
            type: "partition",
            start: { x: 4.4, z: -2.11 },
            end: { x: 4.4, z: -2.91 },
            partitionWidth: 0.05,
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //5.19 - leva pricka
            type: "partition",
            start: { x: 4.4, z: -4.29 },
            end: { x: 4.4, z: -3.49 },
            partitionWidth: 0.05,
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //5.19 - leva pricka
            type: "partition",
            start: { x: 8.6, z: -0.71 },
            end: { x: 8.6, z: -1.51 },
            partitionWidth: 0.05,
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //5.19 - leva pricka
            type: "partition",
            start: { x: 8.6, z: -2.11 },
            end: { x: 8.6, z: -2.91 },
            partitionWidth: 0.05,
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //5.19 - leva pricka
            type: "partition",
            start: { x: 8.6, z: -4.29 },
            end: { x: 8.6, z: -3.49 },
            partitionWidth: 0.05,
            yLevel: 2.1,
            materialType: "glass",
          },

          {
            //okna
            type: "partition",
            start: { x: 17.15, z: 17.15 },
            end: { x: 16.8, z: 16.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 16.2 },
            end: { x: 16.8, z: 16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 15 },
            end: { x: 16.8, z: 15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 13.8 },
            end: { x: 16.8, z: 13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 12.6 },
            end: { x: 16.8, z: 12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 11.4 },
            end: { x: 16.8, z: 11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 10.2 },
            end: { x: 16.8, z: 10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 9 },
            end: { x: 16.8, z: 9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 7.8 },
            end: { x: 16.8, z: 7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 6.6 },
            end: { x: 16.8, z: 6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 5.4 },
            end: { x: 16.8, z: 5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 4.2 },
            end: { x: 16.8, z: 4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 3 },
            end: { x: 16.8, z: 3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 1.8 },
            end: { x: 16.8, z: 1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 0.6 },
            end: { x: 16.8, z: 0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -0.6 },
            end: { x: 16.8, z: -0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -1.8 },
            end: { x: 16.8, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -3 },
            end: { x: 16.8, z: -3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -4.2 },
            end: { x: 16.8, z: -4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -5.4 },
            end: { x: 16.8, z: -5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -6.6 },
            end: { x: 16.8, z: -6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -7.8 },
            end: { x: 16.8, z: -7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -9 },
            end: { x: 16.8, z: -9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -10.2 },
            end: { x: 16.8, z: -10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -11.4 },
            end: { x: 16.8, z: -11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -12.6 },
            end: { x: 16.8, z: -12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -13.8 },
            end: { x: 16.8, z: -13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -15 },
            end: { x: 16.8, z: -15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -16.2 },
            end: { x: 16.8, z: -16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 16.8, z: -16.8 },
            end: { x: 17.15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 16.2, z: -16.8 },
            end: { x: 16.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 15, z: -16.8 },
            end: { x: 15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 13.8, z: -16.8 },
            end: { x: 13.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 12.6, z: -16.8 },
            end: { x: 12.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 11.4, z: -16.8 },
            end: { x: 11.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 9, z: -16.8 },
            end: { x: 9, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 7.8, z: -16.8 },
            end: { x: 7.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 6.6, z: -16.8 },
            end: { x: 6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 5.4, z: -16.8 },
            end: { x: 5.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 4.2, z: -16.8 },
            end: { x: 4.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 3, z: -16.8 },
            end: { x: 3, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 1.8, z: -16.8 },
            end: { x: 1.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 0.6, z: -16.8 },
            end: { x: 0.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.6, z: -16.8 },
            end: { x: -0.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -1.8, z: -16.8 },
            end: { x: -1.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -3, z: -16.8 },
            end: { x: -3, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -4.2, z: -16.8 },
            end: { x: -4.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -5.4, z: -16.8 },
            end: { x: -5.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -6.6, z: -16.8 },
            end: { x: -6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -7.8, z: -16.8 },
            end: { x: -7.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -9, z: -16.8 },
            end: { x: -9, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -10.2, z: -16.8 },
            end: { x: -10.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -11.4, z: -16.8 },
            end: { x: -11.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -12.6, z: -16.8 },
            end: { x: -12.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -13.8, z: -16.8 },
            end: { x: -13.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -15, z: -16.8 },
            end: { x: -15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.2, z: -16.8 },
            end: { x: -16.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.8, z: -16.8 },
            end: { x: -17.15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //okna
            type: "partition",
            start: { x: -17.15, z: 17.15 },
            end: { x: -16.8, z: 16.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 16.2 },
            end: { x: -16.8, z: 16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 15 },
            end: { x: -16.8, z: 15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 13.8 },
            end: { x: -16.8, z: 13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 12.6 },
            end: { x: -16.8, z: 12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 11.4 },
            end: { x: -16.8, z: 11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 10.2 },
            end: { x: -16.8, z: 10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 9 },
            end: { x: -16.8, z: 9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 7.8 },
            end: { x: -16.8, z: 7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 6.6 },
            end: { x: -16.8, z: 6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 5.4 },
            end: { x: -16.8, z: 5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 4.2 },
            end: { x: -16.8, z: 4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 3 },
            end: { x: -16.8, z: 3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 1.8 },
            end: { x: -16.8, z: 1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 0.6 },
            end: { x: -16.8, z: 0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -0.6 },
            end: { x: -16.8, z: -0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -1.8 },
            end: { x: -16.8, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -3 },
            end: { x: -16.8, z: -3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -4.2 },
            end: { x: -16.8, z: -4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -5.4 },
            end: { x: -16.8, z: -5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -6.6 },
            end: { x: -16.8, z: -6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -7.8 },
            end: { x: -16.8, z: -7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -9 },
            end: { x: -16.8, z: -9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -10.2 },
            end: { x: -16.8, z: -10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -11.4 },
            end: { x: -16.8, z: -11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -12.6 },
            end: { x: -16.8, z: -12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -13.8 },
            end: { x: -16.8, z: -13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -15 },
            end: { x: -16.8, z: -15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -16.2 },
            end: { x: -16.8, z: -16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 16.8, z: 16.8 },
            end: { x: 17.15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 16.2, z: 16.8 },
            end: { x: 16.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 15, z: 16.8 },
            end: { x: 15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 13.8, z: 16.8 },
            end: { x: 13.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 12.6, z: 16.8 },
            end: { x: 12.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 11.4, z: 16.8 },
            end: { x: 11.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 10.2, z: 16.8 },
            end: { x: 10.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 9, z: 16.8 },
            end: { x: 9, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 7.8, z: 16.8 },
            end: { x: 7.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 6.6, z: -16.8 },
            end: { x: 6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 5.4, z: 16.8 },
            end: { x: 5.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 4.2, z: 16.8 },
            end: { x: 4.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 3, z: 16.8 },
            end: { x: 3, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 1.8, z: 16.8 },
            end: { x: 1.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 0.6, z: 16.8 },
            end: { x: 0.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.6, z: 16.8 },
            end: { x: -0.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -1.8, z: 16.8 },
            end: { x: -1.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -3, z: 16.8 },
            end: { x: -3, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -4.2, z: 16.8 },
            end: { x: -4.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -5.4, z: 16.8 },
            end: { x: -5.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -6.6, z: 16.8 },
            end: { x: -6.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -7.8, z: 16.8 },
            end: { x: -7.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -9, z: 16.8 },
            end: { x: -9, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -10.2, z: 16.8 },
            end: { x: -10.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -11.4, z: 16.8 },
            end: { x: -11.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -12.6, z: 16.8 },
            end: { x: -12.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -13.8, z: 16.8 },
            end: { x: -13.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -15, z: 16.8 },
            end: { x: -15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.2, z: 16.8 },
            end: { x: -16.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.8, z: 16.8 },
            end: { x: -17.15, z: 17.15 },
            partitionWidth: 0.05,
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
            //Schodiste01 - spodni
            type: "partition",
            start: { x: 6.6, z: -16.875 },
            end: { x: 10.15, z: -16.875 },
            partitionWidth: 0.15,
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
            materialType: "glass",
          },
          {
            //5.13 a 5.15 - spodni stena
            type: "partition",
            start: { x: -4.6, z: -10 },
            end: { x: 5, z: -10 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.13 a 5.15 - prava stena
            type: "partition",
            start: { x: 5, z: -10.025 },
            end: { x: 5, z: -5.775 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.13 a 5.15 - horni stena 1
            type: "partition",
            start: { x: -4.6, z: -5.8 },
            end: { x: -3.75, z: -5.8 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.13 a 5.15 - horni stena 2
            type: "partition",
            start: { x: -2.85, z: -5.8 },
            end: { x: 3.25, z: -5.8 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.13 a 5.15 - horni stena 2
            type: "partition",
            start: { x: 4.15, z: -5.8 },
            end: { x: 5, z: -5.8 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.13 a 5.15 - rozdeleni
            type: "partition",
            start: { x: 0.8, z: -5.8 },
            end: { x: 0.8, z: -10 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.12 a 5.14 - leva stena
            type: "partition",
            start: { x: -4.6, z: 5.025 },
            end: { x: -4.6, z: -4.625 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.12 a 5.14 - spodni stena 1
            type: "partition",
            start: { x: -4.6, z: -4.6 },
            end: { x: -1.37, z: -4.6 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.12 a 5.14 - spodni stena 2
            type: "partition",
            start: { x: -0.4, z: -4.6 },
            end: { x: -0.47, z: -4.6 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.12 a 5.14 - prava stena
            type: "partition",
            start: { x: -0.4, z: -4.625 },
            end: { x: -0.4, z: 5.025 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.12 a 5.14 - vrchni stena 1
            type: "partition",
            start: { x: -1.37, z: 5 },
            end: { x: -4.6, z: 5 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.12 a 5.14 - vrchni stena 2
            type: "partition",
            start: { x: -0.4, z: 5 },
            end: { x: -0.47, z: 5 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.12 a 5.14 - rozdeleni
            type: "partition",
            start: { x: -0.4, z: -0.4 },
            end: { x: -4.6, z: -0.4 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.19 - leva stena 1
            type: "partition",
            start: { x: 4.4, z: -0.4 },
            end: { x: 4.4, z: -0.71 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.19 - leva stena 2
            type: "partition",
            start: { x: 4.4, z: -1.51 },
            end: { x: 4.4, z: -2.11 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.19 - leva stena 3
            type: "partition",
            start: { x: 4.4, z: -2.91 },
            end: { x: 4.4, z: -3.49 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.19 - leva stena 4
            type: "partition",
            start: { x: 4.4, z: -4.29 },
            end: { x: 4.4, z: -4.6 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.19 - prava stena 1
            type: "partition",
            start: { x: 8.6, z: -0.4 },
            end: { x: 8.6, z: -0.71 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.19 - prava stena 2
            type: "partition",
            start: { x: 8.6, z: -1.51 },
            end: { x: 8.6, z: -2.11 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.19 - prava stena 3
            type: "partition",
            start: { x: 8.6, z: -2.91 },
            end: { x: 8.6, z: -3.49 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.19 - prava stena 4
            type: "partition",
            start: { x: 8.6, z: -4.29 },
            end: { x: 8.6, z: -4.6 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.19 - vrchni stena
            type: "partition",
            start: { x: 8.625, z: -0.4 },
            end: { x: 4.375, z: -0.4 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.19 - vodorovne rozdeleni 1
            type: "partition",
            start: { x: 6.5, z: -0.4 },
            end: { x: 6.5, z: -4.625 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            //5.19 - horizontalni rozdeleni 1
            type: "partition",
            start: { x: 4.4, z: -1.8 },
            end: { x: 6.45, z: -1.8 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.19 - horizontalni rozdeleni 2
            type: "partition",
            start: { x: 4.4, z: -3.2 },
            end: { x: 6.45, z: -3.2 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.19 - horizontalni rozdeleni 3
            type: "partition",
            start: { x: 4.375, z: -4.6 },
            end: { x: 6.45, z: -4.6 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.19 - horizontalni rozdeleni 4
            type: "partition",
            start: { x: 6.55, z: -1.8 },
            end: { x: 8.6, z: -1.8 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.19 - horizontalni rozdeleni 5
            type: "partition",
            start: { x: 6.55, z: -3.2 },
            end: { x: 8.6, z: -3.2 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            //5.19 - horizontalni rozdeleni 6
            type: "partition",
            start: { x: 6.55, z: -4.6 },
            end: { x: 8.625, z: -4.6 },
            partitionWidth: 0.05,
            materialType: "glass",
          },
          {
            type: "spiralStairs",
            center: { x: 13.5, z: 7.2 },
            radius: 0.45,
            numSteps: 30,
            stepWidth: 0.4,
            stepDepth: 1.165,
            start: 0,
          },
        ],
      },
      rooms: [
        {
          //vrsek
          name: "SCHODIŠTĚ (JÁDRO C)",
          bounds: { minX: -9.7, minZ: 9.8, maxX: -7.2, maxZ: 16.75 },
          number: "5.02",
        },
        {
          name: "V4",
          bounds: { minX: -6.6, minZ: 14.95, maxX: -4.05, maxZ: 16.6 },
          number: "V4",
        },
        {
          name: "V5",
          bounds: { minX: -6.6, minZ: 13.375, maxX: -4.05, maxZ: 14.95 },
          number: "V5",
        },
        {
          name: "ROZVODNA SLP",
          bounds: { minX: -6.6, minZ: 11.675, maxX: -4.05, maxZ: 13.375 },
          number: "5.03",
        },
        {
          name: "WC ZAMĚSTNANCI",
          bounds: { minX: -6.6, minZ: 9.7, maxX: -4.05, maxZ: 11.675 },
          number: "5.06",
        },
        {
          name: "MANIPULAČNÍ PROSTOR",
          bounds: { minX: -3.85, minZ: 9.8, maxX: -1.15, maxZ: 16.6 },
          number: "5.04",
        },
        {
          name: "KUCHYŇKA",
          bounds: { minX: -0.75, minZ: 14.2, maxX: 3.25, maxZ: 16.6 },
          number: "5.05",
        },
        {
          name: "ÚKLID",
          bounds: { minX: 3.4, minZ: 14.2, maxX: 4.5, maxZ: 16.6 },
          number: "5.17",
        },
        {
          name: "V1",
          bounds: { minX: -0.75, minZ: 9.8, maxX: 0.97, maxZ: 11.7 },
          number: "V1",
        },
        {
          name: "V2",
          bounds: { minX: 1.16, minZ: 9.8, maxX: 2.75, maxZ: 11.7 },
          number: "V2",
        },
        {
          name: "V3",
          bounds: { minX: 2.95, minZ: 9.8, maxX: 4.7, maxZ: 11.7 },
          number: "V3",
        },
        {
          name: "WC MUŽI",
          bounds: { minX: 5.05, minZ: 9.8, maxX: 7.2, maxZ: 15.1 },
          number: "5.07",
        },
        {
          name: "WC ŽENY",
          bounds: { minX: 7.4, minZ: 9.8, maxX: 9.65, maxZ: 15.1 },
          number: "5.08",
        },
        {
          // rozvaděče
          name: "ROZVADĚČE",
          bounds: { minX: -13.5, minZ: -9.8, maxX: -11.85, maxZ: -8.2 },
          number: "5.09a",
        },
        {
          name: "ROZDĚLOVAČE PODLAHOVÉHO TOPENÍ",
          bounds: { minX: -11.85, minZ: -9.5, maxX: -10.2, maxZ: -8.5 },
          number: "5.09b",
        },
        {
          name: "SCHODIŠTĚ (JÁDRO B)",
          bounds: { minX: 7.15, minZ: -16.8, maxX: 9.65, maxZ: -10.325 },
          number: "5.01",
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 10 OSOB",
          bounds: { minX: -4.6, minZ: -0.4, maxX: -0.4, maxZ: 4.975 },
          number: "5.12",
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 8 OSOB",
          bounds: { minX: -4.6, minZ: -4.575, maxX: -0.4, maxZ: -0.4 },
          number: "5.14",
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 10 OSOB",
          bounds: { minX: -4.6, minZ: -10, maxX: 0.8, maxZ: -5.825 },
          number: "5.13",
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 8 OSOB",
          bounds: { minX: 0.8, minZ: -10, maxX: 5, maxZ: -5.825 },
          number: "5.15",
        },
        {
          name: "INDIVIDUÁLNÍ STUDOVNA",
          bounds: { minX: 4.425, minZ: -1.775, maxX: 6.45, maxZ: -0.425 },
          number: "5.19f",
        },
        {
          name: "INDIVIDUÁLNÍ STUDOVNA",
          bounds: { minX: 4.425, minZ: -3.175, maxX: 6.45, maxZ: -1.825 },
          number: "5.19e",
        },
        {
          name: "INDIVIDUÁLNÍ STUDOVNA",
          bounds: { minX: 4.425, minZ: -4.575, maxX: 6.45, maxZ: -3.225 },
          number: "5.19d",
        },
        {
          name: "INDIVIDUÁLNÍ STUDOVNA",
          bounds: { minX: 6.55, minZ: -1.775, maxX: 8.575, maxZ: -0.425 },
          number: "5.19a",
        },
        {
          name: "INDIVIDUÁLNÍ STUDOVNA",
          bounds: { minX: 6.55, minZ: -3.175, maxX: 8.575, maxZ: -1.825 },
          number: "5.19b",
        },
        {
          name: "INDIVIDUÁLNÍ STUDOVNA",
          bounds: { minX: 6.55, minZ: -4.575, maxX: 8.575, maxZ: -3.225 },
          number: "5.19c",
        },
      ],
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [
          { x: 4, z: -7, value: 28 },
          { x: 15, z: 9, value: 18 },
          { x: 1, z: -14, value: 25 },
        ],
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
      type: "aboveground",
      segments: [
        { width: 9, depth: 2, position: { x: -12, z: -9 } },
        { width: 20.56, depth: 35.82, position: { x: 0, z: 0 } },
        { width: 3.5, depth: 1.2, position: { x: 11.6, z: 8.1 } },
        { width: 35.82, depth: 0.84, position: { x: 0, z: -17.5 } },
        { width: 35.82, depth: 0.84, position: { x: 0, z: 17.5 } },
        { width: 0.84, depth: 35.8, position: { x: -17.5, z: 0 } },
        { width: 0.84, depth: 35.8, position: { x: 17.5, z: 0 } },
      ],

      holes: [
        { x: 8.4, z: -14.4, width: 3, depth: 5 },
        { x: 8.4, z: -14.4, width: 3, depth: 5 }, //1.1
        { x: -8.4, z: 14.4, width: 3, depth: 5 }, //1.1
        { x: 1.875, z: 12.95, width: 5.3, depth: 2.15 },
        { x: 7.35, z: 15.95, width: 4.65, depth: 1.35 },
        { x: -5.325, z: 15.825, width: 2.56, depth: 1.6 }, //v4
        { x: -5.325, z: 14.15, width: 2.56, depth: 1.45 }, //v5
        { x: 0.1075, z: 10.75, width: 1.72, depth: 1.95 }, //v1
        { x: 1.96, z: 10.75, width: 1.615, depth: 1.95 }, //v2
        { x: 3.765, z: 10.75, width: 1.625, depth: 1.95 }, //v3
      ],
      endPoints: [
        { x: 11.6, z: 8.1, id: "B" },
        { x: -9.1, z: 11.2, id: "B" },
        { x: 9.1, z: -11.2, id: "B" },
      ],
      nav: {
        clearance: 0.35, // menší clearance, aby prošly i 0.8 m dveře (2 * 0.35 = 0.7)
      },
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },
        walls: [
          {
            type: "partition",
            start: { x: 0.45, z: 9.775 },
            end: { x: 1.35, z: 9.775 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 2.25, z: 9.775 },
            end: { x: 3.15, z: 9.775 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.63, z: 9.7 },
            end: { x: 4.23, z: 9.7 },
            yLevel: 2.1,
            partitionWidth: 0.2,
          },
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
              { x: -17.15, z: -17.15 },
              { x: 17.15, z: -17.15 },
              { x: 17.15, z: 17.15 },
              { x: -17.15, z: 17.15 },
            ],
          },
          {
            //VRCHNI PRICKY
            //V4, V5, 03, 06
            type: "partition",
            start: { x: -3.95, z: 16.6 },
            end: { x: -3.95, z: 10.15 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //2.05 - Pricka leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 9.8 },
            partitionWidth: 0.4,
            yLevel: 2.1,
          },
          {
            //2.05 - Pricka prava
            type: "partition",
            start: { x: 3.325, z: 16.6 },
            end: { x: 3.325, z: 14.3 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //2schodiste 02
            type: "partition",
            start: { x: -10, z: 9.7 },
            end: { x: -7.15, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //07 - prava spodni pricka
            type: "partition",
            start: { x: 5.05, z: 9.7 },
            end: { x: 10.2, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //04 - spodni pricka
            type: "partition",
            start: { x: -5, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //1.07 - vrchni pricka
            type: "partition",
            start: { x: 5.05, z: 13.275 },
            end: { x: 10.2, z: 13.275 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //1.07 - spodni pricka
            type: "partition",
            start: { x: 5.05, z: 11.525 },
            end: { x: 7.2, z: 11.525 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //1.08 - zachod prava 1
            type: "partition",
            start: { x: 8.325, z: 13.3 },
            end: { x: 8.325, z: 11.5 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //ROZVADECE - pricka
            type: "partition",
            start: { x: -10.36, z: -8.2 },
            end: { x: -10.36, z: -9.85 },
            partitionWidth: 0.3,
            yLevel: 2.1,
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 10.2, z: -10.2 },
            partitionWidth: 0.26,
            yLevel: 2.1,
          },
          {
            // Technické hnízdo - vpravo pricka
            type: "partition",
            start: { x: -4.8, z: 6.68 },
            end: { x: -4.8, z: 3.08 },
            partitionWidth: 0.1,
            yLevel: 2.1,
          },
          {
            // Zasedací místnost - vpravo pricka
            type: "partition",
            start: { x: 3, z: -6.78 },
            end: { x: 3, z: -7.8 },
            partitionWidth: 0.1,
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            // Zasedací místnost - vpravo pricka
            type: "partition",
            start: { x: 3, z: 6.68 },
            end: { x: 3, z: 5.78 },
            partitionWidth: 0.1,
            materialType: "glass",
            yLevel: 2.1,
          },
          {
            // Zasedací místnost - vpravo pricka
            type: "partition",
            start: { x: -3, z: -6.78 },
            end: { x: -3, z: -7.8 },
            partitionWidth: 0.1,
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            // Zasedací místnost - vpravo pricka
            type: "partition",
            start: { x: -3, z: 6.68 },
            end: { x: -3, z: 5.78 },
            partitionWidth: 0.1,
            materialType: "glass",
            yLevel: 2.1,
          },
          {
            //okna
            type: "partition",
            start: { x: 17.15, z: 17.15 },
            end: { x: 16.8, z: 16.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 16.2 },
            end: { x: 16.8, z: 16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 15 },
            end: { x: 16.8, z: 15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 13.8 },
            end: { x: 16.8, z: 13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 12.6 },
            end: { x: 16.8, z: 12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 11.4 },
            end: { x: 16.8, z: 11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 10.2 },
            end: { x: 16.8, z: 10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 9 },
            end: { x: 16.8, z: 9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 7.8 },
            end: { x: 16.8, z: 7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 6.6 },
            end: { x: 16.8, z: 6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 5.4 },
            end: { x: 16.8, z: 5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 4.2 },
            end: { x: 16.8, z: 4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 3 },
            end: { x: 16.8, z: 3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 1.8 },
            end: { x: 16.8, z: 1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 0.6 },
            end: { x: 16.8, z: 0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -0.6 },
            end: { x: 16.8, z: -0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -1.8 },
            end: { x: 16.8, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -3 },
            end: { x: 16.8, z: -3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -4.2 },
            end: { x: 16.8, z: -4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -5.4 },
            end: { x: 16.8, z: -5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -6.6 },
            end: { x: 16.8, z: -6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -7.8 },
            end: { x: 16.8, z: -7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -9 },
            end: { x: 16.8, z: -9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -10.2 },
            end: { x: 16.8, z: -10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -11.4 },
            end: { x: 16.8, z: -11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -12.6 },
            end: { x: 16.8, z: -12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -13.8 },
            end: { x: 16.8, z: -13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -15 },
            end: { x: 16.8, z: -15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -16.2 },
            end: { x: 16.8, z: -16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 16.8, z: -16.8 },
            end: { x: 17.15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 16.2, z: -16.8 },
            end: { x: 16.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 15, z: -16.8 },
            end: { x: 15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 13.8, z: -16.8 },
            end: { x: 13.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 12.6, z: -16.8 },
            end: { x: 12.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 11.4, z: -16.8 },
            end: { x: 11.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 9, z: -16.8 },
            end: { x: 9, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 7.8, z: -16.8 },
            end: { x: 7.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 6.6, z: -16.8 },
            end: { x: 6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 5.4, z: -16.8 },
            end: { x: 5.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 4.2, z: -16.8 },
            end: { x: 4.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 3, z: -16.8 },
            end: { x: 3, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 1.8, z: -16.8 },
            end: { x: 1.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 0.6, z: -16.8 },
            end: { x: 0.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.6, z: -16.8 },
            end: { x: -0.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -1.8, z: -16.8 },
            end: { x: -1.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -3, z: -16.8 },
            end: { x: -3, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -4.2, z: -16.8 },
            end: { x: -4.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -5.4, z: -16.8 },
            end: { x: -5.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -6.6, z: -16.8 },
            end: { x: -6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -7.8, z: -16.8 },
            end: { x: -7.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -9, z: -16.8 },
            end: { x: -9, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -10.2, z: -16.8 },
            end: { x: -10.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -11.4, z: -16.8 },
            end: { x: -11.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -12.6, z: -16.8 },
            end: { x: -12.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -13.8, z: -16.8 },
            end: { x: -13.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -15, z: -16.8 },
            end: { x: -15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.2, z: -16.8 },
            end: { x: -16.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.8, z: -16.8 },
            end: { x: -17.15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //okna
            type: "partition",
            start: { x: -17.15, z: 17.15 },
            end: { x: -16.8, z: 16.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 16.2 },
            end: { x: -16.8, z: 16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 15 },
            end: { x: -16.8, z: 15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 13.8 },
            end: { x: -16.8, z: 13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 12.6 },
            end: { x: -16.8, z: 12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 11.4 },
            end: { x: -16.8, z: 11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 10.2 },
            end: { x: -16.8, z: 10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 9 },
            end: { x: -16.8, z: 9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 7.8 },
            end: { x: -16.8, z: 7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 6.6 },
            end: { x: -16.8, z: 6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 5.4 },
            end: { x: -16.8, z: 5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 4.2 },
            end: { x: -16.8, z: 4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 3 },
            end: { x: -16.8, z: 3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 1.8 },
            end: { x: -16.8, z: 1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 0.6 },
            end: { x: -16.8, z: 0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -0.6 },
            end: { x: -16.8, z: -0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -1.8 },
            end: { x: -16.8, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -3 },
            end: { x: -16.8, z: -3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -4.2 },
            end: { x: -16.8, z: -4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -5.4 },
            end: { x: -16.8, z: -5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -6.6 },
            end: { x: -16.8, z: -6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -7.8 },
            end: { x: -16.8, z: -7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -9 },
            end: { x: -16.8, z: -9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -10.2 },
            end: { x: -16.8, z: -10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -11.4 },
            end: { x: -16.8, z: -11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -12.6 },
            end: { x: -16.8, z: -12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -13.8 },
            end: { x: -16.8, z: -13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -15 },
            end: { x: -16.8, z: -15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -16.2 },
            end: { x: -16.8, z: -16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 16.8, z: 16.8 },
            end: { x: 17.15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 16.2, z: 16.8 },
            end: { x: 16.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 15, z: 16.8 },
            end: { x: 15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 13.8, z: 16.8 },
            end: { x: 13.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 12.6, z: 16.8 },
            end: { x: 12.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 11.4, z: 16.8 },
            end: { x: 11.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 10.2, z: 16.8 },
            end: { x: 10.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 9, z: 16.8 },
            end: { x: 9, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 7.8, z: 16.8 },
            end: { x: 7.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 6.6, z: -16.8 },
            end: { x: 6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 5.4, z: 16.8 },
            end: { x: 5.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 4.2, z: 16.8 },
            end: { x: 4.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 3, z: 16.8 },
            end: { x: 3, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 1.8, z: 16.8 },
            end: { x: 1.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 0.6, z: 16.8 },
            end: { x: 0.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.6, z: 16.8 },
            end: { x: -0.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -1.8, z: 16.8 },
            end: { x: -1.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -3, z: 16.8 },
            end: { x: -3, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -4.2, z: 16.8 },
            end: { x: -4.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -5.4, z: 16.8 },
            end: { x: -5.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -6.6, z: 16.8 },
            end: { x: -6.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -7.8, z: 16.8 },
            end: { x: -7.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -9, z: 16.8 },
            end: { x: -9, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -10.2, z: 16.8 },
            end: { x: -10.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -11.4, z: 16.8 },
            end: { x: -11.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -12.6, z: 16.8 },
            end: { x: -12.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -13.8, z: 16.8 },
            end: { x: -13.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -15, z: 16.8 },
            end: { x: -15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.2, z: 16.8 },
            end: { x: -16.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.8, z: 16.8 },
            end: { x: -17.15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "stairs",
            position: { x: 7.725, z: -12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: 7.15, z: -15.7 },
            floorP2: { x: 9.65, z: -16.8 },
            direction: "bottom",
          },
          {
            type: "stairs",
            position: { x: 9.075, z: -15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 26,
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: -7.725, z: 12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: -7.15, z: 15.7 },
            floorP2: { x: -9.65, z: 16.8 },
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: -9.075, z: 15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 26,
            direction: "bottom",
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
            //Schodiste01 - spodni
            type: "partition",
            start: { x: 6.6, z: -16.875 },
            end: { x: 10.15, z: -16.875 },
            partitionWidth: 0.15,
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
            //Y osa - vlevo
            type: "railing",
            start: { x: -10.2, z: -7.8 },
            end: { x: -10.2, z: 9.6 },
            railingHeight: 3,
          },
          {
            //Y osa - vlevo
            type: "railing",
            start: { x: -10.2, z: -16.8 },
            end: { x: -10.2, z: -10.2 },
            railingHeight: 3,
          },
          {
            //Y osa - vpravo
            type: "railing",
            start: { x: 10.2, z: 9.6 },
            end: { x: 10.2, z: 8.55 },
            railingHeight: 3,
          },
          {
            //Y osa - vpravo 2
            type: "railing",
            start: { x: 10.2, z: -10.2 },
            end: { x: 10.2, z: 7.65 },
            railingHeight: 3,
          },
          {
            //Y osa - vpravo 2
            type: "railing",
            start: { x: 10.2, z: 8.55 },
            end: { x: 10.2, z: 7.65 },
            yLevel: 1.8,
          },

          {
            //leva strana - vrchni stena
            type: "railing",
            start: { x: 10.2, z: 7.65 },
            end: { x: 13.25, z: 7.65 },
            railingHeight: 0.9,
            partitionWidth: 0.5,
          },
          {
            //leva strana - spodni stena
            type: "railing",
            start: { x: 10.2, z: 8.55 },
            end: { x: 13.25, z: 8.55 },
            railingHeight: 0.9,
            partitionWidth: 0.5,
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
            materialType: "glass",
          },
          {
            // Zasedací místnost - vpravo
            type: "partition",
            start: { x: 3, z: 5.78 },
            end: { x: 3, z: -6.78 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            // Zasedací místnost - nahore
            type: "partition",
            start: { x: -3.05, z: 6.68 },
            end: { x: 3.05, z: 6.68 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
          {
            // Zasedací místnost - dole
            type: "partition",
            start: { x: 3.05, z: -7.8 },
            end: { x: -3.05, z: -7.8 },
            partitionWidth: 0.1,
            materialType: "glass",
          },
        ],
      },
      rooms: [
        {
          //vrsek
          name: "SCHODIŠTĚ (JÁDRO C)",
          bounds: { minX: -9.7, minZ: 9.8, maxX: -7.2, maxZ: 16.75 },
          number: "6.02",
        },
        {
          name: "V4",
          bounds: { minX: -6.6, minZ: 14.95, maxX: -4.05, maxZ: 16.6 },
          number: "V4",
        },
        {
          name: "V5",
          bounds: { minX: -6.6, minZ: 13.375, maxX: -4.05, maxZ: 14.95 },
          number: "V5",
        },
        {
          name: "ROZVODNA SLP",
          bounds: { minX: -6.6, minZ: 11.675, maxX: -4.05, maxZ: 13.375 },
          nubmer: "6.05",
        },
        {
          name: "WC ZAMĚSTNANCI",
          bounds: { minX: -6.6, minZ: 9.7, maxX: -4.05, maxZ: 11.675 },
          number: "6.15",
        },
        {
          name: "MANIPULAČNÍ PROSTOR",
          bounds: { minX: -3.85, minZ: 9.8, maxX: -1.15, maxZ: 16.6 },
          number: "6.04",
        },
        {
          name: "KUCHYŇKA",
          bounds: { minX: -0.75, minZ: 14.2, maxX: 3.25, maxZ: 16.6 },
          number: "6.06",
        },
        {
          name: "ÚKLID",
          bounds: { minX: 3.4, minZ: 14.2, maxX: 4.5, maxZ: 16.6 },
          number: "6.03",
        },
        {
          name: "V1",
          bounds: { minX: -0.75, minZ: 9.8, maxX: 0.97, maxZ: 11.7 },
          number: "V1",
        },
        {
          name: "V2",
          bounds: { minX: 1.16, minZ: 9.8, maxX: 2.75, maxZ: 11.7 },
          number: "V2",
        },
        {
          name: "V3",
          bounds: { minX: 2.95, minZ: 9.8, maxX: 4.7, maxZ: 11.7 },
          number: "V3",
        },
        {
          name: "WC MUŽI",
          bounds: { minX: 5.05, minZ: 9.8, maxX: 7.2, maxZ: 15.1 },
          number: "6.07",
        },
        {
          name: "WC ŽENY",
          bounds: { minX: 7.4, minZ: 9.8, maxX: 9.65, maxZ: 15.1 },
          number: "6.08",
        },
        {
          // rozvaděče
          name: "ROZVADĚČE",
          bounds: { minX: -13.5, minZ: -9.8, maxX: -11.85, maxZ: -8.2 },
          number: "6.09a",
        },
        {
          name: "ROZDĚLOVAČE PODLAHOVÉHO TOPENÍ",
          bounds: { minX: -11.85, minZ: -9.5, maxX: -10.2, maxZ: -8.5 },
          number: "6.09b",
        },
        {
          name: "SCHODIŠTĚ (JÁDRO B)",
          bounds: { minX: 7.15, minZ: -16.8, maxX: 9.65, maxZ: -10.325 },
          number: "6.01",
        },
        {
          name: "TECHNICKÉ HNÍZDO",
          bounds: { minX: -9, minZ: 3.08, maxX: -4.85, maxZ: 6.68 },
          number: "6.13",
        },
        {
          name: "ZASEDACÍ MÍSTO PRO 22 OSOB",
          bounds: { minX: -2.95, minZ: -2.55, maxX: 2.95, maxZ: 6.68 },
          number: "6.11",
        },
        {
          name: "ZASEDACÍ MÍSTO PRO 16 OSOB",
          bounds: { minX: -2.95, minZ: -7.75, maxX: 2.95, maxZ: -2.7 },
          number: "6.12",
        },
      ],
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [
          { x: 13, z: 4, value: 28 },
          { x: 21, z: 8, value: 24 },
          { x: -16, z: 2, value: 18 },
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
      type: "aboveground",
      dimensions: {
        width: 35.82,
        depth: 35.82,
      },
      holes: [
        { x: 8.4, z: -14.4, width: 3, depth: 5 },
        { x: 8.4, z: -14.4, width: 3, depth: 5 }, //1.1
        { x: -8.4, z: 14.4, width: 3, depth: 5 }, //1.1
        { x: 1.875, z: 12.95, width: 5.3, depth: 2.15 },
        { x: 7.35, z: 15.95, width: 4.65, depth: 1.35 },
        { x: -5.325, z: 15.825, width: 2.56, depth: 1.6 }, //v4
        { x: -5.325, z: 14.15, width: 2.56, depth: 1.45 }, //v5
        { x: 0.1075, z: 10.75, width: 1.72, depth: 1.95 }, //v1
        { x: 1.96, z: 10.75, width: 1.615, depth: 1.95 }, //v2
        { x: 3.765, z: 10.75, width: 1.625, depth: 1.95 }, //v3
      ],
      endPoints: [
        { x: -9.1, z: 11.2, id: "B" },
        { x: 9.1, z: -11.2, id: "B" },
      ],
      nav: {
        clearance: 0.35, // menší clearance, aby prošly i 0.8 m dveře (2 * 0.35 = 0.7)
      },
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },
        trees: [
          {
            position: { x: 2.5, z: 2.5 }, // Position where you want the tree
            scale: 3.0, // Scale size of the tree
            type: "bush",
          },
          {
            position: { x: 2, z: -1 }, // Position where you want the tree
            scale: 2.0, // Scale size of the tree
            type: "bush",
          },
          {
            position: { x: 4, z: -4 }, // Position where you want the tree
            scale: 2.5, // Scale size of the tree
            type: "bush",
          },
        ],
        walls: [
          {
            type: "partition",
            start: { x: 0.45, z: 9.775 },
            end: { x: 1.35, z: 9.775 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 2.25, z: 9.775 },
            end: { x: 3.15, z: 9.775 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.63, z: 9.7 },
            end: { x: 4.23, z: 9.7 },
            yLevel: 2.1,
            partitionWidth: 0.2,
          },
          {
            type: "stairs",
            position: { x: 7.725, z: -12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: 7.15, z: -15.7 },
            floorP2: { x: 9.65, z: -16.8 },
            direction: "bottom",
          },
          {
            type: "stairs",
            position: { x: 9.075, z: -15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 26,
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: -7.725, z: 12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: -7.15, z: 15.7 },
            floorP2: { x: -9.65, z: 16.8 },
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: -9.075, z: 15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 26,
            direction: "bottom",
          },
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
              { x: -17.15, z: -17.15 },
              { x: 17.15, z: -17.15 },
              { x: 17.15, z: 17.15 },
              { x: -17.15, z: 17.15 },
            ],
          },
          {
            //VRCHNI PRICKY
            //V4, V5, 03, 06
            type: "partition",
            start: { x: -3.95, z: 16.6 },
            end: { x: -3.95, z: 10.15 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //2.05 - Pricka leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 9.8 },
            partitionWidth: 0.4,
            yLevel: 2.1,
          },
          {
            //2.05 - Pricka prava
            type: "partition",
            start: { x: 3.325, z: 16.6 },
            end: { x: 3.325, z: 14.3 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //2schodiste 02
            type: "partition",
            start: { x: -10, z: 9.7 },
            end: { x: -7.15, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //07 - prava spodni pricka
            type: "partition",
            start: { x: 5.05, z: 9.7 },
            end: { x: 10.2, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //04 - spodni pricka
            type: "partition",
            start: { x: -5, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //1.07 - vrchni pricka
            type: "partition",
            start: { x: 5.05, z: 13.275 },
            end: { x: 10.2, z: 13.275 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //1.07 - spodni pricka
            type: "partition",
            start: { x: 5.05, z: 11.525 },
            end: { x: 7.2, z: 11.525 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //1.08 - zachod prava 1
            type: "partition",
            start: { x: 8.325, z: 13.3 },
            end: { x: 8.325, z: 11.5 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //ROZVADECE - pricka
            type: "partition",
            start: { x: -10.36, z: -8.2 },
            end: { x: -10.36, z: -9.85 },
            partitionWidth: 0.3,
            yLevel: 2.1,
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 10.2, z: -10.2 },
            partitionWidth: 0.26,
            yLevel: 2.1,
          },
          {
            //Kostka - vlevo pricka
            type: "partition",
            start: { x: -10.2, z: 8.85 },
            end: { x: -10.2, z: 7.95 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka - 7.15 - 7.13
            type: "partition",
            start: { x: -10.2, z: 1.65 },
            end: { x: -10.2, z: 0.75 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka - vlevo pricka
            type: "partition",
            start: { x: -10.2, z: -1.95 },
            end: { x: -10.2, z: -2.85 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka - vlevo pricka
            type: "partition",
            start: { x: -10.2, z: -5.55 },
            end: { x: -10.2, z: -6.45 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka -  vpravo pricka
            type: "partition",
            start: { x: 10.2, z: -9.41 },
            end: { x: 10.2, z: -8.51 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka -  vpravo pricka
            type: "partition",
            start: { x: 10.2, z: -6.45 },
            end: { x: 10.2, z: -5.55 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka -  vpravo pricka
            type: "partition",
            start: { x: 10.2, z: -0.45 },
            end: { x: 10.2, z: 0.45 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka -  vpravo pricka
            type: "partition",
            start: { x: 10.2, z: 7.95 },
            end: { x: 10.2, z: 8.85 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka - dole pricka
            type: "partition",
            start: { x: -9.41, z: -10.2 },
            end: { x: -8.51, z: -10.2 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka - dole pricka
            type: "partition",
            start: { x: -2.85, z: -10.2 },
            end: { x: -1.95, z: -10.2 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka - dole pricka
            type: "partition",
            start: { x: 0.75, z: -10.2 },
            end: { x: 1.65, z: -10.2 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka - dole pricka
            type: "partition",
            start: { x: 4.35, z: -10.2 },
            end: { x: 6.6, z: -10.2 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //7.25 - vlevo 1
            type: "partition",
            start: { x: -7.675, z: -7.75 },
            end: { x: -7.675, z: 6.55 },
            partitionWidth: 0.15,
            yLevel: 2.1,
          },
          {
            //okna
            type: "partition",
            start: { x: 17.15, z: 17.15 },
            end: { x: 16.8, z: 16.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 16.2 },
            end: { x: 16.8, z: 16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 15 },
            end: { x: 16.8, z: 15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 13.8 },
            end: { x: 16.8, z: 13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 12.6 },
            end: { x: 16.8, z: 12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 11.4 },
            end: { x: 16.8, z: 11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 10.2 },
            end: { x: 16.8, z: 10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 9 },
            end: { x: 16.8, z: 9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 7.8 },
            end: { x: 16.8, z: 7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 6.6 },
            end: { x: 16.8, z: 6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 5.4 },
            end: { x: 16.8, z: 5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 4.2 },
            end: { x: 16.8, z: 4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 3 },
            end: { x: 16.8, z: 3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 1.8 },
            end: { x: 16.8, z: 1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 0.6 },
            end: { x: 16.8, z: 0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -0.6 },
            end: { x: 16.8, z: -0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -1.8 },
            end: { x: 16.8, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -3 },
            end: { x: 16.8, z: -3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -4.2 },
            end: { x: 16.8, z: -4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -5.4 },
            end: { x: 16.8, z: -5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -6.6 },
            end: { x: 16.8, z: -6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -7.8 },
            end: { x: 16.8, z: -7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -9 },
            end: { x: 16.8, z: -9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -10.2 },
            end: { x: 16.8, z: -10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -11.4 },
            end: { x: 16.8, z: -11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -12.6 },
            end: { x: 16.8, z: -12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -13.8 },
            end: { x: 16.8, z: -13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -15 },
            end: { x: 16.8, z: -15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -16.2 },
            end: { x: 16.8, z: -16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 16.8, z: -16.8 },
            end: { x: 17.15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 16.2, z: -16.8 },
            end: { x: 16.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 15, z: -16.8 },
            end: { x: 15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 13.8, z: -16.8 },
            end: { x: 13.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 12.6, z: -16.8 },
            end: { x: 12.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 11.4, z: -16.8 },
            end: { x: 11.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 9, z: -16.8 },
            end: { x: 9, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 7.8, z: -16.8 },
            end: { x: 7.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 6.6, z: -16.8 },
            end: { x: 6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 5.4, z: -16.8 },
            end: { x: 5.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 4.2, z: -16.8 },
            end: { x: 4.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 3, z: -16.8 },
            end: { x: 3, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 1.8, z: -16.8 },
            end: { x: 1.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 0.6, z: -16.8 },
            end: { x: 0.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.6, z: -16.8 },
            end: { x: -0.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -1.8, z: -16.8 },
            end: { x: -1.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -3, z: -16.8 },
            end: { x: -3, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -4.2, z: -16.8 },
            end: { x: -4.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -5.4, z: -16.8 },
            end: { x: -5.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -6.6, z: -16.8 },
            end: { x: -6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -7.8, z: -16.8 },
            end: { x: -7.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -9, z: -16.8 },
            end: { x: -9, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -10.2, z: -16.8 },
            end: { x: -10.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -11.4, z: -16.8 },
            end: { x: -11.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -12.6, z: -16.8 },
            end: { x: -12.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -13.8, z: -16.8 },
            end: { x: -13.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -15, z: -16.8 },
            end: { x: -15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.2, z: -16.8 },
            end: { x: -16.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.8, z: -16.8 },
            end: { x: -17.15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //okna
            type: "partition",
            start: { x: -17.15, z: 17.15 },
            end: { x: -16.8, z: 16.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 16.2 },
            end: { x: -16.8, z: 16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 15 },
            end: { x: -16.8, z: 15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 13.8 },
            end: { x: -16.8, z: 13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 12.6 },
            end: { x: -16.8, z: 12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 11.4 },
            end: { x: -16.8, z: 11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 10.2 },
            end: { x: -16.8, z: 10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 9 },
            end: { x: -16.8, z: 9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 7.8 },
            end: { x: -16.8, z: 7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 6.6 },
            end: { x: -16.8, z: 6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 5.4 },
            end: { x: -16.8, z: 5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 4.2 },
            end: { x: -16.8, z: 4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 3 },
            end: { x: -16.8, z: 3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 1.8 },
            end: { x: -16.8, z: 1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 0.6 },
            end: { x: -16.8, z: 0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -0.6 },
            end: { x: -16.8, z: -0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -1.8 },
            end: { x: -16.8, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -3 },
            end: { x: -16.8, z: -3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -4.2 },
            end: { x: -16.8, z: -4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -5.4 },
            end: { x: -16.8, z: -5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -6.6 },
            end: { x: -16.8, z: -6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -7.8 },
            end: { x: -16.8, z: -7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -9 },
            end: { x: -16.8, z: -9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -10.2 },
            end: { x: -16.8, z: -10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -11.4 },
            end: { x: -16.8, z: -11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -12.6 },
            end: { x: -16.8, z: -12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -13.8 },
            end: { x: -16.8, z: -13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -15 },
            end: { x: -16.8, z: -15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -16.2 },
            end: { x: -16.8, z: -16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 16.8, z: 16.8 },
            end: { x: 17.15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 16.2, z: 16.8 },
            end: { x: 16.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 15, z: 16.8 },
            end: { x: 15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 13.8, z: 16.8 },
            end: { x: 13.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 12.6, z: 16.8 },
            end: { x: 12.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 11.4, z: 16.8 },
            end: { x: 11.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 10.2, z: 16.8 },
            end: { x: 10.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 9, z: 16.8 },
            end: { x: 9, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 7.8, z: 16.8 },
            end: { x: 7.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 6.6, z: -16.8 },
            end: { x: 6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 5.4, z: 16.8 },
            end: { x: 5.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 4.2, z: 16.8 },
            end: { x: 4.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 3, z: 16.8 },
            end: { x: 3, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 1.8, z: 16.8 },
            end: { x: 1.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 0.6, z: 16.8 },
            end: { x: 0.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.6, z: 16.8 },
            end: { x: -0.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -1.8, z: 16.8 },
            end: { x: -1.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -3, z: 16.8 },
            end: { x: -3, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -4.2, z: 16.8 },
            end: { x: -4.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -5.4, z: 16.8 },
            end: { x: -5.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -6.6, z: 16.8 },
            end: { x: -6.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -7.8, z: 16.8 },
            end: { x: -7.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -9, z: 16.8 },
            end: { x: -9, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -10.2, z: 16.8 },
            end: { x: -10.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -11.4, z: 16.8 },
            end: { x: -11.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -12.6, z: 16.8 },
            end: { x: -12.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -13.8, z: 16.8 },
            end: { x: -13.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -15, z: 16.8 },
            end: { x: -15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.2, z: 16.8 },
            end: { x: -16.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.8, z: 16.8 },
            end: { x: -17.15, z: 17.15 },
            partitionWidth: 0.05,
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
            //Schodiste01 - spodni
            type: "partition",
            start: { x: 6.6, z: -16.875 },
            end: { x: 10.15, z: -16.875 },
            partitionWidth: 0.15,
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
            materialType: "glass",
          },

          {
            //leva strana stena 2
            type: "partition",
            start: { x: -10.2, z: 7.95 },
            end: { x: -10.2, z: 1.65 },
            materialType: "glass",
          },
          {
            //leva strana stena 3
            type: "partition",
            start: { x: -10.2, z: 0.75 },
            end: { x: -10.2, z: -1.95 },
            materialType: "glass",
          },
          {
            //leva strana stena 4
            type: "partition",
            start: { x: -10.2, z: -2.85 },
            end: { x: -10.2, z: -5.55 },
            materialType: "glass",
          },
          {
            //leva strana stena 5
            type: "partition",
            start: { x: -10.2, z: -6.45 },
            end: { x: -10.2, z: -7.8 },
            materialType: "glass",
          },
          {
            //leva strana rozdeleni 1 1
            type: "partition",
            start: { x: -16.8, z: 6.6 },
            end: { x: -11.17, z: 6.6 },
            materialType: "glass",
          },
          {
            //leva strana rozdeleni 1 1
            type: "partition",
            start: { x: -11.17, z: 6.6 },
            end: { x: -10.2, z: 6.6 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //leva strana rozdeleni 1 2
            type: "partition",
            start: { x: -10.27, z: 6.6 },
            end: { x: -10.2, z: 6.6 },
            materialType: "glass",
          },
          {
            //leva strana rozdeleni 2 1
            type: "partition",
            start: { x: -16.8, z: -0.6 },
            end: { x: -11.17, z: -0.6 },
            materialType: "glass",
          },
          {
            //leva strana rozdeleni 2 1
            type: "partition",
            start: { x: -11.17, z: -0.6 },
            end: { x: -10.2, z: -0.6 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //leva strana rozdeleni 2 2
            type: "partition",
            start: { x: -10.27, z: -0.6 },
            end: { x: -10.2, z: -0.6 },
            materialType: "glass",
          },
          {
            //leva strana rozdeleni 3
            type: "partition",
            start: { x: -16.8, z: -4.2 },
            end: { x: -10.2, z: -4.2 },
            materialType: "glass",
          },
          {
            //leva strana rozdeleni 4
            type: "partition",
            start: { x: -16.8, z: -7.8 },
            end: { x: -10.2, z: -7.8 },
            materialType: "glass",
          },
          {
            //spodni strana stena 1
            type: "partition",
            start: { x: -10.2, z: -10.2 },
            end: { x: -9.41, z: -10.2 },
            materialType: "glass",
          },
          {
            //spodni strana stena 2
            type: "partition",
            start: { x: -8.51, z: -10.2 },
            end: { x: -2.85, z: -10.2 },
            materialType: "glass",
          },
          {
            //spodni strana stena 3
            type: "partition",
            start: { x: -1.95, z: -10.2 },
            end: { x: 0.75, z: -10.2 },
            materialType: "glass",
          },
          {
            //spodni strana stena 4
            type: "partition",
            start: { x: 1.65, z: -10.2 },
            end: { x: 4.35, z: -10.2 },
            materialType: "glass",
          },
          {
            //spodni strana stena 5
            type: "partition",
            start: { x: 5.25, z: -10.2 },
            end: { x: 6.6, z: -10.2 },
            materialType: "glass",
          },
          {
            //spodni strana rozdeleni 1
            type: "partition",
            start: { x: -7.8, z: -10.2 },
            end: { x: -7.8, z: -16.8 },
            materialType: "glass",
          },
          {
            //spodni strana rozdeleni 2
            type: "partition",
            start: { x: -0.6, z: -10.2 },
            end: { x: -0.6, z: -16.8 },
            materialType: "glass",
          },
          {
            //spodni strana rozdeleni 3
            type: "partition",
            start: { x: 3, z: -10.2 },
            end: { x: 3, z: -16.8 },
            materialType: "glass",
          },
          {
            //prava strana stena 1
            type: "partition",
            start: { x: 10.2, z: -10.2 },
            end: { x: 10.2, z: -9.41 },
            materialType: "glass",
          },
          {
            //prava strana stena 2
            type: "partition",
            start: { x: 10.2, z: -8.51 },
            end: { x: 10.2, z: -6.45 },
            materialType: "glass",
          },
          {
            //prava strana stena 3
            type: "partition",
            start: { x: 10.2, z: -5.55 },
            end: { x: 10.2, z: -0.45 },
            materialType: "glass",
          },
          {
            //prava strana stena 4
            type: "partition",
            start: { x: 10.2, z: 0.45 },
            end: { x: 10.2, z: 7.95 },
            materialType: "glass",
          },
          {
            //prava strana stena 4
            type: "partition",
            start: { x: 10.2, z: 8.85 },
            end: { x: 10.2, z: 9.6 },
            materialType: "glass",
          },
          {
            //prava strana rozdeleni 1 1
            type: "partition",
            start: { x: 10.2, z: -7.8 },
            end: { x: 10.27, z: -7.8 },
            materialType: "glass",
          },
          {
            //prava strana rozdeleni 1 2
            type: "partition",
            start: { x: 11.17, z: 6.6 },
            end: { x: 16.8, z: 6.6 },
            materialType: "glass",
          },
          {
            //prava strana rozdeleni 1 2
            type: "partition",
            start: { x: 10.2, z: 6.6 },
            end: { x: 16.8, z: 6.6 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //prava strana rozdeleni 2 1
            type: "partition",
            start: { x: 10.2, z: -4.2 },
            end: { x: 10.27, z: -4.2 },
            materialType: "glass",
          },
          {
            //prava strana rozdeleni 2 2
            type: "partition",
            start: { x: 11.17, z: -4.2 },
            end: { x: 16.8, z: -4.2 },
            materialType: "glass",
          },
          {
            //prava strana rozdeleni 2 2
            type: "partition",
            start: { x: 10.2, z: -4.2 },
            end: { x: 16.8, z: -4.2 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //prava strana rozdeleni 3
            type: "partition",
            start: { x: 10.2, z: -7.8 },
            end: { x: 16.8, z: -7.8 },
            materialType: "glass",
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
            type: "railing",
            start: { x: -0.45, z: 6.4 },
            end: { x: -0.45, z: -7.44 },
            partitionWidth: 0.05,
            railingHeight: 3.1,
          },
          {
            //dira - vpravo
            type: "railing",
            start: { x: 6.19, z: 6.4 },
            end: { x: 6.19, z: -7.44 },
            partitionWidth: 0.05,
            railingHeight: 3.1,
          },
          {
            //dira - nahore
            type: "railing",
            start: { x: -0.475, z: 6.4 },
            end: { x: 6.215, z: 6.4 },
            partitionWidth: 0.05,
            railingHeight: 3.1,
          },
          {
            //dira - dole
            type: "railing",
            start: { x: -0.475, z: -7.44 },
            end: { x: 6.215, z: -7.44 },
            partitionWidth: 0.05,
            railingHeight: 3.1,
          },
        ],
      },
      rooms: [
        {
          //vrsek
          name: "SCHODIŠTĚ (JÁDRO C)",
          bounds: { minX: -9.7, minZ: 9.8, maxX: -7.2, maxZ: 16.75 },
          number: "7.02",
        },
        {
          name: "V4",
          bounds: { minX: -6.6, minZ: 14.95, maxX: -4.05, maxZ: 16.6 },
          number: "V4",
        },
        {
          name: "V5",
          bounds: { minX: -6.6, minZ: 13.375, maxX: -4.05, maxZ: 14.95 },
          number: "V5",
        },
        {
          name: "ROZVODNA SLP",
          bounds: { minX: -6.6, minZ: 11.675, maxX: -4.05, maxZ: 13.375 },
          number: "7.05",
        },
        {
          name: "BEZBARIEROVÉ WC",
          bounds: { minX: -6.6, minZ: 9.7, maxX: -4.05, maxZ: 11.675 },
          number: "7.27",
        },
        {
          name: "MANIPULAČNÍ PROSTOR",
          bounds: { minX: -3.85, minZ: 9.8, maxX: -1.15, maxZ: 16.6 },
          number: "7.04",
        },
        {
          name: "KUCHYŇKA",
          bounds: { minX: -0.75, minZ: 14.2, maxX: 3.25, maxZ: 16.6 },
          number: "7.06",
        },
        {
          name: "ÚKLID",
          bounds: { minX: 3.4, minZ: 14.2, maxX: 4.5, maxZ: 16.6 },
          number: "7.03",
        },
        {
          name: "V1",
          bounds: { minX: -0.75, minZ: 9.8, maxX: 0.97, maxZ: 11.7 },
          number: "V1",
        },
        {
          name: "V2",
          bounds: { minX: 1.16, minZ: 9.8, maxX: 2.75, maxZ: 11.7 },
          number: "V2",
        },
        {
          name: "V3",
          bounds: { minX: 2.95, minZ: 9.8, maxX: 4.7, maxZ: 11.7 },
          number: "V3",
        },
        {
          name: "WC MUŽI",
          bounds: { minX: 5.05, minZ: 9.8, maxX: 7.2, maxZ: 15.1 },
          number: "7.07",
        },
        {
          name: "WC ŽENY",
          bounds: { minX: 7.4, minZ: 9.8, maxX: 9.65, maxZ: 15.1 },
          number: "7.08",
        },
        {
          // rozvaděče
          name: "ROZVADĚČE",
          bounds: { minX: -13.5, minZ: -9.8, maxX: -11.85, maxZ: -8.2 },
          number: "7.09a",
        },
        {
          name: "ROZDĚLOVAČE PODLAHOVÉHO TOPENÍ",
          bounds: { minX: -11.85, minZ: -9.5, maxX: -10.2, maxZ: -8.5 },
          number: "7.09b",
        },
        {
          name: "SCHODIŠTĚ (JÁDRO B)",
          bounds: { minX: 7.15, minZ: -16.8, maxX: 9.65, maxZ: -10.325 },
          number: "7.01",
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ AKVIZICE KNIHOVNÍHO FONDU",
          bounds: { minX: -16.8, minZ: 6.7, maxX: -10.2, maxZ: 16.8 },
          number: "7.12",
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ AKVIZICE KNIHOVNÍHO FONDU",
          bounds: { minX: -16.8, minZ: -0.5, maxX: -10.275, maxZ: 6.5 },
          number: "7.13",
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ PRO KOORDINACI AKVIZIČNÍCH ČINNOSTI A OCHRANU KNIH. FONDU",
          bounds: { minX: -16.8, minZ: -4.1, maxX: -10.275, maxZ: -0.7 },
          number: "7.14",
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ SLUŽEB",
          bounds: { minX: -16.8, minZ: -7.7, maxX: -10.275, maxZ: -4.3 },
          number: "7.15",
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ INFORMAČNÍCH TECHNOLOGIÍ",
          bounds: { minX: -16.8, minZ: -16.8, maxX: -7.65, maxZ: -10.2 },
          number: "7.16",
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ PRO BIBLIOGRAFICKÉ A REŠERŠNÍ SLUŽBY",
          bounds: { minX: -7.55, minZ: -16.8, maxX: -0.475, maxZ: -10.275 },
          number: "7.17",
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ PRO REFORMOVÁNÍ DOKUMENTŮ A SPRÁVU DIGITÁLNÍ SBÍRKY",
          bounds: { minX: -0.325, minZ: -16.8, maxX: 3.125, maxZ: -10.275 },
          number: "7.18",
        },
        {
          name: "LABORATOŘ NA TESTOVÁNÍ KNIH",
          bounds: { minX: 3.275, minZ: -16.8, maxX: 6.875, maxZ: -10.275 },
          number: "7.19",
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ PRO ZPRACOVÁNÍ KNIHOVNÍHO FONDU",
          bounds: { minX: 10.2, minZ: 6.675, maxX: 16.8, maxZ: 16.8 },
          number: "7.23",
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ PRO ZPRACOVÁNÍ KNIHOVNÍHO FONDU",
          bounds: { minX: 10.275, minZ: -4.125, maxX: 16.8, maxZ: 6.525 },
          number: "7.22",
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ PRO KOORDINACI JMENNÉHO A VĚCNÉHO ZPRACOVÁNÍ DOKUMENTŮ 1",
          bounds: { minX: 10.275, minZ: -7.725, maxX: 16.8, maxZ: -4.275 },
          number: "7.21",
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ PRO KOORDINACI JMENNÉHO A VĚCNÉHO ZPRACOVÁNÍ DOKUMENTŮ 2",
          bounds: { minX: 10.2, minZ: -16.8, maxX: 16.8, maxZ: -7.875 },
          number: "7.20",
        },
        {
          name: "SÍŤOVÁ TISKÁRNA",
          bounds: { minX: -7.6, minZ: 4.6, maxX: -3.2, maxZ: 6.4 },
          number: "7.28",
        },
        {
          name: "SKLAD VÝPOČETNÍ TECHNIKY",
          bounds: { minX: -7.6, minZ: 0.075, maxX: -3.2, maxZ: 4.45 },
          number: "7.24",
        },
        {
          name: "DATOVÉ CENTRUM",
          bounds: { minX: -7.6, minZ: -7.6, maxX: -3.2, maxZ: -0.075 },
          number: "7.25",
        },
      ],
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [
          { x: 1, z: -14, value: 19 },
          { x: -3, z: 6, value: 28 },
          { x: 10, z: 4, value: 25 },
          { x: 16, z: 2, value: 24 },
          { x: 11, z: 8, value: 22 },
          { x: 2, z: 7, value: 19 },
          { x: 3, z: 2, value: 28 },
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
        { x: 13.5, z: 1, label: "7.22" },
        { x: 13.5, z: 12, label: "7.23" },
        { x: -5.25, z: 5.5, label: "7.28" },
        { x: -5.25, z: 2.1, label: "7.24" },
        { x: -5.25, z: -3.9, label: "7.25" },
      ],
    },
    {
      id: 7,
      name: "8NP",
      type: "aboveground",
      segments: [
        { width: 17.65, depth: 35.89, position: { x: -9.1, z: 0 } }, // kostka hlavni
        { width: 12, depth: 35.89, position: { x: 12, z: 0 } },
        { width: 12, depth: 11.7, position: { x: 3, z: 12.1 } },
        { width: 12, depth: 10.6, position: { x: 3, z: -12.65 } },
      ],
      holes: [
        { x: 8.4, z: -14.4, width: 3, depth: 5 },
        { x: 8.4, z: -14.4, width: 3, depth: 5 }, //1.1
        { x: -8.4, z: 14.4, width: 3, depth: 5 }, //1.1
        { x: 1.875, z: 12.95, width: 5.3, depth: 2.15 },
        { x: 7.35, z: 15.95, width: 4.65, depth: 1.35 },
        { x: -5.325, z: 15.825, width: 2.56, depth: 1.6 }, //v4
        { x: -5.325, z: 14.15, width: 2.56, depth: 1.45 }, //v5
        { x: 0.1075, z: 10.75, width: 1.72, depth: 1.95 }, //v1
        { x: 1.96, z: 10.75, width: 1.615, depth: 1.95 }, //v2
        { x: 3.765, z: 10.75, width: 1.625, depth: 1.95 }, //v3
      ],
      endPoints: [
        { x: -9.1, z: 11.2, id: "B" },
        { x: 9.1, z: -11.2, id: "B" },
      ],
      nav: {
        clearance: 0.35, // menší clearance, aby prošly i 0.8 m dveře (2 * 0.35 = 0.7)
      },
      layout: {
        rooms_grid: {
          columns: 1,
          rows: 1,
        },

        walls: [
          {
            type: "partition",
            start: { x: 0.45, z: 9.775 },
            end: { x: 1.35, z: 9.775 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 2.25, z: 9.775 },
            end: { x: 3.15, z: 9.775 },
            partitionHeight: 2.1,
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.63, z: 9.7 },
            end: { x: 4.23, z: 9.7 },
            yLevel: 2.1,
            partitionWidth: 0.2,
          },
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
              { x: -17.15, z: -17.15 },
              { x: 17.15, z: -17.15 },
              { x: 17.15, z: 17.15 },
              { x: -17.15, z: 17.15 },
            ],
          },
          {
            type: "stairs",
            position: { x: 7.725, z: -12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: 7.15, z: -15.7 },
            floorP2: { x: 9.65, z: -16.8 },
            direction: "bottom",
          },
          {
            type: "stairs",
            position: { x: 9.075, z: -15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 26,
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: -7.725, z: 12 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 1,
            numSteps: 13,
            totalSteps: 26,
            floorP1: { x: -7.15, z: 15.7 },
            floorP2: { x: -9.65, z: 16.8 },
            direction: "top",
          },
          {
            type: "stairs",
            position: { x: -9.075, z: 15.552 },
            stepWidth: 1.15,
            stepDepth: 0.296,
            partPosition: 2,
            numSteps: 13,
            totalSteps: 26,
            direction: "bottom",
          },
          {
            //VRCHNI PRICKY
            //V4, V5, 03, 06
            type: "partition",
            start: { x: -3.95, z: 16.6 },
            end: { x: -3.95, z: 10.15 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //2.05 - Pricka leva
            type: "partition",
            start: { x: -0.95, z: 16.6 },
            end: { x: -0.95, z: 9.8 },
            partitionWidth: 0.4,
            yLevel: 2.1,
          },
          {
            //2.05 - Pricka prava
            type: "partition",
            start: { x: 3.325, z: 16.6 },
            end: { x: 3.325, z: 14.3 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //2schodiste 02
            type: "partition",
            start: { x: -10, z: 9.7 },
            end: { x: -7.15, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //07 - prava spodni pricka
            type: "partition",
            start: { x: 5.05, z: 9.7 },
            end: { x: 10.2, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //04 - spodni pricka
            type: "partition",
            start: { x: -5, z: 9.7 },
            end: { x: -0.63, z: 9.7 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //1.07 - vrchni pricka
            type: "partition",
            start: { x: 5.05, z: 13.275 },
            end: { x: 10.2, z: 13.275 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //1.07 - spodni pricka
            type: "partition",
            start: { x: 5.05, z: 11.525 },
            end: { x: 7.2, z: 11.525 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //1.08 - zachod prava 1
            type: "partition",
            start: { x: 8.325, z: 13.3 },
            end: { x: 8.325, z: 11.5 },
            partitionWidth: 0.05,
            yLevel: 2.1,
          },
          {
            //ROZVADECE - pricka
            type: "partition",
            start: { x: -10.36, z: -8.2 },
            end: { x: -10.36, z: -9.85 },
            partitionWidth: 0.3,
            yLevel: 2.1,
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 10.2, z: -10.2 },
            partitionWidth: 0.26,
            yLevel: 2.1,
          },
          {
            //Kostka - vlevo pricka
            type: "partition",
            start: { x: -10.2, z: 8.85 },
            end: { x: -10.2, z: 7.95 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka - vlevo pricka
            type: "partition",
            start: { x: -10.2, z: 5.25 },
            end: { x: -10.2, z: 4.35 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka - vlevo pricka
            type: "partition",
            start: { x: -10.2, z: 1.65 },
            end: { x: -10.2, z: 0.75 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka - vlevo pricka
            type: "partition",
            start: { x: -10.2, z: -1.95 },
            end: { x: -10.2, z: -2.85 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka - vlevo pricka
            type: "partition",
            start: { x: -10.2, z: -5.55 },
            end: { x: -10.2, z: -6.45 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka -  vpravo pricka
            type: "partition",
            start: { x: 10.2, z: 8.85 },
            end: { x: 10.2, z: 7.95 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka -  vpravo pricka
            type: "partition",
            start: { x: 10.2, z: 5.25 },
            end: { x: 10.2, z: 4.35 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka -  vpravo pricka
            type: "partition",
            start: { x: 10.2, z: 1.65 },
            end: { x: 10.2, z: 0.75 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka -  vpravo pricka
            type: "partition",
            start: { x: 10.2, z: -1.95 },
            end: { x: 10.2, z: -2.85 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka -  vpravo pricka
            type: "partition",
            start: { x: 10.2, z: -5.55 },
            end: { x: 10.2, z: -6.45 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka - dole pricka
            type: "partition",
            start: { x: -9.41, z: -10.2 },
            end: { x: -8.51, z: -10.2 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka - dole pricka
            type: "partition",
            start: { x: -6.45, z: -10.2 },
            end: { x: -5.55, z: -10.2 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka - dole pricka
            type: "partition",
            start: { x: -1.65, z: -10.2 },
            end: { x: -0.75, z: -10.2 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka - dole pricka
            type: "partition",
            start: { x: 1.95, z: -10.2 },
            end: { x: 2.85, z: -10.2 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Kostka - dole pricka
            type: "partition",
            start: { x: 4.95, z: -10.2 },
            end: { x: 5.85, z: -10.2 },
            yLevel: 2.1,
            materialType: "glass",
          },
          {
            //Spisovna/Tiskarna - vlevo
            type: "partition",
            start: { x: -7.72, z: 3.08 },
            end: { x: -7.72, z: -7.8 },
            partitionWidth: 0.22,
            yLevel: 2.1,
          },
          {
            //okna
            type: "partition",
            start: { x: 17.15, z: 17.15 },
            end: { x: 16.8, z: 16.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 16.2 },
            end: { x: 16.8, z: 16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 15 },
            end: { x: 16.8, z: 15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 13.8 },
            end: { x: 16.8, z: 13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 12.6 },
            end: { x: 16.8, z: 12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 11.4 },
            end: { x: 16.8, z: 11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 10.2 },
            end: { x: 16.8, z: 10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 9 },
            end: { x: 16.8, z: 9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 7.8 },
            end: { x: 16.8, z: 7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 6.6 },
            end: { x: 16.8, z: 6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 5.4 },
            end: { x: 16.8, z: 5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 4.2 },
            end: { x: 16.8, z: 4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 3 },
            end: { x: 16.8, z: 3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 1.8 },
            end: { x: 16.8, z: 1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 0.6 },
            end: { x: 16.8, z: 0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -0.6 },
            end: { x: 16.8, z: -0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -1.8 },
            end: { x: 16.8, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -3 },
            end: { x: 16.8, z: -3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -4.2 },
            end: { x: 16.8, z: -4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -5.4 },
            end: { x: 16.8, z: -5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -6.6 },
            end: { x: 16.8, z: -6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -7.8 },
            end: { x: 16.8, z: -7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -9 },
            end: { x: 16.8, z: -9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -10.2 },
            end: { x: 16.8, z: -10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -11.4 },
            end: { x: 16.8, z: -11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -12.6 },
            end: { x: 16.8, z: -12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -13.8 },
            end: { x: 16.8, z: -13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -15 },
            end: { x: 16.8, z: -15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -16.2 },
            end: { x: 16.8, z: -16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 16.8, z: -16.8 },
            end: { x: 17.15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 16.2, z: -16.8 },
            end: { x: 16.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 15, z: -16.8 },
            end: { x: 15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 13.8, z: -16.8 },
            end: { x: 13.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 12.6, z: -16.8 },
            end: { x: 12.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 11.4, z: -16.8 },
            end: { x: 11.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 9, z: -16.8 },
            end: { x: 9, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 7.8, z: -16.8 },
            end: { x: 7.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 6.6, z: -16.8 },
            end: { x: 6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 5.4, z: -16.8 },
            end: { x: 5.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 4.2, z: -16.8 },
            end: { x: 4.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 3, z: -16.8 },
            end: { x: 3, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 1.8, z: -16.8 },
            end: { x: 1.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 0.6, z: -16.8 },
            end: { x: 0.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.6, z: -16.8 },
            end: { x: -0.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -1.8, z: -16.8 },
            end: { x: -1.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -3, z: -16.8 },
            end: { x: -3, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -4.2, z: -16.8 },
            end: { x: -4.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -5.4, z: -16.8 },
            end: { x: -5.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -6.6, z: -16.8 },
            end: { x: -6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -7.8, z: -16.8 },
            end: { x: -7.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -9, z: -16.8 },
            end: { x: -9, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -10.2, z: -16.8 },
            end: { x: -10.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -11.4, z: -16.8 },
            end: { x: -11.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -12.6, z: -16.8 },
            end: { x: -12.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -13.8, z: -16.8 },
            end: { x: -13.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -15, z: -16.8 },
            end: { x: -15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.2, z: -16.8 },
            end: { x: -16.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.8, z: -16.8 },
            end: { x: -17.15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //okna
            type: "partition",
            start: { x: -17.15, z: 17.15 },
            end: { x: -16.8, z: 16.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 16.2 },
            end: { x: -16.8, z: 16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 15 },
            end: { x: -16.8, z: 15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 13.8 },
            end: { x: -16.8, z: 13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 12.6 },
            end: { x: -16.8, z: 12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 11.4 },
            end: { x: -16.8, z: 11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 10.2 },
            end: { x: -16.8, z: 10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 9 },
            end: { x: -16.8, z: 9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 7.8 },
            end: { x: -16.8, z: 7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 6.6 },
            end: { x: -16.8, z: 6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 5.4 },
            end: { x: -16.8, z: 5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 4.2 },
            end: { x: -16.8, z: 4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 3 },
            end: { x: -16.8, z: 3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 1.8 },
            end: { x: -16.8, z: 1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 0.6 },
            end: { x: -16.8, z: 0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -0.6 },
            end: { x: -16.8, z: -0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -1.8 },
            end: { x: -16.8, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -3 },
            end: { x: -16.8, z: -3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -4.2 },
            end: { x: -16.8, z: -4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -5.4 },
            end: { x: -16.8, z: -5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -6.6 },
            end: { x: -16.8, z: -6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -7.8 },
            end: { x: -16.8, z: -7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -9 },
            end: { x: -16.8, z: -9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -10.2 },
            end: { x: -16.8, z: -10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -11.4 },
            end: { x: -16.8, z: -11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -12.6 },
            end: { x: -16.8, z: -12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -13.8 },
            end: { x: -16.8, z: -13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -15 },
            end: { x: -16.8, z: -15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -16.2 },
            end: { x: -16.8, z: -16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 16.8, z: 16.8 },
            end: { x: 17.15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 16.2, z: 16.8 },
            end: { x: 16.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 15, z: 16.8 },
            end: { x: 15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 13.8, z: 16.8 },
            end: { x: 13.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 12.6, z: 16.8 },
            end: { x: 12.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 11.4, z: 16.8 },
            end: { x: 11.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 10.2, z: 16.8 },
            end: { x: 10.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 9, z: 16.8 },
            end: { x: 9, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 7.8, z: 16.8 },
            end: { x: 7.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 6.6, z: -16.8 },
            end: { x: 6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 5.4, z: 16.8 },
            end: { x: 5.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 4.2, z: 16.8 },
            end: { x: 4.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 3, z: 16.8 },
            end: { x: 3, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 1.8, z: 16.8 },
            end: { x: 1.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 0.6, z: 16.8 },
            end: { x: 0.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.6, z: 16.8 },
            end: { x: -0.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -1.8, z: 16.8 },
            end: { x: -1.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -3, z: 16.8 },
            end: { x: -3, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -4.2, z: 16.8 },
            end: { x: -4.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -5.4, z: 16.8 },
            end: { x: -5.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -6.6, z: 16.8 },
            end: { x: -6.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -7.8, z: 16.8 },
            end: { x: -7.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -9, z: 16.8 },
            end: { x: -9, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -10.2, z: 16.8 },
            end: { x: -10.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -11.4, z: 16.8 },
            end: { x: -11.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -12.6, z: 16.8 },
            end: { x: -12.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -13.8, z: 16.8 },
            end: { x: -13.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -15, z: 16.8 },
            end: { x: -15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.2, z: 16.8 },
            end: { x: -16.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.8, z: 16.8 },
            end: { x: -17.15, z: 17.15 },
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
            //Schodiste01 - spodni
            type: "partition",
            start: { x: 6.6, z: -16.875 },
            end: { x: 10.15, z: -16.875 },
            partitionWidth: 0.15,
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
            materialType: "glass",
          },
          {
            //Kostka - vlevo2
            type: "partition",
            start: { x: -10.2, z: 5.25 },
            end: { x: -10.2, z: 7.95 },
            materialType: "glass",
          },
          {
            //Kostka - vlevo3
            type: "partition",
            start: { x: -10.2, z: 4.35 },
            end: { x: -10.2, z: 1.65 },
            materialType: "glass",
          },
          {
            //Kostka - vlevo4
            type: "partition",
            start: { x: -10.2, z: 0.75 },
            end: { x: -10.2, z: -1.95 },
            materialType: "glass",
          },
          {
            //Kostka - vlevo4
            type: "partition",
            start: { x: -10.2, z: -2.85 },
            end: { x: -10.2, z: -5.55 },
            materialType: "glass",
          },
          {
            //Kostka - vlevo4
            type: "partition",
            start: { x: -10.2, z: -6.45 },
            end: { x: -10.2, z: -7.9 },
            materialType: "glass",
          },
          {
            //Kostka - dole
            type: "partition",
            start: { x: -10.2, z: -10.2 },
            end: { x: -9.41, z: -10.2 },
            materialType: "glass",
          },
          {
            //Kostka - dole
            type: "partition",
            start: { x: -8.51, z: -10.2 },
            end: { x: -6.45, z: -10.2 },
            materialType: "glass",
          },
          {
            //Kostka - dole
            type: "partition",
            start: { x: -5.55, z: -10.2 },
            end: { x: -1.65, z: -10.2 },
            materialType: "glass",
          },
          {
            //Kostka - dole
            type: "partition",
            start: { x: -0.75, z: -10.2 },
            end: { x: 1.95, z: -10.2 },
            materialType: "glass",
          },
          {
            //Kostka - dole
            type: "partition",
            start: { x: 2.85, z: -10.2 },
            end: { x: 4.95, z: -10.2 },
            materialType: "glass",
          },
          {
            //Kostka - dole
            type: "partition",
            start: { x: 5.85, z: -10.2 },
            end: { x: 6.85, z: -10.2 },
            materialType: "glass",
          },

          {
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.2, z: 9.6 },
            end: { x: 10.2, z: 8.85 },
            materialType: "glass",
          },
          {
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.2, z: 5.25 },
            end: { x: 10.2, z: 7.95 },
            materialType: "glass",
          },
          {
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.2, z: 4.35 },
            end: { x: 10.2, z: 1.65 },
            materialType: "glass",
          },
          {
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.2, z: 0.75 },
            end: { x: 10.2, z: -1.95 },
            materialType: "glass",
          },
          {
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.2, z: -2.85 },
            end: { x: 10.2, z: -5.55 },
            materialType: "glass",
          },
          {
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.2, z: -6.45 },
            end: { x: 10.2, z: -8.8 },
            materialType: "glass",
          },
          {
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.2, z: -9.8 },
            end: { x: 10.2, z: -10.2 },
            materialType: "glass",
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
            type: "railing",
            start: { x: -0.45, z: 6.4 },
            end: { x: -0.45, z: -7.44 },
            partitionWidth: 0.05,
            railingHeight: 3.1,
          },
          {
            //dira - vpravo
            type: "railing",
            start: { x: 6.19, z: 6.4 },
            end: { x: 6.19, z: -7.44 },
            partitionWidth: 0.05,
            railingHeight: 3.1,
          },
          {
            //dira - nahore
            type: "railing",
            start: { x: -0.475, z: 6.4 },
            end: { x: 6.215, z: 6.4 },
            partitionWidth: 0.05,
            railingHeight: 3.1,
          },
          {
            //dira - dole
            type: "railing",
            start: { x: -0.475, z: -7.44 },
            end: { x: 6.215, z: -7.44 },
            partitionWidth: 0.05,
            railingHeight: 3.1,
          },
          {
            //CENTRUM VZDELAVANI - spodni
            type: "partition",
            start: { x: -16.8, z: 6.6 },
            end: { x: -10.2, z: 6.6 },
            materialType: "glass",
          },
          {
            //jednaci prostor - spodni
            type: "partition",
            start: { x: -16.8, z: 3 },
            end: { x: -10.2, z: 3 },
            materialType: "glass",
          },
          {
            //kancelar projektoveho manazera - spodni
            type: "partition",
            start: { x: -16.8, z: -0.6 },
            end: { x: -10.2, z: -0.6 },
            materialType: "glass",
          },
          {
            //pracoviste PR a organizace akci pro verejnost - spodni
            type: "partition",
            start: { x: -16.8, z: -4.2 },
            end: { x: -10.2, z: -4.2 },
            materialType: "glass",
          },
          {
            //graficke studio - spodni
            type: "partition",
            start: { x: -16.8, z: -7.8 },
            end: { x: -10.2, z: -7.8 },
            materialType: "glass",
          },
          {
            //reditelna - vpravo
            type: "partition",
            start: { x: -7.8, z: -16.8 },
            end: { x: -7.8, z: -10.2 },
            materialType: "glass",
          },
          {
            //sekretariat - vpravo
            type: "partition",
            start: { x: -4.2, z: -16.8 },
            end: { x: -4.2, z: -10.2 },
            materialType: "glass",
          },
          {
            //kancelar zastupce reditele - vpravo
            type: "partition",
            start: { x: 0.6, z: -16.8 },
            end: { x: 0.6, z: -10.2 },
            materialType: "glass",
          },
          {
            //kancelar spravy budovy - vpravo
            type: "partition",
            start: { x: 4.2, z: -16.8 },
            end: { x: 4.2, z: -10.2 },
            materialType: "glass",
          },
          {
            //účtárna - nahore
            type: "partition",
            start: { x: 10.2, z: -7.8 },
            end: { x: 16.8, z: -7.8 },
            materialType: "glass",
          },
          {
            //sklad pro účtárnu - nahore
            type: "partition",
            start: { x: 10.2, z: -4.2 },
            end: { x: 16.8, z: -4.2 },
            materialType: "glass",
          },
          {
            //kancelář vedoucí ekonomiky a provozu - nahore
            type: "partition",
            start: { x: 10.2, z: -0.6 },
            end: { x: 16.8, z: -0.6 },
            materialType: "glass",
          },
          {
            //odborné pracoviště pro vzdělání uživatelů - nahore
            type: "partition",
            start: { x: 10.2, z: 3 },
            end: { x: 16.8, z: 3 },
            materialType: "glass",
          },
          {
            //odborné pracoviště pro vědu, výzkum a vývoj - nahore
            type: "partition",
            start: { x: 10.2, z: 6.6 },
            end: { x: 16.8, z: 6.6 },
            materialType: "glass",
          },
        ],
      },
      rooms: [
        {
          //vrsek
          name: "SCHODIŠTĚ (JÁDRO C)",
          bounds: { minX: -9.7, minZ: 9.8, maxX: -7.2, maxZ: 16.75 },
          number: "8.02",
        },
        {
          name: "V4",
          bounds: { minX: -6.6, minZ: 14.95, maxX: -4.05, maxZ: 16.6 },
          number: "V4",
        },
        {
          name: "V5",
          bounds: { minX: -6.6, minZ: 13.375, maxX: -4.05, maxZ: 14.95 },
          number: "V5",
        },
        {
          name: "ROZVODNA SLP",
          bounds: { minX: -6.6, minZ: 11.675, maxX: -4.05, maxZ: 13.375 },
          number: "8.05",
        },
        {
          name: "WC ZAMĚSTNANCI",
          bounds: { minX: -6.6, minZ: 9.7, maxX: -4.05, maxZ: 11.675 },
          NUMBER: "8.29",
        },
        {
          name: "MANIPULAČNÍ PROSTOR",
          bounds: { minX: -3.85, minZ: 9.8, maxX: -1.15, maxZ: 16.6 },
          number: "8.04",
        },
        {
          name: "KUCHYŇKA",
          bounds: { minX: -0.75, minZ: 14.2, maxX: 3.25, maxZ: 16.6 },
          number: "8.06",
        },
        {
          name: "ÚKLID",
          bounds: { minX: 3.4, minZ: 14.2, maxX: 4.5, maxZ: 16.6 },
          number: "8.03",
        },
        {
          name: "V1",
          bounds: { minX: -0.75, minZ: 9.8, maxX: 0.97, maxZ: 11.7 },
          nubmer: "V1",
        },
        {
          name: "V2",
          bounds: { minX: 1.16, minZ: 9.8, maxX: 2.75, maxZ: 11.7 },
          number: "V2",
        },
        {
          name: "V3",
          bounds: { minX: 2.95, minZ: 9.8, maxX: 4.7, maxZ: 11.7 },
          number: "V3",
        },
        {
          name: "WC MUŽI",
          bounds: { minX: 5.05, minZ: 9.8, maxX: 7.2, maxZ: 15.1 },
          number: "8.07",
        },
        {
          name: "WC ŽENY",
          bounds: { minX: 7.4, minZ: 9.8, maxX: 9.65, maxZ: 15.1 },
          number: "8.08",
        },
        {
          // rozvaděče
          name: "ROZVADĚČE",
          bounds: { minX: -13.5, minZ: -9.8, maxX: -11.85, maxZ: -8.2 },
          number: "8.09a",
        },
        {
          name: "ROZDĚLOVAČE PODLAHOVÉHO TOPENÍ",
          bounds: { minX: -11.85, minZ: -9.5, maxX: -10.2, maxZ: -8.5 },
          number: "8.09b",
        },
        {
          name: "SCHODIŠTĚ (JÁDRO B)",
          bounds: { minX: 7.15, minZ: -16.8, maxX: 9.65, maxZ: -10.325 },
          number: "8.01",
        },
        {
          name: "CENTRUM VZDĚLÁVÁNÍ A REGIONÁLNÍCH SLUŽEB",
          bounds: { minX: -16.8, minZ: 6.7, maxX: -10.2, maxZ: 16.8 },
          number: "8.11",
        },
        {
          name: "CENTRUM VZDĚLÁVÁNÍ A REGIONÁLNÍCH SLUŽEB - JEDNACÍ PROSTOR",
          bounds: { minX: -16.8, minZ: 3.1, maxX: -10.275, maxZ: 6.5 },
          number: "8.12",
        },
        {
          name: "KANCELÁŘ PROJEKTOVÉHO MANAŽERA",
          bounds: { minX: -16.8, minZ: -0.5, maxX: -10.275, maxZ: 2.9 },
          number: "8.13",
        },
        {
          name: "PRACOVIŠTĚ PR A ORGANIZACE AKCÍ PRO VEŘEJNOST",
          bounds: { minX: -16.8, minZ: -4.1, maxX: -10.275, maxZ: -0.7 },
          number: "8.14",
        },
        {
          name: "GRAFICKÉ STUDIO",
          bounds: { minX: -16.8, minZ: -7.7, maxX: -10.275, maxZ: -4.3 },
          number: "8.15",
        },
        {
          name: "ŘEDITELNA",
          bounds: { minX: -16.8, minZ: -16.8, maxX: -7.8, maxZ: -10.2 },
          number: "8.16",
        },
        {
          name: "SEKRETARIÁT",
          bounds: { minX: -7.7, minZ: -16.8, maxX: -4.2, maxZ: -10.2 },
          number: "8.17",
        },
        {
          name: "KANCELÁŘ ZÁSTUPCE ŘEDITELE",
          bounds: { minX: -4.1, minZ: -16.8, maxX: 0.6, maxZ: -10.2 },
          number: "8.18",
        },
        {
          name: "KANCELÁŘ SPRÁVY BUDOVY",
          bounds: { minX: 0.7, minZ: -16.8, maxX: 4.2, maxZ: -10.2 },
          number: "8.19",
        },
        {
          name: "PŘÍRUČNÍ SKLAD",
          bounds: { minX: 4.3, minZ: -16.8, maxX: 6.875, maxZ: -10.2 },
          number: "8.20",
        },
        {
          name: "ÚČTÁRNA",
          bounds: { minX: 10.2, minZ: -16.8, maxX: 16.8, maxZ: -7.8 },
          number: "8.21",
        },
        {
          name: "PŘÍRUČNÍ SKLAD PRO ÚČTÁRNU",
          bounds: { minX: 10.2, minZ: -7.7, maxX: 16.8, maxZ: -4.2 },
          number: "8.22",
        },
        {
          name: "KANCELÁŘ VEDOUCÍ ODDĚLENÍ EKONOMIKY A PROVOZU",
          bounds: { minX: 10.2, minZ: -4.1, maxX: 16.8, maxZ: -0.6 },
          number: "8.23",
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ PRO VZDĚLÁVÁNÍ UČITELŮ",
          bounds: { minX: 10.2, minZ: -0.5, maxX: 16.8, maxZ: 3 },
          number: "8.24",
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ PRO VĚDU, VÝZKUM A VÝVOJ",
          bounds: { minX: 10.2, minZ: 3.1, maxX: 16.8, maxZ: 6.6 },
          number: "8.25",
        },
        {
          name: "MULTIMEDIÁLNÍ UČEBNA",
          bounds: { minX: 10.2, minZ: 6.7, maxX: 16.8, maxZ: 16.8 },
          number: "8.26",
        },
        {
          name: "SÍŤOVÁ TISKÁRNA",
          bounds: { minX: -7.62, minZ: 1.02, maxX: -3.24, maxZ: 3.08 },
          number: "8.30",
        },
        {
          name: "SPISOVNA",
          bounds: { minX: -7.62, minZ: -7.69, maxX: -3.24, maxZ: 0.92 },
          number: "8.27",
        },
      ],
      temperature_data: [0],
      wifi_signal_data: [0],
      sensors: {
        temperature: [
          { x: -15, z: -4, value: 24 },
          { x: 0, z: -9, value: 23 },
          { x: 16, z: -8, value: 21 },
        ],
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
      type: "aboveground",
      segments: [
        { width: 17.65, depth: 35.89, position: { x: -9.1, z: 0 } }, // kostka hlavni
        { width: 12, depth: 35.89, position: { x: 12, z: 0 } },
        { width: 12, depth: 11.7, position: { x: 3, z: 12.1 } },
        { width: 12, depth: 10.6, position: { x: 3, z: -12.65 } },
      ],
      holes: [
        { x: 8.4, z: -14.4, width: 3, depth: 5 },
        { x: -8.4, z: 14.2, width: 3, depth: 4.7 },
        { x: 0.1075, z: 10.75, width: 1.72, depth: 1.95 }, //v1
      ],
      endPoints: [
        { x: -9.1, z: 11.2, id: "B" },
        { x: 9.1, z: -11.2, id: "B" },
      ],
      nav: {
        clearance: 0.35, // menší clearance, aby prošly i 0.8 m dveře (2 * 0.35 = 0.7)
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
              { x: -17.15, z: -17.15 },
              { x: 17.15, z: -17.15 },
              { x: 17.15, z: 17.15 },
              { x: -17.15, z: 17.15 },
            ],
          },
          {
            //ROZVADECE - pricka
            type: "partition",
            start: { x: -10.36, z: -8.2 },
            end: { x: -10.36, z: -9.85 },
            partitionWidth: 0.3,
            yLevel: 2.1,
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 10.2, z: -10.2 },
            partitionWidth: 0.26,
            yLevel: 2.1,
          },
          {
            //Schodiste02 - spodni pricka
            type: "partition",
            start: { x: -10.2, z: 9.78 },
            end: { x: -6.6, z: 9.78 },
            partitionWidth: 0.32,
            yLevel: 2.1,
          },
          {
            //Schodiste02 - prava pricka
            type: "partition",
            start: { x: -6.875, z: 16.8 },
            end: { x: -6.875, z: 9.8 },
            partitionWidth: 0.55,
            yLevel: 2.1,
          },
          {
            //  spodni pricka pod wc zamestnanci az dozadu
            type: "partition",
            start: { x: -6.6, z: 14.425 },
            end: { x: 4.125, z: 14.425 },
            partitionWidth: 0.15,
            yLevel: 2.1,
          },
          {
            //  WC ženy - prava pricka
            type: "partition",
            start: { x: -3.075, z: 16.55 },
            end: { x: -3.075, z: 14.425 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //  WC muži - prava stena
            type: "partition",
            start: { x: 0.45, z: 16.55 },
            end: { x: 0.45, z: 14.425 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //  WC muži - prava stena
            type: "partition",
            start: { x: 2.295, z: 16.55 },
            end: { x: 2.295, z: 14.425 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //   -rozvadec FVE prava stena
            type: "partition",
            start: { x: 2.94, z: 12.05 },
            end: { x: 2.94, z: 9.8 },
            partitionWidth: 0.15,
            yLevel: 2.1,
          },
          {
            //   -rozvadeec horni FVE
            type: "partition",
            start: { x: -0.81, z: 12.15 },
            end: { x: 4.45, z: 12.15 },
            partitionWidth: 0.2,
            yLevel: 2.1,
          },
          {
            //VODOROVNA OSA VPRAVO KRATKA 9.18
            type: "partition",
            start: { x: 10.02, z: -5.47 },
            end: { x: 10.02, z: -7 },
            partitionWidth: 0.36,
            yLevel: 2.1,
          },
          {
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.02, z: -5.65 },
            end: { x: 10.02, z: 9 },
            partitionWidth: 0.36,
            yLevel: 2.1,
          },
          {
            //  šachta -prava stena
            type: "partition",
            start: { x: 9.615, z: 15.5 },
            end: { x: 9.615, z: 9.6 },
            partitionWidth: 0.44,
            yLevel: 2.1,
          },
          {
            //okna
            type: "partition",
            start: { x: 17.15, z: 17.15 },
            end: { x: 16.8, z: 16.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 16.2 },
            end: { x: 16.8, z: 16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 15 },
            end: { x: 16.8, z: 15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 13.8 },
            end: { x: 16.8, z: 13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 12.6 },
            end: { x: 16.8, z: 12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 11.4 },
            end: { x: 16.8, z: 11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 10.2 },
            end: { x: 16.8, z: 10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 9 },
            end: { x: 16.8, z: 9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 7.8 },
            end: { x: 16.8, z: 7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 6.6 },
            end: { x: 16.8, z: 6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 5.4 },
            end: { x: 16.8, z: 5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 4.2 },
            end: { x: 16.8, z: 4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 3 },
            end: { x: 16.8, z: 3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 1.8 },
            end: { x: 16.8, z: 1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: 0.6 },
            end: { x: 16.8, z: 0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -0.6 },
            end: { x: 16.8, z: -0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -1.8 },
            end: { x: 16.8, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -3 },
            end: { x: 16.8, z: -3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -4.2 },
            end: { x: 16.8, z: -4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -5.4 },
            end: { x: 16.8, z: -5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -6.6 },
            end: { x: 16.8, z: -6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -7.8 },
            end: { x: 16.8, z: -7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -9 },
            end: { x: 16.8, z: -9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -10.2 },
            end: { x: 16.8, z: -10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -11.4 },
            end: { x: 16.8, z: -11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -12.6 },
            end: { x: 16.8, z: -12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -13.8 },
            end: { x: 16.8, z: -13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -15 },
            end: { x: 16.8, z: -15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 17.15, z: -16.2 },
            end: { x: 16.8, z: -16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 16.8, z: -16.8 },
            end: { x: 17.15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 16.2, z: -16.8 },
            end: { x: 16.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 15, z: -16.8 },
            end: { x: 15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 13.8, z: -16.8 },
            end: { x: 13.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 12.6, z: -16.8 },
            end: { x: 12.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 11.4, z: -16.8 },
            end: { x: 11.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 9, z: -16.8 },
            end: { x: 9, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 7.8, z: -16.8 },
            end: { x: 7.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 6.6, z: -16.8 },
            end: { x: 6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 5.4, z: -16.8 },
            end: { x: 5.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 4.2, z: -16.8 },
            end: { x: 4.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 3, z: -16.8 },
            end: { x: 3, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 1.8, z: -16.8 },
            end: { x: 1.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 0.6, z: -16.8 },
            end: { x: 0.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.6, z: -16.8 },
            end: { x: -0.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -1.8, z: -16.8 },
            end: { x: -1.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -3, z: -16.8 },
            end: { x: -3, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -4.2, z: -16.8 },
            end: { x: -4.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -5.4, z: -16.8 },
            end: { x: -5.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -6.6, z: -16.8 },
            end: { x: -6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -7.8, z: -16.8 },
            end: { x: -7.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -9, z: -16.8 },
            end: { x: -9, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -10.2, z: -16.8 },
            end: { x: -10.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -11.4, z: -16.8 },
            end: { x: -11.4, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -12.6, z: -16.8 },
            end: { x: -12.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -13.8, z: -16.8 },
            end: { x: -13.8, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -15, z: -16.8 },
            end: { x: -15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.2, z: -16.8 },
            end: { x: -16.2, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.8, z: -16.8 },
            end: { x: -17.15, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //okna
            type: "partition",
            start: { x: -17.15, z: 17.15 },
            end: { x: -16.8, z: 16.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 16.2 },
            end: { x: -16.8, z: 16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 15 },
            end: { x: -16.8, z: 15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 13.8 },
            end: { x: -16.8, z: 13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 12.6 },
            end: { x: -16.8, z: 12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 11.4 },
            end: { x: -16.8, z: 11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 10.2 },
            end: { x: -16.8, z: 10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 9 },
            end: { x: -16.8, z: 9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 7.8 },
            end: { x: -16.8, z: 7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 6.6 },
            end: { x: -16.8, z: 6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 5.4 },
            end: { x: -16.8, z: 5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 4.2 },
            end: { x: -16.8, z: 4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 3 },
            end: { x: -16.8, z: 3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 1.8 },
            end: { x: -16.8, z: 1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: 0.6 },
            end: { x: -16.8, z: 0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -0.6 },
            end: { x: -16.8, z: -0.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -1.8 },
            end: { x: -16.8, z: -1.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -3 },
            end: { x: -16.8, z: -3 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -4.2 },
            end: { x: -16.8, z: -4.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -5.4 },
            end: { x: -16.8, z: -5.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -6.6 },
            end: { x: -16.8, z: -6.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -7.8 },
            end: { x: -16.8, z: -7.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -9 },
            end: { x: -16.8, z: -9 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -10.2 },
            end: { x: -16.8, z: -10.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -11.4 },
            end: { x: -16.8, z: -11.4 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -12.6 },
            end: { x: -16.8, z: -12.6 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -13.8 },
            end: { x: -16.8, z: -13.8 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -15 },
            end: { x: -16.8, z: -15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -17.15, z: -16.2 },
            end: { x: -16.8, z: -16.2 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 16.8, z: 16.8 },
            end: { x: 17.15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 16.2, z: 16.8 },
            end: { x: 16.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 15, z: 16.8 },
            end: { x: 15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 13.8, z: 16.8 },
            end: { x: 13.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 12.6, z: 16.8 },
            end: { x: 12.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 11.4, z: 16.8 },
            end: { x: 11.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 10.2, z: 16.8 },
            end: { x: 10.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 9, z: 16.8 },
            end: { x: 9, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 7.8, z: 16.8 },
            end: { x: 7.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 6.6, z: -16.8 },
            end: { x: 6.6, z: -17.15 },
            partitionWidth: 0.05,
          },
          {
            //spodek okna
            type: "partition",
            start: { x: 5.4, z: 16.8 },
            end: { x: 5.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 4.2, z: 16.8 },
            end: { x: 4.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 3, z: 16.8 },
            end: { x: 3, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 1.8, z: 16.8 },
            end: { x: 1.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: 0.6, z: 16.8 },
            end: { x: 0.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -0.6, z: 16.8 },
            end: { x: -0.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -1.8, z: 16.8 },
            end: { x: -1.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -3, z: 16.8 },
            end: { x: -3, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -4.2, z: 16.8 },
            end: { x: -4.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -5.4, z: 16.8 },
            end: { x: -5.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -6.6, z: 16.8 },
            end: { x: -6.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -7.8, z: 16.8 },
            end: { x: -7.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -9, z: 16.8 },
            end: { x: -9, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -10.2, z: 16.8 },
            end: { x: -10.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -11.4, z: 16.8 },
            end: { x: -11.4, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -12.6, z: 16.8 },
            end: { x: -12.6, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -13.8, z: 16.8 },
            end: { x: -13.8, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -15, z: 16.8 },
            end: { x: -15, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.2, z: 16.8 },
            end: { x: -16.2, z: 17.15 },
            partitionWidth: 0.05,
          },
          {
            type: "partition",
            start: { x: -16.8, z: 16.8 },
            end: { x: -17.15, z: 17.15 },
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
            //Schodiste01 - spodni
            type: "partition",
            start: { x: 6.6, z: -16.875 },
            end: { x: 10.15, z: -16.875 },
            partitionWidth: 0.15,
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
            type: "railing",
            start: { x: -0.45, z: 6.4 },
            end: { x: -0.45, z: -7.44 },
            partitionWidth: 0.05,
            railingHeight: 1.2,
          },
          {
            //dira - vpravo
            type: "railing",
            start: { x: 6.19, z: 6.4 },
            end: { x: 6.19, z: -7.44 },
            partitionWidth: 0.05,
            railingHeight: 1.2,
          },
          {
            //dira - nahore
            type: "railing",
            start: { x: -0.475, z: 6.4 },
            end: { x: 6.215, z: 6.4 },
            partitionWidth: 0.05,
            railingHeight: 1.2,
          },
          {
            //dira - dole
            type: "railing",
            start: { x: -0.475, z: -7.44 },
            end: { x: 6.215, z: -7.44 },
            partitionWidth: 0.05,
            railingHeight: 1.2,
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
          { x: -4, z: -6, value: 28 },
          { x: 2, z: 4, value: 21 },
          { x: -12, z: 11, value: 24 },
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
        { x: -4, z: 12, label: "9.03" },
      ],
      rooms: [
        {
          // rozvaděče
          name: "ROZVADĚČE",
          bounds: { minX: -13.5, minZ: -9.8, maxX: -11.85, maxZ: -8.2 },
          number: "9.12a",
        },
        {
          name: "SKLAD",
          bounds: { minX: -11.85, minZ: -9.5, maxX: -10.2, maxZ: -8.5 },
          number: "9.12b",
        },
        {
          name: "SCHODIŠTĚ (JÁDRO B)",
          bounds: { minX: 7.15, minZ: -16.8, maxX: 9.65, maxZ: -10.325 },
          number: "9.02",
        },
        {
          name: "SCHODIŠTĚ (JÁDRO C)",
          bounds: { minX: -9.7, minZ: 9.8, maxX: -7.2, maxZ: 16.75 },
          number: "9.01",
        },
        {
          name: "WC ZAMĚSTNANCI",
          bounds: { minX: -6.9, minZ: 14.5, maxX: -4.875, maxZ: 16.55 },
          number: "9.04",
        },
        {
          name: "WC ŽENY",
          bounds: { minX: -4.785, minZ: 14.5, maxX: -1.125, maxZ: 16.55 },
          number: "9.05",
        },
        {
          name: "WC MUŽI",
          bounds: { minX: -1.025, minZ: 14.5, maxX: 4.2875, maxZ: 16.55 },
          number: "9.06",
        },
        {
          name: "PROSTOR PRO TECHNOLOGIE VZT + CHLAD",
          bounds: { minX: 10.2, minZ: -5.47, maxX: 16.8, maxZ: 16.55 },
          number: "9.13",
        },
        {
          name: "SKLAD NÁBYTKU",
          bounds: { minX: 10.2, minZ: -16.8, maxX: 16.8, maxZ: -5.67 },
          number: "9.18",
        },
        {
          name: "ROZVADĚČ FVE",
          bounds: { minX: 1, minZ: 9.92, maxX: 2.94, maxZ: 12.05 },
          number: "9.11",
        },
      ],
    },
  ],
  visualization: {
    wall_height: 3.1,
    wall_height_1NP: 5.3,
    floor_thickness: 0.2,
    floor_spacing: -0.2,
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
