import Link from 'next/link'
import H1 from '@/components/ui/H1'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

async function getProduct(slug) {
  var myHeaders = new Headers()
  myHeaders.append('Accept', 'application/vnd.api+json')
  myHeaders.append('Content-Type', 'application/vnd.api+json')
  myHeaders.append('Authorization', process.env.AUTH_HEADER)
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    cache: 'no-store',
  }
  const call = await fetch(`https://api.lemonsqueezy.com/v1/products/${slug}`, requestOptions)
  const resp = await call.json()
  return resp
}

export default async function ({ params }) {
  const product = await getProduct(params.slug)
  return (
    <div className="mt-8 flex flex-col w-full max-w-2xl space-y-8">
      <Link className="text-gray-400 font-light text-sm hover:underline" href="/">
        &larr; Back To Products
      </Link>
      <H1 text={product.data.attributes.name} />
      <Separator />
      <Link className="lemonsqueezy-button" href={product.data.attributes.buy_now_url}>
        <Button className="w-full">Buy</Button>
      </Link>
      <img className="w-full rounded border" src={product.data.attributes.large_thumb_url} />
      <div
        dangerouslySetInnerHTML={{
          __html: product.data.attributes.description,
        }}
      />
    </div>
  )
}
