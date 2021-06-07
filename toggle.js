let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('.toggle');


const enableDarkMode = ()=>{
    document.body.classList.add('darkmode')

    localStorage.setItem('darkMode','enabled')
}


const disableDarkMode = ()=>{
    document.body.classList.remove('darkmode')

    localStorage.setItem('darkMode', null)
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', (e)=>{
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
        if (e.target.parentElement.classList.contains('toggle')) {
            e.target.parentElement.classList.toggle('flex')
        }
    }
    else{
        disableDarkMode();
    }
})