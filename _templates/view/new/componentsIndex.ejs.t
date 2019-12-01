---
inject: <%= h.doesFileExist('src/views/index.ts') %>
to: src/views/index.ts
after: ;
---
export { default as <%= name %> } from './<%= name %>';
