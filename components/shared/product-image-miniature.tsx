/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/navigation";

interface ProductImageMiniatureProps {
    slug: string,
    url: string
}

const ProductImageMiniature = (props: ProductImageMiniatureProps) => {
    const router = useRouter()
    const { slug, url } = props

    return (
        <div onClick={() => router.push(`/product/${slug}`)}>
            <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`}
                alt="Imagen de producto"
                className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
            />
        </div>
    );
}
export default ProductImageMiniature;