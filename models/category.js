class Category{
    constructor(id,name, image, title, description, subcategories, parent_category) {
      this.id = id,
      this.name=name,
      this.image=image,
      this.title=title,
      this.description=description,
      this.subcategories=subcategories
      this.parent_category=parent_category
  }
}

exports.Category=Category;