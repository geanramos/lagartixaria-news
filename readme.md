## Sobre
Tisha é um tema minimalista criado para Jekyll. O principal objetivo de Tisha é fornecer um tema claro para aqueles que querem um blog pronto para usar, focado no conteúdo e no mobile-first.

![Tisha](/img/tisha01.png "Tisha")

## Configuração e uso
Tisha pode ser instalado simplesmente baixando a pasta .zip do [repositório no Github](https://github.com/geanramos/lagartixaria-news/archive/master.zip).

Após extrair o conteúdo da pasta para o diretório selecionado, você pode digitar ``jekyll serve`` no terminal, e então abrir seu navegador em ``0.0.0.0:4000/tisha/`` e você encontrará o site lá.

Além disso, é possível fazer um fork do repositório e usar o Github Pages como hospedagem. Seguindo este caminho, será suficiente alterar o valor de ``baseurl`` no arquivo ``_config.yml``, com o nome do diretório do seu projeto (por exemplo /blog) ou simplesmente com uma "/" (barra) se você quiser instalar o Tisha na raiz.

### Opções
A partir da versão 1.1.0, você pode personalizar Tisha graças a algumas opções. Agora é possível definir uma tag de cabeçalho personalizada definindo a opção relacionada no arquivo ``_config.yml`` como "true". Em seguida, insira seu código personalizado no arquivo ``header-custom.html``.
Da mesma forma, você pode personalizar o rodapé do menu de navegação, definindo a opção relacionada como "true" e inserindo seu código no arquivo ``nav-footer-custom.html``.
Além disso, agora é possível selecionar uma opção reversa que permite mover o menu de navegação para o lado esquerdo, definindo-a como "true".

### Cores
As cores básicas são definidas no arquivo ``base.scss``:
- $main-color: usado para o menu, título, link e rodapé
- $background-color: usado para o fundo e links no menu de navegação
- $text-color: usado para texto e título em postagens e páginas 

Para personalizar as cores, basta definir os valores em HEX, RGB (ou RGBa) ou qualquer outro formato aceito pelo CSS.

### Menu de navegação
A partir da versão 1.1.0, os links dentro do menu de navegação são gerados automaticamente a partir de páginas que têm o layout definido como ``page``.
Você pode definir links personalizados, inserindo a tag ``<a>`` no arquivo ``link.html``.

### Ramificações (Branch)
Tisha tem duas ramificações:
- ``master``: é para fins de desenvolvimento.
- ``gh-pages``: é apenas para o site de demonstração.

### Baseurl
Tisha foi pensado para ser usado principalmente com Github, em particular em [project site](https://pages.github.com/). Por isso, várias tags foram incluídas ``{{ site.baseurl }}`` para se referir ao diretório "/Tisha/".
Você pode alterar o valor de "baseurl" no arquivo ``config.yml``, para corresponder ao seu diretório (por exemplo "/blog/") ou à raiz do seu projeto. Nesse caso, você deve definir o valor de "baseurl" como "/".

### Tipografia
Para manter o ritmo vertical, foi aplicada uma **Escala Tipográfica** como uma escala modular, com uma linha de base definida para 24px. Para manter esse ritmo, você precisa inserir elementos como imagem, vídeo ou outros conteúdos com uma altura de 24px (ou múltipla) como referência.

Por último, mas não menos importante: a [documentação do Jekyll](http://jekyllrb.com) é o melhor ponto de partida!

## Autor

### Gean Ramos

- Site: [www.geanramos.com.br](https://geanramos.com.br)
- Twitter: [Twitter.com/geanramus/](https://x.com/geanramus)

## Licença
Tisha é lançado sob a [Licença MIT](license.md).
