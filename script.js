document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('uselessButton');
    const clickCount = document.getElementById('clickCount');
    let count = 0;

    button.addEventListener('click', () => {
        count++;
        clickCount.textContent = `Times clicked: ${count}`;
        
        if (count % 10 === 0) {
            alert("Congratulations! You've wasted more time!");
        }
        
        // Make the button do random useless things
        const randomEffect = Math.floor(Math.random() * 4);
        switch(randomEffect) {
            case 0:
                button.style.transform = `rotate(${Math.random() * 360}deg)`;
                break;
            case 1:
                button.style.fontSize = `${Math.random() * 2 + 0.8}rem`;
                break;
            case 2:
                button.style.margin = `${Math.random() * 20}px`;
                break;
            case 3:
                button.style.letterSpacing = `${Math.random() * 10}px`;
                break;
        }
        
        setTimeout(() => {
            button.style.transform = '';
            button.style.fontSize = '';
            button.style.margin = '';
            button.style.letterSpacing = '';
        }, 1000);
    });
}); 