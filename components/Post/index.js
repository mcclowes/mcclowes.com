const Post = (props) => {
  const { publishingDate, image, title, description } = props

  if(!publishingDate) return null

  return (
    <div className="post">
      {
        image && image.fields
        ? <img alt={image.fields.description} src={`https:${image.fields.file.url}`} />
        : null
      }

      <div className="description">{description}</div>

      <div className="text">
        <h2>{title}</h2>

        <h3>{publishingDate.substring(0, 10)}</h3>
      </div>

      <style jsx>{`
        img {
          max-width: 300px;
        }
      `}</style>
    </div>
  )
}

export default Post
