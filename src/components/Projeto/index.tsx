import Paragrafo from '../Paragrafo'
import Titulo from '../Title'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de Tarefas feita com Vue.js</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)
export default Projeto
