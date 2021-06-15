class Category{
    constructor(id,name, image, title, description, subcategories) {
      this.id = id,
      this.name=name,
      this.image=image,
      this.title=title,
      this.description=description,
      this.subcategories=subcategories
  }
}

module.exports=Category;