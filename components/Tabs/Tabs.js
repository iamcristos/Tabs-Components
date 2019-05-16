class Link {
  constructor(element){
    this.element = element
    console.log(this.element);
    // this.data = this.element.dataset.tab
    this.data;
    this.itemElement;
    
    
    this.element.addEventListener('click', (e) =>this.clickLink(e))
  }

  clickLink (e) {
    this.selectedLink()
    e.target.classList.add('tabs-link-selected');
    this.data= e.target.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    this.itemElement.classList.add('tabs-item-selected')
  }

  selectedLink () {
    const items = document.querySelectorAll('.tabs-link')
    items.forEach(item=>item.classList.remove('tabs-link-selected'));
    const tabLink = document.querySelectorAll('.tabs-item');
    tabLink.forEach(item=> item.classList.remove('tabs-item-selected'))
  }
}

const links = document.querySelectorAll('.tabs-link');
links.forEach(link=> new Link(link));