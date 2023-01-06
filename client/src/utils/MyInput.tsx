type Props = {
  plach: string
  ty: string
  cls: string
  val?: any
  onChange?: (e: any) => void
};

export const MyInput = ({ plach, ty, cls, val, onChange }: Props) => {
  return (
    <input value={val} className={cls} placeholder={plach} type={ty}></input>
  )
}