const colors = {
    p: '#388e3c',
    ul: '#5e35b1',
    ol: '#fbc02d',
    nav: '#g4dd17',
    div: '#1565c0',
    main: '#00acc1',
    form: '#8f6581',
    span: '#e53935',
    body: '#25b6da',
    header: 'd81b60',
    footer: '#304ffe',
    padrao: '#616161',
    section: '#f67809',

    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)
    
    if (!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})