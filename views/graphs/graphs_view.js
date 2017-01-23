var StatsViewHelper = function ()
{
    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"
    }

    // Change the view of the page
    function setView(graphData)
    {
        document.title ="Stats - AZ Games";

        $("#component").load('/views/graphs/graphs.html', function () { // waar id = 'component' doe .load......
            var count = 0;
            // $.each(data, function(graphData) {

                if (count == 0) { //rows are the Top 10 Games
                    var labels = [10];
                    //var data = [10];

                    var gameCount = 0;

                    $.each(graphData, function(key, value) {
                        labels[gameCount] = value.title;
                        //data[gameCount] = value.amount;

                        gameCount++;
                    });

                    var htmlel = $("#graph__toptenitems__cnvs");
                    var TopTenChart = new Chart(htmlel, {
                        type: 'bar',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'Top 10 Verkochte Games van een maand',
                                data: [12, 19, 3, 5, 2, 3],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero:true
                                    }
                                }]
                            }
                        }
                    });

                } else if (count == 1) {

                } else if (count == 2) {

                } else {
                    console.log("count has unexpected value. count = " + count);
                }

                count++;
            });
        // })
    }

    return {
        setActionListener: setActionListener,
        setView: setView,
    }
}