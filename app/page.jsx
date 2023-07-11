import H1 from '@/components/ui/H1'
import Product from '@/components/ui/Product'
import { Separator } from '@/components/ui/separator'

async function getProducts() {
  var myHeaders = new Headers()
  myHeaders.append('Accept', 'application/vnd.api+json')
  myHeaders.append('Content-Type', 'application/vnd.api+json')
  myHeaders.append('Authorization', process.env.AUTH_HEADER)
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    cache: 'no-store',
  }
  const call = await fetch('https://api.lemonsqueezy.com/v1/products', requestOptions)
  const resp = await call.json()
  return resp
}

export default async function () {
  const products = await getProducts()
  return (
    <div className="mt-8 flex flex-col w-full max-w-2xl space-y-8">
      <H1 text="Products" />
      <Separator />
      {products?.data.map((i) => (
        <Product key={i.id} id={i.id} {...i.attributes} />
      ))}
    </div>
  )
}
