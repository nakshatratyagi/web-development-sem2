function largest_number() {
    let l1 = [];
    for (let i = 1; i <= 5; i++) {
        let num = parseFloat(prompt("Enter marks for subject " + i));
        l1.push(num);
    }
    let max = l1[0];
    for (let i = 1; i < l1.length; i++) {
        if (l1[i] > max) {
            max = l1[i];
        }
    }
    document.getElementById("result").innerHTML =
        "Max element is " + max;
}