import { Data } from "../interfaces"

type Props = {
  cls: string
  data: Data
}
export const PubLink = ({cls, data}: Props) => {
  return (
      <a className={cls} href={data.link}>{data.title}</a>
  )
}