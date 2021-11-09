const model = require("../models");
const Stock = model.db.stock;



// Retrieve all Stocks from the database.
exports.findOne = (req, res) => {
    const name = req.params.name;
    Stock.findAll({
        
        where: {
          name: name
        }
      }
      
  )
     .then(data => {
                res.send(data);
            })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving stocks."
        });
    });
 };

// Find a stock with an id search
// exports.findOne = (req, res) => {
//     const id = req.params.id;

//     Stock.findByPk(id)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error retrieving stock with id=" + id
//             });
//         });
// };





