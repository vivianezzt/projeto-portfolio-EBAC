import Titulo from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Graduada em Análise e desenvolvimento de sitemas pela UNIASSELVI, mora em
      Juiz de fora - MG e tem muita paixão por tecnologias e ama aprender
      fazendo pós em Arquitetura e desenvolvimento de sistemas com ênfase em
      padrões de projetos pelo Gran Pós.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=vivianezzt&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=vivianezzt&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
