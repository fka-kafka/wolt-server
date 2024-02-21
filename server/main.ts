const form = document.getElementById('form') as HTMLFormElement

form.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();
    const data: FormData = new FormData(form)
    console.log(data)
    console.log(data)
    console.log(data)
    console.log(data)
})