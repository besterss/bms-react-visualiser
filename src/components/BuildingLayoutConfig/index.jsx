
export const CONFIG_DATA = {
  floors:  [
      {
        "id": -2,
        "name": "P2",
        "type": "underground",
        "dimensions": {
          "width": 36,
          "depth": 36
        },
        "layout": {
          "rooms_grid": {
            "columns": 18,
            "rows": 18
          },
          "walls": [
            {
              "type": "outline",
              "points": [
                {"x": -18, "z": -18},
                {"x": 18, "z": -18},
                {"x": 18, "z": 18},
                {"x": -18, "z": 18}
              ]
            },
            {
              "type": "partition",
              "start": {"x": -9, "z": -18},
              "end": {"x": -9, "z": 18}
            },
            {
              "type": "partition",
              "start": {"x": 0, "z": -18},
              "end": {"x": 0, "z": 18}
            },
            {
              "type": "partition",
              "start": {"x": 9, "z": -18},
              "end": {"x": 9, "z": 18}
            },
            {
              "type": "partition",
              "start": {"x": -18, "z": -9},
              "end": {"x": 18, "z": -9}
            },
            {
              "type": "partition",
              "start": {"x": -18, "z": 9},
              "end": {"x": 18, "z": 9}
            }
          ]
        },
        "temperature_data": [0],
        "wifi_signal_data": [0]
      },
      {
        "id": -1,
        "name": "P1",
        "type": "underground",
        "dimensions": {
          "width": 36,
          "depth": 36
        },
        "layout": {
          "rooms_grid": {
            "columns": 18,
            "rows": 18
          },
          "walls": [
            {
              "type": "outline",
              "points": [
                {"x": -18, "z": -18},
                {"x": 18, "z": -18},
                {"x": 18, "z": 18},
                {"x": -18, "z": 18}
              ]
            },
            {
              "type": "partition",
              "start": {"x": -9, "z": -18},
              "end": {"x": -9, "z": 18}
            },
            {
              "type": "partition",
              "start": {"x": 0, "z": -18},
              "end": {"x": 0, "z": 18}
            },
            {
              "type": "partition",
              "start": {"x": 9, "z": -18},
              "end": {"x": 9, "z": 18}
            },
            {
              "type": "partition",
              "start": {"x": -18, "z": -9},
              "end": {"x": 18, "z": -9}
            },
            {
              "type": "partition",
              "start": {"x": -18, "z": 9},
              "end": {"x": 18, "z": 9}
            }
          ]
        },
        "temperature_data": [0],
        "wifi_signal_data": [0]
      },
      {
        "id": 0,
        "name": "1NP",
        "type": "underground",
        "dimensions": {
          "width": 36,
          "depth": 36
        },
        "layout": {
          "rooms_grid": {
            "columns":18,
            "rows": 18
          },
          "walls": [
            {
              "type": "outline",
              "points": [
                {"x": -18, "z": -18},
                {"x": 18, "z": -18},
                {"x": 18, "z": 18},
                {"x": -18, "z": 18}
              ]
            },
            { //spo stena leva
              "type": "partition",
              "start": {"x": -11.4, "z": 18},
              "end": {"x": -11.4, "z": 10.6}
            },
            {
              "type": "partition",
              "start": {"x": -11.4, "z": 11.4},
              "end": {"x": -18, "z": 11.4}
            },
            { //spol stena vodorovna
              "type": "partition",
              "start": {"x": -11.4, "z": 10.6},
              "end": {"x": 9, "z": 10.6}
            },
            { //spol stena prava
              "type": "partition",
              "start": {"x": 9, "z": 10.6},
              "end": {"x": 9, "z": 18}
            },
            { //1.02
              "type": "partition",
              "start": {"x": -10.8, "z": 17.6},
              "end": {"x": -10.8, "z": 11.5}
            },
            {
              "type": "partition",
              "start": {"x": -10.8, "z": 11.5},
              "end": {"x": -8.3, "z": 11.5}
            },
            {
              "type": "partition",
              "start": {"x": -8.3, "z": 11.5},
              "end": {"x": -8.3, "z": 17.6}
            },
            {
              "type": "partition",
              "start": {"x": -8.3, "z": 17.6},
              "end": {"x": -10.8, "z": 17.6}
            },
            { //
              "type": "partition",
              "start": {"x": -7.7, "z": 17.5},
              "end": {"x": -7.7, "z": 16.1}
            },
            {
              "type": "partition",
              "start": {"x": -7.7, "z": 16.1},
              "end": {"x": -5.1, "z": 16.1}
            },
            {
              "type": "partition",
              "start": {"x": -5.1, "z": 16.1},
              "end": {"x": -5.1, "z": 17.5}
            },
            {
              "type": "partition",
              "start": {"x": -5.1, "z": 17.5},
              "end": {"x": -7.7, "z": 17.5}
            },
            { //
              "type": "partition",
              "start": {"x": -7.7, "z": 16},
              "end": {"x": -7.7, "z": 14.6}
            },
            {
              "type": "partition",
              "start": {"x": -7.7, "z": 14.6},
              "end": {"x": -5.1 , "z": 14.6}
            },
            {
              "type": "partition",
              "start": {"x": -5.1, "z": 14.6},
              "end": {"x": -5.1 , "z": 16}
            },
            {
              "type": "partition",
              "start": {"x": -5.1, "z": 15.9},
              "end": {"x": -7.7 , "z": 16}
            },
            { //
              "type": "partition",
              "start": {"x": -7.7, "z": 14.5},
              "end": {"x": -7.7 , "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": -7.7, "z": 12.9},
              "end": {"x": -5.1 , "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": -5.1, "z": 12.9},
              "end": {"x": -5.1 , "z": 14.5}
            },
            {
              "type": "partition",
              "start": {"x": -5.1, "z": 14.5},
              "end": {"x": -7.7 , "z": 14.5}
            },
            { //
              "type": "partition",
              "start": {"x": -7.7, "z": 12.8},
              "end": {"x": -7.7 , "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": -7.7, "z": 11},
              "end": {"x": -5.1 , "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": -5.1, "z": 11},
              "end": {"x": -5.1 , "z": 12.8}
            },
            {
              "type": "partition",
              "start": {"x": -5.1, "z": 12.8},
              "end": {"x": -7.7 , "z": 12.8}
            },
            { // 1.04
              "type": "partition",
              "start": {"x": -4.9, "z": 17.5},
              "end": {"x": -4.9 , "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": -4.9, "z": 11},
              "end": {"x": -2.2 , "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": -2.2, "z": 11},
              "end": {"x": -2.2 , "z": 17.5}
            },
            {
              "type": "partition",
              "start": {"x": -2.2, "z": 17.5},
              "end": {"x": -4.9 , "z": 17.5}
            },
            { // 1.19
              "type": "partition",
              "start": {"x": -1.8, "z": 17.5},
              "end": {"x": -1.8 , "z": 15.2}
            },
            {
              "type": "partition",
              "start": {"x": -1.8, "z": 15.2},
              "end": {"x": 2.2 , "z": 15.2}
            },
            {
              "type": "partition",
              "start": {"x": 2.2, "z": 15.2},
              "end": {"x": 2.2 , "z": 16.3}
            },
            {
              "type": "partition",
              "start": {"x": 2.2, "z": 16.3},
              "end": {"x": 2.3 , "z": 16.3}
            },
            {
              "type": "partition",
              "start": {"x": 2.3, "z": 16.3},
              "end": {"x": 2.3 , "z": 15.2}
            },
            {
              "type": "partition",
              "start": {"x": 2.3, "z": 15.2},
              "end": {"x": 3.4 , "z": 15.2}
            },
            {
              "type": "partition",
              "start": {"x": 3.4, "z": 15.2},
              "end": {"x": 3.4 , "z": 17.5}
            },
            {
              "type": "partition",
              "start": {"x": 3.4, "z": 17.5},
              "end": {"x": 2.3 , "z": 17.5}
            },
            {
              "type": "partition",
              "start": {"x": 2.3, "z": 17.5},
              "end": {"x": 2.3 , "z": 17}
            },
            {
              "type": "partition",
              "start": {"x": 2.3, "z": 17},
              "end": {"x": 2.2 , "z": 17}
            },
            {
              "type": "partition",
              "start": {"x": 2.2, "z": 17},
              "end": {"x": 2.2 , "z": 17.5}
            },
            {
              "type": "partition",
              "start": {"x": 2.2, "z": 17.5},
              "end": {"x": -1.8 , "z": 17.5}
            },
            { // sachta za vytahy
              "type": "partition",
              "start": {"x": -1.8, "z": 15.1},
              "end": {"x": -1.8 , "z": 13}
            },
            { 
              "type": "partition",
              "start": {"x": -1.8, "z": 13},
              "end": {"x": 3.4 , "z": 13}
            },
            { 
              "type": "partition",
              "start": {"x": 3.4, "z": 13},
              "end": {"x": 3.4 , "z": 15.1}
            },
            { 
              "type": "partition",
              "start": {"x": 3.4, "z": 15.1},
              "end": {"x": -1.8 , "z": 15.1}
            },
            { //vytahy
              "type": "partition",
              "start": {"x": -1.8, "z": 12.9},
              "end": {"x": -1.8 , "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": -1.8, "z": 11},
              "end": {"x": -0.2 , "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": -0.2, "z": 11},
              "end": {"x": -0.2 , "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": -0.2, "z": 12.9},
              "end": {"x": -1.8 , "z": 12.9}
            },
            { //
              "type": "partition",
              "start": {"x": 0, "z": 12.9},
              "end": {"x": 0, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 0, "z": 11},
              "end": {"x": 1.6, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 1.6, "z": 11},
              "end": {"x": 1.6, "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": 1.6, "z": 12.9},
              "end": {"x": 0, "z": 12.9}
            },
            { //
              "type": "partition",
              "start": {"x": 1.8, "z": 12.9},
              "end": {"x": 1.8, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 1.8, "z": 11},
              "end": {"x": 3.4, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 3.4, "z": 11},
              "end": {"x": 3.4, "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": 3.4, "z": 12.9},
              "end": {"x": 1.6, "z": 12.9}
            },
            { // sachta nejaka
              "type": "partition",
              "start": {"x": 3.9, "z": 17.5},
              "end": {"x": 3.9, "z": 16.2}
            },
            {
              "type": "partition",
              "start": {"x": 3.9, "z": 16.2},
              "end": {"x": 8.5, "z": 16.2}
            },
            {
              "type": "partition",
              "start": {"x": 8.5, "z": 17.5},
              "end": {"x": 8.5, "z": 16.2}
            },
            {
              "type": "partition",
              "start": {"x": 8.5, "z": 17.5},
              "end": {"x": 3.9, "z": 17.5}
            },
            { // zachody
              "type": "partition",
              "start": {"x": 3.9, "z": 16},
              "end": {"x": 3.9, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 3.9, "z": 11},
              "end": {"x": 6.1, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 6.1, "z": 16},
              "end": {"x": 6.1, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 6.1, "z": 16},
              "end": {"x": 3.9, "z": 16}
            },
            { // zachody 2
              "type": "partition",
              "start": {"x": 6.3, "z": 16},
              "end": {"x": 6.3, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 6.3, "z": 11},
              "end": {"x": 8.5, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 8.5, "z": 11},
              "end": {"x": 8.5, "z": 16}
            },
            {
              "type": "partition",
              "start": {"x": 8.5, "z": 16},
              "end": {"x": 6.3, "z": 16}
            },
            { //sspodni cast
              "type": "partition",
              "start": {"x": -10.1, "z": -18},
              "end": {"x": -10.1, "z": -15}
            },
            {
              "type": "partition",
              "start": {"x": -10.1, "z": -15},
              "end": {"x": 1.8, "z": -15}
            },
            {
              "type": "partition",
              "start": {"x": 1.8, "z": -15},
              "end": {"x": 1.8, "z": -18}
            },
            {
              "type": "partition",
              "start": {"x": -1.7, "z": -15},
              "end": {"x": -1.7, "z": -18}
            },
            {
              //2.09
              "type": "partition",
              "start": { x: -18, z: -11.4 },
              "end": { x: -11.4, z: -11.4 },
            },
            {
              "type": "partition",
              "start": { x: -11.4, z: -11.4 },
              "end": { x: -11.4, z: -9 },
            },
            {
              "type": "partition",
              "start": { x: -18, z: -9 },
              "end": { x: -11.4, z: -9 },
            },
            {
              "type": "partition",
              "start": { x: -17.4, z: -9.4 },
              "end": { x: -17.4, z: -11 },
            },
            {
              "type": "partition",
              "start": { x: -17.4, z: -9.4 },
              "end": { x: -13, z: -9.4 },
            },
            {
              "type": "partition",
              "start": { x: -17.4, z: -11 },
              "end": { x: -13, z: -11 },
            },
            {
              "type": "partition",
              "start": { x: -13, z: -9.4 },
              "end": { x: -13, z: -9.6 },
            },
            {
              "type": "partition",
              "start": { x: -13, z: -11 },
              "end": { x: -13, z: -10.8 },
            },
            {
              "type": "partition",
              "start": { x: -13, z: -10.8 },
              "end": { x: -11.4, z: -10.8 },
            },
            {
              "type": "partition",
              "start": { x: -13, z: -9.6 },
              "end": { x: -11.4, z: -9.6 },
            },
            { //1.11
              "type": "partition",
              "start": { x: -1.8, z: -6 },
              "end": { x: -1.8, z: 3.6 },
            },
            {
              "type": "partition",
              "start": { x: -1.8, z: 3.6 },
              "end": { x: 3, z: 3.6 },
            },
            {
              "type": "partition",
              "start": { x: 3, z: -6 },
              "end": { x: 3, z: 3.6 },
            },
            {
              "type": "partition",
              "start": { x: -1.8, z: -6 },
              "end": { x: 3, z: -6 },
            },
            {
              "type": "partition",
              "start": { x: 0.5, z: 1.4 },
              "end": { x: 0.5, z: -3.2 },
            },
            {
              "type": "partition",
              "start": { x: 0.5, z: -3.2 },
              "end": { x: 0.7, z: -3.2 },
            },
            {
              "type": "partition",
              "start": { x: 0.7, z: -3.2 },
              "end": { x: 0.7, z: 1.4 },
            },
            {
              "type": "partition",
              "start": { x: 0.5, z: 1.4 },
              "end": { x: 0.7, z: 1.4 },
            },
            {
              //2.01
              "type": "partition",
              "start": { x: 11.4, z: -18 },
              "end": { x: 11.4, z: -11.4 },
            },
            {
              "type": "partition",
              "start": { x: 11.4, z: -11.4 },
              "end": { x: 7.8, z: -11.4 },
            },
            {
              "type": "partition",
              "start": { x: 7.8, z: -11.4 },
              "end": { x: 7.8, z: -18 },
            },
            {
              //2.01
              "type": "partition",
              "start": { x: 10.8, z: -18 },
              "end": { x: 10.8, z: -11.6 },
            },
            {
              "type": "partition",
              "start": { x: 10.8, z: -11.6 },
              "end": { x: 8.3, z: -11.6 },
            },
            {
              "type": "partition",
              "start": { x: 8.3, z: -11.6 },
              "end": { x: 8.3, z: -18 },
            },
          ]
        },
        "temperature_data": [0],
        "wifi_signal_data": [0]
      },
      {
        id: 1,
        name: "2NP",
        type: "underground",
        dimensions: {
          width: 36,
          depth: 36,
        },
        layout: {
          rooms_grid: {
            columns: 18,
            rows: 18,
          },

          walls: [
            {
              type: "outline",
              points: [
                { x: -18, z: -18 },
                { x: 18, z: -18 },
                { x: 18, z: 18 },
                { x: -18, z: 18 },
              ],
            },

            {
              type: "outline",
              points: [
                { x: -16.9, z: -16.9 },
                { x: 16.9, z: -16.9 },
                { x: 16.9, z: 16.9 },
                { x: -16.9, z: 16.9 },
              ],
            },

            {
              //2.09
              type: "partition",
              start: { x: -16.9, z: -10.3 },
              end: { x: -10.3, z: -10.3 },
            },
            {
              type: "partition",
              start: { x: -10.3, z: -10.3 },
              end: { x: -10.3, z: -7.9 },
            },
            {
              type: "partition",
              start: { x: -16.9, z: -7.9 },
              end: { x: -10.3, z: -7.9 },
            },
            {
              type: "partition",
              start: { x: -16.3, z: -8.3 },
              end: { x: -16.3, z: -9.9 },
            },
            {
              type: "partition",
              start: { x: -16.3, z: -8.3 },
              end: { x: -11.9, z: -8.3 },
            },
            {
              type: "partition",
              start: { x: -16.3, z: -9.9 },
              end: { x: -11.9, z: -9.9 },
            },
            {
              type: "partition",
              start: { x: -11.9, z: -8.3 },
              end: { x: -11.9, z: -8.5 },
            },
            {
              type: "partition",
              start: { x: -11.9, z: -9.9 },
              end: { x: -11.9, z: -9.7 },
            },
            {
              type: "partition",
              start: { x: -11.9, z: -9.7 },
              end: { x: -10.3, z: -9.7 },
            },
            {
              type: "partition",
              start: { x: -11.9, z: -8.5 },
              end: { x: -10.3, z: -8.5 },
            },
            {
              //2.01
              type: "partition",
              start: { x: 10.3, z: -16.9 },
              end: { x: 10.3, z: -10.3 },
            },
            {
              type: "partition",
              start: { x: 10.3, z: -10.3 },
              end: { x: 6.7, z: -10.3 },
            },
            {
              type: "partition",
              start: { x: 6.7, z: -10.3 },
              end: { x: 6.7, z: -16.9 },
            },
            {
              //2.01
              type: "partition",
              start: { x: 9.7, z: -16.9 },
              end: { x: 9.7, z: -10.5 },
            },
            {
              type: "partition",
              start: { x: 9.7, z: -10.5 },
              end: { x: 7.2, z: -10.5 },
            },
            {
              type: "partition",
              start: { x: 7.2, z: -10.5 },
              end: { x: 7.2, z: -16.9 },
            },
            {
              //2.13
              type: "partition",
              start: { x: -5, z: -11.5 },
              end: { x: -2.6, z: -11.5 },
            },
            {
              type: "partition",
              start: { x: -5, z: -15.7 },
              end: { x: -2.6, z: -15.7 },
            },
            {
              type: "partition",
              start: { x: -5, z: -11.5 },
              end: { x: -5, z: -15.7 },
            },
            {
              type: "partition",
              start: { x: -2.6, z: -11.5 },
              end: { x: -2.6, z: -15.7 },
            },
            //2.14
            {
              type: "partition",
              start: { x: -10.3, z: -4.9 },
              end: { x: -10.3, z: -0.7 },
            },
            {
              type: "partition",
              start: { x: -10.3, z: -4.9 },
              end: { x: -6.1, z: -4.9 },
            },
            {
              type: "partition",
              start: { x: -6.1, z: -4.9 },
              end: { x: -6.1, z: -0.7 },
            },
            {
              type: "partition",
              start: { x: -10.3, z: -0.7 },
              end: { x: -6.1, z: -0.7 },
            },
            //2.11
            {
              type: "partition",
              start: { x: -0.7, z: -4.9 },
              end: { x: -0.7, z: 4.7 },
            },
            {
              type: "partition",
              start: { x: -0.7, z: 4.7 },
              end: { x: 4.1, z: 4.7 },
            },
            {
              type: "partition",
              start: { x: 4.1, z: -4.9 },
              end: { x: 4.1, z: 4.7 },
            },
            {
              type: "partition",
              start: { x: -0.7, z: -4.9 },
              end: { x: 4.1, z: -4.9 },
            },
            {
              type: "partition",
              start: { x: 1.6, z: 2.5 },
              end: { x: 1.6, z: -2.1 },
            },
            {
              type: "partition",
              start: { x: 1.6, z: -2.1 },
              end: { x: 1.8, z: -2.1 },
            },
            {
              type: "partition",
              start: { x: 1.8, z: -2.1 },
              end: { x: 1.8, z: 2.5 },
            },
            {
              type: "partition",
              start: { x: 1.6, z: 2.5 },
              end: { x: 1.8, z: 2.5 },
            },
            {
              //2.18
              type: "partition",
              start: { x: 5.9, z: 4.7 },
              end: { x: 5.9, z: 0.5 },
            },
            {
              type: "partition",
              start: { x: 5.9, z: 4.7 },
              end: { x: 8.3, z: 4.7 },
            },
            {
              type: "partition",
              start: { x: 8.3, z: 4.7 },
              end: { x: 8.3, z: 0.5 },
            },
            {
              type: "partition",
              start: { x: 5.9, z: 0.5 },
              end: { x: 8.3, z: 0.5 },
            },

            {
              //2.15
              type: "partition",
              start: { x: -15.7, z: 13.9 },
              end: { x: -15.7, z: 9.7 },
            },
            {
              type: "partition",
              start: { x: -15.7, z: 13.9 },
              end: { x: -11.5, z: 13.9 },
            },
            {
              type: "partition",
              start: { x: -15.7, z: 9.7 },
              end: { x: -11.5, z: 9.7 },
            },
            {
              type: "partition",
              start: { x: -11.5, z: 13.9 },
              end: { x: -11.5, z: 9.7 },
            },
            {
              //spo stena leva
              type: "partition",
              start: { x: -10.3, z: 16.9 },
              end: { x: -10.3, z: 9.5 },
            },
            {
              //spol stena vodorovna
              type: "partition",
              start: { x: -10.3, z: 9.5 },
              end: { x: 10.3, z: 9.5 },
            },
            {
              //spol stena prava
              type: "partition",
              start: { x: 10.3, z: 9.5 },
              end: { x: 10.3, z: 16.9 },
            },
            {
              //1.02
              type: "partition",
              start: { x: -9.7, z: 16.5 },
              end: { x: -9.7, z: 10.4 },
            },
            {
              type: "partition",
              start: { x: -9.7, z: 10.4 },
              end: { x: -7.2, z: 10.4 },
            },
            {
              type: "partition",
              start: { x: -7.2, z: 10.4 },
              end: { x: -7.2, z: 16.5 },
            },
            {
              type: "partition",
              start: { x: -7.2, z: 16.5 },
              end: { x: -9.7, z: 16.5 },
            },
            {
              //
              type: "partition",
              start: { x: -6.6, z: 16.5 },
              end: { x: -6.6, z: 15 },
            },
            {
              type: "partition",
              start: { x: -6.6, z: 15 },
              end: { x: -4, z: 15 },
            },
            {
              type: "partition",
              start: { x: -4, z: 15 },
              end: { x: -4, z: 16.4 },
            },
            {
              type: "partition",
              start: { x: -4, z: 16.4 },
              end: { x: -6.6, z: 16.4 },
            },
            {
              //
              type: "partition",
              start: { x: -6.6, z: 14.9 },
              end: { x: -6.6, z: 13.5 },
            },
            {
              type: "partition",
              start: { x: -6.6, z: 13.5 },
              end: { x: -4, z: 13.5 },
            },
            {
              type: "partition",
              start: { x: -4, z: 13.5 },
              end: { x: -4, z: 14.9 },
            },
            {
              type: "partition",
              start: { x: -4, z: 14.9 },
              end: { x: -6.6, z: 14.9 },
            },
            {
              //
              type: "partition",
              start: { x: -6.6, z: 13.4 },
              end: { x: -6.6, z: 11.8 },
            },
            {
              type: "partition",
              start: { x: -6.6, z: 11.8 },
              end: { x: -4, z: 11.8 },
            },
            {
              type: "partition",
              start: { x: -4, z: 11.8 },
              end: { x: -4, z: 13.4 },
            },
            {
              type: "partition",
              start: { x: -4, z: 13.4 },
              end: { x: -6.6, z: 13.4 },
            },
            {
              //
              type: "partition",
              start: { x: -6.6, z: 11.7 },
              end: { x: -6.6, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: -6.6, z: 9.9 },
              end: { x: -4, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: -4, z: 9.9 },
              end: { x: -4, z: 11.7 },
            },
            {
              type: "partition",
              start: { x: -4, z: 11.7 },
              end: { x: -6.6, z: 11.7 },
            },
            {
              // 1.04
              type: "partition",
              start: { x: -3.8, z: 16.4 },
              end: { x: -3.8, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: -3.8, z: 9.9 },
              end: { x: -1.1, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: -1.1, z: 9.9 },
              end: { x: -1.1, z: 16.4 },
            },
            {
              type: "partition",
              start: { x: -1.1, z: 16.4 },
              end: { x: -3.8, z: 16.4 },
            },
            {
              // 1.19
              type: "partition",
              start: { x: -0.7, z: 16.4 },
              end: { x: -0.7, z: 14.1 },
            },
            {
              type: "partition",
              start: { x: -0.7, z: 14.1 },
              end: { x: 3.3, z: 14.1 },
            },
            {
              type: "partition",
              start: { x: 3.3, z: 14.1 },
              end: { x: 3.3, z: 15.2 },
            },
            {
              type: "partition",
              start: { x: 3.3, z: 15.2 },
              end: { x: 3.4, z: 15.2 },
            },
            {
              type: "partition",
              start: { x: 3.4, z: 15.2 },
              end: { x: 3.4, z: 14.1 },
            },
            {
              type: "partition",
              start: { x: 3.4, z: 14.1 },
              end: { x: 4.5, z: 14.1 },
            },
            {
              type: "partition",
              start: { x: 4.5, z: 14.1 },
              end: { x: 4.5, z: 16.4 },
            },
            {
              type: "partition",
              start: { x: 4.5, z: 16.4 },
              end: { x: 3.4, z: 16.4 },
            },
            {
              type: "partition",
              start: { x: 3.4, z: 16.4 },
              end: { x: 3.4, z: 15.9 },
            },
            {
              type: "partition",
              start: { x: 3.4, z: 15.9 },
              end: { x: 3.3, z: 15.9 },
            },
            {
              type: "partition",
              start: { x: 3.3, z: 15.9 },
              end: { x: 3.3, z: 16.4 },
            },
            {
              type: "partition",
              start: { x: 3.3, z: 16.4 },
              end: { x: -0.7, z: 16.4 },
            },
            {
              // sachta za vytahy
              type: "partition",
              start: { x: -0.7, z: 14 },
              end: { x: -0.7, z: 11.9 },
            },
            {
              type: "partition",
              start: { x: -0.7, z: 11.9 },
              end: { x: 4.5, z: 11.9 },
            },
            {
              type: "partition",
              start: { x: 4.5, z: 11.9 },
              end: { x: 4.5, z: 14 },
            },
            {
              type: "partition",
              start: { x: 4.5, z: 14 },
              end: { x: -0.7, z: 14 },
            },
            {
              //vytahy
              type: "partition",
              start: { x: -0.7, z: 11.8 },
              end: { x: -0.7, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: -0.7, z: 9.9 },
              end: { x: 0.9, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: 0.9, z: 9.9 },
              end: { x: 0.9, z: 11.8 },
            },
            {
              type: "partition",
              start: { x: 0.9, z: 11.8 },
              end: { x: -0.7, z: 11.8 },
            },
            {
              //
              type: "partition",
              start: { x: 1.1, z: 11.8 },
              end: { x: 1.1, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: 1.1, z: 9.9 },
              end: { x: 2.7, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: 2.7, z: 9.9 },
              end: { x: 2.7, z: 11.8 },
            },
            {
              type: "partition",
              start: { x: 2.7, z: 11.8 },
              end: { x: 1.1, z: 11.8 },
            },
            {
              //
              type: "partition",
              start: { x: 2.9, z: 11.8 },
              end: { x: 2.9, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: 2.9, z: 9.9 },
              end: { x: 4.5, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: 4.5, z: 9.9 },
              end: { x: 4.5, z: 11.8 },
            },
            {
              type: "partition",
              start: { x: 4.5, z: 11.8 },
              end: { x: 2.9, z: 11.8 },
            },
            {
              // sachta nejaka
              type: "partition",
              start: { x: 5, z: 16.4 },
              end: { x: 5, z: 15.1 },
            },
            {
              type: "partition",
              start: { x: 5, z: 15.1 },
              end: { x: 9.6, z: 15.1 },
            },
            {
              type: "partition",
              start: { x: 9.6, z: 16.4 },
              end: { x: 9.6, z: 15.1 },
            },
            {
              type: "partition",
              start: { x: 9.6, z: 16.4 },
              end: { x: 5, z: 16.4 },
            },
            {
              // zachody
              type: "partition",
              start: { x: 5, z: 14.9 },
              end: { x: 5, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: 5, z: 9.9 },
              end: { x: 7.2, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: 7.2, z: 14.9 },
              end: { x: 7.2, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: 7.2, z: 14.9 },
              end: { x: 5, z: 14.9 },
            },
            {
              // zachody 2
              type: "partition",
              start: { x: 7.4, z: 14.9 },
              end: { x: 7.4, z: 9.9 },
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
        "id": 2,
        "name": "3NP",
        "type": "underground",
        "dimensions": {
          "width": 36,
          "depth": 36
        },
        "layout": {
          "rooms_grid": {
            "columns":18,
            "rows": 18
          },
          "walls": [
            {
              "type": "outline",
              "points": [
                {"x": -18, "z": -18},
                {"x": 18, "z": -18},
                {"x": 18, "z": 18},
                {"x": -18, "z": 18}
              ]
            },
            {
              "type": "outline",
              "points": [
                {"x": -16.9, "z": -16.9},
                {"x": 16.9, "z": -16.9},
                {"x": 16.9, "z": 16.9},
                {"x": -16.9, "z": 16.9}
              ]
            },
            { //spo stena leva
              "type": "partition",
              "start": {"x": -10.3, "z": 16.9},
              "end": {"x": -10.3, "z": 9.5}
            },
            { //spol stena vodorovna
              "type": "partition",
              "start": {"x": -10.3, "z": 9.5},
              "end": {"x": 10.3, "z": 9.5}
            },
            { 
              "type": "partition",
              "start": {"x": 10.3, "z": 8.8},
              "end": {"x": 10.3, "z": 16.9}
            },
            { 
              "type": "partition",
              "start": {"x": 10.3, "z": 8.8},
              "end": {"x": 13.5, "z": 8.8}
            },
            { 
              "type": "partition",
              "start": {"x": 13.5, "z": 8.8},
              "end": {"x": 13.5, "z": 7.7}
            },
            { 
              "type": "partition",
              "start": {"x": 13.5, "z": 7.7},
              "end": {"x": 10.3, "z": 7.7}
            },
            { 
              "type": "partition",
              "start": {"x": 10.3, "z": 7.7},
              "end": {"x": 10.3, "z": -16.9}
            },
            { //1.02
              "type": "partition",
              "start": {"x": -9.7, "z": 16.5},
              "end": {"x": -9.7, "z": 10.4}
            },
            {
              "type": "partition",
              "start": {"x": -9.7, "z": 10.4},
              "end": {"x": -7.2, "z": 10.4}
            },
            {
              "type": "partition",
              "start": {"x": -7.2, "z": 10.4},
              "end": {"x": -7.2, "z": 16.5}
            },
            {
              "type": "partition",
              "start": {"x": -7.2, "z": 16.5},
              "end": {"x": -9.7, "z": 16.5}
            },
            { //
              "type": "partition",
              "start": {"x": -6.6, "z": 16.5},
              "end": {"x": -6.6, "z": 15}
            },
            {
              "type": "partition",
              "start": {"x": -6.6, "z": 15},
              "end": {"x": -4, "z": 15}
            },
            {
              "type": "partition",
              "start": {"x": -4, "z": 15},
              "end": {"x": -4, "z": 16.4}
            },
            {
              "type": "partition",
              "start": {"x": -4, "z": 16.4},
              "end": {"x": -6.6, "z": 16.4}
            },
            { //
              "type": "partition",
              "start": {"x": -6.6, "z": 14.9},
              "end": {"x": -6.6, "z": 13.5}
            },
            {
              "type": "partition",
              "start": {"x": -6.6, "z": 13.5},
              "end": {"x": -4 , "z": 13.5}
            },
            {
              "type": "partition",
              "start": {"x": -4, "z": 13.5},
              "end": {"x": -4 , "z": 14.9}
            },
            {
              "type": "partition",
              "start": {"x": -4, "z": 14.9},
              "end": {"x": -6.6 , "z": 14.9}
            },
            { //
              "type": "partition",
              "start": {"x": -6.6, "z": 13.4},
              "end": {"x": -6.6 , "z": 11.8}
            },
            {
              "type": "partition",
              "start": {"x": -6.6, "z": 11.8},
              "end": {"x": -4 , "z": 11.8}
            },
            {
              "type": "partition",
              "start": {"x": -4, "z": 11.8},
              "end": {"x": -4 , "z": 13.4}
            },
            {
              "type": "partition",
              "start": {"x": -4, "z": 13.4},
              "end": {"x": -6.6 , "z": 13.4}
            },
            { //
              "type": "partition",
              "start": {"x": -6.6, "z": 11.7},
              "end": {"x": -6.6 , "z": 9.9}
            },
            {
              "type": "partition",
              "start": {"x": -6.6, "z": 9.9},
              "end": {"x": -4 , "z": 9.9}
            },
            {
              "type": "partition",
              "start": {"x": -4, "z": 9.9},
              "end": {"x": -4 , "z": 11.7}
            },
            {
              "type": "partition",
              "start": {"x": -4, "z": 11.7},
              "end": {"x": -6.6 , "z": 11.7}
            },
            { // 1.04
              "type": "partition",
              "start": {"x": -3.8, "z": 16.4},
              "end": {"x": -3.8 , "z": 9.9}
            },
            {
              "type": "partition",
              "start": {"x": -3.8, "z": 9.9},
              "end": {"x": -1.1 , "z": 9.9}
            },
            {
              "type": "partition",
              "start": {"x": -1.1, "z": 9.9},
              "end": {"x": -1.1 , "z": 16.4}
            },
            {
              "type": "partition",
              "start": {"x": -1.1, "z": 16.4},
              "end": {"x": -3.8 , "z": 16.4}
            },
            { // 1.19
              "type": "partition",
              "start": {"x": -0.7, "z": 16.4},
              "end": {"x": -0.7 , "z": 14.1}
            },
            {
              "type": "partition",
              "start": {"x": -0.7, "z": 14.1},
              "end": {"x": 3.3 , "z": 14.1}
            },
            {
              "type": "partition",
              "start": {"x": 3.3, "z": 14.1},
              "end": {"x": 3.3 , "z": 15.2}
            },
            {
              "type": "partition",
              "start": {"x": 3.3, "z": 15.2},
              "end": {"x": 3.4 , "z": 15.2}
            },
            {
              "type": "partition",
              "start": {"x": 3.4, "z": 15.2},
              "end": {"x": 3.4 , "z": 14.1}
            },
            {
              "type": "partition",
              "start": {"x": 3.4, "z": 14.1},
              "end": {"x": 4.5 , "z": 14.1}
            },
            {
              "type": "partition",
              "start": {"x": 4.5, "z": 14.1},
              "end": {"x": 4.5 , "z": 16.4}
            },
            {
              "type": "partition",
              "start": {"x": 4.5, "z": 16.4},
              "end": {"x": 3.4 , "z": 16.4}
            },
            {
              "type": "partition",
              "start": {"x": 3.4, "z": 16.4},
              "end": {"x": 3.4 , "z": 15.9}
            },
            {
              "type": "partition",
              "start": {"x": 3.4, "z": 15.9},
              "end": {"x": 3.3 , "z": 15.9}
            },
            {
              "type": "partition",
              "start": {"x": 3.3, "z": 15.9},
              "end": {"x": 3.3 , "z": 16.4}
            },
            {
              "type": "partition",
              "start": {"x": 3.3, "z": 16.4},
              "end": {"x": -0.7 , "z": 16.4}
            },
            { // sachta za vytahy
              "type": "partition",
              "start": {"x": -0.7, "z": 14},
              "end": {"x": -0.7 , "z": 11.9}
            },
            { 
              "type": "partition",
              "start": {"x": -0.7, "z": 11.9},
              "end": {"x": 4.5 , "z": 11.9}
            },
            { 
              "type": "partition",
              "start": {"x": 4.5, "z": 11.9},
              "end": {"x": 4.5 , "z": 14}
            },
            { 
              "type": "partition",
              "start": {"x": 4.5, "z": 14},
              "end": {"x": -0.7 , "z": 14}
            },
            { //vytahy
              "type": "partition",
              "start": {"x": -0.7, "z": 11.8},
              "end": {"x": -0.7 , "z": 9.9}
            },
            {
              "type": "partition",
              "start": {"x": -0.7, "z": 9.9},
              "end": {"x": 0.9 , "z": 9.9}
            },
            {
              "type": "partition",
              "start": {"x": 0.9, "z": 9.9},
              "end": {"x": 0.9, "z": 11.8}
            },
            {
              "type": "partition",
              "start": {"x": 0.9, "z": 11.8},
              "end": {"x": -0.7, "z": 11.8}
            },
            { //
              "type": "partition",
              "start": {"x": 1.1, "z": 11.8},
              "end": {"x": 1.1, "z": 9.9}
            },
            {
              "type": "partition",
              "start": {"x": 1.1, "z": 9.9},
              "end": {"x": 2.7, "z": 9.9}
            },
            {
              "type": "partition",
              "start": {"x": 2.7, "z": 9.9},
              "end": {"x": 2.7, "z": 11.8}
            },
            {
              "type": "partition",
              "start": {"x": 2.7, "z": 11.8},
              "end": {"x": 1.1, "z": 11.8}
            },
            { //
              "type": "partition",
              "start": {"x": 2.9, "z": 11.8},
              "end": {"x": 2.9, "z": 9.9}
            },
            {
              "type": "partition",
              "start": {"x": 2.9, "z": 9.9},
              "end": {"x": 4.5, "z": 9.9}
            },
            {
              "type": "partition",
              "start": {"x": 4.5, "z": 9.9},
              "end": {"x": 4.5, "z": 11.8}
            },
            {
              "type": "partition",
              "start": {"x": 4.5, "z": 11.8},
              "end": {"x": 2.9, "z": 11.8}
            },
            { // sachta nejaka
              "type": "partition",
              "start": {"x": 5, "z": 16.4},
              "end": {"x": 5, "z": 15.1}
            },
            {
              "type": "partition",
              "start": {"x": 5, "z": 15.1},
              "end": {"x": 9.6, "z": 15.1}
            },
            {
              "type": "partition",
              "start": {"x": 9.6, "z": 16.4},
              "end": {"x": 9.6, "z": 15.1}
            },
            {
              "type": "partition",
              "start": {"x": 9.6, "z": 16.4},
              "end": {"x": 5, "z": 16.4}
            },
            { // zachody
              "type": "partition",
              "start": {"x": 5, "z": 14.9},
              "end": {"x": 5, "z": 9.9}
            },
            {
              "type": "partition",
              "start": {"x": 5, "z": 9.9},
              "end": {"x": 7.2, "z": 9.9}
            },
            {
              "type": "partition",
              "start": {"x": 7.2, "z": 14.9},
              "end": {"x": 7.2, "z": 9.9}
            },
            {
              "type": "partition",
              "start": {"x": 7.2, "z": 14.9},
              "end": {"x": 5, "z": 14.9}
            },
            { // zachody 2
              "type": "partition",
              "start": {"x": 7.4, "z": 14.9},
              "end": {"x": 7.4, "z": 9.9}
            },
            {
              "type": "partition",
              "start": {"x": 7.4, "z": 9.9},
              "end": {"x": 9.6, "z": 9.9}
            },
            {
              "type": "partition",
              "start": {"x": 9.6, "z": 9.9},
              "end": {"x": 9.6, "z": 14.9}
            },
            {
              "type": "partition",
              "start": {"x": 9.6, "z": 14.9},
              "end": {"x": 7.4, "z": 14.9}
            },
            {
              //2.09
              type: "partition",
              start: { x: -16.9, z: -10.3 },
              end: { x: -10.3, z: -10.3 },
            },
            {
              type: "partition",
              start: { x: -10.3, z: -10.3 },
              end: { x: -10.3, z: -7.9 },
            },
            {
              type: "partition",
              start: { x: -16.9, z: -7.9 },
              end: { x: -10.3, z: -7.9 },
            },
            {
              type: "partition",
              start: { x: -16.3, z: -8.3 },
              end: { x: -16.3, z: -9.9 },
            },
            {
              type: "partition",
              start: { x: -16.3, z: -8.3 },
              end: { x: -11.9, z: -8.3 },
            },
            {
              type: "partition",
              start: { x: -16.3, z: -9.9 },
              end: { x: -11.9, z: -9.9 },
            },
            {
              type: "partition",
              start: { x: -11.9, z: -8.3 },
              end: { x: -11.9, z: -8.5 },
            },
            {
              type: "partition",
              start: { x: -11.9, z: -9.9 },
              end: { x: -11.9, z: -9.7 },
            },
            {
              type: "partition",
              start: { x: -11.9, z: -9.7 },
              end: { x: -10.3, z: -9.7 },
            },
            {
              type: "partition",
              start: { x: -11.9, z: -8.5 },
              end: { x: -10.3, z: -8.5 },
            },
            {
              //2.01
              type: "partition",
              start: { x: 9.7, z: -16.9 },
              end: { x: 9.7, z: -10.5 },
            },
            {
              type: "partition",
              start: { x: 9.7, z: -10.5 },
              end: { x: 7.2, z: -10.5 },
            },
            {
              type: "partition",
              start: { x: 7.2, z: -10.5 },
              end: { x: 7.2, z: -16.9 },
            },
            {
              //2.01
              type: "partition",
              start: { x: 10.3, z: -16.9 },
              end: { x: 10.3, z: -10.3 },
            },
            {
              type: "partition",
              start: { x: 10.3, z: -10.3 },
              end: { x: 6.7, z: -10.3 },
            },
            {
              type: "partition",
              start: { x: 6.7, z: -10.3 },
              end: { x: 6.7, z: -16.9 },
            },
            { //3.11
              type: "partition",
              start: { x: -15.7, z: 4.9 },
              end: { x: -15.7, z: 0.7 },
            },
            {
              type: "partition",
              start: { x: -15.7, z: 0.7 },
              end: { x: -11.5, z: 0.7 },
            },
            {
              type: "partition",
              start: { x: -11.5, z: 0.7 },
              end: { x: -11.5, z: 4.9 },
            },
            {
              type: "partition",
              start: { x: -11.5, z: 4.9 },
              end: { x: -15.7, z: 4.9 },
            },
            { //3.12
              type: "partition",
              start: { x: -4.9, z: -0.7 },
              end: { x: -4.9, z: -4.9 },
            },
            {
              type: "partition",
              start: { x: -4.9, z: -4.9 },
              end: { x: -0.7, z: -4.9 },
            },
            {
              type: "partition",
              start: { x: -0.7, z: -4.9 },
              end: { x: -0.7, z: -0.7 },
            },
            {
              type: "partition",
              start: { x: -0.7, z: -0.7 },
              end: { x: -4.9, z: -0.7 },
            },
          ]
        },
        'rooms': [
          {
            "name": "TŘÍDÍCÍ PROSTOR",
            "bounds": {minX: -18, minZ: 11.4, maxX: -11.4, maxZ: 18}
          },
          {
            "name": "SCHODIŠTĚ (JÁDRO C)",
            "bounds": {minX: -10.8, minZ: 11.5, maxX: -8.3, maxZ: 17.6}
          },
          {
            "name": "ROZVODNA SLP",
            "bounds": {minX: -7.7, minZ: 12.9, maxX: -5.1, maxZ: 14.5}
          },
          {
            "name": "WC ZAMĚSTNANCI",
            "bounds": {minX: -7.7, minZ: 11, maxX: -5.1, maxZ: 12.8}
          },
          {
            "name": "MANIPULAČNÍ PROSTOR",
            "bounds": {minX: -4.9, minZ: 11, maxX: -2.2, maxZ: 17.5}
          },
          {
            "name": "PODATELNA",
            "bounds": {minX: -1.8, minZ: 15.2, maxX: 2.2, maxZ: 17.5}
          },
          {
            "name": "WC MUŽI",
            "bounds": {minX: 3.9, minZ: 11, maxX: 6.1, maxZ: 16}
          },
          {
            "name": "WC ŽENY",
            "bounds": {minX: 6.3, minZ: 11, maxX: 8.5, maxZ: 16}
          },
          {
            "name": "SCHODIŠTĚ",
            "bounds": { minX: -1.8, minZ: -6, maxX: 3, maxZ: 3.6},
          },
          {
            "name": "SCHODIŠTĚ (JÁDRO B)",
            "bounds": { minX: 7.8, minZ: -18, maxX: 11.4, maxZ: -11.4},
          },
          {
            "name": "ZÁDVEŘÍ",
            "bounds": { minX: -10.1, minZ: -18, maxX: -1.7, maxZ: -15},
          },
          {
            "name": "VRÁTNICE",
            "bounds": { minX: -1.7, minZ: -18, maxX: 1.8, maxZ: -15},
          },
          {
            "name": "ROZVADĚČE",
            "bounds": { minX: -17.4, minZ: -11, maxX: -13, maxZ: -9.4},
          },
          {
            "name": "ROZDĚLOVAČE PODLAHOVÉHO TOPENÍ",
            "bounds": { minX: -13, minZ: -10.8, maxX: -11.4, maxZ: -9.6},
          },
        ], 
        "temperature_data": [0],
        "wifi_signal_data": [0]
      },
      {
        id: 3,
        name: "4NP",
        type: "underground",
        dimensions: {
          width: 36,
          depth: 36,
        },
        layout: {
          rooms_grid: {
            columns: 36,
            rows: 36,
          },

          walls: [
            {
              type: "outline",
              points: [
                { x: -18, z: -18 },
                { x: 18, z: -18 },
                { x: 18, z: 18 },
                { x: -18, z: 18 },
              ],
            },

            {
              type: "outline",
              points: [
                { x: -16.9, z: -16.9 },
                { x: 16.9, z: -16.9 },
                { x: 16.9, z: 16.9 },
                { x: -16.9, z: 16.9 },
              ],
            },
            //4.09
            {
              type: "partition",
              start: { x: -10.3, z: -10.3 },
              end: { x: -10.3, z: -7.9 },
            },
            {
              type: "partition",
              start: { x: -16.9, z: -7.9 },
              end: { x: -10.3, z: -7.9 },
            },
            {
              type: "partition",
              start: { x: -16.3, z: -8.3 },
              end: { x: -16.3, z: -9.9 },
            },
            {
              type: "partition",
              start: { x: -16.3, z: -8.3 },
              end: { x: -11.9, z: -8.3 },
            },
            {
              type: "partition",
              start: { x: -16.3, z: -9.9 },
              end: { x: -11.9, z: -9.9 },
            },
            {
              type: "partition",
              start: { x: -11.9, z: -8.3 },
              end: { x: -11.9, z: -8.5 },
            },
            {
              type: "partition",
              start: { x: -11.9, z: -9.9 },
              end: { x: -11.9, z: -9.7 },
            },
            {
              type: "partition",
              start: { x: -11.9, z: -9.7 },
              end: { x: -10.3, z: -9.7 },
            },
            {
              type: "partition",
              start: { x: -11.9, z: -8.5 },
              end: { x: -10.3, z: -8.5 },
            },
            {
              //4.01
              type: "partition",
              start: { x: 10.3, z: -16.9 },
              end: { x: 10.3, z: -10.3 },
            },
            {
              type: "partition",
              start: { x: 6.7, z: -10.3 },
              end: { x: 6.7, z: -16.9 },
            },
            {
              //4.01
              type: "partition",
              start: { x: 9.7, z: -16.9 },
              end: { x: 9.7, z: -10.5 },
            },
            {
              type: "partition",
              start: { x: 9.7, z: -10.5 },
              end: { x: 7.2, z: -10.5 },
            },
            {
              type: "partition",
              start: { x: 7.2, z: -10.5 },
              end: { x: 7.2, z: -16.9 },
            },

            {
              //spo stena leva
              type: "partition",
              start: { x: -10.3, z: 16.9 },
              end: { x: -10.3, z: 9.5 },
            },
            {
              //spol stena vodorovna
              type: "partition",
              start: { x: -10.3, z: 9.5 },
              end: { x: 10.3, z: 9.5 },
            },
            {
              //spol stena prava
              type: "partition",
              start: { x: 10.3, z: 9.5 },
              end: { x: 10.3, z: 16.9 },
            },
            {
              //4.02
              type: "partition",
              start: { x: -9.7, z: 16.5 },
              end: { x: -9.7, z: 10.4 },
            },
            {
              type: "partition",
              start: { x: -9.7, z: 10.4 },
              end: { x: -7.2, z: 10.4 },
            },
            {
              type: "partition",
              start: { x: -7.2, z: 10.4 },
              end: { x: -7.2, z: 16.5 },
            },
            {
              type: "partition",
              start: { x: -7.2, z: 16.5 },
              end: { x: -9.7, z: 16.5 },
            },
            {
              //
              type: "partition",
              start: { x: -6.6, z: 16.5 },
              end: { x: -6.6, z: 15 },
            },
            {
              type: "partition",
              start: { x: -6.6, z: 15 },
              end: { x: -4, z: 15 },
            },
            {
              type: "partition",
              start: { x: -4, z: 15 },
              end: { x: -4, z: 16.4 },
            },
            {
              type: "partition",
              start: { x: -4, z: 16.4 },
              end: { x: -6.6, z: 16.4 },
            },
            {
              //
              type: "partition",
              start: { x: -6.6, z: 14.9 },
              end: { x: -6.6, z: 13.5 },
            },
            {
              type: "partition",
              start: { x: -6.6, z: 13.5 },
              end: { x: -4, z: 13.5 },
            },
            {
              type: "partition",
              start: { x: -4, z: 13.5 },
              end: { x: -4, z: 14.9 },
            },
            {
              type: "partition",
              start: { x: -4, z: 14.9 },
              end: { x: -6.6, z: 14.9 },
            },
            {
              //
              type: "partition",
              start: { x: -6.6, z: 13.4 },
              end: { x: -6.6, z: 11.8 },
            },
            {
              type: "partition",
              start: { x: -6.6, z: 11.8 },
              end: { x: -4, z: 11.8 },
            },
            {
              type: "partition",
              start: { x: -4, z: 11.8 },
              end: { x: -4, z: 13.4 },
            },
            {
              type: "partition",
              start: { x: -4, z: 13.4 },
              end: { x: -6.6, z: 13.4 },
            },
            {
              //
              type: "partition",
              start: { x: -6.6, z: 11.7 },
              end: { x: -6.6, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: -6.6, z: 9.9 },
              end: { x: -4, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: -4, z: 9.9 },
              end: { x: -4, z: 11.7 },
            },
            {
              type: "partition",
              start: { x: -4, z: 11.7 },
              end: { x: -6.6, z: 11.7 },
            },
            {
              // 4.04
              type: "partition",
              start: { x: -3.8, z: 16.4 },
              end: { x: -3.8, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: -3.8, z: 9.9 },
              end: { x: -1.1, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: -1.1, z: 9.9 },
              end: { x: -1.1, z: 16.4 },
            },
            {
              type: "partition",
              start: { x: -1.1, z: 16.4 },
              end: { x: -3.8, z: 16.4 },
            },
            {
              // 4.19
              type: "partition",
              start: { x: -0.7, z: 16.4 },
              end: { x: -0.7, z: 14.1 },
            },
            {
              type: "partition",
              start: { x: -0.7, z: 14.1 },
              end: { x: 3.3, z: 14.1 },
            },
            {
              type: "partition",
              start: { x: 3.3, z: 14.1 },
              end: { x: 3.3, z: 15.2 },
            },
            {
              type: "partition",
              start: { x: 3.3, z: 15.2 },
              end: { x: 3.4, z: 15.2 },
            },
            {
              type: "partition",
              start: { x: 3.4, z: 15.2 },
              end: { x: 3.4, z: 14.1 },
            },
            {
              type: "partition",
              start: { x: 3.4, z: 14.1 },
              end: { x: 4.5, z: 14.1 },
            },
            {
              type: "partition",
              start: { x: 4.5, z: 14.1 },
              end: { x: 4.5, z: 16.4 },
            },
            {
              type: "partition",
              start: { x: 4.5, z: 16.4 },
              end: { x: 3.4, z: 16.4 },
            },
            {
              type: "partition",
              start: { x: 3.4, z: 16.4 },
              end: { x: 3.4, z: 15.9 },
            },
            {
              type: "partition",
              start: { x: 3.4, z: 15.9 },
              end: { x: 3.3, z: 15.9 },
            },
            {
              type: "partition",
              start: { x: 3.3, z: 15.9 },
              end: { x: 3.3, z: 16.4 },
            },
            {
              type: "partition",
              start: { x: 3.3, z: 16.4 },
              end: { x: -0.7, z: 16.4 },
            },
            {
              // sachta za vytahy
              type: "partition",
              start: { x: -0.7, z: 14 },
              end: { x: -0.7, z: 11.9 },
            },
            {
              type: "partition",
              start: { x: -0.7, z: 11.9 },
              end: { x: 4.5, z: 11.9 },
            },
            {
              type: "partition",
              start: { x: 4.5, z: 11.9 },
              end: { x: 4.5, z: 14 },
            },
            {
              type: "partition",
              start: { x: 4.5, z: 14 },
              end: { x: -0.7, z: 14 },
            },
            {
              //vytahy
              type: "partition",
              start: { x: -0.7, z: 11.8 },
              end: { x: -0.7, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: -0.7, z: 9.9 },
              end: { x: 0.9, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: 0.9, z: 9.9 },
              end: { x: 0.9, z: 11.8 },
            },
            {
              type: "partition",
              start: { x: 0.9, z: 11.8 },
              end: { x: -0.7, z: 11.8 },
            },
            {
              //
              type: "partition",
              start: { x: 1.1, z: 11.8 },
              end: { x: 1.1, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: 1.1, z: 9.9 },
              end: { x: 2.7, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: 2.7, z: 9.9 },
              end: { x: 2.7, z: 11.8 },
            },
            {
              type: "partition",
              start: { x: 2.7, z: 11.8 },
              end: { x: 1.1, z: 11.8 },
            },
            {
              //
              type: "partition",
              start: { x: 2.9, z: 11.8 },
              end: { x: 2.9, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: 2.9, z: 9.9 },
              end: { x: 4.5, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: 4.5, z: 9.9 },
              end: { x: 4.5, z: 11.8 },
            },
            {
              type: "partition",
              start: { x: 4.5, z: 11.8 },
              end: { x: 2.9, z: 11.8 },
            },
            {
              // sachta nejaka
              type: "partition",
              start: { x: 5, z: 16.4 },
              end: { x: 5, z: 15.1 },
            },
            {
              type: "partition",
              start: { x: 5, z: 15.1 },
              end: { x: 9.6, z: 15.1 },
            },
            {
              type: "partition",
              start: { x: 9.6, z: 16.4 },
              end: { x: 9.6, z: 15.1 },
            },
            {
              type: "partition",
              start: { x: 9.6, z: 16.4 },
              end: { x: 5, z: 16.4 },
            },
            {
              // zachody
              type: "partition",
              start: { x: 5, z: 14.9 },
              end: { x: 5, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: 5, z: 9.9 },
              end: { x: 7.2, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: 7.2, z: 14.9 },
              end: { x: 7.2, z: 9.9 },
            },
            {
              type: "partition",
              start: { x: 7.2, z: 14.9 },
              end: { x: 5, z: 14.9 },
            },
            {
              // zachody 2
              type: "partition",
              start: { x: 7.4, z: 14.9 },
              end: { x: 7.4, z: 9.9 },
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
              start: { x: -16.9, z: -10.3 },
              end: { x: 16.9, z: -10.3 },
            },
            {
              //4.12
              type: "partition",
              start: { x: 4.1, z: 5 },
              end: { x: 4.1, z: -4.6 },
            },
            {
              type: "partition",
              start: { x: 4.1, z: 5 },
              end: { x: 10.1, z: 5 },
            },
            {
              type: "partition",
              start: { x: 10.1, z: 5 },
              end: { x: 10.1, z: -4.6 },
            },
            {
              type: "partition",
              start: { x: 4.1, z: -4.6 },
              end: { x: 10.1, z: -4.6 },
            },
            {
              type: "partition",
              start: { x: 4.3, z: 4.8 },
              end: { x: 4.3, z: -4.4 },
            },
            {
              type: "partition",
              start: { x: 4.3, z: 4.8 },
              end: { x: 9.9, z: 4.8 },
            },
            {
              type: "partition",
              start: { x: 9.9, z: 4.8 },
              end: { x: 9.9, z: -4.4 },
            },
            {
              type: "partition",
              start: { x: 4.3, z: -4.4 },
              end: { x: 9.9, z: -4.4 },
            },
            {
              //4.11
              type: "partition",
              start: { x: -8.5, z: -4.6 },
              end: { x: -8.5, z: -0.2 },
            },
            {
              type: "partition",
              start: { x: -8.5, z: -4.6 },
              end: { x: 2.9, z: -4.6 },
            },
            {
              type: "partition",
              start: { x: 2.9, z: -4.6 },
              end: { x: 2.9, z: -0.2 },
            },
            {
              type: "partition",
              start: { x: -8.5, z: -0.2 },
              end: { x: 2.9, z: -0.2 },
            },
            {
              type: "partition",
              start: { x: -6.1, z: -4.6 },
              end: { x: -6.1, z: -0.2 },
            },
            {
              //4.13a
              type: "partition",
              start: { x: -8.5, z: -5.8 },
              end: { x: -6.1, z: -5.8 },
            },
            {
              type: "partition",
              start: { x: -8.5, z: -8.2 },
              end: { x: -6.1, z: -8.2 },
            },
            {
              type: "partition",
              start: { x: -8.5, z: -8.2 },
              end: { x: -6.1, z: -8.2 },
            },
            {
              type: "partition",
              start: { x: -8.5, z: -8.2 },
              end: { x: -8.5, z: -5.8 },
            },
            {
              type: "partition",
              start: { x: -7.3, z: -8.2 },
              end: { x: -7.3, z: -5.8 },
            },
            {
              //4.13b
              type: "partition",
              start: { x: -6.1, z: -8.2 },
              end: { x: -6.1, z: -5.8 },
            },
            {
              //4.14
              type: "partition",
              start: { x: 15.7, z: 15.7 },
              end: { x: 15.7, z: 9.7 },
            },
            {
              type: "partition",
              start: { x: 11.5, z: 15.7 },
              end: { x: 11.5, z: 9.7 },
            },
            {
              type: "partition",
              start: { x: 11.5, z: 15.7 },
              end: { x: 15.7, z: 15.7 },
            },
            {
              type: "partition",
              start: { x: 11.5, z: 12.1 },
              end: { x: 15.7, z: 12.1 },
            },
            {
              //4.15
              type: "partition",
              start: { x: 11.5, z: 9.7 },
              end: { x: 15.7, z: 9.7 },
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
        "id": 4,
        "name": "5NP",
        "type": "underground",
        "dimensions": {
          "width": 36,
          "depth": 36
        },
        "layout": {
          "rooms_grid": {
            "columns":18,
            "rows": 18
          },
          "walls": [
            {
              "type": "outline",
              "points": [
                {"x": -18, "z": -18},
                {"x": 18, "z": -18},
                {"x": 18, "z": 18},
                {"x": -18, "z": 18}
              ]
            },
            { //spo stena leva
              "type": "partition",
              "start": {"x": -11.4, "z": 18},
              "end": {"x": -11.4, "z": 10.6}
            },
            {
              "type": "partition",
              "start": {"x": -11.4, "z": 11.4},
              "end": {"x": -18, "z": 11.4}
            },
            { //spol stena vodorovna
              "type": "partition",
              "start": {"x": -11.4, "z": 10.6},
              "end": {"x": 9, "z": 10.6}
            },
            { //spol stena prava
              "type": "partition",
              "start": {"x": 9, "z": 10.6},
              "end": {"x": 9, "z": 18}
            },
            { //vytahy
              "type": "partition",
              "start": {"x": -1.8, "z": 12.9},
              "end": {"x": -1.8 , "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": -1.8, "z": 11},
              "end": {"x": -0.2 , "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": -0.2, "z": 11},
              "end": {"x": -0.2 , "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": -0.2, "z": 12.9},
              "end": {"x": -1.8 , "z": 12.9}
            },
            { //
              "type": "partition",
              "start": {"x": 0, "z": 12.9},
              "end": {"x": 0, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 0, "z": 11},
              "end": {"x": 1.6, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 1.6, "z": 11},
              "end": {"x": 1.6, "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": 1.6, "z": 12.9},
              "end": {"x": 0, "z": 12.9}
            },
            { //
              "type": "partition",
              "start": {"x": 1.8, "z": 12.9},
              "end": {"x": 1.8, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 1.8, "z": 11},
              "end": {"x": 3.4, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 3.4, "z": 11},
              "end": {"x": 3.4, "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": 3.4, "z": 12.9},
              "end": {"x": 1.6, "z": 12.9}
            },
            { // sachta nejaka
              "type": "partition",
              "start": {"x": 3.9, "z": 17.5},
              "end": {"x": 3.9, "z": 16.2}
            },
            {
              "type": "partition",
              "start": {"x": 3.9, "z": 16.2},
              "end": {"x": 8.5, "z": 16.2}
            },
            {
              "type": "partition",
              "start": {"x": 8.5, "z": 17.5},
              "end": {"x": 8.5, "z": 16.2}
            },
            {
              "type": "partition",
              "start": {"x": 8.5, "z": 17.5},
              "end": {"x": 3.9, "z": 17.5}
            },
          ]
        },
        "temperature_data": [0],
        "wifi_signal_data": [0]
      },
      {
        "id": 5,
        "name": "6NP",
        "type": "underground",
        "dimensions": {
          "width": 36,
          "depth": 36
        },
        "layout": {
          "rooms_grid": {
            "columns":18,
            "rows": 18
          },
          "walls": [
            {
              "type": "outline",
              "points": [
                {"x": -18, "z": -18},
                {"x": 18, "z": -18},
                {"x": 18, "z": 18},
                {"x": -18, "z": 18}
              ]
            },
            { //spo stena leva
              "type": "partition",
              "start": {"x": -11.4, "z": 18},
              "end": {"x": -11.4, "z": 10.6}
            },
            {
              "type": "partition",
              "start": {"x": -11.4, "z": 11.4},
              "end": {"x": -18, "z": 11.4}
            },
            { //spol stena vodorovna
              "type": "partition",
              "start": {"x": -11.4, "z": 10.6},
              "end": {"x": 9, "z": 10.6}
            },
            { //spol stena prava
              "type": "partition",
              "start": {"x": 9, "z": 10.6},
              "end": {"x": 9, "z": 18}
            },
            { //vytahy
              "type": "partition",
              "start": {"x": -1.8, "z": 12.9},
              "end": {"x": -1.8 , "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": -1.8, "z": 11},
              "end": {"x": -0.2 , "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": -0.2, "z": 11},
              "end": {"x": -0.2 , "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": -0.2, "z": 12.9},
              "end": {"x": -1.8 , "z": 12.9}
            },
            { //
              "type": "partition",
              "start": {"x": 0, "z": 12.9},
              "end": {"x": 0, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 0, "z": 11},
              "end": {"x": 1.6, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 1.6, "z": 11},
              "end": {"x": 1.6, "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": 1.6, "z": 12.9},
              "end": {"x": 0, "z": 12.9}
            },
            { //
              "type": "partition",
              "start": {"x": 1.8, "z": 12.9},
              "end": {"x": 1.8, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 1.8, "z": 11},
              "end": {"x": 3.4, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 3.4, "z": 11},
              "end": {"x": 3.4, "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": 3.4, "z": 12.9},
              "end": {"x": 1.6, "z": 12.9}
            },
            { // sachta nejaka
              "type": "partition",
              "start": {"x": 3.9, "z": 17.5},
              "end": {"x": 3.9, "z": 16.2}
            },
            {
              "type": "partition",
              "start": {"x": 3.9, "z": 16.2},
              "end": {"x": 8.5, "z": 16.2}
            },
            {
              "type": "partition",
              "start": {"x": 8.5, "z": 17.5},
              "end": {"x": 8.5, "z": 16.2}
            },
            {
              "type": "partition",
              "start": {"x": 8.5, "z": 17.5},
              "end": {"x": 3.9, "z": 17.5}
            },
          ]
        },
        "temperature_data": [0],
        "wifi_signal_data": [0]
      },
      {
        "id": 6,
        "name": "7NP",
        "type": "underground",
        "dimensions": {
          "width": 36,
          "depth": 36
        },
        "layout": {
          "rooms_grid": {
            "columns":18,
            "rows": 18
          },
          "walls": [
            {
              "type": "outline",
              "points": [
                {"x": -18, "z": -18},
                {"x": 18, "z": -18},
                {"x": 18, "z": 18},
                {"x": -18, "z": 18}
              ]
            },
            { //spo stena leva
              "type": "partition",
              "start": {"x": -11.4, "z": 18},
              "end": {"x": -11.4, "z": 10.6}
            },
            {
              "type": "partition",
              "start": {"x": -11.4, "z": 11.4},
              "end": {"x": -18, "z": 11.4}
            },
            { //spol stena vodorovna
              "type": "partition",
              "start": {"x": -11.4, "z": 10.6},
              "end": {"x": 9, "z": 10.6}
            },
            { //spol stena prava
              "type": "partition",
              "start": {"x": 9, "z": 10.6},
              "end": {"x": 9, "z": 18}
            },
            { //vytahy
              "type": "partition",
              "start": {"x": -1.8, "z": 12.9},
              "end": {"x": -1.8 , "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": -1.8, "z": 11},
              "end": {"x": -0.2 , "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": -0.2, "z": 11},
              "end": {"x": -0.2 , "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": -0.2, "z": 12.9},
              "end": {"x": -1.8 , "z": 12.9}
            },
            { //
              "type": "partition",
              "start": {"x": 0, "z": 12.9},
              "end": {"x": 0, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 0, "z": 11},
              "end": {"x": 1.6, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 1.6, "z": 11},
              "end": {"x": 1.6, "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": 1.6, "z": 12.9},
              "end": {"x": 0, "z": 12.9}
            },
            { //
              "type": "partition",
              "start": {"x": 1.8, "z": 12.9},
              "end": {"x": 1.8, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 1.8, "z": 11},
              "end": {"x": 3.4, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 3.4, "z": 11},
              "end": {"x": 3.4, "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": 3.4, "z": 12.9},
              "end": {"x": 1.6, "z": 12.9}
            },
            { // sachta nejaka
              "type": "partition",
              "start": {"x": 3.9, "z": 17.5},
              "end": {"x": 3.9, "z": 16.2}
            },
            {
              "type": "partition",
              "start": {"x": 3.9, "z": 16.2},
              "end": {"x": 8.5, "z": 16.2}
            },
            {
              "type": "partition",
              "start": {"x": 8.5, "z": 17.5},
              "end": {"x": 8.5, "z": 16.2}
            },
            {
              "type": "partition",
              "start": {"x": 8.5, "z": 17.5},
              "end": {"x": 3.9, "z": 17.5}
            },
          ]
        },
        "temperature_data": [0],
        "wifi_signal_data": [0]
      },
      {
        "id": 7,
        "name": "8NP",
        "type": "underground",
        "dimensions": {
          "width": 36,
          "depth": 36
        },
        "layout": {
          "rooms_grid": {
            "columns":18,
            "rows": 18
          },
          "walls": [
            {
              "type": "outline",
              "points": [
                {"x": -18, "z": -18},
                {"x": 18, "z": -18},
                {"x": 18, "z": 18},
                {"x": -18, "z": 18}
              ]
            },
            { //spo stena leva
              "type": "partition",
              "start": {"x": -11.4, "z": 18},
              "end": {"x": -11.4, "z": 10.6}
            },
            {
              "type": "partition",
              "start": {"x": -11.4, "z": 11.4},
              "end": {"x": -18, "z": 11.4}
            },
            { //spol stena vodorovna
              "type": "partition",
              "start": {"x": -11.4, "z": 10.6},
              "end": {"x": 9, "z": 10.6}
            },
            { //spol stena prava
              "type": "partition",
              "start": {"x": 9, "z": 10.6},
              "end": {"x": 9, "z": 18}
            },
            { //vytahy
              "type": "partition",
              "start": {"x": -1.8, "z": 12.9},
              "end": {"x": -1.8 , "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": -1.8, "z": 11},
              "end": {"x": -0.2 , "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": -0.2, "z": 11},
              "end": {"x": -0.2 , "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": -0.2, "z": 12.9},
              "end": {"x": -1.8 , "z": 12.9}
            },
            { //
              "type": "partition",
              "start": {"x": 0, "z": 12.9},
              "end": {"x": 0, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 0, "z": 11},
              "end": {"x": 1.6, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 1.6, "z": 11},
              "end": {"x": 1.6, "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": 1.6, "z": 12.9},
              "end": {"x": 0, "z": 12.9}
            },
            { //
              "type": "partition",
              "start": {"x": 1.8, "z": 12.9},
              "end": {"x": 1.8, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 1.8, "z": 11},
              "end": {"x": 3.4, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 3.4, "z": 11},
              "end": {"x": 3.4, "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": 3.4, "z": 12.9},
              "end": {"x": 1.6, "z": 12.9}
            },
            { // sachta nejaka
              "type": "partition",
              "start": {"x": 3.9, "z": 17.5},
              "end": {"x": 3.9, "z": 16.2}
            },
            {
              "type": "partition",
              "start": {"x": 3.9, "z": 16.2},
              "end": {"x": 8.5, "z": 16.2}
            },
            {
              "type": "partition",
              "start": {"x": 8.5, "z": 17.5},
              "end": {"x": 8.5, "z": 16.2}
            },
            {
              "type": "partition",
              "start": {"x": 8.5, "z": 17.5},
              "end": {"x": 3.9, "z": 17.5}
            },
          ]
        },
        "temperature_data": [0],
        "wifi_signal_data": [0]
      },
      {
        "id": 8,
        "name": "9NP",
        "type": "underground",
        "dimensions": {
          "width": 36,
          "depth": 36
        },
        "layout": {
          "rooms_grid": {
            "columns":18,
            "rows": 18
          },
          "walls": [
            {
              "type": "outline",
              "points": [
                {"x": -18, "z": -18},
                {"x": 18, "z": -18},
                {"x": 18, "z": 18},
                {"x": -18, "z": 18}
              ]
            },
            { //spo stena leva
              "type": "partition",
              "start": {"x": -11.4, "z": 18},
              "end": {"x": -11.4, "z": 10.6}
            },
            {
              "type": "partition",
              "start": {"x": -11.4, "z": 11.4},
              "end": {"x": -18, "z": 11.4}
            },
            { //spol stena vodorovna
              "type": "partition",
              "start": {"x": -11.4, "z": 10.6},
              "end": {"x": 9, "z": 10.6}
            },
            { //spol stena prava
              "type": "partition",
              "start": {"x": 9, "z": 10.6},
              "end": {"x": 9, "z": 18}
            },
            { //vytahy
              "type": "partition",
              "start": {"x": -1.8, "z": 12.9},
              "end": {"x": -1.8 , "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": -1.8, "z": 11},
              "end": {"x": -0.2 , "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": -0.2, "z": 11},
              "end": {"x": -0.2 , "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": -0.2, "z": 12.9},
              "end": {"x": -1.8 , "z": 12.9}
            },
            { //
              "type": "partition",
              "start": {"x": 0, "z": 12.9},
              "end": {"x": 0, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 0, "z": 11},
              "end": {"x": 1.6, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 1.6, "z": 11},
              "end": {"x": 1.6, "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": 1.6, "z": 12.9},
              "end": {"x": 0, "z": 12.9}
            },
            { //
              "type": "partition",
              "start": {"x": 1.8, "z": 12.9},
              "end": {"x": 1.8, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 1.8, "z": 11},
              "end": {"x": 3.4, "z": 11}
            },
            {
              "type": "partition",
              "start": {"x": 3.4, "z": 11},
              "end": {"x": 3.4, "z": 12.9}
            },
            {
              "type": "partition",
              "start": {"x": 3.4, "z": 12.9},
              "end": {"x": 1.6, "z": 12.9}
            },
            { // sachta nejaka
              "type": "partition",
              "start": {"x": 3.9, "z": 17.5},
              "end": {"x": 3.9, "z": 16.2}
            },
            {
              "type": "partition",
              "start": {"x": 3.9, "z": 16.2},
              "end": {"x": 8.5, "z": 16.2}
            },
            {
              "type": "partition",
              "start": {"x": 8.5, "z": 17.5},
              "end": {"x": 8.5, "z": 16.2}
            },
            {
              "type": "partition",
              "start": {"x": 8.5, "z": 17.5},
              "end": {"x": 3.9, "z": 17.5}
            },
          ]
        },
        "temperature_data": [0],
        "wifi_signal_data": [0]
      },
    ],
  visualization: {
    wall_height: 3.0,
    floor_thickness: 0.2,
    floor_spacing: 0.25,
    wall_thickness: 0.15,
    room_floor_height: 0.05
  },
  building_info: {
    name: "CERNA KOSTKA",
    address: "-",
    total_floors: 11,
    construction_year: 2027,
    building_type: "commercial"
  },
  sensors: {
    temperature: {
      unit: "celsius",
      min_range: 10,
      max_range: 35,
      precision: 0.1
    },
    wifi: {
      signal_levels: {
        0: "No Signal",
        1: "Weak",
        2: "Normal", 
        3: "Strong"
      },
      frequency: "2.4GHz/5GHz"
    }
  },
  materials: {
    floor_types: {
      concrete: { color: "#808080", roughness: 0.8 },
      marble: { color: "#f5f5f5", roughness: 0.1 },
      carpet: { color: "#8b4513", roughness: 0.9 },
      tile: { color: "#ffffff", roughness: 0.3 }
    },
    wall_types: {
      drywall: { color: "#f0f0f0", roughness: 0.7 },
      brick: { color: "#b22222", roughness: 0.9 },
      glass: { color: "#87ceeb", roughness: 0.1, transparency: 0.8 },
      concrete: { color: "#808080", roughness: 0.8 }
    }
  }
};