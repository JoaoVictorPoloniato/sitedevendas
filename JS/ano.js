document.addEventListener('DOMContentLoaded', function() {
    const anoAtual = new Date().getFullYear();
    this.documentElementById('ano-atual').textContent = anoAtual;
});