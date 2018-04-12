/* Changes the text in an object */
const changeText = (obj, str) => {
    return Object.assign({}, obj, {
      text: str
    });
  };
  
  /* Description test changing text in an object */
  const testChangeText = () => {
    
    const textBefore = {
      id: 0,
      text: 'South India',
      visited: false
    };
    
    const textAfter = {
      id: 0,
      text: 'Philippines',
      visited: false
    };
    
    expect(
      changeText(textBefore, 'Philippines')
    ).toEqual(textAfter);
    
  };
  
  testChangeText();
  console.log("Passed change text test");