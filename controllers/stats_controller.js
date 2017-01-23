var StatsController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Main function, also the start startpoint for a page
    function main()
    {
        $("#component").load('/views/graphs/graphs.html', function () { // waar id = 'component' doe .load......
            var htmlel = $("#graph__toptenitems__cnvs");

            var gameOne = "gameOne";

            var TopTenChart = new Chart(htmlel, {
                type: 'bar',
                data: {
                    labels: [gameOne, "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [{
                        label: '# of Votes',
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
        })

        //ViewHelper.setActionListener(getGraph);
    }

    function getGraphs()
    {
        Model.getGraphs(setView);
    }
    function setView(data)
    {
        ViewHelper.setView(data);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};