
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
        if (filter) {
          const allDocuments = await this.model.find(filter);
          return allDocuments;
        }
        const allDocuments = await this.model.find();
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
  
    async update(id, data) {
      try {
        const document = await this.model.findByIdAndUpdate(id, data, opts);
        return document;
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