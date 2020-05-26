
var w = 500,
h = 500;
  
  var colorscale = d3.scale.category10();
  //Data
  var prosijek =  [
   {axis:"Golovi",value:0.56},
   {axis:"Dodavanja",value:0.66},
   {axis:"Lopte u prostor",value:0.40},
   {axis:"Ubacivanja u 16",value:0.81},
   {axis:"Korneri",value:0.65},
   {axis:"Šutevi",value:0.71},
   {axis:"Šutevi u okvir",value:0.64},
   {axis:"Golovi unutar 16",value:0.55}
 ]
  var mnc = [prosijek
           ,[
               {axis:"Golovi",value:1},
               {axis:"Dodavanja",value:1},
               {axis:"Lopte u prostor",value:0.77},
               {axis:"Ubacivanja u 16",value:0.96},
               {axis:"Korneri",value:1},
               {axis:"Šutevi",value:1},
               {axis:"Šutevi u okvir",value:1},
               {axis:"Golovi unutar 16",value:0.95}
            ]
          ];
   var liverpool = [prosijek
   ,[
         {axis:"Golovi",value:0.93},
         {axis:"Dodavanja",value:0.88},
         {axis:"Lopte u prostor",value:0.68},
         {axis:"Ubacivanja u 16",value:0.86},
         {axis:"Korneri",value:0.83},
         {axis:"Šutevi",value:0.84},
         {axis:"Šutevi u okvir",value:0.86},
         {axis:"Golovi unutar 16",value:1}
      ]
   ];
   var chelsea = [prosijek
      ,[
            {axis:"Golovi",value:0.66},
            {axis:"Dodavanja",value:0.95},
            {axis:"Lopte u prostor",value:1},
            {axis:"Ubacivanja u 16",value:0.85},
            {axis:"Korneri",value:0.72},
            {axis:"Šutevi",value:0.88},
            {axis:"Šutevi u okvir",value:0.76},
            {axis:"Golovi unutar 16",value:0.64}
         ]
      ];
   var tottenham = [prosijek
      ,[
            {axis:"Golovi",value:0.71},
            {axis:"Dodavanja",value:0.80},
            {axis:"Lopte u prostor",value:0.59},
            {axis:"Ubacivanja u 16",value:0.79},
            {axis:"Korneri",value:0.65},
            {axis:"Šutevi",value:0.78},
            {axis:"Šutevi u okvir",value:0.72},
            {axis:"Golovi unutar 16",value:0.63}
         ]
      ];
   var arsenal = [prosijek
      ,[
            {axis:"Golovi",value:0.77},
            {axis:"Dodavanja",value:0.78},
            {axis:"Lopte u prostor",value:0.44},
            {axis:"Ubacivanja u 16",value:0.74},
            {axis:"Korneri",value:0.70},
            {axis:"Šutevi",value:0.68},
            {axis:"Šutevi u okvir",value:0.65},
            {axis:"Golovi unutar 16",value:0.73}
         ]
      ];
   var mnu = [prosijek
      ,[
            {axis:"Golovi",value:0.68},
            {axis:"Dodavanja",value:0.72},
            {axis:"Lopte u prostor",value:0.43},
            {axis:"Ubacivanja u 16",value:0.78},
            {axis:"Korneri",value:0.67},
            {axis:"Šutevi",value:0.77},
            {axis:"Šutevi u okvir",value:0.86},
            {axis:"Golovi unutar 16",value:0.65}
         ]
      ];
   var wolverhampton = [prosijek
      ,[
            {axis:"Golovi",value:0.49},
            {axis:"Dodavanja",value:0.62},
            {axis:"Lopte u prostor",value:0.34},
            {axis:"Ubacivanja u 16",value:0.76},
            {axis:"Korneri",value:0.65},
            {axis:"Šutevi",value:0.69},
            {axis:"Šutevi u okvir",value:0.58},
            {axis:"Golovi unutar 16",value:0.52}
         ]
      ];
   var everton = [prosijek
      ,[
            {axis:"Golovi",value:0.56},
            {axis:"Dodavanja",value:0.62},
            {axis:"Lopte u prostor",value:0.30},
            {axis:"Ubacivanja u 16",value:1},
            {axis:"Korneri",value:0.72},
            {axis:"Šutevi",value:0.72},
            {axis:"Šutevi u okvir",value:0.65},
            {axis:"Golovi unutar 16",value:0.53}
         ]
      ];
   var leicester = [prosijek
      ,[
            {axis:"Golovi",value:0.53},
            {axis:"Dodavanja",value:0.64},
            {axis:"Lopte u prostor",value:0.60},
            {axis:"Ubacivanja u 16",value:0.95},
            {axis:"Korneri",value:0.70},
            {axis:"Šutevi",value:0.75},
            {axis:"Šutevi u okvir",value:0.71},
            {axis:"Golovi unutar 16",value:0.51}
         ]
      ];
   var westham = [prosijek
      ,[
            {axis:"Golovi",value:0.54},
            {axis:"Dodavanja",value:0.61},
            {axis:"Lopte u prostor",value:0.51},
            {axis:"Ubacivanja u 16",value:0.77},
            {axis:"Korneri",value:0.63},
            {axis:"Šutevi",value:0.64},
            {axis:"Šutevi u okvir",value:0.60},
            {axis:"Golovi unutar 16",value:0.56}
         ]
      ];
   var watford = [prosijek
      ,[
            {axis:"Golovi",value:0.54},
            {axis:"Dodavanja",value:0.58},
            {axis:"Lopte u prostor",value:0.21},
            {axis:"Ubacivanja u 16",value:0.70},
            {axis:"Korneri",value:0.59},
            {axis:"Šutevi",value:0.63},
            {axis:"Šutevi u okvir",value:0.58},
            {axis:"Golovi unutar 16",value:0.52}
         ]
      ];
   var crystal = [prosijek
      ,[
            {axis:"Golovi",value:0.54},
            {axis:"Dodavanja",value:0.57},
            {axis:"Lopte u prostor",value:0.17},
            {axis:"Ubacivanja u 16",value:0.70},
            {axis:"Korneri",value:0.68},
            {axis:"Šutevi",value:0.72},
            {axis:"Šutevi u okvir",value:0.56},
            {axis:"Golovi unutar 16",value:0.51}
         ]
      ];
   var newcastle = [prosijek
      ,[
            {axis:"Golovi",value:0.44},
            {axis:"Dodavanja",value:0.50},
            {axis:"Lopte u prostor",value:0.34},
            {axis:"Ubacivanja u 16",value:0.87},
            {axis:"Korneri",value:0.60},
            {axis:"Šutevi",value:0.65},
            {axis:"Šutevi u okvir",value:0.54},
            {axis:"Golovi unutar 16",value:0.47}
         ]
      ];
   var bournemouth = [prosijek
      ,[
            {axis:"Golovi",value:0.58},
            {axis:"Dodavanja",value:0.60},
            {axis:"Lopte u prostor",value:0.39},
            {axis:"Ubacivanja u 16",value:0.50},
            {axis:"Korneri",value:0.64},
            {axis:"Šutevi",value:0.65},
            {axis:"Šutevi u okvir",value:0.62},
            {axis:"Golovi unutar 16",value:0.59}
         ]
      ];
   var burnley = [prosijek
      ,[
            {axis:"Golovi",value:0.47},
            {axis:"Dodavanja",value:0.49},
            {axis:"Lopte u prostor",value:0.24},
            {axis:"Ubacivanja u 16",value:0.85},
            {axis:"Korneri",value:0.47},
            {axis:"Šutevi",value:0.52},
            {axis:"Šutevi u okvir",value:0.44},
            {axis:"Golovi unutar 16",value:0.51}
         ]
      ];
   var southampton = [prosijek
      ,[
            {axis:"Golovi",value:0.47},
            {axis:"Dodavanja",value:0.53},
            {axis:"Lopte u prostor",value:0.23},
            {axis:"Ubacivanja u 16",value:0.81},
            {axis:"Korneri",value:0.64},
            {axis:"Šutevi",value:0.70},
            {axis:"Šutevi u okvir",value:0.62},
            {axis:"Golovi unutar 16",value:0.36}
         ]
      ];
   var brighton = [prosijek
      ,[
            {axis:"Golovi",value:0.36},
            {axis:"Dodavanja",value:0.53},
            {axis:"Lopte u prostor",value:0.10},
            {axis:"Ubacivanja u 16",value:0.78},
            {axis:"Korneri",value:0.52},
            {axis:"Šutevi",value:0.54},
            {axis:"Šutevi u okvir",value:0.41},
            {axis:"Golovi unutar 16",value:0.40}
         ]
      ];
   var cardiff = [prosijek
      ,[
            {axis:"Golovi",value:0.35},
            {axis:"Dodavanja",value:0.38},
            {axis:"Lopte u prostor",value:0.26},
            {axis:"Ubacivanja u 16",value:0.69},
            {axis:"Korneri",value:0.56},
            {axis:"Šutevi",value:0.5612},
            {axis:"Šutevi u okvir",value:0.48},
            {axis:"Golovi unutar 16",value:0.34}
         ]
      ];
   var fulham = [prosijek
      ,[
            {axis:"Golovi",value:0.35},
            {axis:"Dodavanja",value:0.66},
            {axis:"Lopte u prostor",value:0.22},
            {axis:"Ubacivanja u 16",value:0.75},
            {axis:"Korneri",value:0.54},
            {axis:"Šutevi",value:0.66},
            {axis:"Šutevi u okvir",value:0.56},
            {axis:"Golovi unutar 16",value:0.35}
         ]
      ];
   var huddersfield = [prosijek
      ,[
            {axis:"Golovi",value:0.23},
            {axis:"Dodavanja",value:0.59},
            {axis:"Lopte u prostor",value:0.16},
            {axis:"Ubacivanja u 16",value:0.94},
            {axis:"Korneri",value:0.54},
            {axis:"Šutevi",value:0.58},
            {axis:"Šutevi u okvir",value:0.45},
            {axis:"Golovi unutar 16",value:0.20}
         ]
      ];

   //defanzivno
   //1-value zato sto kubove s malim brojem primljenih golova treba siroko
   //prikazati na grafu
