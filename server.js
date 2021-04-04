const http = require("http");
const fs = require("fs");
const path = require("path");

// Web
// Host the html file
const htmlFileHost = (req,res)=>{
  fs.readFile(path.join(__dirname,"webpage","index.html"),(err,data)=>{
    if (!err) {
      res.writeHead(200, {
        "Content-Type": "text/html",
      });
      res.end(data);
    } else {
      res.end("OPPS!!, look like an error occur!!!", err);
      console.log(err);
    }
  });
}
// Host the css file
const cssFileHost = (req,res)=>{
fs.createReadStream(path.join(__dirname, "webpage", req.url)).pipe(res);
  res.writeHead(200, {
    "Content-Type": "text/css",
  });
}
// host the images
const imageFileHost = (req,res)=>{
  fs.createReadStream(path.join(__dirname, "webpage", req.url)).pipe(res);
  res.writeHead(200);
}

// host the js
const jsFileHost = (req,res)=>{
  fs.createReadStream(path.join(__dirname, "webpage", req.url)).pipe(res);
  res.writeHead(200, {
    "Content-Type": "application/js",
  });
}

const webRequestListener = (req, res) => {
  try {
    if (req.url === "/") {
     htmlFileHost(req,res) 
    }
    else if (req.url.match(".css$")) {
      cssFileHost(req,res)
    }
    else if (req.url.match(".jpg$")) {
      imageFileHost(req,res)
    }
    else if (req.url.match(".js$")) {
     jsFileHost(req,res) 
    } else {
      console.log("File not found");
      res.writeHead(404);
      res.end("No Page Found!");
    }
  } catch (error) {
    res.end("OPPS!!, look like an error occur!!!");
  }
};

const PORT = 4000;
const server = http.createServer(webRequestListener);

server.listen(PORT, () => {
  console.log(`server is currently running on PORT ${PORT}`);
});



// Json 
// const jsonRequestListener =  (req, res)=>{
//  fs.readFile(path.join(__dirname, "data.json"), (err, data) => {
//   try {
//     if (!err) {
//       // convert the json string into object
//       const destinyInfo = JSON.parse(data);
//       res.end(JSON.stringify(destinyInfo))
//       console.log(destinyInfo);
//     } else {
//       res.end(`some error occur!!!`);
//     }
//   } catch (error) {
//     res.end(`some error occur!!!`);
//     console.log(error);
//   }
//   })
// };





// Plain text
// const plainTextRequestListener = async (req, res) => {
//   try {
//     res.writeHead(200, {
//       "Content-Type": "text/plain",
//     });
//     await res.end("Hello world!!!\n, This zuri nodejs task 1");
//   } catch (error) {
//     res.end("An Error occur ERROR!!!");
//     console.log(`An error occur ${error}`);
//   }
// };

