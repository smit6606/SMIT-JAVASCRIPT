// Ajax => AJAX stands for Asynchronous JavaScript and XML. It's a set of web development techniques that allow web applications to send and receive data from a server without reloading the entire page. This makes web pages more responsive and interactive. 
document.querySelector('#meClick').addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', "https://dog.ceo/api/breeds/image/random", true);

    xhr.onload = () => {
        let response = JSON.parse(xhr.responseText);
        let image = document.createElement('img');
        image.setAttribute('src', response.message);
        image.style.width = "200px";
        image.style.height = "200px";
        document.querySelector('#dogImages').append(image);
    };

    xhr.send();
}) 
