function isPangram(string){
  string=string.replaceAll(/[0-9\.\,]/g, '').toLowerCase();
  string=string.replaceAll(" ","");
  console.log(string);
  string=new Set(string);
  console.log(string);
  return  string.size===26;
}
console.log(isPangram("The quick brown fox 8jumps over the lazy dog."));