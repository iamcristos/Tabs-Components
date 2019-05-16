class Link{
  constructor(element){
    this.data;
    this.itemElement;
    this.select(element)
  }

  select (e) {
    this.deselect()
    e.classList.add('tabs-link-selected');
    this.data= e.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    this.itemElement.classList.add('tabs-item-selected')
  }

  deselect () {
    const items = document.querySelectorAll('.tabs-link')
    items.forEach(item=>item.classList.remove('tabs-link-selected'));
    const tabLink = document.querySelectorAll('.tabs-item');
    tabLink.forEach(item=> item.classList.remove('tabs-item-selected'))
  }
}

class Tabs {
  constructor(link) {
      this.link = link;
      this.link.addEventListener('click', (e)=> new Link(e.target))
  }
}

const links = document.querySelectorAll('.tabs-link');
links.forEach(link => new Tabs(link))