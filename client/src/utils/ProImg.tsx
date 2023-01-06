type Props = {
  url: string
  cls: string
  alt: string
};

export const ProImg = ({ url, cls, alt }: Props) => {
  return (
    <img className={cls} src={url} alt={alt}></img>
  )
}