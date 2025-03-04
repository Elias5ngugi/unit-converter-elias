const form = document.getElementById("converter");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = document.getElementById("inputVal").value;
    const displayVal = document.getElementById("display");
    const warningText = document.getElementById("warning");
    const selectVal = document.getElementById("selected").value;
    warningText.innerHTML = "";
    if (value && selectVal !== "") {
        let abb, mm, cm, dm, m, Dm, Hm, Km;

        switch (selectVal) {
            case "Millimeters":
                abb = "mm";
                mm = value * 1;
                cm = value * 0.1;
                dm = value * 0.01;
                m = value * 0.001;
                Dm = value * 0.0001;
                Hm = value * 0.00001;
                Km = value * 0.000001;
                break;

            case "Centimeters":
                abb = "cm";
                mm = value * 10;
                cm = value * 1;
                dm = value * 0.1;
                m = value * 0.01;
                Dm = value * 0.001;
                Hm = value * 0.0001;
                Km = value * 0.00001;
                break;

            case "Decimeters":
                abb = "dm";
                mm = value * 100;
                cm = value * 10;
                dm = value * 1;
                m = value * 0.1;
                Dm = value * 0.01;
                Hm = value * 0.001;
                Km = value * 0.0001;
                break;

            case "Meters":
                abb = "m";
                mm = value * 1000;
                cm = value * 100;
                dm = value * 10;
                m = value * 1;
                Dm = value * 0.1;
                Hm = value * 0.01;
                Km = value * 0.001;
                break;

            case "Decameters":
                abb = "Dm";
                mm = value * 10000;
                cm = value * 1000;
                dm = value * 100;
                m = value * 10;
                Dm = value * 1;
                Hm = value * 0.1;
                Km = value * 0.01;
                break;

            case "Hectometers":
                abb = "Hm";
                mm = value * 100000;
                cm = value * 10000;
                dm = value * 1000;
                m = value * 100;
                Dm = value * 10;
                Hm = value * 1;
                Km = value * 0.1;
                break;

            case "Kilometers":
                abb = "Km";
                mm = value * 1000000;
                cm = value * 100000;
                dm = value * 10000;
                m = value * 1000;
                Dm = value * 100;
                Hm = value * 10;
                Km = value * 1;
                break;

            default:
                warningText.innerHTML = `<p style="color: red; font-weight: bold;">Please select a unit.</p>`;
                return;
        }

        displayVal.innerHTML = `
        <p><strong>${value} ${abb}</strong> is equal to <strong>${mm}mm</strong></p>
        <p><strong>${value} ${abb}</strong> is equal to <strong>${cm}cm</strong></p>
        <p><strong>${value} ${abb}</strong> is equal to <strong>${dm}dm</strong></p>
        <p><strong>${value} ${abb}</strong> is equal to <strong>${m}m</strong></p>
        <p><strong>${value} ${abb}</strong> is equal to <strong>${Dm}Dm</strong></p>
        <p><strong>${value} ${abb}</strong> is equal to <strong>${Hm}Hm</strong></p>
        <p><strong>${value} ${abb}</strong> is equal to <strong>${Km}Km</strong></p>`;
    } else {
        warningText.innerHTML = `<p style="color: red; font-weight: bold;">Please select a value.</p>`;
    }
});
