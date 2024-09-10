import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Title'

import { Descricao, BotaoTema, SidebarConteiner } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarConteiner>
      <Avatar />
      <Titulo fontSize={20}>Gian Souza</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        ogiansouza
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarConteiner>
  </aside>
)

export default Sidebar
