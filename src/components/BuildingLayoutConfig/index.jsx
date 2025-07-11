export const CONFIG_DATA = {
  floors: [
    {
      id: -2,
      name: "P2",
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
            type: "outline",
            points: [
              { x: -18.37, z: -18.37 },
              { x: 18.37, z: -18.37 },
              { x: 18.37, z: 18.37 },
              { x: -18.37, z: 18.37 },
            ],
          },

          {
            //vrsek - leva stena
            type: "partition",
            start: { x: -10.2, z: 16.8 },
            end: { x: -10.2, z: 9.6 },
          },
          {
            //vrsek - spodni stena
            type: "partition",
            start: { x: -10.2, z: 9.6 },
            end: { x: 10.2, z: 9.6 },
          },
          {
            //vrsek - prava stena
            type: "partition",
            start: { x: 10.2, z: 9.6 },
            end: { x: 10.2, z: 16.8 },
          },
          {
            //Schodiste02 - leva stena
            type: "partition",
            start: { x: -9.65, z: 16.6 },
            end: { x: -9.65, z: 9.8 },
          },
          {
            //Schodiste02 - spodni stena
            type: "partition",
            start: { x: -9.65, z: 9.8 },
            end: { x: -7.15, z: 9.8 },
          },
          {
            //Schodiste02 - prava stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -7.15, z: 9.8 },
          },
          {
            //Schodiste02 - vrchni stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -9.65, z: 16.6 },
          },
          {
            //V4 - leva stena
            type: "partition",
            start: { x: -6.6, z: 16.6 },
            end: { x: -6.6, z: 15.05 },
          },
          {
            //V4 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 15.05 },
            end: { x: -4.05, z: 15.05 },
          },
          {
            //V4 - prava stena
            type: "partition",
            start: { x: -4.05, z: 15.05 },
            end: { x: -4.05, z: 16.6 },
          },
          {
            //V4 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 16.6 },
            end: { x: -6.6, z: 16.6 },
          },
          {
            //V5 - leva stena
            type: "partition",
            start: { x: -6.6, z: 14.85 },
            end: { x: -6.6, z: 13.45 },
          },
          {
            //V5 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 13.45 },
            end: { x: -4.05, z: 13.45 },
          },
          {
            //V5 - prava stena
            type: "partition",
            start: { x: -4.05, z: 13.45 },
            end: { x: -4.05, z: 14.85 },
          },
          {
            //V5 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 14.85 },
            end: { x: -6.6, z: 14.85 },
          },
          {
            //RozvodnaSLP - leva stena
            type: "partition",
            start: { x: -6.6, z: 13.3 },
            end: { x: -6.6, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -6.6, z: 11.75 },
            end: { x: -4.05, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 11.75 },
            end: { x: -4.05, z: 13.3 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 13.3 },
            end: { x: -6.6, z: 13.3 },
          },
          {
            //WC zam - leva stena
            type: "partition",
            start: { x: -6.6, z: 11.6 },
            end: { x: -6.6, z: 9.8 },
          },
          {
            //WC zam - spodni stena
            type: "partition",
            start: { x: -6.6, z: 9.8 },
            end: { x: -4.05, z: 9.8 },
          },
          {
            //WC zam - prava stena
            type: "partition",
            start: { x: -4.05, z: 9.8 },
            end: { x: -4.05, z: 11.6 },
          },
          {
            //WC zam - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 11.6 },
            end: { x: -6.6, z: 11.6 },
          },
          {
            //mp prostor - leva stena
            type: "partition",
            start: { x: -3.85, z: 16.6 },
            end: { x: -3.85, z: 9.8 },
          },
          {
            //mp prostor - spodni stena
            type: "partition",
            start: { x: -3.85, z: 9.8 },
            end: { x: -1.15, z: 9.8 },
          },
          {
            //mp prostor - prava stena
            type: "partition",
            start: { x: -1.15, z: 9.8 },
            end: { x: -1.15, z: 16.6 },
          },
          {
            //mp prostor - vrchni stena
            type: "partition",
            start: { x: -1.15, z: 16.6 },
            end: { x: -3.85, z: 16.6 },
          },
          {
            //Kuchynka - leva stena
            type: "partition",
            start: { x: -0.75, z: 16.6 },
            end: { x: -0.75, z: 14.3 },
          },
          {
            //Kuchynka - spodni stena
            type: "partition",
            start: { x: -0.75, z: 14.3 },
            end: { x: 4.345, z: 14.3 },
          },

          {
            //Kuchynka - horni stena
            type: "partition",
            start: { x: 4.345, z: 16.6 },
            end: { x: -0.75, z: 16.6 },
          },
          {
            //Uklid - prava stena
            type: "partition",
            start: { x: 4.345, z: 14.3 },
            end: { x: 4.345, z: 16.6 },
          },
          {
            //šatna - prava stena
            type: "partition",
            start: { x: 1.75, z: 14.3 },
            end: { x: 1.75, z: 16.6 },
          },
          {
            //koupelna leva stena
            type: "partition",
            start: { x: 1.85, z: 14.3 },
            end: { x: 1.85, z: 16.6 },
          },
          {
            //Empty1 - leva stena
            type: "partition",
            start: { x: -0.75, z: 14 },
            end: { x: -0.75, z: 11.9 },
          },

          {
            //Empty1 - prava stena
            type: "partition",
            start: { x: 4.5, z: 11.9 },
            end: { x: 4.5, z: 14 },
          },
          {
            //Empty1 - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 14 },
            end: { x: -0.75, z: 14 },
          },
          {
            //Empty1 - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 11.9 },
            end: { x: -0.75, z: 11.9 },
          },
          {
            //V1 - leva strena
            type: "partition",
            start: { x: -0.75, z: 11.7 },
            end: { x: -0.75, z: 9.8 },
          },
          {
            //V1 - spodni strena
            type: "partition",
            start: { x: -0.75, z: 9.8 },
            end: { x: 0.965, z: 9.8 },
          },
          {
            //V1 - prava strena
            type: "partition",
            start: { x: 0.965, z: 9.8 },
            end: { x: 0.965, z: 11.7 },
          },
          {
            //V1 - vrchni strena
            type: "partition",
            start: { x: 0.965, z: 11.7 },
            end: { x: -0.75, z: 11.7 },
          },
          {
            //V2 - leva strena
            type: "partition",
            start: { x: 1.125, z: 11.7 },
            end: { x: 1.125, z: 9.8 },
          },
          {
            //V2 - spodni strena
            type: "partition",
            start: { x: 1.125, z: 9.8 },
            end: { x: 2.735, z: 9.8 },
          },
          {
            //V2 - prava strena
            type: "partition",
            start: { x: 2.735, z: 9.8 },
            end: { x: 2.735, z: 11.7 },
          },
          {
            //V2 - vrchni strena
            type: "partition",
            start: { x: 2.735, z: 11.7 },
            end: { x: -1.125, z: 11.7 },
          },
          {
            //V3 - leva strena
            type: "partition",
            start: { x: 2.925, z: 11.7 },
            end: { x: 2.925, z: 9.8 },
          },
          {
            //V3 - spodni strena
            type: "partition",
            start: { x: 2.925, z: 9.8 },
            end: { x: 4.545, z: 9.8 },
          },
          {
            //V3 - prava strena
            type: "partition",
            start: { x: 4.545, z: 9.8 },
            end: { x: 4.545, z: 11.7 },
          },
          {
            //V3 - vrchni strena
            type: "partition",
            start: { x: 4.545, z: 11.7 },
            end: { x: 2.925, z: 11.7 },
          },
          {
            //Empty2 - leva strena
            type: "partition",
            start: { x: 5.02, z: 16.6 },
            end: { x: 5.02, z: 15.3 },
          },
          {
            //Empty2 - spodni strena
            type: "partition",
            start: { x: 5.02, z: 15.3 },
            end: { x: 9.62, z: 15.3 },
          },
          {
            //Empty2 - prava strena
            type: "partition",
            start: { x: 9.62, z: 15.3 },
            end: { x: 9.62, z: 16.6 },
          },
          {
            //Empty2 - vrchni strena
            type: "partition",
            start: { x: 9.62, z: 16.6 },
            end: { x: 5.02, z: 16.6 },
          },
          {
            //WC muzi - leva stena
            type: "partition",
            start: { x: 5.02, z: 15.1 },
            end: { x: 5.02, z: 9.8 },
          },
          {
            //WC muzi - spodni stena
            type: "partition",
            start: { x: 5.02, z: 9.8 },
            end: { x: 7.17, z: 9.8 },
          },
          {
            //WC muzi - prava stena
            type: "partition",
            start: { x: 7.17, z: 9.8 },
            end: { x: 7.17, z: 15.1 },
          },
          {
            //WC muzi - vrchni stena
            type: "partition",
            start: { x: 7.17, z: 15.1 },
            end: { x: 5.02, z: 15.1 },
          },
          {
            //WC zeny - leva stena 1
            type: "partition",
            start: { x: 7.42, z: 15.1 },
            end: { x: 7.42, z: 13.3 },
          },
          {
            //WC zeny - spojeni leve steny
            type: "partition",
            start: { x: 7.42, z: 13.3 },
            end: { x: 7.37, z: 13.3 },
          },
          {
            //WC zeny - leva stena 2
            type: "partition",
            start: { x: 7.37, z: 13.3 },
            end: { x: 7.37, z: 9.8 },
          },
          {
            //WC zeny - spodni stena
            type: "partition",
            start: { x: 7.37, z: 9.8 },
            end: { x: 9.62, z: 9.8 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 9.8 },
            end: { x: 9.62, z: 15.1 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 15.1 },
            end: { x: 7.37, z: 15.1 },
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 10.2, z: -17.87 },
            end: { x: 10.2, z: -10.2 },
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 10, z: -10.2 },
            end: { x: 6.6, z: -10.2 },
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 6.6, z: -17.87 },
          },
          {
            //prava zed nad schodistem - prava
            type: "partition",
            start: { x: 10.2, z: -10.2 },
            end: { x: 10.2, z: -8.9 },
          },
          {
            //prava zed nad schodistem - pprosteredek
            type: "partition",
            start: { x: 10, z: -8.9 },
            end: { x: 10.2, z: -8.9 },
          },
          {
            //prava zed nad schodistem - leva
            type: "partition",
            start: { x: 10, z: -8.9 },
            end: { x: 10, z: -10.2 },
          },
          {
            //prava zed nad schodistem vyssi - prava
            type: "partition",
            start: { x: 10.2, z: -3 },
            end: { x: 10.2, z: -7.8 },
          },
          {
            //prava zed nad schodistem vyssi - stred
            type: "partition",
            start: { x: 10.2, z: -7.8 },
            end: { x: 10, z: -7.8 },
          },
          {
            //prava zed nad schodistem vyssi - leva
            type: "partition",
            start: { x: 10, z: -2.85 },
            end: { x: 10, z: -7.8 },
          },
          {
            //prostredni zed vpravo s H
            type: "partition",
            start: { x: 10, z: -2.85 },
            end: { x: 11.7, z: -2.85 },
          },
          {
            //prostredni zed vpravo s H spodni
            type: "partition",
            start: { x: 10.2, z: -3 },
            end: { x: 11.85, z: -3 },
          },
          {
            //prostredni zed nahoru od H P
            type: "partition",
            start: { x: 11.85, z: -3 },
            end: { x: 11.85, z: 5.89 },
          },
          {
            //prostredni zed nahoru od H L
            type: "partition",
            start: { x: 11.7, z: -2.85 },
            end: { x: 11.7, z: 6.04 },
          },
          {
            //prostredni zed doprava vrchni nahore
            type: "partition",
            start: { x: 11.7, z: 6.04 },
            end: { x: 12.31, z: 6.04 },
          },
          {
            //prostredni zed doprava vrchni dole
            type: "partition",
            start: { x: 11.85, z: 5.89 },
            end: { x: 12.31, z: 5.89 },
          },
          {
            //prostredni zed doprava vrchni stredova
            type: "partition",
            start: { x: 12.31, z: 6.04 },
            end: { x: 12.31, z: 5.89 },
          },
          {
            //prostredni zed doprava vrchni pokracovani
            type: "partition",
            start: { x: 13.61, z: 6.04 },
            end: { x: 16.55, z: 6.04 },
          },
          {
            //prostredni zed doprava stredova
            type: "partition",
            start: { x: 13.61, z: 6.04 },
            end: { x: 13.61, z: 5.89 },
          },
          {
            //prostredni zed doprava spodni pokjracovani
            type: "partition",
            start: { x: 13.61, z: 5.89 },
            end: { x: 16.875, z: 5.89 },
          },
          {
            //prostredni zed doprava spodni pokjracovani
            type: "partition",
            start: { x: 16.875, z: 5.89 },
            end: { x: 16.875, z: 8.25 },
          },
          {
            //prostredni zed LEVA doprava prava
            type: "partition",
            start: { x: 16.55, z: 6.04 },
            end: { x: 16.55, z: 8.6 },
          },

          {
            //prostredni doprava ke konci k outlionu
            type: "partition",
            start: { x: 16.55, z: 8.6 },
            end: { x: 17.87, z: 8.6 },
          },
          {
            //prostredni doleva ke konci k outlionu
            type: "partition",
            start: { x: 16.875, z: 8.25 },
            end: { x: 17.87, z: 8.25 },
          },
          {
            //Vnitrni Schodiste01 - leva
            type: "partition",
            start: { x: 7.15, z: -10.65 },
            end: { x: 7.15, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - nahore
            type: "partition",
            start: { x: 7.15, z: -10.65 },
            end: { x: 9.65, z: -10.65 },
          },
          {
            //Vnitrni Schodiste01 - prava
            type: "partition",
            start: { x: 9.65, z: -10.65 },
            end: { x: 9.65, z: -16.8 },
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
            //hl rozvadec - dole
            type: "partition",
            start: { x: -16.5, z: -13 },
            end: { x: -10.35, z: -13 },
          },
          {
            //hl rozvadec - prava dole
            type: "partition",
            start: { x: -10.2, z: -12.205 },
            end: { x: -10.2, z: -13.725 },
          },
          {
            //hl rozvadec - horni dole
            type: "partition",
            start: { x: -10.35, z: -12.205 },
            end: { x: -10.2, z: -12.205 },
          },
          {
            //hl rozvadec - leva dole
            type: "partition",
            start: { x: -10.35, z: -12.205 },
            end: { x: -10.35, z: -13 },
          },
          {
            //rozvodna RPO - dolni kratka
            type: "partition",
            start: { x: -10.35, z: -13.725 },
            end: { x: -10.2, z: -13.725 },
          },
          {
            //rozvodna RPO - dolni leva kratka
            type: "partition",
            start: { x: -10.35, z: -13.725 },
            end: { x: -10.35, z: -13.15 },
          },
          {
            //rozvodna RPO - horni
            type: "partition",
            start: { x: -10.35, z: -13.15 },
            end: { x: -13.275, z: -13.15 },
          },
          {
            //rozvodna RPO - leva
            type: "partition",
            start: { x: -13.275, z: -13.15 },
            end: { x: -13.275, z: -15.925 },
          },
          {
            //rozvodna RPO - spodni
            type: "partition",
            start: { x: -10.35, z: -15.925 },
            end: { x: -13.275, z: -15.925 },
          },
          {
            //rozvodna RPO - dolni leva kratka
            type: "partition",
            start: { x: -10.35, z: -14.35 },
            end: { x: -10.35, z: -15.925 },
          },
          {
            //rozvodna RPO - dolni horni kratka
            type: "partition",
            start: { x: -10.35, z: -14.35 },
            end: { x: -10.2, z: -14.35 },
          },
          {
            //rozvodna RPO - dolni leva kratka
            type: "partition",
            start: { x: -10.2, z: -14.35 },
            end: { x: -10.2, z: -16.075 },
          },
          {
            //rozvodna RPO - dolni
            type: "partition",
            start: { x: -10.2, z: -16.075 },
            end: { x: -13.525, z: -16.075 },
          },
          {
            //rozvodna RPO - kratka kratka nahoru
            type: "partition",
            start: { x: -13.525, z: -16.075 },
            end: { x: -13.525, z: -15.925 },
          },
          {
            //rozvodna RPO - kratka kratka doprava
            type: "partition",
            start: { x: -13.525, z: -15.925 },
            end: { x: -13.425, z: -15.925 },
          },
          {
            //mistnost CBS - prava
            type: "partition",
            start: { x: -13.425, z: -13.15 },
            end: { x: -13.425, z: -15.925 },
          },
          {
            //mistnost CBS - horni
            type: "partition",
            start: { x: -13.425, z: -13.15 },
            end: { x: -16.5, z: -13.15 },
          },
          {
            //mistnost CBS - leva
            type: "partition",
            start: { x: -16.5, z: -13.15 },
            end: { x: -16.5, z: -15.925 },
          },
          {
            //mistnost CBS - SPODek
            type: "partition",
            start: { x: -16.5, z: -15.925 },
            end: { x: -15.325, z: -15.925 },
          },
          {
            //mistnost CBS - SPODek prava
            type: "partition",
            start: { x: -15.325, z: -15.925 },
            end: { x: -15.325, z: -16.075 },
          },
          {
            //mistnost CBS - SPODek spodni
            type: "partition",
            start: { x: -15.325, z: -16.075 },
            end: { x: -16.8, z: -16.075 },
          },
          {
            //mistnost CBS - leva leva
            type: "partition",
            start: { x: -16.8, z: -10.2 },
            end: { x: -16.8, z: -16.075 },
          },
          {
            //mistnost CBS - leva leva
            type: "partition",
            start: { x: -16.5, z: -13 },
            end: { x: -16.5, z: -10.2 },
          },
          {
            //Rozvadece - dolni
            type: "partition",
            start: { x: -16.8, z: -10.2 },
            end: { x: -10.2, z: -10.2 },
          },
          {
            //spodek modra vnitrni leva
            type: "partition",
            start: { x: 13.62, z: -17.87 },
            end: { x: 13.62, z: -4.31 },
          },
          {
            //spodek modra vnitrni
            type: "partition",
            start: { x: 13.62, z: -4.31 },
            end: { x: 17.87, z: -4.31 },
          },
          {
            //spodek modra vnitrni vrchni
            type: "partition",
            start: { x: 13.37, z: -17.87 },
            end: { x: 13.37, z: -4.06 },
          },
          {
            //spodek modra vnejsi vrchni
            type: "partition",
            start: { x: 13.37, z: -4.06 },
            end: { x: 17.87, z: -4.06 },
          },
          {
            //šachta vnejsi vrchni
            type: "partition",
            start: { x: 13.37, z: -4.06 },
            end: { x: 11.55, z: -4.06 },
          },
          {
            //šachta vnejsi leva
            type: "partition",
            start: { x: 11.55, z: -4.06 },
            end: { x: 11.55, z: -5.475 },
          },
          {
            //šachta vnejsi spodni
            type: "partition",
            start: { x: 13.37, z: -5.475 },
            end: { x: 11.55, z: -5.475 },
          },
          {
            //šachta vnitrni spodni
            type: "partition",
            start: { x: 13.37, z: -5.275 },
            end: { x: 11.75, z: -5.275 },
          },
          {
            //šachta vnitrni leva
            type: "partition",
            start: { x: 11.75, z: -5.275 },
            end: { x: 11.75, z: -4.26 },
          },
          {
            //šachta vnitrni vrchni
            type: "partition",
            start: { x: 11.75, z: -4.26 },
            end: { x: 13.37, z: -4.26 },
          },
          {
            //strojovna chlazeni vnejsi prava
            type: "partition",
            start: { x: 4.15, z: -0.35 },
            end: { x: 4.15, z: -8.85 },
          },
          {
            //strojovna chlazeni vnejsi leva
            type: "partition",
            start: { x: -1.75, z: -0.35 },
            end: { x: -1.75, z: -8.85 },
          },
          {
            //strojovna chlazeni spodni vnejsi
            type: "partition",
            start: { x: -1.75, z: -8.85 },
            end: { x: 4.15, z: -8.85 },
          },
          {
            //strojovna chlazeni vrchni vnejsi
            type: "partition",
            start: { x: -1.75, z: -0.35 },
            end: { x: 4.15, z: -0.35 },
          },
          {
            //strojovna chlazeni vnitrni vrchni
            type: "partition",
            start: { x: -1.6, z: -0.5 },
            end: { x: 4, z: -0.5 },
          },
          {
            //strojovna chlazeni vnitrni spodni
            type: "partition",
            start: { x: -1.6, z: -8.7 },
            end: { x: 4, z: -8.7 },
          },
          {
            //strojovna chlazeni vnitrni prava
            type: "partition",
            start: { x: 4, z: -0.5 },
            end: { x: 4, z: -8.7 },
          },
          {
            //strojovna chlazeni vnitrni leva
            type: "partition",
            start: { x: -1.6, z: -0.5 },
            end: { x: -1.6, z: -8.7 },
          },
          {
            //strojovna chlazeni vnitrni leva
            type: "partition",
            start: { x: -1.6, z: -0.5 },
            end: { x: -1.6, z: -8.7 },
          },
          {
            //spodni outlne
            type: "partition",
            start: { x: -17.87, z: -17.87 },
            end: { x: 17.87, z: -17.87 },
          },
          {
            //pravy outlne
            type: "partition",
            start: { x: 17.87, z: -17.87 },
            end: { x: 17.87, z: 17.87 },
          },
          {
            //levy outlne
            type: "partition",
            start: { x: -17.87, z: -17.87 },
            end: { x: -17.87, z: 17.87 },
          },
          {
            //vrchni outlne
            type: "partition",
            start: { x: 17.87, z: 17.87 },
            end: { x: -17.87, z: 17.87 },
          },
          {
            //spodek B
            type: "partition",
            start: { x: -17.87, z: 21.37 },
            end: { x: 17.87, z: 21.37 },
          },
          {
            //spodek B
            type: "partition",
            start: { x: -17.87, z: 21.37 },
            end: { x: -38.85, z: 21.37 },
          },
          {
            //spodek B
            type: "partition",
            start: { x: -38.85, z: 21.37 },
            end: { x: -38.85, z: 54.68 },
          },
          {
            //leva parkoviste
            type: "partition",
            start: { x: 17.87, z: 21.37 },
            end: { x: 38.85, z: 21.37 },
          },
          {
            //prava parkoviste
            type: "partition",
            start: { x: 38.85, z: 21.37 },
            end: { x: 38.85, z: 54.68 },
          },
          {
            //vrchni parkoviste leva
            type: "partition",
            start: { x: -38.85, z: 54.68 },
            end: { x: -32.25, z: 54.68 },
          },
          {
            //odvetravaci sachta + sklad jadrob1  leva vnejsi
            type: "partition",
            start: { x: -32.25, z: 54.68 },
            end: { x: -32.25, z: 40.54 },
          },
          {
            //sklad (jadro B1) spodni vnejsi
            type: "partition",
            start: { x: -32.25, z: 40.54 },
            end: { x: -28.8, z: 40.54 },
          },
          {
            //odvetravaci sachta + sklad jadrob1 prava vnejsi
            type: "partition",
            start: { x: -28.8, z: 54.68 },
            end: { x: -28.8, z: 40.54 },
          },
          {
            //odvetravaci sachta vnitrni leva
            type: "partition",
            start: { x: -28.43, z: 54.68 },
            end: { x: -28.43, z: 51.23 },
          },
          {
            //odvetravaci sachta vnitrni prava
            type: "partition",
            start: { x: -25.37, z: 54.68 },
            end: { x: -25.37, z: 51.23 },
          },
          {
            //odvetravaci sachta vnitrni spodni
            type: "partition",
            start: { x: -28.13, z: 51.23 },
            end: { x: -25.37, z: 51.23 },
          },
          {
            //revizni dvirka vnitrni leva
            type: "partition",
            start: { x: -28.25, z: 50.96 },
            end: { x: -28.25, z: 49.11 },
          },
          {
            //vrchni parkoviste horni
            type: "partition",
            start: { x: -38.85, z: 54.68 },
            end: { x: 38.85, z: 54.68 },
          },
          {
            //prava spojovaci zed
            type: "partition",
            start: { x: 18.37, z: 18.37 },
            end: { x: 18.37, z: 21.37 },
          },
          {
            //leva spojovaci zed
            type: "partition",
            start: { x: -18.37, z: 18.37 },
            end: { x: -18.37, z: 21.37 },
          },
        ],
      },
      temperature_data: [0],
      wifi_signal_data: [0],
    },
    {
      id: -1,
      name: "P1",
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
            //kostka outline spodni
            type: "partition",
            start: { x: -18.37, z: -18.37 },
            end: { x: 18.37, z: -18.37 },
          },
          {
            //kostka outline leva
            type: "partition",
            start: { x: -18.37, z: -18.37 },
            end: { x: -18.37, z: 7.63 },
          },
          {
            //kostka outline prava
            type: "partition",
            start: { x: 18.37, z: -18.37 },
            end: { x: 18.37, z: 7.63 },
          },
          {
            //kostka outline spodni prava
            type: "partition",
            start: { x: 18.37, z: 7.63 },
            end: { x: 39.21, z: 7.63 },
          },
          {
            //kostka outline prava
            type: "partition",
            start: { x: 39.21, z: 7.63 },
            end: { x: 39.21, z: 54.88 },
          },
          {
            //kostka outline vrsek
            type: "partition",
            start: { x: 39.21, z: 54.88 },
            end: { x: -39.29, z: 54.88 },
          },
          {
            //kostka outline leva
            type: "partition",
            start: { x: -39.29, z: 7.63 },
            end: { x: -39.29, z: 54.88 },
          },
          {
            //kostka outline spodni leva
            type: "partition",
            start: { x: -39.29, z: 7.63 },
            end: { x: -18.37, z: 7.63 },
          },
          {
            //parkoviste
            type: "partition",
            start: { x: -29.14, z: 54.48 },
            end: { x: -29.14, z: 28.135 },
          },
          {
            //parkoviste
            type: "partition",
            start: { x: -29.14, z: 28.135 },
            end: { x: -25, z: 28.135 },
          },
          {
            //parkoviste
            type: "partition",
            start: { x: 35.61, z: 28.135 },
            end: { x: 35.61, z: 54.48 },
          },
          {
            //parkoviste
            type: "partition",
            start: { x: 35.61, z: 54.48 },
            end: { x: -29.14, z: 54.48 },
          },
          {
            //parkoviste partition 1
            type: "partition",
            start: { x: -13.065, z: 28.135 },
            end: { x: -13.065, z: 54.48 },
          },
          {
            //parkoviste partition 1
            type: "partition",
            start: { x: -13.065, z: 28.135 },
            end: { x: -12.915, z: 28.135 },
          },
          {
            //parkoviste partition 1
            type: "partition",
            start: { x: -12.915, z: 28.135 },
            end: { x: -12.915, z: 54.48 },
          },
          {
            //parkoviste partition 2
            type: "partition",
            start: { x: 3.16, z: 54.48 },
            end: { x: 3.16, z: 28.135 },
          },
          {
            //parkoviste partition 2
            type: "partition",
            start: { x: 3.16, z: 28.135 },
            end: { x: 3.31, z: 28.135 },
          },
          {
            //parkoviste partition 2
            type: "partition",
            start: { x: 3.31, z: 28.135 },
            end: { x: 3.31, z: 54.48 },
          },
          {
            //parkoviste partition 3
            type: "partition",
            start: { x: 19.385, z: 54.48 },
            end: { x: 19.385, z: 28.135 },
          },
          {
            //parkoviste partition 3
            type: "partition",
            start: { x: 19.385, z: 28.135 },
            end: { x: 19.535, z: 28.135 },
          },
          {
            //parkoviste partition 3
            type: "partition",
            start: { x: 19.535, z: 28.135 },
            end: { x: 19.535, z: 54.48 },
          },
          {
            //01.24 - vrchni stena 2
            type: "partition",
            start: { x: -17.87, z: 21.27 },
            end: { x: 17.87, z: 21.27 },
          },
          {
            //schodiste11 vnejsi leva
            type: "partition",
            start: { x: -0.6, z: 4.8 },
            end: { x: -0.6, z: -4.8 },
          },
          {
            //schodiste11 vnejsi spodni
            type: "partition",
            start: { x: -0.6, z: -4.8 },
            end: { x: 4.2, z: -4.8 },
          },
          {
            //schodiste11 vnejsi prava
            type: "partition",
            start: { x: 4.2, z: -4.8 },
            end: { x: 4.2, z: 4.8 },
          },
          {
            //schodiste11 vnejsi prava
            type: "partition",
            start: { x: 4.2, z: 4.8 },
            end: { x: -0.6, z: 4.8 },
          },
          {
            //schodiste11 vnitrni leva
            type: "partition",
            start: { x: 1.7, z: 2.37 },
            end: { x: 1.7, z: -2.37 },
          },
          {
            //schodiste11 vnitrni spodni
            type: "partition",
            start: { x: 1.7, z: -2.37 },
            end: { x: 1.9, z: -2.37 },
          },
          {
            //schodiste11 vnitrni prava
            type: "partition",
            start: { x: 1.9, z: -2.37 },
            end: { x: 1.9, z: 2.37 },
          },
          {
            //schodiste11 vnitrni vrchni
            type: "partition",
            start: { x: 1.9, z: 2.37 },
            end: { x: 1.7, z: 2.37 },
          },
          {
            //Kostka vnitrni stena leva
            type: "partition",
            start: { x: -16.8, z: 16.8 },
            end: { x: -16.8, z: -16.8 },
          },
          {
            //Kostka vnitrni stena vrchhni leva
            type: "partition",
            start: { x: -16.8, z: 16.8 },
            end: { x: -8.2, z: 16.8 },
          },
          {
            //Kostka vnitrni stena spodni
            type: "partition",
            start: { x: -16.8, z: -16.8 },
            end: { x: 16.8, z: -16.8 },
          },
          {
            //Kostka vnitrni stena prava
            type: "partition",
            start: { x: 16.8, z: -16.8 },
            end: { x: 16.8, z: 17.87 },
          },
          {
            //01.69 vnejsi leva
            type: "partition",
            start: { x: -6.6, z: -7.8 },
            end: { x: -6.6, z: -15.6 },
          },
          {
            //01.69 vnejsi dolni
            type: "partition",
            start: { x: -6.6, z: -15.6 },
            end: { x: 4.2, z: -15.6 },
          },
          {
            //01.69 vnejsi prava
            type: "partition",
            start: { x: 4.2, z: -15.6 },
            end: { x: 4.2, z: -7.8 },
          },
          {
            //01.69 vnejsi horni
            type: "partition",
            start: { x: 4.2, z: -7.8 },
            end: { x: -6.6, z: -7.8 },
          },
          {
            //01.69 vnitrni leva
            type: "partition",
            start: { x: -6.5, z: -7.9 },
            end: { x: -6.5, z: -15.5 },
          },
          {
            //01.69 vnitrni dolni
            type: "partition",
            start: { x: -6.5, z: -15.5 },
            end: { x: 4.1, z: -15.5 },
          },
          {
            //01.69 vnitrni prava
            type: "partition",
            start: { x: 4.1, z: -15.5 },
            end: { x: 4.1, z: -7.9 },
          },
          {
            //01.69 vnitrni horni
            type: "partition",
            start: { x: 4.1, z: -7.9 },
            end: { x: -6.5, z: -7.9 },
          },
          {
            //01.12 vnejsi leva
            type: "partition",
            start: { x: -15, z: 7.8 },
            end: { x: -15, z: -6 },
          },
          {
            //01.12 vnejsi spodni
            type: "partition",
            start: { x: -15, z: -6 },
            end: { x: -3, z: -6 },
          },
          {
            //01.12 vnejsi prava
            type: "partition",
            start: { x: -3, z: -6 },
            end: { x: -3, z: 7.8 },
          },
          {
            //01.12 vnejsi horni
            type: "partition",
            start: { x: -3, z: 7.8 },
            end: { x: -15, z: 7.8 },
          },
          {
            //01.12 vnitrni leva
            type: "partition",
            start: { x: -14.9, z: 7.7 },
            end: { x: -14.9, z: -5.9 },
          },
          {
            //01.12 vnitri spodni
            type: "partition",
            start: { x: -14.9, z: -5.9 },
            end: { x: -3.1, z: -5.9 },
          },
          {
            //01.12 vnitrni prava
            type: "partition",
            start: { x: -3.1, z: -5.9 },
            end: { x: -3.1, z: 7.7 },
          },
          {
            //01.12 vnitri horni
            type: "partition",
            start: { x: -3.1, z: 7.7 },
            end: { x: -14.9, z: 7.7 },
          },
          {
            //01.13 leva
            type: "partition",
            start: { x: 9.97, z: -10.2 },
            end: { x: 9.97, z: 9.6 },
          },
          {
            //01.13 vrchni
            type: "partition",
            start: { x: 9.97, z: -5.475 },
            end: { x: 16.8, z: -5.475 },
          },
          {
            //01.21 spodni 3
            type: "partition",
            start: { x: 13.255, z: -5.325 },
            end: { x: 16.8, z: -5.325 },
          },
          {
            //01.21 vodorvna 2
            type: "partition",
            start: { x: 13.255, z: -5.325 },
            end: { x: 13.255, z: -4.51 },
          },
          {
            //01.21 spodni 2
            type: "partition",
            start: { x: 13.255, z: -4.51 },
            end: { x: 12.155, z: -4.51 },
          },
          {
            //01.21 vodorovna 1
            type: "partition",
            start: { x: 12.155, z: -4.51 },
            end: { x: 12.155, z: -3.125 },
          },
          {
            //01.21 spodek 1
            type: "partition",
            start: { x: 12.155, z: -3.125 },
            end: { x: 10.165, z: -3.125 },
          },
          {
            //01.21 leva
            type: "partition",
            start: { x: 10.165, z: -3.125 },
            end: { x: 10.165, z: -2 },
          },
          {
            //01.21 vrchni
            type: "partition",
            start: { x: 10.165, z: -2 },
            end: { x: 16.8, z: -2 },
          },
          {
            //01.21 mala  leva
            type: "partition",
            start: { x: 12.155, z: -4.61 },
            end: { x: 12.155, z: -5.325 },
          },
          {
            //01.21 mala  spodni
            type: "partition",
            start: { x: 12.155, z: -5.325 },
            end: { x: 13.155, z: -5.325 },
          },
          {
            //01.21 mala  prava
            type: "partition",
            start: { x: 13.155, z: -5.325 },
            end: { x: 13.155, z: -4.61 },
          },
          {
            //01.21 mala  prava
            type: "partition",
            start: { x: 13.155, z: -4.61 },
            end: { x: 12.155, z: -4.61 },
          },
          {
            //01.21 velka leva
            type: "partition",
            start: { x: 10.165, z: -5.325 },
            end: { x: 10.165, z: -3.275 },
          },
          {
            //01.21 velka spodni
            type: "partition",
            start: { x: 10.165, z: -5.325 },
            end: { x: 12.005, z: -5.325 },
          },
          {
            //01.21 velka prava
            type: "partition",
            start: { x: 12.005, z: -5.325 },
            end: { x: 12.005, z: -3.275 },
          },
          {
            //01.21 velka horni
            type: "partition",
            start: { x: 12.005, z: -3.275 },
            end: { x: 10.165, z: -3.275 },
          },
          {
            //01.14 spodni
            type: "partition",
            start: { x: 10.2, z: -1.85 },
            end: { x: 16.8, z: -1.85 },
          },
          {
            //01.14 leva 1
            type: "partition",
            start: { x: 10.2, z: -1.85 },
            end: { x: 10.2, z: -0.3 },
          },
          {
            //01.14 horni 1
            type: "partition",
            start: { x: 10.2, z: -0.3 },
            end: { x: 11.2, z: -0.3 },
          },
          {
            //01.14 leva 2
            type: "partition",
            start: { x: 11.2, z: -0.3 },
            end: { x: 11.2, z: 0.4 },
          },
          {
            //01.14 horni 2
            type: "partition",
            start: { x: 11.2, z: 0.4 },
            end: { x: 16.8, z: 0.4 },
          },
          {
            //01.14 mala leva
            type: "partition",
            start: { x: 10.2, z: 0.4 },
            end: { x: 10.2, z: -0.175 },
          },
          {
            //01.14 mala spodni
            type: "partition",
            start: { x: 10.2, z: -0.175 },
            end: { x: 11.1, z: -0.175 },
          },
          {
            //01.14 mala prava
            type: "partition",
            start: { x: 11.1, z: -0.175 },
            end: { x: 11.1, z: 0.4 },
          },
          {
            //01.14 mala vrchni
            type: "partition",
            start: { x: 11.1, z: 0.4 },
            end: { x: 10.2, z: 0.4 },
          },
          {
            //01.16 spodni 1
            type: "partition",
            start: { x: 10.55, z: 0.55 },
            end: { x: 16.8, z: 0.55 },
          },
          {
            //01.16 leva 1
            type: "partition",
            start: { x: 10.55, z: 0.55 },
            end: { x: 10.55, z: 1.325 },
          },
          {
            //01.16 spodni 2
            type: "partition",
            start: { x: 10.55, z: 1.325 },
            end: { x: 10.2, z: 1.325 },
          },
          {
            //01.16 leva 2
            type: "partition",
            start: { x: 10.2, z: 1.325 },
            end: { x: 10.2, z: 2.8 },
          },
          {
            //01.16 vrchni
            type: "partition",
            start: { x: 10.2, z: 2.8 },
            end: { x: 16.8, z: 2.8 },
          },
          {
            //01.16 mala leva
            type: "partition",
            start: { x: 10.2, z: 2.8 },
            end: { x: 16.8, z: 2.8 },
          },
          {
            //01.70b leva
            type: "partition",
            start: { x: 13.35, z: 3.05 },
            end: { x: 13.35, z: 6.5 },
          },
          {
            //01.70b spodni
            type: "partition",
            start: { x: 13.35, z: 3.05 },
            end: { x: 16.8, z: 3.05 },
          },
          {
            //01.70b prava
            type: "partition",
            start: { x: 16.8, z: 6.5 },
            end: { x: 16.8, z: 3.05 },
          },
          {
            //01.70b vrchni
            type: "partition",
            start: { x: 16.8, z: 6.5 },
            end: { x: 13.35, z: 6.5 },
          },
          {
            //01.70a leva
            type: "partition",
            start: { x: 10.3, z: 6.5 },
            end: { x: 10.3, z: 3.05 },
          },
          {
            //01.70a spodni
            type: "partition",
            start: { x: 10.3, z: 3.05 },
            end: { x: 13.2, z: 3.05 },
          },
          {
            //01.70a prava
            type: "partition",
            start: { x: 13.2, z: 3.05 },
            end: { x: 13.2, z: 6.5 },
          },
          {
            //01.70a vrchni
            type: "partition",
            start: { x: 13.2, z: 6.5 },
            end: { x: 10.3, z: 6.5 },
          },
          {
            //01.65 leva
            type: "partition",
            start: { x: -15.6, z: 15.6 },
            end: { x: -15.6, z: 9.6 },
          },
          {
            //01.65 spodni
            type: "partition",
            start: { x: -15.6, z: 9.6 },
            end: { x: -11.4, z: 9.6 },
          },
          {
            //01.65 prava
            type: "partition",
            start: { x: -11.4, z: 9.6 },
            end: { x: -11.4, z: 15.6 },
          },
          {
            //01.65 horni
            type: "partition",
            start: { x: -11.4, z: 15.6 },
            end: { x: -15.6, z: 15.6 },
          },
          {
            //vrsek - leva stena
            type: "partition",
            start: { x: -10.2, z: 15.5 },
            end: { x: -10.2, z: 9.6 },
          },
          {
            //vrsek - spodni stena
            type: "partition",
            start: { x: -10.2, z: 9.6 },
            end: { x: 10.2, z: 9.6 },
          },
          {
            //vrsek - prava stena
            type: "partition",
            start: { x: 10.2, z: 9.6 },
            end: { x: 10.2, z: 16.8 },
          },
          {
            //01.24 - spodni stena 1
            type: "partition",
            start: { x: -17.87, z: 18.17 },
            end: { x: -6.6, z: 18.17 },
          },
          {
            //01.24 - leva stena 1
            type: "partition",
            start: { x: -6.6, z: 18.17 },
            end: { x: -6.6, z: 16.8 },
          },
          {
            //01.24 - spodni stena 2
            type: "partition",
            start: { x: -6.6, z: 16.8 },
            end: { x: 6.6, z: 16.8 },
          },
          {
            //01.24 - prava stena 1
            type: "partition",
            start: { x: 6.6, z: 16.8 },
            end: { x: 6.6, z: 18.17 },
          },
          {
            //01.24 - spodni stena 3
            type: "partition",
            start: { x: 6.6, z: 18.17 },
            end: { x: 17.87, z: 18.17 },
          },
          {
            //01.24 - prava stena 2
            type: "partition",
            start: { x: 17.87, z: 21.27 },
            end: { x: 17.87, z: 18.17 },
          },
          {
            //01.24 - vrchni stena 2
            type: "partition",
            start: { x: -17.87, z: 21.27 },
            end: { x: 17.87, z: 21.27 },
          },
          {
            //01.24 - leva stena 2
            type: "partition",
            start: { x: -17.87, z: 18.17 },
            end: { x: -17.87, z: 21.27 },
          },
          {
            //Schodiste02 - propojeni leve s vrskem
            type: "partition",
            start: { x: -9.65, z: 15.5 },
            end: { x: -10.2, z: 15.5 },
          },
          {
            //Schodiste02 - leva stena
            type: "partition",
            start: { x: -9.65, z: 15.5 },
            end: { x: -9.65, z: 10.555 },
          },
          {
            //Schodiste02 - spodni stena
            type: "partition",
            start: { x: -9.65, z: 10.555 },
            end: { x: -7.15, z: 10.555 },
          },
          {
            //Schodiste02 - prava stena
            type: "partition",
            start: { x: -7.15, z: 16.8 },
            end: { x: -7.15, z: 10.555 },
          },
          {
            //Schodiste02 - horni prava stena
            type: "partition",
            start: { x: -7.3, z: 16.8 },
            end: { x: -7.15, z: 16.8 },
          },
          {
            //01.64 - leva leva stena
            type: "partition",
            start: { x: -9.9, z: 17.99 },
            end: { x: -9.9, z: 17 },
          },
          {
            //01.64 - leva spodni stena
            type: "partition",
            start: { x: -9.9, z: 17 },
            end: { x: -8.5, z: 17 },
          },
          {
            //01.64 - leva prava stena
            type: "partition",
            start: { x: -8.5, z: 17 },
            end: { x: -8.5, z: 17.99 },
          },
          {
            //01.64 - leva horni stena
            type: "partition",
            start: { x: -8.5, z: 17.99 },
            end: { x: -9.9, z: 17.99 },
          },
          {
            //01.64 - prava leva stena 2
            type: "partition",
            start: { x: -8.35, z: 17.99 },
            end: { x: -8.35, z: 17 },
          },
          {
            //01.64 - prava spodni stena 1
            type: "partition",
            start: { x: -8.35, z: 17 },
            end: { x: -8.2, z: 17 },
          },
          {
            //01.64 - prava leva stena 2
            type: "partition",
            start: { x: -8.2, z: 17 },
            end: { x: -8.2, z: 16.8 },
          },
          {
            //01.64 - prava prava stena 2
            type: "partition",
            start: { x: -7.3, z: 17 },
            end: { x: -7.3, z: 16.8 },
          },
          {
            //V4 - leva stena
            type: "partition",
            start: { x: -6.6, z: 16.6 },
            end: { x: -6.6, z: 15.05 },
          },
          {
            //V4 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 15.05 },
            end: { x: -4.05, z: 15.05 },
          },
          {
            //V4 - prava stena
            type: "partition",
            start: { x: -4.05, z: 15.05 },
            end: { x: -4.05, z: 16.6 },
          },
          {
            //V4 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 16.6 },
            end: { x: -6.6, z: 16.6 },
          },
          {
            //V5 - leva stena
            type: "partition",
            start: { x: -6.6, z: 14.85 },
            end: { x: -6.6, z: 13.45 },
          },
          {
            //V5 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 13.45 },
            end: { x: -4.05, z: 13.45 },
          },
          {
            //V5 - prava stena
            type: "partition",
            start: { x: -4.05, z: 13.45 },
            end: { x: -4.05, z: 14.85 },
          },
          {
            //V5 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 14.85 },
            end: { x: -6.6, z: 14.85 },
          },
          {
            //RozvodnaSLP - leva stena
            type: "partition",
            start: { x: -6.6, z: 13.3 },
            end: { x: -6.6, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -6.6, z: 11.75 },
            end: { x: -4.05, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 11.75 },
            end: { x: -4.05, z: 13.3 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 13.3 },
            end: { x: -6.6, z: 13.3 },
          },
          {
            //WC zam - leva stena
            type: "partition",
            start: { x: -6.6, z: 11.6 },
            end: { x: -6.6, z: 9.8 },
          },
          {
            //WC zam - spodni stena
            type: "partition",
            start: { x: -6.6, z: 9.8 },
            end: { x: -4.05, z: 9.8 },
          },
          {
            //WC zam - prava stena
            type: "partition",
            start: { x: -4.05, z: 9.8 },
            end: { x: -4.05, z: 11.6 },
          },
          {
            //WC zam - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 11.6 },
            end: { x: -6.6, z: 11.6 },
          },
          {
            //mp prostor - leva stena
            type: "partition",
            start: { x: -3.85, z: 16.6 },
            end: { x: -3.85, z: 9.8 },
          },
          {
            //mp prostor - spodni stena
            type: "partition",
            start: { x: -3.85, z: 9.8 },
            end: { x: -1.15, z: 9.8 },
          },
          {
            //mp prostor - prava stena
            type: "partition",
            start: { x: -1.15, z: 9.8 },
            end: { x: -1.15, z: 16.6 },
          },
          {
            //mp prostor - vrchni stena
            type: "partition",
            start: { x: -1.15, z: 16.6 },
            end: { x: -3.85, z: 16.6 },
          },
          {
            //Kuchynka - leva stena
            type: "partition",
            start: { x: -0.75, z: 16.6 },
            end: { x: -0.75, z: 14.3 },
          },
          {
            //Kuchynka - spodni stena
            type: "partition",
            start: { x: -0.75, z: 14.3 },
            end: { x: 3.25, z: 14.3 },
          },
          {
            //Kuchynka - prava stena
            type: "partition",
            start: { x: 3.25, z: 14.3 },
            end: { x: 3.25, z: 16.6 },
          },
          {
            //Kuchynka - horni stena
            type: "partition",
            start: { x: 3.25, z: 16.6 },
            end: { x: -0.75, z: 16.6 },
          },
          {
            //Uklid - leva stena
            type: "partition",
            start: { x: 3.4, z: 16.6 },
            end: { x: 3.4, z: 14.3 },
          },
          {
            //Uklid - spodni stena
            type: "partition",
            start: { x: 3.4, z: 14.3 },
            end: { x: 4.5, z: 14.3 },
          },
          {
            //Uklid - prava stena
            type: "partition",
            start: { x: 4.5, z: 14.3 },
            end: { x: 4.5, z: 16.6 },
          },
          {
            //Uklid - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 16.6 },
            end: { x: 3.4, z: 16.6 },
          },
          {
            //Empty1 - leva stena
            type: "partition",
            start: { x: -0.75, z: 14 },
            end: { x: -0.75, z: 11.9 },
          },
          {
            //Empty1 - spodni stena
            type: "partition",
            start: { x: -0.75, z: 11.9 },
            end: { x: 4.5, z: 11.9 },
          },
          {
            //Empty1 - prava stena
            type: "partition",
            start: { x: 4.5, z: 11.9 },
            end: { x: 4.5, z: 14 },
          },
          {
            //Empty1 - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 14 },
            end: { x: -0.75, z: 14 },
          },
          {
            //V1 - leva strena
            type: "partition",
            start: { x: -0.75, z: 11.7 },
            end: { x: -0.75, z: 9.8 },
          },
          {
            //V1 - spodni strena
            type: "partition",
            start: { x: -0.75, z: 9.8 },
            end: { x: 0.965, z: 9.8 },
          },
          {
            //V1 - prava strena
            type: "partition",
            start: { x: 0.965, z: 9.8 },
            end: { x: 0.965, z: 11.7 },
          },
          {
            //V1 - vrchni strena
            type: "partition",
            start: { x: 0.965, z: 11.7 },
            end: { x: -0.75, z: 11.7 },
          },
          {
            //V2 - leva strena
            type: "partition",
            start: { x: 1.125, z: 11.7 },
            end: { x: 1.125, z: 9.8 },
          },
          {
            //V2 - spodni strena
            type: "partition",
            start: { x: 1.125, z: 9.8 },
            end: { x: 2.735, z: 9.8 },
          },
          {
            //V2 - prava strena
            type: "partition",
            start: { x: 2.735, z: 9.8 },
            end: { x: 2.735, z: 11.7 },
          },
          {
            //V2 - vrchni strena
            type: "partition",
            start: { x: 2.735, z: 11.7 },
            end: { x: 1.125, z: 11.7 },
          },
          {
            //V3 - leva strena
            type: "partition",
            start: { x: 2.925, z: 11.7 },
            end: { x: 2.925, z: 9.8 },
          },
          {
            //V3 - spodni strena
            type: "partition",
            start: { x: 2.925, z: 9.8 },
            end: { x: 4.545, z: 9.8 },
          },
          {
            //V3 - prava strena
            type: "partition",
            start: { x: 4.545, z: 9.8 },
            end: { x: 4.545, z: 11.7 },
          },
          {
            //V3 - vrchni strena
            type: "partition",
            start: { x: 4.545, z: 11.7 },
            end: { x: 2.925, z: 11.7 },
          },
          {
            //Empty2 - leva strena
            type: "partition",
            start: { x: 5.02, z: 16.6 },
            end: { x: 5.02, z: 15.3 },
          },
          {
            //Empty2 - spodni strena
            type: "partition",
            start: { x: 5.02, z: 15.3 },
            end: { x: 9.62, z: 15.3 },
          },
          {
            //Empty2 - prava strena
            type: "partition",
            start: { x: 9.62, z: 15.3 },
            end: { x: 9.62, z: 16.6 },
          },
          {
            //Empty2 - vrchni strena
            type: "partition",
            start: { x: 9.62, z: 16.6 },
            end: { x: 5.02, z: 16.6 },
          },
          {
            //WC muzi - leva stena
            type: "partition",
            start: { x: 5.02, z: 15.1 },
            end: { x: 5.02, z: 9.8 },
          },
          {
            //WC muzi - spodni stena
            type: "partition",
            start: { x: 5.02, z: 9.8 },
            end: { x: 7.17, z: 9.8 },
          },
          {
            //WC muzi - prava stena
            type: "partition",
            start: { x: 7.17, z: 9.8 },
            end: { x: 7.17, z: 15.1 },
          },
          {
            //WC muzi - vrchni stena
            type: "partition",
            start: { x: 7.17, z: 15.1 },
            end: { x: 5.02, z: 15.1 },
          },
          {
            //WC zeny - leva stena 1
            type: "partition",
            start: { x: 7.42, z: 15.1 },
            end: { x: 7.42, z: 13.3 },
          },
          {
            //WC zeny - spojeni leve steny
            type: "partition",
            start: { x: 7.42, z: 13.3 },
            end: { x: 7.37, z: 13.3 },
          },
          {
            //WC zeny - leva stena 2
            type: "partition",
            start: { x: 7.37, z: 13.3 },
            end: { x: 7.37, z: 9.8 },
          },
          {
            //WC zeny - spodni stena
            type: "partition",
            start: { x: 7.37, z: 9.8 },
            end: { x: 9.62, z: 9.8 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 9.8 },
            end: { x: 9.62, z: 15.1 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 15.1 },
            end: { x: 7.37, z: 15.1 },
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: -10.2 },
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 10.2, z: -10.2 },
            end: { x: 6.6, z: -10.2 },
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 6.6, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - leva
            type: "partition",
            start: { x: 7.15, z: -10.65 },
            end: { x: 7.15, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - nahore
            type: "partition",
            start: { x: 7.15, z: -10.65 },
            end: { x: 9.65, z: -10.65 },
          },
          {
            //Vnitrni Schodiste01 - prava
            type: "partition",
            start: { x: 9.65, z: -10.65 },
            end: { x: 9.65, z: -16.8 },
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
        ],
      },
      parking: [
        {
          start: { x: -29.14, z: 54.48 },
          end: { x: -24.14, z: 50.98 },
          status: "free",
        },
        {
          start: { x: -29.14, z: 50.98 },
          end: { x: -24.14, z: 48.48 },
          status: "free",
        },
        {
          start: { x: -29.14, z: 45.98 },
          end: { x: -24.14, z: 43.48 },
          status: "reserved",
        },
        {
          start: { x: -29.14, z: 43.48 },
          end: { x: -24.14, z: 40.98 },
          status: "reserved",
        },
        {
          start: { x: -29.14, z: 40.98 },
          end: { x: -24.14, z: 38.48 },
          status: "reserved",
        },
        {
          start: { x: -29.14, z: 38.48 },
          end: { x: -24.14, z: 35.98 },
          status: "reserved",
        },
        {
          start: { x: -29.14, z: 35.98 },
          end: { x: -24.14, z: 33.48 },
          status: "occupied",
        },
        {
          start: { x: -29.14, z: 30.98 },
          end: { x: -24.14, z: 28.48 },
          status: "free",
        },
        // 2
        {
          start: { x: -18.065, z: 54.48 },
          end: { x: -13.065, z: 50.98 },
          status: "reserved",
        },
        {
          start: { x: -18.065, z: 50.98 },
          end: { x: -13.065, z: 48.48 },
          status: "reserved",
        },
        {
          start: { x: -18.065, z: 48.48 },
          end: { x: -13.065, z: 45.98 },
          status: "reserved",
        },
        {
          start: { x: -18.065, z: 45.98 },
          end: { x: -13.065, z: 43.48 },
          status: "free",
        },
        {
          start: { x: -18.065, z: 43.48 },
          end: { x: -13.065, z: 40.98 },
          status: "free",
        },
        {
          start: { x: -18.065, z: 40.98 },
          end: { x: -13.065, z: 38.48 },
          status: "free",
        },
        {
          start: { x: -18.065, z: 38.48 },
          end: { x: -13.065, z: 35.98 },
          status: "free",
        },
        {
          start: { x: -18.065, z: 35.98 },
          end: { x: -13.065, z: 33.48 },
          status: "occupfreeied",
        },
        {
          start: { x: -18.065, z: 33.48 },
          end: { x: -13.065, z: 30.98 },
          status: "occupied",
        },
        {
          start: { x: -18.065, z: 30.98 },
          end: { x: -13.065, z: 28.48 },
          status: "occupied",
        },
        // 3
        {
          start: { x: -12.915, z: 54.48 },
          end: { x: -7.915, z: 50.98 },
          status: "occupied",
        },
        {
          start: { x: -12.915, z: 50.98 },
          end: { x: -7.915, z: 48.48 },
          status: "occupied",
        },
        {
          start: { x: -12.915, z: 48.48 },
          end: { x: -7.915, z: 45.98 },
          status: "occupied",
        },
        {
          start: { x: -12.915, z: 45.98 },
          end: { x: -7.915, z: 43.48 },
          status: "occupied",
        },
        {
          start: { x: -12.915, z: 43.48 },
          end: { x: -7.915, z: 40.98 },
          status: "occupied",
        },
        {
          start: { x: -12.915, z: 40.98 },
          end: { x: -7.915, z: 38.48 },
          status: "occupied",
        },
        {
          start: { x: -12.915, z: 38.48 },
          end: { x: -7.915, z: 35.98 },
          status: "free",
        },
        {
          start: { x: -12.915, z: 35.98 },
          end: { x: -7.915, z: 33.48 },
          status: "free",
        },
        {
          start: { x: -12.915, z: 33.48 },
          end: { x: -7.915, z: 30.98 },
          status: "free",
        },
        {
          start: { x: -12.915, z: 30.98 },
          end: { x: -7.915, z: 28.48 },
          status: "free",
        },
        // 4
        {
          start: { x: -1.84, z: 54.48 },
          end: { x: 3.16, z: 50.98 },
          status: "occupied",
        },
        {
          start: { x: -1.84, z: 50.98 },
          end: { x: 3.16, z: 48.48 },
          status: "occupied",
        },
        {
          start: { x: -1.84, z: 48.48 },
          end: { x: 3.16, z: 45.98 },
          status: "free",
        },
        {
          start: { x: -1.84, z: 45.98 },
          end: { x: 3.16, z: 43.48 },
          status: "free",
        },
        {
          start: { x: -1.84, z: 43.48 },
          end: { x: 3.16, z: 40.98 },
          status: "free",
        },
        {
          start: { x: -1.84, z: 40.98 },
          end: { x: 3.16, z: 38.48 },
          status: "free",
        },
        {
          start: { x: -1.84, z: 38.48 },
          end: { x: 3.16, z: 35.98 },
          status: "free",
        },
        {
          start: { x: -1.84, z: 35.98 },
          end: { x: 3.16, z: 33.48 },
          status: "occupied",
        },
        {
          start: { x: -1.84, z: 33.48 },
          end: { x: 3.16, z: 30.98 },
          status: "free",
        },
        {
          start: { x: -1.84, z: 30.98 },
          end: { x: 3.16, z: 28.48 },
          status: "free",
        },
        // 5
        {
          start: { x: 3.31, z: 54.48 },
          end: { x: 8.31, z: 50.98 },
          status: "occupied",
        },
        {
          start: { x: 3.31, z: 50.98 },
          end: { x: 8.31, z: 48.48 },
          status: "occupied",
        },
        {
          start: { x: 3.31, z: 48.48 },
          end: { x: 8.31, z: 45.98 },
          status: "free",
        },
        {
          start: { x: 3.31, z: 45.98 },
          end: { x: 8.31, z: 43.48 },
          status: "occupied",
        },
        {
          start: { x: 3.31, z: 43.48 },
          end: { x: 8.31, z: 40.98 },
          status: "free",
        },
        {
          start: { x: 3.31, z: 40.98 },
          end: { x: 8.31, z: 38.48 },
          status: "free",
        },
        {
          start: { x: 3.31, z: 38.48 },
          end: { x: 8.31, z: 35.98 },
          status: "occupied",
        },
        {
          start: { x: 3.31, z: 35.98 },
          end: { x: 8.31, z: 33.48 },
          status: "occupied",
        },
        {
          start: { x: 3.31, z: 33.48 },
          end: { x: 8.31, z: 30.98 },
          status: "free",
        },
        {
          start: { x: 3.31, z: 30.98 },
          end: { x: 8.31, z: 28.48 },
          status: "occupied",
        },
        {
          start: { x: 3.31, z: 54.48 },
          end: { x: 8.31, z: 50.98 },
          status: "occupied",
        },
        {
          start: { x: 3.31, z: 50.98 },
          end: { x: 8.31, z: 48.48 },
          status: "free",
        },
        // 6
        {
          start: { x: 14.385, z: 54.48 },
          end: { x: 19.385, z: 50.98 },
          status: "occupied",
        },
        {
          start: { x: 14.385, z: 50.98 },
          end: { x: 19.385, z: 48.48 },
          status: "free",
        },
        {
          start: { x: 14.385, z: 48.48 },
          end: { x: 19.385, z: 45.98 },
          status: "free",
        },
        {
          start: { x: 14.385, z: 45.98 },
          end: { x: 19.385, z: 43.48 },
          status: "occupied",
        },
        {
          start: { x: 14.385, z: 43.48 },
          end: { x: 19.385, z: 40.98 },
          status: "free",
        },
        {
          start: { x: 14.385, z: 40.98 },
          end: { x: 19.385, z: 38.48 },
          status: "occupied",
        },
        {
          start: { x: 14.385, z: 38.48 },
          end: { x: 19.385, z: 35.98 },
          status: "occupied",
        },
        {
          start: { x: 14.385, z: 35.98 },
          end: { x: 19.385, z: 33.48 },
          status: "free",
        },
        {
          start: { x: 14.385, z: 33.48 },
          end: { x: 19.385, z: 30.98 },
          status: "free",
        },
        {
          start: { x: 14.385, z: 30.98 },
          end: { x: 19.385, z: 28.48 },
          status: "occupied",
        },
        {
          start: { x: 14.385, z: 54.48 },
          end: { x: 19.385, z: 50.98 },
          status: "free",
        },
        {
          start: { x: 14.385, z: 50.98 },
          end: { x: 19.385, z: 48.48 },
          status: "free",
        },
        // 7
        {
          start: { x: 19.535, z: 54.48 },
          end: { x: 24.535, z: 50.98 },
          status: "occupied",
        },
        {
          start: { x: 19.535, z: 50.98 },
          end: { x: 24.535, z: 48.48 },
          status: "occupied",
        },
        {
          start: { x: 19.535, z: 48.48 },
          end: { x: 24.535, z: 45.98 },
          status: "free",
        },
        {
          start: { x: 19.535, z: 45.98 },
          end: { x: 24.535, z: 43.48 },
          status: "free",
        },
        {
          start: { x: 19.535, z: 43.48 },
          end: { x: 24.535, z: 40.98 },
          status: "free",
        },
        {
          start: { x: 19.535, z: 40.98 },
          end: { x: 24.535, z: 38.48 },
          status: "free",
        },
        {
          start: { x: 19.535, z: 38.48 },
          end: { x: 24.535, z: 35.98 },
          status: "occupied",
        },
        {
          start: { x: 19.535, z: 35.98 },
          end: { x: 24.535, z: 33.48 },
          status: "occupied",
        },
        {
          start: { x: 19.535, z: 33.48 },
          end: { x: 24.535, z: 30.98 },
          status: "free",
        },
        {
          start: { x: 19.535, z: 30.98 },
          end: { x: 24.535, z: 28.48 },
          status: "occupied",
        },
        {
          start: { x: 19.535, z: 54.48 },
          end: { x: 24.535, z: 50.98 },
          status: "free",
        },
        {
          start: { x: 19.535, z: 50.98 },
          end: { x: 24.535, z: 48.48 },
          status: "free",
        },
        // 8
        {
          start: { x: 30.61, z: 54.48 },
          end: { x: 35.61, z: 50.98 },
          status: "free",
        },
        {
          start: { x: 30.61, z: 50.98 },
          end: { x: 35.61, z: 48.48 },
          status: "occupied",
        },
        {
          start: { x: 30.61, z: 45.98 },
          end: { x: 35.61, z: 43.48 },
          status: "occupied",
        },
        {
          start: { x: 30.61, z: 43.48 },
          end: { x: 35.61, z: 40.98 },
          status: "free",
        },
        {
          start: { x: 30.61, z: 40.98 },
          end: { x: 35.61, z: 38.48 },
          status: "occupied",
        },
        {
          start: { x: 30.61, z: 38.48 },
          end: { x: 35.61, z: 35.98 },
          status: "occupied",
        },
        {
          start: { x: 30.61, z: 35.98 },
          end: { x: 35.61, z: 33.48 },
          status: "free",
        },
        {
          start: { x: 30.61, z: 33.48 },
          end: { x: 35.61, z: 30.98 },
          status: "free",
        },
        {
          start: { x: 30.61, z: 30.98 },
          end: { x: 35.61, z: 28.48 },
          status: "free",
        },
        {
          start: { x: 30.61, z: 28.48 },
          end: { x: 35.61, z: 25.98 },
          status: "free",
        },
      ],
      temperature_data: [0],
      wifi_signal_data: [0],
    },
    {
      id: 0,
      name: "1NP",
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
            //schodiste11 vnejsi leva
            type: "partition",
            start: { x: -0.6, z: 4.8 },
            end: { x: -0.6, z: -4.8 },
          },
          {
            //schodiste11 vnejsi spodni
            type: "partition",
            start: { x: -0.6, z: -4.8 },
            end: { x: 4.2, z: -4.8 },
          },
          {
            //schodiste11 vnejsi prava
            type: "partition",
            start: { x: 4.2, z: -4.8 },
            end: { x: 4.2, z: 4.8 },
          },
          {
            //schodiste11 vnejsi prava
            type: "partition",
            start: { x: 4.2, z: 4.8 },
            end: { x: -0.6, z: 4.8 },
          },
          {
            //schodiste11 vnitrni leva
            type: "partition",
            start: { x: 1.7, z: 2.37 },
            end: { x: 1.7, z: -2.37 },
          },
          {
            //schodiste11 vnitrni spodni
            type: "partition",
            start: { x: 1.7, z: -2.37 },
            end: { x: 1.9, z: -2.37 },
          },
          {
            //schodiste11 vnitrni prava
            type: "partition",
            start: { x: 1.9, z: -2.37 },
            end: { x: 1.9, z: 2.37 },
          },
          {
            //schodiste11 vnitrni vrchni
            type: "partition",
            start: { x: 1.9, z: 2.37 },
            end: { x: 1.7, z: 2.37 },
          },
          {
            //vnejsi stena kostky leva
            type: "partition",
            start: { x: -16.8, z: -16.8 },
            end: { x: -16.8, z: 16.8 },
          },
          {
            //vnejsi stena kostky vrchni
            type: "partition",
            start: { x: -16.8, z: 16.8 },
            end: { x: 16.8, z: 16.8 },
          },
          {
            //vnejsi stena kostky prave
            type: "partition",
            start: { x: 16.8, z: 16.8 },
            end: { x: 16.8, z: -16.8 },
          },
          {
            //vnejsi stena kostky leva dolni
            type: "partition",
            start: { x: -16.8, z: -16.8 },
            end: { x: -8.73, z: -16.8 },
          },
          {
            //vnejsi stena kostky prava dolni
            type: "partition",
            start: { x: 3.12, z: -16.8 },
            end: { x: 16.8, z: -16.8 },
          },
          {
            //1.15 a 1.14 vnejsi leva
            type: "partition",
            start: { x: -8.73, z: -17.91 },
            end: { x: -8.73, z: -13.875 },
          },
          {
            //1.15 a 1.14 vnejsi vrchni
            type: "partition",
            start: { x: -8.73, z: -13.875 },
            end: { x: 3.12, z: -13.875 },
          },
          {
            //1.15 a 1.14 vnejsi prava
            type: "partition",
            start: { x: 3.12, z: -13.875 },
            end: { x: 3.12, z: -17.91 },
          },
          {
            //1.15 a 1.14 rozdeleni
            type: "partition",
            start: { x: -0.405, z: -13.875 },
            end: { x: -0.405, z: -17.91 },
          },
          {
            //1.15 vnejsi stena vrchni
            type: "partition",
            start: { x: -8.73, z: -14.215 },
            end: { x: -0.405, z: -14.215 },
          },
          {
            //1.15 vnejsi stena spodni
            type: "partition",
            start: { x: -8.73, z: -17.545 },
            end: { x: -0.405, z: -17.545 },
          },
          {
            //1.13 - spodni stena
            type: "partition",
            start: { x: -16.6, z: 10 },
            end: { x: -10.2, z: 10 },
          },
          {
            //vrsek - leva stena
            type: "partition",
            start: { x: -10.2, z: 16.8 },
            end: { x: -10.2, z: 9.6 },
          },
          {
            //vrsek - spodni stena
            type: "partition",
            start: { x: -10.2, z: 9.6 },
            end: { x: 10.2, z: 9.6 },
          },
          {
            //vrsek - prava stena
            type: "partition",
            start: { x: 10.2, z: 9.6 },
            end: { x: 10.2, z: 16.8 },
          },
          {
            //Schodiste02 - leva stena
            type: "partition",
            start: { x: -9.65, z: 16.6 },
            end: { x: -9.65, z: 9.8 },
          },
          {
            //Schodiste02 - spodni stena
            type: "partition",
            start: { x: -9.65, z: 9.8 },
            end: { x: -7.15, z: 9.8 },
          },
          {
            //Schodiste02 - prava stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -7.15, z: 9.8 },
          },
          {
            //Schodiste02 - vrchni stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -9.65, z: 16.6 },
          },
          {
            //V4 - leva stena
            type: "partition",
            start: { x: -6.6, z: 16.6 },
            end: { x: -6.6, z: 15.05 },
          },
          {
            //V4 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 15.05 },
            end: { x: -4.05, z: 15.05 },
          },
          {
            //V4 - prava stena
            type: "partition",
            start: { x: -4.05, z: 15.05 },
            end: { x: -4.05, z: 16.6 },
          },
          {
            //V4 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 16.6 },
            end: { x: -6.6, z: 16.6 },
          },
          {
            //V5 - leva stena
            type: "partition",
            start: { x: -6.6, z: 14.85 },
            end: { x: -6.6, z: 13.45 },
          },
          {
            //V5 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 13.45 },
            end: { x: -4.05, z: 13.45 },
          },
          {
            //V5 - prava stena
            type: "partition",
            start: { x: -4.05, z: 13.45 },
            end: { x: -4.05, z: 14.85 },
          },
          {
            //V5 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 14.85 },
            end: { x: -6.6, z: 14.85 },
          },
          {
            //RozvodnaSLP - leva stena
            type: "partition",
            start: { x: -6.6, z: 13.3 },
            end: { x: -6.6, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -6.6, z: 11.75 },
            end: { x: -4.05, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 11.75 },
            end: { x: -4.05, z: 13.3 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 13.3 },
            end: { x: -6.6, z: 13.3 },
          },
          {
            //WC zam - leva stena
            type: "partition",
            start: { x: -6.6, z: 11.6 },
            end: { x: -6.6, z: 9.8 },
          },
          {
            //WC zam - spodni stena
            type: "partition",
            start: { x: -6.6, z: 9.8 },
            end: { x: -4.05, z: 9.8 },
          },
          {
            //WC zam - prava stena
            type: "partition",
            start: { x: -4.05, z: 9.8 },
            end: { x: -4.05, z: 11.6 },
          },
          {
            //WC zam - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 11.6 },
            end: { x: -6.6, z: 11.6 },
          },
          {
            //mp prostor - leva stena
            type: "partition",
            start: { x: -3.85, z: 16.6 },
            end: { x: -3.85, z: 9.8 },
          },
          {
            //mp prostor - spodni stena
            type: "partition",
            start: { x: -3.85, z: 9.8 },
            end: { x: -1.15, z: 9.8 },
          },
          {
            //mp prostor - prava stena
            type: "partition",
            start: { x: -1.15, z: 9.8 },
            end: { x: -1.15, z: 16.6 },
          },
          {
            //mp prostor - vrchni stena
            type: "partition",
            start: { x: -1.15, z: 16.6 },
            end: { x: -3.85, z: 16.6 },
          },
          {
            //Kuchynka - leva stena
            type: "partition",
            start: { x: -0.75, z: 16.6 },
            end: { x: -0.75, z: 14.3 },
          },
          {
            //Kuchynka - spodni stena
            type: "partition",
            start: { x: -0.75, z: 14.3 },
            end: { x: 3.25, z: 14.3 },
          },
          {
            //Kuchynka - prava stena
            type: "partition",
            start: { x: 3.25, z: 14.3 },
            end: { x: 3.25, z: 16.6 },
          },
          {
            //Kuchynka - horni stena
            type: "partition",
            start: { x: 3.25, z: 16.6 },
            end: { x: -0.75, z: 16.6 },
          },
          {
            //Uklid - leva stena
            type: "partition",
            start: { x: 3.4, z: 16.6 },
            end: { x: 3.4, z: 14.3 },
          },
          {
            //Uklid - spodni stena
            type: "partition",
            start: { x: 3.4, z: 14.3 },
            end: { x: 4.5, z: 14.3 },
          },
          {
            //Uklid - prava stena
            type: "partition",
            start: { x: 4.5, z: 14.3 },
            end: { x: 4.5, z: 16.6 },
          },
          {
            //Uklid - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 16.6 },
            end: { x: 3.4, z: 16.6 },
          },
          {
            //Empty1 - leva stena
            type: "partition",
            start: { x: -0.75, z: 14 },
            end: { x: -0.75, z: 11.9 },
          },
          {
            //Empty1 - spodni stena
            type: "partition",
            start: { x: -0.75, z: 11.9 },
            end: { x: 4.5, z: 11.9 },
          },
          {
            //Empty1 - prava stena
            type: "partition",
            start: { x: 4.5, z: 11.9 },
            end: { x: 4.5, z: 14 },
          },
          {
            //Empty1 - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 14 },
            end: { x: -0.75, z: 14 },
          },
          {
            //V1 - leva strena
            type: "partition",
            start: { x: -0.75, z: 11.7 },
            end: { x: -0.75, z: 9.8 },
          },
          {
            //V1 - spodni strena
            type: "partition",
            start: { x: -0.75, z: 9.8 },
            end: { x: 0.965, z: 9.8 },
          },
          {
            //V1 - prava strena
            type: "partition",
            start: { x: 0.965, z: 9.8 },
            end: { x: 0.965, z: 11.7 },
          },
          {
            //V1 - vrchni strena
            type: "partition",
            start: { x: 0.965, z: 11.7 },
            end: { x: -0.75, z: 11.7 },
          },
          {
            //V2 - leva strena
            type: "partition",
            start: { x: 1.125, z: 11.7 },
            end: { x: 1.125, z: 9.8 },
          },
          {
            //V2 - spodni strena
            type: "partition",
            start: { x: 1.125, z: 9.8 },
            end: { x: 2.735, z: 9.8 },
          },
          {
            //V2 - prava strena
            type: "partition",
            start: { x: 2.735, z: 9.8 },
            end: { x: 2.735, z: 11.7 },
          },
          {
            //V2 - vrchni strena
            type: "partition",
            start: { x: 2.735, z: 11.7 },
            end: { x: 1.125, z: 11.7 },
          },
          {
            //V3 - leva strena
            type: "partition",
            start: { x: 2.925, z: 11.7 },
            end: { x: 2.925, z: 9.8 },
          },
          {
            //V3 - spodni strena
            type: "partition",
            start: { x: 2.925, z: 9.8 },
            end: { x: 4.545, z: 9.8 },
          },
          {
            //V3 - prava strena
            type: "partition",
            start: { x: 4.545, z: 9.8 },
            end: { x: 4.545, z: 11.7 },
          },
          {
            //V3 - vrchni strena
            type: "partition",
            start: { x: 4.545, z: 11.7 },
            end: { x: 2.925, z: 11.7 },
          },
          {
            //Empty2 - leva strena
            type: "partition",
            start: { x: 5.02, z: 16.6 },
            end: { x: 5.02, z: 15.3 },
          },
          {
            //Empty2 - spodni strena
            type: "partition",
            start: { x: 5.02, z: 15.3 },
            end: { x: 9.62, z: 15.3 },
          },
          {
            //Empty2 - prava strena
            type: "partition",
            start: { x: 9.62, z: 15.3 },
            end: { x: 9.62, z: 16.6 },
          },
          {
            //Empty2 - vrchni strena
            type: "partition",
            start: { x: 9.62, z: 16.6 },
            end: { x: 5.02, z: 16.6 },
          },
          {
            //WC muzi - leva stena
            type: "partition",
            start: { x: 5.02, z: 15.1 },
            end: { x: 5.02, z: 9.8 },
          },
          {
            //WC muzi - spodni stena
            type: "partition",
            start: { x: 5.02, z: 9.8 },
            end: { x: 7.17, z: 9.8 },
          },
          {
            //WC muzi - prava stena
            type: "partition",
            start: { x: 7.17, z: 9.8 },
            end: { x: 7.17, z: 15.1 },
          },
          {
            //WC muzi - vrchni stena
            type: "partition",
            start: { x: 7.17, z: 15.1 },
            end: { x: 5.02, z: 15.1 },
          },
          {
            //WC zeny - leva stena 1
            type: "partition",
            start: { x: 7.42, z: 15.1 },
            end: { x: 7.42, z: 13.3 },
          },
          {
            //WC zeny - spojeni leve steny
            type: "partition",
            start: { x: 7.42, z: 13.3 },
            end: { x: 7.37, z: 13.3 },
          },
          {
            //WC zeny - leva stena 2
            type: "partition",
            start: { x: 7.37, z: 13.3 },
            end: { x: 7.37, z: 9.8 },
          },
          {
            //WC zeny - spodni stena
            type: "partition",
            start: { x: 7.37, z: 9.8 },
            end: { x: 9.62, z: 9.8 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 9.8 },
            end: { x: 9.62, z: 15.1 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 15.1 },
            end: { x: 7.37, z: 15.1 },
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: -10.2 },
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 10.2, z: -10.2 },
            end: { x: 6.6, z: -10.2 },
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 6.6, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - leva
            type: "partition",
            start: { x: 7.15, z: -10.65 },
            end: { x: 7.15, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - nahore
            type: "partition",
            start: { x: 7.15, z: -10.65 },
            end: { x: 9.65, z: -10.65 },
          },
          {
            //Vnitrni Schodiste01 - prava
            type: "partition",
            start: { x: 9.65, z: -10.65 },
            end: { x: 9.65, z: -16.8 },
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
        ],
      },
      rooms: [
        {
          name: "TŘÍDÍCÍ PROSTOR",
          bounds: { minX: -16.9, minZ: 10.3, maxX: -10.3, maxZ: 16.9 },
        },
        {
          name: "SCHODIŠTĚ (JÁDRO C)",
          bounds: { minX: -9.7, minZ: 10.4, maxX: -7.2, maxZ: 16.5 },
        },
        {
          name: "ROZVODNA SLP",
          bounds: { minX: -6.6, minZ: 11.8, maxX: -4, maxZ: 13.4 },
        },
        {
          name: "WC ZAMĚSTNANCI",
          bounds: { minX: -6.6, minZ: 9.9, maxX: -4, maxZ: 11.7 },
        },
        {
          name: "MANIPULAČNÍ PROSTOR",
          bounds: { minX: -3.8, minZ: 9.9, maxX: -1.1, maxZ: 16.4 },
        },
        {
          name: "PODATELNA",
          bounds: { minX: -0.7, minZ: 14.1, maxX: 3.3, maxZ: 16.4 },
        },
        {
          name: "WC MUŽI",
          bounds: { minX: 5, minZ: 9.9, maxX: 7.2, maxZ: 14.9 },
        },
        {
          name: "WC ŽENY",
          bounds: { minX: 7.4, minZ: 9.9, maxX: 9.6, maxZ: 14.9 },
        },
        {
          name: "SCHODIŠTĚ",
          bounds: { minX: -0.7, minZ: -4.9, maxX: 4.1, maxZ: 4.7 },
        },
        {
          name: "SCHODIŠTĚ (JÁDRO B)",
          bounds: { minX: 6.7, minZ: -16.9, maxX: 10.3, maxZ: -10.3 },
        },
        {
          name: "ZÁDVEŘÍ",
          bounds: { minX: -9, minZ: -16.9, maxX: -0.6, maxZ: -13.9 },
        },
        {
          name: "VRÁTNICE",
          bounds: { minX: -0.6, minZ: -16.9, maxX: 2.9, maxZ: -13.9 },
        },
        {
          name: "ROZVADĚČE",
          bounds: { minX: -16.9, minZ: -9.9, maxX: -11.9, maxZ: -8.3 },
        },
        {
          name: "ROZDĚLOVAČE PODLAHOVÉHO TOPENÍ",
          bounds: { minX: -11.9, minZ: -11.9, maxX: -10.3, maxZ: -8.5 },
        },
      ],
      temperature_data: [0],
      wifi_signal_data: [0],
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
            radius: 0.4,
          },

          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: -10.2 },
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 10.2, z: -10.2 },
            end: { x: 6.6, z: -10.2 },
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 6.6, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - leva
            type: "partition",
            start: { x: 7.15, z: -10.46 },
            end: { x: 7.15, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - nahore
            type: "partition",
            start: { x: 7.15, z: -10.46 },
            end: { x: 9.65, z: -10.46 },
          },
          {
            //Vnitrni Schodiste01 - prava
            type: "partition",
            start: { x: 9.65, z: -10.46 },
            end: { x: 9.65, z: -16.8 },
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
            //2.13 - dole
            type: "partition",
            start: { x: -4.88, z: -15.6 },
            end: { x: -2.48, z: -15.6 },
          },
          {
            //2.13 - nahore
            type: "partition",
            start: { x: -4.88, z: -11.4 },
            end: { x: -2.48, z: -11.4 },
          },
          {
            //2.13 - vlevo
            type: "partition",
            start: { x: -4.88, z: -11.4 },
            end: { x: -4.88, z: -15.6 },
          },
          {
            //2.13 - vpravo
            type: "partition",
            start: { x: -2.48, z: -11.4 },
            end: { x: -2.48, z: -15.6 },
          },
          //2.14 - vlevo
          {
            type: "partition",
            start: { x: -10.2, z: -4.8 },
            end: { x: -10.2, z: -0.4 },
          },
          //2.14 - vpravo
          {
            type: "partition",
            start: { x: -6, z: -4.8 },
            end: { x: -6, z: -0.4 },
          },
          //2.14 - dole
          {
            type: "partition",
            start: { x: -6, z: -4.8 },
            end: { x: -10.2, z: -4.8 },
          },
          //2.14 - nahore
          {
            type: "partition",
            start: { x: -6, z: -0.4 },
            end: { x: -10.2, z: -0.4 },
          },
          {
            //schodiste11 vnejsi leva
            type: "partition",
            start: { x: -0.6, z: 4.8 },
            end: { x: -0.6, z: -4.8 },
          },
          {
            //schodiste11 vnejsi spodni
            type: "partition",
            start: { x: -0.6, z: -4.8 },
            end: { x: 4.2, z: -4.8 },
          },
          {
            //schodiste11 vnejsi prava
            type: "partition",
            start: { x: 4.2, z: -4.8 },
            end: { x: 4.2, z: 4.8 },
          },
          {
            //schodiste11 vnejsi prava
            type: "partition",
            start: { x: 4.2, z: 4.8 },
            end: { x: -0.6, z: 4.8 },
          },
          {
            //schodiste11 vnitrni leva
            type: "partition",
            start: { x: 1.7, z: 2.37 },
            end: { x: 1.7, z: -2.37 },
          },
          {
            //schodiste11 vnitrni spodni
            type: "partition",
            start: { x: 1.7, z: -2.37 },
            end: { x: 1.9, z: -2.37 },
          },
          {
            //schodiste11 vnitrni prava
            type: "partition",
            start: { x: 1.9, z: -2.37 },
            end: { x: 1.9, z: 2.37 },
          },
          {
            //schodiste11 vnitrni vrchni
            type: "partition",
            start: { x: 1.9, z: 2.37 },
            end: { x: 1.7, z: 2.37 },
          },
          //2.18 vlevo
          {
            type: "partition",
            start: { x: 8.3, z: 4.8 },
            end: { x: 8.3, z: 0.6 },
          },
          //2.18 vpravo
          {
            type: "partition",
            start: { x: 5.9, z: 4.8 },
            end: { x: 5.9, z: 0.6 },
          },
          //2.18 dole
          {
            type: "partition",
            start: { x: 5.9, z: 0.6 },
            end: { x: 8.3, z: 0.6 },
          },
          //2.18 nahore
          {
            type: "partition",
            start: { x: 5.9, z: 4.8 },
            end: { x: 8.3, z: 4.8 },
          },
          {
            //2.15 vlevo
            type: "partition",
            start: { x: -15.6, z: 13.8 },
            end: { x: -15.6, z: 9.6 },
          },
          {
            //2.15 vpravo
            type: "partition",
            start: { x: -11.4, z: 13.8 },
            end: { x: -11.4, z: 9.6 },
          },
          {
            //2.15 dole
            type: "partition",
            start: { x: -15.6, z: 9.6 },
            end: { x: -11.4, z: 9.6 },
          },
          {
            //2.15 nahore
            type: "partition",
            start: { x: -15.6, z: 13.8 },
            end: { x: -11.4, z: 13.8 },
          },
          {
            //vrsek - leva stena
            type: "partition",
            start: { x: -10.2, z: 16.8 },
            end: { x: -10.2, z: 9.6 },
          },
          {
            //vrsek - spodni stena
            type: "partition",
            start: { x: -10.2, z: 9.6 },
            end: { x: 10.2, z: 9.6 },
          },
          {
            //vrsek - prava stena
            type: "partition",
            start: { x: 10.2, z: 9.6 },
            end: { x: 10.2, z: 16.8 },
          },
          {
            //Schodiste02 - leva stena
            type: "partition",
            start: { x: -9.65, z: 16.6 },
            end: { x: -9.65, z: 9.8 },
          },
          {
            //Schodiste02 - spodni stena
            type: "partition",
            start: { x: -9.65, z: 9.8 },
            end: { x: -7.15, z: 9.8 },
          },
          {
            //Schodiste02 - prava stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -7.15, z: 9.8 },
          },
          {
            //Schodiste02 - vrchni stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -9.65, z: 16.6 },
          },
          {
            //V4 - leva stena
            type: "partition",
            start: { x: -6.6, z: 16.6 },
            end: { x: -6.6, z: 15.05 },
          },
          {
            //V4 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 15.05 },
            end: { x: -4.05, z: 15.05 },
          },
          {
            //V4 - prava stena
            type: "partition",
            start: { x: -4.05, z: 15.05 },
            end: { x: -4.05, z: 16.6 },
          },
          {
            //V4 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 16.6 },
            end: { x: -6.6, z: 16.6 },
          },
          {
            //V5 - leva stena
            type: "partition",
            start: { x: -6.6, z: 14.85 },
            end: { x: -6.6, z: 13.45 },
          },
          {
            //V5 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 13.45 },
            end: { x: -4.05, z: 13.45 },
          },
          {
            //V5 - prava stena
            type: "partition",
            start: { x: -4.05, z: 13.45 },
            end: { x: -4.05, z: 14.85 },
          },
          {
            //V5 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 14.85 },
            end: { x: -6.6, z: 14.85 },
          },
          {
            //RozvodnaSLP - leva stena
            type: "partition",
            start: { x: -6.6, z: 13.3 },
            end: { x: -6.6, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -6.6, z: 11.75 },
            end: { x: -4.05, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 11.75 },
            end: { x: -4.05, z: 13.3 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 13.3 },
            end: { x: -6.6, z: 13.3 },
          },
          {
            //WC zam - leva stena
            type: "partition",
            start: { x: -6.6, z: 11.6 },
            end: { x: -6.6, z: 9.8 },
          },
          {
            //WC zam - spodni stena
            type: "partition",
            start: { x: -6.6, z: 9.8 },
            end: { x: -4.05, z: 9.8 },
          },
          {
            //WC zam - prava stena
            type: "partition",
            start: { x: -4.05, z: 9.8 },
            end: { x: -4.05, z: 11.6 },
          },
          {
            //WC zam - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 11.6 },
            end: { x: -6.6, z: 11.6 },
          },
          {
            //mp prostor - leva stena
            type: "partition",
            start: { x: -3.85, z: 16.6 },
            end: { x: -3.85, z: 9.8 },
          },
          {
            //mp prostor - spodni stena
            type: "partition",
            start: { x: -3.85, z: 9.8 },
            end: { x: -1.15, z: 9.8 },
          },
          {
            //mp prostor - prava stena
            type: "partition",
            start: { x: -1.15, z: 9.8 },
            end: { x: -1.15, z: 16.6 },
          },
          {
            //mp prostor - vrchni stena
            type: "partition",
            start: { x: -1.15, z: 16.6 },
            end: { x: -3.85, z: 16.6 },
          },
          {
            //Kuchynka - leva stena
            type: "partition",
            start: { x: -0.75, z: 16.6 },
            end: { x: -0.75, z: 14.3 },
          },
          {
            //Kuchynka - spodni stena
            type: "partition",
            start: { x: -0.75, z: 14.3 },
            end: { x: 3.25, z: 14.3 },
          },
          {
            //Kuchynka - prava stena
            type: "partition",
            start: { x: 3.25, z: 14.3 },
            end: { x: 3.25, z: 16.6 },
          },
          {
            //Kuchynka - horni stena
            type: "partition",
            start: { x: 3.25, z: 16.6 },
            end: { x: -0.75, z: 16.6 },
          },
          {
            //Uklid - leva stena
            type: "partition",
            start: { x: 3.4, z: 16.6 },
            end: { x: 3.4, z: 14.3 },
          },
          {
            //Uklid - spodni stena
            type: "partition",
            start: { x: 3.4, z: 14.3 },
            end: { x: 4.5, z: 14.3 },
          },
          {
            //Uklid - prava stena
            type: "partition",
            start: { x: 4.5, z: 14.3 },
            end: { x: 4.5, z: 16.6 },
          },
          {
            //Uklid - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 16.6 },
            end: { x: 3.4, z: 16.6 },
          },
          {
            //Empty1 - leva stena
            type: "partition",
            start: { x: -0.75, z: 14 },
            end: { x: -0.75, z: 11.9 },
          },
          {
            //Empty1 - spodni stena
            type: "partition",
            start: { x: -0.75, z: 11.9 },
            end: { x: 4.5, z: 11.9 },
          },
          {
            //Empty1 - prava stena
            type: "partition",
            start: { x: 4.5, z: 11.9 },
            end: { x: 4.5, z: 14 },
          },
          {
            //Empty1 - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 14 },
            end: { x: -0.75, z: 14 },
          },
          {
            //V1 - leva strena
            type: "partition",
            start: { x: -0.75, z: 11.7 },
            end: { x: -0.75, z: 9.8 },
          },
          {
            //V1 - spodni strena
            type: "partition",
            start: { x: -0.75, z: 9.8 },
            end: { x: 0.965, z: 9.8 },
          },
          {
            //V1 - prava strena
            type: "partition",
            start: { x: 0.965, z: 9.8 },
            end: { x: 0.965, z: 11.7 },
          },
          {
            //V1 - vrchni strena
            type: "partition",
            start: { x: 0.965, z: 11.7 },
            end: { x: -0.75, z: 11.7 },
          },
          {
            //V2 - leva strena
            type: "partition",
            start: { x: 1.125, z: 11.7 },
            end: { x: 1.125, z: 9.8 },
          },
          {
            //V2 - spodni strena
            type: "partition",
            start: { x: 1.125, z: 9.8 },
            end: { x: 2.735, z: 9.8 },
          },
          {
            //V2 - prava strena
            type: "partition",
            start: { x: 2.735, z: 9.8 },
            end: { x: 2.735, z: 11.7 },
          },
          {
            //V2 - vrchni strena
            type: "partition",
            start: { x: 2.735, z: 11.7 },
            end: { x: 1.125, z: 11.7 },
          },
          {
            //V3 - leva strena
            type: "partition",
            start: { x: 2.925, z: 11.7 },
            end: { x: 2.925, z: 9.8 },
          },
          {
            //V3 - spodni strena
            type: "partition",
            start: { x: 2.925, z: 9.8 },
            end: { x: 4.545, z: 9.8 },
          },
          {
            //V3 - prava strena
            type: "partition",
            start: { x: 4.545, z: 9.8 },
            end: { x: 4.545, z: 11.7 },
          },
          {
            //V3 - vrchni strena
            type: "partition",
            start: { x: 4.545, z: 11.7 },
            end: { x: 2.925, z: 11.7 },
          },
          {
            //Empty2 - leva strena
            type: "partition",
            start: { x: 5.02, z: 16.6 },
            end: { x: 5.02, z: 15.3 },
          },
          {
            //Empty2 - spodni strena
            type: "partition",
            start: { x: 5.02, z: 15.3 },
            end: { x: 9.62, z: 15.3 },
          },
          {
            //Empty2 - prava strena
            type: "partition",
            start: { x: 9.62, z: 15.3 },
            end: { x: 9.62, z: 16.6 },
          },
          {
            //Empty2 - vrchni strena
            type: "partition",
            start: { x: 9.62, z: 16.6 },
            end: { x: 5.02, z: 16.6 },
          },
          {
            //WC muzi - leva stena
            type: "partition",
            start: { x: 5.02, z: 15.1 },
            end: { x: 5.02, z: 9.8 },
          },
          {
            //WC muzi - spodni stena
            type: "partition",
            start: { x: 5.02, z: 9.8 },
            end: { x: 7.17, z: 9.8 },
          },
          {
            //WC muzi - prava stena
            type: "partition",
            start: { x: 7.17, z: 9.8 },
            end: { x: 7.17, z: 15.1 },
          },
          {
            //WC muzi - vrchni stena
            type: "partition",
            start: { x: 7.17, z: 15.1 },
            end: { x: 5.02, z: 15.1 },
          },
          {
            //WC zeny - leva stena 1
            type: "partition",
            start: { x: 7.42, z: 15.1 },
            end: { x: 7.42, z: 13.3 },
          },
          {
            //WC zeny - spojeni leve steny
            type: "partition",
            start: { x: 7.42, z: 13.3 },
            end: { x: 7.37, z: 13.3 },
          },
          {
            //WC zeny - leva stena 2
            type: "partition",
            start: { x: 7.37, z: 13.3 },
            end: { x: 7.37, z: 9.8 },
          },
          {
            //WC zeny - spodni stena
            type: "partition",
            start: { x: 7.37, z: 9.8 },
            end: { x: 9.62, z: 9.8 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 9.8 },
            end: { x: 9.62, z: 15.1 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 15.1 },
            end: { x: 7.37, z: 15.1 },
          },
        ],
      },
      rooms: [
        {
          name: "SCHODIŠTĚ (JÁDRO C)",
          bounds: { minX: -9.7, minZ: 10.4, maxX: -7.2, maxZ: 16.5 },
        },
        {
          name: "ROZVADĚČE",
          bounds: { minX: -16.9, minZ: -9.9, maxX: -11.9, maxZ: -8.3 },
        },
        {
          name: "ROZDĚLOVAČE PODLAHOVÉHO TOPENÍ",
          bounds: { minX: -11.9, minZ: -11.9, maxX: -10.3, maxZ: -8.5 },
        },
        {
          name: "SCHODIŠTĚ",
          bounds: { minX: -0.7, minZ: -4.9, maxX: 4.1, maxZ: 4.7 },
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 4 OSOBY",
          bounds: { minX: -5, minZ: -15.7, maxX: -2.6, maxZ: -11.5 },
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 8 OSOB",
          bounds: { minX: -10.3, minZ: -4.9, maxX: -6.1, maxZ: -0.7 },
        },
        {
          name: "SCHODIŠTĚ (JÁDRO B)",
          bounds: { minX: 6.7, minZ: -16.9, maxX: 10.3, maxZ: -10.3 },
        },
        {
          name: "VÝSTAVA MARKERSPACE",
          bounds: { minX: 5.9, minZ: 0.5, maxX: 8.3, maxZ: 4.7 },
        },
        {
          name: "MANIPULAČNÍ PROSTOR",
          bounds: { minX: -3.8, minZ: 9.9, maxX: -1.1, maxZ: 16.4 },
        },

        {
          name: "KUCHYŇKA",
          bounds: { minX: -0.7, minZ: 14.1, maxX: 3.3, maxZ: 16.4 },
        },
        {
          name: "WC MUŽI",
          bounds: { minX: 5, minZ: 9.9, maxX: 7.2, maxZ: 14.9 },
        },
        {
          name: "WC ŽENY",
          bounds: { minX: 7.4, minZ: 9.9, maxX: 9.6, maxZ: 14.9 },
        },
        {
          name: "ÚKLID",
          bounds: { minX: 3.3, minZ: 14.1, maxX: 4.5, maxZ: 16.4 },
        },
      ],
      temperature_data: [0],
      wifi_signal_data: [0],
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
            //vrsek - leva stena
            type: "partition",
            start: { x: -10.2, z: 16.8 },
            end: { x: -10.2, z: 9.6 },
          },
          {
            //vrsek - spodni stena
            type: "partition",
            start: { x: -10.2, z: 9.6 },
            end: { x: 10.2, z: 9.6 },
          },
          {
            //vrsek - prava stena
            type: "partition",
            start: { x: 10.2, z: 8.7 },
            end: { x: 10.2, z: 16.8 },
          },
          {
            //prava strana vrchni stena
            type: "partition",
            start: { x: 10.2, z: 8.7 },
            end: { x: 13.5, z: 8.7 },
          },
          {
            //prava strana spodni stena
            type: "partition",
            start: { x: 10.2, z: 7.6 },
            end: { x: 13.5, z: 7.6 },
          },
          {
            //prava strana stena vodorovna 2
            type: "partition",
            start: { x: 10.2, z: 7.6 },
            end: { x: 10.2, z: -10.2 },
          },
          {
            //3.11 leva stena
            type: "partition",
            start: { x: -15.6, z: 4.6 },
            end: { x: -15.6, z: 0.4 },
          },
          {
            //3.11 spodni stena
            type: "partition",
            start: { x: -15.6, z: 0.4 },
            end: { x: -11.4, z: 0.4 },
          },
          {
            //3.11 prava stena
            type: "partition",
            start: { x: -11.4, z: 0.4 },
            end: { x: -11.4, z: 4.6 },
          },
          {
            //3.11 vrchni stena
            type: "partition",
            start: { x: -11.4, z: 4.6 },
            end: { x: -15.6, z: 4.6 },
          },
          {
            //3.12 leva strana
            type: "partition",
            start: { x: -4.8, z: -0.8 },
            end: { x: -4.8, z: -5 },
          },
          {
            //3.12 spodni strana
            type: "partition",
            start: { x: -4.8, z: -5 },
            end: { x: -2.4, z: -5 },
          },
          {
            //3.12 prava strana
            type: "partition",
            start: { x: -2.4, z: -5 },
            end: { x: -2.4, z: -0.8 },
          },
          {
            //3.12 vrchni strana
            type: "partition",
            start: { x: -2.4, z: -0.8 },
            end: { x: -4.8, z: -0.8 },
          },
          {
            //Schodiste02 - leva stena
            type: "partition",
            start: { x: -9.65, z: 16.6 },
            end: { x: -9.65, z: 9.8 },
          },
          {
            //Schodiste02 - spodni stena
            type: "partition",
            start: { x: -9.65, z: 9.8 },
            end: { x: -7.15, z: 9.8 },
          },
          {
            //Schodiste02 - prava stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -7.15, z: 9.8 },
          },
          {
            //Schodiste02 - vrchni stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -9.65, z: 16.6 },
          },
          {
            //V4 - leva stena
            type: "partition",
            start: { x: -6.6, z: 16.6 },
            end: { x: -6.6, z: 15.05 },
          },
          {
            //V4 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 15.05 },
            end: { x: -4.05, z: 15.05 },
          },
          {
            //V4 - prava stena
            type: "partition",
            start: { x: -4.05, z: 15.05 },
            end: { x: -4.05, z: 16.6 },
          },
          {
            //V4 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 16.6 },
            end: { x: -6.6, z: 16.6 },
          },
          {
            //V5 - leva stena
            type: "partition",
            start: { x: -6.6, z: 14.85 },
            end: { x: -6.6, z: 13.45 },
          },
          {
            //V5 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 13.45 },
            end: { x: -4.05, z: 13.45 },
          },
          {
            //V5 - prava stena
            type: "partition",
            start: { x: -4.05, z: 13.45 },
            end: { x: -4.05, z: 14.85 },
          },
          {
            //V5 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 14.85 },
            end: { x: -6.6, z: 14.85 },
          },
          {
            //RozvodnaSLP - leva stena
            type: "partition",
            start: { x: -6.6, z: 13.3 },
            end: { x: -6.6, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -6.6, z: 11.75 },
            end: { x: -4.05, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 11.75 },
            end: { x: -4.05, z: 13.3 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 13.3 },
            end: { x: -6.6, z: 13.3 },
          },
          {
            //WC zam - leva stena
            type: "partition",
            start: { x: -6.6, z: 11.6 },
            end: { x: -6.6, z: 9.8 },
          },
          {
            //WC zam - spodni stena
            type: "partition",
            start: { x: -6.6, z: 9.8 },
            end: { x: -4.05, z: 9.8 },
          },
          {
            //WC zam - prava stena
            type: "partition",
            start: { x: -4.05, z: 9.8 },
            end: { x: -4.05, z: 11.6 },
          },
          {
            //WC zam - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 11.6 },
            end: { x: -6.6, z: 11.6 },
          },
          {
            //mp prostor - leva stena
            type: "partition",
            start: { x: -3.85, z: 16.6 },
            end: { x: -3.85, z: 9.8 },
          },
          {
            //mp prostor - spodni stena
            type: "partition",
            start: { x: -3.85, z: 9.8 },
            end: { x: -1.15, z: 9.8 },
          },
          {
            //mp prostor - prava stena
            type: "partition",
            start: { x: -1.15, z: 9.8 },
            end: { x: -1.15, z: 16.6 },
          },
          {
            //mp prostor - vrchni stena
            type: "partition",
            start: { x: -1.15, z: 16.6 },
            end: { x: -3.85, z: 16.6 },
          },
          {
            //Kuchynka - leva stena
            type: "partition",
            start: { x: -0.75, z: 16.6 },
            end: { x: -0.75, z: 14.3 },
          },
          {
            //Kuchynka - spodni stena
            type: "partition",
            start: { x: -0.75, z: 14.3 },
            end: { x: 3.25, z: 14.3 },
          },
          {
            //Kuchynka - prava stena
            type: "partition",
            start: { x: 3.25, z: 14.3 },
            end: { x: 3.25, z: 16.6 },
          },
          {
            //Kuchynka - horni stena
            type: "partition",
            start: { x: 3.25, z: 16.6 },
            end: { x: -0.75, z: 16.6 },
          },
          {
            //Uklid - leva stena
            type: "partition",
            start: { x: 3.4, z: 16.6 },
            end: { x: 3.4, z: 14.3 },
          },
          {
            //Uklid - spodni stena
            type: "partition",
            start: { x: 3.4, z: 14.3 },
            end: { x: 4.5, z: 14.3 },
          },
          {
            //Uklid - prava stena
            type: "partition",
            start: { x: 4.5, z: 14.3 },
            end: { x: 4.5, z: 16.6 },
          },
          {
            //Uklid - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 16.6 },
            end: { x: 3.4, z: 16.6 },
          },
          {
            //Empty1 - leva stena
            type: "partition",
            start: { x: -0.75, z: 14 },
            end: { x: -0.75, z: 11.9 },
          },
          {
            //Empty1 - spodni stena
            type: "partition",
            start: { x: -0.75, z: 11.9 },
            end: { x: 4.5, z: 11.9 },
          },
          {
            //Empty1 - prava stena
            type: "partition",
            start: { x: 4.5, z: 11.9 },
            end: { x: 4.5, z: 14 },
          },
          {
            //Empty1 - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 14 },
            end: { x: -0.75, z: 14 },
          },
          {
            //V1 - leva strena
            type: "partition",
            start: { x: -0.75, z: 11.7 },
            end: { x: -0.75, z: 9.8 },
          },
          {
            //V1 - spodni strena
            type: "partition",
            start: { x: -0.75, z: 9.8 },
            end: { x: 0.965, z: 9.8 },
          },
          {
            //V1 - prava strena
            type: "partition",
            start: { x: 0.965, z: 9.8 },
            end: { x: 0.965, z: 11.7 },
          },
          {
            //V1 - vrchni strena
            type: "partition",
            start: { x: 0.965, z: 11.7 },
            end: { x: -0.75, z: 11.7 },
          },
          {
            //V2 - leva strena
            type: "partition",
            start: { x: 1.125, z: 11.7 },
            end: { x: 1.125, z: 9.8 },
          },
          {
            //V2 - spodni strena
            type: "partition",
            start: { x: 1.125, z: 9.8 },
            end: { x: 2.735, z: 9.8 },
          },
          {
            //V2 - prava strena
            type: "partition",
            start: { x: 2.735, z: 9.8 },
            end: { x: 2.735, z: 11.7 },
          },
          {
            //V2 - vrchni strena
            type: "partition",
            start: { x: 2.735, z: 11.7 },
            end: { x: 1.125, z: 11.7 },
          },
          {
            //V3 - leva strena
            type: "partition",
            start: { x: 2.925, z: 11.7 },
            end: { x: 2.925, z: 9.8 },
          },
          {
            //V3 - spodni strena
            type: "partition",
            start: { x: 2.925, z: 9.8 },
            end: { x: 4.545, z: 9.8 },
          },
          {
            //V3 - prava strena
            type: "partition",
            start: { x: 4.545, z: 9.8 },
            end: { x: 4.545, z: 11.7 },
          },
          {
            //V3 - vrchni strena
            type: "partition",
            start: { x: 4.545, z: 11.7 },
            end: { x: 2.925, z: 11.7 },
          },
          {
            //Empty2 - leva strena
            type: "partition",
            start: { x: 5.02, z: 16.6 },
            end: { x: 5.02, z: 15.3 },
          },
          {
            //Empty2 - spodni strena
            type: "partition",
            start: { x: 5.02, z: 15.3 },
            end: { x: 9.62, z: 15.3 },
          },
          {
            //Empty2 - prava strena
            type: "partition",
            start: { x: 9.62, z: 15.3 },
            end: { x: 9.62, z: 16.6 },
          },
          {
            //Empty2 - vrchni strena
            type: "partition",
            start: { x: 9.62, z: 16.6 },
            end: { x: 5.02, z: 16.6 },
          },
          {
            //WC muzi - leva stena
            type: "partition",
            start: { x: 5.02, z: 15.1 },
            end: { x: 5.02, z: 9.8 },
          },
          {
            //WC muzi - spodni stena
            type: "partition",
            start: { x: 5.02, z: 9.8 },
            end: { x: 7.17, z: 9.8 },
          },
          {
            //WC muzi - prava stena
            type: "partition",
            start: { x: 7.17, z: 9.8 },
            end: { x: 7.17, z: 15.1 },
          },
          {
            //WC muzi - vrchni stena
            type: "partition",
            start: { x: 7.17, z: 15.1 },
            end: { x: 5.02, z: 15.1 },
          },
          {
            //WC zeny - leva stena 1
            type: "partition",
            start: { x: 7.42, z: 15.1 },
            end: { x: 7.42, z: 13.3 },
          },
          {
            //WC zeny - spojeni leve steny
            type: "partition",
            start: { x: 7.42, z: 13.3 },
            end: { x: 7.37, z: 13.3 },
          },
          {
            //WC zeny - leva stena 2
            type: "partition",
            start: { x: 7.37, z: 13.3 },
            end: { x: 7.37, z: 9.8 },
          },
          {
            //WC zeny - spodni stena
            type: "partition",
            start: { x: 7.37, z: 9.8 },
            end: { x: 9.62, z: 9.8 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 9.8 },
            end: { x: 9.62, z: 15.1 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 15.1 },
            end: { x: 7.37, z: 15.1 },
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: -10.2 },
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 10.2, z: -10.2 },
            end: { x: 6.6, z: -10.2 },
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 6.6, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - leva
            type: "partition",
            start: { x: 7.15, z: -10.46 },
            end: { x: 7.15, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - nahore
            type: "partition",
            start: { x: 7.15, z: -10.46 },
            end: { x: 9.65, z: -10.46 },
          },
          {
            //Vnitrni Schodiste01 - prava
            type: "partition",
            start: { x: 9.65, z: -10.46 },
            end: { x: 9.65, z: -16.8 },
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
            //schody tocite vpravo nahore vnejsi
            type: "circular",
            center: { x: 13.5, z: 7.2 },
            radius: 1.515,
          },
          {
            //schody tocite vpravo nahore vnitrni
            type: "circular",
            center: { x: 13.5, z: 7.2 },
            radius: 0.4,
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
            radius: 0.4,
          },
        ],
      },
      rooms: [
        {
          name: "SCHODIŠTĚ (JÁDRO C)",
          bounds: { minX: -9.7, minZ: 10.4, maxX: -7.2, maxZ: 16.5 },
        },
        {
          name: "ROZVODNA SLP",
          bounds: { minX: -6.6, minZ: 11.8, maxX: -4, maxZ: 13.4 },
        },
        {
          name: "WC ZAMĚSTNANCI",
          bounds: { minX: -6.6, minZ: 9.9, maxX: -4, maxZ: 11.7 },
        },
        {
          name: "MANIPULAČNÍ PROSTOR",
          bounds: { minX: -3.8, minZ: 9.9, maxX: -1.1, maxZ: 16.4 },
        },
        {
          name: "KUCHYŇKA",
          bounds: { minX: -0.7, minZ: 14.1, maxX: 3.3, maxZ: 16.4 },
        },
        {
          name: "ÚKLID",
          bounds: { minX: 3.3, minZ: 14.1, maxX: 4.5, maxZ: 16.4 },
        },
        {
          name: "WC MUŽI",
          bounds: { minX: 5, minZ: 9.9, maxX: 7.2, maxZ: 14.9 },
        },
        {
          name: "WC ŽENY",
          bounds: { minX: 7.4, minZ: 9.9, maxX: 9.6, maxZ: 14.9 },
        },
        {
          name: "SCHODIŠTĚ (JÁDRO B)",
          bounds: { minX: 6.7, minZ: -16.9, maxX: 10.3, maxZ: -10.3 },
        },
        {
          name: "ROZVADĚČE",
          bounds: { minX: -16.9, minZ: -9.9, maxX: -11.9, maxZ: -8.3 },
        },
        {
          name: "ROZDĚLOVAČE PODLAHOVÉHO TOPENÍ",
          bounds: { minX: -11.9, minZ: -11.9, maxX: -10.3, maxZ: -8.5 },
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 8 OSOB",
          bounds: { minX: -15.7, minZ: 0.7, maxX: -11.5, maxZ: 4.9 },
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 4 OSOBY",
          bounds: { minX: -4.9, minZ: -4.9, maxX: -0.7, maxZ: -0.7 },
        },
      ],
      temperature_data: [0],
      wifi_signal_data: [0],
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
            //Schodiste01 - leva
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: -10.2 },
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 10.2, z: -10.2 },
            end: { x: 6.6, z: -10.2 },
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 6.6, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - leva
            type: "partition",
            start: { x: 7.15, z: -10.46 },
            end: { x: 7.15, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - nahore
            type: "partition",
            start: { x: 7.15, z: -10.46 },
            end: { x: 9.65, z: -10.46 },
          },
          {
            //Vnitrni Schodiste01 - prava
            type: "partition",
            start: { x: 9.65, z: -10.46 },
            end: { x: 9.65, z: -16.8 },
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
            //vrsek - leva stena
            type: "partition",
            start: { x: -10.2, z: 16.8 },
            end: { x: -10.2, z: 9.6 },
          },
          {
            //vrsek - spodni stena
            type: "partition",
            start: { x: -10.2, z: 9.6 },
            end: { x: 10.2, z: 9.6 },
          },
          {
            //vrsek - prava stena
            type: "partition",
            start: { x: 10.2, z: 9.6 },
            end: { x: 10.2, z: 16.8 },
          },
          {
            //Schodiste02 - leva stena
            type: "partition",
            start: { x: -9.65, z: 16.6 },
            end: { x: -9.65, z: 9.8 },
          },
          {
            //Schodiste02 - spodni stena
            type: "partition",
            start: { x: -9.65, z: 9.8 },
            end: { x: -7.15, z: 9.8 },
          },
          {
            //Schodiste02 - prava stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -7.15, z: 9.8 },
          },
          {
            //Schodiste02 - vrchni stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -9.65, z: 16.6 },
          },
          {
            //V4 - leva stena
            type: "partition",
            start: { x: -6.6, z: 16.6 },
            end: { x: -6.6, z: 15.05 },
          },
          {
            //V4 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 15.05 },
            end: { x: -4.05, z: 15.05 },
          },
          {
            //V4 - prava stena
            type: "partition",
            start: { x: -4.05, z: 15.05 },
            end: { x: -4.05, z: 16.6 },
          },
          {
            //V4 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 16.6 },
            end: { x: -6.6, z: 16.6 },
          },
          {
            //V5 - leva stena
            type: "partition",
            start: { x: -6.6, z: 14.85 },
            end: { x: -6.6, z: 13.45 },
          },
          {
            //V5 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 13.45 },
            end: { x: -4.05, z: 13.45 },
          },
          {
            //V5 - prava stena
            type: "partition",
            start: { x: -4.05, z: 13.45 },
            end: { x: -4.05, z: 14.85 },
          },
          {
            //V5 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 14.85 },
            end: { x: -6.6, z: 14.85 },
          },
          {
            //RozvodnaSLP - leva stena
            type: "partition",
            start: { x: -6.6, z: 13.3 },
            end: { x: -6.6, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -6.6, z: 11.75 },
            end: { x: -4.05, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 11.75 },
            end: { x: -4.05, z: 13.3 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 13.3 },
            end: { x: -6.6, z: 13.3 },
          },
          {
            //WC zam - leva stena
            type: "partition",
            start: { x: -6.6, z: 11.6 },
            end: { x: -6.6, z: 9.8 },
          },
          {
            //WC zam - spodni stena
            type: "partition",
            start: { x: -6.6, z: 9.8 },
            end: { x: -4.05, z: 9.8 },
          },
          {
            //WC zam - prava stena
            type: "partition",
            start: { x: -4.05, z: 9.8 },
            end: { x: -4.05, z: 11.6 },
          },
          {
            //WC zam - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 11.6 },
            end: { x: -6.6, z: 11.6 },
          },
          {
            //mp prostor - leva stena
            type: "partition",
            start: { x: -3.85, z: 16.6 },
            end: { x: -3.85, z: 9.8 },
          },
          {
            //mp prostor - spodni stena
            type: "partition",
            start: { x: -3.85, z: 9.8 },
            end: { x: -1.15, z: 9.8 },
          },
          {
            //mp prostor - prava stena
            type: "partition",
            start: { x: -1.15, z: 9.8 },
            end: { x: -1.15, z: 16.6 },
          },
          {
            //mp prostor - vrchni stena
            type: "partition",
            start: { x: -1.15, z: 16.6 },
            end: { x: -3.85, z: 16.6 },
          },
          {
            //Kuchynka - leva stena
            type: "partition",
            start: { x: -0.75, z: 16.6 },
            end: { x: -0.75, z: 14.3 },
          },
          {
            //Kuchynka - spodni stena
            type: "partition",
            start: { x: -0.75, z: 14.3 },
            end: { x: 3.25, z: 14.3 },
          },
          {
            //Kuchynka - prava stena
            type: "partition",
            start: { x: 3.25, z: 14.3 },
            end: { x: 3.25, z: 16.6 },
          },
          {
            //Kuchynka - horni stena
            type: "partition",
            start: { x: 3.25, z: 16.6 },
            end: { x: -0.75, z: 16.6 },
          },
          {
            //Uklid - leva stena
            type: "partition",
            start: { x: 3.4, z: 16.6 },
            end: { x: 3.4, z: 14.3 },
          },
          {
            //Uklid - spodni stena
            type: "partition",
            start: { x: 3.4, z: 14.3 },
            end: { x: 4.5, z: 14.3 },
          },
          {
            //Uklid - prava stena
            type: "partition",
            start: { x: 4.5, z: 14.3 },
            end: { x: 4.5, z: 16.6 },
          },
          {
            //Uklid - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 16.6 },
            end: { x: 3.4, z: 16.6 },
          },
          {
            //Empty1 - leva stena
            type: "partition",
            start: { x: -0.75, z: 14 },
            end: { x: -0.75, z: 11.9 },
          },
          {
            //Empty1 - spodni stena
            type: "partition",
            start: { x: -0.75, z: 11.9 },
            end: { x: 4.5, z: 11.9 },
          },
          {
            //Empty1 - prava stena
            type: "partition",
            start: { x: 4.5, z: 11.9 },
            end: { x: 4.5, z: 14 },
          },
          {
            //Empty1 - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 14 },
            end: { x: -0.75, z: 14 },
          },
          {
            //V1 - leva strena
            type: "partition",
            start: { x: -0.75, z: 11.7 },
            end: { x: -0.75, z: 9.8 },
          },
          {
            //V1 - spodni strena
            type: "partition",
            start: { x: -0.75, z: 9.8 },
            end: { x: 0.965, z: 9.8 },
          },
          {
            //V1 - prava strena
            type: "partition",
            start: { x: 0.965, z: 9.8 },
            end: { x: 0.965, z: 11.7 },
          },
          {
            //V1 - vrchni strena
            type: "partition",
            start: { x: 0.965, z: 11.7 },
            end: { x: -0.75, z: 11.7 },
          },
          {
            //V2 - leva strena
            type: "partition",
            start: { x: 1.125, z: 11.7 },
            end: { x: 1.125, z: 9.8 },
          },
          {
            //V2 - spodni strena
            type: "partition",
            start: { x: 1.125, z: 9.8 },
            end: { x: 2.735, z: 9.8 },
          },
          {
            //V2 - prava strena
            type: "partition",
            start: { x: 2.735, z: 9.8 },
            end: { x: 2.735, z: 11.7 },
          },
          {
            //V2 - vrchni strena
            type: "partition",
            start: { x: 2.735, z: 11.7 },
            end: { x: 1.125, z: 11.7 },
          },
          {
            //V3 - leva strena
            type: "partition",
            start: { x: 2.925, z: 11.7 },
            end: { x: 2.925, z: 9.8 },
          },
          {
            //V3 - spodni strena
            type: "partition",
            start: { x: 2.925, z: 9.8 },
            end: { x: 4.545, z: 9.8 },
          },
          {
            //V3 - prava strena
            type: "partition",
            start: { x: 4.545, z: 9.8 },
            end: { x: 4.545, z: 11.7 },
          },
          {
            //V3 - vrchni strena
            type: "partition",
            start: { x: 4.545, z: 11.7 },
            end: { x: 2.925, z: 11.7 },
          },
          {
            //Empty2 - leva strena
            type: "partition",
            start: { x: 5.02, z: 16.6 },
            end: { x: 5.02, z: 15.3 },
          },
          {
            //Empty2 - spodni strena
            type: "partition",
            start: { x: 5.02, z: 15.3 },
            end: { x: 9.62, z: 15.3 },
          },
          {
            //Empty2 - prava strena
            type: "partition",
            start: { x: 9.62, z: 15.3 },
            end: { x: 9.62, z: 16.6 },
          },
          {
            //Empty2 - vrchni strena
            type: "partition",
            start: { x: 9.62, z: 16.6 },
            end: { x: 5.02, z: 16.6 },
          },
          {
            //WC muzi - leva stena
            type: "partition",
            start: { x: 5.02, z: 15.1 },
            end: { x: 5.02, z: 9.8 },
          },
          {
            //WC muzi - spodni stena
            type: "partition",
            start: { x: 5.02, z: 9.8 },
            end: { x: 7.17, z: 9.8 },
          },
          {
            //WC muzi - prava stena
            type: "partition",
            start: { x: 7.17, z: 9.8 },
            end: { x: 7.17, z: 15.1 },
          },
          {
            //WC muzi - vrchni stena
            type: "partition",
            start: { x: 7.17, z: 15.1 },
            end: { x: 5.02, z: 15.1 },
          },
          {
            //WC zeny - leva stena 1
            type: "partition",
            start: { x: 7.42, z: 15.1 },
            end: { x: 7.42, z: 13.3 },
          },
          {
            //WC zeny - spojeni leve steny
            type: "partition",
            start: { x: 7.42, z: 13.3 },
            end: { x: 7.37, z: 13.3 },
          },
          {
            //WC zeny - leva stena 2
            type: "partition",
            start: { x: 7.37, z: 13.3 },
            end: { x: 7.37, z: 9.8 },
          },
          {
            //WC zeny - spodni stena
            type: "partition",
            start: { x: 7.37, z: 9.8 },
            end: { x: 9.62, z: 9.8 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 9.8 },
            end: { x: 9.62, z: 15.1 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 15.1 },
            end: { x: 7.37, z: 15.1 },
          },
          {
            type: "partition",
            start: { x: 7.4, z: 9.9 },
            end: { x: 9.6, z: 9.9 },
          },
          {
            type: "partition",
            start: { x: 9.6, z: 9.9 },
            end: { x: 9.6, z: 14.9 },
          },
          {
            type: "partition",
            start: { x: 9.6, z: 14.9 },
            end: { x: 7.4, z: 14.9 },
          },
          //spol stena vodorovna
          {
            type: "partition",
            start: { x: -16.8, z: -10.2 },
            end: { x: 16.8, z: -10.2 },
          },
          {
            //4.12 vlevo
            type: "partition",
            start: { x: 4.12, z: 4.8 },
            end: { x: 4.12, z: -4.8 },
          },
          {
            //4.12 vpravo
            type: "partition",
            start: { x: 10.12, z: 4.8 },
            end: { x: 10.12, z: -4.8 },
          },
          {
            //4.12 nahore
            type: "partition",
            start: { x: 4.12, z: 4.8 },
            end: { x: 10.12, z: 4.8 },
          },
          {
            //4.12 dole
            type: "partition",
            start: { x: 4.12, z: -4.8 },
            end: { x: 10.12, z: -4.8 },
          },
          {
            //4.12 vnitrni dole
            type: "partition",
            start: { x: 4.32, z: -4.6 },
            end: { x: 9.92, z: -4.6 },
          },
          {
            //4.12 vnitrni nahore
            type: "partition",
            start: { x: 4.32, z: 4.6 },
            end: { x: 9.92, z: 4.6 },
          },
          {
            //4.12 vnitrni vlevo
            type: "partition",
            start: { x: 4.32, z: 4.6 },
            end: { x: 4.32, z: -4.6 },
          },
          {
            //4.12 vnitrni vpravo
            type: "partition",
            start: { x: 9.92, z: 4.6 },
            end: { x: 9.92, z: -4.6 },
          },
          {
            //4.11 - vlevo
            type: "partition",
            start: { x: -8.48, z: -4.8 },
            end: { x: -8.48, z: 0 },
          },
          {
            //4.11 - vpravo
            type: "partition",
            start: { x: 2.92, z: -4.8 },
            end: { x: 2.92, z: 0 },
          },
          {
            //4.11 - dole
            type: "partition",
            start: { x: 2.92, z: -4.8 },
            end: { x: -8.48, z: -4.8 },
          },
          {
            //4.11 - nahore
            type: "partition",
            start: { x: 2.92, z: 0 },
            end: { x: -8.48, z: 0 },
          },
          {
            //4.11 - stred
            type: "partition",
            start: { x: -6.08, z: -4.8 },
            end: { x: -6.08, z: 0 },
          },
          {
            //4.13a - nahore
            type: "partition",
            start: { x: -8.48, z: -6 },
            end: { x: -6.08, z: -6 },
          },

          {
            //4.13a - dole
            type: "partition",
            start: { x: -8.48, z: -8.4 },
            end: { x: -6.08, z: -8.4 },
          },
          {
            //4.13a - vlevo
            type: "partition",
            start: { x: -8.48, z: -6 },
            end: { x: -8.48, z: -8.4 },
          },
          {
            //4.13a - vpravo
            type: "partition",
            start: { x: -6.08, z: -6 },
            end: { x: -6.08, z: -8.4 },
          },
          {
            //4.13a - STRED
            type: "partition",
            start: { x: -7.28, z: -6 },
            end: { x: -7.28, z: -8.4 },
          },

          {
            //4.14 - vpravo
            type: "partition",
            start: { x: 15.6, z: 15.6 },
            end: { x: 15.6, z: 9.62 },
          },
          {
            //4.14 - vlevo
            type: "partition",
            start: { x: 11.4, z: 15.6 },
            end: { x: 11.4, z: 9.62 },
          },
          {
            //4.14 - nahore
            type: "partition",
            start: { x: 15.6, z: 15.6 },
            end: { x: 11.4, z: 15.6 },
          },
          {
            //4.14 - dole
            type: "partition",
            start: { x: 15.6, z: 9.62 },
            end: { x: 11.4, z: 9.62 },
          },
          {
            //4.14 - prostredek
            type: "partition",
            start: { x: 15.6, z: 12 },
            end: { x: 11.4, z: 12 },
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
            radius: 0.4,
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
            radius: 0.4,
          },
        ],
      },
      rooms: [
        {
          name: "SCHODIŠTĚ (JÁDRO B)",
          bounds: { minX: 6.7, minZ: -16.9, maxX: 10.3, maxZ: -10.3 },
        },
        {
          name: "UMĚLECKÉ A EXPERIMENTÁLNÍ KINO",
          bounds: { minX: 4.1, minZ: -4.6, maxX: 10.1, maxZ: 4.8 },
        },
        {
          name: "TÝMOVÁ STUDOVNA / KLUBOVÁ MÍSTNOST",
          bounds: { minX: -6.1, minZ: -4.6, maxX: 2.9, maxZ: -0.2 },
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 4 OSOBY",
          bounds: { minX: -8.5, minZ: -4.6, maxX: 2.9, maxZ: -0.2 },
        },
        {
          name: "INDIVIDUÁLNÍ STUDOVNA - 1",
          bounds: { minX: -8.5, minZ: -8.2, maxX: -7.3, maxZ: -5.8 },
        },
        {
          name: "INDIVIDUÁLNÍ STUDOVNA - 2",
          bounds: { minX: -7.3, minZ: -8.2, maxX: -6.1, maxZ: -5.8 },
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 6 OSOB",
          bounds: { minX: 11.5, minZ: 12.1, maxX: 15.7, maxZ: 15.7 },
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 4 OSOBY",
          bounds: { minX: 11.5, minZ: 9.7, maxX: 15.7, maxZ: 12.1 },
        },
        {
          name: "ROZVADĚČE",
          bounds: { minX: -16.9, minZ: -9.9, maxX: -11.9, maxZ: -8.3 },
        },
        {
          name: "ROZDĚLOVAČE PODLAHOVÉHO TOPENÍ",
          bounds: { minX: -11.9, minZ: -11.9, maxX: -10.3, maxZ: -8.5 },
        },
        {
          name: "MANIPULAČNÍ PROSTOR",
          bounds: { minX: -3.8, minZ: 9.9, maxX: -1.1, maxZ: 16.4 },
        },
        {
          name: "KUCHYŇKA",
          bounds: { minX: -0.7, minZ: 14.1, maxX: 3.3, maxZ: 16.4 },
        },
        {
          name: "WC MUŽI",
          bounds: { minX: 5, minZ: 9.9, maxX: 7.2, maxZ: 14.9 },
        },
        {
          name: "WC ŽENY",
          bounds: { minX: 7.4, minZ: 9.9, maxX: 9.6, maxZ: 14.9 },
        },
        {
          name: "ÚKLID",
          bounds: { minX: 3.3, minZ: 14.1, maxX: 4.5, maxZ: 16.4 },
        },
        {
          name: "SCHODIŠTĚ (JÁDRO C)",
          bounds: { minX: -9.7, minZ: 10.4, maxX: -7.2, maxZ: 16.5 },
        },
        {
          name: "ROZVODNA SLP",
          bounds: { minX: -6.6, minZ: 11.8, maxX: -4, maxZ: 13.4 },
        },
        {
          name: "WC ZAMĚSTNANCI",
          bounds: { minX: -6.6, minZ: 9.9, maxX: -4, maxZ: 11.7 },
        },
      ],
      temperature_data: [0],
      wifi_signal_data: [0],
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
            //vrsek - leva stena
            type: "partition",
            start: { x: -10.2, z: 16.8 },
            end: { x: -10.2, z: 6.8 },
          },
          {
            //leva strana - vrchni stena
            type: "partition",
            start: { x: -10.2, z: 6.8 },
            end: { x: -13.5, z: 6.8 },
          },
          {
            //leva strana - spodni stena
            type: "partition",
            start: { x: -10.2, z: 5.7 },
            end: { x: -13.5, z: 5.7 },
          },
          {
            //leva strana - vodorovna stena 1
            type: "partition",
            start: { x: -10.2, z: 5.7 },
            end: { x: -10.2, z: -7.8 },
          },
          {
            //leva strana - vodorovna stena 2
            type: "partition",
            start: { x: -10.2, z: -7.8 },
            end: { x: -10.2, z: -16.8 },
          },
          {
            //5.13 a 5.15 - leva stena
            type: "partition",
            start: { x: -4.6, z: -5.8 },
            end: { x: -4.6, z: -10 },
          },
          {
            //5.13 a 5.15 - spodni stena
            type: "partition",
            start: { x: -4.6, z: -10 },
            end: { x: 5, z: -10 },
          },
          {
            //5.13 a 5.15 - spodni stena
            type: "partition",
            start: { x: 5, z: -10 },
            end: { x: 5, z: -5.8 },
          },
          {
            //5.13 a 5.15 - spodni stena
            type: "partition",
            start: { x: 5, z: -5.8 },
            end: { x: -4.6, z: -5.8 },
          },
          {
            //5.13 a 5.15 - rozdeleni
            type: "partition",
            start: { x: 0.8, z: -5.8 },
            end: { x: 0.8, z: -10 },
          },
          {
            //5.12 a 5.14 - leva stena
            type: "partition",
            start: { x: -4.6, z: 5 },
            end: { x: -4.6, z: -4.6 },
          },
          {
            //5.12 a 5.14 - spodni stena
            type: "partition",
            start: { x: -4.6, z: -4.6 },
            end: { x: -0.4, z: -4.6 },
          },
          {
            //5.12 a 5.14 - prava stena
            type: "partition",
            start: { x: -0.4, z: -4.6 },
            end: { x: -0.4, z: 5 },
          },
          {
            //5.12 a 5.14 - vrchni stena
            type: "partition",
            start: { x: -0.4, z: 5 },
            end: { x: -4.6, z: 5 },
          },
          {
            //5.12 a 5.14 - rozdeleni
            type: "partition",
            start: { x: -0.4, z: -0.4 },
            end: { x: -4.6, z: -0.4 },
          },
          {
            //5.19 - leva stena
            type: "partition",
            start: { x: 4.4, z: -0.4 },
            end: { x: 4.4, z: -4.6 },
          },
          {
            //5.19 - spodni stena
            type: "partition",
            start: { x: 4.4, z: -4.6 },
            end: { x: 8.6, z: -4.6 },
          },
          {
            //5.19 - prava stena
            type: "partition",
            start: { x: 8.6, z: -4.6 },
            end: { x: 8.6, z: -0.4 },
          },
          {
            //5.19 - vrchni stena
            type: "partition",
            start: { x: 8.6, z: -0.4 },
            end: { x: 4.4, z: -0.4 },
          },
          {
            //5.19 - vodorovne rozdeleni 1
            type: "partition",
            start: { x: 6.45, z: -0.4 },
            end: { x: 6.45, z: -4.6 },
          },
          {
            //5.19 - vodorovne rozdeleni 2
            type: "partition",
            start: { x: 6.55, z: -0.4 },
            end: { x: 6.55, z: -4.6 },
          },
          {
            //5.19 - horizontalni rozdeleni 1
            type: "partition",
            start: { x: 4.4, z: -1.8 },
            end: { x: 6.45, z: -1.8 },
          },
          {
            //5.19 - horizontalni rozdeleni 2
            type: "partition",
            start: { x: 4.4, z: -3.2 },
            end: { x: 6.45, z: -3.2 },
          },
          {
            //5.19 - horizontalni rozdeleni 3
            type: "partition",
            start: { x: 4.4, z: -4.6 },
            end: { x: 6.45, z: -4.6 },
          },
          {
            //5.19 - horizontalni rozdeleni 4
            type: "partition",
            start: { x: 6.55, z: -1.8 },
            end: { x: 8.6, z: -1.8 },
          },
          {
            //5.19 - horizontalni rozdeleni 5
            type: "partition",
            start: { x: 6.55, z: -3.2 },
            end: { x: 8.6, z: -3.2 },
          },
          {
            //5.19 - horizontalni rozdeleni 6
            type: "partition",
            start: { x: 6.55, z: -4.6 },
            end: { x: 8.6, z: -4.6 },
          },
          {
            //vrsek - spodni stena
            type: "partition",
            start: { x: -10.2, z: 9.6 },
            end: { x: 10.2, z: 9.6 },
          },
          {
            //vrsek - prava stena
            type: "partition",
            start: { x: 10.2, z: 9.6 },
            end: { x: 10.2, z: 16.8 },
          },
          {
            //Schodiste02 - leva stena
            type: "partition",
            start: { x: -9.65, z: 16.6 },
            end: { x: -9.65, z: 9.8 },
          },
          {
            //Schodiste02 - spodni stena
            type: "partition",
            start: { x: -9.65, z: 9.8 },
            end: { x: -7.15, z: 9.8 },
          },
          {
            //Schodiste02 - prava stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -7.15, z: 9.8 },
          },
          {
            //Schodiste02 - vrchni stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -9.65, z: 16.6 },
          },
          {
            //V4 - leva stena
            type: "partition",
            start: { x: -6.6, z: 16.6 },
            end: { x: -6.6, z: 15.05 },
          },
          {
            //V4 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 15.05 },
            end: { x: -4.05, z: 15.05 },
          },
          {
            //V4 - prava stena
            type: "partition",
            start: { x: -4.05, z: 15.05 },
            end: { x: -4.05, z: 16.6 },
          },
          {
            //V4 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 16.6 },
            end: { x: -6.6, z: 16.6 },
          },
          {
            //V5 - leva stena
            type: "partition",
            start: { x: -6.6, z: 14.85 },
            end: { x: -6.6, z: 13.45 },
          },
          {
            //V5 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 13.45 },
            end: { x: -4.05, z: 13.45 },
          },
          {
            //V5 - prava stena
            type: "partition",
            start: { x: -4.05, z: 13.45 },
            end: { x: -4.05, z: 14.85 },
          },
          {
            //V5 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 14.85 },
            end: { x: -6.6, z: 14.85 },
          },
          {
            //RozvodnaSLP - leva stena
            type: "partition",
            start: { x: -6.6, z: 13.3 },
            end: { x: -6.6, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -6.6, z: 11.75 },
            end: { x: -4.05, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 11.75 },
            end: { x: -4.05, z: 13.3 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 13.3 },
            end: { x: -6.6, z: 13.3 },
          },
          {
            //WC zam - leva stena
            type: "partition",
            start: { x: -6.6, z: 11.6 },
            end: { x: -6.6, z: 9.8 },
          },
          {
            //WC zam - spodni stena
            type: "partition",
            start: { x: -6.6, z: 9.8 },
            end: { x: -4.05, z: 9.8 },
          },
          {
            //WC zam - prava stena
            type: "partition",
            start: { x: -4.05, z: 9.8 },
            end: { x: -4.05, z: 11.6 },
          },
          {
            //WC zam - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 11.6 },
            end: { x: -6.6, z: 11.6 },
          },
          {
            //mp prostor - leva stena
            type: "partition",
            start: { x: -3.85, z: 16.6 },
            end: { x: -3.85, z: 9.8 },
          },
          {
            //mp prostor - spodni stena
            type: "partition",
            start: { x: -3.85, z: 9.8 },
            end: { x: -1.15, z: 9.8 },
          },
          {
            //mp prostor - prava stena
            type: "partition",
            start: { x: -1.15, z: 9.8 },
            end: { x: -1.15, z: 16.6 },
          },
          {
            //mp prostor - vrchni stena
            type: "partition",
            start: { x: -1.15, z: 16.6 },
            end: { x: -3.85, z: 16.6 },
          },
          {
            //Kuchynka - leva stena
            type: "partition",
            start: { x: -0.75, z: 16.6 },
            end: { x: -0.75, z: 14.3 },
          },
          {
            //Kuchynka - spodni stena
            type: "partition",
            start: { x: -0.75, z: 14.3 },
            end: { x: 3.25, z: 14.3 },
          },
          {
            //Kuchynka - prava stena
            type: "partition",
            start: { x: 3.25, z: 14.3 },
            end: { x: 3.25, z: 16.6 },
          },
          {
            //Kuchynka - horni stena
            type: "partition",
            start: { x: 3.25, z: 16.6 },
            end: { x: -0.75, z: 16.6 },
          },
          {
            //Uklid - leva stena
            type: "partition",
            start: { x: 3.4, z: 16.6 },
            end: { x: 3.4, z: 14.3 },
          },
          {
            //Uklid - spodni stena
            type: "partition",
            start: { x: 3.4, z: 14.3 },
            end: { x: 4.5, z: 14.3 },
          },
          {
            //Uklid - prava stena
            type: "partition",
            start: { x: 4.5, z: 14.3 },
            end: { x: 4.5, z: 16.6 },
          },
          {
            //Uklid - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 16.6 },
            end: { x: 3.4, z: 16.6 },
          },
          {
            //Empty1 - leva stena
            type: "partition",
            start: { x: -0.75, z: 14 },
            end: { x: -0.75, z: 11.9 },
          },
          {
            //Empty1 - spodni stena
            type: "partition",
            start: { x: -0.75, z: 11.9 },
            end: { x: 4.5, z: 11.9 },
          },
          {
            //Empty1 - prava stena
            type: "partition",
            start: { x: 4.5, z: 11.9 },
            end: { x: 4.5, z: 14 },
          },
          {
            //Empty1 - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 14 },
            end: { x: -0.75, z: 14 },
          },
          {
            //V1 - leva strena
            type: "partition",
            start: { x: -0.75, z: 11.7 },
            end: { x: -0.75, z: 9.8 },
          },
          {
            //V1 - spodni strena
            type: "partition",
            start: { x: -0.75, z: 9.8 },
            end: { x: 0.965, z: 9.8 },
          },
          {
            //V1 - prava strena
            type: "partition",
            start: { x: 0.965, z: 9.8 },
            end: { x: 0.965, z: 11.7 },
          },
          {
            //V1 - vrchni strena
            type: "partition",
            start: { x: 0.965, z: 11.7 },
            end: { x: -0.75, z: 11.7 },
          },
          {
            //V2 - leva strena
            type: "partition",
            start: { x: 1.125, z: 11.7 },
            end: { x: 1.125, z: 9.8 },
          },
          {
            //V2 - spodni strena
            type: "partition",
            start: { x: 1.125, z: 9.8 },
            end: { x: 2.735, z: 9.8 },
          },
          {
            //V2 - prava strena
            type: "partition",
            start: { x: 2.735, z: 9.8 },
            end: { x: 2.735, z: 11.7 },
          },
          {
            //V2 - vrchni strena
            type: "partition",
            start: { x: 2.735, z: 11.7 },
            end: { x: 1.125, z: 11.7 },
          },
          {
            //V3 - leva strena
            type: "partition",
            start: { x: 2.925, z: 11.7 },
            end: { x: 2.925, z: 9.8 },
          },
          {
            //V3 - spodni strena
            type: "partition",
            start: { x: 2.925, z: 9.8 },
            end: { x: 4.545, z: 9.8 },
          },
          {
            //V3 - prava strena
            type: "partition",
            start: { x: 4.545, z: 9.8 },
            end: { x: 4.545, z: 11.7 },
          },
          {
            //V3 - vrchni strena
            type: "partition",
            start: { x: 4.545, z: 11.7 },
            end: { x: 2.925, z: 11.7 },
          },
          {
            //Empty2 - leva strena
            type: "partition",
            start: { x: 5.02, z: 16.6 },
            end: { x: 5.02, z: 15.3 },
          },
          {
            //Empty2 - spodni strena
            type: "partition",
            start: { x: 5.02, z: 15.3 },
            end: { x: 9.62, z: 15.3 },
          },
          {
            //Empty2 - prava strena
            type: "partition",
            start: { x: 9.62, z: 15.3 },
            end: { x: 9.62, z: 16.6 },
          },
          {
            //Empty2 - vrchni strena
            type: "partition",
            start: { x: 9.62, z: 16.6 },
            end: { x: 5.02, z: 16.6 },
          },
          {
            //WC muzi - leva stena
            type: "partition",
            start: { x: 5.02, z: 15.1 },
            end: { x: 5.02, z: 9.8 },
          },
          {
            //WC muzi - spodni stena
            type: "partition",
            start: { x: 5.02, z: 9.8 },
            end: { x: 7.17, z: 9.8 },
          },
          {
            //WC muzi - prava stena
            type: "partition",
            start: { x: 7.17, z: 9.8 },
            end: { x: 7.17, z: 15.1 },
          },
          {
            //WC muzi - vrchni stena
            type: "partition",
            start: { x: 7.17, z: 15.1 },
            end: { x: 5.02, z: 15.1 },
          },
          {
            //WC zeny - leva stena 1
            type: "partition",
            start: { x: 7.42, z: 15.1 },
            end: { x: 7.42, z: 13.3 },
          },
          {
            //WC zeny - spojeni leve steny
            type: "partition",
            start: { x: 7.42, z: 13.3 },
            end: { x: 7.37, z: 13.3 },
          },
          {
            //WC zeny - leva stena 2
            type: "partition",
            start: { x: 7.37, z: 13.3 },
            end: { x: 7.37, z: 9.8 },
          },
          {
            //WC zeny - spodni stena
            type: "partition",
            start: { x: 7.37, z: 9.8 },
            end: { x: 9.62, z: 9.8 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 9.8 },
            end: { x: 9.62, z: 15.1 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 15.1 },
            end: { x: 7.37, z: 15.1 },
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: -10.2 },
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 10.2, z: -10.2 },
            end: { x: 6.6, z: -10.2 },
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 6.6, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - leva
            type: "partition",
            start: { x: 7.15, z: -10.46 },
            end: { x: 7.15, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - nahore
            type: "partition",
            start: { x: 7.15, z: -10.46 },
            end: { x: 9.65, z: -10.46 },
          },
          {
            //Vnitrni Schodiste01 - prava
            type: "partition",
            start: { x: 9.65, z: -10.46 },
            end: { x: 9.65, z: -16.8 },
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
            //schody tocite vpravo nahore vnejsi
            type: "circular",
            center: { x: 13.5, z: 7.2 },
            radius: 1.515,
          },
          {
            //schody tocite vpravo nahore vnitrni
            type: "circular",
            center: { x: 13.5, z: 7.2 },
            radius: 0.4,
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
            radius: 0.4,
          },
        ],
      },
      rooms: [
        {
          name: "SCHODIŠTĚ (JÁDRO C)",
          bounds: { minX: -9.7, minZ: 10.4, maxX: -7.2, maxZ: 16.5 },
        },
        {
          name: "ROZVODNA SLP",
          bounds: { minX: -6.6, minZ: 11.8, maxX: -4, maxZ: 13.4 },
        },
        {
          name: "WC ZAMĚSTNANCI",
          bounds: { minX: -6.6, minZ: 9.9, maxX: -4, maxZ: 11.7 },
        },
        {
          name: "MANIPULAČNÍ PROSTOR",
          bounds: { minX: -3.8, minZ: 9.9, maxX: -1.1, maxZ: 16.4 },
        },
        {
          name: "KUCHYŇKA",
          bounds: { minX: -0.7, minZ: 14.1, maxX: 3.3, maxZ: 16.4 },
        },
        {
          name: "ÚKLID",
          bounds: { minX: 3.3, minZ: 14.1, maxX: 4.5, maxZ: 16.4 },
        },
        {
          name: "WC MUŽI",
          bounds: { minX: 5, minZ: 9.9, maxX: 7.2, maxZ: 14.9 },
        },
        {
          name: "WC ŽENY",
          bounds: { minX: 7.4, minZ: 9.9, maxX: 9.6, maxZ: 14.9 },
        },
        {
          name: "SCHODIŠTĚ (JÁDRO B)",
          bounds: { minX: 6.7, minZ: -16.9, maxX: 10.3, maxZ: -10.3 },
        },
        {
          name: "ROZVADĚČE",
          bounds: { minX: -16.9, minZ: -9.9, maxX: -11.9, maxZ: -8.3 },
        },
        {
          name: "ROZDĚLOVAČE PODLAHOVÉHO TOPENÍ",
          bounds: { minX: -11.9, minZ: -11.9, maxX: -10.3, maxZ: -8.5 },
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 8 OSOB",
          bounds: { minX: -4.6, minZ: -4.6, maxX: -0.4, maxZ: -0.4 },
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 10 OSOB",
          bounds: { minX: -4.6, minZ: -0.4, maxX: -0.4, maxZ: 5 },
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 8 OSOB",
          bounds: { minX: 0.8, minZ: -10, maxX: 5, maxZ: -5.8 },
        },
        {
          name: "TÝMOVÁ STUDOVNA PRO 10 OSOB",
          bounds: { minX: -4.6, minZ: -10, maxX: 0.8, maxZ: -5.8 },
        },
        {
          name: "INDIVIDUÁLNÍ STUDOVNA",
          bounds: { minX: 4.4, minZ: -4.6, maxX: 8.6, maxZ: -0.4 },
        },
      ],
      temperature_data: [0],
      wifi_signal_data: [0],
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
            //vrsek - leva stena
            type: "partition",
            start: { x: -10.2, z: 16.8 },
            end: { x: -10.2, z: 9.6 },
          },
          {
            //vrsek - spodni stena
            type: "partition",
            start: { x: -10.2, z: 9.6 },
            end: { x: 10.2, z: 9.6 },
          },
          {
            //vrsek - prava stena
            type: "partition",
            start: { x: 10.2, z: 9.6 },
            end: { x: 10.2, z: 16.8 },
          },
          {
            //Schodiste02 - leva stena
            type: "partition",
            start: { x: -9.65, z: 16.6 },
            end: { x: -9.65, z: 9.8 },
          },
          {
            //Schodiste02 - spodni stena
            type: "partition",
            start: { x: -9.65, z: 9.8 },
            end: { x: -7.15, z: 9.8 },
          },
          {
            //Schodiste02 - prava stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -7.15, z: 9.8 },
          },
          {
            //Schodiste02 - vrchni stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -9.65, z: 16.6 },
          },
          {
            //V4 - leva stena
            type: "partition",
            start: { x: -6.6, z: 16.6 },
            end: { x: -6.6, z: 15.05 },
          },
          {
            //V4 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 15.05 },
            end: { x: -4.05, z: 15.05 },
          },
          {
            //V4 - prava stena
            type: "partition",
            start: { x: -4.05, z: 15.05 },
            end: { x: -4.05, z: 16.6 },
          },
          {
            //V4 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 16.6 },
            end: { x: -6.6, z: 16.6 },
          },
          {
            //V5 - leva stena
            type: "partition",
            start: { x: -6.6, z: 14.85 },
            end: { x: -6.6, z: 13.45 },
          },
          {
            //V5 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 13.45 },
            end: { x: -4.05, z: 13.45 },
          },
          {
            //V5 - prava stena
            type: "partition",
            start: { x: -4.05, z: 13.45 },
            end: { x: -4.05, z: 14.85 },
          },
          {
            //V5 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 14.85 },
            end: { x: -6.6, z: 14.85 },
          },
          {
            //RozvodnaSLP - leva stena
            type: "partition",
            start: { x: -6.6, z: 13.3 },
            end: { x: -6.6, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -6.6, z: 11.75 },
            end: { x: -4.05, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 11.75 },
            end: { x: -4.05, z: 13.3 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 13.3 },
            end: { x: -6.6, z: 13.3 },
          },
          {
            //WC zam - leva stena
            type: "partition",
            start: { x: -6.6, z: 11.6 },
            end: { x: -6.6, z: 9.8 },
          },
          {
            //WC zam - spodni stena
            type: "partition",
            start: { x: -6.6, z: 9.8 },
            end: { x: -4.05, z: 9.8 },
          },
          {
            //WC zam - prava stena
            type: "partition",
            start: { x: -4.05, z: 9.8 },
            end: { x: -4.05, z: 11.6 },
          },
          {
            //WC zam - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 11.6 },
            end: { x: -6.6, z: 11.6 },
          },
          {
            //mp prostor - leva stena
            type: "partition",
            start: { x: -3.85, z: 16.6 },
            end: { x: -3.85, z: 9.8 },
          },
          {
            //mp prostor - spodni stena
            type: "partition",
            start: { x: -3.85, z: 9.8 },
            end: { x: -1.15, z: 9.8 },
          },
          {
            //mp prostor - prava stena
            type: "partition",
            start: { x: -1.15, z: 9.8 },
            end: { x: -1.15, z: 16.6 },
          },
          {
            //mp prostor - vrchni stena
            type: "partition",
            start: { x: -1.15, z: 16.6 },
            end: { x: -3.85, z: 16.6 },
          },
          {
            //Kuchynka - leva stena
            type: "partition",
            start: { x: -0.75, z: 16.6 },
            end: { x: -0.75, z: 14.3 },
          },
          {
            //Kuchynka - spodni stena
            type: "partition",
            start: { x: -0.75, z: 14.3 },
            end: { x: 3.25, z: 14.3 },
          },
          {
            //Kuchynka - prava stena
            type: "partition",
            start: { x: 3.25, z: 14.3 },
            end: { x: 3.25, z: 16.6 },
          },
          {
            //Kuchynka - horni stena
            type: "partition",
            start: { x: 3.25, z: 16.6 },
            end: { x: -0.75, z: 16.6 },
          },
          {
            //Uklid - leva stena
            type: "partition",
            start: { x: 3.4, z: 16.6 },
            end: { x: 3.4, z: 14.3 },
          },
          {
            //Uklid - spodni stena
            type: "partition",
            start: { x: 3.4, z: 14.3 },
            end: { x: 4.5, z: 14.3 },
          },
          {
            //Uklid - prava stena
            type: "partition",
            start: { x: 4.5, z: 14.3 },
            end: { x: 4.5, z: 16.6 },
          },
          {
            //Uklid - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 16.6 },
            end: { x: 3.4, z: 16.6 },
          },
          {
            //Empty1 - leva stena
            type: "partition",
            start: { x: -0.75, z: 14 },
            end: { x: -0.75, z: 11.9 },
          },
          {
            //Empty1 - spodni stena
            type: "partition",
            start: { x: -0.75, z: 11.9 },
            end: { x: 4.5, z: 11.9 },
          },
          {
            //Empty1 - prava stena
            type: "partition",
            start: { x: 4.5, z: 11.9 },
            end: { x: 4.5, z: 14 },
          },
          {
            //Empty1 - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 14 },
            end: { x: -0.75, z: 14 },
          },
          {
            //V1 - leva strena
            type: "partition",
            start: { x: -0.75, z: 11.7 },
            end: { x: -0.75, z: 9.8 },
          },
          {
            //V1 - spodni strena
            type: "partition",
            start: { x: -0.75, z: 9.8 },
            end: { x: 0.965, z: 9.8 },
          },
          {
            //V1 - prava strena
            type: "partition",
            start: { x: 0.965, z: 9.8 },
            end: { x: 0.965, z: 11.7 },
          },
          {
            //V1 - vrchni strena
            type: "partition",
            start: { x: 0.965, z: 11.7 },
            end: { x: -0.75, z: 11.7 },
          },
          {
            //V2 - leva strena
            type: "partition",
            start: { x: 1.125, z: 11.7 },
            end: { x: 1.125, z: 9.8 },
          },
          {
            //V2 - spodni strena
            type: "partition",
            start: { x: 1.125, z: 9.8 },
            end: { x: 2.735, z: 9.8 },
          },
          {
            //V2 - prava strena
            type: "partition",
            start: { x: 2.735, z: 9.8 },
            end: { x: 2.735, z: 11.7 },
          },
          {
            //V2 - vrchni strena
            type: "partition",
            start: { x: 2.735, z: 11.7 },
            end: { x: 1.125, z: 11.7 },
          },
          {
            //V3 - leva strena
            type: "partition",
            start: { x: 2.925, z: 11.7 },
            end: { x: 2.925, z: 9.8 },
          },
          {
            //V3 - spodni strena
            type: "partition",
            start: { x: 2.925, z: 9.8 },
            end: { x: 4.545, z: 9.8 },
          },
          {
            //V3 - prava strena
            type: "partition",
            start: { x: 4.545, z: 9.8 },
            end: { x: 4.545, z: 11.7 },
          },
          {
            //V3 - vrchni strena
            type: "partition",
            start: { x: 4.545, z: 11.7 },
            end: { x: 2.925, z: 11.7 },
          },
          {
            //Empty2 - leva strena
            type: "partition",
            start: { x: 5.02, z: 16.6 },
            end: { x: 5.02, z: 15.3 },
          },
          {
            //Empty2 - spodni strena
            type: "partition",
            start: { x: 5.02, z: 15.3 },
            end: { x: 9.62, z: 15.3 },
          },
          {
            //Empty2 - prava strena
            type: "partition",
            start: { x: 9.62, z: 15.3 },
            end: { x: 9.62, z: 16.6 },
          },
          {
            //Empty2 - vrchni strena
            type: "partition",
            start: { x: 9.62, z: 16.6 },
            end: { x: 5.02, z: 16.6 },
          },
          {
            //WC muzi - leva stena
            type: "partition",
            start: { x: 5.02, z: 15.1 },
            end: { x: 5.02, z: 9.8 },
          },
          {
            //WC muzi - spodni stena
            type: "partition",
            start: { x: 5.02, z: 9.8 },
            end: { x: 7.17, z: 9.8 },
          },
          {
            //WC muzi - prava stena
            type: "partition",
            start: { x: 7.17, z: 9.8 },
            end: { x: 7.17, z: 15.1 },
          },
          {
            //WC muzi - vrchni stena
            type: "partition",
            start: { x: 7.17, z: 15.1 },
            end: { x: 5.02, z: 15.1 },
          },
          {
            //WC zeny - leva stena 1
            type: "partition",
            start: { x: 7.42, z: 15.1 },
            end: { x: 7.42, z: 13.3 },
          },
          {
            //WC zeny - spojeni leve steny
            type: "partition",
            start: { x: 7.42, z: 13.3 },
            end: { x: 7.37, z: 13.3 },
          },
          {
            //WC zeny - leva stena 2
            type: "partition",
            start: { x: 7.37, z: 13.3 },
            end: { x: 7.37, z: 9.8 },
          },
          {
            //WC zeny - spodni stena
            type: "partition",
            start: { x: 7.37, z: 9.8 },
            end: { x: 9.62, z: 9.8 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 9.8 },
            end: { x: 9.62, z: 15.1 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 15.1 },
            end: { x: 7.37, z: 15.1 },
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: -10.2 },
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 10.2, z: -10.2 },
            end: { x: 6.6, z: -10.2 },
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 6.6, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - dole
            type: "partition",
            start: { x: 7.15, z: -10.46 },
            end: { x: 7.15, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - nahore
            type: "partition",
            start: { x: 7.15, z: -10.46 },
            end: { x: 9.65, z: -10.46 },
          },
          {
            //Vnitrni Schodiste01 - prava
            type: "partition",
            start: { x: 9.65, z: -10.46 },
            end: { x: 9.65, z: -16.8 },
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
            //Y osa - vpravo1
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: 6.8 },
          },
          {
            //Y osa - vpravo2
            type: "partition",
            start: { x: 10.2, z: 16.8 },
            end: { x: 10.2, z: 8.7 },
          },
          {
            // Technické hnízdo - vlevo
            type: "partition",
            start: { x: -9, z: 6.68 },
            end: { x: -9, z: 3.08 },
          },
          {
            // Technické hnízdo - vpravo
            type: "partition",
            start: { x: -4.8, z: 6.68 },
            end: { x: -4.8, z: 3.08 },
          },
          {
            // Technické hnízdo - nahore
            type: "partition",
            start: { x: -9, z: 6.68 },
            end: { x: -4.8, z: 6.68 },
          },

          {
            // Technické hnízdo - dole
            type: "partition",
            start: { x: -9, z: 3.08 },
            end: { x: -4.8, z: 3.08 },
          },
          {
            // Zasedací místnost - vlevo
            type: "partition",
            start: { x: -3, z: 6.68 },
            end: { x: -3, z: -7.8 },
          },
          {
            // Zasedací místnost - vpravo
            type: "partition",
            start: { x: 3, z: 6.68 },
            end: { x: 3, z: -7.8 },
          },
          {
            // Zasedací místnost - nahore
            type: "partition",
            start: { x: -3, z: 6.68 },
            end: { x: 3, z: 6.68 },
          },
          {
            // Zasedací místnost - dole
            type: "partition",
            start: { x: 3, z: -7.8 },
            end: { x: -3, z: -7.8 },
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
            radius: 0.4,
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
            //leva strana stena
            type: "partition",
            start: { x: -10.2, z: 16.8 },
            end: { x: -10.2, z: -7.8 },
          },
          {
            //leva strana rozdeleni 1
            type: "partition",
            start: { x: -16.8, z: 6.6 },
            end: { x: -10.2, z: 6.6 },
          },
          {
            //leva strana rozdeleni 2
            type: "partition",
            start: { x: -16.8, z: -0.6 },
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
            //spodni strana stena
            type: "partition",
            start: { x: -10.2, z: -10.2 },
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
            //prava strana stena
            type: "partition",
            start: { x: 10.2, z: 9.6 },
            end: { x: 10.2, z: -10.2 },
          },
          {
            //prava strana rozdeleni 1
            type: "partition",
            start: { x: 10.2, z: -7.8 },
            end: { x: 16.8, z: -7.8 },
          },
          {
            //prava strana rozdeleni 2
            type: "partition",
            start: { x: 10.2, z: -4.2 },
            end: { x: 16.8, z: -4.2 },
          },
          {
            //prava strana rozdeleni 3
            type: "partition",
            start: { x: 10.2, z: 6.6 },
            end: { x: 16.8, z: 6.6 },
          },
          {
            //7.28, 7.24 a 7.25 vnejsi leva
            type: "partition",
            start: { x: -7.65, z: 6.55 },
            end: { x: -7.65, z: -7.75 },
          },
          {
            //7.28, 7.24 a 7.25 vnejsi spodni
            type: "partition",
            start: { x: -7.65, z: -7.75 },
            end: { x: -2.95, z: -7.75 },
          },
          {
            //7.28, 7.24 a 7.25 vnejsi prava
            type: "partition",
            start: { x: -2.95, z: -7.75 },
            end: { x: -2.95, z: 6.55 },
          },
          {
            //7.28, 7.24 a 7.25 vnejsi vrchni
            type: "partition",
            start: { x: -2.95, z: 6.55 },
            end: { x: -7.65, z: 6.55 },
          },
          {
            //7.28 vnitrni leva
            type: "partition",
            start: { x: -7.5, z: 6.4 },
            end: { x: -7.5, z: 4.6 },
          },
          {
            //7.28 vnitrni spodni
            type: "partition",
            start: { x: -7.5, z: 4.6 },
            end: { x: -3.1, z: 4.6 },
          },
          {
            //7.28 vnitrni prava
            type: "partition",
            start: { x: -3.1, z: 4.6 },
            end: { x: -3.1, z: 6.4 },
          },
          {
            //7.28 vnitrni vrchni
            type: "partition",
            start: { x: -3.1, z: 6.4 },
            end: { x: -7.5, z: 6.4 },
          },
          {
            //7.24 vnitrni leva
            type: "partition",
            start: { x: -7.5, z: 4.45 },
            end: { x: -7.5, z: 0.075 },
          },
          {
            //7.24 vnitrni spodni
            type: "partition",
            start: { x: -7.5, z: 0.075 },
            end: { x: -3.1, z: 0.075 },
          },
          {
            //7.24 vnitrni prava
            type: "partition",
            start: { x: -3.1, z: 0.075 },
            end: { x: -3.1, z: 4.45 },
          },
          {
            //7.24 vnitrni vrchni
            type: "partition",
            start: { x: -3.1, z: 4.45 },
            end: { x: -7.5, z: 4.45 },
          },
          {
            //7.25 vnitrni leva
            type: "partition",
            start: { x: -7.5, z: -0.075 },
            end: { x: -7.5, z: -7.6 },
          },
          {
            //7.25 vnitrni spodni
            type: "partition",
            start: { x: -7.5, z: -7.6 },
            end: { x: -3.1, z: -7.6 },
          },
          {
            //7.25 vnitrni prava
            type: "partition",
            start: { x: -3.1, z: -7.6 },
            end: { x: -3.1, z: -0.075 },
          },
          {
            //7.25 vnitrni vrchni
            type: "partition",
            start: { x: -3.1, z: -0.075 },
            end: { x: -7.5, z: -0.075 },
          },
          {
            //dira - vlevo
            type: "partition",
            start: { x: -0.45, z: 6.4 },
            end: { x: -0.45, z: -7.44 },
          },
          {
            //dira - vpravo
            type: "partition",
            start: { x: 6.19, z: 6.4 },
            end: { x: 6.19, z: -7.44 },
          },
          {
            //dira - nahore
            type: "partition",
            start: { x: -0.45, z: 6.4 },
            end: { x: 6.19, z: 6.4 },
          },
          {
            //dira - dole
            type: "partition",
            start: { x: -0.45, z: -7.44 },
            end: { x: 6.19, z: -7.44 },
          },
          {
            //vrsek - spodni stena
            type: "partition",
            start: { x: -10.2, z: 9.6 },
            end: { x: 10.2, z: 9.6 },
          },
          {
            //vrsek - prava stena
            type: "partition",
            start: { x: 10.2, z: 9.6 },
            end: { x: 10.2, z: 16.8 },
          },
          {
            //Schodiste02 - leva stena
            type: "partition",
            start: { x: -9.65, z: 16.6 },
            end: { x: -9.65, z: 9.8 },
          },
          {
            //Schodiste02 - spodni stena
            type: "partition",
            start: { x: -9.65, z: 9.8 },
            end: { x: -7.15, z: 9.8 },
          },
          {
            //Schodiste02 - prava stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -7.15, z: 9.8 },
          },
          {
            //Schodiste02 - vrchni stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -9.65, z: 16.6 },
          },
          {
            //V4 - leva stena
            type: "partition",
            start: { x: -6.6, z: 16.6 },
            end: { x: -6.6, z: 15.05 },
          },
          {
            //V4 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 15.05 },
            end: { x: -4.05, z: 15.05 },
          },
          {
            //V4 - prava stena
            type: "partition",
            start: { x: -4.05, z: 15.05 },
            end: { x: -4.05, z: 16.6 },
          },
          {
            //V4 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 16.6 },
            end: { x: -6.6, z: 16.6 },
          },
          {
            //V5 - leva stena
            type: "partition",
            start: { x: -6.6, z: 14.85 },
            end: { x: -6.6, z: 13.45 },
          },
          {
            //V5 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 13.45 },
            end: { x: -4.05, z: 13.45 },
          },
          {
            //V5 - prava stena
            type: "partition",
            start: { x: -4.05, z: 13.45 },
            end: { x: -4.05, z: 14.85 },
          },
          {
            //V5 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 14.85 },
            end: { x: -6.6, z: 14.85 },
          },
          {
            //RozvodnaSLP - leva stena
            type: "partition",
            start: { x: -6.6, z: 13.3 },
            end: { x: -6.6, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -6.6, z: 11.75 },
            end: { x: -4.05, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 11.75 },
            end: { x: -4.05, z: 13.3 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 13.3 },
            end: { x: -6.6, z: 13.3 },
          },
          {
            //WC zam - leva stena
            type: "partition",
            start: { x: -6.6, z: 11.6 },
            end: { x: -6.6, z: 9.8 },
          },
          {
            //WC zam - spodni stena
            type: "partition",
            start: { x: -6.6, z: 9.8 },
            end: { x: -4.05, z: 9.8 },
          },
          {
            //WC zam - prava stena
            type: "partition",
            start: { x: -4.05, z: 9.8 },
            end: { x: -4.05, z: 11.6 },
          },
          {
            //WC zam - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 11.6 },
            end: { x: -6.6, z: 11.6 },
          },
          {
            //mp prostor - leva stena
            type: "partition",
            start: { x: -3.85, z: 16.6 },
            end: { x: -3.85, z: 9.8 },
          },
          {
            //mp prostor - spodni stena
            type: "partition",
            start: { x: -3.85, z: 9.8 },
            end: { x: -1.15, z: 9.8 },
          },
          {
            //mp prostor - prava stena
            type: "partition",
            start: { x: -1.15, z: 9.8 },
            end: { x: -1.15, z: 16.6 },
          },
          {
            //mp prostor - vrchni stena
            type: "partition",
            start: { x: -1.15, z: 16.6 },
            end: { x: -3.85, z: 16.6 },
          },
          {
            //Kuchynka - leva stena
            type: "partition",
            start: { x: -0.75, z: 16.6 },
            end: { x: -0.75, z: 14.3 },
          },
          {
            //Kuchynka - spodni stena
            type: "partition",
            start: { x: -0.75, z: 14.3 },
            end: { x: 3.25, z: 14.3 },
          },
          {
            //Kuchynka - prava stena
            type: "partition",
            start: { x: 3.25, z: 14.3 },
            end: { x: 3.25, z: 16.6 },
          },
          {
            //Kuchynka - horni stena
            type: "partition",
            start: { x: 3.25, z: 16.6 },
            end: { x: -0.75, z: 16.6 },
          },
          {
            //Uklid - leva stena
            type: "partition",
            start: { x: 3.4, z: 16.6 },
            end: { x: 3.4, z: 14.3 },
          },
          {
            //Uklid - spodni stena
            type: "partition",
            start: { x: 3.4, z: 14.3 },
            end: { x: 4.5, z: 14.3 },
          },
          {
            //Uklid - prava stena
            type: "partition",
            start: { x: 4.5, z: 14.3 },
            end: { x: 4.5, z: 16.6 },
          },
          {
            //Uklid - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 16.6 },
            end: { x: 3.4, z: 16.6 },
          },
          {
            //Empty1 - leva stena
            type: "partition",
            start: { x: -0.75, z: 14 },
            end: { x: -0.75, z: 11.9 },
          },
          {
            //Empty1 - spodni stena
            type: "partition",
            start: { x: -0.75, z: 11.9 },
            end: { x: 4.5, z: 11.9 },
          },
          {
            //Empty1 - prava stena
            type: "partition",
            start: { x: 4.5, z: 11.9 },
            end: { x: 4.5, z: 14 },
          },
          {
            //Empty1 - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 14 },
            end: { x: -0.75, z: 14 },
          },
          {
            //V1 - leva strena
            type: "partition",
            start: { x: -0.75, z: 11.7 },
            end: { x: -0.75, z: 9.8 },
          },
          {
            //V1 - spodni strena
            type: "partition",
            start: { x: -0.75, z: 9.8 },
            end: { x: 0.965, z: 9.8 },
          },
          {
            //V1 - prava strena
            type: "partition",
            start: { x: 0.965, z: 9.8 },
            end: { x: 0.965, z: 11.7 },
          },
          {
            //V1 - vrchni strena
            type: "partition",
            start: { x: 0.965, z: 11.7 },
            end: { x: -0.75, z: 11.7 },
          },
          {
            //V2 - leva strena
            type: "partition",
            start: { x: 1.125, z: 11.7 },
            end: { x: 1.125, z: 9.8 },
          },
          {
            //V2 - spodni strena
            type: "partition",
            start: { x: 1.125, z: 9.8 },
            end: { x: 2.735, z: 9.8 },
          },
          {
            //V2 - prava strena
            type: "partition",
            start: { x: 2.735, z: 9.8 },
            end: { x: 2.735, z: 11.7 },
          },
          {
            //V2 - vrchni strena
            type: "partition",
            start: { x: 2.735, z: 11.7 },
            end: { x: 1.125, z: 11.7 },
          },
          {
            //V3 - leva strena
            type: "partition",
            start: { x: 2.925, z: 11.7 },
            end: { x: 2.925, z: 9.8 },
          },
          {
            //V3 - spodni strena
            type: "partition",
            start: { x: 2.925, z: 9.8 },
            end: { x: 4.545, z: 9.8 },
          },
          {
            //V3 - prava strena
            type: "partition",
            start: { x: 4.545, z: 9.8 },
            end: { x: 4.545, z: 11.7 },
          },
          {
            //V3 - vrchni strena
            type: "partition",
            start: { x: 4.545, z: 11.7 },
            end: { x: 2.925, z: 11.7 },
          },
          {
            //Empty2 - leva strena
            type: "partition",
            start: { x: 5.02, z: 16.6 },
            end: { x: 5.02, z: 15.3 },
          },
          {
            //Empty2 - spodni strena
            type: "partition",
            start: { x: 5.02, z: 15.3 },
            end: { x: 9.62, z: 15.3 },
          },
          {
            //Empty2 - prava strena
            type: "partition",
            start: { x: 9.62, z: 15.3 },
            end: { x: 9.62, z: 16.6 },
          },
          {
            //Empty2 - vrchni strena
            type: "partition",
            start: { x: 9.62, z: 16.6 },
            end: { x: 5.02, z: 16.6 },
          },
          {
            //WC muzi - leva stena
            type: "partition",
            start: { x: 5.02, z: 15.1 },
            end: { x: 5.02, z: 9.8 },
          },
          {
            //WC muzi - spodni stena
            type: "partition",
            start: { x: 5.02, z: 9.8 },
            end: { x: 7.17, z: 9.8 },
          },
          {
            //WC muzi - prava stena
            type: "partition",
            start: { x: 7.17, z: 9.8 },
            end: { x: 7.17, z: 15.1 },
          },
          {
            //WC muzi - vrchni stena
            type: "partition",
            start: { x: 7.17, z: 15.1 },
            end: { x: 5.02, z: 15.1 },
          },
          {
            //WC zeny - leva stena 1
            type: "partition",
            start: { x: 7.42, z: 15.1 },
            end: { x: 7.42, z: 13.3 },
          },
          {
            //WC zeny - spojeni leve steny
            type: "partition",
            start: { x: 7.42, z: 13.3 },
            end: { x: 7.37, z: 13.3 },
          },
          {
            //WC zeny - leva stena 2
            type: "partition",
            start: { x: 7.37, z: 13.3 },
            end: { x: 7.37, z: 9.8 },
          },
          {
            //WC zeny - spodni stena
            type: "partition",
            start: { x: 7.37, z: 9.8 },
            end: { x: 9.62, z: 9.8 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 9.8 },
            end: { x: 9.62, z: 15.1 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 15.1 },
            end: { x: 7.37, z: 15.1 },
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: -10.2 },
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 10.2, z: -10.2 },
            end: { x: 6.6, z: -10.2 },
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 6.6, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - leva
            type: "partition",
            start: { x: 7.15, z: -10.46 },
            end: { x: 7.15, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - nahore
            type: "partition",
            start: { x: 7.15, z: -10.46 },
            end: { x: 9.65, z: -10.46 },
          },
          {
            //Vnitrni Schodiste01 - prava
            type: "partition",
            start: { x: 9.65, z: -10.46 },
            end: { x: 9.65, z: -16.8 },
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
        ],
      },
      rooms: [
        {
          name: "SCHODIŠTĚ (JÁDRO C)",
          bounds: { minX: -9.7, minZ: 10.4, maxX: -7.2, maxZ: 16.5 },
        },
        {
          name: "ROZVODNA SLP",
          bounds: { minX: -6.6, minZ: 11.8, maxX: -4, maxZ: 13.4 },
        },
        {
          name: "WC ZAMĚSTNANCI",
          bounds: { minX: -6.6, minZ: 9.9, maxX: -4, maxZ: 11.7 },
        },
        {
          name: "MANIPULAČNÍ PROSTOR",
          bounds: { minX: -3.8, minZ: 9.9, maxX: -1.1, maxZ: 16.4 },
        },
        {
          name: "KUCHYŇKA",
          bounds: { minX: -0.7, minZ: 14.1, maxX: 3.3, maxZ: 16.4 },
        },
        {
          name: "ÚKLID",
          bounds: { minX: 3.3, minZ: 14.1, maxX: 4.5, maxZ: 16.4 },
        },
        {
          name: "WC MUŽI",
          bounds: { minX: 5, minZ: 9.9, maxX: 7.2, maxZ: 14.9 },
        },
        {
          name: "WC ŽENY",
          bounds: { minX: 7.4, minZ: 9.9, maxX: 9.6, maxZ: 14.9 },
        },
        {
          name: "SCHODIŠTĚ (JÁDRO B)",
          bounds: { minX: 6.7, minZ: -16.9, maxX: 10.3, maxZ: -10.3 },
        },
        {
          name: "ROZVADĚČE",
          bounds: { minX: -16.9, minZ: -9.9, maxX: -11.9, maxZ: -8.3 },
        },
        {
          name: "ROZDĚLOVAČE PODLAHOVÉHO TOPENÍ",
          bounds: { minX: -11.9, minZ: -11.9, maxX: -10.3, maxZ: -8.5 },
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ AKVIZICE KNIHOVNÍHO FONDU (DOPLŇOVÁNÍ NEPERIODICKÝCH PUBLIKACÍ, REVIZE KNIHOVNÍHO FONDU)",
          bounds: { minX: -16.8, minZ: 6.6, maxX: -10.2, maxZ: 16.8 },
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ AKVIZICE KNIHOVNÍHO FONDU (DOPLŇOVÁNÍ, EVIDENCE A VAZBA PERIODIK)",
          bounds: { minX: -16.8, minZ: -0.6, maxX: -10.2, maxZ: 6.6 },
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ PRO KOORDINACI AKVIZIČNÍCH ČINNOSÍ A OCHRANU KNIH. FONDU",
          bounds: { minX: -16.8, minZ: -4.2, maxX: -10.2, maxZ: -0.6 },
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ SLUŽEB (MEZIKNIHOVNÍ VÝPUJČNÍ SLUŽBY, ELEKTRONICKÉ ZDROJE A SLUŽBY)",
          bounds: { minX: -16.8, minZ: -7.8, maxX: -10.2, maxZ: -4.2 },
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ INFORMAČNÍCH TECHNOLOGIÍ VČETNĚ PRACOVIŠTĚ SYSTÉMOVÉHO KNIHOVNÍKA",
          bounds: { minX: -16.8, minZ: -16.8, maxX: -7.6, maxZ: -10.2 },
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ PRO BIBLIOGRAFICKÉ A REŠERŠNÍ SLUŽBY",
          bounds: { minX: -7.6, minZ: -16.8, maxX: -0.4, maxZ: -10.2 },
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ PRO REFORMÁTOVÁNÍ DOKUMENTŮ A SPRÁVU DIGITÁLNÍ SBÍRKY",
          bounds: { minX: -0.4, minZ: -16.8, maxX: 3.2, maxZ: -10.2 },
        },
        {
          name: "LABORATOŘ NA TESTOVÁNÍ KNIH",
          bounds: { minX: 3.2, minZ: -16.8, maxX: 6.6, maxZ: -10.2 },
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ DIGITALIZACE KNIH. FONDU",
          bounds: { minX: 10.2, minZ: -16.8, maxX: 16.8, maxZ: -7.8 },
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ PRO KOORDINACI JMENNÉHO A VĚCNÉHO ZPRACOVÁNÍ DOKUMENŮ",
          bounds: { minX: 10.2, minZ: -7.8, maxX: 16.8, maxZ: -4.2 },
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ PRO ZPRACOVÁNÍ KNIHOVNÍHO FONDU (VĚCNÁ KATALOGIZACE)",
          bounds: { minX: 10.2, minZ: -4.2, maxX: 16.8, maxZ: 6.6 },
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ PRO ZPRACOVÁNÍ KNIHOVNÍHO FONDU (JMENNÁ KATALOGIZACE)",
          bounds: { minX: 10.2, minZ: 6.6, maxX: 16.8, maxZ: 16.8 },
        },
        {
          name: "SÍŤOVÁ TISKÁRNA",
          bounds: { minX: -7.5, minZ: 4.6, maxX: -3.1, maxZ: 6.4 },
        },
        {
          name: "SKLAD VÝPOČETNÍ TECHNIKY",
          bounds: { minX: -7.5, minZ: 0.075, maxX: -3.1, maxZ: 4.45 },
        },
        {
          name: "DATOVÉ CENTRUM",
          bounds: { minX: -7.5, minZ: -7.6, maxX: -3.1, maxZ: -0.075 },
        },
        {
          name: "ÁTRIUM",
          bounds: { minX: -0.45, minZ: -7.44, maxX: 6.19, maxZ: 6.4 },
        },
      ],
      temperature_data: [0],
      wifi_signal_data: [0],
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
            //vrsek - leva stena
            type: "partition",
            start: { x: -10.2, z: 16.8 },
            end: { x: -10.2, z: 9.6 },
          },
          {
            //vrsek - spodni stena
            type: "partition",
            start: { x: -10.2, z: 9.6 },
            end: { x: 10.2, z: 9.6 },
          },
          {
            //vrsek - prava stena
            type: "partition",
            start: { x: 10.2, z: 9.6 },
            end: { x: 10.2, z: 16.8 },
          },
          {
            //Schodiste02 - leva stena
            type: "partition",
            start: { x: -9.65, z: 16.6 },
            end: { x: -9.65, z: 9.8 },
          },
          {
            //Schodiste02 - spodni stena
            type: "partition",
            start: { x: -9.65, z: 9.8 },
            end: { x: -7.15, z: 9.8 },
          },
          {
            //Schodiste02 - prava stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -7.15, z: 9.8 },
          },
          {
            //Schodiste02 - vrchni stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -9.65, z: 16.6 },
          },
          {
            //V4 - leva stena
            type: "partition",
            start: { x: -6.6, z: 16.6 },
            end: { x: -6.6, z: 15.05 },
          },
          {
            //V4 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 15.05 },
            end: { x: -4.05, z: 15.05 },
          },
          {
            //V4 - prava stena
            type: "partition",
            start: { x: -4.05, z: 15.05 },
            end: { x: -4.05, z: 16.6 },
          },
          {
            //V4 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 16.6 },
            end: { x: -6.6, z: 16.6 },
          },
          {
            //V5 - leva stena
            type: "partition",
            start: { x: -6.6, z: 14.85 },
            end: { x: -6.6, z: 13.45 },
          },
          {
            //V5 - spodni stena
            type: "partition",
            start: { x: -6.6, z: 13.45 },
            end: { x: -4.05, z: 13.45 },
          },
          {
            //V5 - prava stena
            type: "partition",
            start: { x: -4.05, z: 13.45 },
            end: { x: -4.05, z: 14.85 },
          },
          {
            //V5 - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 14.85 },
            end: { x: -6.6, z: 14.85 },
          },
          {
            //RozvodnaSLP - leva stena
            type: "partition",
            start: { x: -6.6, z: 13.3 },
            end: { x: -6.6, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -6.6, z: 11.75 },
            end: { x: -4.05, z: 11.75 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 11.75 },
            end: { x: -4.05, z: 13.3 },
          },
          {
            //RozvodnaSLP - spodni stena
            type: "partition",
            start: { x: -4.05, z: 13.3 },
            end: { x: -6.6, z: 13.3 },
          },
          {
            //WC zam - leva stena
            type: "partition",
            start: { x: -6.6, z: 11.6 },
            end: { x: -6.6, z: 9.8 },
          },
          {
            //WC zam - spodni stena
            type: "partition",
            start: { x: -6.6, z: 9.8 },
            end: { x: -4.05, z: 9.8 },
          },
          {
            //WC zam - prava stena
            type: "partition",
            start: { x: -4.05, z: 9.8 },
            end: { x: -4.05, z: 11.6 },
          },
          {
            //WC zam - vrchni stena
            type: "partition",
            start: { x: -4.05, z: 11.6 },
            end: { x: -6.6, z: 11.6 },
          },
          {
            //mp prostor - leva stena
            type: "partition",
            start: { x: -3.85, z: 16.6 },
            end: { x: -3.85, z: 9.8 },
          },
          {
            //mp prostor - spodni stena
            type: "partition",
            start: { x: -3.85, z: 9.8 },
            end: { x: -1.15, z: 9.8 },
          },
          {
            //mp prostor - prava stena
            type: "partition",
            start: { x: -1.15, z: 9.8 },
            end: { x: -1.15, z: 16.6 },
          },
          {
            //mp prostor - vrchni stena
            type: "partition",
            start: { x: -1.15, z: 16.6 },
            end: { x: -3.85, z: 16.6 },
          },
          {
            //Kuchynka - leva stena
            type: "partition",
            start: { x: -0.75, z: 16.6 },
            end: { x: -0.75, z: 14.3 },
          },
          {
            //Kuchynka - spodni stena
            type: "partition",
            start: { x: -0.75, z: 14.3 },
            end: { x: 3.25, z: 14.3 },
          },
          {
            //Kuchynka - prava stena
            type: "partition",
            start: { x: 3.25, z: 14.3 },
            end: { x: 3.25, z: 16.6 },
          },
          {
            //Kuchynka - horni stena
            type: "partition",
            start: { x: 3.25, z: 16.6 },
            end: { x: -0.75, z: 16.6 },
          },
          {
            //Uklid - leva stena
            type: "partition",
            start: { x: 3.4, z: 16.6 },
            end: { x: 3.4, z: 14.3 },
          },
          {
            //Uklid - spodni stena
            type: "partition",
            start: { x: 3.4, z: 14.3 },
            end: { x: 4.5, z: 14.3 },
          },
          {
            //Uklid - prava stena
            type: "partition",
            start: { x: 4.5, z: 14.3 },
            end: { x: 4.5, z: 16.6 },
          },
          {
            //Uklid - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 16.6 },
            end: { x: 3.4, z: 16.6 },
          },
          {
            //Empty1 - leva stena
            type: "partition",
            start: { x: -0.75, z: 14 },
            end: { x: -0.75, z: 11.9 },
          },
          {
            //Empty1 - spodni stena
            type: "partition",
            start: { x: -0.75, z: 11.9 },
            end: { x: 4.5, z: 11.9 },
          },
          {
            //Empty1 - prava stena
            type: "partition",
            start: { x: 4.5, z: 11.9 },
            end: { x: 4.5, z: 14 },
          },
          {
            //Empty1 - vrchni stena
            type: "partition",
            start: { x: 4.5, z: 14 },
            end: { x: -0.75, z: 14 },
          },
          {
            //V1 - leva strena
            type: "partition",
            start: { x: -0.75, z: 11.7 },
            end: { x: -0.75, z: 9.8 },
          },
          {
            //V1 - spodni strena
            type: "partition",
            start: { x: -0.75, z: 9.8 },
            end: { x: 0.965, z: 9.8 },
          },
          {
            //V1 - prava strena
            type: "partition",
            start: { x: 0.965, z: 9.8 },
            end: { x: 0.965, z: 11.7 },
          },
          {
            //V1 - vrchni strena
            type: "partition",
            start: { x: 0.965, z: 11.7 },
            end: { x: -0.75, z: 11.7 },
          },
          {
            //V2 - leva strena
            type: "partition",
            start: { x: 1.125, z: 11.7 },
            end: { x: 1.125, z: 9.8 },
          },
          {
            //V2 - spodni strena
            type: "partition",
            start: { x: 1.125, z: 9.8 },
            end: { x: 2.735, z: 9.8 },
          },
          {
            //V2 - prava strena
            type: "partition",
            start: { x: 2.735, z: 9.8 },
            end: { x: 2.735, z: 11.7 },
          },
          {
            //V2 - vrchni strena
            type: "partition",
            start: { x: 2.735, z: 11.7 },
            end: { x: 1.125, z: 11.7 },
          },
          {
            //V3 - leva strena
            type: "partition",
            start: { x: 2.925, z: 11.7 },
            end: { x: 2.925, z: 9.8 },
          },
          {
            //V3 - spodni strena
            type: "partition",
            start: { x: 2.925, z: 9.8 },
            end: { x: 4.545, z: 9.8 },
          },
          {
            //V3 - prava strena
            type: "partition",
            start: { x: 4.545, z: 9.8 },
            end: { x: 4.545, z: 11.7 },
          },
          {
            //V3 - vrchni strena
            type: "partition",
            start: { x: 4.545, z: 11.7 },
            end: { x: 2.925, z: 11.7 },
          },
          {
            //Empty2 - leva strena
            type: "partition",
            start: { x: 5.02, z: 16.6 },
            end: { x: 5.02, z: 15.3 },
          },
          {
            //Empty2 - spodni strena
            type: "partition",
            start: { x: 5.02, z: 15.3 },
            end: { x: 9.62, z: 15.3 },
          },
          {
            //Empty2 - prava strena
            type: "partition",
            start: { x: 9.62, z: 15.3 },
            end: { x: 9.62, z: 16.6 },
          },
          {
            //Empty2 - vrchni strena
            type: "partition",
            start: { x: 9.62, z: 16.6 },
            end: { x: 5.02, z: 16.6 },
          },
          {
            //WC muzi - leva stena
            type: "partition",
            start: { x: 5.02, z: 15.1 },
            end: { x: 5.02, z: 9.8 },
          },
          {
            //WC muzi - spodni stena
            type: "partition",
            start: { x: 5.02, z: 9.8 },
            end: { x: 7.17, z: 9.8 },
          },
          {
            //WC muzi - prava stena
            type: "partition",
            start: { x: 7.17, z: 9.8 },
            end: { x: 7.17, z: 15.1 },
          },
          {
            //WC muzi - vrchni stena
            type: "partition",
            start: { x: 7.17, z: 15.1 },
            end: { x: 5.02, z: 15.1 },
          },
          {
            //WC zeny - leva stena 1
            type: "partition",
            start: { x: 7.42, z: 15.1 },
            end: { x: 7.42, z: 13.3 },
          },
          {
            //WC zeny - spojeni leve steny
            type: "partition",
            start: { x: 7.42, z: 13.3 },
            end: { x: 7.37, z: 13.3 },
          },
          {
            //WC zeny - leva stena 2
            type: "partition",
            start: { x: 7.37, z: 13.3 },
            end: { x: 7.37, z: 9.8 },
          },
          {
            //WC zeny - spodni stena
            type: "partition",
            start: { x: 7.37, z: 9.8 },
            end: { x: 9.62, z: 9.8 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 9.8 },
            end: { x: 9.62, z: 15.1 },
          },
          {
            //WC zeny - prava stena
            type: "partition",
            start: { x: 9.62, z: 15.1 },
            end: { x: 7.37, z: 15.1 },
          },
          {
            //Schodiste01 - leva
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: -10.2 },
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 10.2, z: -10.2 },
            end: { x: 6.6, z: -10.2 },
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 6.6, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - leva
            type: "partition",
            start: { x: 7.15, z: -10.46 },
            end: { x: 7.15, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - nahore
            type: "partition",
            start: { x: 7.15, z: -10.46 },
            end: { x: 9.65, z: -10.46 },
          },
          {
            //Vnitrni Schodiste01 - prava
            type: "partition",
            start: { x: 9.65, z: -10.46 },
            end: { x: 9.65, z: -16.8 },
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
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.2, z: 9.6 },
            end: { x: 10.2, z: -10.2 },
          },
          {
            //Kostka - vlevo
            type: "partition",
            start: { x: -10.2, z: 9.6 },
            end: { x: -10.2, z: -10.2 },
          },
          {
            //Kostka - dole
            type: "partition",
            start: { x: -10.2, z: -10.2 },
            end: { x: 10.2, z: -10.2 },
          },
          {
            //Kostka - dole
            type: "partition",
            start: { x: -10.2, z: 9.6 },
            end: { x: 10.2, z: 9.6 },
          },
          {
            //Spisovna/Tiskarna - vlevo
            type: "partition",
            start: { x: -7.83, z: 3.08 },
            end: { x: -7.83, z: -7.8 },
          },
          {
            //Spisovna/Tiskarna - vpravo
            type: "partition",
            start: { x: -3.13, z: 3.08 },
            end: { x: -3.13, z: -7.8 },
          },
          {
            //Spisovna/Tiskarna - nahore
            type: "partition",
            start: { x: -7.83, z: 3.08 },
            end: { x: -3.13, z: 3.08 },
          },
          {
            //Spisovna/Tiskarna - dole
            type: "partition",
            start: { x: -7.83, z: -7.8 },
            end: { x: -3.13, z: -7.8 },
          },
          {
            //Tiskarna - nahore
            type: "partition",
            start: { x: -7.68, z: 2.93 },
            end: { x: -3.28, z: 2.93 },
          },
          {
            //Tiskarna - dole
            type: "partition",
            start: { x: -7.68, z: 1.13 },
            end: { x: -3.28, z: 1.13 },
          },
          {
            //Tiskarna - vpravo
            type: "partition",
            start: { x: -3.28, z: 1.13 },
            end: { x: -3.28, z: 2.93 },
          },
          {
            //Tiskarna - vlevo
            type: "partition",
            start: { x: -7.68, z: 1.13 },
            end: { x: -7.68, z: 2.93 },
          },
          {
            //spisovna - nahore
            type: "partition",
            start: { x: -7.46, z: 0.91 },
            end: { x: -3.5, z: 0.91 },
          },
          {
            //spisovna - dole
            type: "partition",
            start: { x: -7.46, z: -7.4 },
            end: { x: -3.5, z: -7.4 },
          },
          {
            //spisovna - vlevo
            type: "partition",
            start: { x: -7.46, z: -7.4 },
            end: { x: -7.46, z: 0.91 },
          },
          {
            //spisovna - vpravo
            type: "partition",
            start: { x: -3.5, z: -7.4 },
            end: { x: -3.5, z: 0.91 },
          },
          {
            //dira - vlevo
            type: "partition",
            start: { x: -0.45, z: 6.4 },
            end: { x: -0.45, z: -7.44 },
          },
          {
            //dira - vpravo
            type: "partition",
            start: { x: 6.19, z: 6.4 },
            end: { x: 6.19, z: -7.44 },
          },
          {
            //dira - nahore
            type: "partition",
            start: { x: -0.45, z: 6.4 },
            end: { x: 6.19, z: 6.4 },
          },
          {
            //dira - dole
            type: "partition",
            start: { x: -0.45, z: -7.44 },
            end: { x: 6.19, z: -7.44 },
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
      rooms: [
        {
          name: "SCHODIŠTĚ (JÁDRO C)",
          bounds: { minX: -9.7, minZ: 10.4, maxX: -7.2, maxZ: 16.5 },
        },
        {
          name: "SCHODIŠTĚ",
          bounds: { minX: -0.7, minZ: -4.9, maxX: 4.1, maxZ: 4.7 },
        },
        {
          name: "SCHODIŠTĚ (JÁDRO B)",
          bounds: { minX: 6.7, minZ: -16.9, maxX: 10.3, maxZ: -10.3 },
        },
        {
          name: "MANIPULAČNÍ PROSTOR",
          bounds: { minX: -3.8, minZ: 9.9, maxX: -1.1, maxZ: 16.4 },
        },

        {
          name: "KUCHYŇKA",
          bounds: { minX: -0.7, minZ: 14.1, maxX: 3.3, maxZ: 16.4 },
        },
        {
          name: "WC MUŽI",
          bounds: { minX: 5, minZ: 9.9, maxX: 7.2, maxZ: 14.9 },
        },
        {
          name: "WC ŽENY",
          bounds: { minX: 7.4, minZ: 9.9, maxX: 9.6, maxZ: 14.9 },
        },
        {
          name: "ÚKLID",
          bounds: { minX: 3.3, minZ: 14.1, maxX: 4.5, maxZ: 16.4 },
        },
        {
          name: "SÍŤOVÁ TISKÁRNA",
          bounds: { minX: -7.68, minZ: 1.12, maxX: -3.28, maxZ: 2.93 },
        },
        {
          name: "SPISOVNA",
          bounds: { minX: -7.46, minZ: -7.4, maxX: -3.5, maxZ: 0.91 },
        },
        {
          name: "CENTRUM VZDĚLÁVÁNÍ A REGIONÁLNÍCH SLUŽEB",
          bounds: { minX: -16.8, minZ: 6.6, maxX: -10.2, maxZ: 16.8 },
        },
        {
          name: "CENTRUM VZDĚLÁVÁNÍ A REGIONÁLNÍCH SLUŽEB ― JEDNACÍ PROSTOR",
          bounds: { minX: -16.8, minZ: 3, maxX: -10.2, maxZ: 6.6 },
        },
        {
          name: "KANCELÁŘ PROJEKTOVÉHO MANAŽERA",
          bounds: { minX: -16.8, minZ: -0.6, maxX: -10.2, maxZ: 3 },
        },
        {
          name: "PRACOVIŠTĚ PR A ORGANIZACE AKCÍ PRO VEŘEJNOST",
          bounds: { minX: -16.8, minZ: -4.2, maxX: -10.2, maxZ: -0.6 },
        },
        {
          name: "GRAFICKÉ STUDIO",
          bounds: { minX: -16.8, minZ: -7.8, maxX: -10.2, maxZ: -4.2 },
        },
        {
          name: "ŘEDITELNA",
          bounds: { minX: -16.8, minZ: -16.8, maxX: -7.8, maxZ: -10.2 },
        },
        {
          name: "SEKRETARIÁT",
          bounds: { minX: -7.8, minZ: -16.8, maxX: -4.2, maxZ: -10.2 },
        },
        {
          name: "KANCELÁŘ ZÁSTUPCE ŘEDITELE",
          bounds: { minX: -4.2, minZ: -16.8, maxX: 0.6, maxZ: -10.2 },
        },
        {
          name: "KANCELÁŘ SPRÁVY BUDOVY",
          bounds: { minX: 0.6, minZ: -16.8, maxX: 4.2, maxZ: -10.2 },
        },
        {
          name: "PŘÍRUČNÍ SKLAD",
          bounds: { minX: 4.2, minZ: -16.8, maxX: 10.2, maxZ: -10.2 },
        },
        {
          name: "ÚČTÁRNA",
          bounds: { minX: 10.2, minZ: -16.8, maxX: 16.8, maxZ: -7.8 },
        },
        {
          name: "PŘÍRUČNÍ SKLAD PRO ÚČTÁRNU",
          bounds: { minX: 10.2, minZ: -10.2, maxX: 16.8, maxZ: -4.2 },
        },
        {
          name: "KANCELÁŘ VEDOUCÍ ODDĚLENÍ EKONOMIKY A PROVOZU",
          bounds: { minX: 10.2, minZ: -4.2, maxX: 16.8, maxZ: -0.6 },
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ PRO VZDĚLÁVÁNÍ UŽIVATELŮ",
          bounds: { minX: 10.2, minZ: -0.6, maxX: 16.8, maxZ: 3 },
        },
        {
          name: "ODBORNÉ PRACOVIŠTĚ PRO VĚDU, VÝZKUM A VÝVOJ",
          bounds: { minX: 10.2, minZ: 3, maxX: 16.8, maxZ: 6.6 },
        },
        {
          name: "MULTIMEDIÁLNÍ UČEBNA",
          bounds: { minX: 10.2, minZ: 6.6, maxX: 16.8, maxZ: 16.8 },
        },
      ],
      temperature_data: [0],
      wifi_signal_data: [0],
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
            //Schodiste01 - leva
            type: "partition",
            start: { x: 10.2, z: -16.8 },
            end: { x: 10.2, z: -10.2 },
          },
          {
            //Schodiste01 - nahore
            type: "partition",
            start: { x: 10.2, z: -10.2 },
            end: { x: 6.6, z: -10.2 },
          },
          {
            //Schodiste01 - prava
            type: "partition",
            start: { x: 6.6, z: -10.2 },
            end: { x: 6.6, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - leva
            type: "partition",
            start: { x: 7.15, z: -10.46 },
            end: { x: 7.15, z: -16.8 },
          },
          {
            //Vnitrni Schodiste01 - nahore
            type: "partition",
            start: { x: 7.15, z: -10.46 },
            end: { x: 9.65, z: -10.46 },
          },
          {
            //Vnitrni Schodiste01 - prava
            type: "partition",
            start: { x: 9.65, z: -10.46 },
            end: { x: 9.65, z: -16.8 },
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
            //vrsek - leva stena
            type: "partition",
            start: { x: -10.2, z: 16.8 },
            end: { x: -10.2, z: 9.6 },
          },
          {
            //vrsek - spodni stena
            type: "partition",
            start: { x: -10.2, z: 9.6 },
            end: { x: 10.2, z: 9.6 },
          },
          {
            //vrsek - prava stena
            type: "partition",
            start: { x: 10.2, z: 9.6 },
            end: { x: 10.2, z: 16.8 },
          },
          {
            //Schodiste02 - leva stena
            type: "partition",
            start: { x: -9.65, z: 16.6 },
            end: { x: -9.65, z: 9.8 },
          },
          {
            //Schodiste02 - spodni stena
            type: "partition",
            start: { x: -9.65, z: 9.8 },
            end: { x: -7.15, z: 9.8 },
          },
          {
            //Schodiste02 - prava stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -7.15, z: 9.8 },
          },

          {
            //Schodiste02 - vrchni stena
            type: "partition",
            start: { x: -7.15, z: 16.6 },
            end: { x: -9.65, z: 16.6 },
          },
          {
            //  prava stena vedle schodiste
            type: "partition",
            start: { x: -6.6, z: 16.55 },
            end: { x: -6.6, z: 10.9 },
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
            start: { x: -6.6, z: 16.55 },
            end: { x: 4.5, z: 16.55 },
          },
          {
            //  spodni stena stena vedle schodiste
            type: "partition",
            start: { x: -6.6, z: 14.35 },
            end: { x: 4.5, z: 14.35 },
          },
          {
            //  spodni stena stena vedle schodiste
            type: "partition",
            start: { x: 4.5, z: 14.35 },
            end: { x: 4.5, z: 16.55 },
          },
          {
            //  WC Zaměstnanci - prava stena
            type: "partition",
            start: { x: -4.8, z: 16.55 },
            end: { x: -4.8, z: 14.35 },
          },

          {
            //  WC ženy - prava stena
            type: "partition",
            start: { x: -2.975, z: 16.55 },
            end: { x: -2.975, z: 14.35 },
          },
          {
            //  WC ženy - prava stena
            type: "partition",
            start: { x: -1.175, z: 16.55 },
            end: { x: -1.175, z: 14.35 },
          },
          {
            //  WC muži -leva stena
            type: "partition",
            start: { x: -1.075, z: 16.55 },
            end: { x: -1.075, z: 14.35 },
          },
          {
            //  WC muži -prava stena
            type: "partition",
            start: { x: 0.45, z: 16.55 },
            end: { x: 0.45, z: 14.35 },
          },
          {
            //  WC muži2 -leva stena
            type: "partition",
            start: { x: 0.445, z: 16.55 },
            end: { x: 0.445, z: 14.35 },
          },
          {
            //  WC muži2 -prava stena
            type: "partition",
            start: { x: 2.295, z: 16.55 },
            end: { x: 2.295, z: 14.35 },
          },
          {
            //  WC muži3 -leva stena
            type: "partition",
            start: { x: 2.3, z: 16.55 },
            end: { x: 2.3, z: 14.35 },
          },
          {
            //  WC muži3 -prava stena
            type: "partition",
            start: { x: 4.125, z: 16.55 },
            end: { x: 4.125, z: 14.35 },
          },
          {
            //  šachta -vrchni stena
            type: "partition",
            start: { x: 4.45, z: 16.5 },
            end: { x: 9.4, z: 16.5 },
          },
          {
            //  šachta -spodni stena
            type: "partition",
            start: { x: 4.45, z: 15.3 },
            end: { x: 9.4, z: 15.3 },
          },
          {
            //  šachta -spodni stena
            type: "partition",
            start: { x: 4.45, z: 15.1 },
            end: { x: 9.4, z: 15.1 },
          },
          {
            //  šachta -prava stena
            type: "partition",
            start: { x: 9.4, z: 16.5 },
            end: { x: 9.4, z: 9.92 },
          },
          {
            //   -prava stena asi
            type: "partition",
            start: { x: 4.45, z: 16.55 },
            end: { x: 4.45, z: 12.05 },
          },
          {
            //   -prava spodni stena asi
            type: "partition",
            start: { x: 9.4, z: 9.92 },
            end: { x: -1, z: 9.92 },
          },
          {
            //   -prava stena2?
            type: "partition",
            start: { x: 4.25, z: 12.25 },
            end: { x: 4.25, z: 14.35 },
          },
          {
            //   -prava stena2?
            type: "partition",
            start: { x: 4.25, z: 12.25 },
            end: { x: -1.2, z: 12.25 },
          },
          {
            //   -prava stena2?
            type: "partition",
            start: { x: -1.2, z: 12.25 },
            end: { x: -1.2, z: 9.6 },
          },

          {
            //   -leva spodni stena2 asi
            type: "partition",
            start: { x: -1, z: 12.05 },
            end: { x: -1, z: 9.92 },
          },
          {
            //   -leva spodni stena2 asi
            type: "partition",
            start: { x: -1, z: 12.05 },
            end: { x: 4.45, z: 12.05 },
          },
          {
            //   -rozvadec leva stena
            type: "partition",
            start: { x: -0.81, z: 12.05 },
            end: { x: -0.81, z: 9.92 },
          },
          {
            //   -rozvadec prava stena
            type: "partition",
            start: { x: 0.905, z: 12.05 },
            end: { x: 0.905, z: 9.92 },
          },
          {
            //   -rozvadec FVE leva stena
            type: "partition",
            start: { x: 1.095, z: 12.05 },
            end: { x: 1.095, z: 9.92 },
          },
          {
            //   -rozvadec FVE prava stena
            type: "partition",
            start: { x: 2.19, z: 12.05 },
            end: { x: 2.19, z: 9.92 },
          },
          {
            //   -rozvadec FVE prava stena2
            type: "partition",
            start: { x: 2.34, z: 12.05 },
            end: { x: 2.34, z: 9.92 },
          },
          {
            //dira - vlevo
            type: "partition",
            start: { x: -0.45, z: 6.4 },
            end: { x: -0.45, z: -7.44 },
          },
          {
            //dira - vpravo
            type: "partition",
            start: { x: 6.19, z: 6.4 },
            end: { x: 6.19, z: -7.44 },
          },
          {
            //dira - nahore
            type: "partition",
            start: { x: -0.45, z: 6.4 },
            end: { x: 6.19, z: 6.4 },
          },
          {
            //dira - dole
            type: "partition",
            start: { x: -0.45, z: -7.44 },
            end: { x: 6.19, z: -7.44 },
          },
          {
            //Kostka - vpravo
            type: "partition",
            start: { x: 10.2, z: 9.6 },
            end: { x: 10.2, z: -10.2 },
          },
          {
            //VODOROVNA OSA VPRAVO KRATKA 9.18
            type: "partition",
            start: { x: 10.2, z: -6.69 },
            end: { x: 16.8, z: -6.69 },
          },
        ],
      },
      rooms: [
        {
          name: "SCHODIŠTĚ (JÁDRO B)",
          bounds: { minX: 6.7, minZ: -16.9, maxX: 10.3, maxZ: -10.3 },
        },

        {
          name: "ROZVADĚČE",
          bounds: { minX: -16.9, minZ: -9.9, maxX: -11.9, maxZ: -8.3 },
        },
        {
          name: "ROZDĚLOVAČE PODLAHOVÉHO TOPENÍ",
          bounds: { minX: -11.9, minZ: -11.9, maxX: -10.3, maxZ: -8.5 },
        },
        {
          name: "MANIPULAČNÍ PROSTOR",
          bounds: { minX: -3.8, minZ: 9.9, maxX: -1.1, maxZ: 16.4 },
        },
        {
          name: "KUCHYŇKA",
          bounds: { minX: -0.7, minZ: 14.1, maxX: 3.3, maxZ: 16.4 },
        },
        {
          name: "WC MUŽI",
          bounds: { minX: 5, minZ: 9.9, maxX: 7.2, maxZ: 14.9 },
        },
        {
          name: "WC ŽENY",
          bounds: { minX: 7.4, minZ: 9.9, maxX: 9.6, maxZ: 14.9 },
        },
        {
          name: "ÚKLID",
          bounds: { minX: 3.3, minZ: 14.1, maxX: 4.5, maxZ: 16.4 },
        },
        {
          name: "SCHODIŠTĚ (JÁDRO C)",
          bounds: { minX: -9.7, minZ: 10.4, maxX: -7.2, maxZ: 16.5 },
        },
        {
          name: "ROZVODNA SLP",
          bounds: { minX: -6.6, minZ: 11.8, maxX: -4, maxZ: 13.4 },
        },
        {
          name: "WC ZAMĚSTNANCI",
          bounds: { minX: -6.6, minZ: 9.9, maxX: -4, maxZ: 11.7 },
        },
        {
          name: "Sklad nábytku",
          bounds: { minX: 10.2, minZ: -16.8, maxX: 16.8, maxZ: -6.69 },
        },

        {
          name: "PROSTOR PRO TECHNOLOGIE VZT + CHLAD",
          bounds: { minX: 10.2, minZ: -6.69, maxX: 16.8, maxZ: 16.8 },
        },
      ],

      temperature_data: [0],
      wifi_signal_data: [0],
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
