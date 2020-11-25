import React from 'react';

import Coment from './components/Coment';
import './Global.css'

import Header from './images/image-top.png';
import HobbiesBook from './images/hobbies book.png';
import ProfileWink from './images/profile wink.png';
import Image from './images/image.png';
import Image1 from './images/image (1).png';
import Image2 from './images/CF0A4D5C-03C8-49E3-B9B8-F5EAFB931FD1.png';
import Image3 from './images/4F85FA0D-6281-430E-A5AC-7D81476BA8CF.png';
import Image4 from './images/D9892AAE-E4BD-4793-B66A-61F74692449A.png';
import Peek from './images/appstatus peek.png';

function App() {
  return (
    <div class="app">
        <img
            class="img-init-top" 
            src={Header} 
            alt="Autistic World" />

        <article class="infor-proj">
            <h1>O que é o TEA?</h1>
            <section class="image-text">
                <img
                    class="img-section-one"
                    src={HobbiesBook}
                    alt="luiza" />
                    <p>O Transtorno do Espectro Autismo (TEA) é uma condição de saúde caracterizada por um
                        distúrbio neurológico que acarreta déficits na esfera social, quantitativa e qualitativa, e na esfera
                        comportamental, com padrões únicos.</p>
                    <p>Não tem cura e sua origem se dá nos primeiros anos de vida, mas inicialmente não tem uma
                        trajetória uniforme. Para haver um diagnóstico adequado esse transtorno exige uma criteriosa
                        análise individual em cada pessoa. CASSOLA et al. (2018, p.28).</p>
                    <p>O Autismo é definido como um transtorno neuropsiquiátrico que têm como sintomas a
                        dificuldade na interação social em múltiplos contextos, comunicação social e, também,
                        comportamentos repetitivos e isolados.</p>
            </section>
        </article>

        <article class="infor-proj">
            <h1>E o que será desenvolvido?</h1>
            <section class="image-text">
                <img
                class="img-section-two"
                src={ProfileWink}
                alt="Romulo" />
                <p>Analisando os sintomas causados por esse transtorno e as consequências acarretadas por ele,
                    dentre elas, o déficit na comunicação, na interação social e a dificuldade de estabelecer uma
                    conversa, os membros da equipe escolheram contribuir, através de seus conhecimentos
                    tecnológicos, com um game que visa estimular o desenvolvimento social/cognitivo da criança
                    com esse transtorno, e também, fornecer informações para o médico especialista, ou seja, o
                    neuropediatra e/ou o psiquiatra que irá/irão analisar o comportamento dessa criança dentro
                    do jogo, o que o ajudará a entender a sua mente, já que ela não tem facilidade em se
                    expressar.</p>
            </section>
        </article>

        <article class="infor-proj">
            <h1>Quais as tecnologias usadas?</h1>
            <section class="image-text">
                <div>
                    <img
                        class="img-section-tec"
                        src={Image}
                        alt="Unity" />
                    <p>A Unity é um Game Engine, ou motor de jogo, que permite o desenvolvimento de games em
                        3D e 2D para vários tipos de plataformas por meio de uma interface simples e intuitiva, além
                        de trazer muitos recursos pré-prontos, o que ajuda no desenvolvimento de alguns projetos e
                        cria muitas possibilidades para os desenvolvedores. Dados os recursos oferecidos pela Unity e
                        por ser a plataforma mais viável, a equipe do projeto optou por utilizá-la para o
                        desenvolvimento do game.</p>
                </div>

                <div class="div-tec-two">
                    <img
                        class="img-section-tec"
                        src={Image1} 
                        alt="C sharp" />
                    <p>O C# é uma linguagem de programação da Microsoft projetada para criar aplicações diversas,
                        tanto para Windows, como para Web, que são executadas no .NET Framework. É uma
                        linguagem simples, moderna, segura em suas tipagens, orientada a objetos e herda
                        características tanto do próprio C, quanto do C++ e do Java. Embora herde características
                        dessas linguagens, o C# traz novos conceitos e recursos de programação. O código C# é
                        compilado como um código gerenciado, isso quer dizer que ele se beneficia dos serviços do
                        Common Language Runtime (CLR), que incluem interoperabilidade de linguagens, garbage
                        collection, segurança e melhor suporte ao controle de versões. O uso da linguagem C# no
                        desenvolvimento do projeto, se deu pelo fato de que a linguagem tem integração total com o
                        Game Engine Unity, que foi explicado anteriormente.</p>
                </div>
            </section>
        </article>

        <center>Conheça a equipe</center>
        
        <div class="container">
            <div class="row">
              <div class="col-sm aling">
                <img
                    class="img-equip" 
                    src={Image2}
                    alt="Santos" />
                <p>
                    Gabriel é programador da equipe e responsável por implementar todo o código da parte 2D do
                    game. 
                </p>
              </div>
              <div class="col-sm aling" >
                <img
                    class="img-equip" 
                    src={Image3}
                    alt="Luiza" />
                <p>
                    Luiza é a analista/designer UX, responsável por toda a estética do jogo.
                </p>
              </div>
              <div class="col-sm aling">
                <img
                    class="img-equip" 
                    src={Image4} 
                    alt="Romulo" />
                <p>
                    Rômulo é programador da equipe e responsável por implementar todo o código da parte 3D
                    do game. 
                </p>
              </div>
            </div>
        </div>
        <Coment />
        <footer>
            <img 
                src={Peek} 
                alt="santor" />
        </footer>
    </div>
  );
}

export default App;
