import React from 'react'
import accessoriesData from '../../assets/fake-data/accessories'
import Helmet from "../../components/templates/Helmet/Helmet";
import Section, {
    SectionBody,
    SectionTitle,
} from "../../components/organisms/Section/Section";
import Grid from "../../components/molecules/Grid/Grid";
import ProductCard from "../../components/organisms/ProductCard/ProductCard";
import ProductView from "../../components/templates/ProductView/ProductView";

const AccessoriesDetail = (props) => {
    const accessory = accessoriesData.getAccessoryBySlug(props.match.params.slug);
    
    const relatedAccessories = accessoriesData.getAccessories(2);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [accessory]);

    return (
        <Helmet title={accessory.title}>
            <Section>
                <SectionBody>
                    <ProductView product={accessory} />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>Khám phá thêm</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {relatedAccessories.map((item, index) => (
                            <ProductCard
                                key={index}
                                img01={item.image01}
                                img02={item.image02}
                                name={item.title}
                                price={Number(item.price)}
                                slug={item.slug}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    );
}

export default AccessoriesDetail