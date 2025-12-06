require("http").createServer((e,t)=>{
  console.log(e.query);
  t.end();
}).listen(3e3)

/* require("child_process").exec("", (error, stdout, stderr) => {
  if (error) {
    console.error(`Hata: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Sonuç:\n${stdout}`);
}); */
