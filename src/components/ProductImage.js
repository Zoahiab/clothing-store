"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductImage({ product }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-neutral-200">
      {product.image && !failed ? (
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-neutral-500">
          Photo
        </div>
      )}
    </div>
  );
}