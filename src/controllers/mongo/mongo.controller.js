

class mongoController {
    constructor(manager) {
      this.manager = manager;
    }
  
    async create(req, res, next) {
      try {
        const data = req.body; 
        const document = await this.manager.create(data);
        res.status(201).json(document); 
      } catch (error) {
        next(error)
      }
    }
  
    async readAll(req, res, next) {
      try {
        const filter = req.query; 
        const documents = await this.manager.readAll(filter);
        res.status(200).json(documents); 
      } catch (error) {
        next(error)
      }
    }
  
    async read(req, res, next) {
      try {
        const {id} = req.params;
        const document = await this.manager.read(id);
        if (!document) {
          return res.status(404).json({ error: 'Document not found' });
        }
        res.status(200).json(document); 
      } catch (error) {
        next(error)
      }
    }
  
    async update(req, res, next) {
      try {
        const {id} = req.params;
        const data = req.body; 
        const document = await this.manager.update(id, data);
        if (!document) {
          return res.status(404).json({ error: 'Document not found' });
        }
        res.status(200).json(document);
      } catch (error) {
        next(error)
      }
    }
  
    async delete(req, res, next) {
      try {
        const {id} = req.params;
        const document = await this.manager.delete(id);
        if (!document) {
          return res.status(404).json({ error: 'Document not found' });
        }
        res.status(204).send(); 
      } catch (error) {
        next(error)
      }
    }
  }
  
  export default mongoController;