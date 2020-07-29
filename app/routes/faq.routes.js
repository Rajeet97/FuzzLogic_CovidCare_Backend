module.exports = app => {
    const faqs = require("../controllers/faq.controller.js");
    const { authJwt} = require("../middlewares");

    var router = require("express").Router();
  
    // Create a new Faq
    router.post("/", [authJwt.verifyToken, authJwt.isAdmin],faqs.create );
    
    // Retrieve all Faqs
    router.get("/", faqs.findAll);
 
  
    // Retrieve a single Faq with id
    router.get("/:id", faqs.findOne);
  
    // Update a Faq with id
    router.put("/:id",[authJwt.verifyToken, authJwt.isAdmin], faqs.update);
  
    // Delete a Faq with id
    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin],faqs.delete);
  
    // Create a new Faq
    router.delete("/", faqs.deleteAll);
  
    app.use('/api/faqs', router);
  };