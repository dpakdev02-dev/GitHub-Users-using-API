

let getApi = async () => {
    let a = await fetch("https://api.github.com/users");

    let data = await a.json();

    let users = document.querySelector(".users");

    let inp = document.getElementById("inp");

    data.map((ele) => {
        let box = document.createElement("div");
        box.classList.add("box")
        box.innerHTML = `
                    <img src="${ele.avatar_url}" alt="" height="80px" width="80px">
                    <h1>${ele.login}</h1>
                    <a href="${ele.html_url}">View Profile</a>`
        users.appendChild(box);

        inp.addEventListener("keyup", () => {
            box.style.display = "none";
            if (ele.login.includes(inp.value)) {
                box.style.display = "flex";
            }
        })


    })




}

getApi();