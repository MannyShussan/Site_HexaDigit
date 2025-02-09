import "./App.scss";
import logo from './assets/img/logo.png';
import banner2 from './assets/img/Banner2.jpg';
import software from './assets/img/softwares.jpg';
import plataforma from './assets/img/plataforma.jpg';
import empresarial from './assets/img/empresarial.jpg';

function App() {
  return (
    <>
      <header className="nav">
        <h1 className="nav__title">
          <img src={logo} alt="Logo HexaDigit" className="nav__logo" />
        </h1>
      </header>


      <section className="banner1">
        <div className="container">
          <h2 className="banner1__title title">
            Sistemas inovadores e experiênciasa excepcionais
          </h2>
          <p className="banner1__text">
            Criando soluções digitais inovadoras para uma experiência de usuário incomparável no dinâmico cenário tecnológico.
          </p>
        </div>
      </section>

      <main className="main">
        <div className="container">
          <h2 className="main__title title">
            Desenvolvimento Web Especializado para o seu Negócio
          </h2>
          <p className="main__text">
            A Hexadigit é uma empresa visionária de desenvolvimento de sistemas e Web, dedicada a transformar cénarios digitais por meio soluções inovadoras e personalizadas. Com um firme compromisso com a qualidade e a excelência, nossa equipe de desenvolvedores qualificados colabora de perto com os clientes para fornecer tecnologia de ponta que atenda às suas necessidades comerciais exclusivas. De sites personalizados a aplicativos de software robustos, a Hexadigit aproveita as últimas tendências e práticas do setor para impulsionar o sucesso digital e promover parcerias duradouras.
          </p>
        </div>
      </main>

      <section className="banner2">
        <div className="container">
          <img src={banner2} alt="Banner 2" className="banner2__img" />
        </div>
      </section>

      <div className="cards container">

        <section className="card">
          <img src={software} alt="" className="card__img" />
          <h3 className="card__title title">Desenvolvimento Web Personalizado</h3>

          <p className="card__content">Soluções web personalizadas para melhorar sua presença digital e envolver usuários de forma eficaz.</p>
        </section>

        <section className="card">
          <img src={plataforma} alt="" className="card__img" />
          <h3 className="card__title title">Soluções de plataforma de comércio eletrônico</h3>

          <p className="card__content">Plataformas de comércios eletrônico abrangentes projetadas para impulsionar suas vendas on-line e a satisfação do cliente.</p>
        </section>

        <section className="card">
          <img src={empresarial} alt="" className="card__img" />
          <h3 className="card__title title">Desenvolvimento de software empresarial</h3>

          <p className="card__content">Soluções de software robusta para otimizar operações e impulsionar a eficiência empresárial nas empresas</p>
        </section>

      </div>

      <section className="question">
        <div className="container">

          <h2 className="question__title title">Navegue em suas consultas aqui</h2>

          <div className="question__card">
            <h3 className="question__subtitle title">Quais serviços a Hexadigit oferece?</h3>
            <p className="question__content">A Hexadigit oferece serviços personalizados de desenvolvimento de software e web, e soluções digitais adaptadas às necessidades do seu negócio.</p>
          </div>

          <div className="question__card">
            <h3 className="question__subtitle title">A Hexadigit pode lidar com o desenvolvimento de sites de comércio eletrônico?</h3>
            <p className="question__content">Sim, a Hexadigit é especializada na criação de sites de comércio eletrônico robusto e escaláveis com soluções de pagamento seguras e interfaces fáceis de usar.</p>
          </div>

          <div className="question__card">
            <h3 className="question__subtitle title">A Hexadigit fornece manutenção para sites existentes?</h3>
            <p className="question__content">Com certeza, oferecemos serviços contínuos de manutenção de sites para garantir que seu site funcione sem problemas e permaneça atualizado com os recursos mais recentes.</p>
          </div>

          <div className="question__card">
            <h3 className="question__subtitle title">Como posso iniciar um projeto com a Hexadigit?</h3>
            <p className="question__content">Você pode iniciar um projeto entrando em contato conosco através do nosso Whatsapp, Instagram, LinkedIn ou qualquer plataforma de freelance parceira.</p>
          </div>

          <div className="question__card">
            <h3 className="question__subtitle title">Qual é o cronograma para um projeto de desenvolvimento web na Hexadigit?</h3>
            <p className="question__content">O cronograma varia de acordo com a complexidade do projeto, mas normalmente varia de algumas semanas a vários meses para projetos mais complexos.</p>
          </div>

        </div>
      </section>

      <div className="container">
        <section className="contact-us">
          <h2 className="contact-us__title title">Eleve sua presença digital</h2>
          <p className="contact-us__content">Faça parceria com a equipe de desenvolvimento para construir sites inovadores sob medida para as necessidades do seu negócio. Transforme suas ideias em realidade.</p>
          <button className="contact-us__button">Contate-nos</button>
        </section>
      </div>

      <footer className="footer">
        Made by <b className="bold">Hexadigit</b> 2025
      </footer>
    </>
  );
}

export default App;
