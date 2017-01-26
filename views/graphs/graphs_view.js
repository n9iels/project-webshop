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

                if (count == 0) { //rows are the Top 10/11/12 etc. Games
                    var labels = new Array();
                    //labels.push(""); //to get blank space away
                    var data = [];

                    var gameCount = 0;
                    var last_rank_num = 0; //assuming value.rank is never 0!

                    $.each(graphData, function(key, value) {
                        gameCount++;

                        if (gameCount < 11 || value.rank == last_rank_num) {
                            // split long game names into pieces. put the pieces as strings in an array, give that array to the labels array. chartjs will show pieces on new lines each.




                            labels.push(value.title);
                            data.push(value.super_amount);
                            
                            if (gameCount == 10) {
                                last_rank_num = value.rank;
                            }
                        }
                    });
                    
                    console.log(labels);
                    console.log(data);

                    var el = $("#graph__toptenitems__cnvs");
                    var TopTenChart = new Chart(el, {
                        type: 'bar',
                        data: {
                            labels: [["Grand Theft Auto:", " Vice City"], "God of War 3 - Essentials Edition", ["The Legend of Zelda:", "Breath of the Wild"], "Kirby's Adventure", "Super Mario Bros. 3", "Super Smash Bros Melee", "Guitar Hero III: Legends of Rock", "Paper Mario", "Trauma Center: New Blood", "Sonic Adventure 2", "Pokémon Yellow"], //["0","9","asdfasfd","7","6","234","5"],
                            datasets: [{
                                data: data,
                                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                borderColor: 'rgba(255,99,132,1)',
                                borderWidth: 1
                            }]
                        },
                        options: {
                            legend: {
                                display:false
                            },
                            title: {
                                display:true,
                                text: "Most Sold Games" // need in januari, in februari, etc.
                            },
                            responsive:false,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero:true
                                    }
                                }],
                                xAxes: [{
                                    ticks: {
                                        maxRotation: 90,
                                        minRotation: 90,
                                        autoSkip: false
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