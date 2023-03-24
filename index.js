const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Calculator Microservice");
});

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

app.get("/add/:num1/:num2", (req, res) => {
  try {
    let { num1, num2 } = req.params;
    if (!isNaN(num1)) {
      num1 = parseInt(num1);
    } else {
      throw new Error(`${num1} is not a number.`);
    }
    if (!isNaN(num2)) {
      num2 = parseInt(num2);
    } else {
      throw new Error(`${num2} is not a number.`);
    }
    add(num1, num2);
    res.send(num1 + num2);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

app.get("/subtract", (req,res)=>{
  try{
  const n1= parseFloat(req.query.n1);
  const n2=parseFloat(req.query.n2);
  if(isNaN(n1)) {
      logger.error("n1 is incorrectly defined");
      throw new Error("n1 incorrectly defined");
  }
  if(isNaN(n2)) {
      logger.error("n2 is incorrectly defined");
      throw new Error("n2 incorrectly defined");
  }
  
  if (n1 === NaN || n2 === NaN) {
      console.log()
      throw new Error("Parsing Error");
  }
  logger.info('Parameters '+n1+' and '+n2+' received for addition');
  const result = subtract(n1,n2);
  res.status(200).json({statuscocde:200, data: result }); 
  } catch(error) { 
      console.error(error)
      res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});




app.listen(PORT, () => {
  console.log(`Microservice listening at http://localhost:${PORT}`);
});
