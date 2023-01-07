type Props = {
  url: string
  cls: string
  alt: string
};

export const ProImg = ({ url, cls, alt }: Props) => {
  return (
    <>
      {!url ? (
        <div>loading</div>
      ):(
        <img className={cls} src={url} alt={alt}></img>
      )}
    </>
  )
}