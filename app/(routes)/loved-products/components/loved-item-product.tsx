/* eslint-disable @next/next/no-img-element */
import ProductImageMiniature from "@/components/shared/product-image-miniature";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";

interface LovedItemProductProps {
    product: ProductType;
}

const LovedItemProduct = (props: LovedItemProductProps) => {
    const { product } = props
    const { removeLovedItem } = useLovedProducts()
    const { addItem } = useCart()

    const addToCheckout = () => {
        addItem(product)
        removeLovedItem(product.id)
    }

    return (
        <li className="flex py-6 boder-b">
            <ProductImageMiniature slug={product.attributes.slug} url={product.attributes.images.data[0].attributes.url} />
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">{product.attributes.productName}</h2>
                    <p>{formatPrice(product.attributes.price)}</p>
                    <ProductTasteOrigin origin={product.attributes.origin} taste={product.attributes.taste} />
                    <Button className="mt-5 rounded-full" onClick={addToCheckout}>Añadir al carrito</Button>
                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition")}>
                        <X size={20} onClick={() => removeLovedItem(product.id)} className="dark:text-black" />
                    </button>
                </div>
            </div>
        </li>
    );
}
export default LovedItemProduct;