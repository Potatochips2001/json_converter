let lowercase_keys = false, two_spaces = false, minify = false;
document.addEventListener('keydown', (k) => {
    let focused = document.activeElement != document.getElementById("main");
    if (k.key == 'Enter' && focused) document.getElementById("btn_convert").click();
});
document.addEventListener('change', () => {
    document.getElementById("lowercase_keys").checked ? lowercase_keys = true : lowercase_keys = false;
    document.getElementById("two_spaces").checked ? two_spaces = true : two_spaces = false;
    document.getElementById("minify").checked ? minify = true : minify = false;
});

let json = {}
function convert(){
    let txt = document.getElementById("main").value;
    let lines = txt.split('\n');
    for (let i = 0; i < lines.length; i++){
        let key = lines[i].substring(0, lines[i].indexOf(':'));
        let value = lines[i].substring(lines[i].indexOf(':')+1, lines[i].length);
        if (value.charAt(0) == " ") value = value.replace(" ", "");
        if (lowercase_keys) {
            key = key.toLowerCase();
        }
        json[key] = value;
    }

    if (two_spaces) { document.getElementById("main").value = JSON.stringify(json, null, 2) } else { document.getElementById("main").value = JSON.stringify(json, null, 4); };
    if (minify) document.getElementById("main").value = JSON.stringify(json, null, 0);
    json = {};
}
