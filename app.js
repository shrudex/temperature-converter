const c = document.querySelector("#celcius")
const f = document.querySelector("#fahrenheit")

window.addEventListener("load", ()=>{c.focus()});

c.addEventListener("input", () => {f.value = ((c.value*9)/5 + 32).toFixed(3);
if (!c.value) f.value="";
});

f.addEventListener("input", () => {c.value = (((f.value-32)*5)/9).toFixed(3);
if (!f.value) c.value="";
});