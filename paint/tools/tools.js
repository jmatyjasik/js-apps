
export class Tools{
    constructor(container, toolsFactory){
        this.subscribers = [];

        const root = document.createElement('div');
        root.classList.add('flex', 'flex-column');

        toolsFactory.getAllTools().forEach(tool => {
            const button = document.createElement('button')
            button.setAttribute('data-tool', tool.key);
            button.textContent = tool.key;
            button.addEventListener('click', () => {this.subscribers.forEach(sub => sub(tool.key))});

            root.appendChild(button);
        });

        document.querySelector(container).appendChild(root);
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }
}
