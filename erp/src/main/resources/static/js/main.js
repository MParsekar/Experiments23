function logAttendance() {
    

    fetch("/api/attendance/getTodaysattendance").then(reJson => reJson.json()).then(response => {
        console.log(response);
        const table = document.getElementById("studentsAttendace");

        const tr1 = document.createElement("tr")
        const tbody = document.createElement("tbody")


        response?.forEach((el, index) => {
            const tr = document.createElement("tr");
            // header.forEach(element => {
            //     const td = document.createElement("td")
            //     console.log(el,element["date"],element[el]);
            // })
            console.log(index);
            if (index === 0) {
                for (const key in el) {
                    const th = document.createElement("th")
                    th.innerText = key;
                    tr1.append(th);
                }
            }
            for (const key in el) {
                if (Object.hasOwnProperty.call(el, key)) {
                    const element = el[key];
                    const td = document.createElement("td")
                    td.innerText = element;
                    tr.append(td);
                }
            }
            tbody.append(tr)
        })
        table.append(tr1);
        table.append(tbody)
        
    })
}
logAttendance()