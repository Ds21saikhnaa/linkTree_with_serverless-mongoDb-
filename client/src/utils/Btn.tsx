type Props = {
  txt: string
  flag: boolean
  cls: string
  func?: () => any
};

export const Btn = ({ txt, cls, flag, func }: Props) => {
  return (
    <button onClick={func} disabled={flag} className={cls}>{txt}</button>
  )
}