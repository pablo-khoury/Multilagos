# Site Multilagos

Site estático de implantação Asaas e Multicobrança.

## Arquivos
- `dist/index.html`: página principal.
- `dist/parceiros.html`: Programa de Parceiros.
- `dist/assets/`: logos e imagens dos cases.

## Visualizar localmente
Na pasta do projeto, execute `python -m http.server 8000 --directory dist` e abra http://localhost:8000.

## Publicação
Não há etapa de instalação ou compilação. Configure a hospedagem para servir a pasta `dist`. No GitHub Pages via branch, publique o conteúdo de `dist` na raiz da branch de publicação, com o site configurado em domínio próprio ou na raiz de um domínio. Os links internos usam caminhos absolutos como `/parceiros.html`; para hospedar em um subdiretório do tipo usuario.github.io/repositorio/, ajuste esses caminhos para o prefixo do repositório ou utilize domínio próprio.

## Contatos e configurações
- WhatsApp: 5522999020466
- Indicação Asaas: https://www.asaas.com/parceiros/multilagos
- Instagram: @pablokhoury.oficial e @multilagos

O formulário abre uma mensagem no WhatsApp; não há banco de dados ou envio automático pelo site. Fontes são carregadas pelo Google Fonts, com alternativas locais de sistema.

Este pacote contém os arquivos do site e não inclui credenciais, histórico Git ou configurações privadas da hospedagem anterior.
