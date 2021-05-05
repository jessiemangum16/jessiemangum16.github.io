const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  var m = MOUNTAINS;
  
    for (let i = 0; i < m.length; i++){

        let table = document.createElement('table');

        let trTop = document.createElement('tr');
        let th1 = document.createElement('th'); 
            th1.textContent = "Name";
        let th2 = document.createElement('th'); 
            th2.textContent = "Height";
        let th3 = document.createElement('th'); 
            th3.textContent = "Place";

        let trData = document.createElement('tr');
        let td1 = document.createElement('td');
            td1.textContent = m[i].name;
        let td2 = document.createElement('td');
            td2.textContent = m[i].height;
        let td3 = document.createElement('td');
            td3.textContent = m[i].place;

        trTop.appendChild(th1);
        trTop.appendChild(th2);
        trTop.appendChild(th3);

        trData.appendChild(td1);
        trData.appendChild(td2);
        trData.appendChild(td3);

        table.appendChild(trTop);
        table.appendChild(trData);

        console.log(trData);
        console.log(m);
        console.log(table);

        document.querySelector('div#table').appendChild(table);

    }


