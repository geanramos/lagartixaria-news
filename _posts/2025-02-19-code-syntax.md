---
title: "Sintaxe de Código"
date: 2025-02-19 20:00:00 -03:00
description: "Conjunto de regras que define como escrever código em uma linguagem de programação"
tags: [code]
image: "https://i.imgur.com/2p9rdql.jpeg"
---
Para inserir código destacado dentro de uma postagem, basta usar algumas tags específicas, conforme descrito diretamente na [documentação do Jekyll](http://jekyllrb.com/docs/templates/#code-snippet-highlighting). Dessa forma, o código será incluído em uma classe CSS ``.highlight`` e será destacado de acordo com o arquivo [syntax.scss](https://github.com/mojombo/tpw/blob/master/css/syntax.css). Este é o estilo padrão adotado pelo **tishahub** para destacar o código.


Este é um exemplo de CSS:
{% highlight css linenos %}

body {
  background-color: #fff;
  }

h1 {
  color: #ffaa33;
  font-size: 1.5em;
  }

{% endhighlight %}

E este é um exemplo de HTML, com um número de linha:
{% highlight html linenos %}

<html>
  <a href="examplo.com">Examplo</a>
</html>

{% endhighlight %}

Por último, um exemplo em Ruby:
{% highlight ruby linenos %}

def hello
  puts "Ola Mundo!"
end

{% endhighlight %}
