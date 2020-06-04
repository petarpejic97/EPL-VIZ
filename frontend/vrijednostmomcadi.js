var data1 = [
    {position:1,ser2:1003200000
    },
    { position:2,ser2:836440000
    },
    {position:3,ser2:779460000
    },
    {position:4, ser2:735240000
    },
    { position:5,ser2:701800000
    },
    {position:6 ,ser2:550440000
    },
    {position:7,ser2:369600000
    },
    {position:8,ser2:305360000
    },
    {position:9,ser2:284240000
    },
    {position:10 ,ser2:234212000
    },
    {position:11,ser2:229240000
    },
    { position:12 ,ser2:223520000
    },
    {position:13,ser2:214060000
    },
    { position:14,ser2:200288000
    },
    { position:15,ser2:176440000
    },
    {position:16,ser2:160072000
    },
    {position:17, ser2:152680000
    },
    { position:18,ser2:152020000
    },
    {position:19,ser2:106920000
    },
    {position:20, ser2:85492000
    }]
var data2 = [
    {position:1,ser2:39987200
    },
    { position:2,ser2:34848000
    },
    {position:3,ser2:29981600
    },
    {position:4, ser2:29409600
    },
    { position:5,ser2:26989600
    },
    {position:6 ,ser2:22017600
    },
    {position:7,ser2:16068800
    },
    {position:8,ser2:11748000
    },
    {position:9,ser2:10929600
    },
    {position:10 ,ser2:9011200
    },
    {position:11,ser2:9169600
    },
    { position:12 ,ser2:8280800
    },
    {position:13,ser2:10700800
    },
    { position:14,ser2:8008000
    },
    { position:15,ser2:6784800
    },
    {position:16,ser2:5720000
    },
    {position:17, ser2:6635200
    },
    { position:18,ser2:6080800
    },
    {position:19,ser2:4276800
    },
    {position:20, ser2:3053600
    }]
var klik=1;
$( document ).ready(function() {
  
    $( "#button1").click(function() {
        klik = 1;
        update(data1)
        
      });
      $( "#button2").click(function() {
        klik = 2
        update(data2)
});
var margin = {top: 10, right: 30, bottom: 30, left: 100},
    width = 800 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select("#ukupneFinancije")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom+100)
  .append("g")
  .attr("transform","translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleLinear()
    .range([0,width]);

var xAxis = d3.axisBottom()
    .scale(x)
    .ticks(20);

svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .attr("class","myXaxis")

var y = d3.scaleLinear()
    .range([height, 0]);

var yAxis = d3.axisLeft()
    .scale(y);
svg.append("g")
  .attr("class","myYaxis")

function update(data) {
  if(klik == 1){
    console.log("udem")
    svg.select(".title").remove()
    svg.append("text")
          .attr("class","title")
          .attr("x", (width / 2))             
          .attr("y", 5 )
          .attr("text-anchor", "middle")  
          .style("font-size", "16px") 
          .style("text-decoration", "underline")  
          .text("Ukupna vrijednost momčadi");
  }
  else{
    svg.select(".title").remove()
    svg.append("text")
    .attr("class","title")
          .attr("x", (width / 2))             
          .attr("y", 5)
          .attr("text-anchor", "middle")  
          .style("font-size", "16px") 
          .style("text-decoration", "underline")  
          .text("Prosječna vrijednost momčadi");
  }
  svg.select(".xos").remove();
  svg.select(".yos").remove();

  x.domain([0, d3.max(data, function(d) { return d.position }) ]);
  svg.selectAll(".myXaxis").transition()
    .duration(3000)
    .call(xAxis);

    svg.append("text")             
      .attr("transform","translate(" + (width/2) + " ," + (height + margin.top + 30) + ")")
      .style("text-anchor", "middle")
      .attr("class","xos")
      .text("Pozicija na tablici");

  y.domain([0, d3.max(data, function(d) { return d.ser2  }) ]);

  svg.selectAll(".myYaxis")
    .transition()
    .duration(3000)
    .call(yAxis)
  
  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("class","yos")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Vrijednost kluba(€)");      


  var u = svg.selectAll(".lineTest")
    .data([data], function(d){ return d.position });

  u.enter()
    .append("path")
    .attr("class","lineTest")
    .merge(u)
    .transition()
    .duration(3000)
    .attr("d", d3.line()
    .x(function(d) { return x(d.position); })
    .y(function(d) { return y(d.ser2); }))
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2.5)
}

update(data1)
});

d3.queue  
        
d3.queue()
.defer(d3.json, "uk.geo.json")
.await(ready);
  
function ready (error, uk){
  
    var width = 600;
        height = 700;
    
    var projection = d3.geoAlbers()
        .center([0, 55.4])
        .rotate([4.4, 0])
        .parallels([50, 60])
        .scale(width * 6.4)
        .translate([width / 2, height / 2]);
    
    var path = d3.geoPath()
        .projection(projection)
        .pointRadius(2);
    
    var svg = d3.select(".karta")
        .append("svg")
        .attr("width", width)
        .attr("id","karta")
        .attr("height", height);

    
        svg.selectAll(".uk")
        .data(uk.features)
        .enter().append("path")
        .attr("class", "uk" )
        .attr("d", path);
};