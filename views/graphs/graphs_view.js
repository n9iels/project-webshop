var StatsViewHelper = function ()
{
    function setActionListener(action1, action2, action3)
    {
        // $(document).ready(function()
        // {   
        //     //give default begin- and end dates to Model
        //     cur_date = new Date();
        //     var cur_day = cur_date.getDate();
        //     var cur_month = cur_date.getMonth() + 1;
        //     var cur_year = cur_date.getFullYear();
        //     // create end date string to give to model -> api -> query
        //     var end_date = String(cur_year) + "-" + putZeroBeforeNum(cur_month) + "-" + putZeroBeforeNum(cur_day);


        //     action("quarter");
        // }); // if 'document ready' perform "action"

        $(document).ready(function()
        {
            // load page
            // put range switch to default
            // get default values from html
            // show TopTen graph

            cur_date = new Date();
            var cur_day = cur_date.getDate();
            var cur_month = cur_date.getMonth() + 1;
            var cur_year = cur_date.getFullYear();

            var end_day = putZeroBeforeNum(cur_day);
            var end_month = putZeroBeforeNum(cur_month);
            var end_year = String(cur_year);

            var begin_date = calcBeginDate(cur_day, cur_month, cur_year, 3); // array of strings: [0]=day [1]=month [2]=year
            console.log("in ready: " + end_year, end_month, end_day, begin_date);

            // load page
            document.title ="Stats - AZ Games";
            $("#component").load('/views/graphs/graphs.html', function()
            {
                for(i = 1; i < 32; i++)
                {
                    $("#range_bd").append("<option value='" + i + "'>" + i + "</option>");
                    $("#range_ed").append("<option value='" + i + "'>" + i + "</option>");
                }

                for (i = 2015; i < cur_date.getFullYear() + 1; i++)
                {
                    if (i == 2000)
                    {
                        $("#range_by").append("<option value='" + i + "' selected='selected'>" + i + "</option>");
                        $("#range_ey").append("<option value='" + i + "' selected='selected'>" + i + "</option>");
                        continue;
                    }

                    $("#range_by").append("<option value='" + i + "'>" + i + "</option>");
                    $("#range_ey").append("<option value='" + i + "'>" + i + "</option>");
                }

                // put range switches to default
                // begin date
                $("#component").find("#range_by").val(begin_date[2]);
                $("#component").find("#range_bm").val(begin_date[1]);
                $("#component").find("#range_bd").val(begin_date[0]);
                //end date
                $("#component").find("#range_ey").val(end_year     );
                $("#component").find("#range_em").val(end_month    );
                $("#component").find("#range_ed").val(end_day      );

                showGraphByHtml(action1, action2, action3);
            })
        })
    }
    function calcBeginDate(cd, cm, cy, months_earlier)
    {
        var begin_date = [];
        var begin_day = cd;
        var begin_month = cm;
        var begin_year = cy;

        while (months_earlier > 0) {
            begin_month -= 1;
            if (begin_month == 0) {
                begin_year -= 1;
                begin_month += 12;
            }
            months_earlier--;
        }

        begin_date.push(putZeroBeforeNum(begin_day));
        begin_date.push(putZeroBeforeNum(begin_month));
        begin_date.push(String(begin_year));
        return begin_date;
    }

    function showGraphByHtml(action1, action2, action3)
    {
        var by = $("#component").find("#range_by").val();
        var bm = $("#component").find("#range_bm").val();
        var bd = $("#component").find("#range_bd").val();
        var ey = $("#component").find("#range_ey").val();
        var em = $("#component").find("#range_em").val();
        var ed = $("#component").find("#range_ed").val();

        var begin_date = by + "-" + bm + "-" + bd;
        var end_date = ey + "-" + em + "-" + ed;
        console.log("in showGraphByHtml: " + begin_date, end_date);

        var graph_choice = $("#component").find("#graph_choice").val();
        if (graph_choice == "topgames") {
            action1(begin_date, end_date);
        } else if (graph_choice == "revenue") {
            action2(begin_date, end_date);
        } else if (graph_choice == "useramnt") {
            action3(begin_date, end_date);
        } else {
            console.log("graph_choice has unexpected value. graph_choice = " + graph_choice);
        }
    }

    function setRangeChangeListeners(showTopGames, showRevenue, showUserAmnt)
    {
        $("#component").on("change", ".range", function()
        {
            showGraphByHtml(showTopGames, showRevenue, showUserAmnt);
        })
    }

    function setGraphSelectListener(showTopGames, showRevenue, showUserAmnt)
    {
        $("#component").on("change", "#graph_choice", function()
        {
            showGraphByHtml(showTopGames, showRevenue, showUserAmnt);
        })
    }

    function putZeroBeforeNum (num) {
        if (parseInt(num) < 10)
        {
            num = "0" + String(num);
            return num;
        } else {
            return String(num);
        }
    }

    // functions for showing a graph
    function showTopGamesGraph(graphData)
    {
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

        // remove old chart
        var graph_el = $("#graph");
        graph_el.empty();
        graph_el.append('<div class="graph__description message message--info" id="graph__description"></div>');
        graph_el.append('<canvas id="graph__cnvs" width="800" height="400"></canvas>');

        // add new chart
        var el = $("#graph__cnvs");
        var TopGamesChart = new Chart(el, {
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

        // remove old description
        var theDiv = document.getElementById("graph__description");
        theDiv.innerHTML = "";
        // put desciption below graph
        var descr = 'Deze grafiek laat de games zien met het meeste aantal gebruikers dat de game 1 of meer keer heeft gekocht in de gekozen tijdsperiode.';
        var content = document.createTextNode(descr); 
        theDiv.appendChild(content); 
    }

    function showRevenueGraph(begin_date, end_date, graphData)
    {
        console.log(graphData);
        console.log("SUPERTEST AAAAH" + graphData[0].order_date.split("T")[0]);

        // graph
        var labels = new Array();
        var data = [];

        // put all dates in x-axis. put all corresponding data in graph
        var b_dateA = begin_date.split("-");
        var y = parseInt(b_dateA[0]);
        var m = parseInt(b_dateA[1]);
        var d = parseInt(b_dateA[2]);
        console.log("y    :" + y + " m    :" + m + " d    :" + d);

        var e_dateA = end_date.split("-");
        var end_y = parseInt(e_dateA[0]);
        var end_m = parseInt(e_dateA[1]);
        var end_d = parseInt(e_dateA[2]);
        console.log("end_y:" + end_y + " end_m:" + end_m + " end_d:" + end_d);

        var i = 0;
        var db_date = graphData[i].order_date.split("T")[0];
        var insert_into_next_iteration = 0;
        var insert_prev=false;
        while (!(y == end_y && m == end_m && d == end_d)){
            var date = (String(y) + "-" + putZeroBeforeNum(m) + "-" + putZeroBeforeNum(d));
            console.log("date: " + date);
            console.log("db_date: " + db_date, "i: " + i);
            console.log(" insert_prev: " + insert_prev + " insert_into_next_iteration: " + insert_into_next_iteration);
            //x-axis
            labels.push(date);
            console.log(date + " pushed.");
            //y-axis
            if (date == db_date && i < graphData.length) {
                console.log("date==db_date && i<graphData.length")
                if (insert_prev){
                    data.push(insert_into_next_iteration)
                    console.log(insert_into_next_iteration + " pushed.");
                } else {
                    data.push(0);
                    console.log("0 pushed.");
                }
                insert_prev=true;
                insert_into_next_iteration = graphData[i].day_price;
                // update db_date
                i += 1;
                if (i < graphData.length) {
                    db_date = graphData[i].order_date.split("T")[0];
                }
            } else {
                if (insert_prev){
                    data.push(insert_into_next_iteration);
                    console.log(insert_into_next_iteration + " pushed.");
                } else {
                    data.push(0);
                    console.log("0 pushed.");
                }
                insert_prev=false;
            }
            //make next date
            d += 1;
            if (d>31) {
                d=1; m+=1;
                if (m>12) {
                    m=1; y+=1;
                }
            }
        }
        //// end date (doesn't go through the while loop above)
        var date = (String(y) + "-" + putZeroBeforeNum(m) + "-" + putZeroBeforeNum(d));
        console.log("date: " + date)
        console.log("db_date: " + db_date);
        //x-axis
        labels.push(date);
        console.log(date + " pushed.");
        //y-axis
        if (insert_prev){
            data.push(insert_into_next_iteration)
            console.log(insert_into_next_iteration + " pushed.");
        } else {
            data.push(0);
            console.log("0 pushed.");
        }
        
        console.log(labels);
        console.log(data);

        // remove old chart
        var graph_el = $("#graph");
        graph_el.empty();
        graph_el.append('<div class="graph__description message message--info" id="graph__description"></div>');
        graph_el.append('<canvas id="graph__cnvs" width="800" height="400"></canvas>');

        // add new chart
        var el = $("#graph__cnvs");
        var RevChart = new Chart(el, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: 'rgba(0, 200, 26, 1)', //groen //weg?
                    //borderWidth: 1, //weg?
                    spanGaps:false,
                }],
            },
            options: {
                legend: {
                    display:false
                },
                title: {
                    display:true,
                    text: "Omzet" // need in januari, in februari, etc.
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
                            maxRotation: 90,
                            minRotation: 90,
                        }
                    }]
                }
            }
        })

        // remove old description
        var theDiv = document.getElementById("graph__description");
        theDiv.innerHTML = "";
        // put desciption below graph
        var descr = 'De gegenereerde omzet.';
        var content = document.createTextNode(descr); 
        theDiv.appendChild(content);
    }

    function showUserAmntGraph(data)
    {

    }

    return {
        setActionListener: setActionListener,
        setRangeChangeListeners: setRangeChangeListeners,
        setGraphSelectListener: setGraphSelectListener,
        showTopGamesGraph: showTopGamesGraph,
        showRevenueGraph: showRevenueGraph,
        showUserAmntGraph: showUserAmntGraph
    }
}

    // // Change the view of the page
    // function showGraphs(range, graphData)
    // {
    //     console.log(graphData);
    //     document.title ="Stats - AZ Games";

    //     $("#component").load('/views/graphs/graphs.html', function () { // waar id = 'component' doe .load......
    //         // default select data
    //         $("#component").find("#range_switch").val(range);

    //         // graph
    //         var labels = new Array();
    //         var data = [];

    //         var gameCount = 0;
    //         var last_rank_num = 0; //assuming value.rank is never 0!
    //         var highestVal = 0;

    //         $.each(graphData, function(key, value) {
    //             gameCount++;

    //             if (gameCount < 11 || value.rank == last_rank_num) {
    //                 labels.push(value.title);
    //                 data.push(value.user_count);
                    
    //                 if (gameCount == 10) {
    //                     last_rank_num = value.rank;
    //                 }
    //             }
    //         });
            
    //         console.log(labels);
    //         console.log(data);

    //         var el = $("#graph__toptenitems__cnvs");
    //         var TopTenChart = new Chart(el, {
    //             type: 'horizontalBar',
    //             data: {
    //                 labels: labels,
    //                 datasets: [{
    //                     data: data,
    //                     backgroundColor: 'rgba(0, 200, 26, 1)', //groen
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 legend: {
    //                     display:false
    //                 },
    //                 title: {
    //                     display:true,
    //                     text: "Meest verkochte games" // need in januari, in februari, etc.
    //                 },
    //                 responsive:true,
    //                 scales: {
    //                     yAxes: [{
    //                         ticks: {
    //                             beginAtZero:true
    //                         }
    //                     }],
    //                     xAxes: [{
    //                         ticks: {
    //                             beginAtZero:true,
    //                             // maxRotation: 90,
    //                             // minRotation: 90,
    //                         }
    //                     }]
    //                 }
    //             }
    //         })

    //         // put desciption below graph
    //         var descr = 'Deze grafiek laat de games zien met het meeste aantal gebruikers dat de game 1 of meer keer heeft gekocht in de gekozen tijdsperiode.';

    //         var theDiv = document.getElementById("description__topten");
    //         var content = document.createTextNode(descr); 
    //         theDiv.appendChild(content); 

    //     });
    // }

    // function setTopTenChangeListener(action)
    // {
    //     $("#component").on("change", "#range_switch", function()
    //     {
    //         var range = $("#range_switch").val();
    //         console.log("range: " + range);
    //         action(range);
    //     })
    // }


