document.addEventListener('DOMContentLoaded', () => {
    let pricePerKm = 20
    let pricePerKg = 5
    let maxLength = 2000

    let total = document.querySelector('.total');
    let totalCost = document.querySelector('.total span');
    let error = document.querySelector('.error');

    document
        .querySelector('#calculateButton')
        .addEventListener('click', () => {
            let distance = document.querySelector("#distance").value;
            let weight = document.querySelector("#weight").value;
            let length = document.querySelector("#length").value;
            let cost = document.querySelector("#cost").value;

            let errorText = '';
            
            if (length > maxLength) {
                errorText = 'Длина больше допустимой<br>';
            }

            if (distance <= 0) {
                errorText += 'Расстояние не указано<br>';
            }

            if (weight <= 0) {
                errorText += 'Масса не указана<br>';
            }
            if (cost <= 0) {
                errorText += 'Стоимость груза не указана<br>';
            }

            if (errorText) {
                total.style.display = 'none';
                error.style.display = 'block';
                error.innerHTML = errorText;
            } else {
                error.style.display = 'none';
                
                let result = pricePerKm * distance +
                    pricePerKg * weight + cost/1000;
                totalCost.innerHTML = result;

                total.style.display = 'block';
            }
        });
});