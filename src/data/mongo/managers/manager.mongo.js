
class mongoManager {
    constructor(model) {
      this.model = model;
    }
  
    async create(data) {
      try {
        const document = await this.model.create(data);
        return document;
      } catch (error) {
        throw error;
      }
    }
  
    async readAll(filter) {
        try {
            let query = {};
    

            if (typeof filter === 'object') {
                query = { ...filter }; 
            } else if (typeof filter === 'string') {
                query = { category: filter }; 
            }
    
            console.log("Query:", query); 
    
            const allDocuments = await this.model.find(query);
    
            if (allDocuments.length === 0) {
                throw new Error("No carts found with the provided filter.");
            }
    
            return allDocuments;
    
        } catch (error) {
            throw error;
        }
    }
    
    
    
      
  
    async read(id) {
      try {
        const document = await this.model.findById(id);
        return document;
      } catch (error) {
        throw error;
      }
    }
  
    async update(id, data,) {
      try {
        const opts = { new: true, runValidators: true };
        const document = await this.model.findByIdAndUpdate(id, data, opts);
        const plainDocument = document.toObject();
        console.log(plainDocument)
        return plainDocument;

      } catch (error) {
        throw error;
      }
    }
  
    async delete(id) {
      try {
        const document = await this.model.findByIdAndDelete(id);
        return document;
      } catch (error) {
        throw error;
      }
    }
  }
  
  export default mongoManager;