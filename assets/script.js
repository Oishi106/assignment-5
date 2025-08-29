//heart counter


function getHeartCount() {
    return getInnerText("heart-count");
}
function setHeartCount(value) {
    setInnerText("heart-count", value);
}

const heartIcons = document.getElementsByClassName("heart-btn")
for (const icon of heartIcons){
    icon.addEventListener("click", function(e){
        e.preventDefault()
        let current = getHeartCount()
        setHeartCount(current + 1)
    })
}


