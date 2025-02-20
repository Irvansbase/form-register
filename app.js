document.getElementById('survey-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('number').value,
        role: document.getElementById('dropdown').value,
        citizenship: document.querySelector('input[name="citizenship"]:checked')?.value,
        participation: document.querySelector('input[name="participation"]:checked')?.value,
        programs: Array.from(document.querySelectorAll('input[name="program"]:checked')).map(i => i.value),
        bio: document.getElementById('bio').value
    };
    
    console.log('Form Data:', formData);
    alert('Formulir berhasil dikirim!');
    this.reset();
});