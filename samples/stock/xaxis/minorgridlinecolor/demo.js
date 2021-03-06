$(function() {
	var chart = new Highcharts.StockChart({
	    
	    chart: {
	        renderTo: 'container'
	    },
	    
	    rangeSelector: {
	    	selected: 1
	    },
	    
		yAxis: {
			minorGridLineColor: '#F0F0F0',
			minorTickInterval: 'auto'
		},
	    
	    series: [{
	        name: 'USD to EUR',
	        data: usdeur
	    }]
	});
});