const edge = require('edge-js');

const  hello  = edge.func(`
  #r "System.Console.dll"

  using System;
  using System.Threading.Tasks;

  public class Startup {
    public async Task<object> Invoke(dynamic input) {
      Console.WriteLine("Hello world!");
      return "done";
    }
  }
`);

hello('Javascript', (err, res) => {
  if (err) {
    throw err;
  }
  console.log(res);
});
