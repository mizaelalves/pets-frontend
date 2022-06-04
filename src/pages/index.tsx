import type { NextPage } from "next";
import Title from "../components/Header/title";
import Lista from "../components/Lista/lista";

const Home: NextPage = () => {
  return (
    <div>
      <Title
        title="opa"
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />
      <Lista
        pets={[
          {
            id: 1,
            nome: "bidu",
            historia:
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate recusandae optio quidem et exercitationem nam alias, pariatur dolore! Doloremque ad accusamus tempora dolorum sunt. Animi dolores ipsa aut officiis impedit.",

            imagem:
              "https://static1.patasdacasa.com.br/articles/8/10/38/@/4864-o-cachorro-inteligente-mostra-essa-carac-articles_media_mobile-1.jpg",
          },
          {
            id: 2,
            nome: "bidu",
            historia:
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate recusandae optio quidem et exercitationem nam alias, pariatur dolore! Doloremque ad accusamus tempora dolorum sunt. Animi dolores ipsa aut officiis impedit.",

            imagem:
              "https://static1.patasdacasa.com.br/articles/8/10/38/@/4864-o-cachorro-inteligente-mostra-essa-carac-articles_media_mobile-1.jpg",
          }
          
        ]}
      />
    </div>
  );
};

export default Home;
