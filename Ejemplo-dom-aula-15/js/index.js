const usersContainer = document.getElementById("usersContainer");

const users = [];

const chargeUsers = () => {
  usersContainer.innerHTML = "";

  users.forEach((user, index) => {
    const tr = document.createElement("tr");
    if (index % 2 == 0) {
      tr.classList.add("user_row_white");
    } else {
      tr.classList.add("user_row_dark");
    }

    tr.innerHTML = `
        <th>${index + 1}</th>
        <th>${user.name}</th>
        <th>${user.lastName}</th>
        <th>${user.adress}</th>
        <th>${user.age}</th>
        <th>${user.email}</th>
    `;

    usersContainer.appendChild(tr);
  });
};

chargeUsers();

const usersForm = document.getElementById("usersForm");

usersForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const user = Object.fromEntries(formData);

  users.push(user);
  chargeUsers();
});
