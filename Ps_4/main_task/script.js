drawGoogleChart();

function drawGoogleChart() {
    google.charts.load("current", {packages: ["corechart"]});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        let jsonData;
        let ourRequest = new XMLHttpRequest();
        ourRequest.open('post', 'data.json');
        ourRequest.onload = function () {
            jsonData = JSON.parse(ourRequest.responseText);
            let data = google.visualization.arrayToDataTable(jsonData);
            let options = {
                title: 'the most popular programming language',
                is3D: true,
            };

            let chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
            chart.draw(data, options);
        };
        ourRequest.send();
    }
}