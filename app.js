const app = require("express")();
const bodyParser = require("body-parser");
const database = require("./app/module/databaseConnect");

const db = new database("mongo url")

db.connect()

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false, }));
app.set("views", "./app/views");
app.set("public", "./app/module");

app.get("/", async (req, res) => {
  const addProduct = require("./app/module/addProduct");

  const products = new addProduct().getAllProducts()
 
  res.render("index", {
    products
  })
});

app.post("/api/v1/product", async (req, res) => {
    const apikey = require('./app/module/addApiKey');
    
    const apiKey = new apikey();
    if (apiKey.getApiKey(req.headers.key)) {
        const name = req.body.name;
        const price = req.body.price;
        
        const addProduct = require("./app/module/addProduct");
    
        const a = new addProduct();
    
        a.addProduct(name, price);
    
        res.send("Product added");
    } else {
        res.send("Invalid API key");
    }
});

app.post("/api/v1/generate", async (req, res) => {
    const apikeya = require('./app/module/addApiKey');

    if (req.headers.owner == "anenaa") {
        const ab = new apikeya();
    
        ab.generateApiKey().then(x => {
            res.send("API key generated");
        });
    } else {
        res.send("Invalid API key");
    }
})

app.listen(3000, async () => {
  console.log("Server is running on port 3000");
});