var defprosijek =  [
   {axis:"Primljeni golovi",value:0.66},
   {axis:"Žuti kartoni",value:0.79},
   {axis:"Crveni kartoni",value:0.47},
   {axis:"Obrane",value:0.75},
   {axis:"Defanzivni blokovi",value:0.57},
   {axis:"Presječene lopte",value:0.78},
   {axis:"Uklizavanja",value:0.88},
   {axis:"Izbijene lopte",value:0.77}
   ]
   var defmnc = [defprosijek
            ,[
               {axis:"Primljeni golovi",value:0.27},
               {axis:"Žuti kartoni",value:0.57},
               {axis:"Crveni kartoni",value:0.2},
               {axis:"Obrane",value:0.39},
               {axis:"Defanzivni blokovi",value:0.28},
               {axis:"Presječene lopte",value:0.66},
               {axis:"Uklizavanja",value:0.71},
               {axis:"Izbijene lopte",value:0.48}
            ]
            ];
   var defliverpool = [defprosijek
   ,[
      {axis:"Primljeni golovi",value:0.48},
      {axis:"Žuti kartoni",value:0.63},
      {axis:"Crveni kartoni",value:0.4},
      {axis:"Obrane",value:0.51},
      {axis:"Defanzivni blokovi",value:0.35},
      {axis:"Presječene lopte",value:0.57},
      {axis:"Uklizavanja",value:0.83},
      {axis:"Izbijene lopte",value:0.57}
      ]
   ];
   var defchelsea = [defprosijek
      ,[
         {axis:"Primljeni golovi",value:0.48},
   {axis:"Žuti kartoni",value:0.63},
   {axis:"Crveni kartoni",value:0},
   {axis:"Obrane",value:0.57},
   {axis:"Defanzivni blokovi",value:0.32},
   {axis:"Presječene lopte",value:0.64},
   {axis:"Uklizavanja",value:0.84},
   {axis:"Izbijene lopte",value:0.52}
         ]
      ];
   var deftottenham = [defprosijek
      ,[
         {axis:"Primljeni golovi",value:0.48},
         {axis:"Žuti kartoni",value:0.72},
         {axis:"Crveni kartoni",value:0.6},
         {axis:"Obrane",value:0.81},
         {axis:"Defanzivni blokovi",value:0.5},
         {axis:"Presječene lopte",value:0.59},
         {axis:"Uklizavanja",value:0.85},
         {axis:"Izbijene lopte",value:0.68}
         ]
      ];
   var defarsenal = [defprosijek
      ,[
         {axis:"Primljeni golovi",value:0.62},
         {axis:"Žuti kartoni",value:0.93},
         {axis:"Crveni kartoni",value:0.4},
         {axis:"Obrane",value:0.89},
         {axis:"Defanzivni blokovi",value:0.53},
         {axis:"Presječene lopte",value:0.75},
         {axis:"Uklizavanja",value:0.83},
         {axis:"Izbijene lopte",value:0.68}
         ]
      ];
   var defmnu = [defprosijek
      ,[
         {axis:"Primljeni golovi",value:0.66},
         {axis:"Žuti kartoni",value:0.94},
         {axis:"Crveni kartoni",value:0.8},
         {axis:"Obrane",value:0.82},
         {axis:"Defanzivni blokovi",value:0.57},
         {axis:"Presječene lopte",value:0.64},
         {axis:"Uklizavanja",value:0.7},
         {axis:"Izbijene lopte",value:0.7}
         ]
      ];
   var defwolverhampton = [defprosijek
      ,[
         {axis:"Primljeni golovi",value:0.56},
         {axis:"Žuti kartoni",value:0.93},
         {axis:"Crveni kartoni",value:0.2},
         {axis:"Obrane",value:0.67},
         {axis:"Defanzivni blokovi",value:0.66},
         {axis:"Presječene lopte",value:0.91},
         {axis:"Uklizavanja",value:0.98},
         {axis:"Izbijene lopte",value:0.73}
         ]
      ];
   var defeverton = [defprosijek
      ,[
         {axis:"Primljeni golovi",value:0.56},
         {axis:"Žuti kartoni",value:0.71},
         {axis:"Crveni kartoni",value:0.8},
         {axis:"Obrane",value:0.63},
         {axis:"Defanzivni blokovi",value:0.38},
         {axis:"Presječene lopte",value:0.83},
         {axis:"Uklizavanja",value:0.95},
         {axis:"Izbijene lopte",value:0.73}
         ]
      ];
   var defleicester = [defprosijek
      ,[
         {axis:"Primljeni golovi",value:0.59},
         {axis:"Žuti kartoni",value:0.74},
         {axis:"Crveni kartoni",value:1},
         {axis:"Obrane",value:0.61},
         {axis:"Defanzivni blokovi",value:0.43},
         {axis:"Presječene lopte",value:0.79},
         {axis:"Uklizavanja",value:0.92},
         {axis:"Izbijene lopte",value:0.84}
         ]
      ];
   var defwestham = [defprosijek
      ,[
         {axis:"Primljeni golovi",value:0.67},
         {axis:"Žuti kartoni",value:0.76},
         {axis:"Crveni kartoni",value:0.2},
         {axis:"Obrane",value:1},
         {axis:"Defanzivni blokovi",value:0.63},
         {axis:"Presječene lopte",value:0.83},
         {axis:"Uklizavanja",value:0.99},
         {axis:"Izbijene lopte",value:0.76}
         ]
      ];
   var defwatford = [defprosijek
      ,[
         {axis:"Primljeni golovi",value:0.72},
         {axis:"Žuti kartoni",value:1},
         {axis:"Crveni kartoni",value:0.8},
         {axis:"Obrane",value:0.85},
         {axis:"Defanzivni blokovi",value:0.54},
         {axis:"Presječene lopte",value:0.78},
         {axis:"Uklizavanja",value:0.89},
         {axis:"Izbijene lopte",value:0.85}
         ]
      ];
   var defcrystal = [defprosijek
      ,[
         {axis:"Primljeni golovi",value:0.65},
         {axis:"Žuti kartoni",value:0.75},
         {axis:"Crveni kartoni",value:0.4},
         {axis:"Obrane",value:0.76},
         {axis:"Defanzivni blokovi",value:0.63},
         {axis:"Presječene lopte",value:0.81},
         {axis:"Uklizavanja",value:1},
         {axis:"Izbijene lopte",value:0.84}
         ]
      ];
   var defnewcastle = [defprosijek
      ,[
         {axis:"Primljeni golovi",value:0.59},
         {axis:"Žuti kartoni",value:0.74},
         {axis:"Crveni kartoni",value:0.4},
         {axis:"Obrane",value:0.64},
         {axis:"Defanzivni blokovi",value:0.6},
         {axis:"Presječene lopte",value:0.92},
         {axis:"Uklizavanja",value:0.97},
         {axis:"Izbijene lopte",value:1}
         ]
      ];
   var defbournemouth = [defprosijek
      ,[
         {axis:"Primljeni golovi",value:0.86},
         {axis:"Žuti kartoni",value:0.78},
         {axis:"Crveni kartoni",value:0.2},
         {axis:"Obrane",value:0.74},
         {axis:"Defanzivni blokovi",value:0.68},
         {axis:"Presječene lopte",value:0.68},
         {axis:"Uklizavanja",value:0.72},
         {axis:"Izbijene lopte",value:0.91}
         ]
      ];
   var defburnley = [defprosijek
      ,[
         {axis:"Primljeni golovi",value:0.83},
         {axis:"Žuti kartoni",value:0.97},
         {axis:"Crveni kartoni",value:0.2},
         {axis:"Obrane",value:0.94},
         {axis:"Defanzivni blokovi",value:1},
         {axis:"Presječene lopte",value:0.66},
         {axis:"Uklizavanja",value:0.79},
         {axis:"Izbijene lopte",value:0.96}
         ]
      ];
   var defsouthampton = [defprosijek
      ,[
         {axis:"Primljeni golovi",value:0.8},
         {axis:"Žuti kartoni",value:0.92},
         {axis:"Crveni kartoni",value:0.6},
         {axis:"Obrane",value:0.77},
         {axis:"Defanzivni blokovi",value:0.68},
         {axis:"Presječene lopte",value:1},
         {axis:"Uklizavanja",value:0.95},
         {axis:"Izbijene lopte",value:0.95}
         ]
      ];
   var defbrighton = [defprosijek
      ,[
         {axis:"Primljeni golovi",value:0.74},
         {axis:"Žuti kartoni",value:0.77},
         {axis:"Crveni kartoni",value:0.8},
         {axis:"Obrane",value:0.75},
         {axis:"Defanzivni blokovi",value:0.76},
         {axis:"Presječene lopte",value:0.84},
         {axis:"Uklizavanja",value:0.93},
         {axis:"Izbijene lopte",value:0.82}
         ]
      ];
   var defcardiff = [defprosijek
      ,[
         {axis:"Primljeni golovi",value:0.85},
         {axis:"Žuti kartoni",value:0.85},
         {axis:"Crveni kartoni",value:0.2},
         {axis:"Obrane",value:0.95},
         {axis:"Defanzivni blokovi",value:0.66},
         {axis:"Presječene lopte",value:0.96},
         {axis:"Uklizavanja",value:0.89},
         {axis:"Izbijene lopte",value:0.87}
         ]
      ];
   var deffulham = [defprosijek
      ,[
         {axis:"Primljeni golovi",value:1},
         {axis:"Žuti kartoni",value:0.88},
         {axis:"Crveni kartoni",value:0.4},
         {axis:"Obrane",value:0.99},
         {axis:"Defanzivni blokovi",value:0.64},
         {axis:"Presječene lopte",value:0.79},
         {axis:"Uklizavanja",value:0.81},
         {axis:"Izbijene lopte",value:0.86}
         ]
      ];
   var defhuddersfield = [defprosijek
      ,[
         {axis:"Primljeni golovi",value:0.93},
         {axis:"Žuti kartoni",value:0.71},
         {axis:"Crveni kartoni",value:0.8},
         {axis:"Obrane",value:0.77},
         {axis:"Defanzivni blokovi",value:0.85},
         {axis:"Presječene lopte",value:0.96},
         {axis:"Uklizavanja",value:0.97},
         {axis:"Izbijene lopte",value:0.58}
         ]
      ];
  //Options for the Radar chart, other than default
  var mycfg = {
    w: w,
    h: h,
    maxValue: 0.6,
    levels: 6,
    ExtraWidthX: 300
  }
  
  //Call function to draw the Radar chart
  //Will expect that data is in %'s
  //Legend titles
  setGraph("first","Manchester City")
  setGraph("second","Manchester City")
   $('#clubFirst').on('change', function() {
      setGraph("first",this.value)
   });
   
   $('#clubSecond').on('change', function() {
      setGraph("second",this.value)
   });
 
