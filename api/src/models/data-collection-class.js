'use strict';


// It takes in a schema in the constructor and uses that instead of every collection
// being the same and requiring their own schema.

class Interface {


  constructor(model) {
    this.model = model;
  }


  create(obj) {
    const doc = new this.model(obj);
    return doc.save();
  }
  

  read(id) {
    if (id) {
      return this.model.find({ _id: id });
    } else {
      return this.model.find({});
    }
  }


  update(id, obj) {
    return this.model.findByIdAndUpdate(id, obj, { new: true });
  }

  
  delete(id) {
    return this.model.findByIdAndDelete(id);
  }
}

module.exports = Interface;