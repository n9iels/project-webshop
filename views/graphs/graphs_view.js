var StatsViewHelper = function ()
{
    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"
    }

    // Change the view of the page
    function setTopTenView(graphData)
    {
        console.log(graphData);
        document.title ="Stats - AZ Games";

        $("#component").load('/views/graphs/graphs.html', function () { // waar id = 'component' doe .load......
            // default select data
            $("#component").find("#range_switch").val("quarter");

            // graph
            var labels = new Array();
            var data = [];

            var gameCount = 0;
            var last_rank_num = 0; //assuming value.rank is never 0!
            var highestVal = 0;

            $.each(graphData, function(key, value) {
                gameCount++;

                if (gameCount < 11 || value.rank == last_rank_num) {
                    labels.push(value.title);
                    data.push(value.user_count);
                    
                    if (gameCount == 10) {
                        last_rank_num = value.rank;
                    }
                }
            });
            
            console.log(labels);
            console.log(data);

            var el = $("#graph__toptenitems__cnvs");
            var TopTenChart = new Chart(el, {
                type: 'horizontalBar',
                data: {
                    labels: labels,
                    datasets: [{
                        data: data,
                        backgroundColor: 'rgba(0, 200, 26, 1)', //groen
                        borderWidth: 1
                    }]
                },
                options: {
                    legend: {
                        display:false
                    },
                    title: {
                        display:true,
                        text: "Meest verkochte games" // need in januari, in februari, etc.
                    },
                    responsive:true,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                beginAtZero:true,
                                // maxRotation: 90,
                                // minRotation: 90,
                            }
                        }]
                    }
                }
            })

            // put desciption below graph
            var descr = 'Deze grafiek laat de games zien met het meeste aantal gebruikers dat de game 1 of meer keer heeft gekocht in de gekozen tijdsperiode.';

            var theDiv = document.getElementById("description__topten");
            var content = document.createTextNode(descr); 
            theDiv.appendChild(content); 

        });
    }

    function setTopTenChangeListener(action)
    {
        $("#component").on("change", "#range_switch", function()
        {
            var range = $("#range_switch").val();
            console.log("range: " + range);
            action(range);
        })
    }

    return {
        setActionListener: setActionListener,
        setTopTenView: setTopTenView,
        setTopTenChangeListener: setTopTenChangeListener
    }
}