function setGraph(graphContainer,graphData){

   switch(graphData){
      case "Manchester City" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", mnc, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defmnc, mycfg);
            createLegend()
         }
         
       break;
      }
      case "Liverpool" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", liverpool, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defliverpool, mycfg);
            createLegend()
         }
         
       break;
      }
      case "Chelsea" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", chelsea, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defchelsea, mycfg);
            createLegend()
         }
       break;
      }
      case "Tottenham" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", tottenham, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", deftottenham, mycfg);
            createLegend()
         }
       break;
      }
      case "Arsenal" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", arsenal, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defarsenal, mycfg);
            createLegend()
         }
       break;
      }
      case "Manchester United" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", mnu, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defmnu, mycfg);
            createLegend()
         }
       break;
      }
      case "Wolverhampton" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", wolverhampton, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defwolverhampton, mycfg);
            createLegend()
         }
       break;
      }
      case "Everton" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", everton, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defeverton, mycfg);
            createLegend()
         }
       break;
      }
      case "Leicester" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", leicester, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defleicester, mycfg);
            createLegend()
         }
       break;
      }
      case "West Ham" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", westham, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defwestham, mycfg);
            createLegend()
         }
       break;
      }
      case "Watford" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", watford, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defwatford, mycfg);
            createLegend()
         }
       break;
      }
      case "Crystal Palace" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", crystal, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defcrystal, mycfg);
            createLegend()
         }
       break;
      }
      case "Newcastle" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", newcastle, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defnewcastle, mycfg);
            createLegend()
         }
       break;
      }
      case "Bournemouth" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", bournemouth, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defbournemouth, mycfg);
            createLegend()
         }
       break;
      }
      case "Burnley" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", burnley, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defburnley, mycfg);
            createLegend()
         }
       break;
      }
      case "Southampton" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", southampton, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defsouthampton, mycfg);
            createLegend()
         }
       break;
      }
      case "Brighton" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", brighton, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defbrighton, mycfg);
            createLegend()
         }
       break;
      }
      case "Cardiff" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", cardiff, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defcardiff, mycfg);
            createLegend()
         }
       break;
      }
      case "Fulham" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", fulham, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", deffulham, mycfg);
            createLegend()
         }
       break;
      }
      case "Huddersfield" : {
         if(graphContainer == "first"){
            RadarChart.draw("#chart", huddersfield, mycfg);
            createLegend()
         }
         else if(graphContainer == "second"){
            RadarChart.draw("#chart2", defhuddersfield, mycfg);
            createLegend()
         }
       break;
      }
   }
   
}
  ////////////////////////////////////////////
  /////////// Initiate legend ////////////////
  ////////////////////////////////////////////
  function createLegend(){
   var legends = d3.selectAll("#svglegend").remove()

   console.log("LEGEND")
   var LegendOptions = ['Prosjek','Klub'];
   var svg = d3.selectAll('#chartbody')
   .selectAll('svg')
   .append('svg')
   .attr("id","svglegend")
   .attr("width", w+300)
   .attr("height", h)

//Create the title for the legend

       
//Initiate Legend	
var legend = svg.append("g")
   .attr("class", "legend")
   .attr("height", 100)
   .attr("width", 200)
   .attr('transform', 'translate(90,20)');
   //Create colour squares
   legend.selectAll('rect')
     .data(LegendOptions)
     .enter()
     .append("rect")
     .attr("x", w - 65)
     .attr("y", function(d, i){ return i * 20;})
     .attr("width", 10)
     .attr("height", 10)
     .style("fill", function(d, i){ return colorscale(i);});
   //Create text next to squares
   legend.selectAll('text')
     .data(LegendOptions)
     .enter()
     .append("text")
     .attr("x", w - 52)
     .attr("y", function(d, i){ return i * 20 + 9;})
     .attr("font-size", "11px")
     .attr("fill", "#737373")
     .text(function(d) { return d; });	
  }
  
        