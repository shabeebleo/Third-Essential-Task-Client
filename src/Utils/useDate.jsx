export const  parseDateTime=(dateTimeString) =>{
    // Create a Date object from the UTC string
    const dateObject = new Date(dateTimeString);
  
    // Extract hour and minute
    const hour = dateObject.getHours();
    const minute = dateObject.getMinutes();
  
    // Format the date (optional)
    const formattedDate = dateObject.toLocaleDateString();
  
    // Return the desired output
    return {
      formattedDate,
      hour,
      minute,
    };
  }
  
  // Example usage
  const dateTimeString = "2024-04-30T09:31:56.182Z";
  const { formattedDate, hour, minute } = parseDateTime(dateTimeString);
  
  console.log("Formatted Date:", formattedDate); // Output: 4/30/2024 (assuming US formatting)
  console.log("Hour:", hour); // Output: 9
  console.log("Minute:", minute); // Output: 31
  