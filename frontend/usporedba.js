
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
  RadarChart.draw("#chart", mnc, mycfg);
  createLegend()
  $('select').on('change', function() {
   switch(this.value){
      case "Manchester City" : {
       RadarChart.draw("#chart", mnc, mycfg);
       createLegend()
       break;
      }
      case "Liverpool" : {
       RadarChart.draw("#chart", liverpool, mycfg);
       createLegend()
       break;
      }
      case "Chelsea" : {
       RadarChart.draw("#chart", chelsea, mycfg);
       createLegend()
       break;
      }
      case "Tottenham" : {
       RadarChart.draw("#chart", tottenham, mycfg);
       createLegend()
       break;
      }
      case "Arsenal" : {
       RadarChart.draw("#chart", arsenal, mycfg);
       createLegend()
       break;
      }
      case "Manchester United" : {
       RadarChart.draw("#chart", mnu, mycfg);
       createLegend()
       break;
      }
      case "Wolverhampton" : {
       RadarChart.draw("#chart", wolverhampton, mycfg);
       createLegend()
       break;
      }
      case "Everton" : {
       RadarChart.draw("#chart", everton, mycfg);
       createLegend()
       break;
      }
      case "Leicester" : {
       RadarChart.draw("#chart", leicester, mycfg);
       createLegend()
       break;
      }
      case "West Ham" : {
       RadarChart.draw("#chart", westham, mycfg);
       createLegend()
       break;
      }
      case "Watford" : {
       RadarChart.draw("#chart", watford, mycfg);
       createLegend()
       break;
      }
      case "Crystal Palace" : {
       RadarChart.draw("#chart", crystal, mycfg);
       createLegend()
       break;
      }
      case "Newcastle" : {
       RadarChart.draw("#chart", newcastle, mycfg);
       createLegend()
       break;
      }
      case "Bournemouth" : {
       RadarChart.draw("#chart", bournemouth, mycfg);
       createLegend()
       break;
      }
      case "Burnley" : {
       RadarChart.draw("#chart", burnley, mycfg);
       RadarChart.draw("#chart2", burnley, mycfg);
       createLegend()
       break;
      }
      case "Southampton" : {
       RadarChart.draw("#chart", southampton, mycfg);
       createLegend()
       break;
      }
      case "Brighton" : {
       RadarChart.draw("#chart", brighton, mycfg);
       createLegend()
       break;
      }
      case "Cardiff" : {
       RadarChart.draw("#chart", cardiff, mycfg);
       createLegend()
       break;
      }
      case "Fulham" : {
       RadarChart.draw("#chart", fulham, mycfg);
       createLegend()
       break;
      }
      case "Huddersfield" : {
       RadarChart.draw("#chart", huddersfield, mycfg);
       createLegend()
       break;
      }
   }
 });
  
  ////////////////////////////////////////////
  /////////// Initiate legend ////////////////
  ////////////////////////////////////////////
  function createLegend(){
   var LegendOptions = ['Prosjek','Klub'];
   var svg = d3.select('#body')
   .selectAll('svg')
   .append('svg')
   .attr("width", w+300)
   .attr("height", h)

//Create the title for the legend

       
//Initiate Legend	
var legend = svg.append("g")
   .attr("class", "legend")
   .attr("height", 100)
   .attr("width", 200)
   .attr('transform', 'translate(90,20)') 
   ;
   //Create colour squares
   legend.selectAll('rect')
     .data(LegendOptions)
     .enter()
     .append("rect")
     .attr("x", w - 65)
     .attr("y", function(d, i){ return i * 20;})
     .attr("width", 10)
     .attr("height", 10)
     .style("fill", function(d, i){ return colorscale(i);})
     ;
   //Create text next to squares
   legend.selectAll('text')
     .data(LegendOptions)
     .enter()
     .append("text")
     .attr("x", w - 52)
     .attr("y", function(d, i){ return i * 20 + 9;})
     .attr("font-size", "11px")
     .attr("fill", "#737373")
     .text(function(d) { return d; })
     ;	
  }
  
        