function breedList() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(data => {
            let breedDropDown = document.querySelector("#breedDropdown");

            for (let breed in data.message) {
                let option = document.createElement('option');
                option.value = breed;
                option.textContent = breed;
                breedDropDown.append(option);
            }
        })
        .catch(err => console.error("Error fetching breeds:", err));
}

breedList();

document.querySelector("button").addEventListener("click", () => {
    let selectedBreed = document.querySelector("#breedDropdown").value;

    if (!selectedBreed) {
        alert("Please select a breed first!");
        return;
    }

    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
        .then(res => res.json())
        .then(data => {
            if (!data.message) {
                alert("No images found, please select another breed.");
                return;
            }

            let dogImage = document.createElement("img");
            dogImage.setAttribute("src", data.message);
            dogImage.style.height = "300px";
            dogImage.style.width = "300px";
            dogImage.style.padding = "20px";

            document.querySelector("#viewDog").innerHTML = ""; // Clear previous images
            document.querySelector("#viewDog").append(dogImage);
        })
        .catch(err => console.error("Error fetching images:", err));
});
