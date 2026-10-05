import React from "react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import FloatingContactBar from "@/components/FloatingContactBar";
import ProductDetailClient from "./ProductDetailClient";
import { getProductBySlug, getRelatedProducts, PRODUCTS_DATA } from "@/data/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "ไม่พบสินค้า | Happiness Bedding",
    };
  }

  return {
    title: `${product.name} | Happiness Bedding`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Happiness Bedding`,
      description: product.shortDescription,
      images: [product.images[0]],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.category, product.slug, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-28">
        <ProductDetailClient product={product} relatedProducts={relatedProducts} />
        <CTASection />
      </main>

      <Footer />
      <FloatingContactBar />
    </div>
  );
}
