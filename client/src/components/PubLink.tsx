type Data = {
  link: string
  name: string
}
type Props = {
  cls: string
  data: Data
}
export const PubLink = ({cls, data}: Props) => {
  return (
      <a className={cls} href={data.link}>{data.name}</a>
  )
}