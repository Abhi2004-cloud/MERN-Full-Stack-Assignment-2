document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const userTable = document.getElementById("userTable");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const contact = document.getElementById("contact").value;
            const address = document.getElementById("address").value;

            const user = { name, email, contact, address };

            let users = JSON.parse(localStorage.getItem("users")) || [];

            users.push(user);

            localStorage.setItem("users", JSON.stringify(users));

            form.reset();

            alert("User Registered Successfully!");
        });
    }

    if (userTable) {
        
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.forEach(user => {
            let row = `<tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            </tr>`;
            userTable.innerHTML += row;
        });
    }
});
