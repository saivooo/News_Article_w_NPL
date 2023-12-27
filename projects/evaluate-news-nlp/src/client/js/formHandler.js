function handleSubmit(event) {
    event.preventDefault();
    let formText = document.getElementById('userSentence').value;
    if (formText == ""){
        return alert("can't be blank")
    }
    const formdata = new FormData();
    formdata.append("txt", formText);
    formdata.append("lang", "auto");

    fetch('/test', {
        method: 'POST',
        body: formdata
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("-------------------------------------------------")
            console.log(data)            
            document.getElementById('text').textContent = data.sentence[0].text;
            document.getElementById('subjectivity').textContent = data.subjectivity;
            document.getElementById('confidence').textContent = `${data.confidence}%`;
            document.getElementById('irony').textContent = data.irony;
            console.log("-------------------------------------------------")
        })
        .catch(error => {
            console.error(error)
        })
}
export { handleSubmit };
