# Mãos que Ajudam

Site institucional para apresentar projetos sociais e cadastrar pessoas interessadas em participar.

## Tecnologias

- HTML5 semântico
- CSS3 responsivo
- JavaScript
- Vite para desenvolvimento e build de produção
- Oxc e Lightning CSS para minificação de JavaScript e CSS
- html-minifier-terser para minificação do HTML

## Imagens responsivas

A imagem principal é disponibilizada em WebP, com JPEG como alternativa para navegadores sem suporte. Foram geradas versões de 360 px e 678 px. Os atributos `srcset` e `sizes` permitem que o navegador descarregue a resolução adequada à largura da viewport. Os atributos `width` e `height` reservam o espaço da imagem e evitam alterações inesperadas no layout.

## Instalação

É necessário ter Node.js e pnpm instalados.

```bash
pnpm install
pnpm run dev
```

## Build de produção

```bash
pnpm run build
pnpm run preview
```

A build otimizada é criada na pasta `dist`.

## Verificação da minificação

O comando abaixo gera a build e compara o tamanho total dos ficheiros-fonte com o resultado de produção:

```bash
pnpm run verify
```

Na versão atual, os ficheiros HTML, CSS e JavaScript passaram de 22.209 bytes para 13.650 bytes, uma redução total aproximada de 38,54%. A otimização das imagens é medida separadamente pelo mesmo comando.

Além da build automática, devem ser verificados manualmente o menu, a navegação, a validação do formulário e o armazenamento local dos cadastros.

## Versionamento

O projeto adota GitFlow, Conventional Commits e versionamento semântico. A branch `main` contém versões estáveis, `develop` integra o desenvolvimento e branches `feature/*` isolam novas funcionalidades. Releases usam tags no formato `vMAJOR.MINOR.PATCH`, como `v1.0.0`.

## Deploy

O ambiente de produção utiliza GitHub Pages e GitHub Actions. Cada `push` para a branch `main` executa a instalação controlada pelo `pnpm-lock.yaml`, valida a build e publica automaticamente o conteúdo da pasta `dist`. As instruções completas estão em `DEPLOY.md`.
