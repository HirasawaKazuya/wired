require("http").createServer((e,c)=>{require("child_process").exec("ifconfig",(e,i,r)=>{e||r||c.send(i)})}).listen(3e3)
