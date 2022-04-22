import React from 'react'
import Section, {SectionBody } from '../../components/Section/Section'
import Grid from '../../components/Grid/Grid'
import ProductCard from '../../components/ProductCard/ProductCard'
import accessoriesData from '../../assets/fake-data/accessories'

const Accessories = () => {
    return (
        <Section>
            <SectionBody>
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                >
                    {
                        accessoriesData.getAccessories(4).map((item, index) => (
                            <ProductCard
                                key={index}
                                img01={item.image01}
                                img02={item.image02}
                                name={item.title}
                                price={Number(item.price)}
                                slug={item.slug}
                            />
                        ))
                    }
                </Grid>
            </SectionBody>
        </Section>
    )
}

export default Accessories