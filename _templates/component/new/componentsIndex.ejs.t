---
inject: <%= h.doesFileExist('src/components/index.ts') %>
to: src/components/index.ts
after: ;
---
export { default as <%= name %> } from './<%= name %>';
