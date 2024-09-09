import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Title'
import { Descricao, BotaoTema, SidebarConteiner } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarConteiner>
      <Avatar />
      <Titulo fontSize={20}>Viviane Silva</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        @vivianezzt
      </Paragrafo>
      <Descricao tipo="principal" fontSize={14}>
        Fullstack Java
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarConteiner>
  </aside>
)

export default Sidebar
