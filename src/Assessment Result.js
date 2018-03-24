
// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Sleep Quality',     6],
          ['Lack of Self-control',      5],
          ['Emotional Instability',  4],
          ['Stress', 8]
        ]);



  // Optional; add a title and set the width and height of the chart
  var options = { 'width':300, 'height':200,
  				'chartArea': {'width': '85%', 'height': '100%'},
				
        colors: ['#EB8A44', '#F9DC24', '#4B7447', '#8EBA43', '#f6c7b6'],
				 backgroundColor: { fill: "#30BEE2" } ,
         legend: {alignment:'center', textStyle: {fontSize: 13, fontName:'Avenir'}}
				};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);

	  
}
