# Live: Criando Aplicativo Nativo para Windows com HTML, CSS e Javascript

## Exemplo:

[Clique aqui para baixar o instalador](https://github.com/schoolofnetcom/live-criando-aplicativos-nativos-para-windows-com-html-css-e-javascript/releases/tag/v1.0.0-dev)

## O que vamos aprender?

 - Boas práticas com NPM
 - Instalando o Electron
 - Hello world Electron
 - Uma introdução ao SPA
 - Janelas com Electron
 - Gerando o instalador
 - Indo além

## Inscrição

[Use este formulário para pedir seu convite](http://conteudo.schoolofnet.com/lp-aula-ao-vivo-criando-primeiro-aplicativo-nativo-para-windows)

## Material de apoio

### Estilos CSS

```
#header {
    margin-bottom: 10px;
    -webkit-app-region: drag;
}
#header .btn {
    -webkit-app-region: no-drag;
}

body, html {
    height: 100%;
}

body {
    display: flex;
    flex-direction: column;
}

.jumbotron, iframe {
    flex: 1;
}

.jumbotron {
    margin-bottom: 0;
}

iframe {
    width: 100%;
}

```

### Blocos HTML

#### Esqueleto do HTML

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

#### Header do index.html

```
<header id="header">
    <nav class="navbar navbar-light bg-light">
        <h1 class="navbar-brand">APP Electron</h1>
        <div class="btn-group btn-group-sm">
            <button class="btn btn-secondary" id="minimizar">_</button>
            <button class="btn btn-secondary" id="maximizar">[ ]</button>
            <button class="btn btn-danger" id="fechar">x</button>
        </div>
    </nav>
</header>
```
#### Jumbotron do index.html

```
<div class="jumbotron">
        <h1 class="display-4">is the Best!</h1>
        <p class="lead">Esta live mostra porque a School of Net é a melhor escola de desenvolvimento do Brasil.</p>
        <hr class="my-4">
        <p>Que tal aprender um pouco de electron.</p>
        <p class="lead" id="cursos">
            <a class="btn btn-secondary btn-lg" href="https://www.schoolofnet.com/curso-iniciando-com-electron/" target="_blank">Curso iniciante</a>
            <a class="btn btn-success btn-lg" href="https://www.schoolofnet.com/curso-avancando-com-electron/" target="_blank">Curso intermediário</a>
            <a class="btn btn-primary btn-lg" href="https://www.schoolofnet.com/curso-criando-um-cms-com-administracao-no-desktop/" target="_blank">Projeto prático</a>
        </p>
    </div>
```

