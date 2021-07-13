const date = Date.now()

const postForm = async (event) => {
  

    const title = document.querySelector("#title-post").value.trim();
    const content = document.querySelector("#content-post").value.trim(); 

    
        const response = await fetch("/api/posts", {
            method: "POST", 
            body: JSON.stringify({title, content}), 
            headers: {"Content-Type": "application/json"},
        }); 

        if(response.ok){
            console.log(response)
            document.location.replace("/dashboard")
        } else {
            alert("Failed to add Post"); 
        }
    
}

document.querySelector("#submit-post").addEventListener("click", postForm); 