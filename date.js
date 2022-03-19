

exports.getDate = function getDate() {
  
   const today = new Date();

   const options = {
     weekday: "long",
     day: "numeric",
     month: "long",
     year: "numeric",
   };

   return today.toLocaleDateString("en-US", options); 
};

exports.getDay = function () {
  const today = new Date();

  const options = {
    weekday: "long",
  };
  return today.toDateString("en-US", options);
}
//console.log(module.exports);