const { spawn } = require('node:child_process');

const port = 8081;
const url = `http://127.0.0.1:${port}`;

console.log(`Abrindo o projeto em: ${url}`);
console.log('Pressione Ctrl + C para encerrar.');

const child = spawn('npx', ['http-server', '.', '-p', String(port)], {
  stdio: 'inherit',
  shell: true,
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
