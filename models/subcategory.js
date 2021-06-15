class Subcategory{
  constructor(image, id, name, description, title, parent_category, products){
    this.image=image,
    this.id=id,
    this.name=name, 
    this.description=description,
    this.title=title,
    this.parent_category=parent_category,
    this.products=products
  }
}

module.exports=Subcategory;