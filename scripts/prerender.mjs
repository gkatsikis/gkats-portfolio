// Injects the server-rendered app markup into dist/index.html after `vite build`.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'

const { render } = await import('../dist-ssr/entry-prerender.js')

const file = 'dist/index.html'
const shell = '<div id="root"></div>'
const html = readFileSync(file, 'utf8')
if (!html.includes(shell)) throw new Error(`mount point ${shell} not found in ${file}`)

writeFileSync(file, html.replace(shell, `<div id="root">${render()}</div>`))
rmSync('dist-ssr', { recursive: true })
console.log('prerendered', file)
