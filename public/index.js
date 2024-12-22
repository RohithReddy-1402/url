const btn = document.getElementById('submit');
const container = document.getElementById('result');
btn.addEventListener('click', async () => {
    const text = document.getElementById("url").value;

    try {
        const response = await fetch("https://url-shortner-g5ff.onrender.com/url", {
            mode: 'cors',
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: text })
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data.shortId);
        const p=document.createElement('p');
        p.id='link-text';

        p.innerText =("https://url-shortner-g5ff.onrender.com/"+data.shortId);
        const copy_btn=document.createElement("button");
        copy_btn.setAttribute('id', 'copy_btn');
        copy_btn.textContent ="Copy";
        if(container){
            a=document.getElementById('link-text');
            while(container&&a){container.removeChild(container.a);}
            container.appendChild(p);
            container.appendChild(copy_btn);
            copy_btn.addEventListener("click", ()=>{
                window.navigator.clipboard.writeText(p.innerText);
            })
        }
        else{
            console.log(data.shortId);
        }

    } catch (error) {
        console.error("Fetch error:", error);
    }
});
