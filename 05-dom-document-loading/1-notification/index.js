export default class NotificationMessage {
    constructor(message='', {duration=0,type=""}={}) {
        this.duration = duration;
        this.type = type;
        this.message = message;
        this.element = this.createElement(this.createTemplate());
        this.timeoutId;  

        
    }

    createElement(template){
        const element = document.createElement('div');
        element.innerHTML = template;
        return element.firstElementChild;
    }

    show(targetTag = document.body){
        targetTag.append(this.element)
        this.timeoutId= setTimeout(this.remove, this.duration);

    }

    createTemplate(){
        return `<div class="notification ${this.type}" style="--value: ${this.duration}ms">
                <div class="timer"></div>
                <div class="inner-wrapper">
                <div class="notification-header">${this.type}</div>
                <div class="notification-body"> ${this.message}</div>
                </div>
                </div>`;
    }

    remove = () => {
        this.element.remove();
      }

      destroy = () => {
        this.remove();
        if (this.timeoutId){
            clearTimeout(this.timeoutId)
        }
      }

}

