/* Это объявление переменной, мы нашли кнопку по тегу */
var button = document.querySelector('button');

/* Тут на кнопку навешиваем обработчик, 
который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Эврика')
})