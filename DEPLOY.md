# Publicação no GitHub Pages

## Plataforma escolhida

O projeto utiliza GitHub Pages por ser uma aplicação estática, sem servidor ou base de dados. A plataforma integra-se diretamente ao repositório, oferece HTTPS, histórico de execuções e publicação gratuita para repositórios públicos elegíveis. O GitHub Actions permite executar a mesma build Vite validada localmente antes de cada publicação.

## Primeira configuração

1. Criar um repositório no GitHub e enviar todo o código fonte deste projeto.
2. Confirmar que a branch principal se chama `main`.
3. Abrir **Settings → Pages** no repositório.
4. Em **Build and deployment → Source**, selecionar **GitHub Actions**.
5. Efetuar um novo `push` para a branch `main` ou executar manualmente o workflow na aba **Actions**.
6. Aguardar a conclusão do workflow **Publicar no GitHub Pages**.
7. Abrir o endereço apresentado no ambiente `github-pages` ou em **Settings → Pages**.

## Integração e entrega contínua

O ficheiro `.github/workflows/deploy.yml` é executado em cada `push` para `main`. O fluxo obtém o código, instala versões controladas pelo `pnpm-lock.yaml`, executa `pnpm run verify`, gera a pasta `dist`, envia essa pasta como artefacto e publica-a no GitHub Pages.

A publicação só ocorre se a instalação e a build terminarem sem erros. O caminho base é calculado automaticamente a partir de `GITHUB_REPOSITORY`, permitindo publicar tanto num repositório de projeto quanto num repositório `<utilizador>.github.io`.

## URL esperada

- Repositório comum: `https://UTILIZADOR.github.io/NOME-DO-REPOSITORIO/`
- Repositório `UTILIZADOR.github.io`: `https://UTILIZADOR.github.io/`

O URL definitivo deve ser registado neste documento somente após a primeira publicação bem-sucedida.
