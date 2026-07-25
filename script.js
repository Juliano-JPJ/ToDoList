function adicionar() {
    let valorDoInput = document.querySelector('input').value
    let item = document.createElement('li')
    item.innerHTML = valorDoInput + '<span onclick="deletar(this)">&#X274C;</span>'
    document.querySelector('ul').appendChild(item)
    document.querySelector('input').value = ''
}

function deletar(li) {
    li.parentElement.remove()
}