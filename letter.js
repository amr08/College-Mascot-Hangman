

//sends over the placeholders"_"
  function Placeholder(holders, nums) {
    this.holders = holders;
    this.nums = nums;
  };
  
  Placeholder.prototype.replace = function (){
    for(var i = 0; i <nums; i++) {
      holders.push("_");
    }
  };

  module.exports = Placeholder;



  




