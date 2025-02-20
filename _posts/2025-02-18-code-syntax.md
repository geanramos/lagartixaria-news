---
title: Sintaxe de Código
---
Para inserir código destacado dentro de uma postagem, basta usar algumas tags específicas, conforme descrito diretamente na [documentação do Jekyll](http://jekyllrb.com/docs/templates/#code-snippet-highlighting). Dessa forma, o código será incluído em uma classe CSS ``.highlight`` e será destacado de acordo com o arquivo [syntax.scss](https://github.com/mojombo/tpw/blob/master/css/syntax.css). Este é o estilo padrão adotado pelo **Tishahub** para destacar o código.

Se precisar de mais alguma coisa, estou à disposição! 😊

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
  <a href="#examplo.com">Examplo</a>
</html>

{% endhighlight %}

Last, a Ruby example:
{% highlight ruby linenos %}

def hello
  puts "Ola Mundo!"
end

{% endhighlight %}
