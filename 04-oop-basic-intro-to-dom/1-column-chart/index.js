export default class ColumnChart{
    _chartHeight = 50;
    _element;
    

    constructor({data=[], label='',link='', value=0, formatHeading = (value) => value}= {}){
        this.data = data
        this.label = label
        this.link = link
        this.value = formatHeading(value);
        this.render(this.createTemplate());
    }
    
    render(template){
        const element = document.createElement('div');
        element.innerHTML = template;

        if (!this.data.length)
        {
            element.firstElementChild.classList.add('column-chart_loading');
        }
        
        this._element = element.firstElementChild
    }

    get chartHeight(){
        return this._chartHeight;
    }

    get element(){
        return this._element;
    }

    remove(){
        this._element.remove();
    }

    destroy(){
        this.remove()
    }

    createTemplate()
    {   
        return `
        <div class="dashboard__chart_orders">
            <div class="column-chart" style="--chart-height: ${this._chartHeight}">
                <div class="column-chart__title">
                    ${this.label}
                    <a href=" ${this.link}" class="column-chart__link">View all</a>
                </div>
                <div class="column-chart__container">
                    <div data-element="header" class="column-chart__header">${this.value}</div>
                    <div data-element="body" class="column-chart__chart">${this.createBodyTemplate()}</div>
                </div>
            </div>
        </div>`
    }

    update(data){
        this.data = data;
        this.render(this.createTemplate())
    }

    createBodyTemplate(){
        const maxValue = Math.max(...this.data);
        let str = ''
        for (const i of this.data){
            const value = Math.floor(i * (this._chartHeight / maxValue)).toFixed();
            const percent = ((i / maxValue) * 100).toFixed() + "%";
            str += `<div style="--value: ${value}" data-tooltip="${percent}"></div>`;
        }
        return str;
    }
}