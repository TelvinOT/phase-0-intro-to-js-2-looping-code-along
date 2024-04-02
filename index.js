function writeCards(names) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for your kindness!`);
    }
    return thankYouMessages;
  }
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Example usage:
  const names = ["Alice", "Bob", "Charlie"];
  const thankYouMessages = writeCards(names);
  console.log(thankYouMessages);
  
  countDown(5);
  