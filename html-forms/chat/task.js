const chatWidgetSide = document.querySelector('.chat-widget__side-text');
const chatWidget = document.querySelector('.chat-widget');
const widgetArea = document.querySelector('.chat-widget__messages-container')
const input = document.getElementById('chat-widget__input');
const chatWidgetMessagges = document.getElementById('chat-widget__messages');
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let timerId = null;


chatWidgetSide.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
    if (timerId === null) {
       timerId = setTimeout(() => {
            botMessage()
        }, 30000);
    }
})

widgetArea.addEventListener('scroll', () => {
    console.log(chatWidgetMessagges.lastElementChild.getBoundingClientRect())
})

input.addEventListener('keydown',(event) => {
    if(event.key === 'Enter') {
        if(event.target.value.length) {
            clearTimeout(timerId);
            sendMessage(event);
            event.target.value = '';
            setTimeout(() => {
                botMessage()
            }, 1000); 
        }
    }
})

const sendMessage = (event) => {
    chatWidgetMessagges.insertAdjacentHTML('beforeend',`
    <div class="message message_client">
        <div class="message__time">${hours + ':' + minutes}</div>
        <div class="message__text">${event.target.value}</div>
    </div>`
    );
    scrollToBottom();
}

const botMessage = () => {
    let index = Math.floor(Math.random() * phraseArr.length);
    chatWidgetMessagges.insertAdjacentHTML('beforeend',`
        <div class="message">
            <div class="message__time">22:10</div>
            <div class="message__text">${phraseArr[index]}!</div>
        </div>
    `);
    scrollToBottom();
    
}

const scrollToBottom = () => {
    widgetArea.scrollTo({
        top: 816,
        behavior: "smooth"
    })
}

const phraseArr = ['Добрый день!','Привет!','Пока!','Не пишите больше !','Кто здесь?!','Hello world!!', ]