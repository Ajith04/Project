import {getStudents} from '../api.js';


async function getAllStudents(){

    let allStudents = await getStudents();

    let table = document.getElementById("table");

    allStudents.forEach(e => {
        let row = document.createElement('div');
        row.style.display = "flex";
        row.style.backgroundColor = "#80C574"
        row.style.border = "1px solid black";
        row.style.justifyContent = "space-around";

        let idcell = document.createElement('div');
        idcell.style.padding = "20px";
        idcell.textContent = e.id;
        row.appendChild(idcell);

        let fnamecell = document.createElement('div');
        fnamecell.style.padding = "20px";
        fnamecell.textContent = e.fname;
        row.appendChild(fnamecell);

        let batchcell = document.createElement('div');
        batchcell.style.padding = "20px";
        batchcell.textContent = e.batch;
        row.appendChild(batchcell);

        let coursecell = document.createElement('div');
        coursecell.style.padding = "20px";
        coursecell.textContent = e.course;
        row.appendChild(coursecell);

        let dateofjoincell = document.createElement('div');
        dateofjoincell.style.padding = "20px";
        dateofjoincell.textContent = e.dateofjoin;
        row.appendChild(dateofjoincell);

        let mobilecell = document.createElement('div');
        mobilecell.style.padding = "20px";
        mobilecell.textContent = e.mobile;
        row.appendChild(mobilecell);

        let emailcell = document.createElement('div');
        emailcell.style.padding = "20px";
        emailcell.style.overflow = "hidden"
        emailcell.textContent = e.email;
        row.appendChild(emailcell);

        let addresscell = document.createElement('div');
        addresscell.style.padding = "20px";
        addresscell.textContent = e.address;
        row.appendChild(addresscell);

        table.appendChild(row);

    
});
}

getAllStudents();


