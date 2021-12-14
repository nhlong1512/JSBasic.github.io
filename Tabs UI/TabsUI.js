const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item');
const panes = $$('.tab-pane')

// console.log(tabs, panes);
const tabLine = $('.tab-item.active')
console.log([tabLine]);
const line = $('.tabs .line');
console.log([line]);

line.style.width = tabLine.offsetWidth +'px';
line.style.left = tabLine.offsetLeft +'px';

tabs.forEach((tab, index)=>{
    const pane = panes[index];
    tab.onclick = function(){
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')

        line.style.width = this.offsetWidth +'px';
        line.style.left = this.offsetLeft +'px';

        this.classList.add('active');
        pane.classList.add('active');
    }
})

