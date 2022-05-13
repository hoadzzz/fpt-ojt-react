import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import accessoriesData from '../../assets/fake-data/accessories';
import productData from "../../assets/fake-data/products";
import Grid from "../../components/molecules/Grid/Grid";
import ProductCard from "../../components/organisms/ProductCard/ProductCard";
import Section, {
  SectionBody,
  SectionTitle
} from "../../components/organisms/Section/Section";
import Helmet from "../../components/templates/Helmet/Helmet";
import ProductView from "../../components/templates/ProductView/ProductView";
import { theme } from "../../utils/theme";

const Product = (props) => {
  let product, relatedProducts;
  if (props.match.params.type === 'product') {
    product = productData.getProductBySlug(props.match.params.slug);
    relatedProducts = productData.getProducts(8);
  }
  else {
    product = accessoriesData.getAccessoryBySlug(props.match.params.slug);
    relatedProducts = accessoriesData.getAccessories(8);
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <ChakraProvider theme={theme}>
      <Helmet title={product.title}>
        <Section>
          <SectionBody>
            <ProductView product={product} />
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>Khám phá thêm</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {relatedProducts.map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                  type={props.match.params.type}
                />
              ))}
            </Grid>
          </SectionBody>
        </Section>
      </Helmet>
    </ChakraProvider>

  );
};

export default Product;
