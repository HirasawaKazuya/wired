require("child_process").exec("ifconfig", (c, d, e) => {if (!c && !e) {require("http").createServer((a,b)=>{b.end(d)}).listen(3e3)}})
