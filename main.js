function submit(event){
    if(event.key == "Enter"){
        loadWeather();
    }
}

function loadWeather(){
    var city = document.getElementById("txtCity").value;
    getWeather(city).then(function(report){
        loadWeatherGrid(report);
    });
}

function loadWeatherGrid(report){
    if(!report){
        var error = document.createElement("div");
        error.classList.add("error");
        error.append("Could not find the city.");
        document.getElementById("weatherGrid").innerHTML = error.outerHTML;
    }
    var grid = document.createElement("div");
    grid.classList.add("grid");
    buildHeader(grid, report);
    buildBody(grid, report);
    document.getElementById("weatherGrid").innerHTML = grid.outerHTML;
}

function buildHeader(grid, report){
    var headerDiv = document.createElement("div");
    headerDiv.classList.add("gridItem");
    headerDiv.classList.add("headerItem");
    headerDiv.append(report.City);
    headerDiv.append(report.icon);
    headerDiv.append(report.Condition);
    grid.append(headerDiv);
}

function buildBody(grid, report){
    for (var prop in report)
    {
        if(["icon","Condition","City"].includes(prop))
        {
            continue;
        }

        var propDiv = document.createElement("div");
        propDiv.classList.add("gridItem");
        propDiv.append(prop);
        var valueDiv = document.createElement("div");
        valueDiv.classList.add("gridItem");
        valueDiv.append(report[prop]);
        grid.append(propDiv);
        grid.append(valueDiv);
    }
}