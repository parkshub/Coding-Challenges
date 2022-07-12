class PaginationHelper {
  
    constructor(collection, itemsPerPage) {
      this.collection = collection
      this.itemsPerPage = itemsPerPage
    }
    
    itemCount() {
      return this.collection.length
    }
    
    pageCount() {
      return Math.ceil(this.collection.length/this.itemsPerPage)
    }
    
    pageItemCount(page) {
      if (page > this.pageCount()-1 || page < 0) {
        return -1
      }
      if (page == this.pageCount()-1){
        return this.itemCount()%this.itemsPerPage
      }
      return this.itemsPerPage
    }
    
    pageIndex(item) {
      if (!this.collection[item]){
        return -1
      }
      return Math.ceil((item+1)/this.itemsPerPage)-1
    }
  }