exports.validation = (required_fields, data) => {
    const error = {};
    console.log("validation");
    
    for (let i of required_fields) {
      if (!data[i]) {
        error[i] = `${i} is required`;
      }
    }
  
    return error;
  }