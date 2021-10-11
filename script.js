// Iniciamos com o único, o ícone, P&P.
var nomeLivro = "Orgulho e Preconceito";
var imagemLivro =
  "https://lojasaraiva.vteximg.com.br/arquivos/ids/12112548/1008609654.jpg?v=637142261252330000";
var siteLivro =
  "https://www.amazon.com.br/Orgulho-Preconceito-Jane-Austen/dp/8544001823";

var austen = document.getElementById("ThankyUAusten");

austen.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${siteLivro}" target="_blank"><img src="${imagemLivro}" ></a><label class="text">${nomeLivro}</label></li>`;

// Depois adicionamos algumas da versões dele
var nomes = [];
var imagens = [];
var sites = [];

nomes.push(
  "Orgulho e Preconceito - Minissérie de 1995 - BBC",
  "Orgulho e Preconceito - Filme de 2005 - Direção de Joe Wright",
  "The Lizzie Bennet Diaries - entre 2012 e 2013 - Adaptação de Bernie Su e Hank Green",
  "A morte encontra Pemberley - Livro e Minissérie de 2013 - BBC",
  "As Sombras de Longbourn - Livro de Jo Baker",
  "O Diário de Bridget Jones - Livro de 1996 e Filme de 2001",
  "Austenlândia - Livro de 2007 e Filme de 2013 - Livro de Shannon Hale",
  "Orgulho e Preconceito e Zumbis - Livro de 2009 e Filme de 2016 - Livro de Seth Grahame-Smith"
);

imagens.push(
  "https://http2.mlstatic.com/D_NQ_NP_666551-MLB45743987649_042021-O.jpg", //minissérie 1995
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/84/14/20028635.jpg", //filme 2005
  "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Lizzie_Bennet_Diaries.jpeg/250px-Lizzie_Bennet_Diaries.jpeg", //TLBD <3<3<3
  "https://m.media-amazon.com/images/I/51EcbjAo9xL.jpg", //Minissérie 2013 _ deathly enchanting
  "https://images-na.ssl-images-amazon.com/images/I/91afJGEGAlL.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/1/17/BridgetJonesDiaryMoviePoster.jpg", //Go Bridget!!
  "https://images-na.ssl-images-amazon.com/images/I/417GA3mI1%2BL._SX342_SY445_QL70_ML2_.jpg",
  "https://br.web.img3.acsta.net/pictures/15/12/15/18/30/467996.jpg" //zombies heheh you're a good laught.
);

sites.push(
  "https://pt.wikipedia.org/wiki/Pride_and_Prejudice_(1995)",
  "https://pt.wikipedia.org/wiki/Orgulho_e_Preconceito_(2005)",
  "https://pt.wikipedia.org/wiki/The_Lizzie_Bennet_Diaries",
  "https://en.wikipedia.org/wiki/Death_Comes_to_Pemberley_(TV_series)",
  "https://www.estantevirtual.com.br/livros/jo-baker/as-sombras-de-longbourn/855576422",
  "https://pt.wikipedia.org/wiki/O_Di%C3%A1rio_de_Bridget_Jones",
  "https://pt.wikipedia.org/wiki/Austenland",
  "https://pt.wikipedia.org/wiki/Pride_and_Prejudice_and_Zombies_(filme)"
);

// console.log(nomes.length, imagens.length, sites.length);

var lista = document.getElementById("lista");
for (var i = 0; i < nomes.length; i++) {
  lista.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${sites[i]}" target="_blank"><img src="${imagens[i]}" ></a><label class="text">${nomes[i]}</label></li>`;
}

function analisar() {
  console.log("hey!");
  var novaImagem = document.getElementById("imagem");
  var novoNome = document.getElementById("nome");
  var novoSite = document.getElementById("site");

  if (novoNome.value != "" && novaImagem.value != "" && novoSite.value != "") {
    if (
      novaImagem.value.endsWith(".jpg") ||
      novaImagem.value.endsWith(".png") ||
      novaImagem.value.endsWith(".jpeg")
    ) {
      console.log("oi");

      loop: for (var i = 0; i < nomes.length; i = i + 1) {
        console.log(i);
        if (novoSite.value == sites[i] || novaImagem.value == imagens[i]) {
          alert("Esse filme já pertence a nossa seleção.");
          break loop;
        } else {
          var teste = nomes.length - 1;
          if (i == teste) {
            adicionar(novoNome.value, novaImagem.value, novoSite.value);
          }
        }
      }
    } else {
      alert("Endereço de imagem inválido!");
    }
  } else {
    alert("Preencha todos os campos!");
  }
  novoNome.value = "";
  novoSite.value = "";
  novaImagem.value = "";
}

function adicionar(novoNome, novaImagem, novoSite) {
  nomes.push(novoNome);
  imagens.push(novaImagem);
  sites.push(novoSite);
  lista.innerHTML = "";

  for (var i = 0; i < nomes.length; i++) {
    lista.innerHTML += `<li onmouseenter="mostrarTexto()" onmouseleave="ocultarTexto()"><a href="${sites[i]}" target="_blank"><img src="${imagens[i]}" ></a><label class="text">${nomes[i]}</label></li>`;
  }
}

function mostrarTexto() {
  var target = event.currentTarget;
  target.lastChild.style.opacity = "1";
  if (target.firstChild.id == "btnd") {
    target.firstChild.style.opacity = "1";
  }
}

function ocultarTexto() {
  var target = event.currentTarget;
  target.lastChild.style.opacity = "0";
  if (target.firstChild.id == "btnd") {
    target.firstChild.style.opacity = "0";
  }
}

var love = 0;
var like = 0;
var obsessed = 0;
function atualiza(nameIt) {
  if (nameIt == "love") {
    love += 1;
    document.getElementById(
      nameIt
    ).innerHTML = `<button type="button" onclick="atualiza('love')">💗</button><p class="plus">+${love} love</p>`;
  } else if (nameIt == "like") {
    like += 1;
    document.getElementById(
      nameIt
    ).innerHTML = `<button type="button" onclick="atualiza('like')">😘</button><p class="plus">+${like} like</p>`;
  } else if (nameIt == "obsessed") {
    obsessed += 1;
    document.getElementById(
      nameIt
    ).innerHTML = `<button type="button" onclick="atualiza('obsessed')">😍</button><p class="plus">+${obsessed} obsessed</p>`;
  }
}