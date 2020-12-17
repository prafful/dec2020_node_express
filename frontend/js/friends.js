


callMe = ()=>{
    axios.get("http://localhost:1234/friends")
        .then(response=>{
            console.log(response)
            const friends = response.data
            var olref = document.getElementById("friends")
            friends.map(friend=>{
                var newli = document.createElement("li")
                //var newButton = document.createElement("button")
                //newButton.setAttribute("onClick", "editFriend('+friend.id+')'")
                newli.innerHTML = friend.name + "    " 
                                + "<button onClick='editFriend("+friend.id+")'>Edit</button>"
                olref.appendChild(newli)
            })
        })
}

editFriend=(id)=>{
    console.log("edit friend...." + id);
}


callMe()