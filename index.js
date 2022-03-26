const htmlFields = document.getElementsByClassName("square")
const fields = [];

for (const field of htmlFields) {
    fields.push({
        isUsed: false,
        field: field
    })
}

for (let i = 0; i < fields.length; i++) {
    fields[i].field.addEventListener("click", () => {
        markField(i);
    })

}

let turnA = true;

function markField(number) {
    if (!fields[number].isUsed) {
        if (turnA) {
            fields[number].field.innerText = "X";
            turnA = false;
            fields[number].isUsed = true;
        }

        else {
            fields[number].field.innerText = "O";
            turnA = true;
            fields[number].isUsed = true;
        }
    }
}



