function telephoneCheck(str) {

    let result = false;

    (  /^\(\d{3}\)\s\d{3}-\d{4}$|^\d{10}$/.test(str) || /^1\(\d{3}\)\d{3}[\s|-]\d{4}$/.test(str))? result = true

    :( /^\(\d{3}\)\d{3}-\d{4}$/ .test(str) || /^\d{3}[\s|-]\d{3}[\s|-]\d{4}$/.test(str))? result = true

    :(/^1\s\(\d{3}\)\s\d{3}[\s|-]\d{4}$/.test(str) || /^1\s\d{3}[\s|-]\d{3}[\s|-]\d{4}$/.test(str))? result = true 

    : result = false

    console.log(result)

    return result 

}



/* alertas bootstrap */

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type, icono) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${icono} ${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

document.getElementById("check").addEventListener("click", ()=>{

    if (telephoneCheck(document.getElementById("numero").value)){
        alert('El numero de telefono es valido!', 'success', '<i class="fa-solid fa-circle-check"></i>')
    }
    else{
        alert('Lo sentimos, el numero de telefono no es valido vuelve a intentarlo!', 'danger', '<i class="fa-solid fa-triangle-exclamation"></i>')
        
    }

})
