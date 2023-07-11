import H4 from './H4'
import Link from 'next/link'

export default function ({ name, large_thumb_url, id }) {
  return (
    <Link href={`/product/${id}`} className="flex flex-col space-y-4">
      <img className="w-full rounded border" src={large_thumb_url} />
      <H4 text={name} />
    </Link>
  )
}
