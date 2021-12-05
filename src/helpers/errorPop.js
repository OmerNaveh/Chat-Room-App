import Swal from 'sweetalert2'

export const errorMessage = (error)=>{
    Swal.fire({
        title: 'error!',
        text: error,
        icon: 'error',
        position: 'center',
        timerProgressBar: 'true',
        timer:1500,
    })
}
export const succesMessage =(msg)=>{
    Swal.fire({
        title: 'Success!',
        text: msg,
        icon: 'success',
        position: 'center',
        timerProgressBar: 'true',
        timer:500,
    })
}